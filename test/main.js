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



var routes = [];
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(translateService) {
        this.translateService = translateService;
        this.translateService.use('en');
        this.translateService.setDefaultLang('en');
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_main_page_main_page_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/main-page/main-page.module */ "./src/app/pages/main-page/main-page.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_scroll_events_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/scroll-events.service */ "./src/app/services/scroll-events.service.ts");
/* harmony import */ var ngx_responsive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-responsive */ "./node_modules/ngx-responsive/fesm5/ngx-responsive.js");











// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http);
}
var config = {
    breakPoints: {
        xs: { max: 600 },
        sm: { min: 601, max: 959 },
        md: { min: 960, max: 1279 },
        lg: { min: 1280, max: 1919 },
        xl: { min: 1920 }
    },
    debounceTime: 100
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _pages_main_page_main_page_module__WEBPACK_IMPORTED_MODULE_7__["MainPageModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                    }
                }),
                ngx_responsive__WEBPACK_IMPORTED_MODULE_10__["ResponsiveModule"].forRoot(config)
            ],
            providers: [
                _services_scroll_events_service__WEBPACK_IMPORTED_MODULE_9__["ScrollEventsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directives/scroll.directive.ts":
/*!************************************************!*\
  !*** ./src/app/directives/scroll.directive.ts ***!
  \************************************************/
/*! exports provided: ScrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDirective", function() { return ScrollDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_window_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/window.service */ "./src/app/services/window.service.ts");
/* harmony import */ var _services_scroll_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/scroll-events.service */ "./src/app/services/scroll-events.service.ts");





var ScrollDirective = /** @class */ (function () {
    function ScrollDirective(document, window, scrollEventsService) {
        this.document = document;
        this.window = window;
        this.scrollEventsService = scrollEventsService;
    }
    ScrollDirective.prototype.onWindowScroll = function () {
        var offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        this.scrollEventsService.setPageOffset(offset);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event.target']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ScrollDirective.prototype, "onWindowScroll", null);
    ScrollDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appScroll]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_window_service__WEBPACK_IMPORTED_MODULE_3__["WINDOW"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document,
            Window,
            _services_scroll_events_service__WEBPACK_IMPORTED_MODULE_4__["ScrollEventsService"]])
    ], ScrollDirective);
    return ScrollDirective;
}());



/***/ }),

/***/ "./src/app/pages/main-page/components/authors/authors.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/main-page/components/authors/authors.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"authors\">\n  <div class=\"br\"></div>\n  <div class=\"author\">\n    <div class=\"photo first\"></div>\n    <h2 [translate]=\"'Doctors-item1.name'\"></h2>\n    <h3 [translate]=\"'Doctors-item1.position'\"></h3>\n    <p class=\"text\" [translate]=\"'Doctors-item1.text'\"></p>\n  </div>\n  <div class=\"author\">\n    <div class=\"photo second\"></div>\n    <h2 [translate]=\"'Doctors-item2.name'\"></h2>\n    <h3 [translate]=\"'Doctors-item2.position'\"></h3>\n    <p class=\"text\" [translate]=\"'Doctors-item2.text'\"></p>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/main-page/components/authors/authors.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/main-page/components/authors/authors.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Typographic\n * use ex. .title { @extend %h1; }\n */\nsection.authors .author h2 {\n  font-style: normal;\n  font-weight: bold;\n  line-height: 48px;\n  font-size: 40px;\n  color: #333333;\n  margin: 0; }\nsection.authors .author h3 {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 32px;\n  font-size: 24px;\n  color: #333333;\n  margin: 0; }\nsection.authors .author p.text {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 25px;\n  font-size: 18px;\n  color: #333333; }\n/* Typographic mobile\n * use ex. .title { @extend %h1-mob; }\n */\na {\n  color: #21AE49;\n  text-decoration: none; }\nsection.authors {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\nsection.authors .br {\n    width: calc(100% - 260px);\n    height: 1px;\n    background-color: #E7E7E7;\n    margin-bottom: 59px; }\nsection.authors .author {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 60px;\n    width: 615px; }\nsection.authors .author .photo {\n      width: 90px;\n      height: 90px;\n      border-radius: 100%;\n      background-size: cover;\n      margin-bottom: 14px; }\nsection.authors .author .photo.first {\n        background: transparent url('author-1.png') no-repeat center; }\nsection.authors .author .photo.second {\n        background: transparent url('author-2.png') no-repeat center; }\nsection.authors .author h2 {\n      margin-bottom: 8px; }\nsection.authors .author h3 {\n      margin-bottom: 22px; }\nsection.authors .author p.text {\n      margin: 0;\n      text-align: center; }\n@media screen and (max-width: 600px) {\n  section.authors .br {\n    width: calc(100% - 82px);\n    margin-bottom: 50px; }\n  section.authors .author {\n    width: 100%;\n    padding: 0 34px; }\n    section.authors .author .photo {\n      margin-bottom: 12px; }\n    section.authors .author h2 {\n      font-style: normal;\n      font-weight: bold;\n      line-height: 48px;\n      font-size: 24px;\n      color: #333333; }\n    section.authors .author h3 {\n      font-style: normal;\n      font-weight: normal;\n      line-height: 32px;\n      font-size: 20px;\n      letter-spacing: 0.4px;\n      color: #333333; }\n    section.authors .author p.text {\n      font-style: normal;\n      font-weight: normal;\n      line-height: 25px;\n      font-size: 17px;\n      color: #333333; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9zdHlsZXMvX3VpLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2F1dGhvcnMvYXV0aG9ycy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL2NvbXBvbmVudHMvYXV0aG9ycy9hdXRob3JzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BOztFQ0pFO0FDQUY7RUZnQkUsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBckJZO0VBc0JaLFNBQVMsRUFBQTtBRXJCWDtFRndCRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0E3Qlk7RUE4QlosU0FBUyxFQUFBO0FFN0JYO0VGd0NFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQTdDWSxFQUFBO0FBd0VkOztFQzdDRTtBRG1LRjtFQUNFLGNBOUxjO0VBK0xkLHFCQUFxQixFQUFBO0FFL0x2QjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQixFQUFBO0FBSnJCO0lBTUkseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCx5QkZOZ0I7SUVPaEIsbUJBQW1CLEVBQUE7QUFUdkI7SUFZSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWSxFQUFBO0FBaEJoQjtNQWtCTSxXQUFXO01BQ1gsWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixzQkFBc0I7TUFDdEIsbUJBQW1CLEVBQUE7QUF0QnpCO1FBd0JRLDREQUFrRixFQUFBO0FBeEIxRjtRQTJCUSw0REFBa0YsRUFBQTtBQTNCMUY7TUFpQ00sa0JBQWtCLEVBQUE7QUFqQ3hCO01BcUNNLG1CQUFtQixFQUFBO0FBckN6QjtNQXlDTSxTQUFTO01BQ1Qsa0JBQWtCLEVBQUE7QUFXeEI7RUFyREE7SUF3RE0sd0JBQXdCO0lBQ3hCLG1CQUFtQixFQUFBO0VBekR6QjtJQTRETSxXQUFXO0lBQ1gsZUFBZSxFQUFBO0lBN0RyQjtNQStEUSxtQkFBbUIsRUFBQTtJQS9EM0I7TUZnR0Usa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGNBckdZLEVBQUE7SUVDZDtNRitHRSxrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YscUJBQXFCO01BQ3JCLGNBckhZLEVBQUE7SUVDZDtNRjhJRSxrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsY0FuSlksRUFBQSxFRTBFUCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2F1dGhvcnMvYXV0aG9ycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbG9yc1xuJG1haW46ICMzMzMzMzM7XG4kYWN0aW9uOiAjMjFBRTQ5O1xuJGdyZXk6ICM5OTk5OTk7XG4kbGlnaHQtZ3JleTogI0U3RTdFNztcblxuLyogVHlwb2dyYXBoaWNcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDE7IH1cbiAqL1xuJWgxIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIGZvbnQtc2l6ZTogNTZweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG59XG4laDIge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogJG1haW47XG4gIG1hcmdpbjogMDtcbn1cbiVoMyB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG59XG4laDQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xufVxuJWJvZHkge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVuYXZpZ2F0aW9uIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVzbGlkZXIge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRncmV5O1xufVxuJWNhcHRpb24ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgY29sb3I6ICRncmV5O1xufVxuXG4vKiBUeXBvZ3JhcGhpYyBtb2JpbGVcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDEtbW9iOyB9XG4gKi9cbiVoMS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gaDEtbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWgyLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoMi1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogJG1haW47XG59XG4laDMtbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoMy1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWg0LW1vYiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gaDQtbW9iIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVib2R5LW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGJvZHktbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogJG1haW47XG59XG4lbG9jYWwtbmF2aWdhdGlvbi1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRncmV5O1xufVxuQG1peGluIGxvY2FsLW5hdmlnYXRpb24tbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAkZ3JleTtcbn1cblxuLy8gQnV0dG9uXG4lYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogJGFjdGlvbjtcbiAgYm9yZGVyOiAxcHggc29saWQgJGFjdGlvbjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxM3B4O1xuICBtaW4td2lkdGg6IDE4MS45OHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiVzdG9yZXMge1xuICBvdXRsaW5lOiBub25lO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxNjFweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5hIHtcbiAgY29sb3I6ICRhY3Rpb247XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiIsIi8qIFR5cG9ncmFwaGljXG4gKiB1c2UgZXguIC50aXRsZSB7IEBleHRlbmQgJWgxOyB9XG4gKi9cbnNlY3Rpb24uYXV0aG9ycyAuYXV0aG9yIGgyIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIG1hcmdpbjogMDsgfVxuXG5zZWN0aW9uLmF1dGhvcnMgLmF1dGhvciBoMyB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIG1hcmdpbjogMDsgfVxuXG5zZWN0aW9uLmF1dGhvcnMgLmF1dGhvciBwLnRleHQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMzMzMzMzOyB9XG5cbi8qIFR5cG9ncmFwaGljIG1vYmlsZVxuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMS1tb2I7IH1cbiAqL1xuYSB7XG4gIGNvbG9yOiAjMjFBRTQ5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cblxuc2VjdGlvbi5hdXRob3JzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgc2VjdGlvbi5hdXRob3JzIC5iciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI2MHB4KTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdFN0U3O1xuICAgIG1hcmdpbi1ib3R0b206IDU5cHg7IH1cbiAgc2VjdGlvbi5hdXRob3JzIC5hdXRob3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgd2lkdGg6IDYxNXB4OyB9XG4gICAgc2VjdGlvbi5hdXRob3JzIC5hdXRob3IgLnBob3RvIHtcbiAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNHB4OyB9XG4gICAgICBzZWN0aW9uLmF1dGhvcnMgLmF1dGhvciAucGhvdG8uZmlyc3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvYXV0aG9yLTEucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXI7IH1cbiAgICAgIHNlY3Rpb24uYXV0aG9ycyAuYXV0aG9yIC5waG90by5zZWNvbmQge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvYXV0aG9yLTIucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXI7IH1cbiAgICBzZWN0aW9uLmF1dGhvcnMgLmF1dGhvciBoMiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7IH1cbiAgICBzZWN0aW9uLmF1dGhvcnMgLmF1dGhvciBoMyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMnB4OyB9XG4gICAgc2VjdGlvbi5hdXRob3JzIC5hdXRob3IgcC50ZXh0IHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBzZWN0aW9uLmF1dGhvcnMgLmJyIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gODJweCk7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDsgfVxuICBzZWN0aW9uLmF1dGhvcnMgLmF1dGhvciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCAzNHB4OyB9XG4gICAgc2VjdGlvbi5hdXRob3JzIC5hdXRob3IgLnBob3RvIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7IH1cbiAgICBzZWN0aW9uLmF1dGhvcnMgLmF1dGhvciBoMiB7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgY29sb3I6ICMzMzMzMzM7IH1cbiAgICBzZWN0aW9uLmF1dGhvcnMgLmF1dGhvciBoMyB7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gICAgICBjb2xvcjogIzMzMzMzMzsgfVxuICAgIHNlY3Rpb24uYXV0aG9ycyAuYXV0aG9yIHAudGV4dCB7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICBjb2xvcjogIzMzMzMzMzsgfSB9XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdWknO1xuXG5zZWN0aW9uLmF1dGhvcnMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLmJyIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjYwcHgpO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmV5O1xuICAgIG1hcmdpbi1ib3R0b206IDU5cHg7XG4gIH1cbiAgLmF1dGhvciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgICB3aWR0aDogNjE1cHg7XG4gICAgLnBob3RvIHtcbiAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgICAgJi5maXJzdCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2F1dGhvci0xLnBuZycpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgICB9XG4gICAgICAmLnNlY29uZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2F1dGhvci0yLnBuZycpIG5vLXJlcGVhdCBjZW50ZXI7XG5cbiAgICAgIH1cbiAgICB9XG4gICAgaDIge1xuICAgICAgQGV4dGVuZCAlaDI7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuICAgIGgzIHtcbiAgICAgIEBleHRlbmQgJWgzO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjJweDtcbiAgICB9XG4gICAgcC50ZXh0IHtcbiAgICAgIEBleHRlbmQgJWJvZHk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG59XG5cbi8vIHRhYmxldCBzbVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCl7XG5cbn1cblxuLy8gbW9iaWxlIHhzXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XG4gIHNlY3Rpb24uYXV0aG9ycyB7XG4gICAgLmJyIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MnB4KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgfVxuICAgIC5hdXRob3Ige1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAwIDM0cHg7XG4gICAgICAucGhvdG8ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgfVxuICAgICAgaDIge1xuICAgICAgICBAaW5jbHVkZSBoMi1tb2I7XG4gICAgICB9XG4gICAgICBoMyB7XG4gICAgICAgIEBpbmNsdWRlIGgzLW1vYjtcbiAgICAgIH1cbiAgICAgIHAudGV4dCB7XG4gICAgICAgIEBpbmNsdWRlIGJvZHktbW9iO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/main-page/components/authors/authors.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/main-page/components/authors/authors.component.ts ***!
  \*************************************************************************/
/*! exports provided: AuthorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorsComponent", function() { return AuthorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthorsComponent = /** @class */ (function () {
    function AuthorsComponent() {
    }
    AuthorsComponent.prototype.ngOnInit = function () {
    };
    AuthorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authors',
            template: __webpack_require__(/*! ./authors.component.html */ "./src/app/pages/main-page/components/authors/authors.component.html"),
            styles: [__webpack_require__(/*! ./authors.component.scss */ "./src/app/pages/main-page/components/authors/authors.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthorsComponent);
    return AuthorsComponent;
}());



/***/ }),

