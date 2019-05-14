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
/* harmony import */ var _views_posts_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/posts/view-post/view-post.component */ "./src/app/views/posts/view-post/view-post.component.ts");
/* harmony import */ var _views_posts_posts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/posts/posts.component */ "./src/app/views/posts/posts.component.ts");
/* harmony import */ var _guards_authentication_protect_blog_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/authentication/protect-blog.guard */ "./src/app/guards/authentication/protect-blog.guard.ts");














var routes = [
    { path: '', redirectTo: 'posts', pathMatch: 'full' },
    { path: 'home', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'posts', component: _views_posts_posts_component__WEBPACK_IMPORTED_MODULE_12__["PostsComponent"], children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: _views_posts_view_view_component__WEBPACK_IMPORTED_MODULE_4__["ViewComponent"] },
            { path: 'view/:id', component: _views_posts_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_11__["ViewPostComponent"] }
        ] },
    { path: 'blog', component: _views_blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"], children: [
            { path: '', redirectTo: 'create', pathMatch: 'full' },
            { path: 'create', component: _views_blog_create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"], canActivate: [_guards_authentication_protect_blog_guard__WEBPACK_IMPORTED_MODULE_13__["ProtectBlogGuard"]] },
            { path: 'auth', children: [
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: 'login', component: _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], canActivate: [_guards_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
                    { path: 'register', component: _views_auth_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], canActivate: [_guards_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] }
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
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm5/ant-design-icons-angular-icons.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_blog_create_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/blog/create/create.component */ "./src/app/views/blog/create/create.component.ts");
/* harmony import */ var _views_posts_view_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/posts/view/view.component */ "./src/app/views/posts/view/view.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_blog_blog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/blog/blog.component */ "./src/app/views/blog/blog.component.ts");
/* harmony import */ var _classes_form_parser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./classes/form-parser */ "./src/app/classes/form-parser.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _views_auth_register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/auth/register/register.component */ "./src/app/views/auth/register/register.component.ts");
/* harmony import */ var _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/auth/login/login.component */ "./src/app/views/auth/login/login.component.ts");
/* harmony import */ var _views_auth_callback_callback_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/auth/callback/callback.component */ "./src/app/views/auth/callback/callback.component.ts");
/* harmony import */ var _classes_token_getter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./classes/token-getter */ "./src/app/classes/token-getter.ts");
/* harmony import */ var _views_posts_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/posts/view-post/view-post.component */ "./src/app/views/posts/view-post/view-post.component.ts");
/* harmony import */ var _pipes_dateformat_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pipes/dateformat.pipe */ "./src/app/pipes/dateformat.pipe.ts");
/* harmony import */ var _views_posts_posts_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/posts/posts.component */ "./src/app/views/posts/posts.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _classes_custom_url_serializer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./classes/custom-url-serializer */ "./src/app/classes/custom-url-serializer.ts");








// Import what you need. RECOMMENDED. ✔️



















var icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__["AccountBookFill"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__["LockOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__["AlertFill"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__["TeamOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__["UserOutline"]];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _views_blog_create_create_component__WEBPACK_IMPORTED_MODULE_11__["CreateComponent"],
                _views_posts_view_view_component__WEBPACK_IMPORTED_MODULE_12__["ViewComponent"],
                _views_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _views_blog_blog_component__WEBPACK_IMPORTED_MODULE_14__["BlogComponent"],
                _views_auth_register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"],
                _views_auth_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _views_auth_callback_callback_component__WEBPACK_IMPORTED_MODULE_19__["CallbackComponent"],
                _views_posts_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_21__["ViewPostComponent"],
                _pipes_dateformat_pipe__WEBPACK_IMPORTED_MODULE_22__["DateformatPipe"],
                _views_posts_posts_component__WEBPACK_IMPORTED_MODULE_23__["PostsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_7__["NgxEditorModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: new _classes_token_getter__WEBPACK_IMPORTED_MODULE_20__["TokenGetter"]().value,
                        whitelistedDomains: ['localhost:3030'],
                    }
                })
            ],
            providers: [
                { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NZ_ICONS"], useValue: icons },
                _classes_form_parser__WEBPACK_IMPORTED_MODULE_15__["FormParser"],
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_24__["UrlSerializer"], useClass: _classes_custom_url_serializer__WEBPACK_IMPORTED_MODULE_25__["CustomUrlSerializer"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/custom-url-serializer.ts":
/*!**************************************************!*\
  !*** ./src/app/classes/custom-url-serializer.ts ***!
  \**************************************************/
/*! exports provided: CustomUrlSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomUrlSerializer", function() { return CustomUrlSerializer; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var CustomUrlSerializer = /** @class */ (function () {
    function CustomUrlSerializer() {
    }
    CustomUrlSerializer.prototype.parse = function (url) {
        var dus = new _angular_router__WEBPACK_IMPORTED_MODULE_0__["DefaultUrlSerializer"]();
        return dus.parse(url);
    };
    CustomUrlSerializer.prototype.serialize = function (tree) {
        var dus = new _angular_router__WEBPACK_IMPORTED_MODULE_0__["DefaultUrlSerializer"](), path = dus.serialize(tree);
        // use your regex to replace as per your requirement.
        path = path.replace(/%3F/g, '?');
        path = path.replace(/%3D/g, '=');
        return path;
    };
    return CustomUrlSerializer;
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/authentication.service */ "./src/app/services/auth/authentication.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");






var AuthGuard = /** @class */ (function () {
    function AuthGuard(route, authService, router, jwtHelper) {
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.jwtHelper = jwtHelper;
        this._window = window;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        this.subscriptions.add(this.authService.authConfig.subscribe(function (authConfig) {
            _this.authConfig = authConfig;
            if (_this.authConfig.isLoggedIn || !_this.jwtHelper.isTokenExpired()) {
                _this.router.navigate(['/blog/create']);
            }
        }));
        return true;
    };
    AuthGuard.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/authentication/protect-blog.guard.ts":
/*!*************************************************************!*\
  !*** ./src/app/guards/authentication/protect-blog.guard.ts ***!
  \*************************************************************/
/*! exports provided: ProtectBlogGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectBlogGuard", function() { return ProtectBlogGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/authentication.service */ "./src/app/services/auth/authentication.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");






var ProtectBlogGuard = /** @class */ (function () {
    function ProtectBlogGuard(route, authService, router, jwtHelper) {
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.jwtHelper = jwtHelper;
        this._window = window;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    ProtectBlogGuard.prototype.canActivate = function () {
        var _this = this;
        this.subscriptions.add(this.authService.authConfig.subscribe(function (authConfig) {
            _this.authConfig = authConfig;
            if (!_this.authConfig.isLoggedIn) {
                _this.router.navigate(['/blog/auth/login']);
            }
        }));
        return this.authService.checkLoggedIn();
    };
    ProtectBlogGuard.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    ProtectBlogGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]])
    ], ProtectBlogGuard);
    return ProtectBlogGuard;
}());



/***/ }),

