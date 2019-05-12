(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_posts_view_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/posts/view/view.component */ "./src/app/views/posts/view/view.component.ts");
/* harmony import */ var _views_blog_create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/blog/create/create.component */ "./src/app/views/blog/create/create.component.ts");
/* harmony import */ var _views_blog_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/blog/blog.component */ "./src/app/views/blog/blog.component.ts");
/* harmony import */ var _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/auth/login/login.component */ "./src/app/views/auth/login/login.component.ts");
/* harmony import */ var _views_auth_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/auth/register/register.component */ "./src/app/views/auth/register/register.component.ts");
/* harmony import */ var _views_auth_callback_callback_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/auth/callback/callback.component */ "./src/app/views/auth/callback/callback.component.ts");
/* harmony import */ var _guards_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/authentication/auth.guard */ "./src/app/guards/authentication/auth.guard.ts");











var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'posts', children: [
            { path: '', redirectTo: 'view', pathMatch: 'full' },
            { path: 'view/:id', component: _views_posts_view_view_component__WEBPACK_IMPORTED_MODULE_4__["ViewComponent"] }
        ] },
    { path: 'blog', component: _views_blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"], children: [
            { path: '', redirectTo: 'create', pathMatch: 'full' },
            { path: 'create', component: _views_blog_create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"] },
            { path: 'auth', children: [
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: 'login', component: _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
                    { path: 'register', component: _views_auth_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] }
                ] },
        ] },
    { path: 'callback', component: _views_auth_callback_callback_component__WEBPACK_IMPORTED_MODULE_9__["CallbackComponent"], canActivate: [_guards_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'blog';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm5/ant-design-icons-angular-icons.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_blog_create_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/blog/create/create.component */ "./src/app/views/blog/create/create.component.ts");
/* harmony import */ var _views_posts_view_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/posts/view/view.component */ "./src/app/views/posts/view/view.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_blog_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/blog/blog.component */ "./src/app/views/blog/blog.component.ts");
/* harmony import */ var _classes_form_parser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./classes/form-parser */ "./src/app/classes/form-parser.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _views_auth_register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/auth/register/register.component */ "./src/app/views/auth/register/register.component.ts");
/* harmony import */ var _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/auth/login/login.component */ "./src/app/views/auth/login/login.component.ts");
/* harmony import */ var _views_auth_callback_callback_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/auth/callback/callback.component */ "./src/app/views/auth/callback/callback.component.ts");
/* harmony import */ var _classes_token_getter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./classes/token-getter */ "./src/app/classes/token-getter.ts");







// Import what you need. RECOMMENDED. ✔️














var icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["AccountBookFill"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["LockOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["AlertFill"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["TeamOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_7__["UserOutline"]];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _views_blog_create_create_component__WEBPACK_IMPORTED_MODULE_10__["CreateComponent"],
                _views_posts_view_view_component__WEBPACK_IMPORTED_MODULE_11__["ViewComponent"],
                _views_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _views_blog_blog_component__WEBPACK_IMPORTED_MODULE_13__["BlogComponent"],
                _views_auth_register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
                _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _views_auth_callback_callback_component__WEBPACK_IMPORTED_MODULE_18__["CallbackComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: new _classes_token_getter__WEBPACK_IMPORTED_MODULE_19__["TokenGetter"]().value,
                        whitelistedDomains: ['localhost:3030'],
                    }
                })
            ],
            providers: [
                { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NZ_ICONS"], useValue: icons },
                _classes_form_parser__WEBPACK_IMPORTED_MODULE_14__["FormParser"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/form-parser.ts":
/*!****************************************!*\
  !*** ./src/app/classes/form-parser.ts ***!
  \****************************************/
/*! exports provided: FormParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormParser", function() { return FormParser; });
var FormParser = /** @class */ (function () {
    function FormParser() {
    }
    /**
    *  Serialize all form data into a query string
    * @param  {Node}   form The form to serialize
    * @return {Object} The JSON form data
    */
    FormParser.prototype.parse = function (form) {
        // Setup our serialized data
        var serialized = [];
        // Loop through each field in the form
        for (var i = 0; i < form.elements.length; i++) {
            var field = form.elements[i];
            // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
            if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button')
                continue;
            // If a multi-select, get all selections
            if (field.type === 'select-multiple') {
                for (var n = 0; n < field.options.length; n++) {
                    if (!field.options[n].selected)
                        continue;
                    serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
                }
            }
            // Convert field data to a query string
            else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
                serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
            }
        }
        var queryString = serialized.join('&');
        if (queryString.indexOf('?') > -1) {
            queryString = queryString.split('?')[1];
        }
        var pairs = queryString.split('&');
        var result = {};
        pairs.forEach(function (pair) {
            pair = pair.split('=');
            result[pair[0]] = decodeURIComponent(pair[1] || '');
        });
        return result;
    };
    ;
    return FormParser;
}());



/***/ }),