/***/ "./src/app/pages/main-page/components/feature-topics/feature-topics.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/main-page/components/feature-topics/feature-topics.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"feature-topics\">\n  <h2 [translate]=\"'Feature-topics.title'\"></h2>\n  <div class=\"links\">\n    <div class=\"col\">\n      <a href=\"#feature-topic\" target=\"_blank\" [translate]=\"'Feature-topics.link1.title'\"></a>\n      <a href=\"#feature-topic\" target=\"_blank\" [translate]=\"'Feature-topics.link2.title'\"></a>\n      <a href=\"#feature-topic\" target=\"_blank\" [translate]=\"'Feature-topics.link3.title'\"></a>\n      <a href=\"#feature-topic\" target=\"_blank\" [translate]=\"'Feature-topics.link4.title'\"></a>\n    </div>\n    <div class=\"col\">\n      <a href=\"#feature-topic\" target=\"_blank\" [translate]=\"'Feature-topics.link5.title'\"></a>\n      <a href=\"#feature-topic\" target=\"_blank\" [translate]=\"'Feature-topics.link6.title'\"></a>\n      <a href=\"#feature-topic\" target=\"_blank\" [translate]=\"'Feature-topics.link7.title'\"></a>\n      <a href=\"#feature-topic\" target=\"_blank\" [translate]=\"'Feature-topics.link8.title'\"></a>\n    </div>\n    <div class=\"col\">\n      <a href=\"#feature-topic\" target=\"_blank\" [translate]=\"'Feature-topics.link9.title'\"></a>\n      <a href=\"#feature-topic\" target=\"_blank\" [translate]=\"'Feature-topics.link10.title'\"></a>\n      <a href=\"#feature-topic\" target=\"_blank\" [translate]=\"'Feature-topics.link11.title'\"></a>\n      <a href=\"#feature-topic\" target=\"_blank\" [translate]=\"'Feature-topics.link12.title'\"></a>\n    </div>\n  </div>\n  <div class=\"controls\" *responsive=\"{ bootstrap: ['xl', 'lg', 'md', 'sm'] }\">\n    <a href=\"#feature-topic\" target=\"_blank\"><i class=\"icon search\"></i>{{ 'Feature-topics.control1.title' | translate }}</a>\n    <a href=\"#feature-topic\" target=\"_blank\"><i class=\"icon book\"></i>{{ 'Feature-topics.control2.title' | translate }}</a>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/main-page/components/feature-topics/feature-topics.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/main-page/components/feature-topics/feature-topics.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Typographic\n * use ex. .title { @extend %h1; }\n */\nsection.feature-topics h2 {\n  font-style: normal;\n  font-weight: bold;\n  line-height: 48px;\n  font-size: 40px;\n  color: #333333;\n  margin: 0; }\nsection.feature-topics .links .col a, section.feature-topics .controls a {\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  font-size: 18px;\n  color: #333333;\n  margin: 0; }\n/* Typographic mobile\n * use ex. .title { @extend %h1-mob; }\n */\na {\n  color: #21AE49;\n  text-decoration: none; }\nsection.feature-topics {\n  width: 100%;\n  padding: 60px 0 42px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\nsection.feature-topics h2 {\n    margin-bottom: 60px; }\nsection.feature-topics .links {\n    width: 615px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\nsection.feature-topics .links .col {\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: flex-start; }\nsection.feature-topics .links .col a {\n        margin-bottom: 18px; }\nsection.feature-topics .controls {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 615px;\n    margin-top: 39px; }\nsection.feature-topics .controls a {\n      color: #21AE49;\n      display: flex;\n      align-items: center; }\nsection.feature-topics .controls a i.icon {\n        display: inline-block;\n        width: 25px;\n        height: 25px;\n        background-position: center;\n        background-repeat: no-repeat;\n        margin-right: 10px; }\nsection.feature-topics .controls a i.icon.search {\n          background-image: url('search-icon.svg'); }\nsection.feature-topics .controls a i.icon.book {\n          background-image: url('book-icon.svg'); }\n@media screen and (max-width: 600px) {\n  section.feature-topics {\n    padding: 20px 0 42px; }\n    section.feature-topics h2 {\n      font-style: normal;\n      font-weight: bold;\n      line-height: 48px;\n      font-size: 24px;\n      color: #333333;\n      margin-bottom: 29px; }\n    section.feature-topics .links {\n      width: 100%;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center; }\n      section.feature-topics .links .col {\n        align-items: center; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9zdHlsZXMvX3VpLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2ZlYXR1cmUtdG9waWNzL2ZlYXR1cmUtdG9waWNzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FsZXh6YXZnb3JvZG5paS9Qcm9qZWN0cy9sYW50aGllci1wcm9tb3NpdGUvc3JjL2FwcC9wYWdlcy9tYWluLXBhZ2UvY29tcG9uZW50cy9mZWF0dXJlLXRvcGljcy9mZWF0dXJlLXRvcGljcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTs7RUNKRTtBQ0FGO0VGZ0JFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQXJCWTtFQXNCWixTQUFTLEVBQUE7QUVyQlg7RUZnQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBckNZO0VBc0NaLFNBQVMsRUFBQTtBQWtDWDs7RUNwREU7QUQwS0Y7RUFDRSxjQTlMYztFQStMZCxxQkFBcUIsRUFBQTtBRS9MdkI7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBO0FBTnJCO0lBU0ksbUJBQW1CLEVBQUE7QUFUdkI7SUFZSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEIsRUFBQTtBQWZsQztNQWlCTSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLDJCQUEyQjtNQUMzQix1QkFBdUIsRUFBQTtBQXBCN0I7UUF1QlEsbUJBQW1CLEVBQUE7QUF2QjNCO0lBNEJJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7QUFqQ3BCO01Bb0NNLGNGcENVO01FcUNWLGFBQWE7TUFDYixtQkFBbUIsRUFBQTtBQXRDekI7UUF3Q1EscUJBQXFCO1FBQ3JCLFdBQVc7UUFDWCxZQUFZO1FBQ1osMkJBQTJCO1FBQzNCLDRCQUE0QjtRQUM1QixrQkFBa0IsRUFBQTtBQTdDMUI7VUErQ1Usd0NBQThELEVBQUE7QUEvQ3hFO1VBa0RVLHNDQUE0RCxFQUFBO0FBYXRFO0VBL0RBO0lBaUVJLG9CQUFvQixFQUFBO0lBakV4QjtNRmdHRSxrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsY0FyR1k7TUVxRVIsbUJBQW1CLEVBQUE7SUFwRXpCO01BdUVNLFdBQVc7TUFDWCxzQkFBc0I7TUFDdEIsbUJBQW1CO01BQ25CLHVCQUF1QixFQUFBO01BMUU3QjtRQTRFUSxtQkFBbUIsRUFBQSxFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2ZlYXR1cmUtdG9waWNzL2ZlYXR1cmUtdG9waWNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29sb3JzXG4kbWFpbjogIzMzMzMzMztcbiRhY3Rpb246ICMyMUFFNDk7XG4kZ3JleTogIzk5OTk5OTtcbiRsaWdodC1ncmV5OiAjRTdFN0U3O1xuXG4vKiBUeXBvZ3JhcGhpY1xuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMTsgfVxuICovXG4laDEge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiA1NnB4O1xuICBjb2xvcjogJG1haW47XG4gIG1hcmdpbjogMDtcbn1cbiVoMiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xufVxuJWgzIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogJG1haW47XG4gIG1hcmdpbjogMDtcbn1cbiVoNCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG59XG4lYm9keSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJW5hdmlnYXRpb24ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJXNsaWRlciB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG4lY2FwdGlvbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5cbi8qIFR5cG9ncmFwaGljIG1vYmlsZVxuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMS1tb2I7IH1cbiAqL1xuJWgxLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoMS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogJG1haW47XG59XG4laDItbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGgyLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVoMy1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGgzLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBjb2xvcjogJG1haW47XG59XG4laDQtbW9iIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoNC1tb2Ige1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWJvZHktbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gYm9keS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVsb2NhbC1uYXZpZ2F0aW9uLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5AbWl4aW4gbG9jYWwtbmF2aWdhdGlvbi1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRncmV5O1xufVxuXG4vLyBCdXR0b25cbiVidXR0b24ge1xuICBiYWNrZ3JvdW5kOiAkYWN0aW9uO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYWN0aW9uO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEzcHg7XG4gIG1pbi13aWR0aDogMTgxLjk4cHg7XG4gIGhlaWdodDogNTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuJXN0b3JlcyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDE2MXB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmEge1xuICBjb2xvcjogJGFjdGlvbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIiwiLyogVHlwb2dyYXBoaWNcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDE7IH1cbiAqL1xuc2VjdGlvbi5mZWF0dXJlLXRvcGljcyBoMiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBtYXJnaW46IDA7IH1cblxuc2VjdGlvbi5mZWF0dXJlLXRvcGljcyAubGlua3MgLmNvbCBhLCBzZWN0aW9uLmZlYXR1cmUtdG9waWNzIC5jb250cm9scyBhIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgbWFyZ2luOiAwOyB9XG5cbi8qIFR5cG9ncmFwaGljIG1vYmlsZVxuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMS1tb2I7IH1cbiAqL1xuYSB7XG4gIGNvbG9yOiAjMjFBRTQ5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cblxuc2VjdGlvbi5mZWF0dXJlLXRvcGljcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA2MHB4IDAgNDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgc2VjdGlvbi5mZWF0dXJlLXRvcGljcyBoMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDsgfVxuICBzZWN0aW9uLmZlYXR1cmUtdG9waWNzIC5saW5rcyB7XG4gICAgd2lkdGg6IDYxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cbiAgICBzZWN0aW9uLmZlYXR1cmUtdG9waWNzIC5saW5rcyAuY29sIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cbiAgICAgIHNlY3Rpb24uZmVhdHVyZS10b3BpY3MgLmxpbmtzIC5jb2wgYSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7IH1cbiAgc2VjdGlvbi5mZWF0dXJlLXRvcGljcyAuY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNjE1cHg7XG4gICAgbWFyZ2luLXRvcDogMzlweDsgfVxuICAgIHNlY3Rpb24uZmVhdHVyZS10b3BpY3MgLmNvbnRyb2xzIGEge1xuICAgICAgY29sb3I6ICMyMUFFNDk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAgICAgc2VjdGlvbi5mZWF0dXJlLXRvcGljcyAuY29udHJvbHMgYSBpLmljb24ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XG4gICAgICAgIHNlY3Rpb24uZmVhdHVyZS10b3BpY3MgLmNvbnRyb2xzIGEgaS5pY29uLnNlYXJjaCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3NlYXJjaC1pY29uLnN2Z1wiKTsgfVxuICAgICAgICBzZWN0aW9uLmZlYXR1cmUtdG9waWNzIC5jb250cm9scyBhIGkuaWNvbi5ib29rIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvYm9vay1pY29uLnN2Z1wiKTsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBzZWN0aW9uLmZlYXR1cmUtdG9waWNzIHtcbiAgICBwYWRkaW5nOiAyMHB4IDAgNDJweDsgfVxuICAgIHNlY3Rpb24uZmVhdHVyZS10b3BpY3MgaDIge1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjlweDsgfVxuICAgIHNlY3Rpb24uZmVhdHVyZS10b3BpY3MgLmxpbmtzIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAgICAgc2VjdGlvbi5mZWF0dXJlLXRvcGljcyAubGlua3MgLmNvbCB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH0gfVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3VpJztcblxuc2VjdGlvbi5mZWF0dXJlLXRvcGljcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA2MHB4IDAgNDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGgyIHtcbiAgICBAZXh0ZW5kICVoMjtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICB9XG4gIC5saW5rcyB7XG4gICAgd2lkdGg6IDYxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLmNvbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgYSB7XG4gICAgICAgIEBleHRlbmQgJWg0O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNjE1cHg7XG4gICAgbWFyZ2luLXRvcDogMzlweDtcbiAgICBhIHtcbiAgICAgIEBleHRlbmQgJWg0O1xuICAgICAgY29sb3I6ICRhY3Rpb247XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGkuaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICYuc2VhcmNoIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zZWFyY2gtaWNvbi5zdmcnKTtcbiAgICAgICAgfVxuICAgICAgICAmLmJvb2sge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2Jvb2staWNvbi5zdmcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyB0YWJsZXQgc21cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpe1xuXG59XG5cbi8vIG1vYmlsZSB4c1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xuICBzZWN0aW9uLmZlYXR1cmUtdG9waWNzIHtcbiAgICBwYWRkaW5nOiAyMHB4IDAgNDJweDtcbiAgICBoMiB7XG4gICAgICBAaW5jbHVkZSBoMi1tb2I7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyOXB4O1xuICAgIH1cbiAgICAubGlua3Mge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgLmNvbCB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/main-page/components/feature-topics/feature-topics.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/main-page/components/feature-topics/feature-topics.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FeatureTopicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureTopicsComponent", function() { return FeatureTopicsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FeatureTopicsComponent = /** @class */ (function () {
    function FeatureTopicsComponent() {
    }
    FeatureTopicsComponent.prototype.ngOnInit = function () {
    };
    FeatureTopicsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feature-topics',
            template: __webpack_require__(/*! ./feature-topics.component.html */ "./src/app/pages/main-page/components/feature-topics/feature-topics.component.html"),
            styles: [__webpack_require__(/*! ./feature-topics.component.scss */ "./src/app/pages/main-page/components/feature-topics/feature-topics.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeatureTopicsComponent);
    return FeatureTopicsComponent;
}());



/***/ }),

/***/ "./src/app/pages/main-page/components/feature-vertical/feature-vertical.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/main-page/components/feature-vertical/feature-vertical.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<user-agent-info (info)=\"thisUserAgent($event)\"></user-agent-info>\n<section class=\"feature\">\n  <div class=\"content\">\n    <div class=\"info\">\n      <h2>{{ title }}</h2>\n      <div *responsive=\"{ bootstrap: ['xl', 'lg', 'md', 'sm'] }\" class=\"tabs\">\n        <div class=\"tab\" (click)=\"changePlatform('med')\" [ngClass]=\"{'active' : activePlatform === 'med'}\">\n          <div class=\"title\">{{ medCalXTitle }}</div>\n          <div class=\"text\">{{ medCalXText }}</div>\n        </div>\n        <div class=\"tab\" (click)=\"changePlatform('qxmd')\" [ngClass]=\"{'active' : activePlatform === 'qxmd'}\">\n          <div class=\"title\">{{ qxmdTitle }}</div>\n          <div class=\"text\">{{ qxmdText }}</div>\n        </div>\n      </div>\n      <div *xs class=\"mobile-content\">\n        <div class=\"item\">\n          <h3>{{ medCalXTitle }}</h3>\n          <span>{{ medCalXText }}</span>\n          <img [src]=\"medMobImg\" alt=\"med\">\n        </div>\n        <div class=\"item\">\n          <h3>{{ qxmdTitle }}</h3>\n          <span>{{ qxmdText }}</span>\n          <img [src]=\"qxmdMobImg\" alt=\"qxmd\">\n        </div>\n      </div>\n    </div>\n    <div *responsive=\"{ bootstrap: ['xl', 'lg', 'md', 'sm'] }\" class=\"picture\" [ngStyle]=\"{'background-image': 'url('+ selectedImage +')'}\"></div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/main-page/components/feature-vertical/feature-vertical.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/main-page/components/feature-vertical/feature-vertical.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Typographic\n * use ex. .title { @extend %h1; }\n */\nsection.feature .content .info h2 {\n  font-style: normal;\n  font-weight: bold;\n  line-height: 48px;\n  font-size: 40px;\n  color: #333333;\n  margin: 0; }\nsection.feature .content .info .tabs .tab .title {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 32px;\n  font-size: 24px;\n  color: #333333;\n  margin: 0; }\nsection.feature .content .info .tabs .tab .text {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 25px;\n  font-size: 18px;\n  color: #333333; }\n/* Typographic mobile\n * use ex. .title { @extend %h1-mob; }\n */\na {\n  color: #21AE49;\n  text-decoration: none; }\nsection.feature {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\nsection.feature .content {\n    background: linear-gradient(360deg, #FFF9FE 0.09%, #F5FEFF 100.1%);\n    border-radius: 20px;\n    max-width: 1180px;\n    padding: 24px 34px 24px 90px;\n    margin-bottom: 60px; }\nsection.feature .content .info {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      float: left;\n      width: calc(100% - 500px);\n      height: 552px; }\nsection.feature .content .info.multi {\n        padding-right: 30px; }\nsection.feature .content .info h2 {\n        width: 100%; }\nsection.feature .content .info .tabs {\n        margin-top: 45px; }\nsection.feature .content .info .tabs .tab {\n          padding: 33px 80px 33px 25px;\n          display: flex;\n          flex-direction: column;\n          width: 100%; }\nsection.feature .content .info .tabs .tab.active {\n            background-image: url('itegration-active-item-bg.svg');\n            background-size: 100% 100%, 100% 100%; }\nsection.feature .content .info .tabs .tab:hover {\n            cursor: pointer; }\nsection.feature .content .info .tabs .tab .title {\n            margin-bottom: 14px; }\nsection.feature .content .picture {\n      float: left;\n      height: 552px;\n      width: 500px;\n      background-repeat: no-repeat;\n      background-size: contain;\n      background-position: 70px 0; }\n@media screen and (max-width: 600px) {\n  section.feature .content {\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    padding: 38px 0 0 !important;\n    margin-bottom: 40px; }\n    section.feature .content .info {\n      width: 100%;\n      height: auto;\n      padding: 0 24px 17px 30px; }\n      section.feature .content .info h2 {\n        font-style: normal;\n        font-weight: bold;\n        line-height: 48px;\n        font-size: 24px;\n        color: #333333;\n        margin-bottom: 20px; }\n      section.feature .content .info .mobile-content .item {\n        display: flex;\n        flex-direction: column;\n        align-items: center; }\n        section.feature .content .info .mobile-content .item h3 {\n          font-style: normal;\n          font-weight: normal;\n          line-height: 32px;\n          font-size: 20px;\n          letter-spacing: 0.4px;\n          color: #333333;\n          width: 100%; }\n        section.feature .content .info .mobile-content .item span {\n          font-style: normal;\n          font-weight: normal;\n          line-height: 25px;\n          font-size: 17px;\n          color: #333333;\n          width: 100%;\n          display: inline-block;\n          margin-bottom: 32px; }\n        section.feature .content .info .mobile-content .item img {\n          align-self: center;\n          max-width: 60%;\n          height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9zdHlsZXMvX3VpLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2ZlYXR1cmUtdmVydGljYWwvZmVhdHVyZS12ZXJ0aWNhbC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL2NvbXBvbmVudHMvZmVhdHVyZS12ZXJ0aWNhbC9mZWF0dXJlLXZlcnRpY2FsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BOztFQ0pFO0FDQUY7RUZnQkUsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBckJZO0VBc0JaLFNBQVMsRUFBQTtBRXJCWDtFRndCRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0E3Qlk7RUE4QlosU0FBUyxFQUFBO0FFN0JYO0VGd0NFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQTdDWSxFQUFBO0FBd0VkOztFQzdDRTtBRG1LRjtFQUNFLGNBOUxjO0VBK0xkLHFCQUFxQixFQUFBO0FFL0x2QjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBO0FBSnJCO0lBTUksa0VBQWtFO0lBQ2xFLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLG1CQUFtQixFQUFBO0FBVnZCO01BWU0sYUFBYTtNQUNiLHNCQUFzQjtNQUN0Qix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLFdBQVc7TUFDWCx5QkFBeUI7TUFDekIsYUFBYSxFQUFBO0FBbEJuQjtRQW9CUSxtQkFBbUIsRUFBQTtBQXBCM0I7UUF3QlEsV0FBVyxFQUFBO0FBeEJuQjtRQTJCUSxnQkFBZ0IsRUFBQTtBQTNCeEI7VUE2QlUsNEJBQTRCO1VBQzVCLGFBQWE7VUFDYixzQkFBc0I7VUFDdEIsV0FBVyxFQUFBO0FBaENyQjtZQWtDWSxzREFBNEU7WUFDNUUscUNBQXFDLEVBQUE7QUFuQ2pEO1lBc0NZLGVBQWUsRUFBQTtBQXRDM0I7WUEwQ1ksbUJBQW1CLEVBQUE7QUExQy9CO01BbURNLFdBQVc7TUFDWCxhQUFhO01BQ2IsWUFBWTtNQUNaLDRCQUE0QjtNQUM1Qix3QkFBd0I7TUFDeEIsMkJBQTJCLEVBQUE7QUFXakM7RUFuRUE7SUFzRU0sWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNEJBQTJCO0lBQzNCLG1CQUFtQixFQUFBO0lBMUV6QjtNQTRFUSxXQUFXO01BQ1gsWUFBWTtNQUNaLHlCQUF5QixFQUFBO01BOUVqQztRRmdHRSxrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsY0FyR1k7UUVrRkosbUJBQW1CLEVBQUE7TUFiM0I7UUFpQlUsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUIsRUFBQTtRQW5CN0I7VUYyQ0Esa0JBQWtCO1VBQ2xCLG1CQUFtQjtVQUNuQixpQkFBaUI7VUFDakIsZUFBZTtVQUNmLHFCQUFxQjtVQUNyQixjQXJIWTtVRTJGQSxXQUFXLEVBQUE7UUF0QnZCO1VGMEVBLGtCQUFrQjtVQUNsQixtQkFBbUI7VUFDbkIsaUJBQWlCO1VBQ2pCLGVBQWU7VUFDZixjQW5KWTtVRStGQSxXQUFXO1VBQ1gscUJBQXFCO1VBQ3JCLG1CQUFtQixFQUFBO1FBNUIvQjtVQStCWSxrQkFBa0I7VUFDbEIsY0FBYztVQUNkLFlBQVksRUFBQSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL2NvbXBvbmVudHMvZmVhdHVyZS12ZXJ0aWNhbC9mZWF0dXJlLXZlcnRpY2FsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29sb3JzXG4kbWFpbjogIzMzMzMzMztcbiRhY3Rpb246ICMyMUFFNDk7XG4kZ3JleTogIzk5OTk5OTtcbiRsaWdodC1ncmV5OiAjRTdFN0U3O1xuXG4vKiBUeXBvZ3JhcGhpY1xuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMTsgfVxuICovXG4laDEge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiA1NnB4O1xuICBjb2xvcjogJG1haW47XG4gIG1hcmdpbjogMDtcbn1cbiVoMiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xufVxuJWgzIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogJG1haW47XG4gIG1hcmdpbjogMDtcbn1cbiVoNCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG59XG4lYm9keSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJW5hdmlnYXRpb24ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJXNsaWRlciB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG4lY2FwdGlvbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5cbi8qIFR5cG9ncmFwaGljIG1vYmlsZVxuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMS1tb2I7IH1cbiAqL1xuJWgxLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoMS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogJG1haW47XG59XG4laDItbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGgyLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVoMy1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGgzLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBjb2xvcjogJG1haW47XG59XG4laDQtbW9iIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoNC1tb2Ige1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWJvZHktbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gYm9keS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVsb2NhbC1uYXZpZ2F0aW9uLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5AbWl4aW4gbG9jYWwtbmF2aWdhdGlvbi1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRncmV5O1xufVxuXG4vLyBCdXR0b25cbiVidXR0b24ge1xuICBiYWNrZ3JvdW5kOiAkYWN0aW9uO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYWN0aW9uO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEzcHg7XG4gIG1pbi13aWR0aDogMTgxLjk4cHg7XG4gIGhlaWdodDogNTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuJXN0b3JlcyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDE2MXB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmEge1xuICBjb2xvcjogJGFjdGlvbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIiwiLyogVHlwb2dyYXBoaWNcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDE7IH1cbiAqL1xuc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIGgyIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIG1hcmdpbjogMDsgfVxuXG5zZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8gLnRhYnMgLnRhYiAudGl0bGUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBtYXJnaW46IDA7IH1cblxuc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIC50YWJzIC50YWIgLnRleHQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMzMzMzMzOyB9XG5cbi8qIFR5cG9ncmFwaGljIG1vYmlsZVxuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMS1tb2I7IH1cbiAqL1xuYSB7XG4gIGNvbG9yOiAjMjFBRTQ5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cblxuc2VjdGlvbi5mZWF0dXJlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0ZGRjlGRSAwLjA5JSwgI0Y1RkVGRiAxMDAuMSUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiAxMTgwcHg7XG4gICAgcGFkZGluZzogMjRweCAzNHB4IDI0cHggOTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4OyB9XG4gICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNTAwcHgpO1xuICAgICAgaGVpZ2h0OiA1NTJweDsgfVxuICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvLm11bHRpIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDsgfVxuICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIGgyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCAuaW5mbyAudGFicyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQ1cHg7IH1cbiAgICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIC50YWJzIC50YWIge1xuICAgICAgICAgIHBhZGRpbmc6IDMzcHggODBweCAzM3B4IDI1cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIC50YWJzIC50YWIuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pdGVncmF0aW9uLWFjdGl2ZS1pdGVtLWJnLnN2Z1wiKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlLCAxMDAlIDEwMCU7IH1cbiAgICAgICAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8gLnRhYnMgLnRhYjpob3ZlciB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgICAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8gLnRhYnMgLnRhYiAudGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDsgfVxuICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCAucGljdHVyZSB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIGhlaWdodDogNTUycHg7XG4gICAgICB3aWR0aDogNTAwcHg7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNzBweCAwOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAzOHB4IDAgMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7IH1cbiAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBwYWRkaW5nOiAwIDI0cHggMTdweCAzMHB4OyB9XG4gICAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8gaDIge1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIC5tb2JpbGUtY29udGVudCAuaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIC5tb2JpbGUtY29udGVudCAuaXRlbSBoMyB7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICB3aWR0aDogMTAwJTsgfVxuICAgICAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8gLm1vYmlsZS1jb250ZW50IC5pdGVtIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDsgfVxuICAgICAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8gLm1vYmlsZS1jb250ZW50IC5pdGVtIGltZyB7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgIG1heC13aWR0aDogNjAlO1xuICAgICAgICAgIGhlaWdodDogYXV0bzsgfSB9XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdWknO1xuXG5zZWN0aW9uLmZlYXR1cmUge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC5jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjRkZGOUZFIDAuMDklLCAjRjVGRUZGIDEwMC4xJSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXgtd2lkdGg6IDExODBweDtcbiAgICBwYWRkaW5nOiAyNHB4IDM0cHggMjRweCA5MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgLmluZm8ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MDBweCk7XG4gICAgICBoZWlnaHQ6IDU1MnB4O1xuICAgICAgJi5tdWx0aSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgICB9XG4gICAgICBoMiB7XG4gICAgICAgIEBleHRlbmQgJWgyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC50YWJzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNDVweDtcbiAgICAgICAgLnRhYiB7XG4gICAgICAgICAgcGFkZGluZzogMzNweCA4MHB4IDMzcHggMjVweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaXRlZ3JhdGlvbi1hY3RpdmUtaXRlbS1iZy5zdmcnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlLCAxMDAlIDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgQGV4dGVuZCAlaDM7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBAZXh0ZW5kICVib2R5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAucGljdHVyZSB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIGhlaWdodDogNTUycHg7XG4gICAgICB3aWR0aDogNTAwcHg7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNzBweCAwO1xuICAgIH1cbiAgfVxufVxuXG4vLyB0YWJsZXQgc21cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpe1xuXG59XG5cbi8vIG1vYmlsZSB4c1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xuICBzZWN0aW9uLmZlYXR1cmUge1xuICAgIC5jb250ZW50IHtcbiAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcGFkZGluZzogMzhweCAwIDAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgIC5pbmZvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZzogMCAyNHB4IDE3cHggMzBweDtcbiAgICAgICAgaDIge1xuICAgICAgICAgIEBpbmNsdWRlIGgyLW1vYjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5tb2JpbGUtY29udGVudCB7XG4gICAgICAgICAgLml0ZW0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICBAaW5jbHVkZSBoMy1tb2I7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIEBpbmNsdWRlIGJvZHktbW9iO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/main-page/components/feature-vertical/feature-vertical.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/main-page/components/feature-vertical/feature-vertical.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FeatureVerticalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureVerticalComponent", function() { return FeatureVerticalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FeatureVerticalComponent = /** @class */ (function () {
    function FeatureVerticalComponent() {
        this.activePlatform = 'med';
    }
    FeatureVerticalComponent.prototype.ngOnInit = function () {
        var _this = this;
        switch (this.pixelratio) {
            case '1x':
                this.medMobImg = this.images[0].src.replace('@2x', '');
                this.qxmdMobImg = this.images[1].src.replace('@2x', '');
                break;
            case 'retina':
                this.medMobImg = this.images[0].src;
                this.qxmdMobImg = this.images[1].src;
                break;
            case '4k':
                this.medMobImg = this.images[0].src.replace('@2x', '@3x');
                this.qxmdMobImg = this.images[1].src.replace('@2x', '@3x');
                break;
            default:
                this.medMobImg = this.images[0].src;
                this.qxmdMobImg = this.images[1].src;
                break;
        }
        this.images.map(function (item) {
            if (item.platform === 'med') {
                switch (_this.pixelratio) {
                    case '1x':
                        _this.selectedImage = item.src.replace('@2x', '');
                        break;
                    case 'retina':
                        _this.selectedImage = item.src;
                        break;
                    case '4k':
                        _this.selectedImage = item.src.replace('@2x', '@3x');
                        break;
                    default:
                        _this.selectedImage = item.src.replace('@2x', '');
                        break;
                }
            }
        });
    };
    FeatureVerticalComponent.prototype.changePlatform = function (platform) {
        var _this = this;
        this.activePlatform = platform;
        this.images.map(function (item) {
            if (item.platform === platform) {
                switch (_this.pixelratio) {
                    case '1x':
                        _this.selectedImage = item.src.replace('@2x', '');
                        break;
                    case 'retina':
                        _this.selectedImage = item.src;
                        break;
                    case '4k':
                        _this.selectedImage = item.src.replace('@2x', '@3x');
                        break;
                    default:
                        _this.selectedImage = item.src.replace('@2x', '');
                        break;
                }
            }
        });
    };
    FeatureVerticalComponent.prototype.thisUserAgent = function (event) {
        this.pixelratio = event.pixelratio;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FeatureVerticalComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FeatureVerticalComponent.prototype, "medCalXTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FeatureVerticalComponent.prototype, "medCalXText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FeatureVerticalComponent.prototype, "qxmdTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FeatureVerticalComponent.prototype, "qxmdText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FeatureVerticalComponent.prototype, "images", void 0);
    FeatureVerticalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feature-vertical',
            template: __webpack_require__(/*! ./feature-vertical.component.html */ "./src/app/pages/main-page/components/feature-vertical/feature-vertical.component.html"),
            styles: [__webpack_require__(/*! ./feature-vertical.component.scss */ "./src/app/pages/main-page/components/feature-vertical/feature-vertical.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeatureVerticalComponent);
    return FeatureVerticalComponent;
}());



/***/ }),

/***/ "./src/app/pages/main-page/components/feature/feature.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/main-page/components/feature/feature.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<user-agent-info (info)=\"thisUserAgent($event)\"></user-agent-info>\n<section class=\"feature\">\n  <div class=\"content\" [ngClass]=\"{'web': activePlatform === 'web', 'mobile': activePlatform === 'ios' || activePlatform === 'android'}\">\n    <div class=\"info\" [ngClass]=\"{'multi': multiPlatform}\">\n      <h2>{{ title }}</h2>\n      <p class=\"sub\">{{ subTitle }}</p>\n      <p class=\"text\" [innerHTML]=\"text\"></p>\n      <div class=\"slider-control\" *ngIf=\"multiPlatform\">\n        <span [ngClass]=\"{'active': activePlatform === 'ios'}\" (click)=\"changePlatform($event, 'ios')\">iOS</span>\n        <span [ngClass]=\"{'active': activePlatform === 'android'}\" (click)=\"changePlatform($event, 'android')\">Android</span>\n        <span [ngClass]=\"{'active': activePlatform === 'web'}\" (click)=\"changePlatform($event, 'web')\">Web</span>\n        <i class=\"background\" [ngStyle]=\"{'width': toggleBgWidth, 'left': toggleBgLeft}\"></i>\n      </div>\n    </div>\n    <div class=\"picture\">\n      <img [ngClass]=\"{'web': activePlatform === 'web' }\" [src]=\"selectedSrc\" [alt]=\"activePlatform\">\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/main-page/components/feature/feature.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/main-page/components/feature/feature.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Typographic\n * use ex. .title { @extend %h1; }\n */\nsection.feature .content .info h2 {\n  font-style: normal;\n  font-weight: bold;\n  line-height: 48px;\n  font-size: 40px;\n  color: #333333;\n  margin: 0; }\nsection.feature .content .info p.sub {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 25px;\n  font-size: 18px;\n  color: #333333; }\n/* Typographic mobile\n * use ex. .title { @extend %h1-mob; }\n */\na {\n  color: #21AE49;\n  text-decoration: none; }\nsection.feature {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\nsection.feature .content {\n    background: linear-gradient(360deg, #FFF9FE 0.09%, #F5FEFF 100.1%);\n    border-radius: 20px;\n    max-width: 1180px;\n    margin-bottom: 60px;\n    display: flex; }\nsection.feature .content.web {\n      padding: 60px 34px 61px 90px; }\nsection.feature .content.mobile {\n      padding: 24px 34px 24px 90px; }\nsection.feature .content .info {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      float: left;\n      width: 35%; }\nsection.feature .content .info.multi {\n        padding-right: 30px; }\nsection.feature .content .info h2 {\n        width: 100%; }\nsection.feature .content .info p.sub {\n        width: 100%;\n        margin: 28px 0 20px 0; }\nsection.feature .content .info p.text {\n        font-style: normal;\n        font-weight: 500;\n        line-height: 24px;\n        font-size: 18px;\n        letter-spacing: 0.2px;\n        color: #333333;\n        width: 100%;\n        margin: 0 0 42px; }\nsection.feature .content .info .slider-control {\n        width: 100%;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: flex-start;\n        position: relative; }\nsection.feature .content .info .slider-control span {\n          display: flex;\n          align-items: center;\n          height: 38px;\n          padding: 0 26px;\n          font-style: normal;\n          font-weight: 500;\n          line-height: 24px;\n          font-size: 16px;\n          text-align: center;\n          letter-spacing: 0.2px;\n          color: #999999;\n          transition: color 400ms;\n          z-index: 1; }\nsection.feature .content .info .slider-control span:hover {\n            cursor: pointer; }\nsection.feature .content .info .slider-control span.active {\n            color: #ffffff; }\nsection.feature .content .info .slider-control i.background {\n          background: #333333;\n          border-radius: 28px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          height: 38px;\n          transition: left 400ms; }\nsection.feature .content .picture {\n      float: left;\n      width: 65%;\n      background-repeat: no-repeat;\n      background-size: contain;\n      background-position: center;\n      display: flex;\n      justify-content: center;\n      align-items: center; }\nsection.feature .content .picture img.web {\n        max-width: 100%;\n        height: auto; }\n@media screen and (max-width: 600px) {\n  section.feature .content {\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    padding: 38px 0 0 !important;\n    margin-bottom: 40px; }\n    section.feature .content .info {\n      width: 100%;\n      height: auto;\n      padding: 0 44px 17px; }\n      section.feature .content .info h2 {\n        font-style: normal;\n        font-weight: bold;\n        line-height: 48px;\n        font-size: 24px;\n        color: #333333;\n        margin-bottom: 20px; }\n      section.feature .content .info p.sub {\n        font-style: normal;\n        font-weight: normal;\n        line-height: 25px;\n        font-size: 17px;\n        color: #333333;\n        width: 100%;\n        margin: 0 0 18px 0; }\n      section.feature .content .info p.text {\n        margin: 0;\n        font-style: normal;\n        font-weight: 500;\n        line-height: 24px;\n        font-size: 17px;\n        color: #333333;\n        margin-bottom: 32px; }\n      section.feature .content .info .slider-control {\n        justify-content: space-between; }\n    section.feature .content .picture {\n      width: 100%; }\n      section.feature .content .picture img {\n        max-width: 60%;\n        height: auto;\n        margin-bottom: 30px; }\n      section.feature .content .picture img.web {\n        -webkit-transform: translate3d(33px, 17px, 0px);\n                transform: translate3d(33px, 17px, 0px);\n        margin-bottom: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9zdHlsZXMvX3VpLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2ZlYXR1cmUvZmVhdHVyZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL2NvbXBvbmVudHMvZmVhdHVyZS9mZWF0dXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BOztFQ0pFO0FDQUY7RUZnQkUsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBckJZO0VBc0JaLFNBQVMsRUFBQTtBRXJCWDtFRndDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0E3Q1ksRUFBQTtBQXdFZDs7RUNyREU7QUQyS0Y7RUFDRSxjQTlMYztFQStMZCxxQkFBcUIsRUFBQTtBRS9MdkI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtBQUpyQjtJQU1JLGtFQUFrRTtJQUNsRSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixhQUFhLEVBQUE7QUFWakI7TUFZTSw0QkFBNEIsRUFBQTtBQVpsQztNQWVNLDRCQUE0QixFQUFBO0FBZmxDO01Ba0JNLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixXQUFXO01BQ1gsVUFBVSxFQUFBO0FBdkJoQjtRQXlCUSxtQkFBbUIsRUFBQTtBQXpCM0I7UUE2QlEsV0FBVyxFQUFBO0FBN0JuQjtRQWlDUSxXQUFXO1FBQ1gscUJBQXFCLEVBQUE7QUFsQzdCO1FBcUNRLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsY0YzQ007UUU0Q04sV0FBVztRQUNYLGdCQUFnQixFQUFBO0FBNUN4QjtRQStDUSxXQUFXO1FBQ1gsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsMkJBQTJCO1FBQzNCLGtCQUFrQixFQUFBO0FBcEQxQjtVQXNEVSxhQUFhO1VBQ2IsbUJBQW1CO1VBQ25CLFlBQVk7VUFDWixlQUFlO1VBQ2Ysa0JBQWtCO1VBQ2xCLGdCQUFnQjtVQUNoQixpQkFBaUI7VUFDakIsZUFBZTtVQUNmLGtCQUFrQjtVQUNsQixxQkFBcUI7VUFDckIsY0YvREk7VUVnRUosdUJBQXVCO1VBQ3ZCLFVBQVUsRUFBQTtBQWxFcEI7WUFvRVksZUFBZSxFQUFBO0FBcEUzQjtZQXVFWSxjQUFjLEVBQUE7QUF2RTFCO1VBMkVVLG1CRjVFSTtVRTZFSixtQkFBbUI7VUFDbkIsa0JBQWtCO1VBQ2xCLE1BQU07VUFDTixPQUFPO1VBQ1AsWUFBWTtVQUNaLHNCQUFzQixFQUFBO0FBakZoQztNQXNGTSxXQUFXO01BQ1gsVUFBVTtNQUNWLDRCQUE0QjtNQUM1Qix3QkFBd0I7TUFDeEIsMkJBQTJCO01BQzNCLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsbUJBQW1CLEVBQUE7QUE3RnpCO1FBK0ZRLGVBQWU7UUFDZixZQUFZLEVBQUE7QUFZcEI7RUE1R0E7SUErR00sWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNEJBQTJCO0lBQzNCLG1CQUFtQixFQUFBO0lBbkh6QjtNQXFIUSxXQUFXO01BQ1gsWUFBWTtNQUNaLG9CQUFvQixFQUFBO01Bdkg1QjtRRmdHRSxrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsY0FyR1k7UUUySEosbUJBQW1CLEVBQUE7TUExSDdCO1FGOElFLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixjQW5KWTtRRStISixXQUFXO1FBQ1gsa0JBQWtCLEVBQUE7TUEvSDVCO1FGK0hFLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsY0FySVk7UUVvSUosbUJBQW1CLEVBQUE7TUFuSTdCO1FBc0lVLDhCQUE4QixFQUFBO0lBdEl4QztNQTBJUSxXQUFXLEVBQUE7TUE3QmpCO1FBK0JRLGNBQWM7UUFDZCxZQUFZO1FBQ1osbUJBQW1CLEVBQUE7TUE5STdCO1FBaUpVLCtDQUF1QztnQkFBdkMsdUNBQXVDO1FBQ3ZDLGdCQUFnQixFQUFBLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL2NvbXBvbmVudHMvZmVhdHVyZS9mZWF0dXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29sb3JzXG4kbWFpbjogIzMzMzMzMztcbiRhY3Rpb246ICMyMUFFNDk7XG4kZ3JleTogIzk5OTk5OTtcbiRsaWdodC1ncmV5OiAjRTdFN0U3O1xuXG4vKiBUeXBvZ3JhcGhpY1xuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMTsgfVxuICovXG4laDEge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiA1NnB4O1xuICBjb2xvcjogJG1haW47XG4gIG1hcmdpbjogMDtcbn1cbiVoMiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xufVxuJWgzIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogJG1haW47XG4gIG1hcmdpbjogMDtcbn1cbiVoNCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG59XG4lYm9keSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJW5hdmlnYXRpb24ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJXNsaWRlciB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG4lY2FwdGlvbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5cbi8qIFR5cG9ncmFwaGljIG1vYmlsZVxuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMS1tb2I7IH1cbiAqL1xuJWgxLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoMS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogJG1haW47XG59XG4laDItbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGgyLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVoMy1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGgzLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBjb2xvcjogJG1haW47XG59XG4laDQtbW9iIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoNC1tb2Ige1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWJvZHktbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gYm9keS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVsb2NhbC1uYXZpZ2F0aW9uLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5AbWl4aW4gbG9jYWwtbmF2aWdhdGlvbi1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRncmV5O1xufVxuXG4vLyBCdXR0b25cbiVidXR0b24ge1xuICBiYWNrZ3JvdW5kOiAkYWN0aW9uO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYWN0aW9uO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEzcHg7XG4gIG1pbi13aWR0aDogMTgxLjk4cHg7XG4gIGhlaWdodDogNTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuJXN0b3JlcyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDE2MXB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmEge1xuICBjb2xvcjogJGFjdGlvbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIiwiLyogVHlwb2dyYXBoaWNcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDE7IH1cbiAqL1xuc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIGgyIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIG1hcmdpbjogMDsgfVxuXG5zZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8gcC5zdWIge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMzMzMzMzOyB9XG5cbi8qIFR5cG9ncmFwaGljIG1vYmlsZVxuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMS1tb2I7IH1cbiAqL1xuYSB7XG4gIGNvbG9yOiAjMjFBRTQ5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cblxuc2VjdGlvbi5mZWF0dXJlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0ZGRjlGRSAwLjA5JSwgI0Y1RkVGRiAxMDAuMSUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiAxMTgwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgICBkaXNwbGF5OiBmbGV4OyB9XG4gICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50LndlYiB7XG4gICAgICBwYWRkaW5nOiA2MHB4IDM0cHggNjFweCA5MHB4OyB9XG4gICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50Lm1vYmlsZSB7XG4gICAgICBwYWRkaW5nOiAyNHB4IDM0cHggMjRweCA5MHB4OyB9XG4gICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB3aWR0aDogMzUlOyB9XG4gICAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8ubXVsdGkge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4OyB9XG4gICAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8gaDIge1xuICAgICAgICB3aWR0aDogMTAwJTsgfVxuICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIHAuc3ViIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMjhweCAwIDIwcHggMDsgfVxuICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIHAudGV4dCB7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMCAwIDQycHg7IH1cbiAgICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCAuaW5mbyAuc2xpZGVyLWNvbnRyb2wge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIC5zbGlkZXItY29udHJvbCBzcGFuIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiAzOHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjZweDtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgICAgICBjb2xvcjogIzk5OTk5OTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciA0MDBtcztcbiAgICAgICAgICB6LWluZGV4OiAxOyB9XG4gICAgICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIC5zbGlkZXItY29udHJvbCBzcGFuOmhvdmVyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCAuaW5mbyAuc2xpZGVyLWNvbnRyb2wgc3Bhbi5hY3RpdmUge1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7IH1cbiAgICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIC5zbGlkZXItY29udHJvbCBpLmJhY2tncm91bmQge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAzOHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGxlZnQgNDAwbXM7IH1cbiAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLnBpY3R1cmUge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB3aWR0aDogNjUlO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCAucGljdHVyZSBpbWcud2ViIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDM4cHggMCAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDsgfVxuICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCAuaW5mbyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIHBhZGRpbmc6IDAgNDRweCAxN3B4OyB9XG4gICAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8gaDIge1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIHAuc3ViIHtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMCAwIDE4cHggMDsgfVxuICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIHAudGV4dCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDsgfVxuICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIC5zbGlkZXItY29udHJvbCB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxuICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCAucGljdHVyZSB7XG4gICAgICB3aWR0aDogMTAwJTsgfVxuICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5waWN0dXJlIGltZyB7XG4gICAgICAgIG1heC13aWR0aDogNjAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cbiAgICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCAucGljdHVyZSBpbWcud2ViIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzM3B4LCAxN3B4LCAwcHgpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyB9IH1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy91aSc7XG5cbnNlY3Rpb24uZmVhdHVyZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLmNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICNGRkY5RkUgMC4wOSUsICNGNUZFRkYgMTAwLjElKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1heC13aWR0aDogMTE4MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAmLndlYiB7XG4gICAgICBwYWRkaW5nOiA2MHB4IDM0cHggNjFweCA5MHB4O1xuICAgIH1cbiAgICAmLm1vYmlsZSB7XG4gICAgICBwYWRkaW5nOiAyNHB4IDM0cHggMjRweCA5MHB4O1xuICAgIH1cbiAgICAuaW5mbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgd2lkdGg6IDM1JTtcbiAgICAgICYubXVsdGkge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgICAgfVxuICAgICAgaDIge1xuICAgICAgICBAZXh0ZW5kICVoMjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICBwLnN1YiB7XG4gICAgICAgIEBleHRlbmQgJWJvZHk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDI4cHggMCAyMHB4IDA7XG4gICAgICB9XG4gICAgICBwLnRleHQge1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgICAgY29sb3I6ICRtYWluO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwIDAgNDJweDtcbiAgICAgIH1cbiAgICAgIC5zbGlkZXItY29udHJvbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGhlaWdodDogMzhweDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDI2cHg7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgICAgY29sb3I6ICRncmV5O1xuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDQwMG1zO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpLmJhY2tncm91bmQge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICRtYWluO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGhlaWdodDogMzhweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDQwMG1zO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5waWN0dXJlIHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgd2lkdGg6IDY1JTtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgaW1nLndlYiB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyB0YWJsZXQgc21cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpe1xuXG59XG5cbi8vIG1vYmlsZSB4c1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xuICBzZWN0aW9uLmZlYXR1cmUge1xuICAgIC5jb250ZW50IHtcbiAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcGFkZGluZzogMzhweCAwIDAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgIC5pbmZvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZzogMCA0NHB4IDE3cHg7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBAaW5jbHVkZSBoMi1tb2I7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBwLnN1YiB7XG4gICAgICAgICAgQGluY2x1ZGUgYm9keS1tb2I7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMThweCAwO1xuICAgICAgICB9XG4gICAgICAgIHAudGV4dCB7XG4gICAgICAgICAgQGluY2x1ZGUgaDQtbW9iO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNsaWRlci1jb250cm9sIHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5waWN0dXJlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW1nLndlYiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzM3B4LCAxN3B4LCAwcHgpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/main-page/components/feature/feature.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/main-page/components/feature/feature.component.ts ***!
  \*************************************************************************/
/*! exports provided: FeatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureComponent", function() { return FeatureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FeatureComponent = /** @class */ (function () {
    function FeatureComponent() {
        this.multiPlatform = true;
        this.activePlatform = 'ios';
        this.toggleBgWidth = '79px';
        this.toggleBgLeft = '0px';
    }
    FeatureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.images.map(function (item) {
            if (item.platform === 'ios') {
                switch (_this.pixelratio) {
                    case '1x':
                        _this.selectedSrc = item.src.replace('@2x', '');
                        break;
                    case 'retina':
                        _this.selectedSrc = item.src;
                        break;
                    case '4k':
                        _this.selectedSrc = item.src.replace('@2x', '@3x');
                        break;
                    default:
                        _this.selectedSrc = item.src.replace('@2x', '');
                        break;
                }
            }
        });
    };
    FeatureComponent.prototype.changePlatform = function (event, platform) {
        var _this = this;
        this.toggleBgLeft = event.target.offsetLeft + "px";
        this.toggleBgWidth = event.target.clientWidth + "px";
        this.activePlatform = platform;
        this.images.map(function (item) {
            if (item.platform === platform) {
                switch (_this.pixelratio) {
                    case '1x':
                        _this.selectedSrc = item.src.replace('@2x', '');
                        break;
                    case 'retina':
                        _this.selectedSrc = item.src;
                        break;
                    case '4k':
                        _this.selectedSrc = item.src.replace('@2x', '@3x');
                        break;
                    default:
                        _this.selectedSrc = item.src.replace('@2x', '');
                        break;
                }
            }
        });
    };
    FeatureComponent.prototype.thisUserAgent = function (event) {
        this.pixelratio = event.pixelratio;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FeatureComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FeatureComponent.prototype, "subTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FeatureComponent.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FeatureComponent.prototype, "multiPlatform", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FeatureComponent.prototype, "images", void 0);
    FeatureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feature',
            template: __webpack_require__(/*! ./feature.component.html */ "./src/app/pages/main-page/components/feature/feature.component.html"),
            styles: [__webpack_require__(/*! ./feature.component.scss */ "./src/app/pages/main-page/components/feature/feature.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeatureComponent);
    return FeatureComponent;
}());



/***/ }),

/***/ "./src/app/pages/main-page/components/fixed-menu/fixed-menu.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/main-page/components/fixed-menu/fixed-menu.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"anchor\" #anchor></div>\n<nav *responsive=\"{ bootstrap: ['xl', 'lg', 'md', 'sm'] }\" class=\"fixed-menu\" [ngClass]=\"{'fixed': isFixed, 'relative': isRelative}\" #fixedMenu>\n  <a href=\"\" [translate]=\"'FixedMenu.item-1'\"></a>\n  <a href=\"\" [translate]=\"'FixedMenu.item-2'\"></a>\n  <a href=\"\" [translate]=\"'FixedMenu.item-3'\"></a>\n  <a href=\"\" [translate]=\"'FixedMenu.item-4'\"></a>\n  <a href=\"\" [translate]=\"'FixedMenu.item-5'\"></a>\n  <a href=\"\" [translate]=\"'FixedMenu.item-6'\"></a>\n  <a href=\"\" [translate]=\"'FixedMenu.item-7'\"></a>\n</nav>\n"

/***/ }),