/***/ "./src/app/pipes/dateformat.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/dateformat.pipe.ts ***!
  \******************************************/
/*! exports provided: DateformatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateformatPipe", function() { return DateformatPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DateformatPipe = /** @class */ (function () {
    function DateformatPipe() {
    }
    DateformatPipe.prototype.transform = function (posts, args) {
        // console.log(posts);
        if (!posts) {
            return [];
        }
        var datedPosts = posts.map(function (post) {
            // console.log(post.createdAt);
            post.createdAt = new Date(post.createdAt).toLocaleString();
            return post;
        });
        return datedPosts;
    };
    DateformatPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'dateformat'
        })
    ], DateformatPipe);
    return DateformatPipe;
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
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility.service */ "./src/app/services/utility.service.ts");







var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, jwtHelper, utility) {
        var _this = this;
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.utility = utility;
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
    AuthenticationService.prototype.localLogin = function (data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].host + '/authentication', data);
    };
    AuthenticationService.prototype.localRegister = function (user) {
        console.log(user);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].host + '/users', user);
    };
    AuthenticationService.prototype.checkLoggedIn = function () {
        var isLoggedIn = this._window.localStorage['token'] ? !this.jwtHelper.isTokenExpired() : false;
        this.updateLoggedInStatus(isLoggedIn);
        return isLoggedIn;
    };
    AuthenticationService.prototype.updateLoggedInStatus = function (status) {
        this._authConfig.isLoggedIn = status;
        this.authConfig.next(this._authConfig);
    };
    AuthenticationService.prototype.logout = function () {
        this._window.localStorage.removeItem('token');
        this._window.localStorage.removeItem('uid');
        this.utility.createNotification('success', 'Session', 'Session se cerro.');
        this.updateLoggedInStatus(false);
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"], _utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]])
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
/* harmony import */ var _auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/authentication.service */ "./src/app/services/auth/authentication.service.ts");






var BlogService = /** @class */ (function () {
    function BlogService(http, jwtHelper, authService) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.authService = authService;
    }
    BlogService.prototype.createPost = function (blogValues) {
        console.log(this.getPayload());
        blogValues.userId = this.getPayload().userId || this.authService.getUserId();
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
    BlogService.prototype.getPosts = function (skip) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].host + ("/blog-posts?$skip=" + (skip || 0)));
    };
    BlogService.prototype.getPost = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].host + ("/blog-posts/" + id));
    };
    BlogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth0_angular_jwt_src_jwthelper_service__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"], _auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
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

module.exports = "<form nz-form [formGroup]=\"validateForm\" class=\"login-form\" #form (ngSubmit)=\"submitForm($event, form)\">\n  <nz-form-item>\n    <nz-form-control>\n      <nz-input-group [nzPrefix]=\"prefixUser\">\n        <input type=\"text\" nz-input formControlName=\"email\" placeholder=\"Email\" name=\"email\" />\n      </nz-input-group>\n      <nz-form-explain *ngIf=\"validateForm.get('email')?.dirty && validateForm.get('email')?.errors\"\n        >Please input your email!</nz-form-explain\n      >\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item>\n    <nz-form-control>\n      <nz-input-group [nzPrefix]=\"prefixLock\">\n        <input type=\"password\" nz-input formControlName=\"password\" placeholder=\"Password\" name=\"password\"/>\n      </nz-input-group>\n      <nz-form-explain *ngIf=\"validateForm.get('password')?.dirty && validateForm.get('password')?.errors\"\n        >Please input your Password!</nz-form-explain\n      >\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item>\n    <nz-form-control>\n      <label nz-checkbox formControlName=\"remember\">\n        <span>Remember me</span>\n      </label>\n      <a class=\"login-form-forgot\" class=\"login-form-forgot\">Forgot password</a>\n      <button nz-button class=\"login-form-button\" [nzType]=\"'primary'\">Log in</button>\n      Or\n      <a href=\"\">register now!</a>\n    </nz-form-control>\n  </nz-form-item>\n</form>\n<ng-template #prefixUser><i nz-icon type=\"user\"></i></ng-template>\n<ng-template #prefixLock><i nz-icon type=\"lock\"></i></ng-template>"

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
/* harmony import */ var src_app_classes_form_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/classes/form-parser */ "./src/app/classes/form-parser.ts");
/* harmony import */ var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utility.service */ "./src/app/services/utility.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService, router, formParser, utility) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.formParser = formParser;
        this.utility = utility;
        this._window = window;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
    }
    LoginComponent.prototype.submitForm = function ($e, form) {
        var _this = this;
        $e.preventDefault();
        var formValues = this.formParser.parse(form);
        for (var i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        console.log(formValues);
        formValues.strategy = 'local';
        this.authService.localLogin(formValues).subscribe(function (token) {
            console.log(token);
            _this.authService.saveToken(token);
            _this.utility.createNotification('success', 'Exitoso', 'Entro a su cuenta.');
            _this.router.navigate(['/blog/create']);
        }, function (err) {
            _this.utility.createNotification('error', 'error', "Algo salio mal\n " + err.message);
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.validateForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_classes_form_parser__WEBPACK_IMPORTED_MODULE_5__["FormParser"], src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]])
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

module.exports = "<nz-layout>\n  <nz-sider nzCollapsible [(nzCollapsed)]=\"isCollapsed\" [nzWidth]=\"width\" [nzReverseArrow]=\"isReverseArrow\">\n    <div class=\"logo\"></div>\n    <ul nz-menu [nzTheme]=\"'dark'\" [nzMode]=\"'inline'\" [nzInlineCollapsed]=\"isCollapsed\">\n      <li nz-submenu>\n        <span title><i nz-icon type=\"user\"></i><span class=\"nav-text\">Mi Perfil</span></span>\n        <ul>\n          <li *ngIf=\"!isLoggedIn\" nz-menu-item [routerLink]=\"['/blog/auth/login']\">Acceder</li>\n          <li *ngIf=\"!isLoggedIn\" nz-menu-item [routerLink]=\"['/blog/auth/register']\">Registrarse</li>\n          <li *ngIf=\"isLoggedIn\" nz-menu-item (click)=\"logout()\">Cerrar Session</li>\n        </ul>\n      </li>\n      <!-- <li nz-submenu>\n        <span title><i nz-icon type=\"team\"></i><span class=\"nav-text\">Team</span></span>\n        <ul>\n          <li nz-menu-item>Team 1</li>\n          <li nz-menu-item>Team 2</li>\n        </ul>\n      </li> -->\n      <li nz-menu-item (click)=\"reloadBlogForm()\">\n        <span><i nz-icon type=\"file\"></i><span class=\"nav-text\">Nuevo Articulo</span></span>\n      </li>\n    </ul>\n  </nz-sider>\n  <nz-layout>\n    <nz-header style=\"background: #fff; padding:0;\"></nz-header>\n    <nz-content style=\"padding:0 50px;\">\n      <!-- <nz-breadcrumb style=\"margin:16px 0;\">\n        <nz-breadcrumb-item>Home</nz-breadcrumb-item>\n        <nz-breadcrumb-item>List</nz-breadcrumb-item>\n        <nz-breadcrumb-item>App</nz-breadcrumb-item>\n      </nz-breadcrumb> -->\n      <div style=\"margin:16px 0;\"></div>\n      <div style=\"background:#fff; padding: 24px; min-height: 280px;\">\n        <router-outlet></router-outlet>\n      </div>\n    </nz-content>\n    <nz-footer style=\"text-align: center;\">Universal Magazine ©2019 Powered by Angular</nz-footer>\n  </nz-layout>\n</nz-layout>"

/***/ }),

