var express = require('express');
var passport = require('passport');
var Verify = require('../lib/verify');

var log = require('../lib/logHandler');

var router = express.Router();

router.route('/')
/** Return all the supported authentication */
.get( (req, res, next) => {

    res.status(200).json({Return : 'OK'});
})

router.route('/info')
.get( (req, res, next) => {

    res.status(200).json({status : 'OK', methods : ['local']});
})
/** Local Authentication */
router.route('/local')
// Return some information on the use
.get(Verify.verifyOrdinaryUser, (req, res, next) => {

    res.status(200).json({Return : 'You are correctly logged in as Ordinary user'});
})
// Actual Local implementation
.post( (req, res, next) => {

    log.debug("Request local authentication, user : ",req.body.username);
    passport.authenticate('local', function(err, user) {
        // Need to manage the error handling
        if (err){
            log.error("Error authentication module local policy: ",err);
            return res.status(401).json({msg: "Authentication error"});
        }  

        if(!user) {
            // Return authentication error. Trace on log
            log.warn("Authentication error for user ",user);
            return res.status(401).json({err: "info"});
        }

        var token = Verify.getToken({"username":user,"type":"Ordinary"});
        log.debug("Token : ",token);

        res.status(200)
        .json({ success : true, "token" : token })
    })(req,res,next);
})


/** Offie 365 Authentication */
router.route('/o365')
// Return some information on the use
.get( (req, res, next) => {
    res.status(200).json({Return : 'Info to O365 Authentication policy'});
})
// Actual Local implementation
.post( (req, res, next) => {
    log.info("Called o365 Strategy!");
    res.status(200).json({Return : 'Info to Local Authentication policy'});
})

// Callback from o365
router.route('/o365/AuthToken')
.get(function(req, res, next){ 

})




module.exports = router;