/***/ "./src/app/pages/main-page/components/fixed-menu/fixed-menu.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/main-page/components/fixed-menu/fixed-menu.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Typographic\n * use ex. .title { @extend %h1; }\n */\nnav.fixed-menu a {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 23px;\n  font-size: 16px;\n  letter-spacing: 0.2px;\n  color: #333333; }\n/* Typographic mobile\n * use ex. .title { @extend %h1-mob; }\n */\na {\n  color: #21AE49;\n  text-decoration: none; }\nnav.fixed-menu {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  width: 100%;\n  height: 50px;\n  box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.08), 0px 1px 0px rgba(0, 0, 0, 0.09);\n  background-color: #ffffff;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 5; }\nnav.fixed-menu.relative {\n    position: relative;\n    height: 60px; }\nnav.fixed-menu.fixed {\n    height: 50px;\n    position: fixed;\n    top: 60px;\n    left: 0; }\nnav.fixed-menu a {\n    text-decoration: none;\n    margin-left: 61px; }\nnav.fixed-menu a:first-child {\n      margin-left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9zdHlsZXMvX3VpLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2ZpeGVkLW1lbnUvZml4ZWQtbWVudS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL2NvbXBvbmVudHMvZml4ZWQtbWVudS9maXhlZC1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BOztFQ0pFO0FDQUY7RUYrQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixjQXJEWSxFQUFBO0FBd0VkOztFQzVERTtBRGtMRjtFQUNFLGNBOUxjO0VBK0xkLHFCQUFxQixFQUFBO0FFL0x2QjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDZFQUE2RTtFQUM3RSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsVUFBVSxFQUFBO0FBWlo7SUFjSSxrQkFBa0I7SUFDbEIsWUFBWSxFQUFBO0FBZmhCO0lBa0JJLFlBQVk7SUFDWixlQUFlO0lBQ2YsU0FBUztJQUNULE9BQU8sRUFBQTtBQXJCWDtJQXlCSSxxQkFBcUI7SUFDckIsaUJBQWlCLEVBQUE7QUExQnJCO01BNEJNLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2ZpeGVkLW1lbnUvZml4ZWQtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbG9yc1xuJG1haW46ICMzMzMzMzM7XG4kYWN0aW9uOiAjMjFBRTQ5O1xuJGdyZXk6ICM5OTk5OTk7XG4kbGlnaHQtZ3JleTogI0U3RTdFNztcblxuLyogVHlwb2dyYXBoaWNcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDE7IH1cbiAqL1xuJWgxIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIGZvbnQtc2l6ZTogNTZweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG59XG4laDIge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogJG1haW47XG4gIG1hcmdpbjogMDtcbn1cbiVoMyB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG59XG4laDQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xufVxuJWJvZHkge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVuYXZpZ2F0aW9uIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVzbGlkZXIge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRncmV5O1xufVxuJWNhcHRpb24ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgY29sb3I6ICRncmV5O1xufVxuXG4vKiBUeXBvZ3JhcGhpYyBtb2JpbGVcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDEtbW9iOyB9XG4gKi9cbiVoMS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gaDEtbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWgyLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoMi1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogJG1haW47XG59XG4laDMtbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoMy1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWg0LW1vYiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gaDQtbW9iIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVib2R5LW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGJvZHktbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogJG1haW47XG59XG4lbG9jYWwtbmF2aWdhdGlvbi1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRncmV5O1xufVxuQG1peGluIGxvY2FsLW5hdmlnYXRpb24tbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAkZ3JleTtcbn1cblxuLy8gQnV0dG9uXG4lYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogJGFjdGlvbjtcbiAgYm9yZGVyOiAxcHggc29saWQgJGFjdGlvbjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxM3B4O1xuICBtaW4td2lkdGg6IDE4MS45OHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiVzdG9yZXMge1xuICBvdXRsaW5lOiBub25lO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxNjFweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5hIHtcbiAgY29sb3I6ICRhY3Rpb247XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiIsIi8qIFR5cG9ncmFwaGljXG4gKiB1c2UgZXguIC50aXRsZSB7IEBleHRlbmQgJWgxOyB9XG4gKi9cbm5hdi5maXhlZC1tZW51IGEge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICMzMzMzMzM7IH1cblxuLyogVHlwb2dyYXBoaWMgbW9iaWxlXG4gKiB1c2UgZXguIC50aXRsZSB7IEBleHRlbmQgJWgxLW1vYjsgfVxuICovXG5hIHtcbiAgY29sb3I6ICMyMUFFNDk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG5uYXYuZml4ZWQtbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3gtc2hhZG93OiAwcHggLTFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgMHB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDU7IH1cbiAgbmF2LmZpeGVkLW1lbnUucmVsYXRpdmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDYwcHg7IH1cbiAgbmF2LmZpeGVkLW1lbnUuZml4ZWQge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA2MHB4O1xuICAgIGxlZnQ6IDA7IH1cbiAgbmF2LmZpeGVkLW1lbnUgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiA2MXB4OyB9XG4gICAgbmF2LmZpeGVkLW1lbnUgYTpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tbGVmdDogMDsgfVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3VpJztcblxubmF2LmZpeGVkLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm94LXNoYWRvdzogMHB4IC0xcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCksIDBweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA1O1xuICAmLnJlbGF0aXZlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG4gICYuZml4ZWQge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA2MHB4O1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgYSB7XG4gICAgQGV4dGVuZCAlbmF2aWdhdGlvbjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDYxcHg7XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gIH1cbn1cbi8vLmFuY2hvciB7XG4vLyAgaGVpZ2h0OiAxcHg7XG4vLyAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbi8vfVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/main-page/components/fixed-menu/fixed-menu.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/main-page/components/fixed-menu/fixed-menu.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FixedMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedMenuComponent", function() { return FixedMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_scroll_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/scroll-events.service */ "./src/app/services/scroll-events.service.ts");