/***/ "./src/app/views/blog/blog.component.scss":
/*!************************************************!*\
  !*** ./src/app/views/blog/blog.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .logo {\n  height: 32px;\n  background: rgba(255, 255, 255, 0.2);\n  margin: 16px; }\n\n:host ::ng-deep .ant-layout {\n  height: inherit; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29uc3RhbnRlL0Rlc2t0b3AvbGNvbnN0LmpzL2Jsb2cvc3JjL2FwcC92aWV3cy9ibG9nL2Jsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFTSxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLFlBQVksRUFBQTs7QUFKbEI7RUFTUSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9ibG9nL2Jsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLmxvZ28ge1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgbWFyZ2luOiAxNnB4O1xuICAgIH1cbiAgXG4gICAgOjpuZy1kZWVwIHtcbiAgICAgIC5hbnQtbGF5b3V0IHtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAiXX0= */"

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
        this.router.navigate(['/posts/list']);
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

module.exports = "<nz-breadcrumb style=\"margin:16px 0;\">\n  <nz-breadcrumb-item>{{ 'blog' }}</nz-breadcrumb-item>\n  <nz-breadcrumb-item>{{ 'crear' }}</nz-breadcrumb-item>\n</nz-breadcrumb>\n<div *ngIf=\"!post?.created\">\n    <h1>{{ 'Subir foto de portada' }}</h1>\n    <!-- upload poster image -->\n\n    <div class=\"clearfix\">\n        <nz-upload\n          nzListType=\"picture-card\"\n          [(nzFileList)]=\"fileList\"\n          [nzShowButton]=\"fileList.length < 3\"\n          [nzShowUploadList]=\"showUploadList\"\n          [nzPreview]=\"handlePreview\"\n          [nzCustomRequest]=\"customReq\"\n          nzAction=\"http://localhost:3030/storage\"\n        >\n          <i nz-icon nzType=\"plus\"></i>\n          <div class=\"ant-upload-text\">Upload</div>\n        </nz-upload>\n        <nz-modal\n          [nzVisible]=\"previewVisible\"\n          [nzContent]=\"modalContent\"\n          [nzFooter]=\"null\"\n          (nzOnCancel)=\"previewVisible = false\"\n        >\n          <ng-template #modalContent>\n            <img [src]=\"previewImage\" [ngStyle]=\"{ width: '100%' }\" />\n          </ng-template>\n        </nz-modal>\n      </div>\n\n    <!-- upload end -->\n  <form #form (submit)=\"onSubmit($event, form)\" ngNativeValidate>\n    <h1>{{'Titulo'}}</h1>\n    <textarea name=\"title\" [ngModelOptions]=\"{standalone: true}\" nz-input\n      placeholder=\"Autosize height based on content lines\" ngModel nzAutosize required></textarea>\n    <div style=\"margin:24px 0;\"></div>\n    <h1>{{'Contenido'}}</h1>\n    <app-ngx-editor [imageEndPoint]=\"endpointURL\" [minHeight]=\"'500px'\" [ngModelOptions]=\"{standalone: true}\" [placeholder]=\"'Enter text here...'\" [spellcheck]=\"true\" [(ngModel)]=\"htmlContent\">\n    </app-ngx-editor>\n    <button type=\"submit\" class=\"submit-btn\" nz-button [nzSize]=\"'large'\" nzType=\"primary\">{{'Crear Articulo'}}</button>\n  </form>\n</div>\n<div *ngIf=\"post?.created\" class=\"successful\">\n  <nz-alert nzType=\"success\" nzMessage=\"Articulo se creo\" [nzDescription]=\"successLink\"></nz-alert>\n  <ng-template #successLink>\n    {{'Articulo a sido publicado'}} <a [href]=\"'/posts/view/' + post?.id\">{{'Ver Articulo'}}</a>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/views/blog/create/create.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/views/blog/create/create.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .login-form {\n  max-width: 300px; }\n\n:host ::ng-deep .login-form-forgot {\n  float: right; }\n\n:host ::ng-deep .login-form-button {\n  width: 100%; }\n\n:host ::ng-deep .submit-btn {\n  margin: 40px 0; }\n\n:host ::ng-deep nz-alert {\n  margin-bottom: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29uc3RhbnRlL0Rlc2t0b3AvbGNvbnN0LmpzL2Jsb2cvc3JjL2FwcC92aWV3cy9ibG9nL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHTSxnQkFBZ0IsRUFBQTs7QUFIdEI7RUFPTSxZQUFZLEVBQUE7O0FBUGxCO0VBV00sV0FBVyxFQUFBOztBQVhqQjtFQWVNLGNBQWMsRUFBQTs7QUFmcEI7RUFxQk0sbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9ibG9nL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIDo6bmctZGVlcCB7XG4gICAgLmxvZ2luLWZvcm0ge1xuICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICB9XG5cbiAgICAubG9naW4tZm9ybS1mb3Jnb3Qge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cblxuICAgIC5sb2dpbi1mb3JtLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuc3VibWl0LWJ0biB7XG4gICAgICBtYXJnaW46IDQwcHggMDtcbiAgICB9XG5cblxuICAgIFxuICAgIG56LWFsZXJ0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */"

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
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");