/***/ "./src/app/classes/token-getter.ts":
/*!*****************************************!*\
  !*** ./src/app/classes/token-getter.ts ***!
  \*****************************************/
/*! exports provided: TokenGetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenGetter", function() { return TokenGetter; });
var TokenGetter = /** @class */ (function () {
    function TokenGetter() {
    }
    TokenGetter.prototype.value = function () {
        return window.localStorage['token'];
    };
    return TokenGetter;
}());



/***/ }),

/***/ "./src/app/guards/authentication/auth.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/guards/authentication/auth.guard.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(route) {
        this.route = route;
        this._window = window;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        // const isAuthorized: Promise<boolean> = new Promise((resolve, reject) => {
        this.route.queryParams.subscribe(function (params) {
            console.log(params);
            if (params['token']) {
                if (!_this._window.localStorage['token']) {
                    _this._window.localStorage['token'] = params['token'];
                }
            }
        });
        // });
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth/authentication.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/auth/authentication.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        var _this = this;
        this.http = http;
        this._window = window;
        this._authConfig = {
            isLoggedIn: false
        };
        this.authConfig = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this._authConfig);
        this.authConfig.subscribe(function (authConfig) {
            _this._authConfig = authConfig;
        });
        // iniitalize user logged in state
        this.checkLoggedIn();
    }
    AuthenticationService.prototype.saveToken = function (token) {
        this._window.localStorage['token'] = token.accessToken;
        this.updateLoggedInStatus(true);
    };
    AuthenticationService.prototype.saveUserId = function (user) {
        this._window.localStorage['uid'] = user._id;
    };
    AuthenticationService.prototype.getUserId = function () {
        return this._window.localStorage['uid'];
    };
    AuthenticationService.prototype.googleLogin = function () {
        return this._window.location.href = (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].host + '/auth/google/callback');
    };
    AuthenticationService.prototype.localRegister = function (user) {
        console.log(user);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].host + '/users', user);
    };
    AuthenticationService.prototype.checkLoggedIn = function () {
        var isLoggedIn = this._window.localStorage['token'] ? true : false;
        this.updateLoggedInStatus(isLoggedIn);
    };
    AuthenticationService.prototype.updateLoggedInStatus = function (status) {
        this._authConfig.isLoggedIn = status;
        this.authConfig.next(this._authConfig);
    };
    AuthenticationService.prototype.logout = function () {
        this._window.localStorage.removeItem('token');
        this._window.localStorage.removeItem('uid');
        this.updateLoggedInStatus(false);
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/blog.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/blog.service.ts ***!
  \******************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth0_angular_jwt_src_jwthelper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt/src/jwthelper.service */ "./node_modules/@auth0/angular-jwt/src/jwthelper.service.js");





var BlogService = /** @class */ (function () {
    function BlogService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
    }
    BlogService.prototype.createPost = function (blogValues) {
        console.log(this.getPayload());
        blogValues.userId = this.getPayload().userId || this.getPayload()._id;
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].host + '/blog-posts', blogValues);
    };
    BlogService.prototype.getPayload = function () {
        return this.jwtHelper.decodeToken(window.localStorage['token']);
    };
    BlogService.prototype.uploadBlogPosters = function (data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].host + '/storage', data);
    };
    BlogService.prototype.uploadBlogPostersRequest = function (req) {
        return this.http.request(req);
    };
    BlogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth0_angular_jwt_src_jwthelper_service__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/services/utility.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/utility.service.ts ***!
  \*********************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");