var FixedMenuComponent = /** @class */ (function () {
    function FixedMenuComponent(scrollEventsService) {
        this.scrollEventsService = scrollEventsService;
        this.isFixed = false;
        this.isRelative = false;
    }
    FixedMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageOffsetListener = this.scrollEventsService.pageOffset$.subscribe(function (value) {
            if (_this.anchor.nativeElement.getBoundingClientRect().top <= 80) {
                _this.isFixed = true;
                _this.isRelative = false;
            }
            else {
                _this.isRelative = _this.anchor.nativeElement.getBoundingClientRect().top + 60 <= window.innerHeight;
                _this.isFixed = false;
            }
            _this.scrollEventsService.setMenuSetFixed(_this.isFixed);
        });
    };
    FixedMenuComponent.prototype.ngOnDestroy = function () {
        this.pageOffsetListener.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fixedMenu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FixedMenuComponent.prototype, "menu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('anchor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FixedMenuComponent.prototype, "anchor", void 0);
    FixedMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fixed-menu',
            template: __webpack_require__(/*! ./fixed-menu.component.html */ "./src/app/pages/main-page/components/fixed-menu/fixed-menu.component.html"),
            styles: [__webpack_require__(/*! ./fixed-menu.component.scss */ "./src/app/pages/main-page/components/fixed-menu/fixed-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_scroll_events_service__WEBPACK_IMPORTED_MODULE_2__["ScrollEventsService"]])
    ], FixedMenuComponent);
    return FixedMenuComponent;
}());



/***/ }),