var CreateComponent = /** @class */ (function () {
    function CreateComponent(fb, formParser, blogService, notification, notify, changeDetector) {
        var _this = this;
        this.fb = fb;
        this.formParser = formParser;
        this.blogService = blogService;
        this.notification = notification;
        this.notify = notify;
        this.changeDetector = changeDetector;
        this.endpointURL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].host + '/storage';
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
        formValues.content = this.htmlContent;
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
            console.log(err);
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

/***/ "./src/app/views/posts/posts.component.html":
/*!**************************************************!*\
  !*** ./src/app/views/posts/posts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"layout\">\n    <nz-header>\n      <div class=\"logo\"></div>\n      <ul nz-menu [nzTheme]=\"'dark'\" [nzMode]=\"'horizontal'\" style=\"line-height: 64px;\">\n        <li nz-menu-item><a [href]=\"domain\">Home</a></li>\n        <li nz-menu-item [routerLink]=\"['/posts/list']\">Blog</li>\n      </ul>\n    </nz-header>\n    <nz-content style=\"padding: 0 3vw;\">\n      <router-outlet></router-outlet>\n    </nz-content>\n    <nz-footer style=\"text-align: center;\">Universal Magazine ©2019 Powered by Angular</nz-footer>\n  </nz-layout>\n  "

/***/ }),

