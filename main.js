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
        var lang = (navigator.languages !== undefined) ? navigator.languages[0] : navigator.language;
        var languages = ['fr', 'en'];
        if (lang === languages[0]) {
            this.translateService.use(languages[0]);
        }
        else {
            this.translateService.use(languages[1]);
        }
        this.translateService.setDefaultLang('fr');
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

module.exports = "/* Typographic\n * use ex. .title { @extend %h1; }\n */\nsection.authors .author h2 {\n  font-style: normal;\n  font-weight: bold;\n  line-height: 48px;\n  font-size: 40px;\n  color: #333333;\n  margin: 0;\n  letter-spacing: -1px; }\nsection.authors .author h3 {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 32px;\n  font-size: 24px;\n  color: #333333;\n  margin: 0; }\nsection.authors .author p.text {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 24px;\n  font-size: 16px;\n  color: #333333; }\n/* Typographic mobile\n * use ex. .title { @extend %h1-mob; }\n */\na {\n  color: #21AE49;\n  text-decoration: none; }\nsection.authors {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\nsection.authors .br {\n    width: calc(100% - 260px);\n    height: 1px;\n    background-color: #E7E7E7;\n    margin-bottom: 59px; }\nsection.authors .author {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 60px;\n    width: 615px; }\nsection.authors .author .photo {\n      width: 90px;\n      height: 90px;\n      border-radius: 100%;\n      background-size: cover;\n      margin-bottom: 14px; }\nsection.authors .author .photo.first {\n        background: transparent url('author-1.png') no-repeat center; }\nsection.authors .author .photo.second {\n        background: transparent url('author-2.png') no-repeat center; }\nsection.authors .author h2 {\n      margin-bottom: 8px;\n      width: 100%;\n      text-align: center; }\nsection.authors .author h3 {\n      margin-bottom: 22px;\n      text-align: center;\n      width: 100%; }\nsection.authors .author p.text {\n      margin: 0;\n      text-align: center;\n      width: 100%; }\n@media screen and (min-width: 601px) and (max-width: 959px) {\n  section.authors .br {\n    width: calc(100% - 82px);\n    margin-bottom: 50px; }\n  section.authors .author {\n    width: 100%;\n    padding: 0 110px; }\n    section.authors .author .photo {\n      margin-bottom: 12px; }\n    section.authors .author h2 {\n      font-style: normal;\n      font-weight: bold;\n      line-height: 48px;\n      font-size: 24px;\n      color: #333333; }\n    section.authors .author h3 {\n      font-style: normal;\n      font-weight: normal;\n      line-height: 32px;\n      font-size: 20px;\n      letter-spacing: 0.4px;\n      color: #333333; }\n    section.authors .author p.text {\n      font-style: normal;\n      font-weight: normal;\n      line-height: 25px;\n      font-size: 17px;\n      color: #333333; } }\n@media screen and (max-width: 600px) {\n  section.authors .br {\n    width: calc(100% - 82px);\n    margin-bottom: 50px; }\n  section.authors .author {\n    width: 100%;\n    padding: 0 34px; }\n    section.authors .author .photo {\n      margin-bottom: 12px; }\n    section.authors .author h2 {\n      font-style: normal;\n      font-weight: bold;\n      line-height: 48px;\n      font-size: 24px;\n      color: #333333; }\n    section.authors .author h3 {\n      font-style: normal;\n      font-weight: normal;\n      line-height: 32px;\n      font-size: 20px;\n      letter-spacing: 0.4px;\n      color: #333333; }\n    section.authors .author p.text {\n      font-style: normal;\n      font-weight: normal;\n      line-height: 25px;\n      font-size: 17px;\n      color: #333333; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9zdHlsZXMvX3VpLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2F1dGhvcnMvYXV0aG9ycy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL2NvbXBvbmVudHMvYXV0aG9ycy9hdXRob3JzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BOztFQ0pFO0FDQUY7RUZpQkUsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBdEJZO0VBdUJaLFNBQVM7RUFDVCxvQkFBb0IsRUFBQTtBRXZCdEI7RUYwQkUsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBL0JZO0VBZ0NaLFNBQVMsRUFBQTtBRS9CWDtFRjBDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0EvQ1ksRUFBQTtBQWtGZDs7RUN0REU7QUQ0S0Y7RUFDRSxjQXhNYztFQXlNZCxxQkFBcUIsRUFBQTtBRXpNdkI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUIsRUFBQTtBQUpyQjtJQU1JLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gseUJGTmdCO0lFT2hCLG1CQUFtQixFQUFBO0FBVHZCO0lBWUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVksRUFBQTtBQWhCaEI7TUFrQk0sV0FBVztNQUNYLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsc0JBQXNCO01BQ3RCLG1CQUFtQixFQUFBO0FBdEJ6QjtRQXdCUSw0REFBa0YsRUFBQTtBQXhCMUY7UUEyQlEsNERBQWtGLEVBQUE7QUEzQjFGO01BaUNNLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsa0JBQWtCLEVBQUE7QUFuQ3hCO01BdUNNLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsV0FBVyxFQUFBO0FBekNqQjtNQTZDTSxTQUFTO01BQ1Qsa0JBQWtCO01BQ2xCLFdBQVcsRUFBQTtBQU1qQjtFQXJEQTtJQXdETSx3QkFBd0I7SUFDeEIsbUJBQW1CLEVBQUE7RUF6RHpCO0lBNERNLFdBQVc7SUFDWCxnQkFBZ0IsRUFBQTtJQTdEdEI7TUErRFEsbUJBQW1CLEVBQUE7SUEvRDNCO01GMEdFLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixjQS9HWSxFQUFBO0lFQ2Q7TUZ5SEUsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLHFCQUFxQjtNQUNyQixjQS9IWSxFQUFBO0lFQ2Q7TUZ3SkUsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGNBN0pZLEVBQUEsRUUwRVA7QUFNUDtFQS9FQTtJQWtGTSx3QkFBd0I7SUFDeEIsbUJBQW1CLEVBQUE7RUFuRnpCO0lBc0ZNLFdBQVc7SUFDWCxlQUFlLEVBQUE7SUF2RnJCO01BeUZRLG1CQUFtQixFQUFBO0lBekYzQjtNRjBHRSxrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsY0EvR1ksRUFBQTtJRUNkO01GeUhFLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixxQkFBcUI7TUFDckIsY0EvSFksRUFBQTtJRUNkO01Gd0pFLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixjQTdKWSxFQUFBLEVFb0dQIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL2NvbXBvbmVudHMvYXV0aG9ycy9hdXRob3JzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29sb3JzXG4kbWFpbjogIzMzMzMzMztcbiRhY3Rpb246ICMyMUFFNDk7XG4kZ3JleTogIzk5OTk5OTtcbiRsaWdodC1ncmV5OiAjRTdFN0U3O1xuXG4vKiBUeXBvZ3JhcGhpY1xuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMTsgfVxuICovXG4laDEge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiA1NnB4O1xuICBjb2xvcjogJG1haW47XG4gIG1hcmdpbjogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG59XG4laDIge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogJG1haW47XG4gIG1hcmdpbjogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG59XG4laDMge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xufVxuJWg0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogJG1haW47XG4gIG1hcmdpbjogMDtcbn1cbiVib2R5IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogJG1haW47XG59XG4lbmF2aWdhdGlvbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJG1haW47XG59XG4lc2xpZGVyIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAkZ3JleTtcbn1cbkBtaXhpbiBzbGlkZXIge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRncmV5O1xufVxuJWNhcHRpb24ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgY29sb3I6ICRncmV5O1xufVxuXG4vKiBUeXBvZ3JhcGhpYyBtb2JpbGVcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDEtbW9iOyB9XG4gKi9cbiVoMS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gaDEtbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWgyLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoMi1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogJG1haW47XG59XG4laDMtbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoMy1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWg0LW1vYiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gaDQtbW9iIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVib2R5LW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGJvZHktbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogJG1haW47XG59XG4lbG9jYWwtbmF2aWdhdGlvbi1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRncmV5O1xufVxuQG1peGluIGxvY2FsLW5hdmlnYXRpb24tbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAkZ3JleTtcbn1cblxuLy8gQnV0dG9uXG4lYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogJGFjdGlvbjtcbiAgYm9yZGVyOiAxcHggc29saWQgJGFjdGlvbjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxM3B4O1xuICBtaW4td2lkdGg6IDE4MS45OHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiVzdG9yZXMge1xuICBvdXRsaW5lOiBub25lO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxNjFweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5hIHtcbiAgY29sb3I6ICRhY3Rpb247XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiIsIi8qIFR5cG9ncmFwaGljXG4gKiB1c2UgZXguIC50aXRsZSB7IEBleHRlbmQgJWgxOyB9XG4gKi9cbnNlY3Rpb24uYXV0aG9ycyAuYXV0aG9yIGgyIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIG1hcmdpbjogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7IH1cblxuc2VjdGlvbi5hdXRob3JzIC5hdXRob3IgaDMge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBtYXJnaW46IDA7IH1cblxuc2VjdGlvbi5hdXRob3JzIC5hdXRob3IgcC50ZXh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzMzMzMzMzsgfVxuXG4vKiBUeXBvZ3JhcGhpYyBtb2JpbGVcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDEtbW9iOyB9XG4gKi9cbmEge1xuICBjb2xvcjogIzIxQUU0OTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbnNlY3Rpb24uYXV0aG9ycyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIHNlY3Rpb24uYXV0aG9ycyAuYnIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNjBweCk7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U3RTdFNztcbiAgICBtYXJnaW4tYm90dG9tOiA1OXB4OyB9XG4gIHNlY3Rpb24uYXV0aG9ycyAuYXV0aG9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICAgIHdpZHRoOiA2MTVweDsgfVxuICAgIHNlY3Rpb24uYXV0aG9ycyAuYXV0aG9yIC5waG90byB7XG4gICAgICB3aWR0aDogOTBweDtcbiAgICAgIGhlaWdodDogOTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDsgfVxuICAgICAgc2VjdGlvbi5hdXRob3JzIC5hdXRob3IgLnBob3RvLmZpcnN0IHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2F1dGhvci0xLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyOyB9XG4gICAgICBzZWN0aW9uLmF1dGhvcnMgLmF1dGhvciAucGhvdG8uc2Vjb25kIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2F1dGhvci0yLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyOyB9XG4gICAgc2VjdGlvbi5hdXRob3JzIC5hdXRob3IgaDIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICBzZWN0aW9uLmF1dGhvcnMgLmF1dGhvciBoMyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICBzZWN0aW9uLmF1dGhvcnMgLmF1dGhvciBwLnRleHQge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICBzZWN0aW9uLmF1dGhvcnMgLmJyIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gODJweCk7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDsgfVxuICBzZWN0aW9uLmF1dGhvcnMgLmF1dGhvciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCAxMTBweDsgfVxuICAgIHNlY3Rpb24uYXV0aG9ycyAuYXV0aG9yIC5waG90byB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4OyB9XG4gICAgc2VjdGlvbi5hdXRob3JzIC5hdXRob3IgaDIge1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGNvbG9yOiAjMzMzMzMzOyB9XG4gICAgc2VjdGlvbi5hdXRob3JzIC5hdXRob3IgaDMge1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICAgICAgY29sb3I6ICMzMzMzMzM7IH1cbiAgICBzZWN0aW9uLmF1dGhvcnMgLmF1dGhvciBwLnRleHQge1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgY29sb3I6ICMzMzMzMzM7IH0gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBzZWN0aW9uLmF1dGhvcnMgLmJyIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gODJweCk7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDsgfVxuICBzZWN0aW9uLmF1dGhvcnMgLmF1dGhvciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCAzNHB4OyB9XG4gICAgc2VjdGlvbi5hdXRob3JzIC5hdXRob3IgLnBob3RvIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7IH1cbiAgICBzZWN0aW9uLmF1dGhvcnMgLmF1dGhvciBoMiB7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgY29sb3I6ICMzMzMzMzM7IH1cbiAgICBzZWN0aW9uLmF1dGhvcnMgLmF1dGhvciBoMyB7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gICAgICBjb2xvcjogIzMzMzMzMzsgfVxuICAgIHNlY3Rpb24uYXV0aG9ycyAuYXV0aG9yIHAudGV4dCB7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICBjb2xvcjogIzMzMzMzMzsgfSB9XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdWknO1xuXG5zZWN0aW9uLmF1dGhvcnMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLmJyIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjYwcHgpO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmV5O1xuICAgIG1hcmdpbi1ib3R0b206IDU5cHg7XG4gIH1cbiAgLmF1dGhvciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgICB3aWR0aDogNjE1cHg7XG4gICAgLnBob3RvIHtcbiAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgICAgJi5maXJzdCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2F1dGhvci0xLnBuZycpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgICB9XG4gICAgICAmLnNlY29uZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2F1dGhvci0yLnBuZycpIG5vLXJlcGVhdCBjZW50ZXI7XG5cbiAgICAgIH1cbiAgICB9XG4gICAgaDIge1xuICAgICAgQGV4dGVuZCAlaDI7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgaDMge1xuICAgICAgQGV4dGVuZCAlaDM7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIHAudGV4dCB7XG4gICAgICBAZXh0ZW5kICVib2R5O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG5cbi8vIHRhYmxldCBzbVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCl7XG4gIHNlY3Rpb24uYXV0aG9ycyB7XG4gICAgLmJyIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MnB4KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgfVxuICAgIC5hdXRob3Ige1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAwIDExMHB4O1xuICAgICAgLnBob3RvIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgIH1cbiAgICAgIGgyIHtcbiAgICAgICAgQGluY2x1ZGUgaDItbW9iO1xuICAgICAgfVxuICAgICAgaDMge1xuICAgICAgICBAaW5jbHVkZSBoMy1tb2I7XG4gICAgICB9XG4gICAgICBwLnRleHQge1xuICAgICAgICBAaW5jbHVkZSBib2R5LW1vYjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gbW9iaWxlIHhzXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XG4gIHNlY3Rpb24uYXV0aG9ycyB7XG4gICAgLmJyIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MnB4KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgfVxuICAgIC5hdXRob3Ige1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAwIDM0cHg7XG4gICAgICAucGhvdG8ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgfVxuICAgICAgaDIge1xuICAgICAgICBAaW5jbHVkZSBoMi1tb2I7XG4gICAgICB9XG4gICAgICBoMyB7XG4gICAgICAgIEBpbmNsdWRlIGgzLW1vYjtcbiAgICAgIH1cbiAgICAgIHAudGV4dCB7XG4gICAgICAgIEBpbmNsdWRlIGJvZHktbW9iO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

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

module.exports = "<section class=\"feature-topics\">\n  <h2 [translate]=\"'Feature-topics.title'\"></h2>\n  <div class=\"links\">\n    <div class=\"col\">\n      <a href=\"#feature-topic\" target=\"_blank\" [translate]=\"'Feature-topics.link1.title'\"></a>\n      <a href=\"#feature-topic\" target=\"_blank\" [translate]=\"'Feature-topics.link2.title'\"></a>\n      <a href=\"#feature-topic\" target=\"_blank\" [translate]=\"'Feature-topics.link3.title'\"></a>\n      <a href=\"#feature-topic\" target=\"_blank\" [translate]=\"'Feature-topics.link4.title'\"></a>\n    </div>\n    <div class=\"col\">\n      <a href=\"#feature-topic\" target=\"_blank\" [translate]=\"'Feature-topics.link5.title'\"></a>\n      <a href=\"#feature-topic\" target=\"_blank\" [translate]=\"'Feature-topics.link6.title'\"></a>\n      <a href=\"#feature-topic\" target=\"_blank\" [translate]=\"'Feature-topics.link7.title'\"></a>\n      <a href=\"#feature-topic\" target=\"_blank\" [translate]=\"'Feature-topics.link8.title'\"></a>\n    </div>\n    <div class=\"col\">\n      <a href=\"#feature-topic\" target=\"_blank\" [translate]=\"'Feature-topics.link9.title'\"></a>\n      <a href=\"#feature-topic\" target=\"_blank\" [translate]=\"'Feature-topics.link10.title'\"></a>\n      <a href=\"#feature-topic\" target=\"_blank\" [translate]=\"'Feature-topics.link11.title'\"></a>\n      <a href=\"#feature-topic\" target=\"_blank\" [translate]=\"'Feature-topics.link12.title'\"></a>\n    </div>\n  </div>\n  <div class=\"controls\" *responsive=\"{ bootstrap: ['xl', 'lg', 'md'] }\">\n    <a href=\"#feature-topic\" target=\"_blank\"><i class=\"icon search\"></i>{{ 'Feature-topics.control1.title' | translate }}</a>\n    <a href=\"#feature-topic\" target=\"_blank\"><i class=\"icon book\"></i>{{ 'Feature-topics.control2.title' | translate }}</a>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/main-page/components/feature-topics/feature-topics.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/main-page/components/feature-topics/feature-topics.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Typographic\n * use ex. .title { @extend %h1; }\n */\nsection.feature-topics h2 {\n  font-style: normal;\n  font-weight: bold;\n  line-height: 48px;\n  font-size: 40px;\n  color: #333333;\n  margin: 0;\n  letter-spacing: -1px; }\nsection.feature-topics .links .col a, section.feature-topics .controls a {\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  font-size: 18px;\n  color: #333333;\n  margin: 0; }\n/* Typographic mobile\n * use ex. .title { @extend %h1-mob; }\n */\na {\n  color: #21AE49;\n  text-decoration: none; }\nsection.feature-topics {\n  width: 100%;\n  padding: 60px 0 42px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\nsection.feature-topics h2 {\n    margin-bottom: 60px; }\nsection.feature-topics .links {\n    width: 615px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\nsection.feature-topics .links .col {\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: flex-start; }\nsection.feature-topics .links .col a {\n        margin-bottom: 18px; }\nsection.feature-topics .controls {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 615px;\n    margin-top: 39px; }\nsection.feature-topics .controls a {\n      color: #21AE49;\n      display: flex;\n      align-items: center; }\nsection.feature-topics .controls a i.icon {\n        display: inline-block;\n        width: 25px;\n        height: 25px;\n        background-position: center;\n        background-repeat: no-repeat;\n        margin-right: 10px; }\nsection.feature-topics .controls a i.icon.search {\n          background-image: url('search-icon.svg'); }\nsection.feature-topics .controls a i.icon.book {\n          background-image: url('book-icon.svg'); }\n@media screen and (max-width: 600px) {\n  section.feature-topics {\n    padding: 20px 0 42px; }\n    section.feature-topics h2 {\n      font-style: normal;\n      font-weight: bold;\n      line-height: 48px;\n      font-size: 24px;\n      color: #333333;\n      margin-bottom: 29px; }\n    section.feature-topics .links {\n      width: 100%;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center; }\n      section.feature-topics .links .col {\n        align-items: center; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9zdHlsZXMvX3VpLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2ZlYXR1cmUtdG9waWNzL2ZlYXR1cmUtdG9waWNzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FsZXh6YXZnb3JvZG5paS9Qcm9qZWN0cy9sYW50aGllci1wcm9tb3NpdGUvc3JjL2FwcC9wYWdlcy9tYWluLXBhZ2UvY29tcG9uZW50cy9mZWF0dXJlLXRvcGljcy9mZWF0dXJlLXRvcGljcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTs7RUNKRTtBQ0FGO0VGaUJFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQXRCWTtFQXVCWixTQUFTO0VBQ1Qsb0JBQW9CLEVBQUE7QUV2QnRCO0VGa0NFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQXZDWTtFQXdDWixTQUFTLEVBQUE7QUEwQ1g7O0VDN0RFO0FEbUxGO0VBQ0UsY0F4TWM7RUF5TWQscUJBQXFCLEVBQUE7QUV6TXZCO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtBQU5yQjtJQVNJLG1CQUFtQixFQUFBO0FBVHZCO0lBWUksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCLEVBQUE7QUFmbEM7TUFpQk0sYUFBYTtNQUNiLHNCQUFzQjtNQUN0QiwyQkFBMkI7TUFDM0IsdUJBQXVCLEVBQUE7QUFwQjdCO1FBdUJRLG1CQUFtQixFQUFBO0FBdkIzQjtJQTRCSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQixFQUFBO0FBakNwQjtNQW9DTSxjRnBDVTtNRXFDVixhQUFhO01BQ2IsbUJBQW1CLEVBQUE7QUF0Q3pCO1FBd0NRLHFCQUFxQjtRQUNyQixXQUFXO1FBQ1gsWUFBWTtRQUNaLDJCQUEyQjtRQUMzQiw0QkFBNEI7UUFDNUIsa0JBQWtCLEVBQUE7QUE3QzFCO1VBK0NVLHdDQUE4RCxFQUFBO0FBL0N4RTtVQWtEVSxzQ0FBNEQsRUFBQTtBQWF0RTtFQS9EQTtJQWlFSSxvQkFBb0IsRUFBQTtJQWpFeEI7TUYwR0Usa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGNBL0dZO01FcUVSLG1CQUFtQixFQUFBO0lBcEV6QjtNQXVFTSxXQUFXO01BQ1gsc0JBQXNCO01BQ3RCLG1CQUFtQjtNQUNuQix1QkFBdUIsRUFBQTtNQTFFN0I7UUE0RVEsbUJBQW1CLEVBQUEsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluLXBhZ2UvY29tcG9uZW50cy9mZWF0dXJlLXRvcGljcy9mZWF0dXJlLXRvcGljcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbG9yc1xuJG1haW46ICMzMzMzMzM7XG4kYWN0aW9uOiAjMjFBRTQ5O1xuJGdyZXk6ICM5OTk5OTk7XG4kbGlnaHQtZ3JleTogI0U3RTdFNztcblxuLyogVHlwb2dyYXBoaWNcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDE7IH1cbiAqL1xuJWgxIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIGZvbnQtc2l6ZTogNTZweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xufVxuJWgyIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xufVxuJWgzIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogJG1haW47XG4gIG1hcmdpbjogMDtcbn1cbiVoNCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG59XG4lYm9keSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJW5hdmlnYXRpb24ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJXNsaWRlciB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5AbWl4aW4gc2xpZGVyIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAkZ3JleTtcbn1cbiVjYXB0aW9uIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gIGNvbG9yOiAkZ3JleTtcbn1cblxuLyogVHlwb2dyYXBoaWMgbW9iaWxlXG4gKiB1c2UgZXguIC50aXRsZSB7IEBleHRlbmQgJWgxLW1vYjsgfVxuICovXG4laDEtbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGgxLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVoMi1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gaDItbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWgzLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gaDMtbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVoNC1tb2Ige1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGg0LW1vYiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogJG1haW47XG59XG4lYm9keS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBib2R5LW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWxvY2FsLW5hdmlnYXRpb24tbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAkZ3JleTtcbn1cbkBtaXhpbiBsb2NhbC1uYXZpZ2F0aW9uLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5cbi8vIEJ1dHRvblxuJWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICRhY3Rpb247XG4gIGJvcmRlcjogMXB4IHNvbGlkICRhY3Rpb247XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTNweDtcbiAgbWluLXdpZHRoOiAxODEuOThweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4lc3RvcmVzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTYxcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuYSB7XG4gIGNvbG9yOiAkYWN0aW9uO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iLCIvKiBUeXBvZ3JhcGhpY1xuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMTsgfVxuICovXG5zZWN0aW9uLmZlYXR1cmUtdG9waWNzIGgyIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIG1hcmdpbjogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7IH1cblxuc2VjdGlvbi5mZWF0dXJlLXRvcGljcyAubGlua3MgLmNvbCBhLCBzZWN0aW9uLmZlYXR1cmUtdG9waWNzIC5jb250cm9scyBhIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgbWFyZ2luOiAwOyB9XG5cbi8qIFR5cG9ncmFwaGljIG1vYmlsZVxuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMS1tb2I7IH1cbiAqL1xuYSB7XG4gIGNvbG9yOiAjMjFBRTQ5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cblxuc2VjdGlvbi5mZWF0dXJlLXRvcGljcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA2MHB4IDAgNDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgc2VjdGlvbi5mZWF0dXJlLXRvcGljcyBoMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDsgfVxuICBzZWN0aW9uLmZlYXR1cmUtdG9waWNzIC5saW5rcyB7XG4gICAgd2lkdGg6IDYxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cbiAgICBzZWN0aW9uLmZlYXR1cmUtdG9waWNzIC5saW5rcyAuY29sIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cbiAgICAgIHNlY3Rpb24uZmVhdHVyZS10b3BpY3MgLmxpbmtzIC5jb2wgYSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7IH1cbiAgc2VjdGlvbi5mZWF0dXJlLXRvcGljcyAuY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNjE1cHg7XG4gICAgbWFyZ2luLXRvcDogMzlweDsgfVxuICAgIHNlY3Rpb24uZmVhdHVyZS10b3BpY3MgLmNvbnRyb2xzIGEge1xuICAgICAgY29sb3I6ICMyMUFFNDk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAgICAgc2VjdGlvbi5mZWF0dXJlLXRvcGljcyAuY29udHJvbHMgYSBpLmljb24ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XG4gICAgICAgIHNlY3Rpb24uZmVhdHVyZS10b3BpY3MgLmNvbnRyb2xzIGEgaS5pY29uLnNlYXJjaCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3NlYXJjaC1pY29uLnN2Z1wiKTsgfVxuICAgICAgICBzZWN0aW9uLmZlYXR1cmUtdG9waWNzIC5jb250cm9scyBhIGkuaWNvbi5ib29rIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvYm9vay1pY29uLnN2Z1wiKTsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBzZWN0aW9uLmZlYXR1cmUtdG9waWNzIHtcbiAgICBwYWRkaW5nOiAyMHB4IDAgNDJweDsgfVxuICAgIHNlY3Rpb24uZmVhdHVyZS10b3BpY3MgaDIge1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjlweDsgfVxuICAgIHNlY3Rpb24uZmVhdHVyZS10b3BpY3MgLmxpbmtzIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAgICAgc2VjdGlvbi5mZWF0dXJlLXRvcGljcyAubGlua3MgLmNvbCB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH0gfVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3VpJztcblxuc2VjdGlvbi5mZWF0dXJlLXRvcGljcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA2MHB4IDAgNDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGgyIHtcbiAgICBAZXh0ZW5kICVoMjtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICB9XG4gIC5saW5rcyB7XG4gICAgd2lkdGg6IDYxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLmNvbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgYSB7XG4gICAgICAgIEBleHRlbmQgJWg0O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNjE1cHg7XG4gICAgbWFyZ2luLXRvcDogMzlweDtcbiAgICBhIHtcbiAgICAgIEBleHRlbmQgJWg0O1xuICAgICAgY29sb3I6ICRhY3Rpb247XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGkuaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICYuc2VhcmNoIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zZWFyY2gtaWNvbi5zdmcnKTtcbiAgICAgICAgfVxuICAgICAgICAmLmJvb2sge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2Jvb2staWNvbi5zdmcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyB0YWJsZXQgc21cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpe1xuXG59XG5cbi8vIG1vYmlsZSB4c1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xuICBzZWN0aW9uLmZlYXR1cmUtdG9waWNzIHtcbiAgICBwYWRkaW5nOiAyMHB4IDAgNDJweDtcbiAgICBoMiB7XG4gICAgICBAaW5jbHVkZSBoMi1tb2I7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyOXB4O1xuICAgIH1cbiAgICAubGlua3Mge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgLmNvbCB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

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