/***/ "./src/app/pages/main-page/components/footer/footer.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/main-page/components/footer/footer.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"main-content\">\n    <div class=\"buttons\">\n      <button class=\"app-store\"></button>\n      <button class=\"play-store\"></button>\n      <button *responsive=\"{ bootstrap: ['xl', 'lg', 'md', 'sm'] }\" class=\"try-button\" [translate]=\"'Jumbo.button.try'\"></button>\n    </div>\n    <ul>\n      <li><a href=\"#footer\" [translate]=\"'Footer-links-1'\"></a></li>\n      <li><a href=\"#footer\" [translate]=\"'Footer-links-2'\"></a></li>\n      <li *responsive=\"{ bootstrap: ['xl', 'lg', 'md', 'sm'] }\"><a href=\"#footer\" [translate]=\"'Footer-links-3'\"></a></li>\n      <li><a href=\"#footer\" [translate]=\"'Footer-links-4'\"></a></li>\n      <li><a href=\"#footer\" [translate]=\"'Footer-links-5'\"></a></li>\n    </ul>\n    <p [translate]=\"'Footer-copy'\"></p>\n  </div>\n  <div class=\"try\">\n    <div class=\"icon\"></div>\n    <p class=\"text\" [translate]=\"'Footer-infectio-text'\"></p>\n    <a href=\"#try\" class=\"try-link\" [translate]=\"'Footer-infectio-button'\"></a>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/pages/main-page/components/footer/footer.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/main-page/components/footer/footer.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Typographic\n * use ex. .title { @extend %h1; }\n */\nfooter .main-content ul li a, footer .try p.text {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 23px;\n  font-size: 16px;\n  letter-spacing: 0.2px;\n  color: #333333; }\nfooter .main-content p {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 20px;\n  font-size: 14px;\n  letter-spacing: 0.1px;\n  color: #999999; }\n/* Typographic mobile\n * use ex. .title { @extend %h1-mob; }\n */\nfooter .main-content .buttons .try-button {\n  background: #21AE49;\n  border: 1px solid #21AE49;\n  border-radius: 4px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 28px;\n  font-size: 18px;\n  text-align: center;\n  color: #ffffff;\n  padding: 10px 10px 13px;\n  min-width: 181.98px;\n  height: 50px;\n  outline: none; }\nfooter .main-content .buttons .app-store, footer .main-content .buttons .play-store {\n  outline: none;\n  height: 50px;\n  width: 161px;\n  border: none; }\na {\n  color: #21AE49;\n  text-decoration: none; }\nfooter {\n  width: 100%;\n  border-top: 1px solid #E7E7E7;\n  padding: 45px 0 0 0;\n  display: flex;\n  flex-direction: column; }\nfooter .main-content {\n    width: 615px;\n    display: flex;\n    flex-direction: column;\n    align-self: center;\n    padding-bottom: 26px; }\nfooter .main-content .buttons {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: row;\n      width: 100%;\n      margin-bottom: 51px; }\nfooter .main-content .buttons .app-store {\n        background: transparent url('app-store.svg') no-repeat; }\nfooter .main-content .buttons .play-store {\n        margin: 0 12px;\n        background: transparent url('google-play.svg') no-repeat; }\nfooter .main-content ul {\n      width: 90%;\n      list-style: none;\n      display: flex;\n      justify-content: space-between;\n      margin: 0;\n      padding: 0;\n      align-self: center;\n      margin-bottom: 20px; }\nfooter .main-content p {\n      width: 100%;\n      text-align: center;\n      margin: 0; }\nfooter .try {\n    width: 100%;\n    height: 78px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    background: linear-gradient(0deg, #F9F9F9, #F9F9F9), linear-gradient(90deg, #FFFAEE 0%, #FFFEF1 100%); }\nfooter .try .icon {\n      width: 44px;\n      height: 44px;\n      background: transparent url('infectio-icon.svg') no-repeat center;\n      background-size: cover;\n      margin-right: 18px; }\nfooter .try a.try-link {\n      height: 40px;\n      margin-left: 18px;\n      background: #FFAF0C;\n      border-radius: 4px;\n      color: #ffffff;\n      padding: 8px 18px;\n      font-style: normal;\n      font-weight: 500;\n      line-height: 24px;\n      font-size: 16px; }\n@media screen and (max-width: 600px) {\n  footer {\n    padding: 50px 0 0 0; }\n    footer .main-content {\n      width: 100%; }\n      footer .main-content .buttons {\n        margin-bottom: 45px; }\n      footer .main-content ul {\n        flex-direction: column;\n        align-items: center;\n        margin-bottom: 14px; }\n        footer .main-content ul li {\n          margin-bottom: 16px; }\n    footer .try {\n      height: auto;\n      flex-direction: column;\n      padding: 28px 75px; }\n      footer .try .icon {\n        width: 64px;\n        height: 64px; }\n      footer .try p.text {\n        margin: 18px 0 16px;\n        font-style: normal;\n        font-weight: normal;\n        line-height: 23px;\n        font-size: 16px;\n        text-align: center;\n        letter-spacing: 0.2px; }\n      footer .try a.try-link {\n        margin-left: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9zdHlsZXMvX3VpLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWxleHphdmdvcm9kbmlpL1Byb2plY3RzL2xhbnRoaWVyLXByb21vc2l0ZS9zcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7O0VDSkU7QUNBRjtFRitDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGNBckRZLEVBQUE7QUVDZDtFRitERSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGNBbkVZLEVBQUE7QUFzRWQ7O0VDcERFO0FDbkJGO0VGdUtFLG1CQXZLYztFQXdLZCx5QkF4S2M7RUF5S2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWEsRUFBQTtBRW5MZjtFRnVMRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZLEVBQUE7QUFHZDtFQUNFLGNBOUxjO0VBK0xkLHFCQUFxQixFQUFBO0FFL0x2QjtFQUNFLFdBQVc7RUFDWCw2QkZBa0I7RUVDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtBQUx4QjtJQU9JLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixvQkFBb0IsRUFBQTtBQVh4QjtNQWFNLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQixXQUFXO01BQ1gsbUJBQW1CLEVBQUE7QUFsQnpCO1FBdUJRLHNEQUE0RSxFQUFBO0FBdkJwRjtRQTJCUSxjQUFjO1FBQ2Qsd0RBQThFLEVBQUE7QUE1QnRGO01BaUNNLFVBQVU7TUFDVixnQkFBZ0I7TUFDaEIsYUFBYTtNQUNiLDhCQUE4QjtNQUM5QixTQUFTO01BQ1QsVUFBVTtNQUNWLGtCQUFrQjtNQUNsQixtQkFBbUIsRUFBQTtBQXhDekI7TUFpRE0sV0FBVztNQUNYLGtCQUFrQjtNQUNsQixTQUFTLEVBQUE7QUFuRGY7SUF1REksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIscUdBQXFHLEVBQUE7QUE3RHpHO01BK0RNLFdBQVc7TUFDWCxZQUFZO01BQ1osaUVBQXVGO01BQ3ZGLHNCQUFzQjtNQUN0QixrQkFBa0IsRUFBQTtBQW5FeEI7TUF5RU0sWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsZUFBZSxFQUFBO0FBV3JCO0VBN0ZBO0lBK0ZJLG1CQUFtQixFQUFBO0lBL0Z2QjtNQWlHTSxXQUFXLEVBQUE7TUFqR2pCO1FBbUdRLG1CQUFtQixFQUFBO01BbkczQjtRQXNHUSxzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLG1CQUFtQixFQUFBO1FBVnpCO1VBWVEsbUJBQW1CLEVBQUE7SUExRzdCO01BK0dNLFlBQVk7TUFDWixzQkFBc0I7TUFDdEIsa0JBQWtCLEVBQUE7TUFqSHhCO1FBbUhRLFdBQVc7UUFDWCxZQUFZLEVBQUE7TUF0QmxCO1FBeUJNLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLHFCQUFxQixFQUFBO01BN0g3QjtRQWdJUSxjQUFjLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2xvcnNcbiRtYWluOiAjMzMzMzMzO1xuJGFjdGlvbjogIzIxQUU0OTtcbiRncmV5OiAjOTk5OTk5O1xuJGxpZ2h0LWdyZXk6ICNFN0U3RTc7XG5cbi8qIFR5cG9ncmFwaGljXG4gKiB1c2UgZXguIC50aXRsZSB7IEBleHRlbmQgJWgxOyB9XG4gKi9cbiVoMSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBmb250LXNpemU6IDU2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xufVxuJWgyIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG59XG4laDMge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xufVxuJWg0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogJG1haW47XG4gIG1hcmdpbjogMDtcbn1cbiVib2R5IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogJG1haW47XG59XG4lbmF2aWdhdGlvbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJG1haW47XG59XG4lc2xpZGVyIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAkZ3JleTtcbn1cbiVjYXB0aW9uIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gIGNvbG9yOiAkZ3JleTtcbn1cblxuLyogVHlwb2dyYXBoaWMgbW9iaWxlXG4gKiB1c2UgZXguIC50aXRsZSB7IEBleHRlbmQgJWgxLW1vYjsgfVxuICovXG4laDEtbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGgxLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVoMi1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gaDItbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWgzLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gaDMtbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVoNC1tb2Ige1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGg0LW1vYiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogJG1haW47XG59XG4lYm9keS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBib2R5LW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWxvY2FsLW5hdmlnYXRpb24tbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAkZ3JleTtcbn1cbkBtaXhpbiBsb2NhbC1uYXZpZ2F0aW9uLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5cbi8vIEJ1dHRvblxuJWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICRhY3Rpb247XG4gIGJvcmRlcjogMXB4IHNvbGlkICRhY3Rpb247XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTNweDtcbiAgbWluLXdpZHRoOiAxODEuOThweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4lc3RvcmVzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTYxcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuYSB7XG4gIGNvbG9yOiAkYWN0aW9uO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iLCIvKiBUeXBvZ3JhcGhpY1xuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMTsgfVxuICovXG5mb290ZXIgLm1haW4tY29udGVudCB1bCBsaSBhLCBmb290ZXIgLnRyeSBwLnRleHQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICMzMzMzMzM7IH1cblxuZm9vdGVyIC5tYWluLWNvbnRlbnQgcCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICBjb2xvcjogIzk5OTk5OTsgfVxuXG4vKiBUeXBvZ3JhcGhpYyBtb2JpbGVcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDEtbW9iOyB9XG4gKi9cbmZvb3RlciAubWFpbi1jb250ZW50IC5idXR0b25zIC50cnktYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzIxQUU0OTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzIxQUU0OTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxM3B4O1xuICBtaW4td2lkdGg6IDE4MS45OHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG91dGxpbmU6IG5vbmU7IH1cblxuZm9vdGVyIC5tYWluLWNvbnRlbnQgLmJ1dHRvbnMgLmFwcC1zdG9yZSwgZm9vdGVyIC5tYWluLWNvbnRlbnQgLmJ1dHRvbnMgLnBsYXktc3RvcmUge1xuICBvdXRsaW5lOiBub25lO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxNjFweDtcbiAgYm9yZGVyOiBub25lOyB9XG5cbmEge1xuICBjb2xvcjogIzIxQUU0OTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0U3RTdFNztcbiAgcGFkZGluZzogNDVweCAwIDAgMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICBmb290ZXIgLm1haW4tY29udGVudCB7XG4gICAgd2lkdGg6IDYxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDI2cHg7IH1cbiAgICBmb290ZXIgLm1haW4tY29udGVudCAuYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNTFweDsgfVxuICAgICAgZm9vdGVyIC5tYWluLWNvbnRlbnQgLmJ1dHRvbnMgLmFwcC1zdG9yZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9hcHAtc3RvcmUuc3ZnXCIpIG5vLXJlcGVhdDsgfVxuICAgICAgZm9vdGVyIC5tYWluLWNvbnRlbnQgLmJ1dHRvbnMgLnBsYXktc3RvcmUge1xuICAgICAgICBtYXJnaW46IDAgMTJweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2dvb2dsZS1wbGF5LnN2Z1wiKSBuby1yZXBlYXQ7IH1cbiAgICBmb290ZXIgLm1haW4tY29udGVudCB1bCB7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuICAgIGZvb3RlciAubWFpbi1jb250ZW50IHAge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDA7IH1cbiAgZm9vdGVyIC50cnkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI0Y5RjlGOSwgI0Y5RjlGOSksIGxpbmVhci1ncmFkaWVudCg5MGRlZywgI0ZGRkFFRSAwJSwgI0ZGRkVGMSAxMDAlKTsgfVxuICAgIGZvb3RlciAudHJ5IC5pY29uIHtcbiAgICAgIHdpZHRoOiA0NHB4O1xuICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2luZmVjdGlvLWljb24uc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxOHB4OyB9XG4gICAgZm9vdGVyIC50cnkgYS50cnktbGluayB7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMThweDtcbiAgICAgIGJhY2tncm91bmQ6ICNGRkFGMEM7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIHBhZGRpbmc6IDhweCAxOHB4O1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4OyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGZvb3RlciB7XG4gICAgcGFkZGluZzogNTBweCAwIDAgMDsgfVxuICAgIGZvb3RlciAubWFpbi1jb250ZW50IHtcbiAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgICBmb290ZXIgLm1haW4tY29udGVudCAuYnV0dG9ucyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7IH1cbiAgICAgIGZvb3RlciAubWFpbi1jb250ZW50IHVsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDsgfVxuICAgICAgICBmb290ZXIgLm1haW4tY29udGVudCB1bCBsaSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDsgfVxuICAgIGZvb3RlciAudHJ5IHtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBwYWRkaW5nOiAyOHB4IDc1cHg7IH1cbiAgICAgIGZvb3RlciAudHJ5IC5pY29uIHtcbiAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgIGhlaWdodDogNjRweDsgfVxuICAgICAgZm9vdGVyIC50cnkgcC50ZXh0IHtcbiAgICAgICAgbWFyZ2luOiAxOHB4IDAgMTZweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDsgfVxuICAgICAgZm9vdGVyIC50cnkgYS50cnktbGluayB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwOyB9IH1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy91aSc7XG5cbmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgJGxpZ2h0LWdyZXk7XG4gIHBhZGRpbmc6IDQ1cHggMCAwIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC5tYWluLWNvbnRlbnQge1xuICAgIHdpZHRoOiA2MTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAyNnB4O1xuICAgIC5idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1MXB4O1xuICAgICAgLnRyeS1idXR0b24ge1xuICAgICAgICBAZXh0ZW5kICVidXR0b247XG4gICAgICB9XG4gICAgICAuYXBwLXN0b3JlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvYXBwLXN0b3JlLnN2ZycpIG5vLXJlcGVhdDtcbiAgICAgICAgQGV4dGVuZCAlc3RvcmVzO1xuICAgICAgfVxuICAgICAgLnBsYXktc3RvcmUge1xuICAgICAgICBtYXJnaW46IDAgMTJweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvZ29vZ2xlLXBsYXkuc3ZnJykgbm8tcmVwZWF0O1xuICAgICAgICBAZXh0ZW5kICVzdG9yZXM7XG4gICAgICB9XG4gICAgfVxuICAgIHVsIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgbGkge1xuICAgICAgICBhIHtcbiAgICAgICAgICBAZXh0ZW5kICVuYXZpZ2F0aW9uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHAge1xuICAgICAgQGV4dGVuZCAlY2FwdGlvbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuICAudHJ5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDc4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICNGOUY5RjksICNGOUY5RjkpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNGRkZBRUUgMCUsICNGRkZFRjEgMTAwJSk7XG4gICAgLmljb24ge1xuICAgICAgd2lkdGg6IDQ0cHg7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbmZlY3Rpby1pY29uLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuICAgIH1cbiAgICBwLnRleHQge1xuICAgICAgQGV4dGVuZCAlbmF2aWdhdGlvbjtcbiAgICB9XG4gICAgYS50cnktbGluayB7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMThweDtcbiAgICAgIGJhY2tncm91bmQ6ICNGRkFGMEM7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIHBhZGRpbmc6IDhweCAxOHB4O1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgfVxufVxuXG4vLyB0YWJsZXQgc21cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpe1xuXG59XG5cbi8vIG1vYmlsZSB4c1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xuICBmb290ZXIge1xuICAgIHBhZGRpbmc6IDUwcHggMCAwIDA7XG4gICAgLm1haW4tY29udGVudCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC5idXR0b25zIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgICAgIH1cbiAgICAgIHVsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICAgICAgbGkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnRyeSB7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcGFkZGluZzogMjhweCA3NXB4O1xuICAgICAgLmljb24ge1xuICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgfVxuICAgICAgcC50ZXh0IHtcbiAgICAgICAgbWFyZ2luOiAxOHB4IDAgMTZweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgIH1cbiAgICAgIGEudHJ5LWxpbmsge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/main-page/components/footer/footer.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/main-page/components/footer/footer.component.ts ***!
  \***********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/pages/main-page/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/pages/main-page/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/pages/main-page/components/header/header.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/main-page/components/header/header.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\" [ngClass]=\"{'have-fixed-menu': haveFixedMenu}\">\n  <div class=\"right-side\">\n    <a href=\"/\" class=\"logo\">Lanthier</a>\n    <div class=\"buttons\" *ngIf=\"showButtons\">\n      <a href=\"#\" class=\"try-button\" [translate]=\"'Jumbo.button.try'\"></a>\n      <a href=\"#\" class=\"app-store\"></a>\n      <a href=\"#\" class=\"play-store\"></a>\n    </div>\n  </div>\n  <div class=\"left-side\">\n    <div *responsive=\"{ bootstrap: ['xl', 'lg', 'md', 'sm'] }\" class=\"select-container\" (click)=\"selectLangIsOpen = !selectLangIsOpen\">\n      <span class=\"selected\">{{ selectedLangText }}</span>\n      <ul class=\"select-items\" *ngIf=\"selectLangIsOpen\">\n        <li [ngClass]=\"{'active': selectedLangText === 'English'}\" (click)=\"changeLanguage($event, 'en')\">English</li>\n        <li [ngClass]=\"{'active': selectedLangText === 'France'}\" (click)=\"changeLanguage($event, 'fr')\">France</li>\n      </ul>\n    </div>\n    <div *xs class=\"select-container short\" (click)=\"selectLangIsOpen = !selectLangIsOpen\">\n      <span class=\"selected\">{{ selectedLangTextShort }}</span>\n      <ul class=\"select-items\" *ngIf=\"selectLangIsOpen\">\n        <li [ngClass]=\"{'active': selectedLangText === 'English'}\" (click)=\"changeLanguage($event, 'en', true)\">English</li>\n        <li [ngClass]=\"{'active': selectedLangText === 'France'}\" (click)=\"changeLanguage($event, 'fr', true)\">France</li>\n      </ul>\n    </div>\n    <button *responsive=\"{ bootstrap: ['xl', 'lg', 'md', 'sm'] }\" class=\"login\" [translate]=\"'Header.login.button'\"></button>\n    <app-mobile-menu *xs></app-mobile-menu>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/pages/main-page/components/header/header.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/main-page/components/header/header.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Typographic\n * use ex. .title { @extend %h1; }\n */\n/* Typographic mobile\n * use ex. .title { @extend %h1-mob; }\n */\na {\n  color: #21AE49;\n  text-decoration: none; }\n.header {\n  width: 100%;\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 104px 0 100px;\n  background: #ffffff;\n  position: fixed;\n  top: 0;\n  left: 0;\n  transition: height 100ms;\n  z-index: 5; }\n.header.have-fixed-menu {\n    height: 60px; }\n.header .right-side {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center; }\n.header .right-side .logo {\n      display: inline-block;\n      height: 38px;\n      padding: 0 0 0 51px;\n      background-image: url('logo.svg');\n      background-repeat: no-repeat;\n      background-position: left;\n      font-style: normal;\n      font-weight: bold;\n      line-height: 32px;\n      font-size: 24px;\n      letter-spacing: 0.2px;\n      text-decoration: none;\n      color: #333333;\n      outline: none; }\n.header .right-side .buttons {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: row;\n      width: 100%;\n      margin-left: 19px; }\n.header .right-side .buttons .try-button {\n        width: 148px;\n        height: 42px;\n        border: 1px solid #E7E7E7;\n        border-radius: 4px;\n        font-style: normal;\n        font-weight: 500;\n        line-height: 24px;\n        font-size: 16px;\n        color: #333333;\n        text-align: center;\n        padding: 8px 0 9px; }\n.header .right-side .buttons .app-store {\n        background: transparent url('app-store-white.svg') no-repeat;\n        margin: 0 12px;\n        outline: none;\n        height: 42px;\n        width: 129px;\n        border: none; }\n.header .right-side .buttons .play-store {\n        background: transparent url('google-play-white.svg') no-repeat;\n        outline: none;\n        height: 42px;\n        width: 135.45px;\n        border: none; }\n.header .left-side {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    flex-direction: row; }\n.header .left-side .select-container {\n      position: relative;\n      background: transparent url('chevron-bottom.svg') no-repeat right;\n      padding: 0 28.21px 0 0; }\n.header .left-side .select-container:hover {\n        cursor: pointer; }\n.header .left-side .select-container .selected {\n        font-style: normal;\n        font-weight: normal;\n        line-height: 23px;\n        font-size: 16px;\n        letter-spacing: 0.2px;\n        color: #333333; }\n.header .left-side .select-container .select-items {\n        position: absolute;\n        top: 30px;\n        margin: 0;\n        padding: 10px 27px 9px 18px;\n        list-style: none;\n        font-style: normal;\n        font-weight: normal;\n        line-height: 23px;\n        font-size: 16px;\n        letter-spacing: 0.2px;\n        color: #333333;\n        background: #FFFFFF;\n        border: 0.5px solid #E7E7E7;\n        box-sizing: border-box;\n        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n        border-radius: 4px; }\n.header .left-side .select-container .select-items li:first-child {\n          margin-bottom: 7px; }\n.header .left-side .select-container .select-items .active {\n          font-weight: 500;\n          line-height: 24px;\n          font-size: 16px; }\n.header .left-side .login {\n      color: #333333;\n      padding: 10px 18px 9px;\n      outline: none;\n      border: 1px solid #E7E7E7;\n      background: transparent;\n      border-radius: 4px;\n      font-style: normal;\n      font-weight: normal;\n      line-height: 23px;\n      font-size: 16px;\n      letter-spacing: 0.2px;\n      margin-left: 48.79px; }\n.header .left-side .login:hover {\n        cursor: pointer; }\n@media screen and (max-width: 600px) {\n  header.header {\n    width: 100vw;\n    height: 60px;\n    padding: 0 16px 0 18px; }\n    header.header .right-side .logo {\n      font-weight: bold;\n      line-height: 37px;\n      font-size: 24px; }\n    header.header .right-side .buttons {\n      display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9zdHlsZXMvX3VpLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWxleHphdmdvcm9kbmlpL1Byb2plY3RzL2xhbnRoaWVyLXByb21vc2l0ZS9zcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7O0VDSkU7QUR1RUY7O0VDcEVFO0FEMExGO0VBQ0UsY0E5TGM7RUErTGQscUJBQXFCLEVBQUE7QUUvTHZCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLHdCQUF3QjtFQUN4QixVQUFVLEVBQUE7QUFaWjtJQWNJLFlBQVksRUFBQTtBQWRoQjtJQWlCSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQixFQUFBO0FBbkJ2QjtNQXFCTSxxQkFBcUI7TUFDckIsWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixpQ0FBdUQ7TUFDdkQsNEJBQTRCO01BQzVCLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YscUJBQXFCO01BQ3JCLHFCQUFxQjtNQUNyQixjRmxDUTtNRW1DUixhQUFhLEVBQUE7QUFsQ25CO01BcUNNLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQixXQUFXO01BQ1gsaUJBQWlCLEVBQUE7QUExQ3ZCO1FBNENRLFlBQVk7UUFDWixZQUFZO1FBQ1oseUJGNUNZO1FFNkNaLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsY0ZyRE07UUVzRE4sa0JBQWtCO1FBQ2xCLGtCQUFrQixFQUFBO0FBdEQxQjtRQXlEUSw0REFBa0Y7UUFDbEYsY0FBYztRQUNkLGFBQWE7UUFDYixZQUFZO1FBQ1osWUFBWTtRQUNaLFlBQVksRUFBQTtBQTlEcEI7UUFpRVEsOERBQW9GO1FBQ3BGLGFBQWE7UUFDYixZQUFZO1FBQ1osZUFBZTtRQUNmLFlBQVksRUFBQTtBQXJFcEI7SUEwRUksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsbUJBQW1CLEVBQUE7QUE3RXZCO01BK0VNLGtCQUFrQjtNQUNsQixpRUFBdUY7TUFDdkYsc0JBQXNCLEVBQUE7QUFqRjVCO1FBbUZRLGVBQWUsRUFBQTtBQW5GdkI7UUFzRlEsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLHFCQUFxQjtRQUNyQixjRjVGTSxFQUFBO0FFQ2Q7UUE4RlEsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxTQUFTO1FBQ1QsMkJBQTJCO1FBQzNCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLGNGekdNO1FFMEdOLG1CQUFtQjtRQUNuQiwyQkFBMkI7UUFDM0Isc0JBQXNCO1FBQ3RCLHlDQUF5QztRQUN6QyxrQkFBa0IsRUFBQTtBQTdHMUI7VUErR1Usa0JBQWtCLEVBQUE7QUEvRzVCO1VBa0hVLGdCQUFnQjtVQUNoQixpQkFBaUI7VUFDakIsZUFBZSxFQUFBO0FBcEh6QjtNQXlITSxjRjFIUTtNRTJIUixzQkFBc0I7TUFDdEIsYUFBYTtNQUNiLHlCRjFIYztNRTJIZCx1QkFBdUI7TUFDdkIsa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixxQkFBcUI7TUFDckIsb0JBQW9CLEVBQUE7QUFwSTFCO1FBc0lRLGVBQWUsRUFBQTtBQVl2QjtFQUNFO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0IsRUFBQTtJQUh4QjtNQU1NLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsZUFBZSxFQUFBO0lBUnJCO01BV00sYUFBYSxFQUFBLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluLXBhZ2UvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29sb3JzXG4kbWFpbjogIzMzMzMzMztcbiRhY3Rpb246ICMyMUFFNDk7XG4kZ3JleTogIzk5OTk5OTtcbiRsaWdodC1ncmV5OiAjRTdFN0U3O1xuXG4vKiBUeXBvZ3JhcGhpY1xuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMTsgfVxuICovXG4laDEge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiA1NnB4O1xuICBjb2xvcjogJG1haW47XG4gIG1hcmdpbjogMDtcbn1cbiVoMiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xufVxuJWgzIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogJG1haW47XG4gIG1hcmdpbjogMDtcbn1cbiVoNCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG59XG4lYm9keSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJW5hdmlnYXRpb24ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJXNsaWRlciB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG4lY2FwdGlvbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5cbi8qIFR5cG9ncmFwaGljIG1vYmlsZVxuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMS1tb2I7IH1cbiAqL1xuJWgxLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoMS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogJG1haW47XG59XG4laDItbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGgyLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVoMy1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGgzLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBjb2xvcjogJG1haW47XG59XG4laDQtbW9iIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoNC1tb2Ige1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWJvZHktbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gYm9keS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVsb2NhbC1uYXZpZ2F0aW9uLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5AbWl4aW4gbG9jYWwtbmF2aWdhdGlvbi1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRncmV5O1xufVxuXG4vLyBCdXR0b25cbiVidXR0b24ge1xuICBiYWNrZ3JvdW5kOiAkYWN0aW9uO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYWN0aW9uO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEzcHg7XG4gIG1pbi13aWR0aDogMTgxLjk4cHg7XG4gIGhlaWdodDogNTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuJXN0b3JlcyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDE2MXB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmEge1xuICBjb2xvcjogJGFjdGlvbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIiwiLyogVHlwb2dyYXBoaWNcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDE7IH1cbiAqL1xuLyogVHlwb2dyYXBoaWMgbW9iaWxlXG4gKiB1c2UgZXguIC50aXRsZSB7IEBleHRlbmQgJWgxLW1vYjsgfVxuICovXG5hIHtcbiAgY29sb3I6ICMyMUFFNDk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG4uaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDEwNHB4IDAgMTAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMTAwbXM7XG4gIHotaW5kZXg6IDU7IH1cbiAgLmhlYWRlci5oYXZlLWZpeGVkLW1lbnUge1xuICAgIGhlaWdodDogNjBweDsgfVxuICAuaGVhZGVyIC5yaWdodC1zaWRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgLmhlYWRlciAucmlnaHQtc2lkZSAubG9nbyB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBoZWlnaHQ6IDM4cHg7XG4gICAgICBwYWRkaW5nOiAwIDAgMCA1MXB4O1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2xvZ28uc3ZnXCIpO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgLmhlYWRlciAucmlnaHQtc2lkZSAuYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDE5cHg7IH1cbiAgICAgIC5oZWFkZXIgLnJpZ2h0LXNpZGUgLmJ1dHRvbnMgLnRyeS1idXR0b24ge1xuICAgICAgICB3aWR0aDogMTQ4cHg7XG4gICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0U3RTdFNztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDhweCAwIDlweDsgfVxuICAgICAgLmhlYWRlciAucmlnaHQtc2lkZSAuYnV0dG9ucyAuYXBwLXN0b3JlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2FwcC1zdG9yZS13aGl0ZS5zdmdcIikgbm8tcmVwZWF0O1xuICAgICAgICBtYXJnaW46IDAgMTJweDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgICB3aWR0aDogMTI5cHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTsgfVxuICAgICAgLmhlYWRlciAucmlnaHQtc2lkZSAuYnV0dG9ucyAucGxheS1zdG9yZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9nb29nbGUtcGxheS13aGl0ZS5zdmdcIikgbm8tcmVwZWF0O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgIHdpZHRoOiAxMzUuNDVweDtcbiAgICAgICAgYm9yZGVyOiBub25lOyB9XG4gIC5oZWFkZXIgLmxlZnQtc2lkZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxuICAgIC5oZWFkZXIgLmxlZnQtc2lkZSAuc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvY2hldnJvbi1ib3R0b20uc3ZnXCIpIG5vLXJlcGVhdCByaWdodDtcbiAgICAgIHBhZGRpbmc6IDAgMjguMjFweCAwIDA7IH1cbiAgICAgIC5oZWFkZXIgLmxlZnQtc2lkZSAuc2VsZWN0LWNvbnRhaW5lcjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgLmhlYWRlciAubGVmdC1zaWRlIC5zZWxlY3QtY29udGFpbmVyIC5zZWxlY3RlZCB7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgICBjb2xvcjogIzMzMzMzMzsgfVxuICAgICAgLmhlYWRlciAubGVmdC1zaWRlIC5zZWxlY3QtY29udGFpbmVyIC5zZWxlY3QtaXRlbXMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMzBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDI3cHggOXB4IDE4cHg7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRTdFN0U3O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4OyB9XG4gICAgICAgIC5oZWFkZXIgLmxlZnQtc2lkZSAuc2VsZWN0LWNvbnRhaW5lciAuc2VsZWN0LWl0ZW1zIGxpOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7IH1cbiAgICAgICAgLmhlYWRlciAubGVmdC1zaWRlIC5zZWxlY3QtY29udGFpbmVyIC5zZWxlY3QtaXRlbXMgLmFjdGl2ZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7IH1cbiAgICAuaGVhZGVyIC5sZWZ0LXNpZGUgLmxvZ2luIHtcbiAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgcGFkZGluZzogMTBweCAxOHB4IDlweDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTdFN0U3O1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICBtYXJnaW4tbGVmdDogNDguNzlweDsgfVxuICAgICAgLmhlYWRlciAubGVmdC1zaWRlIC5sb2dpbjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBoZWFkZXIuaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHBhZGRpbmc6IDAgMTZweCAwIDE4cHg7IH1cbiAgICBoZWFkZXIuaGVhZGVyIC5yaWdodC1zaWRlIC5sb2dvIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gICAgICBmb250LXNpemU6IDI0cHg7IH1cbiAgICBoZWFkZXIuaGVhZGVyIC5yaWdodC1zaWRlIC5idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3VpJztcblxuLmhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxMDRweCAwIDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDEwMG1zO1xuICB6LWluZGV4OiA1O1xuICAmLmhhdmUtZml4ZWQtbWVudSB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG4gIC5yaWdodC1zaWRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5sb2dvIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGhlaWdodDogMzhweDtcbiAgICAgIHBhZGRpbmc6IDAgMCAwIDUxcHg7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvbG9nby5zdmdcIik7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogJG1haW47XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgICAuYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDE5cHg7XG4gICAgICAudHJ5LWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxNDhweDtcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHQtZ3JleTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAkbWFpbjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA4cHggMCA5cHg7XG4gICAgICB9XG4gICAgICAuYXBwLXN0b3JlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvYXBwLXN0b3JlLXdoaXRlLnN2ZycpIG5vLXJlcGVhdDtcbiAgICAgICAgbWFyZ2luOiAwIDEycHg7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgd2lkdGg6IDEyOXB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB9XG4gICAgICAucGxheS1zdG9yZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2dvb2dsZS1wbGF5LXdoaXRlLnN2ZycpIG5vLXJlcGVhdDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgICB3aWR0aDogMTM1LjQ1cHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmxlZnQtc2lkZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAuc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvY2hldnJvbi1ib3R0b20uc3ZnXCIpIG5vLXJlcGVhdCByaWdodDtcbiAgICAgIHBhZGRpbmc6IDAgMjguMjFweCAwIDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgLnNlbGVjdGVkIHtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgIGNvbG9yOiAkbWFpbjtcbiAgICAgIH1cbiAgICAgIC5zZWxlY3QtaXRlbXMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMzBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDI3cHggOXB4IDE4cHg7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgICBjb2xvcjogJG1haW47XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAgIGJvcmRlcjogMC41cHggc29saWQgI0U3RTdFNztcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgbGk6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICAgICAgfVxuICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAubG9naW4ge1xuICAgICAgY29sb3I6ICRtYWluO1xuICAgICAgcGFkZGluZzogMTBweCAxOHB4IDlweDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHQtZ3JleTtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDQ4Ljc5cHg7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyB0YWJsZXQgc21cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpe1xuXG59XG5cbi8vIG1vYmlsZSB4c1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xuICBoZWFkZXIuaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHBhZGRpbmc6IDAgMTZweCAwIDE4cHg7XG4gICAgLnJpZ2h0LXNpZGUge1xuICAgICAgLmxvZ28ge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIH1cbiAgICAgIC5idXR0b25zIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/main-page/components/header/header.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/main-page/components/header/header.component.ts ***!
  \***********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_scroll_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/scroll-events.service */ "./src/app/services/scroll-events.service.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translateService, scrollEventsService) {
        this.translateService = translateService;
        this.scrollEventsService = scrollEventsService;
        this.selectLangIsOpen = false;
        this.selectedLangText = 'English';
        this.selectedLangTextShort = 'Eng';
        this.showButtons = false;
        this.haveFixedMenu = false;
        this.buttonsPosition = 0;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageOffsetListener = this.scrollEventsService.pageOffset$.subscribe(function (value) {
            _this.showButtons = value > _this.buttonsPosition + 50;
        });
        this.buttonsPositionListener = this.scrollEventsService.buttonsPosition$.subscribe(function (value) {
            _this.buttonsPosition = value;
        });
        this.menuSetFixedListener = this.scrollEventsService.menuSetFixed$.subscribe(function (value) {
            _this.haveFixedMenu = value;
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.pageOffsetListener.unsubscribe();
        this.buttonsPositionListener.unsubscribe();
        this.menuSetFixedListener.unsubscribe();
    };
    HeaderComponent.prototype.changeLanguage = function (event, lang, forShort) {
        if (forShort === void 0) { forShort = false; }
        event.stopPropagation();
        if (lang === 'en') {
            this.selectedLangText = 'English';
        }
        else {
            this.selectedLangText = 'France';
        }
        if (lang === 'en' && forShort) {
            this.selectedLangTextShort = 'Eng';
        }
        else if (lang === 'fr' && forShort) {
            this.selectedLangTextShort = 'Frn';
        }
        this.translateService.use(lang);
        this.selectLangIsOpen = false;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/pages/main-page/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/pages/main-page/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _services_scroll_events_service__WEBPACK_IMPORTED_MODULE_3__["ScrollEventsService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/main-page/components/jumbotron/jumbotron.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/main-page/components/jumbotron/jumbotron.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"jumbotron\">\n  <h1 [translate]=\"'Jumbo.h1'\"></h1>\n  <span *responsive=\"{ bootstrap: ['xl', 'lg', 'md', 'sm'] }\" class=\"subscription\" [translate]=\"'Jumbo.subscription'\"></span>\n  <span *xs class=\"subscription mob-1\" [translate]=\"'Jumbo.subscription-mob-1'\"></span>\n  <span *xs class=\"subscription mob-2\" [translate]=\"'Jumbo.subscription-mob-2'\"></span>\n  <div #buttons class=\"buttons\">\n    <a *responsive=\"{ bootstrap: ['xl', 'lg', 'md', 'sm'] }\" href=\"#\" class=\"try-button\" [translate]=\"'Jumbo.button.try'\"></a>\n    <a href=\"#\" class=\"app-store\"></a>\n    <a href=\"#\" class=\"play-store\"></a>\n  </div>\n  <span *responsive=\"{ bootstrap: ['xl', 'lg', 'md', 'sm'] }\" class=\"info\" [translate]=\"'Jumbo.info'\"></span>\n  <div class=\"temp-block\"></div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/main-page/components/jumbotron/jumbotron.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/main-page/components/jumbotron/jumbotron.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Typographic\n * use ex. .title { @extend %h1; }\n */\nsection.jumbotron h1 {\n  font-style: normal;\n  font-weight: bold;\n  line-height: 60px;\n  font-size: 56px;\n  color: #333333;\n  margin: 0; }\nsection.jumbotron .subscription {\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  font-size: 18px;\n  color: #333333;\n  margin: 0; }\nsection.jumbotron span.info {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 25px;\n  font-size: 18px;\n  color: #333333; }\n/* Typographic mobile\n * use ex. .title { @extend %h1-mob; }\n */\nsection.jumbotron .buttons .try-button {\n  background: #21AE49;\n  border: 1px solid #21AE49;\n  border-radius: 4px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 28px;\n  font-size: 18px;\n  text-align: center;\n  color: #ffffff;\n  padding: 10px 10px 13px;\n  min-width: 181.98px;\n  height: 50px;\n  outline: none; }\nsection.jumbotron .buttons .app-store, section.jumbotron .buttons .play-store {\n  outline: none;\n  height: 50px;\n  width: 161px;\n  border: none; }\na {\n  color: #21AE49;\n  text-decoration: none; }\nsection.jumbotron {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 78px 100px 46px;\n  margin-top: 80px; }\nsection.jumbotron h1 {\n    margin-bottom: 35px; }\nsection.jumbotron .subscription {\n    margin-bottom: 28px;\n    padding: 6px 20px;\n    background: url('marker.svg') center no-repeat;\n    background-size: cover; }\nsection.jumbotron .buttons {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    width: 100%;\n    margin-bottom: 19px; }\nsection.jumbotron .buttons .app-store {\n      background: transparent url('app-store.svg') no-repeat;\n      margin: 0 12px; }\nsection.jumbotron .buttons .play-store {\n      background: transparent url('google-play.svg') no-repeat; }\nsection.jumbotron span.info {\n    color: #999999;\n    margin-bottom: 55px; }\nsection.jumbotron .temp-block {\n    background-color: #E7E7E7;\n    width: 100%;\n    height: 594px; }\n@media screen and (max-width: 600px) {\n  section.jumbotron {\n    padding: 33px 21px 46px;\n    margin-top: 60px; }\n    section.jumbotron h1 {\n      font-style: normal;\n      font-weight: bold;\n      line-height: 46px;\n      font-size: 36px;\n      color: #333333;\n      text-align: center;\n      margin: 0 5px 2px; }\n    section.jumbotron .buttons .app-store {\n      margin: 0 12px 0 0; }\n    section.jumbotron .subscription {\n      font-style: normal;\n      font-weight: 500;\n      line-height: 26px;\n      font-size: 17px;\n      text-align: center;\n      background-size: cover;\n      margin-bottom: 0;\n      width: 100%;\n      display: inline-block;\n      padding: 1px 20px; }\n      section.jumbotron .subscription.mob-1 {\n        background: url('marker-mob-1.svg') center no-repeat; }\n      section.jumbotron .subscription.mob-2 {\n        background: url('marker-mob-2.svg') center no-repeat;\n        margin-bottom: 55px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9zdHlsZXMvX3VpLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2p1bWJvdHJvbi9qdW1ib3Ryb24uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWxleHphdmdvcm9kbmlpL1Byb2plY3RzL2xhbnRoaWVyLXByb21vc2l0ZS9zcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2p1bWJvdHJvbi9qdW1ib3Ryb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7O0VDSkU7QUNBRjtFRlFFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQWJZO0VBY1osU0FBUyxFQUFBO0FFYlg7RUZnQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBckNZO0VBc0NaLFNBQVMsRUFBQTtBRXJDWDtFRndDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0E3Q1ksRUFBQTtBQXdFZDs7RUM3Q0U7QUMxQkY7RUZ1S0UsbUJBdktjO0VBd0tkLHlCQXhLYztFQXlLZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYSxFQUFBO0FFbkxmO0VGdUxFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVksRUFBQTtBQUdkO0VBQ0UsY0E5TGM7RUErTGQscUJBQXFCLEVBQUE7QUUvTHZCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixnQkFBZ0IsRUFBQTtBQU5sQjtJQVNJLG1CQUFtQixFQUFBO0FBVHZCO0lBYUksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiw4Q0FBb0U7SUFDcEUsc0JBQXNCLEVBQUE7QUFoQjFCO0lBbUJJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsbUJBQW1CLEVBQUE7QUF4QnZCO01BNkJNLHNEQUE0RTtNQUM1RSxjQUFjLEVBQUE7QUE5QnBCO01Ba0NNLHdEQUE4RSxFQUFBO0FBbENwRjtJQXdDSSxjRnZDVTtJRXdDVixtQkFBbUIsRUFBQTtBQXpDdkI7SUE0Q0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxhQUFhLEVBQUE7QUFVakI7RUF4REE7SUEwREksdUJBQXVCO0lBQ3ZCLGdCQUFnQixFQUFBO0lBM0RwQjtNQTZETSxrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsY0ZsRVE7TUVtRVIsa0JBQWtCO01BQ2xCLGlCQUFpQixFQUFBO0lBbkV2QjtNQXVFUSxrQkFBa0IsRUFBQTtJQXZFMUI7TUEyRU0sa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixzQkFBc0I7TUFDdEIsZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxxQkFBcUI7TUFDckIsaUJBQWlCLEVBQUE7TUEzQnJCO1FBNkJNLG9EQUEwRSxFQUFBO01BN0JoRjtRQWdDTSxvREFBMEU7UUFDMUUsbUJBQW1CLEVBQUEsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluLXBhZ2UvY29tcG9uZW50cy9qdW1ib3Ryb24vanVtYm90cm9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29sb3JzXG4kbWFpbjogIzMzMzMzMztcbiRhY3Rpb246ICMyMUFFNDk7XG4kZ3JleTogIzk5OTk5OTtcbiRsaWdodC1ncmV5OiAjRTdFN0U3O1xuXG4vKiBUeXBvZ3JhcGhpY1xuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMTsgfVxuICovXG4laDEge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiA1NnB4O1xuICBjb2xvcjogJG1haW47XG4gIG1hcmdpbjogMDtcbn1cbiVoMiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xufVxuJWgzIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogJG1haW47XG4gIG1hcmdpbjogMDtcbn1cbiVoNCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG59XG4lYm9keSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJW5hdmlnYXRpb24ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJXNsaWRlciB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG4lY2FwdGlvbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5cbi8qIFR5cG9ncmFwaGljIG1vYmlsZVxuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMS1tb2I7IH1cbiAqL1xuJWgxLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoMS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogJG1haW47XG59XG4laDItbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGgyLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVoMy1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGgzLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBjb2xvcjogJG1haW47XG59XG4laDQtbW9iIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoNC1tb2Ige1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWJvZHktbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gYm9keS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVsb2NhbC1uYXZpZ2F0aW9uLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5AbWl4aW4gbG9jYWwtbmF2aWdhdGlvbi1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRncmV5O1xufVxuXG4vLyBCdXR0b25cbiVidXR0b24ge1xuICBiYWNrZ3JvdW5kOiAkYWN0aW9uO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYWN0aW9uO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEzcHg7XG4gIG1pbi13aWR0aDogMTgxLjk4cHg7XG4gIGhlaWdodDogNTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuJXN0b3JlcyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDE2MXB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmEge1xuICBjb2xvcjogJGFjdGlvbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIiwiLyogVHlwb2dyYXBoaWNcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDE7IH1cbiAqL1xuc2VjdGlvbi5qdW1ib3Ryb24gaDEge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiA1NnB4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgbWFyZ2luOiAwOyB9XG5cbnNlY3Rpb24uanVtYm90cm9uIC5zdWJzY3JpcHRpb24ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBtYXJnaW46IDA7IH1cblxuc2VjdGlvbi5qdW1ib3Ryb24gc3Bhbi5pbmZvIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzMzMzMzMzsgfVxuXG4vKiBUeXBvZ3JhcGhpYyBtb2JpbGVcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDEtbW9iOyB9XG4gKi9cbnNlY3Rpb24uanVtYm90cm9uIC5idXR0b25zIC50cnktYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzIxQUU0OTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzIxQUU0OTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxM3B4O1xuICBtaW4td2lkdGg6IDE4MS45OHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG91dGxpbmU6IG5vbmU7IH1cblxuc2VjdGlvbi5qdW1ib3Ryb24gLmJ1dHRvbnMgLmFwcC1zdG9yZSwgc2VjdGlvbi5qdW1ib3Ryb24gLmJ1dHRvbnMgLnBsYXktc3RvcmUge1xuICBvdXRsaW5lOiBub25lO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxNjFweDtcbiAgYm9yZGVyOiBub25lOyB9XG5cbmEge1xuICBjb2xvcjogIzIxQUU0OTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbnNlY3Rpb24uanVtYm90cm9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDc4cHggMTAwcHggNDZweDtcbiAgbWFyZ2luLXRvcDogODBweDsgfVxuICBzZWN0aW9uLmp1bWJvdHJvbiBoMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDsgfVxuICBzZWN0aW9uLmp1bWJvdHJvbiAuc3Vic2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICAgIHBhZGRpbmc6IDZweCAyMHB4O1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9tYXJrZXIuc3ZnXCIpIGNlbnRlciBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgfVxuICBzZWN0aW9uLmp1bWJvdHJvbiAuYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTlweDsgfVxuICAgIHNlY3Rpb24uanVtYm90cm9uIC5idXR0b25zIC5hcHAtc3RvcmUge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2FwcC1zdG9yZS5zdmdcIikgbm8tcmVwZWF0O1xuICAgICAgbWFyZ2luOiAwIDEycHg7IH1cbiAgICBzZWN0aW9uLmp1bWJvdHJvbiAuYnV0dG9ucyAucGxheS1zdG9yZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvZ29vZ2xlLXBsYXkuc3ZnXCIpIG5vLXJlcGVhdDsgfVxuICBzZWN0aW9uLmp1bWJvdHJvbiBzcGFuLmluZm8ge1xuICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgIG1hcmdpbi1ib3R0b206IDU1cHg7IH1cbiAgc2VjdGlvbi5qdW1ib3Ryb24gLnRlbXAtYmxvY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFN0U3RTc7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1OTRweDsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBzZWN0aW9uLmp1bWJvdHJvbiB7XG4gICAgcGFkZGluZzogMzNweCAyMXB4IDQ2cHg7XG4gICAgbWFyZ2luLXRvcDogNjBweDsgfVxuICAgIHNlY3Rpb24uanVtYm90cm9uIGgxIHtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMCA1cHggMnB4OyB9XG4gICAgc2VjdGlvbi5qdW1ib3Ryb24gLmJ1dHRvbnMgLmFwcC1zdG9yZSB7XG4gICAgICBtYXJnaW46IDAgMTJweCAwIDA7IH1cbiAgICBzZWN0aW9uLmp1bWJvdHJvbiAuc3Vic2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nOiAxcHggMjBweDsgfVxuICAgICAgc2VjdGlvbi5qdW1ib3Ryb24gLnN1YnNjcmlwdGlvbi5tb2ItMSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9tYXJrZXItbW9iLTEuc3ZnXCIpIGNlbnRlciBuby1yZXBlYXQ7IH1cbiAgICAgIHNlY3Rpb24uanVtYm90cm9uIC5zdWJzY3JpcHRpb24ubW9iLTIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvbWFya2VyLW1vYi0yLnN2Z1wiKSBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1NXB4OyB9IH1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy91aSc7XG5cbnNlY3Rpb24uanVtYm90cm9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDc4cHggMTAwcHggNDZweDtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgaDEge1xuICAgIEBleHRlbmQgJWgxO1xuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gIH1cbiAgLnN1YnNjcmlwdGlvbiB7XG4gICAgQGV4dGVuZCAlaDQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgICBwYWRkaW5nOiA2cHggMjBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9tYXJrZXIuc3ZnJykgY2VudGVyIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG4gIC5idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxOXB4O1xuICAgIC50cnktYnV0dG9uIHtcbiAgICAgIEBleHRlbmQgJWJ1dHRvbjtcbiAgICB9XG4gICAgLmFwcC1zdG9yZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9hcHAtc3RvcmUuc3ZnJykgbm8tcmVwZWF0O1xuICAgICAgbWFyZ2luOiAwIDEycHg7XG4gICAgICBAZXh0ZW5kICVzdG9yZXM7XG4gICAgfVxuICAgIC5wbGF5LXN0b3JlIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2dvb2dsZS1wbGF5LnN2ZycpIG5vLXJlcGVhdDtcbiAgICAgIEBleHRlbmQgJXN0b3JlcztcbiAgICB9XG4gIH1cbiAgc3Bhbi5pbmZvIHtcbiAgICBAZXh0ZW5kICVib2R5O1xuICAgIGNvbG9yOiAkZ3JleTtcbiAgICBtYXJnaW4tYm90dG9tOiA1NXB4O1xuICB9XG4gIC50ZW1wLWJsb2NrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdFN0U3O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTk0cHg7XG4gIH1cbn1cblxuLy8gdGFibGV0IHNtXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KXtcblxufVxuXG4vLyBtb2JpbGUgeHNcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcbiAgc2VjdGlvbi5qdW1ib3Ryb24ge1xuICAgIHBhZGRpbmc6IDMzcHggMjFweCA0NnB4O1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgaDEge1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBsaW5lLWhlaWdodDogNDZweDtcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgIGNvbG9yOiAkbWFpbjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMCA1cHggMnB4O1xuICAgIH1cbiAgICAuYnV0dG9ucyB7XG4gICAgICAuYXBwLXN0b3JlIHtcbiAgICAgICAgbWFyZ2luOiAwIDEycHggMCAwO1xuICAgICAgfVxuICAgIH1cbiAgICAuc3Vic2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nOiAxcHggMjBweDtcbiAgICAgICYubW9iLTEge1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9tYXJrZXItbW9iLTEuc3ZnJykgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgIH1cbiAgICAgICYubW9iLTIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9tYXJrZXItbW9iLTIuc3ZnJykgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/main-page/components/jumbotron/jumbotron.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/main-page/components/jumbotron/jumbotron.component.ts ***!
  \*****************************************************************************/
/*! exports provided: JumbotronComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumbotronComponent", function() { return JumbotronComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_scroll_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/scroll-events.service */ "./src/app/services/scroll-events.service.ts");



var JumbotronComponent = /** @class */ (function () {
    function JumbotronComponent(scrollEventsService) {
        this.scrollEventsService = scrollEventsService;
    }
    JumbotronComponent.prototype.ngOnInit = function () {
        this.scrollEventsService.setButtonsPosition(this.buttons.nativeElement.offsetTop);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('buttons'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], JumbotronComponent.prototype, "buttons", void 0);
    JumbotronComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jumbotron',
            template: __webpack_require__(/*! ./jumbotron.component.html */ "./src/app/pages/main-page/components/jumbotron/jumbotron.component.html"),
            styles: [__webpack_require__(/*! ./jumbotron.component.scss */ "./src/app/pages/main-page/components/jumbotron/jumbotron.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_scroll_events_service__WEBPACK_IMPORTED_MODULE_2__["ScrollEventsService"]])
    ], JumbotronComponent);
    return JumbotronComponent;
}());



/***/ }),