/***/ "./src/app/views/posts/posts.component.scss":
/*!**************************************************!*\
  !*** ./src/app/views/posts/posts.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep * {\n  touch-action: manipulation; }\n\n:host ::ng-deep .logo {\n  width: 120px;\n  height: 31px;\n  background: rgba(255, 255, 255, 0.2);\n  margin: 16px 24px 16px 0;\n  float: left; }\n\n:host ::ng-deep .ant-layout {\n  display: flex;\n  flex: auto;\n  flex-direction: column;\n  min-height: 0;\n  background: #f0f2f5;\n  height: inherit; }\n\n:host ::ng-deep .card {\n  float: left;\n  padding: 0.6vw;\n  width: 100%;\n  pointer-events: all; }\n\n:host ::ng-deep .card:hover .data, :host ::ng-deep .card:focus .data {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n\n:host ::ng-deep .card .menu-content {\n    margin: 0;\n    padding: 0;\n    list-style-type: none; }\n\n:host ::ng-deep .card .menu-content::before, :host ::ng-deep .card .menu-content::after {\n      content: '';\n      display: table; }\n\n:host ::ng-deep .card .menu-content::after {\n      clear: both; }\n\n:host ::ng-deep .card .menu-content li {\n      display: inline-block; }\n\n:host ::ng-deep .card .menu-content a {\n      color: white; }\n\n:host ::ng-deep .card .menu-content span {\n      position: absolute;\n      left: 50%;\n      top: 0;\n      font-size: 10px;\n      font-weight: 700;\n      font-family: 'Open Sans';\n      -webkit-transform: translate(-50%, 0);\n              transform: translate(-50%, 0); }\n\n:host ::ng-deep .card .wrapper {\n    background-color: white;\n    min-height: 540px;\n    position: relative;\n    overflow: hidden; }\n\n:host ::ng-deep .card .wrapper:hover .data, :host ::ng-deep .card .wrapper:focus .data {\n      -webkit-transform: translateY(0);\n              transform: translateY(0); }\n\n:host ::ng-deep .card .data {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    -webkit-transform: translateY(calc(70px + 1em));\n            transform: translateY(calc(70px + 1em));\n    transition: -webkit-transform 0.3s;\n    transition: transform 0.3s;\n    transition: transform 0.3s, -webkit-transform 0.3s; }\n\n:host ::ng-deep .card .data .content {\n      padding: 1em;\n      position: relative;\n      z-index: 1; }\n\n:host ::ng-deep .card .author {\n    font-size: 12px; }\n\n:host ::ng-deep .card .title {\n    margin-top: 10px; }\n\n:host ::ng-deep .card .text {\n    height: 70px;\n    margin: 0; }\n\n:host ::ng-deep .card input[type='checkbox'] {\n    display: none; }\n\n:host ::ng-deep .card input[type='checkbox']:checked + .menu-content {\n    -webkit-transform: translateY(-60px);\n            transform: translateY(-60px); }\n\n:host ::ng-deep .example-2 .wrapper {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center; }\n\n:host ::ng-deep .example-2 .wrapper:before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.2);\n    pointer-events: none;\n    transition: 1s; }\n\n:host ::ng-deep .example-2 .wrapper:hover .menu-content span, :host ::ng-deep .example-2 .wrapper:focus .menu-content span {\n    -webkit-transform: translate(-50%, -10px);\n            transform: translate(-50%, -10px);\n    opacity: 1; }\n\n:host ::ng-deep .example-2 .wrapper:hover:before, :host ::ng-deep .example-2 .wrapper:focus:before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.6);\n    pointer-events: none; }\n\n:host ::ng-deep .example-2 .header {\n  color: white;\n  padding: 1em; }\n\n:host ::ng-deep .example-2 .header::before, :host ::ng-deep .example-2 .header::after {\n    content: '';\n    display: table; }\n\n:host ::ng-deep .example-2 .header::after {\n    clear: both; }\n\n:host ::ng-deep .example-2 .header .date {\n    float: left;\n    font-size: 12px; }\n\n:host ::ng-deep .example-2 .menu-content {\n  float: right; }\n\n:host ::ng-deep .example-2 .menu-content li {\n    margin: 0 5px;\n    position: relative; }\n\n:host ::ng-deep .example-2 .menu-content span {\n    transition: all 0.3s;\n    opacity: 0; }\n\n:host ::ng-deep .example-2 .data {\n  color: white;\n  -webkit-transform: translateY(calc(70px + 4em));\n          transform: translateY(calc(70px + 4em)); }\n\n:host ::ng-deep .example-2 .title a {\n  color: white; }\n\n:host ::ng-deep .example-2 .button {\n  display: block;\n  width: 100px;\n  margin: 2em auto 1em;\n  text-align: center;\n  font-size: 12px;\n  color: white;\n  line-height: 1;\n  position: relative;\n  font-weight: 700;\n  pointer-events: all; }\n\n:host ::ng-deep .example-2 .button::after {\n    content: '\\2192';\n    opacity: 0;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    -webkit-transform: translate(0, -50%);\n            transform: translate(0, -50%);\n    transition: all 0.3s; }\n\n:host ::ng-deep .example-2 .button:hover::after, :host ::ng-deep .example-2 .button:focus::after {\n    -webkit-transform: translate(5px, -50%);\n            transform: translate(5px, -50%);\n    opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29uc3RhbnRlL0Rlc2t0b3AvbGNvbnN0LmpzL2Jsb2cvc3JjL2FwcC92aWV3cy9wb3N0cy9wb3N0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLDBCQUEwQixFQUFBOztBQUhsQztFQXFCUSxZQUFZO0VBQ1osWUFBWTtFQUNaLG9DQUFvQztFQUNwQyx3QkFBd0I7RUFDeEIsV0FBVyxFQUFBOztBQXpCbkI7RUE2QlEsYUFBYTtFQUNiLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBbEN2QjtFQXVDUSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUExQzNCO0lBK0NZLGdDQUF3QjtZQUF4Qix3QkFBd0IsRUFBQTs7QUEvQ3BDO0lBcURVLFNBQVM7SUFDVCxVQUFVO0lBQ1YscUJBQXFCLEVBQUE7O0FBdkQvQjtNQVdVLFdBQVc7TUFDWCxjQUFjLEVBQUE7O0FBWnhCO01BZ0JVLFdBQVcsRUFBQTs7QUFoQnJCO01BMERZLHFCQUFxQixFQUFBOztBQTFEakM7TUE4RFksWUFBWSxFQUFBOztBQTlEeEI7TUFrRVksa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxNQUFNO01BQ04sZUFBZTtNQUNmLGdCQUFnQjtNQUNoQix3QkFBd0I7TUFDeEIscUNBQTZCO2NBQTdCLDZCQUE2QixFQUFBOztBQXhFekM7SUE2RVUsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUE7O0FBaEYxQjtNQXNGYyxnQ0FBd0I7Y0FBeEIsd0JBQXdCLEVBQUE7O0FBdEZ0QztJQTRGVSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCwrQ0FBdUM7WUFBdkMsdUNBQXVDO0lBQ3ZDLGtDQUEwQjtJQUExQiwwQkFBMEI7SUFBMUIsa0RBQTBCLEVBQUE7O0FBaEdwQztNQW1HWSxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLFVBQVUsRUFBQTs7QUFyR3RCO0lBMEdVLGVBQWUsRUFBQTs7QUExR3pCO0lBOEdVLGdCQUFnQixFQUFBOztBQTlHMUI7SUFrSFUsWUFBWTtJQUNaLFNBQVMsRUFBQTs7QUFuSG5CO0lBdUhVLGFBQWEsRUFBQTs7QUF2SHZCO0lBMkhVLG9DQUE0QjtZQUE1Qiw0QkFBNEIsRUFBQTs7QUEzSHRDO0VBa0lVLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCLEVBQUE7O0FBcElyQztJQXVJWSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLG9CQUFvQjtJQUNwQixjQUFjLEVBQUE7O0FBN0kxQjtJQW9KZ0IseUNBQWlDO1lBQWpDLGlDQUFpQztJQUNqQyxVQUFVLEVBQUE7O0FBckoxQjtJQTBKYyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLG9CQUFvQixFQUFBOztBQS9KbEM7RUFzS1UsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUF2S3RCO0lBV1UsV0FBVztJQUNYLGNBQWMsRUFBQTs7QUFaeEI7SUFnQlUsV0FBVyxFQUFBOztBQWhCckI7SUEwS1ksV0FBVztJQUNYLGVBQWUsRUFBQTs7QUEzSzNCO0VBZ0xVLFlBQVksRUFBQTs7QUFoTHRCO0lBbUxZLGFBQWE7SUFDYixrQkFBa0IsRUFBQTs7QUFwTDlCO0lBd0xZLG9CQUFvQjtJQUNwQixVQUFVLEVBQUE7O0FBekx0QjtFQThMVSxZQUFZO0VBQ1osK0NBQXVDO1VBQXZDLHVDQUF1QyxFQUFBOztBQS9MakQ7RUFvTVksWUFBWSxFQUFBOztBQXBNeEI7RUF5TVUsY0FBYztFQUNkLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBbE43QjtJQXFOWSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTtJQUNSLHFDQUE2QjtZQUE3Qiw2QkFBNkI7SUFDN0Isb0JBQW9CLEVBQUE7O0FBM05oQztJQWlPYyx1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIDo6bmctZGVlcCB7XG4gICAgICAmICoge1xuICAgICAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgICAgIH1cbiAgXG4gICAgICAvLyBjbGVhci1maXggbWl4aW5cbiAgICAgIEBtaXhpbiBjZiB7XG4gIFxuICAgICAgICAmOjpiZWZvcmUsXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgLmxvZ28ge1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIGhlaWdodDogMzFweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICBtYXJnaW46IDE2cHggMjRweCAxNnB4IDA7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgfVxuICBcbiAgICAgIC5hbnQtbGF5b3V0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleDogYXV0bztcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWluLWhlaWdodDogMDtcbiAgICAgICAgYmFja2dyb3VuZDogI2YwZjJmNTtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgfVxuICBcbiAgICAgIC8vIEJhc2Ugc3R5bGVzXG4gICAgICAuY2FyZCB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAwLjZ2dztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIFxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAuZGF0YSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gIFxuICAgICAgICAubWVudS1jb250ZW50IHtcbiAgICAgICAgICBAaW5jbHVkZSBjZjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIFxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gIFxuICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgbWluLWhlaWdodDogNTQwcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIC8vICAgYm94LXNoYWRvdzogMCAxOXB4IDM4cHggcmdiYShibGFjaywgMC4zKSwgMCAxNXB4IDEycHggcmdiYShibGFjaywgMC4yKTtcbiAgXG4gICAgICAgICAgJjpob3ZlcixcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIC5kYXRhIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICBcbiAgICAgICAgLmRhdGEge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGMoNzBweCArIDFlbSkpO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICBcbiAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICBcbiAgICAgICAgLmF1dGhvciB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gIFxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gIFxuICAgICAgICBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gIFxuICAgICAgICBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQrLm1lbnUtY29udGVudCB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02MHB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIC8vIFNlY29uZCBleGFtcGxlIHN0eWxlc1xuICAgICAgLmV4YW1wbGUtMiB7XG4gICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBcbiAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAxcztcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAubWVudS1jb250ZW50IHtcbiAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwcHgpO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gIFxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBAaW5jbHVkZSBjZjtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMWVtO1xuICBcbiAgICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC5tZW51LWNvbnRlbnQge1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgXG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICBcbiAgICAgICAgLmRhdGEge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYyg3MHB4ICsgNGVtKSk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gIFxuICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgbWFyZ2luOiAyZW0gYXV0byAxZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgXG4gICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJ1xcMjE5Mic7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIC01MCUpO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICB9XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/views/posts/posts.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/posts/posts.component.ts ***!
  \************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



var PostsComponent = /** @class */ (function () {
    function PostsComponent() {
        this.domain = /^http/.test(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].domain) ? src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].domain : alert('domain must have http(s)');
    }
    PostsComponent.prototype.ngOnInit = function () {
    };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/views/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/views/posts/posts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/views/posts/view-post/view-post.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/posts/view-post/view-post.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-breadcrumb style=\"margin:16px 0;\">\n  <!-- <nz-breadcrumb-item>Home</nz-breadcrumb-item> -->\n  <nz-breadcrumb-item>Posts</nz-breadcrumb-item>\n  <nz-breadcrumb-item>View</nz-breadcrumb-item>\n</nz-breadcrumb>\n<figure class=\"snip1336 hover\">\n  <!-- <img src=\"\" alt=\"sample74\" /> -->\n  <figcaption>\n    <div nz-row>\n      <div nz-col [nzXs]=\"24\" [nzSm]=\"12\" [nzLg]=\"8\" *ngFor=\"let img of post?.posters\">\n        <nz-avatar [nzShape]=\"'square'\" [nzSize]=\"400\" [nzIcon]=\"'user'\" [nzSrc]=\"img?.url\"></nz-avatar>\n      </div>\n    </div>\n    <h2 class=\"title\">{{post?.title}}</h2>\n    <p [innerHTML]=\"post?.content\"></p>\n    <!-- <div class=\"buttons\">\n      <a href=\"#\" class=\"follow\">Follow</a>\n      <a href=\"#\" class=\"info\">More Info</a>\n    </div> -->\n  </figcaption>\n</figure>\n"