module.exports = "<user-agent-info (info)=\"thisUserAgent($event)\"></user-agent-info>\n<section class=\"feature\">\n  <div class=\"content\">\n    <div class=\"info\">\n      <h2>{{ title }}</h2>\n      <div *responsive=\"{ bootstrap: ['xl', 'lg', 'md'] }\" class=\"tabs\">\n        <div class=\"tab\" (click)=\"changePlatform('med')\" [ngClass]=\"{'active' : activePlatform === 'med'}\">\n          <div class=\"title\">{{ medCalXTitle }}</div>\n          <div class=\"text\">{{ medCalXText }}</div>\n        </div>\n        <div class=\"tab\" (click)=\"changePlatform('qxmd')\" [ngClass]=\"{'active' : activePlatform === 'qxmd'}\">\n          <div class=\"title\">{{ qxmdTitle }}</div>\n          <div class=\"text\">{{ qxmdText }}</div>\n        </div>\n      </div>\n      <div *responsive=\"{ bootstrap: ['xs', 'sm'] }\" class=\"mobile-content\">\n        <div class=\"item med\">\n          <h3>{{ medCalXTitle }}</h3>\n          <span>{{ medCalXText }}</span>\n          <img [src]=\"medMobImg\" alt=\"med\">\n        </div>\n        <div class=\"item read\">\n          <h3>{{ qxmdTitle }}</h3>\n          <span>{{ qxmdText }}</span>\n          <img [src]=\"qxmdMobImg\" alt=\"qxmd\">\n        </div>\n      </div>\n    </div>\n    <div *responsive=\"{ bootstrap: ['xl', 'lg', 'md'] }\" class=\"picture\" [ngStyle]=\"{'background-image': 'url('+ selectedImage +')'}\"></div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/main-page/components/feature-vertical/feature-vertical.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/main-page/components/feature-vertical/feature-vertical.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Typographic\n * use ex. .title { @extend %h1; }\n */\nsection.feature .content .info h2 {\n  font-style: normal;\n  font-weight: bold;\n  line-height: 48px;\n  font-size: 40px;\n  color: #333333;\n  margin: 0;\n  letter-spacing: -1px; }\nsection.feature .content .info .tabs .tab .title {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 32px;\n  font-size: 24px;\n  color: #333333;\n  margin: 0; }\nsection.feature .content .info .tabs .tab .text {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 24px;\n  font-size: 16px;\n  color: #333333; }\n/* Typographic mobile\n * use ex. .title { @extend %h1-mob; }\n */\na {\n  color: #21AE49;\n  text-decoration: none; }\nsection.feature {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\nsection.feature .content {\n    background: linear-gradient(360deg, #FFF9FE 0.09%, #F5FEFF 100.1%);\n    border-radius: 20px;\n    max-width: 1180px;\n    padding: 24px 34px 24px 90px;\n    margin-bottom: 60px; }\nsection.feature .content .info {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      float: left;\n      width: calc(100% - 500px);\n      height: 552px; }\nsection.feature .content .info.multi {\n        padding-right: 30px; }\nsection.feature .content .info h2 {\n        width: 100%; }\nsection.feature .content .info .tabs {\n        margin-top: 45px;\n        width: 100%; }\nsection.feature .content .info .tabs .tab {\n          padding: 24px 80px 19px 25px;\n          display: flex;\n          flex-direction: column;\n          width: 100%;\n          height: 148px;\n          align-items: flex-start;\n          justify-content: center;\n          margin-bottom: 15px; }\nsection.feature .content .info .tabs .tab.active {\n            background-image: url('itegration-active-item-bg.svg');\n            background-size: contain;\n            background-repeat: no-repeat; }\nsection.feature .content .info .tabs .tab:hover {\n            cursor: pointer; }\nsection.feature .content .info .tabs .tab .title {\n            margin-bottom: 14px;\n            width: 100%; }\nsection.feature .content .info .tabs .tab .text {\n            width: 100%; }\nsection.feature .content .picture {\n      float: left;\n      height: 552px;\n      width: 500px;\n      background-repeat: no-repeat;\n      background-size: contain;\n      background-position: 0; }\n@media screen and (min-width: 601px) and (max-width: 959px) {\n  section.feature .content {\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    padding: 38px 0 0 !important;\n    margin-bottom: 40px; }\n    section.feature .content .info {\n      width: 100%;\n      height: auto;\n      padding: 0 24px 0 30px; }\n      section.feature .content .info h2 {\n        font-style: normal;\n        font-weight: bold;\n        line-height: 48px;\n        font-size: 24px;\n        color: #333333;\n        margin-bottom: 30px;\n        text-align: center; }\n      section.feature .content .info .mobile-content .item {\n        display: flex;\n        flex-direction: column;\n        align-items: center; }\n        section.feature .content .info .mobile-content .item.med {\n          margin-bottom: 50px; }\n        section.feature .content .info .mobile-content .item.read {\n          margin-bottom: 30px; }\n        section.feature .content .info .mobile-content .item h3 {\n          font-style: normal;\n          font-weight: normal;\n          line-height: 32px;\n          font-size: 20px;\n          letter-spacing: 0.4px;\n          color: #333333;\n          width: 100%;\n          text-align: center;\n          margin: 0 0 16px; }\n        section.feature .content .info .mobile-content .item span {\n          font-style: normal;\n          font-weight: normal;\n          line-height: 25px;\n          font-size: 17px;\n          color: #333333;\n          text-align: center;\n          width: 100%;\n          display: inline-block;\n          margin-bottom: 32px; }\n        section.feature .content .info .mobile-content .item img {\n          align-self: center;\n          max-width: 60%;\n          height: auto; } }\n@media screen and (max-width: 600px) {\n  section.feature .content {\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    padding: 38px 0 0 !important;\n    margin-bottom: 40px; }\n    section.feature .content .info {\n      width: 100%;\n      height: auto;\n      padding: 0 24px 0 30px; }\n      section.feature .content .info h2 {\n        font-style: normal;\n        font-weight: bold;\n        line-height: 48px;\n        font-size: 24px;\n        color: #333333;\n        margin-bottom: 30px; }\n      section.feature .content .info .mobile-content .item {\n        display: flex;\n        flex-direction: column;\n        align-items: center; }\n        section.feature .content .info .mobile-content .item.med {\n          margin-bottom: 50px; }\n        section.feature .content .info .mobile-content .item.read {\n          margin-bottom: 30px; }\n        section.feature .content .info .mobile-content .item h3 {\n          font-style: normal;\n          font-weight: normal;\n          line-height: 32px;\n          font-size: 20px;\n          letter-spacing: 0.4px;\n          color: #333333;\n          width: 100%;\n          margin: 0 0 16px; }\n        section.feature .content .info .mobile-content .item span {\n          font-style: normal;\n          font-weight: normal;\n          line-height: 25px;\n          font-size: 17px;\n          color: #333333;\n          width: 100%;\n          display: inline-block;\n          margin-bottom: 32px; }\n        section.feature .content .info .mobile-content .item img {\n          align-self: center;\n          max-width: 60%;\n          height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9zdHlsZXMvX3VpLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2ZlYXR1cmUtdmVydGljYWwvZmVhdHVyZS12ZXJ0aWNhbC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL2NvbXBvbmVudHMvZmVhdHVyZS12ZXJ0aWNhbC9mZWF0dXJlLXZlcnRpY2FsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BOztFQ0pFO0FDQUY7RUZpQkUsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBdEJZO0VBdUJaLFNBQVM7RUFDVCxvQkFBb0IsRUFBQTtBRXZCdEI7RUYwQkUsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBL0JZO0VBZ0NaLFNBQVMsRUFBQTtBRS9CWDtFRjBDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0EvQ1ksRUFBQTtBQWtGZDs7RUN0REU7QUQ0S0Y7RUFDRSxjQXhNYztFQXlNZCxxQkFBcUIsRUFBQTtBRXpNdkI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtBQUpyQjtJQU1JLGtFQUFrRTtJQUNsRSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixtQkFBbUIsRUFBQTtBQVZ2QjtNQVlNLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixXQUFXO01BQ1gseUJBQXlCO01BQ3pCLGFBQWEsRUFBQTtBQWxCbkI7UUFvQlEsbUJBQW1CLEVBQUE7QUFwQjNCO1FBd0JRLFdBQVcsRUFBQTtBQXhCbkI7UUEyQlEsZ0JBQWdCO1FBQ2hCLFdBQVcsRUFBQTtBQTVCbkI7VUE4QlUsNEJBQTRCO1VBQzVCLGFBQWE7VUFDYixzQkFBc0I7VUFDdEIsV0FBVztVQUNYLGFBQWE7VUFDYix1QkFBdUI7VUFDdkIsdUJBQXVCO1VBQ3ZCLG1CQUFtQixFQUFBO0FBckM3QjtZQXVDWSxzREFBNEU7WUFDNUUsd0JBQXdCO1lBQ3hCLDRCQUE0QixFQUFBO0FBekN4QztZQTRDWSxlQUFlLEVBQUE7QUE1QzNCO1lBZ0RZLG1CQUFtQjtZQUNuQixXQUFXLEVBQUE7QUFqRHZCO1lBcURZLFdBQVcsRUFBQTtBQXJEdkI7TUEyRE0sV0FBVztNQUNYLGFBQWE7TUFDYixZQUFZO01BQ1osNEJBQTRCO01BQzVCLHdCQUF3QjtNQUN4QixzQkFBc0IsRUFBQTtBQVc1QjtFQTNFQTtJQThFTSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw0QkFBMkI7SUFDM0IsbUJBQW1CLEVBQUE7SUFsRnpCO01Bb0ZRLFdBQVc7TUFDWCxZQUFZO01BQ1osc0JBQXNCLEVBQUE7TUF0RjlCO1FGMEdFLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixjQS9HWTtRRTBGSixtQkFBbUI7UUFDbkIsa0JBQWtCLEVBQUE7TUFkMUI7UUFrQlUsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUIsRUFBQTtRQXBCN0I7VUFzQlksbUJBQW1CLEVBQUE7UUF0Qi9CO1VBeUJZLG1CQUFtQixFQUFBO1FBekIvQjtVRjZDQSxrQkFBa0I7VUFDbEIsbUJBQW1CO1VBQ25CLGlCQUFpQjtVQUNqQixlQUFlO1VBQ2YscUJBQXFCO1VBQ3JCLGNBL0hZO1VFMEdBLFdBQVc7VUFDWCxrQkFBa0I7VUFDbEIsZ0JBQWdCLEVBQUE7UUEvQjVCO1VGNEVBLGtCQUFrQjtVQUNsQixtQkFBbUI7VUFDbkIsaUJBQWlCO1VBQ2pCLGVBQWU7VUFDZixjQTdKWTtVRWdIQSxrQkFBa0I7VUFDbEIsV0FBVztVQUNYLHFCQUFxQjtVQUNyQixtQkFBbUIsRUFBQTtRQXRDL0I7VUF5Q1ksa0JBQWtCO1VBQ2xCLGNBQWM7VUFDZCxZQUFZLEVBQUEsRUFDYjtBQVNiO0VBaklBO0lBb0lNLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDRCQUEyQjtJQUMzQixtQkFBbUIsRUFBQTtJQXhJekI7TUEwSVEsV0FBVztNQUNYLFlBQVk7TUFDWixzQkFBc0IsRUFBQTtNQTVJOUI7UUYwR0Usa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGNBL0dZO1FFZ0pKLG1CQUFtQixFQUFBO01BbkUzQjtRQXVFVSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQixFQUFBO1FBekU3QjtVQTJFWSxtQkFBbUIsRUFBQTtRQTNFL0I7VUE4RVksbUJBQW1CLEVBQUE7UUE5RS9CO1VGNkNBLGtCQUFrQjtVQUNsQixtQkFBbUI7VUFDbkIsaUJBQWlCO1VBQ2pCLGVBQWU7VUFDZixxQkFBcUI7VUFDckIsY0EvSFk7VUUrSkEsV0FBVztVQUNYLGdCQUFnQixFQUFBO1FBbkY1QjtVRjRFQSxrQkFBa0I7VUFDbEIsbUJBQW1CO1VBQ25CLGlCQUFpQjtVQUNqQixlQUFlO1VBQ2YsY0E3Slk7VUVvS0EsV0FBVztVQUNYLHFCQUFxQjtVQUNyQixtQkFBbUIsRUFBQTtRQXpGL0I7VUE0Rlksa0JBQWtCO1VBQ2xCLGNBQWM7VUFDZCxZQUFZLEVBQUEsRUFDYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2ZlYXR1cmUtdmVydGljYWwvZmVhdHVyZS12ZXJ0aWNhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbG9yc1xuJG1haW46ICMzMzMzMzM7XG4kYWN0aW9uOiAjMjFBRTQ5O1xuJGdyZXk6ICM5OTk5OTk7XG4kbGlnaHQtZ3JleTogI0U3RTdFNztcblxuLyogVHlwb2dyYXBoaWNcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDE7IH1cbiAqL1xuJWgxIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIGZvbnQtc2l6ZTogNTZweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xufVxuJWgyIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xufVxuJWgzIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogJG1haW47XG4gIG1hcmdpbjogMDtcbn1cbiVoNCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG59XG4lYm9keSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJW5hdmlnYXRpb24ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJXNsaWRlciB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5AbWl4aW4gc2xpZGVyIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAkZ3JleTtcbn1cbiVjYXB0aW9uIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gIGNvbG9yOiAkZ3JleTtcbn1cblxuLyogVHlwb2dyYXBoaWMgbW9iaWxlXG4gKiB1c2UgZXguIC50aXRsZSB7IEBleHRlbmQgJWgxLW1vYjsgfVxuICovXG4laDEtbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGgxLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVoMi1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gaDItbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWgzLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gaDMtbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVoNC1tb2Ige1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGg0LW1vYiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogJG1haW47XG59XG4lYm9keS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBib2R5LW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWxvY2FsLW5hdmlnYXRpb24tbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAkZ3JleTtcbn1cbkBtaXhpbiBsb2NhbC1uYXZpZ2F0aW9uLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5cbi8vIEJ1dHRvblxuJWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICRhY3Rpb247XG4gIGJvcmRlcjogMXB4IHNvbGlkICRhY3Rpb247XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTNweDtcbiAgbWluLXdpZHRoOiAxODEuOThweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4lc3RvcmVzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTYxcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuYSB7XG4gIGNvbG9yOiAkYWN0aW9uO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iLCIvKiBUeXBvZ3JhcGhpY1xuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMTsgfVxuICovXG5zZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8gaDIge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgbWFyZ2luOiAwO1xuICBsZXR0ZXItc3BhY2luZzogLTFweDsgfVxuXG5zZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8gLnRhYnMgLnRhYiAudGl0bGUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBtYXJnaW46IDA7IH1cblxuc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIC50YWJzIC50YWIgLnRleHQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzMzMzOyB9XG5cbi8qIFR5cG9ncmFwaGljIG1vYmlsZVxuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMS1tb2I7IH1cbiAqL1xuYSB7XG4gIGNvbG9yOiAjMjFBRTQ5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cblxuc2VjdGlvbi5mZWF0dXJlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0ZGRjlGRSAwLjA5JSwgI0Y1RkVGRiAxMDAuMSUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiAxMTgwcHg7XG4gICAgcGFkZGluZzogMjRweCAzNHB4IDI0cHggOTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4OyB9XG4gICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNTAwcHgpO1xuICAgICAgaGVpZ2h0OiA1NTJweDsgfVxuICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvLm11bHRpIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDsgfVxuICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIGgyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCAuaW5mbyAudGFicyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQ1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCAuaW5mbyAudGFicyAudGFiIHtcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4IDgwcHggMTlweCAyNXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDE0OHB4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cbiAgICAgICAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8gLnRhYnMgLnRhYi5hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2l0ZWdyYXRpb24tYWN0aXZlLWl0ZW0tYmcuc3ZnXCIpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgfVxuICAgICAgICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCAuaW5mbyAudGFicyAudGFiOmhvdmVyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCAuaW5mbyAudGFicyAudGFiIC50aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAgICAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8gLnRhYnMgLnRhYiAudGV4dCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTsgfVxuICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCAucGljdHVyZSB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIGhlaWdodDogNTUycHg7XG4gICAgICB3aWR0aDogNTAwcHg7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMDsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAzOHB4IDAgMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7IH1cbiAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBwYWRkaW5nOiAwIDI0cHggMCAzMHB4OyB9XG4gICAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8gaDIge1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8gLm1vYmlsZS1jb250ZW50IC5pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAgICAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8gLm1vYmlsZS1jb250ZW50IC5pdGVtLm1lZCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDsgfVxuICAgICAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8gLm1vYmlsZS1jb250ZW50IC5pdGVtLnJlYWQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cbiAgICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIC5tb2JpbGUtY29udGVudCAuaXRlbSBoMyB7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMTZweDsgfVxuICAgICAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8gLm1vYmlsZS1jb250ZW50IC5pdGVtIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7IH1cbiAgICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIC5tb2JpbGUtY29udGVudCAuaXRlbSBpbWcge1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87IH0gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMzhweCAwIDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4OyB9XG4gICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgcGFkZGluZzogMCAyNHB4IDAgMzBweDsgfVxuICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIGgyIHtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cbiAgICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCAuaW5mbyAubW9iaWxlLWNvbnRlbnQgLml0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCAuaW5mbyAubW9iaWxlLWNvbnRlbnQgLml0ZW0ubWVkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4OyB9XG4gICAgICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCAuaW5mbyAubW9iaWxlLWNvbnRlbnQgLml0ZW0ucmVhZCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuICAgICAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8gLm1vYmlsZS1jb250ZW50IC5pdGVtIGgzIHtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDE2cHg7IH1cbiAgICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIC5tb2JpbGUtY29udGVudCAuaXRlbSBzcGFuIHtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7IH1cbiAgICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIC5tb2JpbGUtY29udGVudCAuaXRlbSBpbWcge1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87IH0gfVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3VpJztcblxuc2VjdGlvbi5mZWF0dXJlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0ZGRjlGRSAwLjA5JSwgI0Y1RkVGRiAxMDAuMSUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiAxMTgwcHg7XG4gICAgcGFkZGluZzogMjRweCAzNHB4IDI0cHggOTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICAgIC5pbmZvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNTAwcHgpO1xuICAgICAgaGVpZ2h0OiA1NTJweDtcbiAgICAgICYubXVsdGkge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgICAgfVxuICAgICAgaDIge1xuICAgICAgICBAZXh0ZW5kICVoMjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAudGFicyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQ1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAudGFiIHtcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4IDgwcHggMTlweCAyNXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDE0OHB4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaXRlZ3JhdGlvbi1hY3RpdmUtaXRlbS1iZy5zdmcnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgQGV4dGVuZCAlaDM7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIEBleHRlbmQgJWJvZHk7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnBpY3R1cmUge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBoZWlnaHQ6IDU1MnB4O1xuICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDA7XG4gICAgfVxuICB9XG59XG5cbi8vIHRhYmxldCBsYW5kc2NhcGVcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KXtcblxufVxuXG4vLyB0YWJsZXQgc21cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpe1xuICBzZWN0aW9uLmZlYXR1cmUge1xuICAgIC5jb250ZW50IHtcbiAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcGFkZGluZzogMzhweCAwIDAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgIC5pbmZvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZzogMCAyNHB4IDAgMzBweDtcbiAgICAgICAgaDIge1xuICAgICAgICAgIEBpbmNsdWRlIGgyLW1vYjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubW9iaWxlLWNvbnRlbnQge1xuICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICYubWVkIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYucmVhZCB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgIEBpbmNsdWRlIGgzLW1vYjtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICBAaW5jbHVkZSBib2R5LW1vYjtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBtb2JpbGUgeHNcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcbiAgc2VjdGlvbi5mZWF0dXJlIHtcbiAgICAuY29udGVudCB7XG4gICAgICB3aWR0aDogMTAwdnc7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHBhZGRpbmc6IDM4cHggMCAwIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAuaW5mbyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDAgMjRweCAwIDMwcHg7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBAaW5jbHVkZSBoMi1tb2I7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuICAgICAgICAubW9iaWxlLWNvbnRlbnQge1xuICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICYubWVkIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYucmVhZCB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgIEBpbmNsdWRlIGgzLW1vYjtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgQGluY2x1ZGUgYm9keS1tb2I7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNjAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var FeatureVerticalComponent = /** @class */ (function () {
    function FeatureVerticalComponent(translateService) {
        this.translateService = translateService;
        this.activePlatform = 'med';
        this.lang = 'eng';
    }
    FeatureVerticalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translateService.onLangChange.subscribe(function (value) {
            _this.lang = value.lang === 'fr' ? value.lang : 'eng';
            if (_this.lang === 'fr') {
                _this.images.map(function (item) {
                    item.src = item.src.replace(new RegExp('eng', 'g'), 'fr');
                });
            }
            else {
                _this.images.map(function (item) {
                    item.src = item.src.replace(new RegExp('fr', 'g'), 'eng');
                });
            }
            _this.changePlatform(_this.activePlatform);
        });
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
                _this.changeImages(item);
            }
        });
    };
    FeatureVerticalComponent.prototype.changePlatform = function (platform) {
        var _this = this;
        this.activePlatform = platform;
        this.images.map(function (item) {
            if (item.platform === platform) {
                _this.changeImages(item);
            }
        });
    };
    FeatureVerticalComponent.prototype.thisUserAgent = function (event) {
        this.pixelratio = event.pixelratio;
    };
    FeatureVerticalComponent.prototype.changeImages = function (item) {
        if (item.src) {
            switch (this.pixelratio) {
                case '1x':
                    this.selectedImage = item.src.replace('@2x', '');
                    break;
                case 'retina':
                    this.selectedImage = item.src;
                    break;
                case '4k':
                    this.selectedImage = item.src.replace('@2x', '@3x');
                    break;
                default:
                    this.selectedImage = item.src.replace('@2x', '');
                    break;
            }
        }
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
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

module.exports = "<user-agent-info (info)=\"thisUserAgent($event)\"></user-agent-info>\n<section class=\"feature\">\n  <div class=\"content\" [ngClass]=\"{'web': activePlatform === 'web', 'mobile': activePlatform === 'ios' || activePlatform === 'android'}\">\n    <div class=\"info\" [ngClass]=\"{'multi': multiPlatform}\">\n      <h2>{{ title }}</h2>\n      <p class=\"sub\">{{ subTitle }}</p>\n      <p class=\"text\" [innerHTML]=\"text\"></p>\n      <div class=\"slider-control\">\n        <span [ngClass]=\"{'active': activePlatform === 'ios'}\" (click)=\"changePlatform('ios', $event)\">iOS</span>\n        <span *ngIf=\"multiPlatform\" [ngClass]=\"{'active': activePlatform === 'android'}\" (click)=\"changePlatform('android', $event)\">Android</span>\n        <span [ngClass]=\"{'active': activePlatform === 'web'}\" (click)=\"changePlatform('web', $event)\">Web</span>\n        <i class=\"background\" [ngStyle]=\"{'width': toggleBgWidth, 'left': toggleBgLeft}\"></i>\n      </div>\n    </div>\n    <div class=\"picture\">\n      <img [ngClass]=\"{'web': activePlatform === 'web', 'mobile': activePlatform === 'ios' || activePlatform === 'android' }\" [src]=\"selectedSrc\" [alt]=\"activePlatform\">\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/main-page/components/feature/feature.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/main-page/components/feature/feature.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Typographic\n * use ex. .title { @extend %h1; }\n */\nsection.feature .content .info h2 {\n  font-style: normal;\n  font-weight: bold;\n  line-height: 48px;\n  font-size: 40px;\n  color: #333333;\n  margin: 0;\n  letter-spacing: -1px; }\nsection.feature .content .info p.sub {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 24px;\n  font-size: 16px;\n  color: #333333; }\n/* Typographic mobile\n * use ex. .title { @extend %h1-mob; }\n */\na {\n  color: #21AE49;\n  text-decoration: none; }\nsection.feature {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\nsection.feature .content {\n    background: linear-gradient(360deg, #FFF9FE 0.09%, #F5FEFF 100.1%);\n    border-radius: 20px;\n    max-width: 1180px;\n    margin-bottom: 60px;\n    display: flex; }\nsection.feature .content.web {\n      padding: 60px 0 61px 90px; }\nsection.feature .content.mobile {\n      padding: 24px 34px 24px 90px; }\nsection.feature .content .info {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      float: left;\n      width: 35%; }\nsection.feature .content .info.multi {\n        padding-right: 30px; }\nsection.feature .content .info h2 {\n        width: 100%; }\nsection.feature .content .info p.sub {\n        width: 100%;\n        margin: 28px 0 20px 0; }\nsection.feature .content .info p.text {\n        font-style: normal;\n        font-weight: 500;\n        line-height: 24px;\n        font-size: 18px;\n        letter-spacing: 0.2px;\n        color: #333333;\n        width: 100%;\n        margin: 0 0 42px; }\nsection.feature .content .info .slider-control {\n        width: 100%;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: flex-start;\n        position: relative; }\nsection.feature .content .info .slider-control span {\n          display: flex;\n          align-items: center;\n          height: 38px;\n          padding: 0 26px;\n          font-style: normal;\n          font-weight: 500;\n          line-height: 24px;\n          font-size: 16px;\n          text-align: center;\n          letter-spacing: 0.2px;\n          color: #999999;\n          transition: color 400ms;\n          z-index: 1; }\nsection.feature .content .info .slider-control span:hover {\n            cursor: pointer; }\nsection.feature .content .info .slider-control span.active {\n            color: #ffffff; }\nsection.feature .content .info .slider-control i.background {\n          background: #333333;\n          border-radius: 28px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          height: 38px;\n          transition: left 400ms; }\nsection.feature .content .picture {\n      float: left;\n      width: 65%;\n      background-repeat: no-repeat;\n      background-size: contain;\n      background-position: center;\n      display: flex;\n      justify-content: center;\n      align-items: center; }\nsection.feature .content .picture img.web {\n        max-width: 100%;\n        height: auto; }\nsection.feature .content .picture img.mobile {\n        max-width: 100%;\n        max-height: 585px; }\n@media screen and (min-width: 960px) and (max-width: 1279px) {\n  section.feature .content .picture {\n    overflow: hidden; }\n    section.feature .content .picture img.web {\n      -webkit-transform: translate3d(43px, 17px, 0px);\n              transform: translate3d(43px, 17px, 0px); } }\n@media screen and (min-width: 601px) and (max-width: 959px) {\n  section.feature .content {\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    padding: 38px 0 0 !important;\n    margin-bottom: 40px; }\n    section.feature .content .info {\n      width: 100%;\n      height: auto;\n      padding: 0 77px 20px !important; }\n      section.feature .content .info h2 {\n        font-style: normal;\n        font-weight: bold;\n        line-height: 48px;\n        font-size: 24px;\n        color: #333333;\n        margin-bottom: 20px;\n        text-align: center; }\n      section.feature .content .info p.sub {\n        font-style: normal;\n        font-weight: normal;\n        line-height: 25px;\n        font-size: 17px;\n        color: #333333;\n        width: 100%;\n        margin: 0 0 18px 0;\n        text-align: center; }\n      section.feature .content .info p.text {\n        margin: 0;\n        font-style: normal;\n        font-weight: 500;\n        line-height: 24px;\n        font-size: 17px;\n        color: #333333;\n        margin-bottom: 32px;\n        text-align: center; }\n      section.feature .content .info .slider-control {\n        width: auto;\n        justify-content: center; }\n    section.feature .content .picture {\n      width: 100%; }\n      section.feature .content .picture img {\n        max-width: 60%;\n        height: auto;\n        margin-bottom: 30px; }\n      section.feature .content .picture img.web {\n        margin-bottom: 0; } }\n@media screen and (max-width: 600px) {\n  section.feature .content {\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    padding: 38px 0 0 !important;\n    margin-bottom: 40px; }\n    section.feature .content .info {\n      width: 100%;\n      height: auto;\n      padding: 0 44px 20px; }\n      section.feature .content .info h2 {\n        font-style: normal;\n        font-weight: bold;\n        line-height: 48px;\n        font-size: 24px;\n        color: #333333;\n        margin-bottom: 20px; }\n      section.feature .content .info p.sub {\n        font-style: normal;\n        font-weight: normal;\n        line-height: 25px;\n        font-size: 17px;\n        color: #333333;\n        width: 100%;\n        margin: 0 0 18px 0; }\n      section.feature .content .info p.text {\n        margin: 0;\n        font-style: normal;\n        font-weight: 500;\n        line-height: 24px;\n        font-size: 17px;\n        color: #333333;\n        margin-bottom: 32px; }\n      section.feature .content .info .slider-control {\n        justify-content: space-between; }\n    section.feature .content .picture {\n      width: 100%; }\n      section.feature .content .picture img {\n        max-width: 60%;\n        height: auto;\n        margin-bottom: 30px; }\n      section.feature .content .picture img.web {\n        -webkit-transform: translate3d(33px, 17px, 0px);\n                transform: translate3d(33px, 17px, 0px);\n        margin-bottom: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9zdHlsZXMvX3VpLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2ZlYXR1cmUvZmVhdHVyZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL2NvbXBvbmVudHMvZmVhdHVyZS9mZWF0dXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BOztFQ0pFO0FDQUY7RUZpQkUsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBdEJZO0VBdUJaLFNBQVM7RUFDVCxvQkFBb0IsRUFBQTtBRXZCdEI7RUYwQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBL0NZLEVBQUE7QUFrRmQ7O0VDOURFO0FEb0xGO0VBQ0UsY0F4TWM7RUF5TWQscUJBQXFCLEVBQUE7QUV6TXZCO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7QUFKckI7SUFNSSxrRUFBa0U7SUFDbEUsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYSxFQUFBO0FBVmpCO01BWU0seUJBQXlCLEVBQUE7QUFaL0I7TUFlTSw0QkFBNEIsRUFBQTtBQWZsQztNQWtCTSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsV0FBVztNQUNYLFVBQVUsRUFBQTtBQXZCaEI7UUF5QlEsbUJBQW1CLEVBQUE7QUF6QjNCO1FBNkJRLFdBQVcsRUFBQTtBQTdCbkI7UUFpQ1EsV0FBVztRQUNYLHFCQUFxQixFQUFBO0FBbEM3QjtRQXFDUSxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLGNGM0NNO1FFNENOLFdBQVc7UUFDWCxnQkFBZ0IsRUFBQTtBQTVDeEI7UUErQ1EsV0FBVztRQUNYLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLDJCQUEyQjtRQUMzQixrQkFBa0IsRUFBQTtBQXBEMUI7VUFzRFUsYUFBYTtVQUNiLG1CQUFtQjtVQUNuQixZQUFZO1VBQ1osZUFBZTtVQUNmLGtCQUFrQjtVQUNsQixnQkFBZ0I7VUFDaEIsaUJBQWlCO1VBQ2pCLGVBQWU7VUFDZixrQkFBa0I7VUFDbEIscUJBQXFCO1VBQ3JCLGNGL0RJO1VFZ0VKLHVCQUF1QjtVQUN2QixVQUFVLEVBQUE7QUFsRXBCO1lBb0VZLGVBQWUsRUFBQTtBQXBFM0I7WUF1RVksY0FBYyxFQUFBO0FBdkUxQjtVQTJFVSxtQkY1RUk7VUU2RUosbUJBQW1CO1VBQ25CLGtCQUFrQjtVQUNsQixNQUFNO1VBQ04sT0FBTztVQUNQLFlBQVk7VUFDWixzQkFBc0IsRUFBQTtBQWpGaEM7TUFzRk0sV0FBVztNQUNYLFVBQVU7TUFDViw0QkFBNEI7TUFDNUIsd0JBQXdCO01BQ3hCLDJCQUEyQjtNQUMzQixhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLG1CQUFtQixFQUFBO0FBN0Z6QjtRQStGUSxlQUFlO1FBQ2YsWUFBWSxFQUFBO0FBaEdwQjtRQW1HUSxlQUFlO1FBQ2YsaUJBQWlCLEVBQUE7QUFPekI7RUEzR0E7SUErR1EsZ0JBQWdCLEVBQUE7SUEvR3hCO01BaUhVLCtDQUF1QztjQUF2Qyx1Q0FBdUMsRUFBQSxFQUN4QztBQU9UO0VBekhBO0lBNEhNLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDRCQUEyQjtJQUMzQixtQkFBbUIsRUFBQTtJQWhJekI7TUFrSVEsV0FBVztNQUNYLFlBQVk7TUFDViwrQkFBOEIsRUFBQTtNQXBJeEM7UUYwR0Usa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGNBL0dZO1FFd0lKLG1CQUFtQjtRQUNuQixrQkFBa0IsRUFBQTtNQXhJNUI7UUZ3SkUsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGNBN0pZO1FFNklKLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsa0JBQWtCLEVBQUE7TUE5STVCO1FGeUlFLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsY0EvSVk7UUVtSkosbUJBQW1CO1FBQ25CLGtCQUFrQixFQUFBO01Bbko1QjtRQXNKVSxXQUFXO1FBQ1gsdUJBQXVCLEVBQUE7SUF2SmpDO01BMkpRLFdBQVcsRUFBQTtNQWpDakI7UUFtQ1EsY0FBYztRQUNkLFlBQVk7UUFDWixtQkFBbUIsRUFBQTtNQS9KN0I7UUFtS1UsZ0JBQWdCLEVBQUEsRUFDakI7QUFPVDtFQTNLQTtJQThLTSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw0QkFBMkI7SUFDM0IsbUJBQW1CLEVBQUE7SUFsTHpCO01Bb0xRLFdBQVc7TUFDWCxZQUFZO01BQ1osb0JBQW9CLEVBQUE7TUF0TDVCO1FGMEdFLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixjQS9HWTtRRTBMSixtQkFBbUIsRUFBQTtNQXpMN0I7UUZ3SkUsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGNBN0pZO1FFOExKLFdBQVc7UUFDWCxrQkFBa0IsRUFBQTtNQTlMNUI7UUZ5SUUsU0FBUztRQUNULGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixjQS9JWTtRRW1NSixtQkFBbUIsRUFBQTtNQWxNN0I7UUFxTVUsOEJBQThCLEVBQUE7SUFyTXhDO01BeU1RLFdBQVcsRUFBQTtNQS9FakI7UUFpRlEsY0FBYztRQUNkLFlBQVk7UUFDWixtQkFBbUIsRUFBQTtNQTdNN0I7UUFnTlUsK0NBQXVDO2dCQUF2Qyx1Q0FBdUM7UUFDdkMsZ0JBQWdCLEVBQUEsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluLXBhZ2UvY29tcG9uZW50cy9mZWF0dXJlL2ZlYXR1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2xvcnNcbiRtYWluOiAjMzMzMzMzO1xuJGFjdGlvbjogIzIxQUU0OTtcbiRncmV5OiAjOTk5OTk5O1xuJGxpZ2h0LWdyZXk6ICNFN0U3RTc7XG5cbi8qIFR5cG9ncmFwaGljXG4gKiB1c2UgZXguIC50aXRsZSB7IEBleHRlbmQgJWgxOyB9XG4gKi9cbiVoMSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBmb250LXNpemU6IDU2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbn1cbiVoMiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbn1cbiVoMyB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG59XG4laDQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xufVxuJWJvZHkge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVuYXZpZ2F0aW9uIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVzbGlkZXIge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRncmV5O1xufVxuQG1peGluIHNsaWRlciB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG4lY2FwdGlvbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5cbi8qIFR5cG9ncmFwaGljIG1vYmlsZVxuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMS1tb2I7IH1cbiAqL1xuJWgxLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoMS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogJG1haW47XG59XG4laDItbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGgyLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVoMy1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGgzLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBjb2xvcjogJG1haW47XG59XG4laDQtbW9iIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoNC1tb2Ige1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWJvZHktbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gYm9keS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVsb2NhbC1uYXZpZ2F0aW9uLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5AbWl4aW4gbG9jYWwtbmF2aWdhdGlvbi1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRncmV5O1xufVxuXG4vLyBCdXR0b25cbiVidXR0b24ge1xuICBiYWNrZ3JvdW5kOiAkYWN0aW9uO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYWN0aW9uO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEzcHg7XG4gIG1pbi13aWR0aDogMTgxLjk4cHg7XG4gIGhlaWdodDogNTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuJXN0b3JlcyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDE2MXB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmEge1xuICBjb2xvcjogJGFjdGlvbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIiwiLyogVHlwb2dyYXBoaWNcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDE7IH1cbiAqL1xuc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIGgyIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIG1hcmdpbjogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7IH1cblxuc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIHAuc3ViIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzMzMzMzMzsgfVxuXG4vKiBUeXBvZ3JhcGhpYyBtb2JpbGVcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDEtbW9iOyB9XG4gKi9cbmEge1xuICBjb2xvcjogIzIxQUU0OTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbnNlY3Rpb24uZmVhdHVyZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICNGRkY5RkUgMC4wOSUsICNGNUZFRkYgMTAwLjElKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1heC13aWR0aDogMTE4MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgZGlzcGxheTogZmxleDsgfVxuICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudC53ZWIge1xuICAgICAgcGFkZGluZzogNjBweCAwIDYxcHggOTBweDsgfVxuICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudC5tb2JpbGUge1xuICAgICAgcGFkZGluZzogMjRweCAzNHB4IDI0cHggOTBweDsgfVxuICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCAuaW5mbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgd2lkdGg6IDM1JTsgfVxuICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvLm11bHRpIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDsgfVxuICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIGgyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCAuaW5mbyBwLnN1YiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDI4cHggMCAyMHB4IDA7IH1cbiAgICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCAuaW5mbyBwLnRleHQge1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDAgMCA0MnB4OyB9XG4gICAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8gLnNsaWRlci1jb250cm9sIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCAuaW5mbyAuc2xpZGVyLWNvbnRyb2wgc3BhbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGhlaWdodDogMzhweDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDI2cHg7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgICAgY29sb3I6ICM5OTk5OTk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgNDAwbXM7XG4gICAgICAgICAgei1pbmRleDogMTsgfVxuICAgICAgICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCAuaW5mbyAuc2xpZGVyLWNvbnRyb2wgc3Bhbjpob3ZlciB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgICAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8gLnNsaWRlci1jb250cm9sIHNwYW4uYWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmOyB9XG4gICAgICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCAuaW5mbyAuc2xpZGVyLWNvbnRyb2wgaS5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGhlaWdodDogMzhweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDQwMG1zOyB9XG4gICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5waWN0dXJlIHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgd2lkdGg6IDY1JTtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLnBpY3R1cmUgaW1nLndlYiB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvOyB9XG4gICAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLnBpY3R1cmUgaW1nLm1vYmlsZSB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDogNTg1cHg7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5waWN0dXJlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5waWN0dXJlIGltZy53ZWIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0M3B4LCAxN3B4LCAwcHgpOyB9IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMzhweCAwIDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4OyB9XG4gICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgcGFkZGluZzogMCA3N3B4IDIwcHggIWltcG9ydGFudDsgfVxuICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIGgyIHtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIHAuc3ViIHtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMCAwIDE4cHggMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8gcC50ZXh0IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCAuaW5mbyAuc2xpZGVyLWNvbnRyb2wge1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLnBpY3R1cmUge1xuICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCAucGljdHVyZSBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XG4gICAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLnBpY3R1cmUgaW1nLndlYiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7IH0gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMzhweCAwIDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4OyB9XG4gICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5pbmZvIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgcGFkZGluZzogMCA0NHB4IDIwcHg7IH1cbiAgICAgIHNlY3Rpb24uZmVhdHVyZSAuY29udGVudCAuaW5mbyBoMiB7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG4gICAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8gcC5zdWIge1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwIDAgMThweCAwOyB9XG4gICAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8gcC50ZXh0IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4OyB9XG4gICAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLmluZm8gLnNsaWRlci1jb250cm9sIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XG4gICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5waWN0dXJlIHtcbiAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgICBzZWN0aW9uLmZlYXR1cmUgLmNvbnRlbnQgLnBpY3R1cmUgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuICAgICAgc2VjdGlvbi5mZWF0dXJlIC5jb250ZW50IC5waWN0dXJlIGltZy53ZWIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMzcHgsIDE3cHgsIDBweCk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7IH0gfVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3VpJztcblxuc2VjdGlvbi5mZWF0dXJlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0ZGRjlGRSAwLjA5JSwgI0Y1RkVGRiAxMDAuMSUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiAxMTgwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgICYud2ViIHtcbiAgICAgIHBhZGRpbmc6IDYwcHggMCA2MXB4IDkwcHg7XG4gICAgfVxuICAgICYubW9iaWxlIHtcbiAgICAgIHBhZGRpbmc6IDI0cHggMzRweCAyNHB4IDkwcHg7XG4gICAgfVxuICAgIC5pbmZvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB3aWR0aDogMzUlO1xuICAgICAgJi5tdWx0aSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgICB9XG4gICAgICBoMiB7XG4gICAgICAgIEBleHRlbmQgJWgyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIHAuc3ViIHtcbiAgICAgICAgQGV4dGVuZCAlYm9keTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMjhweCAwIDIwcHggMDtcbiAgICAgIH1cbiAgICAgIHAudGV4dCB7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgICBjb2xvcjogJG1haW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDAgMCA0MnB4O1xuICAgICAgfVxuICAgICAgLnNsaWRlci1jb250cm9sIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiAzOHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjZweDtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgICAgICBjb2xvcjogJGdyZXk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgNDAwbXM7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGkuYmFja2dyb3VuZCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJG1haW47XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAzOHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGxlZnQgNDAwbXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnBpY3R1cmUge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB3aWR0aDogNjUlO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBpbWcud2ViIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9XG4gICAgICBpbWcubW9iaWxlIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiA1ODVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gdGFibGV0IGxhbmRzY2FwZVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpe1xuICBzZWN0aW9uLmZlYXR1cmUge1xuICAgIC5jb250ZW50IHtcbiAgICAgIC5waWN0dXJlIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgaW1nLndlYiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0M3B4LCAxN3B4LCAwcHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIHRhYmxldCBzbVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCl7XG4gIHNlY3Rpb24uZmVhdHVyZSB7XG4gICAgLmNvbnRlbnQge1xuICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBwYWRkaW5nOiAzOHB4IDAgMCFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgLmluZm8ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIHBhZGRpbmc6IDAgNzdweCAyMHB4IWltcG9ydGFudDtcbiAgICAgICAgaDIge1xuICAgICAgICAgIEBpbmNsdWRlIGgyLW1vYjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBwLnN1YiB7XG4gICAgICAgICAgQGluY2x1ZGUgYm9keS1tb2I7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMThweCAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBwLnRleHQge1xuICAgICAgICAgIEBpbmNsdWRlIGg0LW1vYjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuc2xpZGVyLWNvbnRyb2wge1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAucGljdHVyZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBpbWcge1xuICAgICAgICAgIG1heC13aWR0aDogNjAlO1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIGltZy53ZWIge1xuICAgICAgICAgIC8vdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzM3B4LCAxN3B4LCAwcHgpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gbW9iaWxlIHhzXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XG4gIHNlY3Rpb24uZmVhdHVyZSB7XG4gICAgLmNvbnRlbnQge1xuICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBwYWRkaW5nOiAzOHB4IDAgMCFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgLmluZm8ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAwIDQ0cHggMjBweDtcbiAgICAgICAgaDIge1xuICAgICAgICAgIEBpbmNsdWRlIGgyLW1vYjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIHAuc3ViIHtcbiAgICAgICAgICBAaW5jbHVkZSBib2R5LW1vYjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxOHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgcC50ZXh0IHtcbiAgICAgICAgICBAaW5jbHVkZSBoNC1tb2I7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICAgICAgfVxuICAgICAgICAuc2xpZGVyLWNvbnRyb2wge1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnBpY3R1cmUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuICAgICAgICBpbWcud2ViIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMzcHgsIDE3cHgsIDBweCk7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var FeatureComponent = /** @class */ (function () {
    function FeatureComponent(translateService) {
        this.translateService = translateService;
        this.multiPlatform = true;
        this.activePlatform = 'ios';
        this.toggleBgWidth = '79px';
        this.toggleBgLeft = '0px';
        this.lang = 'eng';
    }
    FeatureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translateService.onLangChange.subscribe(function (value) {
            _this.lang = value.lang === 'fr' ? value.lang : 'eng';
            if (_this.lang === 'fr') {
                _this.images.map(function (item) {
                    item.src = item.src.replace(new RegExp('eng', 'g'), 'fr');
                });
            }
            else {
                _this.images.map(function (item) {
                    item.src = item.src.replace(new RegExp('fr', 'g'), 'eng');
                });
            }
            _this.changePlatform(_this.activePlatform);
        });
    };
    FeatureComponent.prototype.changePlatform = function (platform, event) {
        var _this = this;
        if (event) {
            this.toggleBgLeft = event.target.offsetLeft + "px";
            this.toggleBgWidth = event.target.clientWidth + "px";
        }
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
        var _this = this;
        this.pixelratio = event.pixelratio;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
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

module.exports = "<div class=\"anchor\" #anchor></div>\n<nav *responsive=\"{ bootstrap: ['xl', 'lg', 'md'] }\" class=\"fixed-menu\" [ngClass]=\"{'fixed': isFixed, 'relative': isRelative}\" #fixedMenu>\n  <span [translate]=\"'FixedMenu.item-1'\" (click)=\"scrollTo('search')\"></span>\n  <span [translate]=\"'FixedMenu.item-2'\" (click)=\"scrollTo('design')\"></span>\n  <span [translate]=\"'FixedMenu.item-3'\" (click)=\"scrollTo('sync')\"></span>\n  <span [translate]=\"'FixedMenu.item-4'\" (click)=\"scrollTo('integration')\"></span>\n  <span [translate]=\"'FixedMenu.item-5'\" (click)=\"scrollTo('uptodate')\"></span>\n  <span [translate]=\"'FixedMenu.item-6'\" (click)=\"scrollTo('topics')\"></span>\n  <span [translate]=\"'FixedMenu.item-7'\" (click)=\"scrollTo('authors')\"></span>\n</nav>\n"

/***/ }),