/***/ "./src/app/pages/main-page/components/mobile-menu/mobile-menu.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/main-page/components/mobile-menu/mobile-menu.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"white-menu\" (click)=\"toggleMenu()\">Menu</button>\n<div class=\"menu\" *ngIf=\"showMenu\">\n  <div class=\"menu-content\">\n    <div class=\"menu-head\">\n      <h2>Menu</h2>\n      <button [translate]=\"'Mobile-menu.close-button'\" (click)=\"toggleMenu()\"></button>\n    </div>\n    <div class=\"menu-items\">\n      <div class=\"buttons\">\n        <a href=\"#\" class=\"app-store\"></a>\n        <a href=\"#\" class=\"play-store\"></a>\n        <a href=\"#\" class=\"try-button\" [translate]=\"'Jumbo.button.try'\"></a>\n      </div>\n      <span class=\"info\" [translate]=\"'Jumbo.info'\"></span>\n      <div class=\"fixed-menu\">\n        <a href=\"\" [translate]=\"'FixedMenu.item-1'\"></a>\n        <a href=\"\" [translate]=\"'FixedMenu.item-2'\"></a>\n        <a href=\"\" [translate]=\"'FixedMenu.item-3'\"></a>\n        <a href=\"\" [translate]=\"'FixedMenu.item-4'\"></a>\n        <a href=\"\" [translate]=\"'FixedMenu.item-5'\"></a>\n        <a href=\"\" [translate]=\"'FixedMenu.item-6'\"></a>\n        <a href=\"\" [translate]=\"'FixedMenu.item-7'\"></a>\n      </div>\n      <button class=\"login\" [translate]=\"'Mobile-menu.login-button'\"></button>\n      <ul>\n        <li><a href=\"#footer\" [translate]=\"'Footer-links-1'\"></a></li>\n        <li><a href=\"#footer\" [translate]=\"'Footer-links-2'\"></a></li>\n        <li><a href=\"#footer\" [translate]=\"'Footer-links-5'\"></a></li>\n        <li><a href=\"#footer\" [translate]=\"'Footer-links-4'\"></a></li>\n      </ul>\n      <div class=\"white-space\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/main-page/components/mobile-menu/mobile-menu.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/main-page/components/mobile-menu/mobile-menu.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Typographic\n * use ex. .title { @extend %h1; }\n */\n.menu .menu-content .menu-items ul li a {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 25px;\n  font-size: 18px;\n  color: #333333; }\n.menu .menu-content .menu-items .login {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 23px;\n  font-size: 16px;\n  letter-spacing: 0.2px;\n  color: #333333; }\n/* Typographic mobile\n * use ex. .title { @extend %h1-mob; }\n */\n.menu .menu-content .menu-head h2 {\n  font-style: normal;\n  font-weight: bold;\n  line-height: 48px;\n  font-size: 24px;\n  color: #333333; }\n.menu .menu-content .menu-items .buttons .try-button {\n  background: #21AE49;\n  border: 1px solid #21AE49;\n  border-radius: 4px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 28px;\n  font-size: 18px;\n  text-align: center;\n  color: #ffffff;\n  padding: 10px 10px 13px;\n  min-width: 181.98px;\n  height: 50px;\n  outline: none; }\n.menu .menu-content .menu-items .buttons .app-store, .menu .menu-content .menu-items .buttons .play-store {\n  outline: none;\n  height: 50px;\n  width: 161px;\n  border: none; }\na {\n  color: #21AE49;\n  text-decoration: none; }\nbutton.white-menu {\n  height: 38px;\n  border: 1px solid #E7E7E7;\n  border-radius: 4px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 25px;\n  font-size: 17px;\n  text-align: center;\n  color: #333333;\n  background: #ffffff;\n  margin-left: 17.79px;\n  outline: none;\n  padding: 0 18px; }\n.menu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background: rgba(0, 0, 0, 0.47);\n  z-index: 99; }\n.menu .menu-content {\n    z-index: 100;\n    position: absolute;\n    right: 0;\n    top: 0;\n    height: 100vh;\n    width: 238px;\n    background: #FFFFFF;\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.17);\n    display: flex;\n    flex-direction: column; }\n.menu .menu-content .menu-head {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      width: 100%;\n      height: 54px;\n      padding: 6px 16px 0 18px; }\n.menu .menu-content .menu-head h2 {\n        margin: 0; }\n.menu .menu-content .menu-head button {\n        height: 38px;\n        border: 1px solid #E7E7E7;\n        border-radius: 4px;\n        font-style: normal;\n        font-weight: normal;\n        line-height: 25px;\n        font-size: 17px;\n        text-align: center;\n        color: #333333;\n        background: #ffffff;\n        margin-left: 17.79px;\n        outline: none;\n        padding: 0 18px; }\n.menu .menu-content .menu-items {\n      width: 100%;\n      padding: 26px 0 18px 18px;\n      height: calc(100vh - 54px);\n      overflow: auto; }\n.menu .menu-content .menu-items .buttons {\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: flex-start;\n        width: 100%;\n        float: left; }\n.menu .menu-content .menu-items .buttons .try-button {\n          min-width: 161px;\n          margin-bottom: 6px; }\n.menu .menu-content .menu-items .buttons .app-store {\n          background: transparent url('app-store.svg') no-repeat;\n          margin-bottom: 12px;\n          min-height: 50px; }\n.menu .menu-content .menu-items .buttons .play-store {\n          background: transparent url('google-play.svg') no-repeat;\n          margin-bottom: 12px;\n          min-height: 50px; }\n.menu .menu-content .menu-items span.info {\n        font-style: normal;\n        font-weight: normal;\n        line-height: 23px;\n        font-size: 16px;\n        letter-spacing: 0.2px;\n        color: #999999;\n        width: 100%;\n        float: left;\n        padding-right: 16px;\n        margin-bottom: 19px;\n        display: inline-block; }\n.menu .menu-content .menu-items div.fixed-menu {\n        width: 100%;\n        float: left;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: flex-start;\n        margin-bottom: 23px; }\n.menu .menu-content .menu-items div.fixed-menu a {\n          width: 100%;\n          padding: 11px 5px 13px 0;\n          background: #FFFFFF;\n          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.09), 0px -1px 0px rgba(0, 0, 0, 0.09);\n          font-style: normal;\n          font-weight: normal;\n          line-height: 26px;\n          font-size: 18px;\n          color: #333333; }\n.menu .menu-content .menu-items .login {\n        color: #333333;\n        padding: 10px 0 9px;\n        outline: none;\n        border: 1px solid #E7E7E7;\n        background: transparent;\n        border-radius: 4px;\n        letter-spacing: 0.2px;\n        width: calc(100% - 15px);\n        float: left;\n        margin-bottom: 3px;\n        min-height: 44px; }\n.menu .menu-content .menu-items .login:hover {\n          cursor: pointer; }\n.menu .menu-content .menu-items ul {\n        width: 100%;\n        float: left;\n        list-style: none;\n        display: flex;\n        flex-direction: column;\n        margin: 0;\n        padding: 0; }\n.menu .menu-content .menu-items ul li a {\n          display: inline-block;\n          margin-top: 24px; }\n.menu .menu-content .menu-items .white-space {\n        width: 100%;\n        height: 100px;\n        float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9zdHlsZXMvX3VpLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL21vYmlsZS1tZW51L21vYmlsZS1tZW51LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FsZXh6YXZnb3JvZG5paS9Qcm9qZWN0cy9sYW50aGllci1wcm9tb3NpdGUvc3JjL2FwcC9wYWdlcy9tYWluLXBhZ2UvY29tcG9uZW50cy9tb2JpbGUtbWVudS9tb2JpbGUtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTs7RUNKRTtBQ2VGO0VGeUJFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQTdDWSxFQUFBO0FFZ0JkO0VGZ0NFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsY0FyRFksRUFBQTtBQXdFZDs7RUNyREU7QUNIRjtFRjBFRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0E5RlksRUFBQTtBRWdCZDtFRndKRSxtQkF2S2M7RUF3S2QseUJBeEtjO0VBeUtkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhLEVBQUE7QUVwS2Y7RUZ3S0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWSxFQUFBO0FBR2Q7RUFDRSxjQTlMYztFQStMZCxxQkFBcUIsRUFBQTtBRS9MdkI7RUFDRSxZQUFZO0VBQ1oseUJGQWtCO0VFQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNGVlk7RUVXWixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixlQUFlLEVBQUE7QUFFakI7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxhQUFhO0VBQ2IsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixXQUFXLEVBQUE7QUFQYjtJQVNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLHNCQUFzQixFQUFBO0FBbEIxQjtNQW9CTSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDhCQUE4QjtNQUM5QixtQkFBbUI7TUFDbkIsV0FBVztNQUNYLFlBQVk7TUFDWix3QkFBd0IsRUFBQTtBQTFCOUI7UUE2QlEsU0FBUyxFQUFBO0FBN0JqQjtRQWdDUSxZQUFZO1FBQ1oseUJGOUNZO1FFK0NaLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGNGeERNO1FFeUROLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsYUFBYTtRQUNiLGVBQWUsRUFBQTtBQTVDdkI7TUFnRE0sV0FBVztNQUNYLHlCQUF5QjtNQUN6QiwwQkFBMEI7TUFDMUIsY0FBYyxFQUFBO0FBbkRwQjtRQXFEUSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLDJCQUEyQjtRQUMzQix1QkFBdUI7UUFDdkIsV0FBVztRQUNYLFdBQVcsRUFBQTtBQTFEbkI7VUE2RFUsZ0JBQWdCO1VBQ2hCLGtCQUFrQixFQUFBO0FBOUQ1QjtVQWlFVSxzREFBNEU7VUFFNUUsbUJBQW1CO1VBQ25CLGdCQUFnQixFQUFBO0FBcEUxQjtVQXVFVSx3REFBOEU7VUFFOUUsbUJBQW1CO1VBQ25CLGdCQUFnQixFQUFBO0FBMUUxQjtRQThFUSxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLGNGakdNO1FFa0dOLFdBQVc7UUFDWCxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixxQkFBcUIsRUFBQTtBQXhGN0I7UUEyRlEsV0FBVztRQUNYLFdBQVc7UUFDWCxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLDJCQUEyQjtRQUMzQix1QkFBdUI7UUFDdkIsbUJBQW1CLEVBQUE7QUFqRzNCO1VBbUdVLFdBQVc7VUFDWCx3QkFBd0I7VUFDeEIsbUJBQW1CO1VBQ25CLHlFQUF5RTtVQUN6RSxrQkFBa0I7VUFDbEIsbUJBQW1CO1VBQ25CLGlCQUFpQjtVQUNqQixlQUFlO1VBQ2YsY0YzSEksRUFBQTtBRWdCZDtRQWdIUSxjRmhJTTtRRWlJTixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLHlCRmhJWTtRRWlJWix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQix3QkFBd0I7UUFDeEIsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixnQkFBZ0IsRUFBQTtBQTFIeEI7VUE0SFUsZUFBZSxFQUFBO0FBNUh6QjtRQWdJUSxXQUFXO1FBQ1gsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLFNBQVM7UUFDVCxVQUFVLEVBQUE7QUF0SWxCO1VBMElZLHFCQUFxQjtVQUNyQixnQkFBZ0IsRUFBQTtBQTNJNUI7UUFnSlEsV0FBVztRQUNYLGFBQWE7UUFDYixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluLXBhZ2UvY29tcG9uZW50cy9tb2JpbGUtbWVudS9tb2JpbGUtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbG9yc1xuJG1haW46ICMzMzMzMzM7XG4kYWN0aW9uOiAjMjFBRTQ5O1xuJGdyZXk6ICM5OTk5OTk7XG4kbGlnaHQtZ3JleTogI0U3RTdFNztcblxuLyogVHlwb2dyYXBoaWNcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDE7IH1cbiAqL1xuJWgxIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIGZvbnQtc2l6ZTogNTZweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG59XG4laDIge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogJG1haW47XG4gIG1hcmdpbjogMDtcbn1cbiVoMyB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG59XG4laDQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xufVxuJWJvZHkge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVuYXZpZ2F0aW9uIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVzbGlkZXIge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRncmV5O1xufVxuJWNhcHRpb24ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgY29sb3I6ICRncmV5O1xufVxuXG4vKiBUeXBvZ3JhcGhpYyBtb2JpbGVcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDEtbW9iOyB9XG4gKi9cbiVoMS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gaDEtbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWgyLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoMi1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogJG1haW47XG59XG4laDMtbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoMy1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWg0LW1vYiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gaDQtbW9iIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVib2R5LW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGJvZHktbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogJG1haW47XG59XG4lbG9jYWwtbmF2aWdhdGlvbi1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRncmV5O1xufVxuQG1peGluIGxvY2FsLW5hdmlnYXRpb24tbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAkZ3JleTtcbn1cblxuLy8gQnV0dG9uXG4lYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogJGFjdGlvbjtcbiAgYm9yZGVyOiAxcHggc29saWQgJGFjdGlvbjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxM3B4O1xuICBtaW4td2lkdGg6IDE4MS45OHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiVzdG9yZXMge1xuICBvdXRsaW5lOiBub25lO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxNjFweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5hIHtcbiAgY29sb3I6ICRhY3Rpb247XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiIsIi8qIFR5cG9ncmFwaGljXG4gKiB1c2UgZXguIC50aXRsZSB7IEBleHRlbmQgJWgxOyB9XG4gKi9cbi5tZW51IC5tZW51LWNvbnRlbnQgLm1lbnUtaXRlbXMgdWwgbGkgYSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMzMzMzMzM7IH1cblxuLm1lbnUgLm1lbnUtY29udGVudCAubWVudS1pdGVtcyAubG9naW4ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICMzMzMzMzM7IH1cblxuLyogVHlwb2dyYXBoaWMgbW9iaWxlXG4gKiB1c2UgZXguIC50aXRsZSB7IEBleHRlbmQgJWgxLW1vYjsgfVxuICovXG4ubWVudSAubWVudS1jb250ZW50IC5tZW51LWhlYWQgaDIge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzMzMzMzMzsgfVxuXG4ubWVudSAubWVudS1jb250ZW50IC5tZW51LWl0ZW1zIC5idXR0b25zIC50cnktYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzIxQUU0OTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzIxQUU0OTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxM3B4O1xuICBtaW4td2lkdGg6IDE4MS45OHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG91dGxpbmU6IG5vbmU7IH1cblxuLm1lbnUgLm1lbnUtY29udGVudCAubWVudS1pdGVtcyAuYnV0dG9ucyAuYXBwLXN0b3JlLCAubWVudSAubWVudS1jb250ZW50IC5tZW51LWl0ZW1zIC5idXR0b25zIC5wbGF5LXN0b3JlIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTYxcHg7XG4gIGJvcmRlcjogbm9uZTsgfVxuXG5hIHtcbiAgY29sb3I6ICMyMUFFNDk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG5idXR0b24ud2hpdGUtbWVudSB7XG4gIGhlaWdodDogMzhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0U3RTdFNztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIG1hcmdpbi1sZWZ0OiAxNy43OXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwIDE4cHg7IH1cblxuLm1lbnUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDcpO1xuICB6LWluZGV4OiA5OTsgfVxuICAubWVudSAubWVudS1jb250ZW50IHtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAyMzhweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE3KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgICAubWVudSAubWVudS1jb250ZW50IC5tZW51LWhlYWQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDU0cHg7XG4gICAgICBwYWRkaW5nOiA2cHggMTZweCAwIDE4cHg7IH1cbiAgICAgIC5tZW51IC5tZW51LWNvbnRlbnQgLm1lbnUtaGVhZCBoMiB7XG4gICAgICAgIG1hcmdpbjogMDsgfVxuICAgICAgLm1lbnUgLm1lbnUtY29udGVudCAubWVudS1oZWFkIGJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMzhweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0U3RTdFNztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNy43OXB4O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwIDE4cHg7IH1cbiAgICAubWVudSAubWVudS1jb250ZW50IC5tZW51LWl0ZW1zIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMjZweCAwIDE4cHggMThweDtcbiAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDU0cHgpO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87IH1cbiAgICAgIC5tZW51IC5tZW51LWNvbnRlbnQgLm1lbnUtaXRlbXMgLmJ1dHRvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7IH1cbiAgICAgICAgLm1lbnUgLm1lbnUtY29udGVudCAubWVudS1pdGVtcyAuYnV0dG9ucyAudHJ5LWJ1dHRvbiB7XG4gICAgICAgICAgbWluLXdpZHRoOiAxNjFweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7IH1cbiAgICAgICAgLm1lbnUgLm1lbnUtY29udGVudCAubWVudS1pdGVtcyAuYnV0dG9ucyAuYXBwLXN0b3JlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvYXBwLXN0b3JlLnN2Z1wiKSBuby1yZXBlYXQ7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA1MHB4OyB9XG4gICAgICAgIC5tZW51IC5tZW51LWNvbnRlbnQgLm1lbnUtaXRlbXMgLmJ1dHRvbnMgLnBsYXktc3RvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9nb29nbGUtcGxheS5zdmdcIikgbm8tcmVwZWF0O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgICAgbWluLWhlaWdodDogNTBweDsgfVxuICAgICAgLm1lbnUgLm1lbnUtY29udGVudCAubWVudS1pdGVtcyBzcGFuLmluZm8ge1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgICAgY29sb3I6ICM5OTk5OTk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTlweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAubWVudSAubWVudS1jb250ZW50IC5tZW51LWl0ZW1zIGRpdi5maXhlZC1tZW51IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyM3B4OyB9XG4gICAgICAgIC5tZW51IC5tZW51LWNvbnRlbnQgLm1lbnUtaXRlbXMgZGl2LmZpeGVkLW1lbnUgYSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMTFweCA1cHggMTNweCAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMDkpLCAwcHggLTFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgY29sb3I6ICMzMzMzMzM7IH1cbiAgICAgIC5tZW51IC5tZW51LWNvbnRlbnQgLm1lbnUtaXRlbXMgLmxvZ2luIHtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMCA5cHg7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFN0U3RTc7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1cHgpO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICBtaW4taGVpZ2h0OiA0NHB4OyB9XG4gICAgICAgIC5tZW51IC5tZW51LWNvbnRlbnQgLm1lbnUtaXRlbXMgLmxvZ2luOmhvdmVyIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIC5tZW51IC5tZW51LWNvbnRlbnQgLm1lbnUtaXRlbXMgdWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDsgfVxuICAgICAgICAubWVudSAubWVudS1jb250ZW50IC5tZW51LWl0ZW1zIHVsIGxpIGEge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4OyB9XG4gICAgICAubWVudSAubWVudS1jb250ZW50IC5tZW51LWl0ZW1zIC53aGl0ZS1zcGFjZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBmbG9hdDogbGVmdDsgfVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3VpJztcblxuYnV0dG9uLndoaXRlLW1lbnUge1xuICBoZWlnaHQ6IDM4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodC1ncmV5O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogJG1haW47XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIG1hcmdpbi1sZWZ0OiAxNy43OXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwIDE4cHg7XG59XG4ubWVudSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40Nyk7XG4gIHotaW5kZXg6IDk5O1xuICAubWVudS1jb250ZW50IHtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAyMzhweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE3KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLm1lbnUtaGVhZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNTRweDtcbiAgICAgIHBhZGRpbmc6IDZweCAxNnB4IDAgMThweDtcbiAgICAgIGgyIHtcbiAgICAgICAgQGV4dGVuZCAlaDItbW9iO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICBidXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDM4cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodC1ncmV5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogJG1haW47XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNy43OXB4O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwIDE4cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5tZW51LWl0ZW1zIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMjZweCAwIDE4cHggMThweDtcbiAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDU0cHgpO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAuYnV0dG9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgLnRyeS1idXR0b24ge1xuICAgICAgICAgIEBleHRlbmQgJWJ1dHRvbjtcbiAgICAgICAgICBtaW4td2lkdGg6IDE2MXB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgICAgfVxuICAgICAgICAuYXBwLXN0b3JlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9hcHAtc3RvcmUuc3ZnJykgbm8tcmVwZWF0O1xuICAgICAgICAgIEBleHRlbmQgJXN0b3JlcztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnBsYXktc3RvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2dvb2dsZS1wbGF5LnN2ZycpIG5vLXJlcGVhdDtcbiAgICAgICAgICBAZXh0ZW5kICVzdG9yZXM7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzcGFuLmluZm8ge1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgICAgY29sb3I6ICRncmV5O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE5cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICAgIGRpdi5maXhlZC1tZW51IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyM3B4O1xuICAgICAgICBhIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAxMXB4IDVweCAxM3B4IDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wOSksIDBweCAtMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBjb2xvcjogJG1haW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5sb2dpbiB7XG4gICAgICAgIEBleHRlbmQgJW5hdmlnYXRpb247XG4gICAgICAgIGNvbG9yOiAkbWFpbjtcbiAgICAgICAgcGFkZGluZzogMTBweCAwIDlweDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0LWdyZXk7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1cHgpO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICBtaW4taGVpZ2h0OiA0NHB4O1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHVsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIEBleHRlbmQgJWJvZHk7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLndoaXRlLXNwYWNlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/main-page/components/mobile-menu/mobile-menu.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/main-page/components/mobile-menu/mobile-menu.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MobileMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMenuComponent", function() { return MobileMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MobileMenuComponent = /** @class */ (function () {
    function MobileMenuComponent() {
        this.showMenu = false;
    }
    MobileMenuComponent.prototype.ngOnInit = function () {
    };
    MobileMenuComponent.prototype.toggleMenu = function () {
        this.showMenu = !this.showMenu;
        if (this.showMenu) {
            document.body.classList.add('mobile-menu-is-opened');
        }
        else {
            document.body.classList.remove('mobile-menu-is-opened');
        }
    };
    MobileMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mobile-menu',
            template: __webpack_require__(/*! ./mobile-menu.component.html */ "./src/app/pages/main-page/components/mobile-menu/mobile-menu.component.html"),
            styles: [__webpack_require__(/*! ./mobile-menu.component.scss */ "./src/app/pages/main-page/components/mobile-menu/mobile-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MobileMenuComponent);
    return MobileMenuComponent;
}());



/***/ }),

/***/ "./src/app/pages/main-page/components/promo/promo.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/main-page/components/promo/promo.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"promo\">\n  <div class=\"items\">\n    <div class=\"item\">\n      <div class=\"icon update\"></div>\n      <div class=\"text\" [translate]=\"'Promo.item-1'\"></div>\n    </div>\n    <span *xs class=\"mobile-border\"></span>\n    <div class=\"item bordered\">\n      <div class=\"icon book\"></div>\n      <div class=\"text\" [translate]=\"'Promo.item-2'\"></div>\n    </div>\n    <span *xs class=\"mobile-border\"></span>\n    <div class=\"item\">\n      <div class=\"icon devices\"></div>\n      <div class=\"text\" [translate]=\"'Promo.item-3'\"></div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/main-page/components/promo/promo.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/main-page/components/promo/promo.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Typographic\n * use ex. .title { @extend %h1; }\n */\nsection.promo .items .item .text {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 25px;\n  font-size: 18px;\n  color: #333333; }\n/* Typographic mobile\n * use ex. .title { @extend %h1-mob; }\n */\na {\n  color: #21AE49;\n  text-decoration: none; }\nsection.promo {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 47px 0 60px; }\nsection.promo .items {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    max-width: 1240px; }\nsection.promo .items .item {\n      padding: 13px 67px 6px 65px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center; }\nsection.promo .items .item.bordered {\n        border-left: 1px solid #E7E7E7;\n        border-right: 1px solid #E7E7E7; }\nsection.promo .items .item .icon {\n        margin-bottom: 34px;\n        height: 60px; }\nsection.promo .items .item .icon.update {\n          width: 60px;\n          background: url('update.svg') center no-repeat; }\nsection.promo .items .item .icon.book {\n          width: 60px;\n          background: url('medical-book.svg') center no-repeat; }\nsection.promo .items .item .icon.devices {\n          width: 220px;\n          background: url('all-devices.svg') center no-repeat; }\nsection.promo .items .item .text {\n        width: 100%;\n        text-align: center; }\n@media screen and (max-width: 600px) {\n  section.promo {\n    flex-direction: column;\n    padding: 0 50px 26px; }\n    section.promo .items {\n      flex-direction: column;\n      max-width: initial;\n      width: 100%; }\n      section.promo .items span.mobile-border {\n        width: calc(100vw - 186px);\n        border-top: 1px solid #E7E7E7;\n        display: inline-block; }\n      section.promo .items .item {\n        width: 100%;\n        padding: 0;\n        margin: 40px 0; }\n        section.promo .items .item.bordered {\n          border: none; }\n        section.promo .items .item .icon {\n          margin-bottom: 30px; }\n        section.promo .items .item .text {\n          font-style: normal;\n          font-weight: normal;\n          line-height: 25px;\n          font-size: 17px;\n          color: #333333; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9zdHlsZXMvX3VpLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL3Byb21vL3Byb21vLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FsZXh6YXZnb3JvZG5paS9Qcm9qZWN0cy9sYW50aGllci1wcm9tb3NpdGUvc3JjL2FwcC9wYWdlcy9tYWluLXBhZ2UvY29tcG9uZW50cy9wcm9tby9wcm9tby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTs7RUNKRTtBQ0FGO0VGd0NFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQTdDWSxFQUFBO0FBd0VkOztFQzdERTtBRG1MRjtFQUNFLGNBOUxjO0VBK0xkLHFCQUFxQixFQUFBO0FFL0x2QjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsb0JBQW9CLEVBQUE7QUFOdEI7SUFRSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCLEVBQUE7QUFackI7TUFjTSwyQkFBMkI7TUFDM0IsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixtQkFBbUI7TUFDbkIsdUJBQXVCLEVBQUE7QUFsQjdCO1FBb0JRLDhCRmxCWTtRRW1CWiwrQkZuQlksRUFBQTtBRUZwQjtRQXdCUSxtQkFBbUI7UUFDbkIsWUFBWSxFQUFBO0FBekJwQjtVQTJCVSxXQUFXO1VBQ1gsOENBQW9FLEVBQUE7QUE1QjlFO1VBK0JVLFdBQVc7VUFDWCxvREFBMEUsRUFBQTtBQWhDcEY7VUFtQ1UsWUFBWTtVQUNaLG1EQUF5RSxFQUFBO0FBcENuRjtRQXlDUSxXQUFXO1FBQ1gsa0JBQWtCLEVBQUE7QUFZMUI7RUF0REE7SUF3REksc0JBQXNCO0lBQ3RCLG9CQUFvQixFQUFBO0lBekR4QjtNQTJETSxzQkFBc0I7TUFDdEIsa0JBQWtCO01BQ2xCLFdBQVcsRUFBQTtNQU5mO1FBUU0sMEJBQTBCO1FBQzFCLDZCRjlEWTtRRStEWixxQkFBcUIsRUFBQTtNQWpFN0I7UUFvRVEsV0FBVztRQUNYLFVBQVU7UUFDVixjQUFjLEVBQUE7UUF0RXRCO1VBd0VVLFlBQVksRUFBQTtRQXhFdEI7VUEyRVUsbUJBQW1CLEVBQUE7UUEzRTdCO1VGOElFLGtCQUFrQjtVQUNsQixtQkFBbUI7VUFDbkIsaUJBQWlCO1VBQ2pCLGVBQWU7VUFDZixjQW5KWSxFQUFBLEVFZ0ZMIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL2NvbXBvbmVudHMvcHJvbW8vcHJvbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2xvcnNcbiRtYWluOiAjMzMzMzMzO1xuJGFjdGlvbjogIzIxQUU0OTtcbiRncmV5OiAjOTk5OTk5O1xuJGxpZ2h0LWdyZXk6ICNFN0U3RTc7XG5cbi8qIFR5cG9ncmFwaGljXG4gKiB1c2UgZXguIC50aXRsZSB7IEBleHRlbmQgJWgxOyB9XG4gKi9cbiVoMSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBmb250LXNpemU6IDU2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xufVxuJWgyIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG59XG4laDMge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xufVxuJWg0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogJG1haW47XG4gIG1hcmdpbjogMDtcbn1cbiVib2R5IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogJG1haW47XG59XG4lbmF2aWdhdGlvbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJG1haW47XG59XG4lc2xpZGVyIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAkZ3JleTtcbn1cbiVjYXB0aW9uIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gIGNvbG9yOiAkZ3JleTtcbn1cblxuLyogVHlwb2dyYXBoaWMgbW9iaWxlXG4gKiB1c2UgZXguIC50aXRsZSB7IEBleHRlbmQgJWgxLW1vYjsgfVxuICovXG4laDEtbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGgxLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVoMi1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gaDItbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWgzLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gaDMtbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVoNC1tb2Ige1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGg0LW1vYiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogJG1haW47XG59XG4lYm9keS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBib2R5LW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWxvY2FsLW5hdmlnYXRpb24tbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAkZ3JleTtcbn1cbkBtaXhpbiBsb2NhbC1uYXZpZ2F0aW9uLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5cbi8vIEJ1dHRvblxuJWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICRhY3Rpb247XG4gIGJvcmRlcjogMXB4IHNvbGlkICRhY3Rpb247XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTNweDtcbiAgbWluLXdpZHRoOiAxODEuOThweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4lc3RvcmVzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTYxcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuYSB7XG4gIGNvbG9yOiAkYWN0aW9uO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iLCIvKiBUeXBvZ3JhcGhpY1xuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMTsgfVxuICovXG5zZWN0aW9uLnByb21vIC5pdGVtcyAuaXRlbSAudGV4dCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMzMzMzMzM7IH1cblxuLyogVHlwb2dyYXBoaWMgbW9iaWxlXG4gKiB1c2UgZXguIC50aXRsZSB7IEBleHRlbmQgJWgxLW1vYjsgfVxuICovXG5hIHtcbiAgY29sb3I6ICMyMUFFNDk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG5zZWN0aW9uLnByb21vIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA0N3B4IDAgNjBweDsgfVxuICBzZWN0aW9uLnByb21vIC5pdGVtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxMjQwcHg7IH1cbiAgICBzZWN0aW9uLnByb21vIC5pdGVtcyAuaXRlbSB7XG4gICAgICBwYWRkaW5nOiAxM3B4IDY3cHggNnB4IDY1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAgICAgc2VjdGlvbi5wcm9tbyAuaXRlbXMgLml0ZW0uYm9yZGVyZWQge1xuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNFN0U3RTc7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNFN0U3RTc7IH1cbiAgICAgIHNlY3Rpb24ucHJvbW8gLml0ZW1zIC5pdGVtIC5pY29uIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzRweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4OyB9XG4gICAgICAgIHNlY3Rpb24ucHJvbW8gLml0ZW1zIC5pdGVtIC5pY29uLnVwZGF0ZSB7XG4gICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3VwZGF0ZS5zdmdcIikgY2VudGVyIG5vLXJlcGVhdDsgfVxuICAgICAgICBzZWN0aW9uLnByb21vIC5pdGVtcyAuaXRlbSAuaWNvbi5ib29rIHtcbiAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvbWVkaWNhbC1ib29rLnN2Z1wiKSBjZW50ZXIgbm8tcmVwZWF0OyB9XG4gICAgICAgIHNlY3Rpb24ucHJvbW8gLml0ZW1zIC5pdGVtIC5pY29uLmRldmljZXMge1xuICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvYWxsLWRldmljZXMuc3ZnXCIpIGNlbnRlciBuby1yZXBlYXQ7IH1cbiAgICAgIHNlY3Rpb24ucHJvbW8gLml0ZW1zIC5pdGVtIC50ZXh0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBzZWN0aW9uLnByb21vIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDAgNTBweCAyNnB4OyB9XG4gICAgc2VjdGlvbi5wcm9tbyAuaXRlbXMge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1heC13aWR0aDogaW5pdGlhbDtcbiAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgICBzZWN0aW9uLnByb21vIC5pdGVtcyBzcGFuLm1vYmlsZS1ib3JkZXIge1xuICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDE4NnB4KTtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFN0U3RTc7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgc2VjdGlvbi5wcm9tbyAuaXRlbXMgLml0ZW0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiA0MHB4IDA7IH1cbiAgICAgICAgc2VjdGlvbi5wcm9tbyAuaXRlbXMgLml0ZW0uYm9yZGVyZWQge1xuICAgICAgICAgIGJvcmRlcjogbm9uZTsgfVxuICAgICAgICBzZWN0aW9uLnByb21vIC5pdGVtcyAuaXRlbSAuaWNvbiB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuICAgICAgICBzZWN0aW9uLnByb21vIC5pdGVtcyAuaXRlbSAudGV4dCB7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzOyB9IH1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy91aSc7XG5cbnNlY3Rpb24ucHJvbW8ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQ3cHggMCA2MHB4O1xuICAuaXRlbXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1heC13aWR0aDogMTI0MHB4O1xuICAgIC5pdGVtIHtcbiAgICAgIHBhZGRpbmc6IDEzcHggNjdweCA2cHggNjVweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgJi5ib3JkZXJlZCB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJGxpZ2h0LWdyZXk7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRsaWdodC1ncmV5O1xuICAgICAgfVxuICAgICAgLmljb24ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICYudXBkYXRlIHtcbiAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy91cGRhdGUuc3ZnJykgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgfVxuICAgICAgICAmLmJvb2sge1xuICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL21lZGljYWwtYm9vay5zdmcnKSBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgICB9XG4gICAgICAgICYuZGV2aWNlcyB7XG4gICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2FsbC1kZXZpY2VzLnN2ZycpIGNlbnRlciBuby1yZXBlYXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC50ZXh0IHtcbiAgICAgICAgQGV4dGVuZCAlYm9keTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gdGFibGV0IHNtXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KXtcblxufVxuXG4vLyBtb2JpbGUgeHNcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcbiAgc2VjdGlvbi5wcm9tbyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAwIDUwcHggMjZweDtcbiAgICAuaXRlbXMge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1heC13aWR0aDogaW5pdGlhbDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgc3Bhbi5tb2JpbGUtYm9yZGVyIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAxODZweCk7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkbGlnaHQtZ3JleTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgICAgLml0ZW0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiA0MHB4IDA7XG4gICAgICAgICYuYm9yZGVyZWQge1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgQGluY2x1ZGUgYm9keS1tb2I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/main-page/components/promo/promo.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/main-page/components/promo/promo.component.ts ***!
  \*********************************************************************/
/*! exports provided: PromoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoComponent", function() { return PromoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PromoComponent = /** @class */ (function () {
    function PromoComponent() {
    }
    PromoComponent.prototype.ngOnInit = function () {
    };
    PromoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-promo',
            template: __webpack_require__(/*! ./promo.component.html */ "./src/app/pages/main-page/components/promo/promo.component.html"),
            styles: [__webpack_require__(/*! ./promo.component.scss */ "./src/app/pages/main-page/components/promo/promo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PromoComponent);
    return PromoComponent;
}());



/***/ }),

/***/ "./src/app/pages/main-page/main-page-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/main-page/main-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function() { return MainPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page.component */ "./src/app/pages/main-page/main-page.component.ts");




var MainPageRoutingModule = /** @class */ (function () {
    function MainPageRoutingModule() {
    }
    MainPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: 'main',
                        component: _main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"]
                    },
                    {
                        path: '',
                        redirectTo: '/main',
                        pathMatch: 'full'
                    }
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MainPageRoutingModule);
    return MainPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/main-page/main-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-page\" appScroll>\n  <app-header></app-header>\n  <app-jumbotron></app-jumbotron>\n  <app-fixed-menu></app-fixed-menu>\n  <app-promo></app-promo>\n  <app-feature [title]=\"'Feature.item-1.title' | translate\"\n               [subTitle]=\"'Feature.item-1.sub-title' | translate\"\n               [text]=\"'Feature.item-1.text' | translate\"\n               [images]=\"searchImages\"></app-feature>\n  <app-feature [title]=\"'Feature.item-2.title' | translate\"\n               [subTitle]=\"'Feature.item-2.sub-title' | translate\"\n               [text]=\"'Feature.item-2.text' | translate\"\n               [images]=\"searchImages\"></app-feature>\n  <app-feature [title]=\"'Feature.item-3.title' | translate\"\n               [subTitle]=\"'Feature.item-3.sub-title' | translate\"\n               [text]=\"'Feature.item-3.text' | translate\"\n               [multiPlatform]=\"false\"\n               [images]=\"searchImages\"></app-feature>\n  <app-feature-vertical [title]=\"'Feature.item-4.title' | translate\"\n                        [medCalXTitle]=\"'Feature.item-4.MedCalX.title' | translate\"\n                        [medCalXText]=\"'Feature.item-4.MedCalX.text' | translate\"\n                        [qxmdTitle]=\"'Feature.item-4.QxMD.title' | translate\"\n                        [qxmdText]=\"'Feature.item-4.QxMD.text' | translate\"\n                        [images]=\"integrationImages\"></app-feature-vertical>\n  <app-feature [title]=\"'Feature.item-5.title' | translate\"\n               [subTitle]=\"'Feature.item-5.sub-title' | translate\"\n               [text]=\"'Feature.item-5.text' | translate\"\n               [images]=\"searchImages\"></app-feature>\n  <app-feature-topics></app-feature-topics>\n  <app-authors></app-authors>\n  <app-footer></app-footer>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/main-page/main-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/main-page/main-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.ts ***!
  \********************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
        this.searchImages = [
            {
                platform: 'web',
                src: '../../../assets/features/search/web@2x.png'
            },
            {
                platform: 'ios',
                src: '../../../assets/features/search/search@2x.png'
            },
            {
                platform: 'android',
                src: '../../../assets/features/search/android@2x.png'
            },
        ];
        this.integrationImages = [
            {
                platform: 'med',
                src: '../../../assets/features/search/search@2x.png'
            },
            {
                platform: 'qxmd',
                src: '../../../assets/features/search/search@2x.png'
            },
        ];
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/pages/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.scss */ "./src/app/pages/main-page/main-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/main-page/main-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/main-page/main-page.module.ts ***!
  \*****************************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page.component */ "./src/app/pages/main-page/main-page.component.ts");
