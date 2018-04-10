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

    res.status(200).json({success : true, methods : ['local']});
})


router.route('/secure')
.get(Verify.verifyOrdinaryUser, (req, res, next) => {
    res.status(200).json({success : true, content : "This content is visible only if you are logged in!"});
})

router.route('/public')
.get((req, res, next) => {
    res.status(200).json({success : true, content : "This is public content everyone can Browse, even if you are not logged in"});
})

router.route('/private')
.get(Verify.verifyOrdinaryUser, (req, res, next) => {
    res.status(200).json({success : true, content : "This is private content, you can brows only if you are not logged in!"});
})

/** Local Authentication */
router.route('/local')
// Return some information on the use
.get(Verify.verifyOrdinaryUser, (req, res, next) => {

    res.status(200).json({success: true, user : 'You are correctly logged in as Ordinary user',decoded:req.decoded});
})
// Actual Local implementation
.post( (req, res, next) => {

    log.debug("Request local authentication, user : ",req.body.username);
    passport.authenticate('local', function(err, result) {
        log.debug("Auth passport return result : ",result);
        // Need to manage the error handling
        if (err){
            log.error("Error authentication module local policy: ",err);
            return res.status(401).json({msg: "Authentication error"});
        }  

        if(!result.user) {
            // Return authentication error. Trace on log
            log.warn("Authentication error for user ",result.user);
            return res.status(401).json({err: "info"});
        }

        var token = Verify.getToken({"username":result.user,"role":result.role, "QSTicket":result.QSToken.Ticket});

        res.status(200).json({ success : true, token : token, QSTicket: result.QSToken.Ticket});
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