/***/ }),

/***/ "./src/app/views/posts/view-post/view-post.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/posts/view-post/view-post.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,600);\n:host { }\n:host ::ng-deep video {\n    width: 70vw; }\n:host .gallery {\n    width: 100%;\n    height: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n:host .title {\n    color: white !important; }\n:host .snip1336 {\n    font-family: 'Roboto', Arial, sans-serif;\n    position: relative;\n    overflow: hidden;\n    display: inline-block;\n    margin-top: 4vh;\n    width: 100%;\n    height: 100%;\n    color: #ffffff;\n    text-align: left;\n    line-height: 1.4em;\n    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample74.jpg) no-repeat center;\n    background-size: cover;\n    text-align: center; }\n:host .snip1336 * {\n    box-sizing: border-box;\n    transition: all 0.25s ease; }\n:host .snip1336 img {\n    max-width: 100%;\n    vertical-align: top; }\n:host .snip1336 figcaption {\n    width: 100%;\n    height: 100%;\n    background-color: rgba(20, 20, 20, 0.380392);\n    padding: 25px;\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n:host .snip1336 figcaption:before {\n    position: absolute;\n    content: '';\n    bottom: 100%;\n    left: 0;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 55px 0 0 400px;\n    border-color: transparent transparent transparent #141414; }\n:host .snip1336 figcaption .buttons a {\n    padding: 5px;\n    border: 1px solid #ffffff;\n    color: #ffffff;\n    font-size: 0.7em;\n    text-transform: uppercase;\n    margin: 0;\n    display: inline-block;\n    opacity: 0.65;\n    width: 45%;\n    text-align: center;\n    text-decoration: none;\n    font-weight: 600;\n    letter-spacing: 1px; }\n:host .snip1336 figcaption a:hover {\n    opacity: 1; }\n:host .snip1336 .profile {\n    border-radius: 50%;\n    position: absolute;\n    bottom: 100%;\n    left: 25px;\n    z-index: 1;\n    max-width: 90px;\n    opacity: 1;\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3); }\n:host .snip1336 .follow {\n    margin-right: 4%;\n    border-color: white;\n    color: white; }\n:host .snip1336 h2 {\n    margin: 5%;\n    font-weight: 300; }\n:host .snip1336 h2 span {\n    display: block;\n    font-size: 0.5em;\n    color: white; }\n:host .snip1336 p {\n    margin: 0 0 10px;\n    font-size: 1.8em;\n    letter-spacing: normal;\n    line-height: normal;\n    opacity: 0.8;\n    padding: 50px; }\n@media only screen and (max-width: 500px) {\n    :host .snip1336 figcaption .buttons a {\n      padding: 5px;\n      border: 1px solid #ffffff;\n      color: #ffffff;\n      font-size: 0.7em;\n      text-transform: uppercase;\n      margin: 0;\n      display: inline-block;\n      opacity: 0.65;\n      width: 100%;\n      text-align: center;\n      text-decoration: none;\n      font-weight: 600;\n      letter-spacing: 1px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29uc3RhbnRlL0Rlc2t0b3AvbGNvbnN0LmpzL2Jsb2cvc3JjL2FwcC92aWV3cy9wb3N0cy92aWV3LXBvc3Qvdmlldy1wb3N0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFLHVFQUFZO0FBRGQsUUFBTTtBQUFOO0lBS00sV0FBVyxFQUFBO0FBTGpCO0lBVUksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QixFQUFBO0FBZDNCO0lBa0JJLHVCQUF1QixFQUFBO0FBbEIzQjtJQXNCSSx3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0dBQWtHO0lBQ2xHLHNCQUFzQjtJQUN0QixrQkFBa0IsRUFBQTtBQWxDdEI7SUF1Q0ksc0JBQXNCO0lBRXRCLDBCQUEwQixFQUFBO0FBekM5QjtJQTZDSSxlQUFlO0lBQ2YsbUJBQW1CLEVBQUE7QUE5Q3ZCO0lBbURJLFdBQVc7SUFDWCxZQUFZO0lBQ1osNENBQXNEO0lBQ3RELGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQixFQUFBO0FBekR2QjtJQTZESSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLHlEQUF5RCxFQUFBO0FBckU3RDtJQXlFSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQTtBQXJGdkI7SUF5RkksVUFBVSxFQUFBO0FBekZkO0lBNkZJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixVQUFVO0lBQ1YsZUFBZTtJQUNmLFVBQVU7SUFDVix1Q0FBdUMsRUFBQTtBQXBHM0M7SUF3R0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixZQUFZLEVBQUE7QUExR2hCO0lBOEdJLFVBQVU7SUFDVixnQkFBZ0IsRUFBQTtBQS9HcEI7SUFtSEksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZLEVBQUE7QUFySGhCO0lBeUhJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYSxFQUFBO0FBR2Y7SUFqSUY7TUFtSU0sWUFBWTtNQUNaLHlCQUF5QjtNQUN6QixjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLHlCQUF5QjtNQUN6QixTQUFTO01BQ1QscUJBQXFCO01BQ3JCLGFBQWE7TUFDYixXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLHFCQUFxQjtNQUNyQixnQkFBZ0I7TUFDaEIsbUJBQW1CLEVBQUEsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wb3N0cy92aWV3LXBvc3Qvdmlldy1wb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNjAwKTtcblxuICA6Om5nLWRlZXAge1xuICAgIHZpZGVvIHtcbiAgICAgIHdpZHRoOiA3MHZ3O1xuICAgIH1cbiAgfVxuXG4gIC5nYWxsZXJ5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zbmlwMTMzNiB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogNHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMzMxODEwL3NhbXBsZTc0LmpwZykgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5zbmlwMTMzNiAqIHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuICB9XG5cbiAgLnNuaXAxMzM2IGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgLy8gb3BhY2l0eTogMC44NTtcbiAgfVxuXG4gIC5zbmlwMTMzNiBmaWdjYXB0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjAsIDIwLCAwLjM4MDM5MjE1Njg2Mjc0NTEpO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuc25pcDEzMzYgZmlnY2FwdGlvbjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiAnJztcbiAgICBib3R0b206IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDU1cHggMCAwIDQwMHB4O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzE0MTQxNDtcbiAgfVxuXG4gIC5zbmlwMTMzNiBmaWdjYXB0aW9uIC5idXR0b25zIGEge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG9wYWNpdHk6IDAuNjU7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxuXG4gIC5zbmlwMTMzNiBmaWdjYXB0aW9uIGE6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAuc25pcDEzMzYgLnByb2ZpbGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMDAlO1xuICAgIGxlZnQ6IDI1cHg7XG4gICAgei1pbmRleDogMTtcbiAgICBtYXgtd2lkdGg6IDkwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cblxuICAuc25pcDEzMzYgLmZvbGxvdyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0JTtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5zbmlwMTMzNiBoMiB7XG4gICAgbWFyZ2luOiA1JTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG5cbiAgLnNuaXAxMzM2IGgyIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMC41ZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLnNuaXAxMzM2IHAge1xuICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgLnNuaXAxMzM2IGZpZ2NhcHRpb24gLmJ1dHRvbnMgYSB7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG9wYWNpdHk6IDAuNjU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/posts/view-post/view-post.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/posts/view-post/view-post.component.ts ***!
  \**************************************************************/