var UtilityService = /** @class */ (function () {
    function UtilityService(notification) {
        this.notification = notification;
    }
    /**
     *
     * @param {String} type success, info, warning, error
     * @param {String} title
     * @param {String} content
     */
    UtilityService.prototype.createNotification = function (type, title, content) {
        this.notification.create(type, title, content);
    };
    UtilityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzNotificationService"]])
    ], UtilityService);
    return UtilityService;
}());



/***/ }),

/***/ "./src/app/views/auth/callback/callback.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/auth/callback/callback.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  callback works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/auth/callback/callback.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/views/auth/callback/callback.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2F1dGgvY2FsbGJhY2svY2FsbGJhY2suY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/auth/callback/callback.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/auth/callback/callback.component.ts ***!
  \***********************************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/authentication.service */ "./src/app/services/auth/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CallbackComponent = /** @class */ (function () {
    function CallbackComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    CallbackComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/blog/create']);
    };
    CallbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-callback',
            template: __webpack_require__(/*! ./callback.component.html */ "./src/app/views/auth/callback/callback.component.html"),
            styles: [__webpack_require__(/*! ./callback.component.scss */ "./src/app/views/auth/callback/callback.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/views/auth/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/auth/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"validateForm\" class=\"login-form\" (ngSubmit)=\"submitForm()\">\n  <nz-form-item>\n    <nz-form-control>\n      <nz-input-group [nzPrefix]=\"prefixUser\">\n        <input type=\"text\" nz-input formControlName=\"userName\" placeholder=\"Username\" />\n      </nz-input-group>\n      <nz-form-explain *ngIf=\"validateForm.get('userName')?.dirty && validateForm.get('userName')?.errors\"\n        >Please input your username!</nz-form-explain\n      >\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item>\n    <nz-form-control>\n      <nz-input-group [nzPrefix]=\"prefixLock\">\n        <input type=\"password\" nz-input formControlName=\"password\" placeholder=\"Password\" />\n      </nz-input-group>\n      <nz-form-explain *ngIf=\"validateForm.get('password')?.dirty && validateForm.get('password')?.errors\"\n        >Please input your Password!</nz-form-explain\n      >\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item>\n    <nz-form-control>\n      <label nz-checkbox formControlName=\"remember\">\n        <span>Remember me</span>\n      </label>\n      <a class=\"login-form-forgot\" class=\"login-form-forgot\">Forgot password</a>\n      <button nz-button class=\"login-form-button\" [nzType]=\"'primary'\">Log in</button>\n      Or\n      <a href=\"\">register now!</a>\n    </nz-form-control>\n  </nz-form-item>\n</form>\n<ng-template #prefixUser><i nz-icon type=\"user\"></i></ng-template>\n<ng-template #prefixLock><i nz-icon type=\"lock\"></i></ng-template>"

/***/ }),

/***/ "./src/app/views/auth/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/views/auth/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center; }\n  :host ::ng-deep .login-form {\n    width: 34%;\n    margin: 60px 0; }\n  :host ::ng-deep .login-form-forgot {\n    float: right; }\n  :host ::ng-deep .login-form-button {\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29uc3RhbnRlL0Rlc2t0b3AvbGNvbnN0LmpzL2Jsb2cvc3JjL2FwcC92aWV3cy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7RUFKekI7SUFRTSxVQUFVO0lBQ1YsY0FBYyxFQUFBO0VBVHBCO0lBYU0sWUFBWSxFQUFBO0VBYmxCO0lBaUJNLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIDo6bmctZGVlcCB7XG4gICAgLmxvZ2luLWZvcm0ge1xuICAgICAgd2lkdGg6IDM0JTtcbiAgICAgIG1hcmdpbjogNjBweCAwO1xuICAgIH1cblxuICAgIC5sb2dpbi1mb3JtLWZvcmdvdCB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuXG4gICAgLmxvZ2luLWZvcm0tYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/auth/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/auth/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/authentication.service */ "./src/app/services/auth/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this._window = window;
    }
    LoginComponent.prototype.submitForm = function () {
        for (var i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        this.authService.googleLogin();
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.validateForm = this.fb.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            remember: [true]
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/views/auth/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/auth/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/auth/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"validateForm\" #form class=\"login-form\" (ngSubmit)=\"submitForm(form)\">\n    <nz-form-item>\n      <nz-form-control>\n        <nz-input-group [nzPrefix]=\"prefixUser\">\n          <input type=\"email\" nz-input formControlName=\"email\" placeholder=\"Email\" name=\"email\"/>\n        </nz-input-group>\n        <nz-form-explain *ngIf=\"validateForm.get('email')?.dirty && validateForm.get('email')?.errors\"\n          >Email</nz-form-explain\n        >\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-control>\n        <nz-input-group [nzPrefix]=\"prefixLock\">\n          <input type=\"password\" nz-input formControlName=\"password\" placeholder=\"Password\" name=\"password\"/>\n        </nz-input-group>\n        <nz-form-explain *ngIf=\"validateForm.get('password')?.dirty && validateForm.get('password')?.errors\"\n          >Clave</nz-form-explain\n        >\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-control>\n        <label nz-checkbox formControlName=\"remember\">\n          <span>Remember me</span>\n        </label>\n        <!-- <a class=\"login-form-forgot\" class=\"login-form-forgot\">Forgot password</a> -->\n        <button nz-button class=\"login-form-button\" [nzType]=\"'primary'\">Log in</button>\n        <!-- Or -->\n        <!-- <a href=\"\">register now!</a> -->\n      </nz-form-control>\n    </nz-form-item>\n  </form>\n  <ng-template #prefixUser><i nz-icon type=\"user\"></i></ng-template>\n  <ng-template #prefixLock><i nz-icon type=\"lock\"></i></ng-template>"

/***/ }),

