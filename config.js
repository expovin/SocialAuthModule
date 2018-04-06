module.exports = {

    host: "localhost",
    port: "3000",
    ports:"3443",

    /** Session Secret Key */
    secret : '!5:~9F{W>s_PUIgW(bS/t`xRsV=Rv$CO|u_LzA,XeWmWq',
    TokenExpirees : 3600 * 1,

    /** HTTPs Certificate path files */
    cert : {
        pfx : './certs/mycert.pfx',
        passphrase: 'secret',

    },
    

    /** Log section for the standard log the parameters are:
     *  OutputFileGeneral : The complete path the the log file. 
     *  DefaultLevel : The default log level. Level supported are (Trace, Debug, Info, Warn, Error, Fatal)
     *  maxLogSize : The maximum size in byte for the log file before the file rotation
     *  backups : The maximun number of log files to keep after the rotation
     *  compress : When true the backupped log file will be compressed
     *  appender : The log file appender, will assume the following values:
     *      default --> The log will be write only on the file
     *      out     --> The log will be write only on the standard output (console)
     *      both    --> The log will be write on both, file and console
    */  
    Log : {
        OutputFileGeneral : "./logs/general.log",
        DefaultLevel : "debug",
        maxLogSize : 10485760,
        backups : 12,
        compress : true,
        appender:"both"                                     
    },

    /** o365 Section */
    o365: {
        authority: "https://login.microsoftonline.com/common",
        authorize_endpoint: "/oauth2/v2.0/authorize",
        token_endpoint: "/oauth2/v2.0/token",
        client_id:"ed7b80e0-8197-4fd2-85d4-6c03a920fb90",
        client_secret : "lidriPB19)rtOJOAT332*^{",
        redirect_uri: "https://localhost:3000/auth/o365/AuthTocken", 
        scope: "user.read offline_access"
    }
}