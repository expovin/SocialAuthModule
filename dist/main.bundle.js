webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("./src/app/app-routing/routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__routes__["a" /* routes */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas_canvas_component__ = __webpack_require__("./src/app/canvas/canvas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__private_page_private_page_component__ = __webpack_require__("./src/app/private-page/private-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__public_page_public_page_component__ = __webpack_require__("./src/app/public-page/public-page.component.ts");



var routes = [
    { path: 'canvas', component: __WEBPACK_IMPORTED_MODULE_0__canvas_canvas_component__["a" /* CanvasComponent */] },
    { path: 'private', component: __WEBPACK_IMPORTED_MODULE_1__private_page_private_page_component__["a" /* PrivatePageComponent */] },
    { path: 'public', component: __WEBPACK_IMPORTED_MODULE_2__public_page_public_page_component__["a" /* PublicPageComponent */] },
    { path: '', redirectTo: 'canvas', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>\n\n<!--<app-canvas></app-canvas> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal__ = __webpack_require__("./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_app_routing_module__ = __webpack_require__("./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nav_bar_nav_bar_component__ = __webpack_require__("./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__canvas_canvas_component__ = __webpack_require__("./src/app/canvas/canvas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_data_config_service__ = __webpack_require__("./src/app/shared/data-config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__public_page_public_page_component__ = __webpack_require__("./src/app/public-page/public-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__private_page_private_page_component__ = __webpack_require__("./src/app/private-page/private-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__canvas_canvas_component__["a" /* CanvasComponent */],
                __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__public_page_public_page_component__["a" /* PublicPageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__private_page_private_page_component__["a" /* PrivatePageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot([]),
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal__["BootstrapModalModule"].forRoot({ container: document.body })
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__shared_data_config_service__["a" /* DataConfigService */], __WEBPACK_IMPORTED_MODULE_6_ngx_cookie_service__["a" /* CookieService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/canvas/canvas.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n    margin-top : 50px;\n}\n\np , li {\n    color:#999;\n}\n\nsmall {\n    font-size: 10px;\n}"

/***/ }),

/***/ "./src/app/canvas/canvas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div [hidden]=\"error\" class=\"alert alert-success\" role=\"alert\">\n        <strong>Well done!</strong> You are logged in. <br> <small>{{info.Token}} <br> QS Ticket : {{info.QSTicket}}</small>\n    </div>\n\n    <p>\n        This page shows how the authentication module works. It use the passport framework, you\n        can find more information here <a href=\"http://www.passportjs.org\">http://www.passportjs.org</a>.\n        This example implement only the local strategy, simulating the standard way a web application check\n        the user credential during the authentication phase.\n        This example check hardcoded users/password. In a real life situation it would get information from an \n        external source, such as a database.  \n        The users implemented here are:\n    </p>\n    <ul>\n        <li>admin/admin for Admin role</li>\n        <li>user/user for ordinary user role</li>\n    </ul>\n</div>\n\n<div class=\"container\">\n\n    <div [hidden]=\"!error\" class=\"alert alert-danger\" role=\"alert\">\n            <strong>Error!</strong> You are logged out.\n        </div>\n                <dl class=\"row\">\n                    <dt class=\"col-sm-3\">Status</dt>\n                    <dd class=\"col-sm-9\">: {{info.Status}}</dd>\n                \n                    <dt class=\"col-sm-3\">Code</dt>\n                    <dd class=\"col-sm-9\">: {{info.Code}}</dd>\n                \n                    <dt class=\"col-sm-3\">Message</dt>\n                    <dd class=\"col-sm-9\">: {{info.Message}}</dd>\n\n                    <dt [hidden]=\"error\" class=\"col-sm-3\">User</dt>\n                    <dd [hidden]=\"error\" class=\"col-sm-9\">: {{info.username}}</dd>\n\n                    <dt [hidden]=\"error\" class=\"col-sm-3\">Type</dt>\n                    <dd [hidden]=\"error\" class=\"col-sm-9\">: {{info.type}}</dd>\n                \n                    <dt [hidden]=\"error\" class=\"col-sm-3\">Release time</dt>\n                    <dd [hidden]=\"error\" class=\"col-sm-9\">: {{info.tokenReleaseTime}} ({{info.iat}})</dd>\n                \n                    <dt [hidden]=\"error\" class=\"col-sm-3\">Expiration time</dt>\n                    <dd [hidden]=\"error\" class=\"col-sm-9\">: {{info.tokenExpiryTime}} ({{info.exp}})</dd>\n\n                    <dt class=\"col-sm-3\">QS Ticket</dt>\n                    <dd class=\"col-sm-9\">: {{info.QSTicket}}</dd>\n                </dl>\n\n</div>\n"

/***/ }),

/***/ "./src/app/canvas/canvas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_config_service__ = __webpack_require__("./src/app/shared/data-config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CanvasComponent = /** @class */ (function () {
    function CanvasComponent(dataConfigService, route, cookieService) {
        this.dataConfigService = dataConfigService;
        this.route = route;
        this.cookieService = cookieService;
        this.info = { Status: "",
            Code: "",
            Token: "",
            type: "",
            iat: "",
            exp: "",
            Message: "",
            username: "",
            tokenReleaseTime: "",
            tokenExpiryTime: "",
            QSTicket: ""
        };
        this.errMessage = { status: "", text: "" };
        this.error = false;
    }
    CanvasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errMessage = { status: "", text: "" };
        var token = this.cookieService.get('SocialAuthModuleToken');
        console.log("Cookie token: ", token);
        this.dataConfigService.chkLocal(token)
            .subscribe(function (data) {
            console.log("CheckLocal Auth: ", data);
            if (!data.success) {
                console.log("You are logged out");
                _this.error = true;
                _this.info.Status = "You are logged out";
                _this.info.Code = data.status;
                _this.info.Message = data.msg;
                _this.errMessage.status = data.status;
                _this.errMessage.text = data.msg;
            }
            else {
                var iatDate = new Date(data.decoded.iat * 1000);
                var day = "0" + iatDate.getDay();
                var month = "0" + iatDate.getMonth();
                var year = iatDate.getFullYear();
                var hours = "0" + iatDate.getHours();
                var minutes = "0" + iatDate.getMinutes();
                var seconds = "0" + iatDate.getSeconds();
                _this.info.tokenReleaseTime = day.substr(-2) + "/" + month.substr(-2) + "/" + year + " @"
                    + hours.substr(-2) + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
                var expDate = new Date(data.decoded.exp * 1000);
                var day = "0" + expDate.getDay();
                var month = "0" + expDate.getMonth();
                var year = expDate.getFullYear();
                var hours = "0" + expDate.getHours();
                var minutes = "0" + expDate.getMinutes();
                _this.info.tokenExpiryTime = day.substr(-2) + "/" + month.substr(-2) + "/" + year + " @"
                    + hours.substr(-2) + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
                console.log("You are logged in, token: ", token);
                _this.error = false;
                _this.info.Status = "You are logged in";
                _this.info.Code = data.status;
                _this.info.Message = "Success!";
                _this.info.Token = token;
                _this.info.username = data.decoded.username;
                _this.info.iat = data.decoded.iat;
                _this.info.type = data.decoded.type;
                _this.info.exp = data.decoded.exp;
                _this.info.QSTicket = data.decoded.QSTicket;
                _this.token = token;
            }
        }, function (error) {
            console.log("Passato dall'errore ", error);
            _this.error = true;
            _this.info.Status = "You are logged out";
            _this.info.Code = error.status;
            _this.info.Message = error.statusText;
            _this.errMessage.status = error.status;
            _this.errMessage.text = error.statusText;
        });
    };
    CanvasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-canvas',
            template: __webpack_require__("./src/app/canvas/canvas.component.html"),
            styles: [__webpack_require__("./src/app/canvas/canvas.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_data_config_service__["a" /* DataConfigService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_data_config_service__["a" /* DataConfigService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]])
    ], CanvasComponent);
    return CanvasComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "\n.panel-login {\n\tborder-color: #ccc;\n\t-webkit-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);\n\tbox-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);\n}\n.panel-login>.panel-heading {\n\tcolor: #00415d;\n\tbackground-color: #fff;\n\tborder-color: #fff;\n\ttext-align:center;\n}\n.panel-login>.panel-heading a{\n\ttext-decoration: none;\n\tcolor: #666;\n\tfont-weight: bold;\n\tfont-size: 15px;\n\t-webkit-transition: all 0.1s linear;\n\ttransition: all 0.1s linear;\n}\n.panel-login>.panel-heading a.active{\n\tcolor: #029f5b;\n\tfont-size: 18px;\n}\n.panel-login>.panel-heading hr{\n\tmargin-top: 10px;\n\tmargin-bottom: 0px;\n\tclear: both;\n\tborder: 0;\n\theight: 1px;\n\tbackground-image: -o-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));\n}\n.panel-login input[type=\"text\"],.panel-login input[type=\"email\"],.panel-login input[type=\"password\"] {\n\theight: 45px;\n\tborder: 1px solid #ddd;\n\tfont-size: 16px;\n\t-webkit-transition: all 0.1s linear;\n\ttransition: all 0.1s linear;\n}\n.panel-login input:hover,\n.panel-login input:focus {\n\toutline:none;\n\t-webkit-box-shadow: none;\n\tbox-shadow: none;\n\tborder-color: #ccc;\n}\n.btn-login {\n\tbackground-color: #59B2E0;\n\toutline: none;\n\tcolor: #fff;\n\tfont-size: 14px;\n\theight: auto;\n\tfont-weight: normal;\n\tpadding: 14px 0;\n\ttext-transform: uppercase;\n\tborder-color: #59B2E6;\n}\n.btn-login:hover,\n.btn-login:focus {\n\tcolor: #fff;\n\tbackground-color: #53A3CD;\n\tborder-color: #53A3CD;\n}\n.forgot-password {\n\ttext-decoration: underline;\n\tcolor: #888;\n}\n.forgot-password:hover,\n.forgot-password:focus {\n\ttext-decoration: underline;\n\tcolor: #666;\n}\n.btn-register {\n\tbackground-color: #1CB94E;\n\toutline: none;\n\tcolor: #fff;\n\tfont-size: 14px;\n\theight: auto;\n\tfont-weight: normal;\n\tpadding: 14px 0;\n\ttext-transform: uppercase;\n\tborder-color: #1CB94A;\n}\n.btn-register:hover,\n.btn-register:focus {\n\tcolor: #fff;\n\tbackground-color: #1CA347;\n\tborder-color: #1CA347;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n        <!--\n       <div class=\"modal-header\">\n         <button type=\"button\" class=\"close\" (click)=\"close()\" >&times;</button>\n         <h4 class=\"modal-title\">{{title || 'Confirm'}}</h4>\n       </div>\n    -->\n       <div class=\"modal-body\">\n        <div class=\"container\">\n                        <div class=\"panel-heading\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <a href=\"#\" class=\"active\" id=\"login-form-link\">Login</a>\n                                </div>\n                                <!--\n                                <div class=\"col-md-6\">\n                                    <a href=\"#\" id=\"register-form-link\">Register</a>\n                                </div>\n                                -->\n                            </div>\n                            <hr>\n                        </div>\n                        <div class=\"panel-body\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <form (ngSubmit)=\"onSubmit()\">\n                                            <div class=\"form-group\">\n                                              <input    type=\"text\" \n                                                        class=\"form-control\" \n                                                        placeholder=\"Username\"\n                                                        [(ngModel)]=\"credential.username\"  \n                                                        name=\"username\"\n                                                        required>\n                                            </div>\n                                            <div class=\"form-group\">\n                                              <input    type=\"password\" \n                                                        class=\"form-control\" \n                                                        placeholder=\"password\"  \n                                                        [(ngModel)]=\"credential.password\"\n                                                        name=\"password\">\n                                            </div>\n                                            <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n                                            <button type=\"submit\" class=\"btn btn-danger\" (click)=\"close()\">Cancel</button>\n                                    </form>\n\n                                </div>\n                            </div>\n                        </div>\n        </div>\n       </div>\n     </div>\n  </div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__ = __webpack_require__("./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_credential__ = __webpack_require__("./src/app/user-credential.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_data_config_service__ = __webpack_require__("./src/app/shared/data-config.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(dialogService, dataConfigService, cookieService, location) {
        var _this = _super.call(this, dialogService) || this;
        _this.dataConfigService = dataConfigService;
        _this.cookieService = cookieService;
        _this.location = location;
        _this.loginError = false;
        _this.credential = new __WEBPACK_IMPORTED_MODULE_4__user_credential__["a" /* UserCredential */]("", "");
        return _this;
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("Submit form : ", this.credential);
        this.dataConfigService.loginLocal(this.credential)
            .subscribe(function (result) {
            console.log("Result : ", result);
            _this.cookieService.set('SocialAuthModuleToken', result.token);
            location.reload();
            _this.close();
        }, function (error) {
            _this.loginError = true;
            console.log("Error : ", error);
            _this.close();
        });
    };
    LoginComponent.prototype.confirm = function () {
        // we set dialog result as true on click on confirm button,
        // then we can get dialog result from caller code
        this.result = true;
        this.close();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["DialogService"],
            __WEBPACK_IMPORTED_MODULE_5__shared_data_config_service__["a" /* DataConfigService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]])
    ], LoginComponent);
    return LoginComponent;
}(__WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["DialogComponent"]));



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports) {

module.exports = "span {\n    font-size:3em; \n    color:\"Tomato\";\n    margin-left: 25px;\n}"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a href=\"canvas\" class=\"navbar-brand\"><img src=\"assets/img/qlik-sense.png\" width=\"80px\"/>Authentication Module</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"public\">Public <!--<span class=\"sr-only\">(current)</span>--></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"private\">Privatate</a>\n      </li>\n    </ul>\n  </div>\n\n\n  <div [hidden]=\"logStatus\" class=\"logIcon\">\n    <span class=\"fa fa-sign-in\" aria-hidden=\"true\" (click)=\"openLoginModal()\"></span>\n  </div>\n\n  <div [hidden]=\"!logStatus\" class=\"logIcon\">\n        <h5>Wellcome {{username}} <span class=\"fa fa-sign-out\" aria-hidden=\"true\" (click)=\"logOut()\"></span> </h5>\n  </div>\n\n</nav>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_data_config_service__ = __webpack_require__("./src/app/shared/data-config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(dialogService, dataConfigService, cookieService, location) {
        this.dialogService = dialogService;
        this.dataConfigService = dataConfigService;
        this.cookieService = cookieService;
        this.location = location;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.cookieService.get('SocialAuthModuleToken');
        this.dataConfigService.chkLocal(token)
            .subscribe(function (data) {
            console.log("CheckLocal Auth: ", data);
            if (!data.success) {
                console.log("You are logged out");
                _this.logStatus = false;
            }
            else {
                console.log("You are logged in, token: ", token);
                _this.username = data.decoded.username;
                _this.logStatus = true;
            }
        }, function (error) {
            _this.logStatus = false;
        });
    };
    NavBarComponent.prototype.logOut = function () {
        console.log("Logging Out");
        var token = this.cookieService.delete('SocialAuthModuleToken', '');
        location.reload();
    };
    NavBarComponent.prototype.openLoginModal = function () {
        console.log("Open Login Modal");
        this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */], {
            title: "Astract",
            message: "Messaggio di esempio"
        })
            .subscribe(function (isConfirmed) {
            if (isConfirmed) {
                console.log('accepted');
            }
            else {
                console.log('declined');
            }
        }, function (err) {
            console.log("Error : ", err);
        });
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__("./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("./src/app/nav-bar/nav-bar.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__shared_data_config_service__["a" /* DataConfigService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"],
            __WEBPACK_IMPORTED_MODULE_5__shared_data_config_service__["a" /* DataConfigService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/private-page/private-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/private-page/private-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>This is a Private Page</h1>\n\n  <div [hidden]=\"!error\" class=\"alert alert-danger\" role=\"alert\">\n      <strong>Error {{code}}!</strong> {{content}}\n  </div>\n\n  <div [hidden]=\"error\">\n      <p>{{content}}</p>\n\n      <dl class=\"row\">\n        <dt class=\"col-sm-3\">QS Ticket</dt>\n        <dd class=\"col-sm-9\">: {{QSTicket}}</dd>\n\n        <dt class=\"col-sm-3\">url</dt>\n        <dd class=\"col-sm-9\">: {{url}}</dd>\n    </dl>\n\n<!--      <iframe [src]=\"'http://win-qn2klt7k35j/ctkt/single/?appid=0b12d854-85e1-45b7-992b-7d6e1d03f887&obj=NaKQwM&opt=currsel&select=clearall&Ticket=' + QSTicket\" style='border:none;width:100%;height:600px;'></iframe> -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/private-page/private-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivatePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_config_service__ = __webpack_require__("./src/app/shared/data-config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrivatePageComponent = /** @class */ (function () {
    function PrivatePageComponent(dataConfigService, cookieService) {
        this.dataConfigService = dataConfigService;
        this.cookieService = cookieService;
        this.url = "http://win-qn2klt7k35j/ctkt/single/?appid=0b12d854-85e1-45b7-992b-7d6e1d03f887&obj=NaKQwM&opt=currsel&select=clearall&Ticket=";
    }
    PrivatePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.cookieService.get('SocialAuthModuleToken');
        this.dataConfigService.chkLocal(token)
            .subscribe(function (data) {
            _this.QSTicket = data.decoded.QSTicket;
            _this.url += data.decoded.QSTicket;
        });
        this.dataConfigService.getPrivateContent(token)
            .subscribe(function (data) {
            console.log("CheckLocal Auth: ", data);
            if (data.success) {
                console.log("Tutto ok");
                _this.error = false;
                _this.content = data.content;
            }
            else {
                console.log("Errore");
                _this.error = true;
                _this.code = data.status;
                _this.content = data.msg;
            }
        }, function (error) {
            console.log("Error catch : ", error);
            _this.error = true;
            _this.code = error.status;
            _this.content = error.statusText;
        });
    };
    PrivatePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-private-page',
            template: __webpack_require__("./src/app/private-page/private-page.component.html"),
            styles: [__webpack_require__("./src/app/private-page/private-page.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_data_config_service__["a" /* DataConfigService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_data_config_service__["a" /* DataConfigService */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */]])
    ], PrivatePageComponent);
    return PrivatePageComponent;
}());



/***/ }),

/***/ "./src/app/public-page/public-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/public-page/public-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>This is a Public Page</h1>\n  \n    <div>\n        <p>{{content}}</p>\n    </div>\n  \n  </div>"

/***/ }),

/***/ "./src/app/public-page/public-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_config_service__ = __webpack_require__("./src/app/shared/data-config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PublicPageComponent = /** @class */ (function () {
    function PublicPageComponent(dataConfigService) {
        this.dataConfigService = dataConfigService;
    }
    PublicPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("You are in the public Area");
        this.dataConfigService.getPublicContent()
            .subscribe(function (data) {
            console.log("CheckLocal Auth: ", data);
            if (data.success) {
                _this.error = false;
                _this.content = data.content;
            }
            else {
                _this.error = true;
                _this.code = data.status;
                _this.content = data.msg;
            }
        });
    };
    PublicPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-public-page',
            template: __webpack_require__("./src/app/public-page/public-page.component.html"),
            styles: [__webpack_require__("./src/app/public-page/public-page.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_data_config_service__["a" /* DataConfigService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_data_config_service__["a" /* DataConfigService */]])
    ], PublicPageComponent);
    return PublicPageComponent;
}());



/***/ }),

/***/ "./src/app/shared/data-config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_publishReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/publishReplay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataConfigService = /** @class */ (function () {
    function DataConfigService(http) {
        this.http = http;
    }
    DataConfigService.prototype.jsonParse = function (res) {
        console.log(res);
        var body = res.json();
        return body || {};
    };
    DataConfigService.prototype.getInfo = function () {
        return this.http.get('/auth/info').map(this.jsonParse);
    };
    DataConfigService.prototype.loginLocal = function (credentials) {
        return this.http.post('/auth/local', credentials).map(this.jsonParse);
    };
    DataConfigService.prototype.chkLocal = function (token) {
        return this.http.get('/auth/local?token=' + token).map(this.jsonParse);
    };
    DataConfigService.prototype.getPrivateContent = function (token) {
        return this.http.get('/auth/private?token=' + token).map(this.jsonParse);
    };
    DataConfigService.prototype.getPublicContent = function () {
        return this.http.get('/auth/public').map(this.jsonParse);
    };
    DataConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataConfigService);
    return DataConfigService;
}());



/***/ }),

/***/ "./src/app/user-credential.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCredential; });
var UserCredential = /** @class */ (function () {
    function UserCredential(username, password) {
        this.username = username;
        this.password = password;
    }
    return UserCredential;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map