/***/ "./src/app/pages/main-page/components/fixed-menu/fixed-menu.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/main-page/components/fixed-menu/fixed-menu.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Typographic\n * use ex. .title { @extend %h1; }\n */\nnav.fixed-menu span {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 23px;\n  font-size: 15px;\n  letter-spacing: 0.2px;\n  color: #333333; }\n/* Typographic mobile\n * use ex. .title { @extend %h1-mob; }\n */\na {\n  color: #21AE49;\n  text-decoration: none; }\nnav.fixed-menu {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  width: 100%;\n  height: 50px;\n  box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.08), 0px 1px 0px rgba(0, 0, 0, 0.09);\n  background-color: #ffffff;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 5; }\nnav.fixed-menu.relative {\n    position: relative;\n    height: 60px; }\nnav.fixed-menu.fixed {\n    height: 50px;\n    position: fixed;\n    top: 60px;\n    left: 0;\n    border-top: 1px solid #E7E7E7; }\nnav.fixed-menu span {\n    text-decoration: none;\n    margin-left: 61px; }\nnav.fixed-menu span:hover {\n      cursor: pointer; }\nnav.fixed-menu span:first-child {\n      margin-left: 0; }\n@media screen and (min-width: 960px) and (max-width: 1279px) {\n  nav.fixed-menu a {\n    font-style: normal;\n    font-weight: 500;\n    line-height: 24px;\n    font-size: 16px;\n    letter-spacing: 0.2px;\n    color: #999999;\n    color: #333333;\n    margin-left: 35px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9zdHlsZXMvX3VpLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2ZpeGVkLW1lbnUvZml4ZWQtbWVudS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL2NvbXBvbmVudHMvZml4ZWQtbWVudS9maXhlZC1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BOztFQ0pFO0FDQUY7RUZpREUsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixjQXZEWSxFQUFBO0FBa0ZkOztFQ3RFRTtBRDRMRjtFQUNFLGNBeE1jO0VBeU1kLHFCQUFxQixFQUFBO0FFek12QjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDZFQUE2RTtFQUM3RSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsVUFBVSxFQUFBO0FBWlo7SUFjSSxrQkFBa0I7SUFDbEIsWUFBWSxFQUFBO0FBZmhCO0lBa0JJLFlBQVk7SUFDWixlQUFlO0lBQ2YsU0FBUztJQUNULE9BQU87SUFDUCw2QkZwQmdCLEVBQUE7QUVGcEI7SUEwQkkscUJBQXFCO0lBQ3JCLGlCQUFpQixFQUFBO0FBM0JyQjtNQTZCTSxlQUFlLEVBQUE7QUE3QnJCO01BZ0NNLGNBQWMsRUFBQTtBQU1wQjtFQUNFO0lGMEJBLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsY0FyRVk7SUV5Q1IsY0YzQ1E7SUU0Q1IsaUJBQWlCLEVBQUEsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluLXBhZ2UvY29tcG9uZW50cy9maXhlZC1tZW51L2ZpeGVkLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2xvcnNcbiRtYWluOiAjMzMzMzMzO1xuJGFjdGlvbjogIzIxQUU0OTtcbiRncmV5OiAjOTk5OTk5O1xuJGxpZ2h0LWdyZXk6ICNFN0U3RTc7XG5cbi8qIFR5cG9ncmFwaGljXG4gKiB1c2UgZXguIC50aXRsZSB7IEBleHRlbmQgJWgxOyB9XG4gKi9cbiVoMSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBmb250LXNpemU6IDU2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbn1cbiVoMiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbn1cbiVoMyB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG59XG4laDQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xufVxuJWJvZHkge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVuYXZpZ2F0aW9uIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVzbGlkZXIge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRncmV5O1xufVxuQG1peGluIHNsaWRlciB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG4lY2FwdGlvbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5cbi8qIFR5cG9ncmFwaGljIG1vYmlsZVxuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMS1tb2I7IH1cbiAqL1xuJWgxLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoMS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogJG1haW47XG59XG4laDItbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGgyLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVoMy1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGgzLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBjb2xvcjogJG1haW47XG59XG4laDQtbW9iIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoNC1tb2Ige1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWJvZHktbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gYm9keS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVsb2NhbC1uYXZpZ2F0aW9uLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5AbWl4aW4gbG9jYWwtbmF2aWdhdGlvbi1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRncmV5O1xufVxuXG4vLyBCdXR0b25cbiVidXR0b24ge1xuICBiYWNrZ3JvdW5kOiAkYWN0aW9uO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYWN0aW9uO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEzcHg7XG4gIG1pbi13aWR0aDogMTgxLjk4cHg7XG4gIGhlaWdodDogNTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuJXN0b3JlcyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDE2MXB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmEge1xuICBjb2xvcjogJGFjdGlvbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIiwiLyogVHlwb2dyYXBoaWNcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDE7IH1cbiAqL1xubmF2LmZpeGVkLW1lbnUgc3BhbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogIzMzMzMzMzsgfVxuXG4vKiBUeXBvZ3JhcGhpYyBtb2JpbGVcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDEtbW9iOyB9XG4gKi9cbmEge1xuICBjb2xvcjogIzIxQUU0OTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbm5hdi5maXhlZC1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAtMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDgpLCAwcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogNTsgfVxuICBuYXYuZml4ZWQtbWVudS5yZWxhdGl2ZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNjBweDsgfVxuICBuYXYuZml4ZWQtbWVudS5maXhlZCB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDYwcHg7XG4gICAgbGVmdDogMDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0U3RTdFNzsgfVxuICBuYXYuZml4ZWQtbWVudSBzcGFuIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDYxcHg7IH1cbiAgICBuYXYuZml4ZWQtbWVudSBzcGFuOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgIG5hdi5maXhlZC1tZW51IHNwYW46Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgbmF2LmZpeGVkLW1lbnUgYSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICBjb2xvcjogIzk5OTk5OTtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBtYXJnaW4tbGVmdDogMzVweDsgfSB9XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdWknO1xuXG5uYXYuZml4ZWQtbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3gtc2hhZG93OiAwcHggLTFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgMHB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDU7XG4gICYucmVsYXRpdmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cbiAgJi5maXhlZCB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDYwcHg7XG4gICAgbGVmdDogMDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGxpZ2h0LWdyZXk7XG4gIH1cbiAgc3BhbiB7XG4gICAgQGV4dGVuZCAlbmF2aWdhdGlvbjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDYxcHg7XG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICB9XG59XG5cbi8vIHRhYmxldCBsYW5kc2NhcGVcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KXtcbiAgbmF2LmZpeGVkLW1lbnUge1xuICAgIGEge1xuICAgICAgQGluY2x1ZGUgc2xpZGVyO1xuICAgICAgY29sb3I6ICRtYWluO1xuICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */"

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
    FixedMenuComponent.prototype.scrollTo = function (id) {
        var element = document.getElementById(id);
        element.scrollIntoView(true);
        var scrolledY = window.scrollY;
        if (scrolledY) {
            window.scroll(0, scrolledY - 120);
        }
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

module.exports = "/* Typographic\n * use ex. .title { @extend %h1; }\n */\nfooter .main-content ul li a, footer .try p.text {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 23px;\n  font-size: 15px;\n  letter-spacing: 0.2px;\n  color: #333333; }\nfooter .main-content p {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 20px;\n  font-size: 14px;\n  letter-spacing: 0.1px;\n  color: #999999; }\n/* Typographic mobile\n * use ex. .title { @extend %h1-mob; }\n */\nfooter .main-content .buttons .try-button {\n  background: #21AE49;\n  border: 1px solid #21AE49;\n  border-radius: 4px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 28px;\n  font-size: 18px;\n  text-align: center;\n  color: #ffffff;\n  padding: 10px 10px 13px;\n  min-width: 181.98px;\n  height: 50px;\n  outline: none; }\nfooter .main-content .buttons .app-store, footer .main-content .buttons .play-store {\n  outline: none;\n  height: 50px;\n  width: 161px;\n  border: none; }\na {\n  color: #21AE49;\n  text-decoration: none; }\nfooter {\n  width: 100%;\n  border-top: 1px solid #E7E7E7;\n  padding: 45px 0 0 0;\n  display: flex;\n  flex-direction: column; }\nfooter .main-content {\n    width: 615px;\n    display: flex;\n    flex-direction: column;\n    align-self: center;\n    padding-bottom: 26px; }\nfooter .main-content .buttons {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: row;\n      width: 100%;\n      margin-bottom: 51px; }\nfooter .main-content .buttons .app-store {\n        background: transparent url('app-store.svg') no-repeat; }\nfooter .main-content .buttons .play-store {\n        margin: 0 12px;\n        background: transparent url('google-play.svg') no-repeat; }\nfooter .main-content ul {\n      width: 90%;\n      list-style: none;\n      display: flex;\n      justify-content: space-between;\n      margin: 0;\n      padding: 0;\n      align-self: center;\n      margin-bottom: 20px; }\nfooter .main-content p {\n      width: 100%;\n      text-align: center;\n      margin: 0; }\nfooter .try {\n    width: 100%;\n    height: 78px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    background: linear-gradient(0deg, #F9F9F9, #F9F9F9), linear-gradient(90deg, #FFFAEE 0%, #FFFEF1 100%); }\nfooter .try .icon {\n      width: 44px;\n      height: 44px;\n      background: transparent url('infectio-icon.svg') no-repeat center;\n      background-size: cover;\n      margin-right: 18px; }\nfooter .try a.try-link {\n      height: 40px;\n      margin-left: 18px;\n      background: #FFAF0C;\n      border-radius: 4px;\n      color: #ffffff;\n      padding: 8px 18px;\n      font-style: normal;\n      font-weight: 500;\n      line-height: 24px;\n      font-size: 16px; }\n@media screen and (max-width: 600px) {\n  footer {\n    padding: 50px 0 0 0; }\n    footer .main-content {\n      width: 100%; }\n      footer .main-content .buttons {\n        margin-bottom: 45px; }\n      footer .main-content ul {\n        flex-direction: column;\n        align-items: center;\n        margin-bottom: 14px; }\n        footer .main-content ul li {\n          margin-bottom: 16px; }\n    footer .try {\n      height: auto;\n      flex-direction: column;\n      padding: 28px 75px; }\n      footer .try .icon {\n        width: 64px;\n        height: 64px; }\n      footer .try p.text {\n        margin: 18px 0 16px;\n        font-style: normal;\n        font-weight: normal;\n        line-height: 23px;\n        font-size: 16px;\n        text-align: center;\n        letter-spacing: 0.2px; }\n      footer .try a.try-link {\n        margin-left: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9zdHlsZXMvX3VpLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWxleHphdmdvcm9kbmlpL1Byb2plY3RzL2xhbnRoaWVyLXByb21vc2l0ZS9zcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7O0VDSkU7QUNBRjtFRmlERSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGNBdkRZLEVBQUE7QUVDZDtFRnlFRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGNBN0VZLEVBQUE7QUFnRmQ7O0VDOURFO0FDbkJGO0VGaUxFLG1CQWpMYztFQWtMZCx5QkFsTGM7RUFtTGQsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWEsRUFBQTtBRTdMZjtFRmlNRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZLEVBQUE7QUFHZDtFQUNFLGNBeE1jO0VBeU1kLHFCQUFxQixFQUFBO0FFek12QjtFQUNFLFdBQVc7RUFDWCw2QkZBa0I7RUVDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtBQUx4QjtJQU9JLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixvQkFBb0IsRUFBQTtBQVh4QjtNQWFNLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQixXQUFXO01BQ1gsbUJBQW1CLEVBQUE7QUFsQnpCO1FBdUJRLHNEQUE0RSxFQUFBO0FBdkJwRjtRQTJCUSxjQUFjO1FBQ2Qsd0RBQThFLEVBQUE7QUE1QnRGO01BaUNNLFVBQVU7TUFDVixnQkFBZ0I7TUFDaEIsYUFBYTtNQUNiLDhCQUE4QjtNQUM5QixTQUFTO01BQ1QsVUFBVTtNQUNWLGtCQUFrQjtNQUNsQixtQkFBbUIsRUFBQTtBQXhDekI7TUFpRE0sV0FBVztNQUNYLGtCQUFrQjtNQUNsQixTQUFTLEVBQUE7QUFuRGY7SUF1REksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIscUdBQXFHLEVBQUE7QUE3RHpHO01BK0RNLFdBQVc7TUFDWCxZQUFZO01BQ1osaUVBQXVGO01BQ3ZGLHNCQUFzQjtNQUN0QixrQkFBa0IsRUFBQTtBQW5FeEI7TUF5RU0sWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsZUFBZSxFQUFBO0FBV3JCO0VBN0ZBO0lBK0ZJLG1CQUFtQixFQUFBO0lBL0Z2QjtNQWlHTSxXQUFXLEVBQUE7TUFqR2pCO1FBbUdRLG1CQUFtQixFQUFBO01BbkczQjtRQXNHUSxzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLG1CQUFtQixFQUFBO1FBVnpCO1VBWVEsbUJBQW1CLEVBQUE7SUExRzdCO01BK0dNLFlBQVk7TUFDWixzQkFBc0I7TUFDdEIsa0JBQWtCLEVBQUE7TUFqSHhCO1FBbUhRLFdBQVc7UUFDWCxZQUFZLEVBQUE7TUF0QmxCO1FBeUJNLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLHFCQUFxQixFQUFBO01BN0g3QjtRQWdJUSxjQUFjLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2xvcnNcbiRtYWluOiAjMzMzMzMzO1xuJGFjdGlvbjogIzIxQUU0OTtcbiRncmV5OiAjOTk5OTk5O1xuJGxpZ2h0LWdyZXk6ICNFN0U3RTc7XG5cbi8qIFR5cG9ncmFwaGljXG4gKiB1c2UgZXguIC50aXRsZSB7IEBleHRlbmQgJWgxOyB9XG4gKi9cbiVoMSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBmb250LXNpemU6IDU2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbn1cbiVoMiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbn1cbiVoMyB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG59XG4laDQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xufVxuJWJvZHkge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVuYXZpZ2F0aW9uIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVzbGlkZXIge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRncmV5O1xufVxuQG1peGluIHNsaWRlciB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG4lY2FwdGlvbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5cbi8qIFR5cG9ncmFwaGljIG1vYmlsZVxuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMS1tb2I7IH1cbiAqL1xuJWgxLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoMS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogJG1haW47XG59XG4laDItbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGgyLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVoMy1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGgzLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBjb2xvcjogJG1haW47XG59XG4laDQtbW9iIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoNC1tb2Ige1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWJvZHktbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gYm9keS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVsb2NhbC1uYXZpZ2F0aW9uLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5AbWl4aW4gbG9jYWwtbmF2aWdhdGlvbi1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRncmV5O1xufVxuXG4vLyBCdXR0b25cbiVidXR0b24ge1xuICBiYWNrZ3JvdW5kOiAkYWN0aW9uO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYWN0aW9uO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEzcHg7XG4gIG1pbi13aWR0aDogMTgxLjk4cHg7XG4gIGhlaWdodDogNTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuJXN0b3JlcyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDE2MXB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmEge1xuICBjb2xvcjogJGFjdGlvbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIiwiLyogVHlwb2dyYXBoaWNcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDE7IH1cbiAqL1xuZm9vdGVyIC5tYWluLWNvbnRlbnQgdWwgbGkgYSwgZm9vdGVyIC50cnkgcC50ZXh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAjMzMzMzMzOyB9XG5cbmZvb3RlciAubWFpbi1jb250ZW50IHAge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgY29sb3I6ICM5OTk5OTk7IH1cblxuLyogVHlwb2dyYXBoaWMgbW9iaWxlXG4gKiB1c2UgZXguIC50aXRsZSB7IEBleHRlbmQgJWgxLW1vYjsgfVxuICovXG5mb290ZXIgLm1haW4tY29udGVudCAuYnV0dG9ucyAudHJ5LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMyMUFFNDk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMUFFNDk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTNweDtcbiAgbWluLXdpZHRoOiAxODEuOThweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvdXRsaW5lOiBub25lOyB9XG5cbmZvb3RlciAubWFpbi1jb250ZW50IC5idXR0b25zIC5hcHAtc3RvcmUsIGZvb3RlciAubWFpbi1jb250ZW50IC5idXR0b25zIC5wbGF5LXN0b3JlIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTYxcHg7XG4gIGJvcmRlcjogbm9uZTsgfVxuXG5hIHtcbiAgY29sb3I6ICMyMUFFNDk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFN0U3RTc7XG4gIHBhZGRpbmc6IDQ1cHggMCAwIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgZm9vdGVyIC5tYWluLWNvbnRlbnQge1xuICAgIHdpZHRoOiA2MTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAyNnB4OyB9XG4gICAgZm9vdGVyIC5tYWluLWNvbnRlbnQgLmJ1dHRvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDUxcHg7IH1cbiAgICAgIGZvb3RlciAubWFpbi1jb250ZW50IC5idXR0b25zIC5hcHAtc3RvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvYXBwLXN0b3JlLnN2Z1wiKSBuby1yZXBlYXQ7IH1cbiAgICAgIGZvb3RlciAubWFpbi1jb250ZW50IC5idXR0b25zIC5wbGF5LXN0b3JlIHtcbiAgICAgICAgbWFyZ2luOiAwIDEycHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9nb29nbGUtcGxheS5zdmdcIikgbm8tcmVwZWF0OyB9XG4gICAgZm9vdGVyIC5tYWluLWNvbnRlbnQgdWwge1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cbiAgICBmb290ZXIgLm1haW4tY29udGVudCBwIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAwOyB9XG4gIGZvb3RlciAudHJ5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDc4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICNGOUY5RjksICNGOUY5RjkpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNGRkZBRUUgMCUsICNGRkZFRjEgMTAwJSk7IH1cbiAgICBmb290ZXIgLnRyeSAuaWNvbiB7XG4gICAgICB3aWR0aDogNDRweDtcbiAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbmZlY3Rpby1pY29uLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIG1hcmdpbi1yaWdodDogMThweDsgfVxuICAgIGZvb3RlciAudHJ5IGEudHJ5LWxpbmsge1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjRkZBRjBDO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBwYWRkaW5nOiA4cHggMThweDtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBmb290ZXIge1xuICAgIHBhZGRpbmc6IDUwcHggMCAwIDA7IH1cbiAgICBmb290ZXIgLm1haW4tY29udGVudCB7XG4gICAgICB3aWR0aDogMTAwJTsgfVxuICAgICAgZm9vdGVyIC5tYWluLWNvbnRlbnQgLmJ1dHRvbnMge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0NXB4OyB9XG4gICAgICBmb290ZXIgLm1haW4tY29udGVudCB1bCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7IH1cbiAgICAgICAgZm9vdGVyIC5tYWluLWNvbnRlbnQgdWwgbGkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7IH1cbiAgICBmb290ZXIgLnRyeSB7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcGFkZGluZzogMjhweCA3NXB4OyB9XG4gICAgICBmb290ZXIgLnRyeSAuaWNvbiB7XG4gICAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgICBoZWlnaHQ6IDY0cHg7IH1cbiAgICAgIGZvb3RlciAudHJ5IHAudGV4dCB7XG4gICAgICAgIG1hcmdpbjogMThweCAwIDE2cHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7IH1cbiAgICAgIGZvb3RlciAudHJ5IGEudHJ5LWxpbmsge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDsgfSB9XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdWknO1xuXG5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRsaWdodC1ncmV5O1xuICBwYWRkaW5nOiA0NXB4IDAgMCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAubWFpbi1jb250ZW50IHtcbiAgICB3aWR0aDogNjE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjZweDtcbiAgICAuYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNTFweDtcbiAgICAgIC50cnktYnV0dG9uIHtcbiAgICAgICAgQGV4dGVuZCAlYnV0dG9uO1xuICAgICAgfVxuICAgICAgLmFwcC1zdG9yZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2FwcC1zdG9yZS5zdmcnKSBuby1yZXBlYXQ7XG4gICAgICAgIEBleHRlbmQgJXN0b3JlcztcbiAgICAgIH1cbiAgICAgIC5wbGF5LXN0b3JlIHtcbiAgICAgICAgbWFyZ2luOiAwIDEycHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2dvb2dsZS1wbGF5LnN2ZycpIG5vLXJlcGVhdDtcbiAgICAgICAgQGV4dGVuZCAlc3RvcmVzO1xuICAgICAgfVxuICAgIH1cbiAgICB1bCB7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIGxpIHtcbiAgICAgICAgYSB7XG4gICAgICAgICAgQGV4dGVuZCAlbmF2aWdhdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBwIHtcbiAgICAgIEBleHRlbmQgJWNhcHRpb247XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbiAgLnRyeSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3OHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjRjlGOUY5LCAjRjlGOUY5KSwgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjRkZGQUVFIDAlLCAjRkZGRUYxIDEwMCUpO1xuICAgIC5pY29uIHtcbiAgICAgIHdpZHRoOiA0NHB4O1xuICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW5mZWN0aW8taWNvbi5zdmcnKSBuby1yZXBlYXQgY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIG1hcmdpbi1yaWdodDogMThweDtcbiAgICB9XG4gICAgcC50ZXh0IHtcbiAgICAgIEBleHRlbmQgJW5hdmlnYXRpb247XG4gICAgfVxuICAgIGEudHJ5LWxpbmsge1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjRkZBRjBDO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBwYWRkaW5nOiA4cHggMThweDtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdGFibGV0IHNtXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KXtcblxufVxuXG4vLyBtb2JpbGUgeHNcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcbiAgZm9vdGVyIHtcbiAgICBwYWRkaW5nOiA1MHB4IDAgMCAwO1xuICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAuYnV0dG9ucyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XG4gICAgICB9XG4gICAgICB1bCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC50cnkge1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHBhZGRpbmc6IDI4cHggNzVweDtcbiAgICAgIC5pY29uIHtcbiAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgIH1cbiAgICAgIHAudGV4dCB7XG4gICAgICAgIG1hcmdpbjogMThweCAwIDE2cHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICB9XG4gICAgICBhLnRyeS1saW5rIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

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

module.exports = "<header class=\"header\" [ngClass]=\"{'have-fixed-menu': haveFixedMenu, 'tablet-have-btns': showButtons}\">\n  <div class=\"right-side\">\n    <a href=\"/\" class=\"logo\">Lanthier</a>\n    <div class=\"buttons\" *ngIf=\"showButtons\">\n      <a href=\"#\" class=\"try-button\" [translate]=\"'Jumbo.button.try'\"></a>\n      <a href=\"#\" class=\"app-store\"></a>\n      <a href=\"#\" class=\"play-store\"></a>\n    </div>\n  </div>\n  <div class=\"left-side\">\n    <div *responsive=\"{ bootstrap: ['xl', 'lg'] }\" class=\"select-container\" (click)=\"selectLangIsOpen = !selectLangIsOpen\" (clickOutside)=\"onClickedOutside($event)\">\n      <span class=\"selected\">{{ selectedLangText }}</span>\n      <ul class=\"select-items\" *ngIf=\"selectLangIsOpen\" >\n        <li [ngClass]=\"{'active': selectedLangText === 'English'}\" (click)=\"changeLanguage($event, 'en')\">{{ selectedLangText === 'English' ? 'English' : 'Anglais' }}</li>\n        <li [ngClass]=\"{'active': selectedLangText === 'French'}\" (click)=\"changeLanguage($event, 'fr')\">{{ selectedLangText === 'English' ? 'French' : 'Français' }}</li>\n      </ul>\n    </div>\n    <div *responsive=\"{ bootstrap: ['xs', 'sm', 'md'] }\" class=\"select-container short\" (click)=\"selectLangIsOpen = !selectLangIsOpen\" (clickOutside)=\"onClickedOutside($event)\">\n      <span class=\"selected\">{{ selectedLangTextShort }}</span>\n      <ul class=\"select-items\" *ngIf=\"selectLangIsOpen\">\n        <li [ngClass]=\"{'active': selectedLangText === 'English'}\" (click)=\"changeLanguage($event, 'en', true)\">{{ selectedLangText === 'English' ? 'English' : 'Anglais' }}</li>\n        <li [ngClass]=\"{'active': selectedLangText === 'French'}\" (click)=\"changeLanguage($event, 'fr', true)\">{{ selectedLangText === 'English' ? 'French' : 'Français' }}</li>\n      </ul>\n    </div>\n    <button *responsive=\"{ bootstrap: ['xl', 'lg', 'md'] }\" class=\"login\" [translate]=\"'Header.login.button'\"></button>\n    <app-mobile-menu *responsive=\"{ bootstrap: ['xs', 'sm'] }\"></app-mobile-menu>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/pages/main-page/components/header/header.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/main-page/components/header/header.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Typographic\n * use ex. .title { @extend %h1; }\n */\n/* Typographic mobile\n * use ex. .title { @extend %h1-mob; }\n */\na {\n  color: #21AE49;\n  text-decoration: none; }\n.header {\n  width: 100%;\n  height: 60px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 104px 0 100px;\n  background: #ffffff;\n  position: fixed;\n  top: 0;\n  left: 0;\n  transition: height 100ms;\n  z-index: 6; }\n.header.have-fixed-menu {\n    height: 60px; }\n.header .right-side {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center; }\n.header .right-side .logo {\n      display: inline-block;\n      height: 38px;\n      padding: 0 0 0 51px;\n      background-image: url('logo.svg');\n      background-repeat: no-repeat;\n      background-position: left;\n      font-style: normal;\n      font-weight: bold;\n      line-height: 32px;\n      font-size: 24px;\n      letter-spacing: 0.2px;\n      text-decoration: none;\n      color: #333333;\n      outline: none; }\n.header .right-side .buttons {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: row;\n      width: 100%;\n      margin-left: 19px; }\n.header .right-side .buttons .try-button {\n        min-width: 155px;\n        height: 38px;\n        border: 1px solid #E7E7E7;\n        border-radius: 4px;\n        font-style: normal;\n        font-weight: 500;\n        line-height: 24px;\n        font-size: 16px;\n        color: #333333;\n        text-align: center;\n        padding: 5px 15px 5px; }\n.header .right-side .buttons .app-store {\n        background: transparent url('app-store-white.svg') no-repeat;\n        background-size: contain;\n        margin: 0 12px;\n        outline: none;\n        height: 38px;\n        width: 116.71px;\n        border: none; }\n.header .right-side .buttons .play-store {\n        background: transparent url('google-play-white.svg') no-repeat;\n        background-size: contain;\n        outline: none;\n        height: 38px;\n        width: 122.55px;\n        border: none; }\n.header .left-side {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    flex-direction: row; }\n.header .left-side .select-container {\n      position: relative;\n      background: transparent url('chevron-bottom.svg') no-repeat right;\n      padding: 0 28.21px 0 0; }\n.header .left-side .select-container:hover {\n        cursor: pointer; }\n.header .left-side .select-container .selected {\n        font-style: normal;\n        font-weight: normal;\n        line-height: 23px;\n        font-size: 16px;\n        letter-spacing: 0.2px;\n        color: #333333; }\n.header .left-side .select-container .select-items {\n        position: absolute;\n        top: 30px;\n        margin: 0;\n        padding: 10px 27px 9px 18px;\n        list-style: none;\n        font-style: normal;\n        font-weight: normal;\n        line-height: 23px;\n        font-size: 16px;\n        letter-spacing: 0.2px;\n        color: #333333;\n        background: #FFFFFF;\n        border: 0.5px solid #E7E7E7;\n        box-sizing: border-box;\n        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n        border-radius: 4px; }\n.header .left-side .select-container .select-items li:first-child {\n          margin-bottom: 7px; }\n.header .left-side .select-container .select-items .active {\n          font-weight: 500;\n          line-height: 24px;\n          font-size: 16px; }\n.header .left-side .login {\n      color: #333333;\n      padding: 7px 18px 6px;\n      outline: none;\n      border: 1px solid #E7E7E7;\n      background: transparent;\n      border-radius: 4px;\n      font-style: normal;\n      font-weight: normal;\n      line-height: 23px;\n      font-size: 16px;\n      letter-spacing: 0.2px;\n      margin-left: 48.79px; }\n.header .left-side .login:hover {\n        cursor: pointer; }\n@media screen and (min-width: 960px) and (max-width: 1279px) {\n  header.header {\n    width: 100vw;\n    height: 60px;\n    padding: 0 50px 0 50px; }\n    header.header.tablet-have-btns {\n      padding: 0 25px 0 36px; }\n      header.header.tablet-have-btns .right-side .logo {\n        font-style: normal;\n        font-weight: 500;\n        line-height: 36px;\n        font-size: 16px; }\n    header.header .right-side .logo {\n      font-style: normal;\n      font-weight: bold;\n      line-height: 37px;\n      font-size: 24px;\n      letter-spacing: 0.2px; } }\n@media screen and (min-width: 601px) and (max-width: 959px) {\n  header.header {\n    width: 100vw;\n    height: 60px;\n    padding: 0 16px 0 18px; }\n    header.header .right-side .logo {\n      font-weight: bold;\n      line-height: 37px;\n      font-size: 24px; }\n    header.header .right-side .buttons {\n      display: none; } }\n@media screen and (max-width: 600px) {\n  header.header {\n    width: 100vw;\n    height: 60px;\n    padding: 0 16px 0 18px;\n    border-bottom: 1px solid #E7E7E7; }\n    header.header .right-side .logo {\n      font-weight: bold;\n      line-height: 37px;\n      font-size: 24px; }\n    header.header .right-side .buttons {\n      display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9zdHlsZXMvX3VpLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWxleHphdmdvcm9kbmlpL1Byb2plY3RzL2xhbnRoaWVyLXByb21vc2l0ZS9zcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7O0VDSkU7QURpRkY7O0VDOUVFO0FEb01GO0VBQ0UsY0F4TWM7RUF5TWQscUJBQXFCLEVBQUE7QUV6TXZCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLHdCQUF3QjtFQUN4QixVQUFVLEVBQUE7QUFaWjtJQWNJLFlBQVksRUFBQTtBQWRoQjtJQWlCSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQixFQUFBO0FBbkJ2QjtNQXFCTSxxQkFBcUI7TUFDckIsWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixpQ0FBdUQ7TUFDdkQsNEJBQTRCO01BQzVCLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YscUJBQXFCO01BQ3JCLHFCQUFxQjtNQUNyQixjRmxDUTtNRW1DUixhQUFhLEVBQUE7QUFsQ25CO01BcUNNLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQixXQUFXO01BQ1gsaUJBQWlCLEVBQUE7QUExQ3ZCO1FBNENRLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1oseUJGNUNZO1FFNkNaLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsY0ZyRE07UUVzRE4sa0JBQWtCO1FBQ2xCLHFCQUFxQixFQUFBO0FBdEQ3QjtRQXlEUSw0REFBa0Y7UUFDbEYsd0JBQXdCO1FBQ3hCLGNBQWM7UUFDZCxhQUFhO1FBQ2IsWUFBWTtRQUNaLGVBQWU7UUFDZixZQUFZLEVBQUE7QUEvRHBCO1FBa0VRLDhEQUFvRjtRQUNwRix3QkFBd0I7UUFDeEIsYUFBYTtRQUNiLFlBQVk7UUFDWixlQUFlO1FBQ2YsWUFBWSxFQUFBO0FBdkVwQjtJQTRFSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixtQkFBbUIsRUFBQTtBQS9FdkI7TUFpRk0sa0JBQWtCO01BQ2xCLGlFQUF1RjtNQUN2RixzQkFBc0IsRUFBQTtBQW5GNUI7UUFxRlEsZUFBZSxFQUFBO0FBckZ2QjtRQXdGUSxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLGNGOUZNLEVBQUE7QUVDZDtRQWdHUSxrQkFBa0I7UUFDbEIsU0FBUztRQUNULFNBQVM7UUFDVCwyQkFBMkI7UUFDM0IsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsY0YzR007UUU0R04sbUJBQW1CO1FBQ25CLDJCQUEyQjtRQUMzQixzQkFBc0I7UUFDdEIseUNBQXlDO1FBQ3pDLGtCQUFrQixFQUFBO0FBL0cxQjtVQWlIVSxrQkFBa0IsRUFBQTtBQWpINUI7VUFvSFUsZ0JBQWdCO1VBQ2hCLGlCQUFpQjtVQUNqQixlQUFlLEVBQUE7QUF0SHpCO01BMkhNLGNGNUhRO01FNkhSLHFCQUFxQjtNQUNyQixhQUFhO01BQ2IseUJGNUhjO01FNkhkLHVCQUF1QjtNQUN2QixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLHFCQUFxQjtNQUNyQixvQkFBb0IsRUFBQTtBQXRJMUI7UUF3SVEsZUFBZSxFQUFBO0FBT3ZCO0VBQ0U7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLHNCQUFzQixFQUFBO0lBSHhCO01BS0ksc0JBQXNCLEVBQUE7TUFMMUI7UUFRUSxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixlQUFlLEVBQUE7SUFYdkI7TUFpQk0sa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLHFCQUFxQixFQUFBLEVBQ3RCO0FBTVA7RUFDRTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osc0JBQXNCLEVBQUE7SUFIeEI7TUFNTSxpQkFBaUI7TUFDakIsaUJBQWlCO01BQ2pCLGVBQWUsRUFBQTtJQVJyQjtNQVdNLGFBQWEsRUFBQSxFQUNkO0FBTVA7RUFDRTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGdDRmxNZ0IsRUFBQTtJRThMbEI7TUFPTSxpQkFBaUI7TUFDakIsaUJBQWlCO01BQ2pCLGVBQWUsRUFBQTtJQVRyQjtNQVlNLGFBQWEsRUFBQSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbG9yc1xuJG1haW46ICMzMzMzMzM7XG4kYWN0aW9uOiAjMjFBRTQ5O1xuJGdyZXk6ICM5OTk5OTk7XG4kbGlnaHQtZ3JleTogI0U3RTdFNztcblxuLyogVHlwb2dyYXBoaWNcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDE7IH1cbiAqL1xuJWgxIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIGZvbnQtc2l6ZTogNTZweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xufVxuJWgyIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xufVxuJWgzIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogJG1haW47XG4gIG1hcmdpbjogMDtcbn1cbiVoNCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG59XG4lYm9keSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJW5hdmlnYXRpb24ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJXNsaWRlciB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5AbWl4aW4gc2xpZGVyIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAkZ3JleTtcbn1cbiVjYXB0aW9uIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gIGNvbG9yOiAkZ3JleTtcbn1cblxuLyogVHlwb2dyYXBoaWMgbW9iaWxlXG4gKiB1c2UgZXguIC50aXRsZSB7IEBleHRlbmQgJWgxLW1vYjsgfVxuICovXG4laDEtbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGgxLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVoMi1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gaDItbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWgzLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gaDMtbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVoNC1tb2Ige1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGg0LW1vYiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogJG1haW47XG59XG4lYm9keS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBib2R5LW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWxvY2FsLW5hdmlnYXRpb24tbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAkZ3JleTtcbn1cbkBtaXhpbiBsb2NhbC1uYXZpZ2F0aW9uLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5cbi8vIEJ1dHRvblxuJWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICRhY3Rpb247XG4gIGJvcmRlcjogMXB4IHNvbGlkICRhY3Rpb247XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTNweDtcbiAgbWluLXdpZHRoOiAxODEuOThweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4lc3RvcmVzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTYxcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuYSB7XG4gIGNvbG9yOiAkYWN0aW9uO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iLCIvKiBUeXBvZ3JhcGhpY1xuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMTsgfVxuICovXG4vKiBUeXBvZ3JhcGhpYyBtb2JpbGVcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDEtbW9iOyB9XG4gKi9cbmEge1xuICBjb2xvcjogIzIxQUU0OTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbi5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTA0cHggMCAxMDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IGhlaWdodCAxMDBtcztcbiAgei1pbmRleDogNjsgfVxuICAuaGVhZGVyLmhhdmUtZml4ZWQtbWVudSB7XG4gICAgaGVpZ2h0OiA2MHB4OyB9XG4gIC5oZWFkZXIgLnJpZ2h0LXNpZGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgICAuaGVhZGVyIC5yaWdodC1zaWRlIC5sb2dvIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGhlaWdodDogMzhweDtcbiAgICAgIHBhZGRpbmc6IDAgMCAwIDUxcHg7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvbG9nby5zdmdcIik7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAuaGVhZGVyIC5yaWdodC1zaWRlIC5idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tbGVmdDogMTlweDsgfVxuICAgICAgLmhlYWRlciAucmlnaHQtc2lkZSAuYnV0dG9ucyAudHJ5LWJ1dHRvbiB7XG4gICAgICAgIG1pbi13aWR0aDogMTU1cHg7XG4gICAgICAgIGhlaWdodDogMzhweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0U3RTdFNztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4IDVweDsgfVxuICAgICAgLmhlYWRlciAucmlnaHQtc2lkZSAuYnV0dG9ucyAuYXBwLXN0b3JlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2FwcC1zdG9yZS13aGl0ZS5zdmdcIikgbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIG1hcmdpbjogMCAxMnB4O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBoZWlnaHQ6IDM4cHg7XG4gICAgICAgIHdpZHRoOiAxMTYuNzFweDtcbiAgICAgICAgYm9yZGVyOiBub25lOyB9XG4gICAgICAuaGVhZGVyIC5yaWdodC1zaWRlIC5idXR0b25zIC5wbGF5LXN0b3JlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2dvb2dsZS1wbGF5LXdoaXRlLnN2Z1wiKSBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiAzOHB4O1xuICAgICAgICB3aWR0aDogMTIyLjU1cHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTsgfVxuICAuaGVhZGVyIC5sZWZ0LXNpZGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cbiAgICAuaGVhZGVyIC5sZWZ0LXNpZGUgLnNlbGVjdC1jb250YWluZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2NoZXZyb24tYm90dG9tLnN2Z1wiKSBuby1yZXBlYXQgcmlnaHQ7XG4gICAgICBwYWRkaW5nOiAwIDI4LjIxcHggMCAwOyB9XG4gICAgICAuaGVhZGVyIC5sZWZ0LXNpZGUgLnNlbGVjdC1jb250YWluZXI6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIC5oZWFkZXIgLmxlZnQtc2lkZSAuc2VsZWN0LWNvbnRhaW5lciAuc2VsZWN0ZWQge1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7IH1cbiAgICAgIC5oZWFkZXIgLmxlZnQtc2lkZSAuc2VsZWN0LWNvbnRhaW5lciAuc2VsZWN0LWl0ZW1zIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDMwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMTBweCAyN3B4IDlweCAxOHB4O1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAgIGJvcmRlcjogMC41cHggc29saWQgI0U3RTdFNztcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDsgfVxuICAgICAgICAuaGVhZGVyIC5sZWZ0LXNpZGUgLnNlbGVjdC1jb250YWluZXIgLnNlbGVjdC1pdGVtcyBsaTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4OyB9XG4gICAgICAgIC5oZWFkZXIgLmxlZnQtc2lkZSAuc2VsZWN0LWNvbnRhaW5lciAuc2VsZWN0LWl0ZW1zIC5hY3RpdmUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4OyB9XG4gICAgLmhlYWRlciAubGVmdC1zaWRlIC5sb2dpbiB7XG4gICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgIHBhZGRpbmc6IDdweCAxOHB4IDZweDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTdFN0U3O1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICBtYXJnaW4tbGVmdDogNDguNzlweDsgfVxuICAgICAgLmhlYWRlciAubGVmdC1zaWRlIC5sb2dpbjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICBoZWFkZXIuaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHBhZGRpbmc6IDAgNTBweCAwIDUwcHg7IH1cbiAgICBoZWFkZXIuaGVhZGVyLnRhYmxldC1oYXZlLWJ0bnMge1xuICAgICAgcGFkZGluZzogMCAyNXB4IDAgMzZweDsgfVxuICAgICAgaGVhZGVyLmhlYWRlci50YWJsZXQtaGF2ZS1idG5zIC5yaWdodC1zaWRlIC5sb2dvIHtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4OyB9XG4gICAgaGVhZGVyLmhlYWRlciAucmlnaHQtc2lkZSAubG9nbyB7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4OyB9IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICBoZWFkZXIuaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHBhZGRpbmc6IDAgMTZweCAwIDE4cHg7IH1cbiAgICBoZWFkZXIuaGVhZGVyIC5yaWdodC1zaWRlIC5sb2dvIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gICAgICBmb250LXNpemU6IDI0cHg7IH1cbiAgICBoZWFkZXIuaGVhZGVyIC5yaWdodC1zaWRlIC5idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBoZWFkZXIuaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHBhZGRpbmc6IDAgMTZweCAwIDE4cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFN0U3RTc7IH1cbiAgICBoZWFkZXIuaGVhZGVyIC5yaWdodC1zaWRlIC5sb2dvIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gICAgICBmb250LXNpemU6IDI0cHg7IH1cbiAgICBoZWFkZXIuaGVhZGVyIC5yaWdodC1zaWRlIC5idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3VpJztcblxuLmhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxMDRweCAwIDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDEwMG1zO1xuICB6LWluZGV4OiA2O1xuICAmLmhhdmUtZml4ZWQtbWVudSB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG4gIC5yaWdodC1zaWRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5sb2dvIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGhlaWdodDogMzhweDtcbiAgICAgIHBhZGRpbmc6IDAgMCAwIDUxcHg7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvbG9nby5zdmdcIik7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogJG1haW47XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgICAuYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDE5cHg7XG4gICAgICAudHJ5LWJ1dHRvbiB7XG4gICAgICAgIG1pbi13aWR0aDogMTU1cHg7XG4gICAgICAgIGhlaWdodDogMzhweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0LWdyZXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogJG1haW47XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogNXB4IDE1cHggNXB4O1xuICAgICAgfVxuICAgICAgLmFwcC1zdG9yZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2FwcC1zdG9yZS13aGl0ZS5zdmcnKSBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgbWFyZ2luOiAwIDEycHg7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGhlaWdodDogMzhweDtcbiAgICAgICAgd2lkdGg6IDExNi43MXB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB9XG4gICAgICAucGxheS1zdG9yZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2dvb2dsZS1wbGF5LXdoaXRlLnN2ZycpIG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBoZWlnaHQ6IDM4cHg7XG4gICAgICAgIHdpZHRoOiAxMjIuNTVweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAubGVmdC1zaWRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC5zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9jaGV2cm9uLWJvdHRvbS5zdmdcIikgbm8tcmVwZWF0IHJpZ2h0O1xuICAgICAgcGFkZGluZzogMCAyOC4yMXB4IDAgMDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICAuc2VsZWN0ZWQge1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgICAgY29sb3I6ICRtYWluO1xuICAgICAgfVxuICAgICAgLnNlbGVjdC1pdGVtcyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjdweCA5cHggMThweDtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgIGNvbG9yOiAkbWFpbjtcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRTdFN0U3O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBsaTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgICAgICB9XG4gICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5sb2dpbiB7XG4gICAgICBjb2xvcjogJG1haW47XG4gICAgICBwYWRkaW5nOiA3cHggMThweCA2cHg7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0LWdyZXk7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0OC43OXB4O1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gdGFibGV0IGxhbmRzY2FwZVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpe1xuICBoZWFkZXIuaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHBhZGRpbmc6IDAgNTBweCAwIDUwcHg7XG4gICAgJi50YWJsZXQtaGF2ZS1idG5zIHtcbiAgICAgIHBhZGRpbmc6IDAgMjVweCAwIDM2cHg7XG4gICAgICAucmlnaHQtc2lkZSB7XG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnJpZ2h0LXNpZGUge1xuICAgICAgLmxvZ28ge1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsaW5lLWhlaWdodDogMzdweDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIHRhYmxldCBzbVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCl7XG4gIGhlYWRlci5oZWFkZXIge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgcGFkZGluZzogMCAxNnB4IDAgMThweDtcbiAgICAucmlnaHQtc2lkZSB7XG4gICAgICAubG9nbyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsaW5lLWhlaWdodDogMzdweDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgfVxuICAgICAgLmJ1dHRvbnMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBtb2JpbGUgeHNcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcbiAgaGVhZGVyLmhlYWRlciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBwYWRkaW5nOiAwIDE2cHggMCAxOHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlnaHQtZ3JleTtcbiAgICAucmlnaHQtc2lkZSB7XG4gICAgICAubG9nbyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsaW5lLWhlaWdodDogMzdweDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgfVxuICAgICAgLmJ1dHRvbnMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

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
        this.lang = 'eng';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translateService.onLangChange.subscribe(function (value) {
            _this.lang = value.lang === 'fr' ? value.lang : 'eng';
            if (_this.lang === 'fr') {
                _this.selectedLangText = 'Français';
                _this.selectedLangTextShort = 'Frn';
            }
            else {
                _this.selectedLangText = 'English';
                _this.selectedLangTextShort = 'Eng';
            }
        });
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
            this.selectedLangTextShort = 'Eng';
        }
        else {
            this.selectedLangText = 'Français';
            this.selectedLangTextShort = 'Frn';
        }
        if (lang === 'en' && forShort) {
        }
        else if (lang === 'fr' && forShort) {
        }
        this.translateService.use(lang);
        this.selectLangIsOpen = false;
    };
    HeaderComponent.prototype.onClickedOutside = function (event) {
        if (event.target.className !== 'select-items') {
            this.selectLangIsOpen = false;
        }
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

module.exports = "<user-agent-info (info)=\"thisUserAgent($event)\"></user-agent-info>\n<section class=\"jumbotron\">\n  <h1 [translate]=\"'Jumbo.h1'\"></h1>\n  <span *responsive=\"{ bootstrap: ['xl', 'lg', 'md'] }\" class=\"subscription\" [translate]=\"'Jumbo.subscription'\"></span>\n  <span *responsive=\"{ bootstrap: ['sm', 'xs'] }\" class=\"subscription mob-1\" [translate]=\"'Jumbo.subscription-mob-1'\"></span>\n  <span *responsive=\"{ bootstrap: ['sm', 'xs'] }\" class=\"subscription mob-2\" [translate]=\"'Jumbo.subscription-mob-2'\"></span>\n  <div #buttons class=\"buttons\">\n    <a *responsive=\"{ bootstrap: ['xl', 'lg', 'md', 'sm'] }\" href=\"#\" class=\"try-button\" [translate]=\"'Jumbo.button.try'\"></a>\n    <a href=\"#\" class=\"app-store\"></a>\n    <a href=\"#\" class=\"play-store\"></a>\n  </div>\n  <span *responsive=\"{ bootstrap: ['xl', 'lg', 'md', 'sm'] }\" class=\"info\" [translate]=\"'Jumbo.info'\"></span>\n  <div class=\"temp-block\" *responsive=\"{ bootstrap: ['xl', 'lg', 'md'] }\" >\n    <img class=\"web\" [src]=\"webImage\" alt=\"web\">\n    <img class=\"ipad\" [src]=\"tabletImage\" alt=\"ipad\">\n    <img class=\"iphone\" [src]=\"iosImage\" alt=\"iphone\">\n    <img class=\"android\" [src]=\"androidImage\" alt=\"android\">\n  </div>\n  <div class=\"temp-block mob\" *responsive=\"{ bootstrap: ['sm', 'xs'] }\">\n    <img class=\"web\" [src]=\"webImage\" alt=\"web\">\n    <img class=\"ipad\" [src]=\"tabletImage\" alt=\"ipad\">\n    <img class=\"iphone\" [src]=\"iosImage\" alt=\"iphone\">\n    <img class=\"android\" [src]=\"androidImage\" alt=\"android\">\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/main-page/components/jumbotron/jumbotron.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/main-page/components/jumbotron/jumbotron.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Typographic\n * use ex. .title { @extend %h1; }\n */\nsection.jumbotron h1 {\n  font-style: normal;\n  font-weight: bold;\n  line-height: 60px;\n  font-size: 56px;\n  color: #333333;\n  margin: 0;\n  letter-spacing: -1px; }\nsection.jumbotron .subscription {\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  font-size: 18px;\n  color: #333333;\n  margin: 0; }\nsection.jumbotron span.info {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 24px;\n  font-size: 16px;\n  color: #333333; }\n/* Typographic mobile\n * use ex. .title { @extend %h1-mob; }\n */\nsection.jumbotron .buttons .try-button {\n  background: #21AE49;\n  border: 1px solid #21AE49;\n  border-radius: 4px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 28px;\n  font-size: 18px;\n  text-align: center;\n  color: #ffffff;\n  padding: 10px 10px 13px;\n  min-width: 181.98px;\n  height: 50px;\n  outline: none; }\nsection.jumbotron .buttons .app-store, section.jumbotron .buttons .play-store {\n  outline: none;\n  height: 50px;\n  width: 161px;\n  border: none; }\na {\n  color: #21AE49;\n  text-decoration: none; }\nsection.jumbotron {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 78px 100px 46px;\n  margin-top: 80px; }\nsection.jumbotron h1 {\n    margin-bottom: 35px; }\nsection.jumbotron .subscription {\n    margin-bottom: 28px;\n    padding: 6px 20px;\n    background: url('marker.svg') center no-repeat;\n    background-size: cover; }\nsection.jumbotron .buttons {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    width: 100%;\n    margin-bottom: 19px; }\nsection.jumbotron .buttons .app-store {\n      background: transparent url('app-store.svg') no-repeat;\n      margin: 0 12px; }\nsection.jumbotron .buttons .play-store {\n      background: transparent url('google-play.svg') no-repeat; }\nsection.jumbotron span.info {\n    color: #999999;\n    margin-bottom: 55px; }\nsection.jumbotron .temp-block {\n    max-width: 1279px;\n    width: 100%;\n    height: 510px;\n    padding: 0 84px 0;\n    position: relative; }\nsection.jumbotron .temp-block img {\n      width: auto;\n      position: absolute;\n      top: 0; }\nsection.jumbotron .temp-block img.web {\n        height: 510px;\n        left: 0; }\nsection.jumbotron .temp-block img.ipad {\n        height: 493px;\n        left: 30%;\n        top: 9px; }\nsection.jumbotron .temp-block img.iphone {\n        height: 490px;\n        right: 127px;\n        top: 9px; }\nsection.jumbotron .temp-block img.android {\n        height: 496px;\n        right: 0;\n        top: 7px; }\n@media screen and (max-width: 1279px) {\n  section.jumbotron .temp-block {\n    height: 410px; }\n    section.jumbotron .temp-block img.web {\n      height: 410px; }\n    section.jumbotron .temp-block img.ipad {\n      height: 395px;\n      left: 25%; }\n    section.jumbotron .temp-block img.iphone {\n      height: 394px; }\n    section.jumbotron .temp-block img.android {\n      height: 394px; } }\n@media screen and (min-width: 601px) and (max-width: 959px) {\n  section.jumbotron {\n    padding: 33px 21px 46px;\n    margin-top: 60px; }\n    section.jumbotron h1 {\n      font-style: normal;\n      font-weight: bold;\n      line-height: 60px;\n      font-size: 40px;\n      color: #333333;\n      text-align: center;\n      margin: 0 5px 35px; }\n    section.jumbotron .buttons .app-store {\n      margin: 0 12px; }\n    section.jumbotron .subscription {\n      font-style: normal;\n      font-weight: 500;\n      line-height: 26px;\n      font-size: 17px;\n      text-align: center;\n      background-size: cover;\n      margin-bottom: 0;\n      width: 100%;\n      display: inline-block;\n      padding: 1px 20px; }\n      section.jumbotron .subscription.mob-1 {\n        background: url('marker-mob-1.svg') center no-repeat; }\n      section.jumbotron .subscription.mob-2 {\n        background: url('marker-mob-2.svg') center no-repeat;\n        margin-bottom: 32px; }\n    section.jumbotron .temp-block {\n      height: 380px; }\n      section.jumbotron .temp-block img.web {\n        height: 380px; }\n      section.jumbotron .temp-block img.ipad {\n        height: 365px;\n        left: 20%; }\n      section.jumbotron .temp-block img.iphone {\n        height: 364px; }\n      section.jumbotron .temp-block img.android {\n        height: 370px; } }\n@media screen and (max-width: 600px) {\n  section.jumbotron {\n    padding: 33px 21px 46px;\n    margin-top: 60px; }\n    section.jumbotron h1 {\n      font-style: normal;\n      font-weight: bold;\n      line-height: 46px;\n      font-size: 36px;\n      color: #333333;\n      text-align: center;\n      margin: 0 5px 20px; }\n    section.jumbotron .buttons .app-store {\n      margin: 0 12px 0 0; }\n    section.jumbotron .subscription {\n      font-style: normal;\n      font-weight: 500;\n      line-height: 26px;\n      font-size: 17px;\n      text-align: center;\n      background-size: cover;\n      margin-bottom: 0;\n      width: 100%;\n      display: inline-block;\n      padding: 1px 20px; }\n      section.jumbotron .subscription.mob-1 {\n        background: url('marker-mob-1.svg') center no-repeat; }\n      section.jumbotron .subscription.mob-2 {\n        background: url('marker-mob-2.svg') center no-repeat;\n        margin-bottom: 55px; }\n    section.jumbotron .temp-block.mob {\n      width: 100vw;\n      overflow-x: hidden;\n      padding: 0 15px 0 21px;\n      height: 100vw; }\n      section.jumbotron .temp-block.mob img {\n        width: auto;\n        height: calc(100vw / 2); }\n        section.jumbotron .temp-block.mob img.web {\n          top: 0;\n          left: 31%; }\n        section.jumbotron .temp-block.mob img.ipad {\n          top: auto;\n          left: 21px;\n          bottom: 0; }\n        section.jumbotron .temp-block.mob img.iphone {\n          top: 0;\n          left: 21px; }\n        section.jumbotron .temp-block.mob img.android {\n          bottom: 0;\n          top: auto;\n          right: 15px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9zdHlsZXMvX3VpLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2p1bWJvdHJvbi9qdW1ib3Ryb24uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWxleHphdmdvcm9kbmlpL1Byb2plY3RzL2xhbnRoaWVyLXByb21vc2l0ZS9zcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL2p1bWJvdHJvbi9qdW1ib3Ryb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7O0VDSkU7QUNBRjtFRlFFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQWJZO0VBY1osU0FBUztFQUNULG9CQUFvQixFQUFBO0FFZHRCO0VGa0NFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQXZDWTtFQXdDWixTQUFTLEVBQUE7QUV2Q1g7RUYwQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBL0NZLEVBQUE7QUFrRmQ7O0VDdERFO0FDM0JGO0VGaUxFLG1CQWpMYztFQWtMZCx5QkFsTGM7RUFtTGQsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWEsRUFBQTtBRTdMZjtFRmlNRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZLEVBQUE7QUFHZDtFQUNFLGNBeE1jO0VBeU1kLHFCQUFxQixFQUFBO0FFek12QjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsZ0JBQWdCLEVBQUE7QUFObEI7SUFTSSxtQkFBbUIsRUFBQTtBQVR2QjtJQWFJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsOENBQW9FO0lBQ3BFLHNCQUFzQixFQUFBO0FBaEIxQjtJQW1CSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLG1CQUFtQixFQUFBO0FBeEJ2QjtNQTZCTSxzREFBNEU7TUFDNUUsY0FBYyxFQUFBO0FBOUJwQjtNQWtDTSx3REFBOEUsRUFBQTtBQWxDcEY7SUF3Q0ksY0Z2Q1U7SUV3Q1YsbUJBQW1CLEVBQUE7QUF6Q3ZCO0lBNENJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTtBQWhEdEI7TUFrRE0sV0FBVztNQUNYLGtCQUFrQjtNQUNsQixNQUFNLEVBQUE7QUFwRFo7UUFzRFEsYUFBYTtRQUNiLE9BQU8sRUFBQTtBQXZEZjtRQTBEUSxhQUFhO1FBQ2IsU0FBUztRQUNULFFBQVEsRUFBQTtBQTVEaEI7UUErRFEsYUFBYTtRQUNiLFlBQVk7UUFDWixRQUFRLEVBQUE7QUFqRWhCO1FBb0VRLGFBQWE7UUFDYixRQUFRO1FBQ1IsUUFBUSxFQUFBO0FBTWhCO0VBNUVBO0lBK0VNLGFBQWEsRUFBQTtJQS9FbkI7TUFrRlUsYUFBYSxFQUFBO0lBbEZ2QjtNQXFGVSxhQUFhO01BQ2IsU0FBUyxFQUFBO0lBdEZuQjtNQXlGVSxhQUFhLEVBQUE7SUF6RnZCO01BNEZVLGFBQWEsRUFBQSxFQUNkO0FBT1Q7RUFwR0E7SUFzR0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQixFQUFBO0lBdkdwQjtNQXlHTSxrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsY0Y5R1E7TUUrR1Isa0JBQWtCO01BQ2xCLGtCQUFrQixFQUFBO0lBL0d4QjtNQW1IUSxjQUFjLEVBQUE7SUFuSHRCO01BdUhNLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsc0JBQXNCO01BQ3RCLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gscUJBQXFCO01BQ3JCLGlCQUFpQixFQUFBO01BM0JyQjtRQTZCTSxvREFBMEUsRUFBQTtNQTdCaEY7UUFnQ00sb0RBQTBFO1FBQzFFLG1CQUFtQixFQUFBO0lBdEkzQjtNQTBJTSxhQUFhLEVBQUE7TUExSW5CO1FBNklVLGFBQWEsRUFBQTtNQTdJdkI7UUFnSlUsYUFBYTtRQUNiLFNBQVMsRUFBQTtNQWpKbkI7UUFvSlUsYUFBYSxFQUFBO01BcEp2QjtRQXVKVSxhQUFhLEVBQUEsRUFDZDtBQU9UO0VBL0pBO0lBaUtJLHVCQUF1QjtJQUN2QixnQkFBZ0IsRUFBQTtJQWxLcEI7TUFvS00sa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGNGektRO01FMEtSLGtCQUFrQjtNQUNsQixrQkFBa0IsRUFBQTtJQTFLeEI7TUE4S1Esa0JBQWtCLEVBQUE7SUE5SzFCO01Ba0xNLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsc0JBQXNCO01BQ3RCLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gscUJBQXFCO01BQ3JCLGlCQUFpQixFQUFBO01BdEZyQjtRQXdGTSxvREFBMEUsRUFBQTtNQXhGaEY7UUEyRk0sb0RBQTBFO1FBQzFFLG1CQUFtQixFQUFBO0lBakN6QjtNQXFDSSxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLHNCQUFzQjtNQUN0QixhQUFhLEVBQUE7TUF4Q2pCO1FBMENNLFdBQVc7UUFDWCx1QkFBdUIsRUFBQTtRQTNDN0I7VUE2Q1EsTUFBTTtVQUNOLFNBQVMsRUFBQTtRQTlDakI7VUFpRFEsU0FBUztVQUNULFVBQVU7VUFDVixTQUFTLEVBQUE7UUFuRGpCO1VBc0RRLE1BQU07VUFDTixVQUFVLEVBQUE7UUF2RGxCO1VBMERRLFNBQVM7VUFDVCxTQUFTO1VBQ1QsV0FBVyxFQUFBLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluLXBhZ2UvY29tcG9uZW50cy9qdW1ib3Ryb24vanVtYm90cm9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29sb3JzXG4kbWFpbjogIzMzMzMzMztcbiRhY3Rpb246ICMyMUFFNDk7XG4kZ3JleTogIzk5OTk5OTtcbiRsaWdodC1ncmV5OiAjRTdFN0U3O1xuXG4vKiBUeXBvZ3JhcGhpY1xuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMTsgfVxuICovXG4laDEge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiA1NnB4O1xuICBjb2xvcjogJG1haW47XG4gIG1hcmdpbjogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG59XG4laDIge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogJG1haW47XG4gIG1hcmdpbjogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG59XG4laDMge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xufVxuJWg0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogJG1haW47XG4gIG1hcmdpbjogMDtcbn1cbiVib2R5IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogJG1haW47XG59XG4lbmF2aWdhdGlvbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJG1haW47XG59XG4lc2xpZGVyIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAkZ3JleTtcbn1cbkBtaXhpbiBzbGlkZXIge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRncmV5O1xufVxuJWNhcHRpb24ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgY29sb3I6ICRncmV5O1xufVxuXG4vKiBUeXBvZ3JhcGhpYyBtb2JpbGVcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDEtbW9iOyB9XG4gKi9cbiVoMS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gaDEtbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWgyLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoMi1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogJG1haW47XG59XG4laDMtbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoMy1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWg0LW1vYiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gaDQtbW9iIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVib2R5LW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGJvZHktbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogJG1haW47XG59XG4lbG9jYWwtbmF2aWdhdGlvbi1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRncmV5O1xufVxuQG1peGluIGxvY2FsLW5hdmlnYXRpb24tbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAkZ3JleTtcbn1cblxuLy8gQnV0dG9uXG4lYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogJGFjdGlvbjtcbiAgYm9yZGVyOiAxcHggc29saWQgJGFjdGlvbjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxM3B4O1xuICBtaW4td2lkdGg6IDE4MS45OHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiVzdG9yZXMge1xuICBvdXRsaW5lOiBub25lO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxNjFweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5hIHtcbiAgY29sb3I6ICRhY3Rpb247XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiIsIi8qIFR5cG9ncmFwaGljXG4gKiB1c2UgZXguIC50aXRsZSB7IEBleHRlbmQgJWgxOyB9XG4gKi9cbnNlY3Rpb24uanVtYm90cm9uIGgxIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIGZvbnQtc2l6ZTogNTZweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIG1hcmdpbjogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7IH1cblxuc2VjdGlvbi5qdW1ib3Ryb24gLnN1YnNjcmlwdGlvbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIG1hcmdpbjogMDsgfVxuXG5zZWN0aW9uLmp1bWJvdHJvbiBzcGFuLmluZm8ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzMzMzOyB9XG5cbi8qIFR5cG9ncmFwaGljIG1vYmlsZVxuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMS1tb2I7IH1cbiAqL1xuc2VjdGlvbi5qdW1ib3Ryb24gLmJ1dHRvbnMgLnRyeS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMjFBRTQ5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjFBRTQ5O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEzcHg7XG4gIG1pbi13aWR0aDogMTgxLjk4cHg7XG4gIGhlaWdodDogNTBweDtcbiAgb3V0bGluZTogbm9uZTsgfVxuXG5zZWN0aW9uLmp1bWJvdHJvbiAuYnV0dG9ucyAuYXBwLXN0b3JlLCBzZWN0aW9uLmp1bWJvdHJvbiAuYnV0dG9ucyAucGxheS1zdG9yZSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDE2MXB4O1xuICBib3JkZXI6IG5vbmU7IH1cblxuYSB7XG4gIGNvbG9yOiAjMjFBRTQ5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cblxuc2VjdGlvbi5qdW1ib3Ryb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNzhweCAxMDBweCA0NnB4O1xuICBtYXJnaW4tdG9wOiA4MHB4OyB9XG4gIHNlY3Rpb24uanVtYm90cm9uIGgxIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4OyB9XG4gIHNlY3Rpb24uanVtYm90cm9uIC5zdWJzY3JpcHRpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gICAgcGFkZGluZzogNnB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL21hcmtlci5zdmdcIikgY2VudGVyIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyB9XG4gIHNlY3Rpb24uanVtYm90cm9uIC5idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxOXB4OyB9XG4gICAgc2VjdGlvbi5qdW1ib3Ryb24gLmJ1dHRvbnMgLmFwcC1zdG9yZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvYXBwLXN0b3JlLnN2Z1wiKSBuby1yZXBlYXQ7XG4gICAgICBtYXJnaW46IDAgMTJweDsgfVxuICAgIHNlY3Rpb24uanVtYm90cm9uIC5idXR0b25zIC5wbGF5LXN0b3JlIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9nb29nbGUtcGxheS5zdmdcIikgbm8tcmVwZWF0OyB9XG4gIHNlY3Rpb24uanVtYm90cm9uIHNwYW4uaW5mbyB7XG4gICAgY29sb3I6ICM5OTk5OTk7XG4gICAgbWFyZ2luLWJvdHRvbTogNTVweDsgfVxuICBzZWN0aW9uLmp1bWJvdHJvbiAudGVtcC1ibG9jayB7XG4gICAgbWF4LXdpZHRoOiAxMjc5cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MTBweDtcbiAgICBwYWRkaW5nOiAwIDg0cHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICBzZWN0aW9uLmp1bWJvdHJvbiAudGVtcC1ibG9jayBpbWcge1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7IH1cbiAgICAgIHNlY3Rpb24uanVtYm90cm9uIC50ZW1wLWJsb2NrIGltZy53ZWIge1xuICAgICAgICBoZWlnaHQ6IDUxMHB4O1xuICAgICAgICBsZWZ0OiAwOyB9XG4gICAgICBzZWN0aW9uLmp1bWJvdHJvbiAudGVtcC1ibG9jayBpbWcuaXBhZCB7XG4gICAgICAgIGhlaWdodDogNDkzcHg7XG4gICAgICAgIGxlZnQ6IDMwJTtcbiAgICAgICAgdG9wOiA5cHg7IH1cbiAgICAgIHNlY3Rpb24uanVtYm90cm9uIC50ZW1wLWJsb2NrIGltZy5pcGhvbmUge1xuICAgICAgICBoZWlnaHQ6IDQ5MHB4O1xuICAgICAgICByaWdodDogMTI3cHg7XG4gICAgICAgIHRvcDogOXB4OyB9XG4gICAgICBzZWN0aW9uLmp1bWJvdHJvbiAudGVtcC1ibG9jayBpbWcuYW5kcm9pZCB7XG4gICAgICAgIGhlaWdodDogNDk2cHg7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDdweDsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgc2VjdGlvbi5qdW1ib3Ryb24gLnRlbXAtYmxvY2sge1xuICAgIGhlaWdodDogNDEwcHg7IH1cbiAgICBzZWN0aW9uLmp1bWJvdHJvbiAudGVtcC1ibG9jayBpbWcud2ViIHtcbiAgICAgIGhlaWdodDogNDEwcHg7IH1cbiAgICBzZWN0aW9uLmp1bWJvdHJvbiAudGVtcC1ibG9jayBpbWcuaXBhZCB7XG4gICAgICBoZWlnaHQ6IDM5NXB4O1xuICAgICAgbGVmdDogMjUlOyB9XG4gICAgc2VjdGlvbi5qdW1ib3Ryb24gLnRlbXAtYmxvY2sgaW1nLmlwaG9uZSB7XG4gICAgICBoZWlnaHQ6IDM5NHB4OyB9XG4gICAgc2VjdGlvbi5qdW1ib3Ryb24gLnRlbXAtYmxvY2sgaW1nLmFuZHJvaWQge1xuICAgICAgaGVpZ2h0OiAzOTRweDsgfSB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgc2VjdGlvbi5qdW1ib3Ryb24ge1xuICAgIHBhZGRpbmc6IDMzcHggMjFweCA0NnB4O1xuICAgIG1hcmdpbi10b3A6IDYwcHg7IH1cbiAgICBzZWN0aW9uLmp1bWJvdHJvbiBoMSB7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDAgNXB4IDM1cHg7IH1cbiAgICBzZWN0aW9uLmp1bWJvdHJvbiAuYnV0dG9ucyAuYXBwLXN0b3JlIHtcbiAgICAgIG1hcmdpbjogMCAxMnB4OyB9XG4gICAgc2VjdGlvbi5qdW1ib3Ryb24gLnN1YnNjcmlwdGlvbiB7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcGFkZGluZzogMXB4IDIwcHg7IH1cbiAgICAgIHNlY3Rpb24uanVtYm90cm9uIC5zdWJzY3JpcHRpb24ubW9iLTEge1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvbWFya2VyLW1vYi0xLnN2Z1wiKSBjZW50ZXIgbm8tcmVwZWF0OyB9XG4gICAgICBzZWN0aW9uLmp1bWJvdHJvbiAuc3Vic2NyaXB0aW9uLm1vYi0yIHtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL21hcmtlci1tb2ItMi5zdmdcIikgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDsgfVxuICAgIHNlY3Rpb24uanVtYm90cm9uIC50ZW1wLWJsb2NrIHtcbiAgICAgIGhlaWdodDogMzgwcHg7IH1cbiAgICAgIHNlY3Rpb24uanVtYm90cm9uIC50ZW1wLWJsb2NrIGltZy53ZWIge1xuICAgICAgICBoZWlnaHQ6IDM4MHB4OyB9XG4gICAgICBzZWN0aW9uLmp1bWJvdHJvbiAudGVtcC1ibG9jayBpbWcuaXBhZCB7XG4gICAgICAgIGhlaWdodDogMzY1cHg7XG4gICAgICAgIGxlZnQ6IDIwJTsgfVxuICAgICAgc2VjdGlvbi5qdW1ib3Ryb24gLnRlbXAtYmxvY2sgaW1nLmlwaG9uZSB7XG4gICAgICAgIGhlaWdodDogMzY0cHg7IH1cbiAgICAgIHNlY3Rpb24uanVtYm90cm9uIC50ZW1wLWJsb2NrIGltZy5hbmRyb2lkIHtcbiAgICAgICAgaGVpZ2h0OiAzNzBweDsgfSB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIHNlY3Rpb24uanVtYm90cm9uIHtcbiAgICBwYWRkaW5nOiAzM3B4IDIxcHggNDZweDtcbiAgICBtYXJnaW4tdG9wOiA2MHB4OyB9XG4gICAgc2VjdGlvbi5qdW1ib3Ryb24gaDEge1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBsaW5lLWhlaWdodDogNDZweDtcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAwIDVweCAyMHB4OyB9XG4gICAgc2VjdGlvbi5qdW1ib3Ryb24gLmJ1dHRvbnMgLmFwcC1zdG9yZSB7XG4gICAgICBtYXJnaW46IDAgMTJweCAwIDA7IH1cbiAgICBzZWN0aW9uLmp1bWJvdHJvbiAuc3Vic2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nOiAxcHggMjBweDsgfVxuICAgICAgc2VjdGlvbi5qdW1ib3Ryb24gLnN1YnNjcmlwdGlvbi5tb2ItMSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9tYXJrZXItbW9iLTEuc3ZnXCIpIGNlbnRlciBuby1yZXBlYXQ7IH1cbiAgICAgIHNlY3Rpb24uanVtYm90cm9uIC5zdWJzY3JpcHRpb24ubW9iLTIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvbWFya2VyLW1vYi0yLnN2Z1wiKSBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1NXB4OyB9XG4gICAgc2VjdGlvbi5qdW1ib3Ryb24gLnRlbXAtYmxvY2subW9iIHtcbiAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIHBhZGRpbmc6IDAgMTVweCAwIDIxcHg7XG4gICAgICBoZWlnaHQ6IDEwMHZ3OyB9XG4gICAgICBzZWN0aW9uLmp1bWJvdHJvbiAudGVtcC1ibG9jay5tb2IgaW1nIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2dyAvIDIpOyB9XG4gICAgICAgIHNlY3Rpb24uanVtYm90cm9uIC50ZW1wLWJsb2NrLm1vYiBpbWcud2ViIHtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMzElOyB9XG4gICAgICAgIHNlY3Rpb24uanVtYm90cm9uIC50ZW1wLWJsb2NrLm1vYiBpbWcuaXBhZCB7XG4gICAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDIxcHg7XG4gICAgICAgICAgYm90dG9tOiAwOyB9XG4gICAgICAgIHNlY3Rpb24uanVtYm90cm9uIC50ZW1wLWJsb2NrLm1vYiBpbWcuaXBob25lIHtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMjFweDsgfVxuICAgICAgICBzZWN0aW9uLmp1bWJvdHJvbiAudGVtcC1ibG9jay5tb2IgaW1nLmFuZHJvaWQge1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgICAgcmlnaHQ6IDE1cHg7IH0gfVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3VpJztcblxuc2VjdGlvbi5qdW1ib3Ryb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNzhweCAxMDBweCA0NnB4O1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBoMSB7XG4gICAgQGV4dGVuZCAlaDE7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgfVxuICAuc3Vic2NyaXB0aW9uIHtcbiAgICBAZXh0ZW5kICVoNDtcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICAgIHBhZGRpbmc6IDZweCAyMHB4O1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL21hcmtlci5zdmcnKSBjZW50ZXIgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAgLmJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE5cHg7XG4gICAgLnRyeS1idXR0b24ge1xuICAgICAgQGV4dGVuZCAlYnV0dG9uO1xuICAgIH1cbiAgICAuYXBwLXN0b3JlIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2FwcC1zdG9yZS5zdmcnKSBuby1yZXBlYXQ7XG4gICAgICBtYXJnaW46IDAgMTJweDtcbiAgICAgIEBleHRlbmQgJXN0b3JlcztcbiAgICB9XG4gICAgLnBsYXktc3RvcmUge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvZ29vZ2xlLXBsYXkuc3ZnJykgbm8tcmVwZWF0O1xuICAgICAgQGV4dGVuZCAlc3RvcmVzO1xuICAgIH1cbiAgfVxuICBzcGFuLmluZm8ge1xuICAgIEBleHRlbmQgJWJvZHk7XG4gICAgY29sb3I6ICRncmV5O1xuICAgIG1hcmdpbi1ib3R0b206IDU1cHg7XG4gIH1cbiAgLnRlbXAtYmxvY2sge1xuICAgIG1heC13aWR0aDogMTI3OXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTEwcHg7XG4gICAgcGFkZGluZzogMCA4NHB4IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgICYud2ViIHtcbiAgICAgICAgaGVpZ2h0OiA1MTBweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICAgICYuaXBhZCB7XG4gICAgICAgIGhlaWdodDogNDkzcHg7XG4gICAgICAgIGxlZnQ6IDMwJTtcbiAgICAgICAgdG9wOiA5cHg7XG4gICAgICB9XG4gICAgICAmLmlwaG9uZSB7XG4gICAgICAgIGhlaWdodDogNDkwcHg7XG4gICAgICAgIHJpZ2h0OiAxMjdweDtcbiAgICAgICAgdG9wOiA5cHg7XG4gICAgICB9XG4gICAgICAmLmFuZHJvaWQge1xuICAgICAgICBoZWlnaHQ6IDQ5NnB4O1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiA3cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCl7XG4gIHNlY3Rpb24uanVtYm90cm9uIHtcbiAgICAudGVtcC1ibG9jayB7XG4gICAgICBoZWlnaHQ6IDQxMHB4O1xuICAgICAgaW1nIHtcbiAgICAgICAgJi53ZWIge1xuICAgICAgICAgIGhlaWdodDogNDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgJi5pcGFkIHtcbiAgICAgICAgICBoZWlnaHQ6IDM5NXB4O1xuICAgICAgICAgIGxlZnQ6IDI1JTtcbiAgICAgICAgfVxuICAgICAgICAmLmlwaG9uZSB7XG4gICAgICAgICAgaGVpZ2h0OiAzOTRweDtcbiAgICAgICAgfVxuICAgICAgICAmLmFuZHJvaWQge1xuICAgICAgICAgIGhlaWdodDogMzk0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gdGFibGV0IHNtXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KXtcbiAgc2VjdGlvbi5qdW1ib3Ryb24ge1xuICAgIHBhZGRpbmc6IDMzcHggMjFweCA0NnB4O1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgaDEge1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIGNvbG9yOiAkbWFpbjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMCA1cHggMzVweDtcbiAgICB9XG4gICAgLmJ1dHRvbnMge1xuICAgICAgLmFwcC1zdG9yZSB7XG4gICAgICAgIG1hcmdpbjogMCAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuc3Vic2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nOiAxcHggMjBweDtcbiAgICAgICYubW9iLTEge1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9tYXJrZXItbW9iLTEuc3ZnJykgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgIH1cbiAgICAgICYubW9iLTIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9tYXJrZXItbW9iLTIuc3ZnJykgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnRlbXAtYmxvY2sge1xuICAgICAgaGVpZ2h0OiAzODBweDtcbiAgICAgIGltZyB7XG4gICAgICAgICYud2ViIHtcbiAgICAgICAgICBoZWlnaHQ6IDM4MHB4O1xuICAgICAgICB9XG4gICAgICAgICYuaXBhZCB7XG4gICAgICAgICAgaGVpZ2h0OiAzNjVweDtcbiAgICAgICAgICBsZWZ0OiAyMCU7XG4gICAgICAgIH1cbiAgICAgICAgJi5pcGhvbmUge1xuICAgICAgICAgIGhlaWdodDogMzY0cHg7XG4gICAgICAgIH1cbiAgICAgICAgJi5hbmRyb2lkIHtcbiAgICAgICAgICBoZWlnaHQ6IDM3MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIG1vYmlsZSB4c1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgc2VjdGlvbi5qdW1ib3Ryb24ge1xuICAgIHBhZGRpbmc6IDMzcHggMjFweCA0NnB4O1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgaDEge1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBsaW5lLWhlaWdodDogNDZweDtcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgIGNvbG9yOiAkbWFpbjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMCA1cHggMjBweDtcbiAgICB9XG4gICAgLmJ1dHRvbnMge1xuICAgICAgLmFwcC1zdG9yZSB7XG4gICAgICAgIG1hcmdpbjogMCAxMnB4IDAgMDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnN1YnNjcmlwdGlvbiB7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcGFkZGluZzogMXB4IDIwcHg7XG4gICAgICAmLm1vYi0xIHtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvbWFya2VyLW1vYi0xLnN2ZycpIGNlbnRlciBuby1yZXBlYXQ7XG4gICAgICB9XG4gICAgICAmLm1vYi0yIHtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvbWFya2VyLW1vYi0yLnN2ZycpIGNlbnRlciBuby1yZXBlYXQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDU1cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC50ZW1wLWJsb2NrLm1vYiB7XG4gICAgICB3aWR0aDogMTAwdnc7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBwYWRkaW5nOiAwIDE1cHggMCAyMXB4O1xuICAgICAgaGVpZ2h0OiAxMDB2dztcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdncgLyAyKTtcbiAgICAgICAgJi53ZWIge1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAzMSU7XG4gICAgICAgIH1cbiAgICAgICAgJi5pcGFkIHtcbiAgICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgICAgbGVmdDogMjFweDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgJi5pcGhvbmUge1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAyMXB4O1xuICAgICAgICB9XG4gICAgICAgICYuYW5kcm9pZCB7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");




