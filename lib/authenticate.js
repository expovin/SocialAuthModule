var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var log = require('../lib/logHandler');

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
          log.info("Authentication succede");
          return done(null, username);
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