var jwt = require('jsonwebtoken'); 
var config = require('../config');
var log = require('./logHandler');

var SECRET = config.secret;
/** This function return the actual token after the user logged in */
exports.getToken = function (user) {
    return jwt.sign(user, SECRET, {
        expiresIn: config.TokenExpirees
    });
};

/** This function check if the token is still valid and belong to the ordinary user */
exports.verifyOrdinaryUser = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {
        jwt.verify(token, SECRET, function (err, decoded) {
            if (err) {
                var err = new Error('You are not authenticated!');
                err.status = 401;
                log.error("Token verification error. ",err);
                return res.json({   success:false, 
                                    status:"401",
                                    msg:"Token verification error.",
                                    error:err});
            } else {
                log.debug("Token verified : ",decoded);
                if((decoded.type === "Ordinary")){
                    req.decoded = decoded;
                    req.user=true;
                    req.process=false;
                    log.debug("Ordinary user");
                    return res.json({   success:true, 
                        status:"200",
                        decoded:decoded});
                }
                else{
                    req.user=false;
                    req.process=true;    
                    log.debug("Profile does not fit the ordinary user");                
                    return res.json({success:false, status:"405",msg:"Profile does not fit the ordinary user"});
                }
            }
        });
    } else {
        var err = new Error('No token provided!');
        err.status = 403;
        log.error("Error Token not provided");
        return res.json({success:false, status:"403",msg:"No Token Provided"}); //next(err);
    }
};