var JumbotronComponent = /** @class */ (function () {
    function JumbotronComponent(translateService, scrollEventsService) {
        this.translateService = translateService;
        this.scrollEventsService = scrollEventsService;
        this.webImage = '';
        this.tabletImage = '';
        this.iosImage = '';
        this.androidImage = '';
        this.lang = 'eng';
    }
    JumbotronComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translateService.onLangChange.subscribe(function (value) {
            _this.lang = value.lang === 'fr' ? value.lang : 'eng';
            _this.changeImages();
        });
        this.scrollEventsService.setButtonsPosition(this.buttons.nativeElement.offsetTop);
    };
    JumbotronComponent.prototype.thisUserAgent = function (event) {
        this.pixelratio = event.pixelratio;
        this.changeImages();
    };
    JumbotronComponent.prototype.changeImages = function () {
        switch (this.pixelratio) {
            case '1x':
                this.webImage = "../../../assets/main-composition/" + this.lang + "/web.png";
                this.tabletImage = "../../../assets/main-composition/" + this.lang + "/ipad.png";
                this.iosImage = "../../../assets/main-composition/" + this.lang + "/iphone.png";
                this.androidImage = "../../../assets/main-composition/" + this.lang + "/android.png";
                break;
            case 'retina':
                this.webImage = "../../../assets/main-composition/" + this.lang + "/web@2x.png";
                this.tabletImage = "../../../assets/main-composition/" + this.lang + "/ipad@2x.png";
                this.iosImage = "../../../assets/main-composition/" + this.lang + "/iphone@2x.png";
                this.androidImage = "../../../assets/main-composition/" + this.lang + "/android@2x.png";
                break;
            case '4k':
                this.webImage = "../../../assets/main-composition/" + this.lang + "/web@3x.png";
                this.tabletImage = "../../../assets/main-composition/" + this.lang + "/ipad@3x.png";
                this.iosImage = "../../../assets/main-composition/" + this.lang + "/iphone@3x.png";
                this.androidImage = "../../../assets/main-composition/" + this.lang + "/android@3x.png";
                break;
            default:
                this.webImage = "../../../assets/main-composition/" + this.lang + "/web.png";
                this.tabletImage = "../../../assets/main-composition/" + this.lang + "/ipad.png";
                this.iosImage = "../../../assets/main-composition/" + this.lang + "/iphone.png";
                this.androidImage = "../../../assets/main-composition/" + this.lang + "/android.png";
                break;
        }
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _services_scroll_events_service__WEBPACK_IMPORTED_MODULE_2__["ScrollEventsService"]])
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

