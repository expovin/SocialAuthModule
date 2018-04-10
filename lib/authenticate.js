var passport = require('passport');
var https = require('https');
var fs = require('fs');
var LocalStrategy = require('passport-local').Strategy;
var log = require('../lib/logHandler');
var cfg = require('../config');

passport.use(new LocalStrategy(
    function(username, password, done) {
      log.debug("Now in Authenticate method LocalStrategy, username: ",username);

      log.debug("username :",username);
      log.debug("password :", password);

      /** Here need to implement the user/password check
       *  This simple example just verify admin/admin as crdential
       */

      checkCredential(username, password)
      .then( result => {
        if(result){
          getQlikSenseToken()
          .then( qstoken =>{
            log.info("Authenticate QSToken : ",qstoken);
            done(null, {user:username, role:"Ordinary", QSToken: qstoken});
          }, error =>{
            log.error("Error : ",error);
            done(error, false);
          })
          .catch (error =>{
            log.error("Error : ",error);
            done(error, false);
          })
        }        
        else{
          log.info("Authentication error. User/password not correct");
          done("Error authentication. User/Password not valid", false);
        } 
      })
    }
));


function checkCredential (username, password){

  return new Promise ( (fulfill, reject ) => {
    log.debug("Check credential user: ",username," password : ",password);
    if(username === 'admin' && password === "admin")
      fulfill(true);
    else
      fulfill(false);
  })
}

function getQlikSenseToken(){

  var key="1234567890acbdef"

  var options = {
    hostname: 'win-qn2klt7k35',
    port: 4243,
    path: '/qps/ctkt/ticket?xrfkey='+key,
    method: 'POST',
    rejectUnauthorized: false, 
    headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json',
        'x-qlik-xrfkey' : key
    },
    cert: fs.readFileSync(cfg.QSCerts.cert),
    key : fs.readFileSync(cfg.QSCerts.key),
    passphrase : cfg.QSCerts.passphrase
  };

  var bodyData = {
    UserDirectory : "win-qn2klt7k35j",
    UserId : "qlik"
  };

  log.debug(" --------->> Sending requet to QS : Option : ",options);
  log.debug(" --------->> Body data : ",bodyData);

  return new Promise ( (fulfill, reject) =>{

    var req = https.request(options, function(res) {
      log.debug(' --------->> Status: ' + res.statusCode);
      log.debug(' --------->> Headers: ' + JSON.stringify(res.headers));

      res.on('data', function (body) {
        log.debug(' --------->> Body: ' + body);
        fulfill(JSON.parse(body));
      });
    });

    req.on('error', function(e) {
      reject(e.message);
    });

    req.write(JSON.stringify(bodyData));
    req.end();
  })
}