/***/ "./src/app/views/auth/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/views/auth/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center; }\n  :host ::ng-deep .login-form {\n    width: 34%;\n    margin: 60px 0; }\n  :host ::ng-deep .login-form-forgot {\n    float: right; }\n  :host ::ng-deep .login-form-button {\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29uc3RhbnRlL0Rlc2t0b3AvbGNvbnN0LmpzL2Jsb2cvc3JjL2FwcC92aWV3cy9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7RUFKM0I7SUFRUSxVQUFVO0lBQ1YsY0FBYyxFQUFBO0VBVHRCO0lBYVEsWUFBWSxFQUFBO0VBYnBCO0lBaUJRLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIFxuICAgIDo6bmctZGVlcCB7XG4gICAgICAubG9naW4tZm9ybSB7XG4gICAgICAgIHdpZHRoOiAzNCU7XG4gICAgICAgIG1hcmdpbjogNjBweCAwO1xuICAgICAgfVxuICBcbiAgICAgIC5sb2dpbi1mb3JtLWZvcmdvdCB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIH1cbiAgXG4gICAgICAubG9naW4tZm9ybS1idXR0b24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/views/auth/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/auth/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/authentication.service */ "./src/app/services/auth/authentication.service.ts");
/* harmony import */ var src_app_classes_form_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/form-parser */ "./src/app/classes/form-parser.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utility.service */ "./src/app/services/utility.service.ts");







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, authService, formParser, router, utilityService) {
        this.fb = fb;
        this.authService = authService;
        this.formParser = formParser;
        this.router = router;
        this.utilityService = utilityService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.validateForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            remember: [true]
        });
    };
    RegisterComponent.prototype.submitForm = function (form) {
        var _this = this;
        var formValues = this.formParser.parse(form);
        formValues.strategy = 'local';
        for (var i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        console.log(formValues);
        this.authService.localRegister(formValues).subscribe(function (user) {
            if (user._id) {
                _this.authService.saveToken(user.token);
                _this.authService.saveUserId(user);
                _this.utilityService.createNotification('success', 'Exitoso', "Tu cuenta se creo con exito.");
                _this.router.navigate(['/blog/create']);
            }
        }, function (err) {
            _this.utilityService.createNotification('error', 'Error', "Algo salio mal.\n " + err.message);
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/views/auth/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], src_app_classes_form_parser__WEBPACK_IMPORTED_MODULE_4__["FormParser"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/views/blog/blog.component.html":
/*!************************************************!*\
  !*** ./src/app/views/blog/blog.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\n  <nz-sider nzCollapsible [(nzCollapsed)]=\"isCollapsed\" [nzWidth]=\"width\" [nzReverseArrow]=\"isReverseArrow\">\n    <div class=\"logo\"></div>\n    <ul nz-menu [nzTheme]=\"'dark'\" [nzMode]=\"'inline'\" [nzInlineCollapsed]=\"isCollapsed\">\n      <li nz-submenu>\n        <span title><i nz-icon type=\"user\"></i><span class=\"nav-text\">User</span></span>\n        <ul>\n          <li *ngIf=\"!isLoggedIn\" nz-menu-item [routerLink]=\"['/blog/auth/login']\">Acceder</li>\n          <li *ngIf=\"!isLoggedIn\" nz-menu-item [routerLink]=\"['/blog/auth/register']\">Registrarse</li>\n          <li *ngIf=\"isLoggedIn\" nz-menu-item (click)=\"logout()\">Cerrar Session</li>\n        </ul>\n      </li>\n      <!-- <li nz-submenu>\n        <span title><i nz-icon type=\"team\"></i><span class=\"nav-text\">Team</span></span>\n        <ul>\n          <li nz-menu-item>Team 1</li>\n          <li nz-menu-item>Team 2</li>\n        </ul>\n      </li> -->\n      <li nz-menu-item (click)=\"reloadBlogForm()\">\n        <span><i nz-icon type=\"file\"></i><span class=\"nav-text\">New Blog</span></span>\n      </li>\n    </ul>\n  </nz-sider>\n  <nz-layout>\n    <nz-header style=\"background: #fff; padding:0;\"></nz-header>\n    <nz-content style=\"padding:0 50px;\">\n      <!-- <nz-breadcrumb style=\"margin:16px 0;\">\n        <nz-breadcrumb-item>Home</nz-breadcrumb-item>\n        <nz-breadcrumb-item>List</nz-breadcrumb-item>\n        <nz-breadcrumb-item>App</nz-breadcrumb-item>\n      </nz-breadcrumb> -->\n      <div style=\"margin:16px 0;\"></div>\n      <div style=\"background:#fff; padding: 24px; min-height: 280px;\">\n        <router-outlet></router-outlet>\n      </div>\n    </nz-content>\n    <nz-footer style=\"text-align: center;\">Ant Design ©2019 Implement By Angular</nz-footer>\n  </nz-layout>\n</nz-layout>"

/***/ }),

/***/ "./src/app/views/blog/blog.component.scss":
/*!************************************************!*\
  !*** ./src/app/views/blog/blog.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .logo {\n  height: 32px;\n  background: rgba(255, 255, 255, 0.2);\n  margin: 16px; }\n\n:host ::ng-deep .ant-layout {\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29uc3RhbnRlL0Rlc2t0b3AvbGNvbnN0LmpzL2Jsb2cvc3JjL2FwcC92aWV3cy9ibG9nL2Jsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFTSxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLFlBQVksRUFBQTs7QUFKbEI7RUFTVSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9ibG9nL2Jsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLmxvZ28ge1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgbWFyZ2luOiAxNnB4O1xuICAgIH1cbiAgXG4gICAgOjpuZy1kZWVwIHtcbiAgICAgIC5hbnQtbGF5b3V0IHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/views/blog/blog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/blog/blog.component.ts ***!
  \**********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/authentication.service */ "./src/app/services/auth/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var BlogComponent = /** @class */ (function () {
    function BlogComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isCollapsed = false;
        this.isReverseArrow = false;
        this.width = 200;
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authConfig.subscribe(function (authConfig) {
            _this._authConfig = authConfig;
            _this.isLoggedIn = _this._authConfig.isLoggedIn;
        });
    };
    BlogComponent.prototype.reloadBlogForm = function () {
        window.location.href = '/blog/create';
    };
    BlogComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/home']);
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/views/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.scss */ "./src/app/views/blog/blog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/views/blog/create/create.component.html":
/*!*********************************************************!*\
  !*** ./src/app/views/blog/create/create.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-breadcrumb style=\"margin:16px 0;\">\n  <nz-breadcrumb-item>{{ 'blog' }}</nz-breadcrumb-item>\n  <nz-breadcrumb-item>{{ 'crear' }}</nz-breadcrumb-item>\n</nz-breadcrumb>\n<div *ngIf=\"!post?.created\">\n    <h1>{{ 'Subir foto de portada' }}</h1>\n    <!-- upload poster image -->\n\n    <div class=\"clearfix\">\n        <nz-upload\n          nzListType=\"picture-card\"\n          [(nzFileList)]=\"fileList\"\n          [nzShowButton]=\"fileList.length < 3\"\n          [nzShowUploadList]=\"showUploadList\"\n          [nzPreview]=\"handlePreview\"\n          [nzCustomRequest]=\"customReq\"\n          nzAction=\"http://localhost:3030/storage\"\n        >\n          <i nz-icon nzType=\"plus\"></i>\n          <div class=\"ant-upload-text\">Upload</div>\n        </nz-upload>\n        <nz-modal\n          [nzVisible]=\"previewVisible\"\n          [nzContent]=\"modalContent\"\n          [nzFooter]=\"null\"\n          (nzOnCancel)=\"previewVisible = false\"\n        >\n          <ng-template #modalContent>\n            <img [src]=\"previewImage\" [ngStyle]=\"{ width: '100%' }\" />\n          </ng-template>\n        </nz-modal>\n      </div>\n\n    <!-- upload end -->\n  <form #form (submit)=\"onSubmit($event, form)\" ngNativeValidate>\n    <h1>{{'Titulo'}}</h1>\n    <textarea name=\"title\" [ngModelOptions]=\"{standalone: true}\" nz-input\n      placeholder=\"Autosize height based on content lines\" ngModel nzAutosize required></textarea>\n    <div style=\"margin:24px 0;\"></div>\n    <h1>{{'Contenido'}}</h1>\n    <textarea name=\"content\" [ngModelOptions]=\"{standalone: true}\" nz-input\n      placeholder=\"Autosize height with minimum and maximum number of lines\" [(ngModel)]=\"value\"\n      [nzAutosize]=\"{ minRows: 6, maxRows: 6 }\" required></textarea>\n    <button type=\"submit\" nz-button [nzSize]=\"'large'\" nzType=\"primary\">{{'Crear Articulo'}}</button>\n  </form>\n</div>\n<div *ngIf=\"post?.created\" class=\"successful\">\n  <nz-alert nzType=\"success\" nzMessage=\"Articulo se creo\" [nzDescription]=\"successLink\"></nz-alert>\n  <ng-template #successLink>\n    {{'Articulo a sido publicado'}} <a [href]=\"'/posts/view/' + post?.id\">{{'Ver Articulo'}}</a>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/views/blog/create/create.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/views/blog/create/create.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .login-form {\n  max-width: 300px; }\n\n:host ::ng-deep .login-form-forgot {\n  float: right; }\n\n:host ::ng-deep .login-form-button {\n  width: 100%; }\n\n:host ::ng-deep button {\n  margin: 40px 0; }\n\n:host ::ng-deep nz-alert {\n  margin-bottom: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29uc3RhbnRlL0Rlc2t0b3AvbGNvbnN0LmpzL2Jsb2cvc3JjL2FwcC92aWV3cy9ibG9nL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHTSxnQkFBZ0IsRUFBQTs7QUFIdEI7RUFPTSxZQUFZLEVBQUE7O0FBUGxCO0VBV00sV0FBVyxFQUFBOztBQVhqQjtFQWVNLGNBQWMsRUFBQTs7QUFmcEI7RUFtQk0sbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9ibG9nL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIDo6bmctZGVlcCB7XG4gICAgLmxvZ2luLWZvcm0ge1xuICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICB9XG5cbiAgICAubG9naW4tZm9ybS1mb3Jnb3Qge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cblxuICAgIC5sb2dpbi1mb3JtLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgbWFyZ2luOiA0MHB4IDA7XG4gICAgfVxuICAgIFxuICAgIG56LWFsZXJ0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/blog/create/create.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/blog/create/create.component.ts ***!
  \*******************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_classes_form_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/form-parser */ "./src/app/classes/form-parser.ts");