module.exports = "<button class=\"white-menu\" (click)=\"toggleMenu()\">Menu</button>\n<div class=\"menu\" *ngIf=\"showMenu\">\n  <div class=\"bg\" (click)=\"toggleMenu()\"></div>\n  <div class=\"menu-content\">\n    <div class=\"menu-head\">\n      <h2>Menu</h2>\n      <button [translate]=\"'Mobile-menu.close-button'\" (click)=\"toggleMenu()\"></button>\n    </div>\n    <div class=\"menu-items\">\n      <div class=\"buttons\">\n        <a href=\"#\" class=\"app-store\"></a>\n        <a href=\"#\" class=\"play-store\"></a>\n        <a href=\"#\" class=\"try-button\" [translate]=\"'Jumbo.button.try'\"></a>\n      </div>\n      <span class=\"info\" [translate]=\"'Jumbo.info'\"></span>\n      <div class=\"fixed-menu\">\n        <span [translate]=\"'FixedMenu.item-1'\" (click)=\"scrollTo('search')\"></span>\n        <span [translate]=\"'FixedMenu.item-2'\" (click)=\"scrollTo('design')\"></span>\n        <span [translate]=\"'FixedMenu.item-3'\" (click)=\"scrollTo('sync')\"></span>\n        <span [translate]=\"'FixedMenu.item-4'\" (click)=\"scrollTo('integration')\"></span>\n        <span [translate]=\"'FixedMenu.item-5'\" (click)=\"scrollTo('uptodate')\"></span>\n        <span [translate]=\"'FixedMenu.item-6'\" (click)=\"scrollTo('topics')\"></span>\n        <span [translate]=\"'FixedMenu.item-7'\" (click)=\"scrollTo('authors')\"></span>\n      </div>\n      <button class=\"login\" [translate]=\"'Mobile-menu.login-button'\"></button>\n      <ul>\n        <li><a href=\"#footer\" [translate]=\"'Footer-links-1'\"></a></li>\n        <li><a href=\"#footer\" [translate]=\"'Footer-links-2'\"></a></li>\n        <li><a href=\"#footer\" [translate]=\"'Footer-links-5'\"></a></li>\n        <li><a href=\"#footer\" [translate]=\"'Footer-links-4'\"></a></li>\n      </ul>\n      <div class=\"white-space\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/main-page/components/mobile-menu/mobile-menu.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/main-page/components/mobile-menu/mobile-menu.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Typographic\n * use ex. .title { @extend %h1; }\n */\n.menu .menu-content .menu-items ul li a {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 24px;\n  font-size: 16px;\n  color: #333333; }\n.menu .menu-content .menu-items .login {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 23px;\n  font-size: 15px;\n  letter-spacing: 0.2px;\n  color: #333333; }\n/* Typographic mobile\n * use ex. .title { @extend %h1-mob; }\n */\n.menu .menu-content .menu-head h2 {\n  font-style: normal;\n  font-weight: bold;\n  line-height: 48px;\n  font-size: 24px;\n  color: #333333; }\n.menu .menu-content .menu-items .buttons .try-button {\n  background: #21AE49;\n  border: 1px solid #21AE49;\n  border-radius: 4px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 28px;\n  font-size: 18px;\n  text-align: center;\n  color: #ffffff;\n  padding: 10px 10px 13px;\n  min-width: 181.98px;\n  height: 50px;\n  outline: none; }\n.menu .menu-content .menu-items .buttons .app-store, .menu .menu-content .menu-items .buttons .play-store {\n  outline: none;\n  height: 50px;\n  width: 161px;\n  border: none; }\na {\n  color: #21AE49;\n  text-decoration: none; }\nbutton.white-menu {\n  height: 38px;\n  border: 1px solid #E7E7E7;\n  border-radius: 4px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 25px;\n  font-size: 17px;\n  text-align: center;\n  color: #333333;\n  background: #ffffff;\n  margin-left: 17.79px;\n  outline: none;\n  padding: 0 18px; }\n.menu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background: rgba(0, 0, 0, 0.47);\n  z-index: 99; }\n.menu .bg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n.menu .menu-content {\n    z-index: 100;\n    position: absolute;\n    right: 0;\n    top: 0;\n    height: 100vh;\n    width: 238px;\n    background: #FFFFFF;\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.17);\n    display: flex;\n    flex-direction: column; }\n.menu .menu-content .menu-head {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      width: 100%;\n      height: 54px;\n      padding: 6px 16px 0 18px; }\n.menu .menu-content .menu-head h2 {\n        margin: 0; }\n.menu .menu-content .menu-head button {\n        height: 38px;\n        border: 1px solid #E7E7E7;\n        border-radius: 4px;\n        font-style: normal;\n        font-weight: normal;\n        line-height: 25px;\n        font-size: 17px;\n        text-align: center;\n        color: #333333;\n        background: #ffffff;\n        margin-left: 17.79px;\n        outline: none;\n        padding: 0 18px; }\n.menu .menu-content .menu-items {\n      width: 100%;\n      padding: 26px 0 18px 18px;\n      height: calc(100vh - 54px);\n      overflow: auto; }\n.menu .menu-content .menu-items .buttons {\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: flex-start;\n        width: 100%;\n        float: left; }\n.menu .menu-content .menu-items .buttons .try-button {\n          min-width: 161px;\n          margin-bottom: 6px; }\n.menu .menu-content .menu-items .buttons .app-store {\n          background: transparent url('app-store.svg') no-repeat;\n          margin-bottom: 12px;\n          min-height: 50px; }\n.menu .menu-content .menu-items .buttons .play-store {\n          background: transparent url('google-play.svg') no-repeat;\n          margin-bottom: 12px;\n          min-height: 50px; }\n.menu .menu-content .menu-items span.info {\n        font-style: normal;\n        font-weight: normal;\n        line-height: 23px;\n        font-size: 16px;\n        letter-spacing: 0.2px;\n        color: #999999;\n        width: 100%;\n        float: left;\n        padding-right: 16px;\n        margin-bottom: 19px;\n        display: inline-block; }\n.menu .menu-content .menu-items div.fixed-menu {\n        width: 100%;\n        float: left;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: flex-start;\n        margin-bottom: 23px; }\n.menu .menu-content .menu-items div.fixed-menu span {\n          width: 100%;\n          padding: 11px 5px 13px 0;\n          background: #FFFFFF;\n          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.09), 0px -1px 0px rgba(0, 0, 0, 0.09);\n          font-style: normal;\n          font-weight: normal;\n          line-height: 26px;\n          font-size: 18px;\n          color: #333333; }\n.menu .menu-content .menu-items div.fixed-menu span:hover {\n            cursor: pointer; }\n.menu .menu-content .menu-items .login {\n        color: #333333;\n        padding: 10px 0 9px;\n        outline: none;\n        border: 1px solid #E7E7E7;\n        background: transparent;\n        border-radius: 4px;\n        letter-spacing: 0.2px;\n        width: calc(100% - 15px);\n        float: left;\n        margin-bottom: 3px;\n        min-height: 44px; }\n.menu .menu-content .menu-items .login:hover {\n          cursor: pointer; }\n.menu .menu-content .menu-items ul {\n        width: 100%;\n        float: left;\n        list-style: none;\n        display: flex;\n        flex-direction: column;\n        margin: 0;\n        padding: 0; }\n.menu .menu-content .menu-items ul li a {\n          display: inline-block;\n          margin-top: 24px; }\n.menu .menu-content .menu-items .white-space {\n        width: 100%;\n        height: 100px;\n        float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9zdHlsZXMvX3VpLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL21vYmlsZS1tZW51L21vYmlsZS1tZW51LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FsZXh6YXZnb3JvZG5paS9Qcm9qZWN0cy9sYW50aGllci1wcm9tb3NpdGUvc3JjL2FwcC9wYWdlcy9tYWluLXBhZ2UvY29tcG9uZW50cy9tb2JpbGUtbWVudS9tb2JpbGUtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTs7RUNKRTtBQ2VGO0VGMkJFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQS9DWSxFQUFBO0FFZ0JkO0VGa0NFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsY0F2RFksRUFBQTtBQWtGZDs7RUMvREU7QUNIRjtFRm9GRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0F4R1ksRUFBQTtBRWdCZDtFRmtLRSxtQkFqTGM7RUFrTGQseUJBbExjO0VBbUxkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhLEVBQUE7QUU5S2Y7RUZrTEUsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWSxFQUFBO0FBR2Q7RUFDRSxjQXhNYztFQXlNZCxxQkFBcUIsRUFBQTtBRXpNdkI7RUFDRSxZQUFZO0VBQ1oseUJGQWtCO0VFQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNGVlk7RUVXWixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixlQUFlLEVBQUE7QUFFakI7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxhQUFhO0VBQ2IsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixXQUFXLEVBQUE7QUFQYjtJQVNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZLEVBQUE7QUFiaEI7SUFnQkksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsTUFBTTtJQUNOLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxhQUFhO0lBQ2Isc0JBQXNCLEVBQUE7QUF6QjFCO01BMkJNLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsOEJBQThCO01BQzlCLG1CQUFtQjtNQUNuQixXQUFXO01BQ1gsWUFBWTtNQUNaLHdCQUF3QixFQUFBO0FBakM5QjtRQW9DUSxTQUFTLEVBQUE7QUFwQ2pCO1FBdUNRLFlBQVk7UUFDWix5QkZyRFk7UUVzRFosa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsY0YvRE07UUVnRU4sbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQixhQUFhO1FBQ2IsZUFBZSxFQUFBO0FBbkR2QjtNQXVETSxXQUFXO01BQ1gseUJBQXlCO01BQ3pCLDBCQUEwQjtNQUMxQixjQUFjLEVBQUE7QUExRHBCO1FBNERRLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsMkJBQTJCO1FBQzNCLHVCQUF1QjtRQUN2QixXQUFXO1FBQ1gsV0FBVyxFQUFBO0FBakVuQjtVQW9FVSxnQkFBZ0I7VUFDaEIsa0JBQWtCLEVBQUE7QUFyRTVCO1VBd0VVLHNEQUE0RTtVQUU1RSxtQkFBbUI7VUFDbkIsZ0JBQWdCLEVBQUE7QUEzRTFCO1VBOEVVLHdEQUE4RTtVQUU5RSxtQkFBbUI7VUFDbkIsZ0JBQWdCLEVBQUE7QUFqRjFCO1FBcUZRLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsY0Z4R007UUV5R04sV0FBVztRQUNYLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLHFCQUFxQixFQUFBO0FBL0Y3QjtRQWtHUSxXQUFXO1FBQ1gsV0FBVztRQUNYLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsMkJBQTJCO1FBQzNCLHVCQUF1QjtRQUN2QixtQkFBbUIsRUFBQTtBQXhHM0I7VUEwR1UsV0FBVztVQUNYLHdCQUF3QjtVQUN4QixtQkFBbUI7VUFDbkIseUVBQXlFO1VBQ3pFLGtCQUFrQjtVQUNsQixtQkFBbUI7VUFDbkIsaUJBQWlCO1VBQ2pCLGVBQWU7VUFDZixjRmxJSSxFQUFBO0FFZ0JkO1lBb0hZLGVBQWUsRUFBQTtBQXBIM0I7UUEwSFEsY0YxSU07UUUySU4sbUJBQW1CO1FBQ25CLGFBQWE7UUFDYix5QkYxSVk7UUUySVosdUJBQXVCO1FBQ3ZCLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsd0JBQXdCO1FBQ3hCLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsZ0JBQWdCLEVBQUE7QUFwSXhCO1VBc0lVLGVBQWUsRUFBQTtBQXRJekI7UUEwSVEsV0FBVztRQUNYLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixTQUFTO1FBQ1QsVUFBVSxFQUFBO0FBaEpsQjtVQW9KWSxxQkFBcUI7VUFDckIsZ0JBQWdCLEVBQUE7QUFySjVCO1FBMEpRLFdBQVc7UUFDWCxhQUFhO1FBQ2IsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL2NvbXBvbmVudHMvbW9iaWxlLW1lbnUvbW9iaWxlLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2xvcnNcbiRtYWluOiAjMzMzMzMzO1xuJGFjdGlvbjogIzIxQUU0OTtcbiRncmV5OiAjOTk5OTk5O1xuJGxpZ2h0LWdyZXk6ICNFN0U3RTc7XG5cbi8qIFR5cG9ncmFwaGljXG4gKiB1c2UgZXguIC50aXRsZSB7IEBleHRlbmQgJWgxOyB9XG4gKi9cbiVoMSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBmb250LXNpemU6IDU2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbn1cbiVoMiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbn1cbiVoMyB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG59XG4laDQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xufVxuJWJvZHkge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVuYXZpZ2F0aW9uIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVzbGlkZXIge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRncmV5O1xufVxuQG1peGluIHNsaWRlciB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG4lY2FwdGlvbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5cbi8qIFR5cG9ncmFwaGljIG1vYmlsZVxuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMS1tb2I7IH1cbiAqL1xuJWgxLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoMS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogJG1haW47XG59XG4laDItbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGgyLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVoMy1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGgzLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBjb2xvcjogJG1haW47XG59XG4laDQtbW9iIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoNC1tb2Ige1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWJvZHktbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gYm9keS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVsb2NhbC1uYXZpZ2F0aW9uLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5AbWl4aW4gbG9jYWwtbmF2aWdhdGlvbi1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRncmV5O1xufVxuXG4vLyBCdXR0b25cbiVidXR0b24ge1xuICBiYWNrZ3JvdW5kOiAkYWN0aW9uO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYWN0aW9uO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEzcHg7XG4gIG1pbi13aWR0aDogMTgxLjk4cHg7XG4gIGhlaWdodDogNTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuJXN0b3JlcyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDE2MXB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmEge1xuICBjb2xvcjogJGFjdGlvbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIiwiLyogVHlwb2dyYXBoaWNcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDE7IH1cbiAqL1xuLm1lbnUgLm1lbnUtY29udGVudCAubWVudS1pdGVtcyB1bCBsaSBhIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzMzMzMzMzsgfVxuXG4ubWVudSAubWVudS1jb250ZW50IC5tZW51LWl0ZW1zIC5sb2dpbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogIzMzMzMzMzsgfVxuXG4vKiBUeXBvZ3JhcGhpYyBtb2JpbGVcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDEtbW9iOyB9XG4gKi9cbi5tZW51IC5tZW51LWNvbnRlbnQgLm1lbnUtaGVhZCBoMiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMzMzMzMzOyB9XG5cbi5tZW51IC5tZW51LWNvbnRlbnQgLm1lbnUtaXRlbXMgLmJ1dHRvbnMgLnRyeS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMjFBRTQ5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjFBRTQ5O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEzcHg7XG4gIG1pbi13aWR0aDogMTgxLjk4cHg7XG4gIGhlaWdodDogNTBweDtcbiAgb3V0bGluZTogbm9uZTsgfVxuXG4ubWVudSAubWVudS1jb250ZW50IC5tZW51LWl0ZW1zIC5idXR0b25zIC5hcHAtc3RvcmUsIC5tZW51IC5tZW51LWNvbnRlbnQgLm1lbnUtaXRlbXMgLmJ1dHRvbnMgLnBsYXktc3RvcmUge1xuICBvdXRsaW5lOiBub25lO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxNjFweDtcbiAgYm9yZGVyOiBub25lOyB9XG5cbmEge1xuICBjb2xvcjogIzIxQUU0OTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbmJ1dHRvbi53aGl0ZS1tZW51IHtcbiAgaGVpZ2h0OiAzOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTdFN0U3O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzMzMzMzMztcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgbWFyZ2luLWxlZnQ6IDE3Ljc5cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDAgMThweDsgfVxuXG4ubWVudSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40Nyk7XG4gIHotaW5kZXg6IDk5OyB9XG4gIC5tZW51IC5iZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTsgfVxuICAubWVudSAubWVudS1jb250ZW50IHtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAyMzhweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE3KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgICAubWVudSAubWVudS1jb250ZW50IC5tZW51LWhlYWQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDU0cHg7XG4gICAgICBwYWRkaW5nOiA2cHggMTZweCAwIDE4cHg7IH1cbiAgICAgIC5tZW51IC5tZW51LWNvbnRlbnQgLm1lbnUtaGVhZCBoMiB7XG4gICAgICAgIG1hcmdpbjogMDsgfVxuICAgICAgLm1lbnUgLm1lbnUtY29udGVudCAubWVudS1oZWFkIGJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMzhweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0U3RTdFNztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNy43OXB4O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwIDE4cHg7IH1cbiAgICAubWVudSAubWVudS1jb250ZW50IC5tZW51LWl0ZW1zIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMjZweCAwIDE4cHggMThweDtcbiAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDU0cHgpO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87IH1cbiAgICAgIC5tZW51IC5tZW51LWNvbnRlbnQgLm1lbnUtaXRlbXMgLmJ1dHRvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7IH1cbiAgICAgICAgLm1lbnUgLm1lbnUtY29udGVudCAubWVudS1pdGVtcyAuYnV0dG9ucyAudHJ5LWJ1dHRvbiB7XG4gICAgICAgICAgbWluLXdpZHRoOiAxNjFweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7IH1cbiAgICAgICAgLm1lbnUgLm1lbnUtY29udGVudCAubWVudS1pdGVtcyAuYnV0dG9ucyAuYXBwLXN0b3JlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvYXBwLXN0b3JlLnN2Z1wiKSBuby1yZXBlYXQ7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA1MHB4OyB9XG4gICAgICAgIC5tZW51IC5tZW51LWNvbnRlbnQgLm1lbnUtaXRlbXMgLmJ1dHRvbnMgLnBsYXktc3RvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9nb29nbGUtcGxheS5zdmdcIikgbm8tcmVwZWF0O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgICAgbWluLWhlaWdodDogNTBweDsgfVxuICAgICAgLm1lbnUgLm1lbnUtY29udGVudCAubWVudS1pdGVtcyBzcGFuLmluZm8ge1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgICAgY29sb3I6ICM5OTk5OTk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTlweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAubWVudSAubWVudS1jb250ZW50IC5tZW51LWl0ZW1zIGRpdi5maXhlZC1tZW51IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyM3B4OyB9XG4gICAgICAgIC5tZW51IC5tZW51LWNvbnRlbnQgLm1lbnUtaXRlbXMgZGl2LmZpeGVkLW1lbnUgc3BhbiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMTFweCA1cHggMTNweCAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMDkpLCAwcHggLTFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgY29sb3I6ICMzMzMzMzM7IH1cbiAgICAgICAgICAubWVudSAubWVudS1jb250ZW50IC5tZW51LWl0ZW1zIGRpdi5maXhlZC1tZW51IHNwYW46aG92ZXIge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAubWVudSAubWVudS1jb250ZW50IC5tZW51LWl0ZW1zIC5sb2dpbiB7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDAgOXB4O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTdFN0U3O1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNXB4KTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgbWluLWhlaWdodDogNDRweDsgfVxuICAgICAgICAubWVudSAubWVudS1jb250ZW50IC5tZW51LWl0ZW1zIC5sb2dpbjpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAubWVudSAubWVudS1jb250ZW50IC5tZW51LWl0ZW1zIHVsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7IH1cbiAgICAgICAgLm1lbnUgLm1lbnUtY29udGVudCAubWVudS1pdGVtcyB1bCBsaSBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDsgfVxuICAgICAgLm1lbnUgLm1lbnUtY29udGVudCAubWVudS1pdGVtcyAud2hpdGUtc3BhY2Uge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7IH1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy91aSc7XG5cbmJ1dHRvbi53aGl0ZS1tZW51IHtcbiAgaGVpZ2h0OiAzOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHQtZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICRtYWluO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBtYXJnaW4tbGVmdDogMTcuNzlweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMCAxOHB4O1xufVxuLm1lbnUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDcpO1xuICB6LWluZGV4OiA5OTtcbiAgLmJnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5tZW51LWNvbnRlbnQge1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDIzOHB4O1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTcpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAubWVudS1oZWFkIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA1NHB4O1xuICAgICAgcGFkZGluZzogNnB4IDE2cHggMCAxOHB4O1xuICAgICAgaDIge1xuICAgICAgICBAZXh0ZW5kICVoMi1tb2I7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMzhweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0LWdyZXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAkbWFpbjtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE3Ljc5cHg7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDAgMThweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLm1lbnUtaXRlbXMge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAyNnB4IDAgMThweCAxOHB4O1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTRweCk7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIC5idXR0b25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAudHJ5LWJ1dHRvbiB7XG4gICAgICAgICAgQGV4dGVuZCAlYnV0dG9uO1xuICAgICAgICAgIG1pbi13aWR0aDogMTYxcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5hcHAtc3RvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2FwcC1zdG9yZS5zdmcnKSBuby1yZXBlYXQ7XG4gICAgICAgICAgQGV4dGVuZCAlc3RvcmVzO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgICAgbWluLWhlaWdodDogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAucGxheS1zdG9yZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvZ29vZ2xlLXBsYXkuc3ZnJykgbm8tcmVwZWF0O1xuICAgICAgICAgIEBleHRlbmQgJXN0b3JlcztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNwYW4uaW5mbyB7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgICBjb2xvcjogJGdyZXk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTlweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgICAgZGl2LmZpeGVkLW1lbnUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDExcHggNXB4IDEzcHggMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA5KSwgMHB4IC0xcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGNvbG9yOiAkbWFpbjtcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5sb2dpbiB7XG4gICAgICAgIEBleHRlbmQgJW5hdmlnYXRpb247XG4gICAgICAgIGNvbG9yOiAkbWFpbjtcbiAgICAgICAgcGFkZGluZzogMTBweCAwIDlweDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0LWdyZXk7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1cHgpO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICBtaW4taGVpZ2h0OiA0NHB4O1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHVsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIEBleHRlbmQgJWJvZHk7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLndoaXRlLXNwYWNlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

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
    MobileMenuComponent.prototype.scrollTo = function (id) {
        this.toggleMenu();
        var element = document.getElementById(id);
        element.scrollIntoView(true);
        var scrolledY = window.scrollY;
        if (scrolledY) {
            window.scroll(0, scrolledY - 60);
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

module.exports = "/* Typographic\n * use ex. .title { @extend %h1; }\n */\nsection.promo .items .item .text {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 24px;\n  font-size: 16px;\n  color: #333333; }\n/* Typographic mobile\n * use ex. .title { @extend %h1-mob; }\n */\na {\n  color: #21AE49;\n  text-decoration: none; }\nsection.promo {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 47px 0 60px; }\nsection.promo .items {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    max-width: 1240px; }\nsection.promo .items .item {\n      padding: 13px 67px 6px 65px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      width: calc(100% / 3); }\nsection.promo .items .item.bordered {\n        border-left: 1px solid #E7E7E7;\n        border-right: 1px solid #E7E7E7; }\nsection.promo .items .item .icon {\n        margin-bottom: 34px;\n        height: 60px; }\nsection.promo .items .item .icon.update {\n          width: 60px;\n          background: url('update.svg') center no-repeat; }\nsection.promo .items .item .icon.book {\n          width: 60px;\n          background: url('medical-book.svg') center no-repeat; }\nsection.promo .items .item .icon.devices {\n          width: 220px;\n          background: url('all-devices.svg') center no-repeat; }\nsection.promo .items .item .text {\n        width: 100%;\n        text-align: center; }\n@media screen and (min-width: 960px) and (max-width: 1279px) {\n  section.promo .items {\n    max-width: initial;\n    width: 100%;\n    justify-content: flex-start;\n    align-items: flex-start; } }\n@media screen and (min-width: 601px) and (max-width: 959px) {\n  section.promo {\n    flex-direction: column;\n    padding: 0 0 26px; }\n    section.promo .items {\n      max-width: initial;\n      width: 100%;\n      padding: 0 60px;\n      justify-content: flex-start;\n      align-items: flex-start; }\n      section.promo .items .item {\n        width: 100%;\n        padding: 0 36px;\n        margin: 40px 0;\n        max-width: calc(100% / 3); }\n        section.promo .items .item .icon {\n          margin-bottom: 30px;\n          width: 50px !important;\n          height: 50px;\n          background-size: contain !important; }\n          section.promo .items .item .icon.devices {\n            width: 100% !important; }\n        section.promo .items .item .text {\n          font-style: normal;\n          font-weight: normal;\n          line-height: 25px;\n          font-size: 17px;\n          color: #333333; } }\n@media screen and (max-width: 600px) {\n  section.promo {\n    flex-direction: column;\n    padding: 0 50px 26px; }\n    section.promo .items {\n      flex-direction: column;\n      max-width: initial;\n      width: 100%; }\n      section.promo .items span.mobile-border {\n        width: calc(100vw - 186px);\n        border-top: 1px solid #E7E7E7;\n        display: inline-block; }\n      section.promo .items .item {\n        width: 100%;\n        padding: 0;\n        margin: 40px 0; }\n        section.promo .items .item.bordered {\n          border: none; }\n        section.promo .items .item .icon {\n          margin-bottom: 30px; }\n        section.promo .items .item .text {\n          font-style: normal;\n          font-weight: normal;\n          line-height: 25px;\n          font-size: 17px;\n          color: #333333; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4emF2Z29yb2RuaWkvUHJvamVjdHMvbGFudGhpZXItcHJvbW9zaXRlL3NyYy9zdHlsZXMvX3VpLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9jb21wb25lbnRzL3Byb21vL3Byb21vLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FsZXh6YXZnb3JvZG5paS9Qcm9qZWN0cy9sYW50aGllci1wcm9tb3NpdGUvc3JjL2FwcC9wYWdlcy9tYWluLXBhZ2UvY29tcG9uZW50cy9wcm9tby9wcm9tby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTs7RUNKRTtBQ0FGO0VGMENFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQS9DWSxFQUFBO0FBa0ZkOztFQ3ZFRTtBRDZMRjtFQUNFLGNBeE1jO0VBeU1kLHFCQUFxQixFQUFBO0FFek12QjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsb0JBQW9CLEVBQUE7QUFOdEI7SUFRSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCLEVBQUE7QUFackI7TUFjTSwyQkFBMkI7TUFDM0IsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLHFCQUFxQixFQUFBO0FBbkIzQjtRQXFCUSw4QkZuQlk7UUVvQlosK0JGcEJZLEVBQUE7QUVGcEI7UUF5QlEsbUJBQW1CO1FBQ25CLFlBQVksRUFBQTtBQTFCcEI7VUE0QlUsV0FBVztVQUNYLDhDQUFvRSxFQUFBO0FBN0I5RTtVQWdDVSxXQUFXO1VBQ1gsb0RBQTBFLEVBQUE7QUFqQ3BGO1VBb0NVLFlBQVk7VUFDWixtREFBeUUsRUFBQTtBQXJDbkY7UUEwQ1EsV0FBVztRQUNYLGtCQUFrQixFQUFBO0FBTzFCO0VBbERBO0lBcURNLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLHVCQUF1QixFQUFBLEVBQ3hCO0FBS0w7RUE5REE7SUFnRUksc0JBQXNCO0lBQ3RCLGlCQUFpQixFQUFBO0lBakVyQjtNQW1FTSxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLGVBQWU7TUFDZiwyQkFBMkI7TUFDM0IsdUJBQXVCLEVBQUE7TUF2RTdCO1FBeUVRLFdBQVc7UUFDWCxlQUFlO1FBQ2YsY0FBYztRQUNkLHlCQUF5QixFQUFBO1FBNUVqQztVQThFVSxtQkFBbUI7VUFDbkIsc0JBQXFCO1VBQ3JCLFlBQVk7VUFDWixtQ0FBa0MsRUFBQTtVQWpGNUM7WUFtRlksc0JBQXFCLEVBQUE7UUFuRmpDO1VGd0pFLGtCQUFrQjtVQUNsQixtQkFBbUI7VUFDbkIsaUJBQWlCO1VBQ2pCLGVBQWU7VUFDZixjQTdKWSxFQUFBLEVFeUZMO0FBT1Q7RUEvRkE7SUFpR0ksc0JBQXNCO0lBQ3RCLG9CQUFvQixFQUFBO0lBbEd4QjtNQW9HTSxzQkFBc0I7TUFDdEIsa0JBQWtCO01BQ2xCLFdBQVcsRUFBQTtNQU5mO1FBUU0sMEJBQTBCO1FBQzFCLDZCRnZHWTtRRXdHWixxQkFBcUIsRUFBQTtNQTFHN0I7UUE2R1EsV0FBVztRQUNYLFVBQVU7UUFDVixjQUFjLEVBQUE7UUEvR3RCO1VBaUhVLFlBQVksRUFBQTtRQWpIdEI7VUFvSFUsbUJBQW1CLEVBQUE7UUFwSDdCO1VGd0pFLGtCQUFrQjtVQUNsQixtQkFBbUI7VUFDbkIsaUJBQWlCO1VBQ2pCLGVBQWU7VUFDZixjQTdKWSxFQUFBLEVFeUhMIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL2NvbXBvbmVudHMvcHJvbW8vcHJvbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2xvcnNcbiRtYWluOiAjMzMzMzMzO1xuJGFjdGlvbjogIzIxQUU0OTtcbiRncmV5OiAjOTk5OTk5O1xuJGxpZ2h0LWdyZXk6ICNFN0U3RTc7XG5cbi8qIFR5cG9ncmFwaGljXG4gKiB1c2UgZXguIC50aXRsZSB7IEBleHRlbmQgJWgxOyB9XG4gKi9cbiVoMSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBmb250LXNpemU6IDU2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbn1cbiVoMiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbn1cbiVoMyB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICRtYWluO1xuICBtYXJnaW46IDA7XG59XG4laDQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAkbWFpbjtcbiAgbWFyZ2luOiAwO1xufVxuJWJvZHkge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVuYXZpZ2F0aW9uIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVzbGlkZXIge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRncmV5O1xufVxuQG1peGluIHNsaWRlciB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG4lY2FwdGlvbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5cbi8qIFR5cG9ncmFwaGljIG1vYmlsZVxuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMS1tb2I7IH1cbiAqL1xuJWgxLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoMS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogJG1haW47XG59XG4laDItbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGgyLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVoMy1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgY29sb3I6ICRtYWluO1xufVxuQG1peGluIGgzLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBjb2xvcjogJG1haW47XG59XG4laDQtbW9iIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbkBtaXhpbiBoNC1tb2Ige1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICRtYWluO1xufVxuJWJvZHktbW9iIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogJG1haW47XG59XG5AbWl4aW4gYm9keS1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAkbWFpbjtcbn1cbiVsb2NhbC1uYXZpZ2F0aW9uLW1vYiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogJGdyZXk7XG59XG5AbWl4aW4gbG9jYWwtbmF2aWdhdGlvbi1tb2Ige1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICRncmV5O1xufVxuXG4vLyBCdXR0b25cbiVidXR0b24ge1xuICBiYWNrZ3JvdW5kOiAkYWN0aW9uO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYWN0aW9uO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEzcHg7XG4gIG1pbi13aWR0aDogMTgxLjk4cHg7XG4gIGhlaWdodDogNTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuJXN0b3JlcyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDE2MXB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmEge1xuICBjb2xvcjogJGFjdGlvbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIiwiLyogVHlwb2dyYXBoaWNcbiAqIHVzZSBleC4gLnRpdGxlIHsgQGV4dGVuZCAlaDE7IH1cbiAqL1xuc2VjdGlvbi5wcm9tbyAuaXRlbXMgLml0ZW0gLnRleHQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzMzMzOyB9XG5cbi8qIFR5cG9ncmFwaGljIG1vYmlsZVxuICogdXNlIGV4LiAudGl0bGUgeyBAZXh0ZW5kICVoMS1tb2I7IH1cbiAqL1xuYSB7XG4gIGNvbG9yOiAjMjFBRTQ5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cblxuc2VjdGlvbi5wcm9tbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNDdweCAwIDYwcHg7IH1cbiAgc2VjdGlvbi5wcm9tbyAuaXRlbXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1heC13aWR0aDogMTI0MHB4OyB9XG4gICAgc2VjdGlvbi5wcm9tbyAuaXRlbXMgLml0ZW0ge1xuICAgICAgcGFkZGluZzogMTNweCA2N3B4IDZweCA2NXB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC8gMyk7IH1cbiAgICAgIHNlY3Rpb24ucHJvbW8gLml0ZW1zIC5pdGVtLmJvcmRlcmVkIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRTdFN0U3O1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRTdFN0U3OyB9XG4gICAgICBzZWN0aW9uLnByb21vIC5pdGVtcyAuaXRlbSAuaWNvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM0cHg7XG4gICAgICAgIGhlaWdodDogNjBweDsgfVxuICAgICAgICBzZWN0aW9uLnByb21vIC5pdGVtcyAuaXRlbSAuaWNvbi51cGRhdGUge1xuICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy91cGRhdGUuc3ZnXCIpIGNlbnRlciBuby1yZXBlYXQ7IH1cbiAgICAgICAgc2VjdGlvbi5wcm9tbyAuaXRlbXMgLml0ZW0gLmljb24uYm9vayB7XG4gICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL21lZGljYWwtYm9vay5zdmdcIikgY2VudGVyIG5vLXJlcGVhdDsgfVxuICAgICAgICBzZWN0aW9uLnByb21vIC5pdGVtcyAuaXRlbSAuaWNvbi5kZXZpY2VzIHtcbiAgICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2FsbC1kZXZpY2VzLnN2Z1wiKSBjZW50ZXIgbm8tcmVwZWF0OyB9XG4gICAgICBzZWN0aW9uLnByb21vIC5pdGVtcyAuaXRlbSAudGV4dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgc2VjdGlvbi5wcm9tbyAuaXRlbXMge1xuICAgIG1heC13aWR0aDogaW5pdGlhbDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH0gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIHNlY3Rpb24ucHJvbW8ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMCAwIDI2cHg7IH1cbiAgICBzZWN0aW9uLnByb21vIC5pdGVtcyB7XG4gICAgICBtYXgtd2lkdGg6IGluaXRpYWw7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDAgNjBweDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XG4gICAgICBzZWN0aW9uLnByb21vIC5pdGVtcyAuaXRlbSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwIDM2cHg7XG4gICAgICAgIG1hcmdpbjogNDBweCAwO1xuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAvIDMpOyB9XG4gICAgICAgIHNlY3Rpb24ucHJvbW8gLml0ZW1zIC5pdGVtIC5pY29uIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbiAhaW1wb3J0YW50OyB9XG4gICAgICAgICAgc2VjdGlvbi5wcm9tbyAuaXRlbXMgLml0ZW0gLmljb24uZGV2aWNlcyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyB9XG4gICAgICAgIHNlY3Rpb24ucHJvbW8gLml0ZW1zIC5pdGVtIC50ZXh0IHtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgY29sb3I6ICMzMzMzMzM7IH0gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBzZWN0aW9uLnByb21vIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDAgNTBweCAyNnB4OyB9XG4gICAgc2VjdGlvbi5wcm9tbyAuaXRlbXMge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1heC13aWR0aDogaW5pdGlhbDtcbiAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgICBzZWN0aW9uLnByb21vIC5pdGVtcyBzcGFuLm1vYmlsZS1ib3JkZXIge1xuICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDE4NnB4KTtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFN0U3RTc7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgc2VjdGlvbi5wcm9tbyAuaXRlbXMgLml0ZW0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiA0MHB4IDA7IH1cbiAgICAgICAgc2VjdGlvbi5wcm9tbyAuaXRlbXMgLml0ZW0uYm9yZGVyZWQge1xuICAgICAgICAgIGJvcmRlcjogbm9uZTsgfVxuICAgICAgICBzZWN0aW9uLnByb21vIC5pdGVtcyAuaXRlbSAuaWNvbiB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuICAgICAgICBzZWN0aW9uLnByb21vIC5pdGVtcyAuaXRlbSAudGV4dCB7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzOyB9IH1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy91aSc7XG5cbnNlY3Rpb24ucHJvbW8ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQ3cHggMCA2MHB4O1xuICAuaXRlbXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1heC13aWR0aDogMTI0MHB4O1xuICAgIC5pdGVtIHtcbiAgICAgIHBhZGRpbmc6IDEzcHggNjdweCA2cHggNjVweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDMpO1xuICAgICAgJi5ib3JkZXJlZCB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJGxpZ2h0LWdyZXk7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRsaWdodC1ncmV5O1xuICAgICAgfVxuICAgICAgLmljb24ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICYudXBkYXRlIHtcbiAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy91cGRhdGUuc3ZnJykgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgfVxuICAgICAgICAmLmJvb2sge1xuICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL21lZGljYWwtYm9vay5zdmcnKSBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgICB9XG4gICAgICAgICYuZGV2aWNlcyB7XG4gICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2FsbC1kZXZpY2VzLnN2ZycpIGNlbnRlciBuby1yZXBlYXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC50ZXh0IHtcbiAgICAgICAgQGV4dGVuZCAlYm9keTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gdGFibGV0IGxhbmRzY2FwZVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpe1xuICBzZWN0aW9uLnByb21vIHtcbiAgICAuaXRlbXMge1xuICAgICAgbWF4LXdpZHRoOiBpbml0aWFsO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdGFibGV0IHNtXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KXtcbiAgc2VjdGlvbi5wcm9tbyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAwIDAgMjZweDtcbiAgICAuaXRlbXMge1xuICAgICAgbWF4LXdpZHRoOiBpbml0aWFsO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAwIDYwcHg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIC5pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDAgMzZweDtcbiAgICAgICAgbWFyZ2luOiA0MHB4IDA7XG4gICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC8gMyk7XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgIHdpZHRoOiA1MHB4IWltcG9ydGFudDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluIWltcG9ydGFudDtcbiAgICAgICAgICAmLmRldmljZXMge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgQGluY2x1ZGUgYm9keS1tb2I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gbW9iaWxlIHhzXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XG4gIHNlY3Rpb24ucHJvbW8ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMCA1MHB4IDI2cHg7XG4gICAgLml0ZW1zIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtYXgtd2lkdGg6IGluaXRpYWw7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHNwYW4ubW9iaWxlLWJvcmRlciB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTg2cHgpO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGxpZ2h0LWdyZXk7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICAgIC5pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogNDBweCAwO1xuICAgICAgICAmLmJvcmRlcmVkIHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIEBpbmNsdWRlIGJvZHktbW9iO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

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

module.exports = "<div class=\"main-page\" appScroll>\n  <app-header></app-header>\n  <app-jumbotron></app-jumbotron>\n  <app-fixed-menu></app-fixed-menu>\n  <app-promo></app-promo>\n  <app-feature [id]=\"'search'\"\n               [title]=\"'Feature.item-1.title' | translate\"\n               [subTitle]=\"'Feature.item-1.sub-title' | translate\"\n               [text]=\"'Feature.item-1.text' | translate\"\n               [images]=\"returnImages('search')\"></app-feature>\n  <app-feature [id]=\"'design'\"\n               [title]=\"'Feature.item-2.title' | translate\"\n               [subTitle]=\"'Feature.item-2.sub-title' | translate\"\n               [text]=\"'Feature.item-2.text' | translate\"\n               [images]=\"returnImages('design')\"></app-feature>\n  <app-feature [id]=\"'sync'\"\n               [title]=\"'Feature.item-3.title' | translate\"\n               [subTitle]=\"'Feature.item-3.sub-title' | translate\"\n               [text]=\"'Feature.item-3.text' | translate\"\n               [multiPlatform]=\"false\"\n               [images]=\"returnImages('notes')\"></app-feature>\n  <app-feature-vertical [id]=\"'integration'\"\n                        [title]=\"'Feature.item-4.title' | translate\"\n                        [medCalXTitle]=\"'Feature.item-4.MedCalX.title' | translate\"\n                        [medCalXText]=\"'Feature.item-4.MedCalX.text' | translate\"\n                        [qxmdTitle]=\"'Feature.item-4.QxMD.title' | translate\"\n                        [qxmdText]=\"'Feature.item-4.QxMD.text' | translate\"\n                        [images]=\"integrationImages\"></app-feature-vertical>\n  <app-feature [id]=\"'uptodate'\"\n               [title]=\"'Feature.item-5.title' | translate\"\n               [subTitle]=\"'Feature.item-5.sub-title' | translate\"\n               [text]=\"'Feature.item-5.text' | translate\"\n               [images]=\"returnImages('uptodate')\"></app-feature>\n  <app-feature-topics [id]=\"'topics'\"></app-feature-topics>\n  <app-authors [id]=\"'authors'\"></app-authors>\n  <app-footer></app-footer>\n</div>\n\n"

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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(translateService) {
        this.translateService = translateService;
        this.lang = 'eng';
    }
    MainPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translateService.onLangChange.subscribe(function (value) {
            _this.lang = value.lang === 'fr' ? value.lang : 'eng';
        });
        this.integrationImages = [
            {
                platform: 'med',
                src: "../../../assets/features/iphone/" + this.lang + "/medcalc-" + this.lang + "@2x.png"
            },
            {
                platform: 'qxmd',
                src: "../../../assets/features/iphone/" + this.lang + "/readby-" + this.lang + "@2x.png"
            },
        ];
    };
    MainPageComponent.prototype.returnImages = function (feature) {
        return [
            {
                platform: 'web',
                src: "../../../assets/features/web/" + this.lang + "/" + feature + "-" + this.lang + "@2x.png"
            },
            {
                platform: 'ios',
                src: "../../../assets/features/iphone/" + this.lang + "/" + feature + "-" + this.lang + "@2x.png"
            },
            {
                platform: 'android',
                src: "../../../assets/features/android/" + this.lang + "/" + feature + "-" + this.lang + "@2x.png"
            },
        ];
    };
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/pages/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.scss */ "./src/app/pages/main-page/main-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
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
/* harmony import */ var ng4_click_outside__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng4-click-outside */ "./node_modules/ng4-click-outside/lib/index.js");
/* harmony import */ var ng4_click_outside__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ng4_click_outside__WEBPACK_IMPORTED_MODULE_19__);




















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
                ngx_responsive__WEBPACK_IMPORTED_MODULE_18__["ResponsiveModule"],
                ng4_click_outside__WEBPACK_IMPORTED_MODULE_19__["ClickOutsideModule"]
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