/*! exports provided: ViewPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPostComponent", function() { return ViewPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var ViewPostComponent = /** @class */ (function () {
    function ViewPostComponent(route, blogService, meta, title) {
        var _this = this;
        this.route = route;
        this.blogService = blogService;
        this.meta = meta;
        this.title = title;
        this.getParams().then(function (params) {
            _this.blogService.getPost(_this.params['id']).subscribe(function (post) {
                _this.post = post;
                _this.meta.addTag({ name: 'description', content: _this.post.content });
                _this.meta.addTag({ name: 'author', content: src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].blog.author });
                _this.meta.addTag({ name: 'keywords', content: _this.post.content });
                _this.title.setTitle(_this.post.title);
            });
        });
    }
    ViewPostComponent.prototype.getParams = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.route.params.subscribe(function (params) {
                            _this.params = params;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewPostComponent.prototype.ngOnInit = function () {
    };
    ViewPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-post',
            template: __webpack_require__(/*! ./view-post.component.html */ "./src/app/views/posts/view-post/view-post.component.html"),
            styles: [__webpack_require__(/*! ./view-post.component.scss */ "./src/app/views/posts/view-post/view-post.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], ViewPostComponent);
    return ViewPostComponent;
}());



/***/ }),

/***/ "./src/app/views/posts/view/view.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/posts/view/view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-breadcrumb style=\"margin:16px 0;\">\n    <!-- <nz-breadcrumb-item>Home</nz-breadcrumb-item> -->\n    <nz-breadcrumb-item>Posts</nz-breadcrumb-item>\n  </nz-breadcrumb>\n  <div style=\"background:#fff; padding: 24px; min-height: 280px;\">\n    <div nz-row>\n      <div nz-col ontouchstart=\"\" [nzLg]=\"8\" [nzSm]=\"12\" *ngFor=\"let post of posts?.data | dateformat\">\n          <div class=\"example-2 card\">\n              <div class=\"wrapper\" [ngStyle]=\"{'background-image': 'url(' + (post?.posters[0]?.url || '/assets/navy.jpg') + ')'}\">\n                <div class=\"header\">\n                  <div class=\"date\">\n                    <span>{{ post.createdAt }}</span>\n                  </div>\n                  <ul class=\"menu-content\">\n                    <li>\n                      <div class=\"fa fa-bookmark\"></div>\n                    </li>\n                    <li><div class=\"fa fa-heart\"><span>18</span></div></li>\n                    <li><div class=\"fa fa-comment\"><span>3</span></div></li>\n                  </ul>\n                </div>\n                <div class=\"data\">\n                  <div class=\"content\">\n                    <!-- <span class=\"author\">Jane Doe</span> -->\n                    <h1 class=\"title\"><a [routerLink]=\"['/posts/view/' + post._id]\">{{ post.title }}</a></h1>\n                    <p class=\"text\"></p>\n                    <a [routerLink]=\"['/posts/view/' + post._id]\" class=\"button\">Read more</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"pagination\">\n    <nz-pagination [nzTotal]=\"posts?.total\" [nzItemRender]=\"hyperlink\" [nzPageIndex]=\"params?.page || 1\" (nzPageIndexChange)=\"handlePageChange($event)\"></nz-pagination>\n    <ng-template #hyperlink let-pageParams=\"$implicit\" let-pageNumber=\"page\">\n      <a *ngIf=\"pageParams === 'pre'\"><</a>\n      <a *ngIf=\"pageParams === 'page'\" [routerLink]=\"[ getPageURL(pageNumber) ]\">{{ pageNumber }}</a>\n      <a *ngIf=\"pageParams === 'next'\">></a>\n    </ng-template>\n    \n  </div>"

/***/ }),