/* harmony import */ var _main_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-page-routing.module */ "./src/app/pages/main-page/main-page-routing.module.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/pages/main-page/components/header/header.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/jumbotron/jumbotron.component */ "./src/app/pages/main-page/components/jumbotron/jumbotron.component.ts");
/* harmony import */ var _components_fixed_menu_fixed_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/fixed-menu/fixed-menu.component */ "./src/app/pages/main-page/components/fixed-menu/fixed-menu.component.ts");
/* harmony import */ var _components_promo_promo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/promo/promo.component */ "./src/app/pages/main-page/components/promo/promo.component.ts");
/* harmony import */ var _components_feature_feature_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/feature/feature.component */ "./src/app/pages/main-page/components/feature/feature.component.ts");
/* harmony import */ var _components_feature_vertical_feature_vertical_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/feature-vertical/feature-vertical.component */ "./src/app/pages/main-page/components/feature-vertical/feature-vertical.component.ts");
/* harmony import */ var _components_feature_topics_feature_topics_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/feature-topics/feature-topics.component */ "./src/app/pages/main-page/components/feature-topics/feature-topics.component.ts");
/* harmony import */ var _components_authors_authors_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/authors/authors.component */ "./src/app/pages/main-page/components/authors/authors.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/pages/main-page/components/footer/footer.component.ts");
/* harmony import */ var _services_window_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/window.service */ "./src/app/services/window.service.ts");
/* harmony import */ var _directives_scroll_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../directives/scroll.directive */ "./src/app/directives/scroll.directive.ts");
/* harmony import */ var _components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/mobile-menu/mobile-menu.component */ "./src/app/pages/main-page/components/mobile-menu/mobile-menu.component.ts");
/* harmony import */ var ngx_responsive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-responsive */ "./node_modules/ngx-responsive/fesm5/ngx-responsive.js");



