/* harmony import */ var src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utility.service */ "./src/app/services/utility.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var CreateComponent = /** @class */ (function () {
    function CreateComponent(fb, formParser, blogService, notification, notify, changeDetector) {
        var _this = this;
        this.fb = fb;
        this.formParser = formParser;
        this.blogService = blogService;
        this.notification = notification;
        this.notify = notify;
        this.changeDetector = changeDetector;
        this.post = {
            created: false,
            id: ''
        };
        this.defaultFileList = [];
        this.previewImage = '';
        this.previewVisible = false;
        this.showUploadList = {
            showPreviewIcon: true,
            showRemoveIcon: true,
            hidePreviewIconInNonImage: true
        };
        this.fileList = [];
        this.handlePreview = function (file) {
            _this.previewImage = file.url || file.thumbUrl;
            _this.previewVisible = true;
        };
        this.handleUpload = function (item) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var fileURI;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(item);
                        item.action = 'POST';
                        return [4 /*yield*/, this.dataParams(item.file)];
                    case 1:
                        fileURI = _a.sent();
                        item.onSuccess = function (resp) {
                            console.log(resp);
                            // this.fileList.push(resp);
                        };
                        item.onProgress({ percent: 50 });
                        return [2 /*return*/, this.blogService.uploadBlogPosters(fileURI).subscribe(function (image) {
                                console.log(image);
                                _this.defaultFileList.push({
                                    uid: image.bytes,
                                    name: image.original_filename,
                                    status: 'done',
                                    url: image.url,
                                    thumbUrl: image.url,
                                });
                                item.data = image;
                                item.file = image;
                                _this.previewImage = image.url;
                                console.log(_this.fileList);
                                _this.fileList = _this.defaultFileList.slice();
                                _this.changeDetector.detectChanges();
                            })];
                }
            });
        }); };
        this.customReq = function (item) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var fileURI, req;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.fileList.slice());
                        return [4 /*yield*/, this.dataParams(item.file)];
                    case 1:
                        fileURI = _a.sent();
                        req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpRequest"]('POST', item.action, fileURI, {
                            reportProgress: true,
                            withCredentials: true
                        });
                        return [2 /*return*/, this.blogService.uploadBlogPostersRequest(req).subscribe(function (event) {
                                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpEventType"].UploadProgress) {
                                    if (event.total > 0) {
                                        // tslint:disable-next-line:no-any
                                        event.percent = (event.loaded / event.total) * 100;
                                    }
                                    item.onProgress(event, item.file);
                                }
                                else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpResponse"]) {
                                    item.onSuccess(event.body, item.file, event);
                                }
                            }, function (err) {
                                item.onError(err, item.file);
                            })];
                }
            });
        }); };
        this.dataParams = function (file) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var reader;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        reader = new FileReader();
                        reader.readAsDataURL(file);
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                reader.onload = function () {
                                    resolve({ uri: reader.result });
                                };
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.dataHeaders = function () {
            return {
                'Content-Type': 'multipart/form-data'
            };
        };
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.ngAfterViewChecked = function () {
    };
    CreateComponent.prototype.onSubmit = function ($event, form) {
        var _this = this;
        $event.preventDefault();
        var formValues = this.formParser.parse(form);
        // format url for mongoose schema
        formValues.posters = this.fileList.slice().map(function (fileInfo, idx, arr) {
            return { url: fileInfo.response.url };
        });
        this.blogService.createPost(formValues).subscribe(function (post) {
            console.log(post);
            _this.notify.createNotification('success', 'Exitoso', 'El articulo se creo con exito.');
            _this.post.created = true;
            _this.post.id = post._id;
        }, function (err) {
            _this.notify.createNotification('error', 'Error', "Algo salio mal, contacta al administrador si sigue sin funcionar. 510-283-8390 \n " + err.message);
        });
        console.log(formValues);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('successLink'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CreateComponent.prototype, "successLink", void 0);
    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/views/blog/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.scss */ "./src/app/views/blog/create/create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_classes_form_parser__WEBPACK_IMPORTED_MODULE_3__["FormParser"], src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_4__["BlogService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzNotificationService"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/views/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/views/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/views/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/posts/view/view.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/posts/view/view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  view works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/posts/view/view.component.scss":
/*!******************************************************!*\
  !*** ./src/app/views/posts/view/view.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Bvc3RzL3ZpZXcvdmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/posts/view/view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/posts/view/view.component.ts ***!
  \****************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ViewComponent = /** @class */ (function () {
    function ViewComponent() {
    }
    ViewComponent.prototype.ngOnInit = function () {
    };
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/views/posts/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.scss */ "./src/app/views/posts/view/view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    host: 'http://localhost:3030'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/luisconstante/Desktop/lconst.js/blog/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map