/***/ "./src/app/views/posts/view/view.component.scss":
/*!******************************************************!*\
  !*** ./src/app/views/posts/view/view.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .pagination {\n  padding: 2%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlzY29uc3RhbnRlL0Rlc2t0b3AvbGNvbnN0LmpzL2Jsb2cvc3JjL2FwcC92aWV3cy9wb3N0cy92aWV3L3ZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Bvc3RzL3ZpZXcvdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLnBhZ2luYXRpb24ge1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufSJdfQ== */"

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
/* harmony import */ var src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var ViewComponent = /** @class */ (function () {
    function ViewComponent(blogService, router, route, sanitize, meta, title) {
        var _this = this;
        this.blogService = blogService;
        this.router = router;
        this.route = route;
        this.sanitize = sanitize;
        this.meta = meta;
        this.title = title;
        this.getParams().then(function (params) {
            _this.blogService.getPosts((_this.params.page - 1) * 10).subscribe(function (posts) {
                console.log(posts);
                _this.posts = posts;
                _this.meta.addTag({ name: 'description', content: src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].blog.description });
                _this.meta.addTag({ name: 'author', content: src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].blog.author });
                _this.meta.addTag({ name: 'keywords', content: src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].blog.keywords });
                _this.title.setTitle(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].blog.title);
            });
        });
    }
    ViewComponent.prototype.ngOnInit = function () {
        console.log(this.params);
    };
    ViewComponent.prototype.getParams = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.route.queryParams.subscribe(function (params) { return _this.params = params; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ViewComponent.prototype.handlePageChange = function (pageNumber) {
        var _this = this;
        this.blogService.getPosts((pageNumber - 1) * 10).subscribe(function (posts) {
            _this.router.navigate(['/posts/list'], { queryParams: { page: pageNumber } });
            console.log(posts);
            _this.posts = posts;
        });
    };
    ViewComponent.prototype.sanitizeUrl = function (url) {
        this.sanitize.bypassSecurityTrustStyle(url);
    };
    ViewComponent.prototype.log = function (item) {
        console.log(item);
        return item;
    };
    ViewComponent.prototype.getPageURL = function (page) {
        console.log(page);
        return "/posts/list?page=" + page;
    };
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/views/posts/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.scss */ "./src/app/views/posts/view/view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    host: '',
    domain: 'http://luisconstante.com/',
    blog: {
        description: '© La Universal Magazine',
        author: '© La Universal Magazine',
        keywords: '© La Universal Magazine',
        title: 'Cool new blog',
    }
};
var done = false;
done ? alert('Configure Env Variables for Angular') : '';


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
    host: 'http://localhost:3030',
    domain: 'http://localhost:3030/',
    blog: {
        description: '© La Universal Magazine',
        author: '© La Universal Magazine',
        keywords: '© La Universal Magazine',
        title: 'Cool new blog',
    }
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