var MainPageModule = /** @class */ (function () {
    function MainPageModule() {
    }
    MainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _directives_scroll_directive__WEBPACK_IMPORTED_MODULE_16__["ScrollDirective"]
            ],
            declarations: [
                _main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_7__["JumbotronComponent"],
                _components_fixed_menu_fixed_menu_component__WEBPACK_IMPORTED_MODULE_8__["FixedMenuComponent"],
                _components_promo_promo_component__WEBPACK_IMPORTED_MODULE_9__["PromoComponent"],
                _components_feature_feature_component__WEBPACK_IMPORTED_MODULE_10__["FeatureComponent"],
                _components_feature_vertical_feature_vertical_component__WEBPACK_IMPORTED_MODULE_11__["FeatureVerticalComponent"],
                _components_feature_topics_feature_topics_component__WEBPACK_IMPORTED_MODULE_12__["FeatureTopicsComponent"],
                _components_authors_authors_component__WEBPACK_IMPORTED_MODULE_13__["AuthorsComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _directives_scroll_directive__WEBPACK_IMPORTED_MODULE_16__["ScrollDirective"],
                _components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_17__["MobileMenuComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _main_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["MainPageRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                ngx_responsive__WEBPACK_IMPORTED_MODULE_18__["ResponsiveModule"]
            ],
            providers: [
                _services_window_service__WEBPACK_IMPORTED_MODULE_15__["WINDOW_PROVIDERS"]
            ]
        })
    ], MainPageModule);
    return MainPageModule;
}());



/***/ }),

/***/ "./src/app/services/scroll-events.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/scroll-events.service.ts ***!
  \***************************************************/
/*! exports provided: ScrollEventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollEventsService", function() { return ScrollEventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ScrollEventsService = /** @class */ (function () {
    function ScrollEventsService() {
        this.buttonsPosition = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.pageOffset = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.menuSetFixedInitValue = false;
        this.menuSetFixed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.menuSetFixedInitValue);
        this.buttonsPosition$ = this.buttonsPosition.asObservable();
        this.pageOffset$ = this.pageOffset.asObservable();
        this.menuSetFixed$ = this.menuSetFixed.asObservable();
    }
    ScrollEventsService.prototype.setButtonsPosition = function (value) {
        this.buttonsPosition.next(value);
    };
    ScrollEventsService.prototype.setPageOffset = function (value) {
        this.pageOffset.next(value);
    };
    ScrollEventsService.prototype.setMenuSetFixed = function (value) {
        this.menuSetFixed.next(value);
    };
    ScrollEventsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ScrollEventsService);
    return ScrollEventsService;
}());



/***/ }),

/***/ "./src/app/services/window.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/window.service.ts ***!
  \********************************************/
/*! exports provided: WINDOW, WindowRef, BrowserWindowRef, windowFactory, browserWindowProvider, windowProvider, WINDOW_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserWindowRef", function() { return BrowserWindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowFactory", function() { return windowFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browserWindowProvider", function() { return browserWindowProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowProvider", function() { return windowProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_PROVIDERS", function() { return WINDOW_PROVIDERS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('WindowToken');
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            throw new Error('Not implemented.');
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());

var BrowserWindowRef = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BrowserWindowRef, _super);
    function BrowserWindowRef() {
        return _super.call(this) || this;
    }
    Object.defineProperty(BrowserWindowRef.prototype, "nativeWindow", {
        get: function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    return BrowserWindowRef;
}(WindowRef));

function windowFactory(browserWindowRef, platformId) {
    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
        return browserWindowRef.nativeWindow;
    }
    return {};
}
var browserWindowProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef
};
var windowProvider = {
    provide: WINDOW,
    useFactory: windowFactory,
    deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
};
var WINDOW_PROVIDERS = [
    browserWindowProvider,
    windowProvider
];


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
    production: false
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

module.exports = __webpack_require__(/*! /Users/alexzavgorodnii/Projects/lanthier-promosite/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map