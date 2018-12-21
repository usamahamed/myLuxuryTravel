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

/***/ "./src/app/alert.service.ts":
/*!**********************************!*\
  !*** ./src/app/alert.service.ts ***!
  \**********************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertService = /** @class */ (function () {
    function AlertService(snackBar) {
        this.snackBar = snackBar;
    }
    AlertService.prototype.showToaster = function (msg) {
        this.snackBar.open(msg, null, {
            duration: 3000,
        });
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- Header section -->\n<header class=\"header-container\">\n  <nav>\n    <div class=\"nav-container\">\n     <a [routerLink]=\"['/']\"><img src=\"../assets/elements/Bitmap.png\" alt=\"logo\"/></a>\n       <div class=\"logo-text logo-text_mobile\"><span>Cura</span>Nu</div>\n      <div class=\"logo-subtitle logo-subtitle_mobile\">Zorg en welzijn</div>\n\n      <div class=\"btn\">\n          <div class=\"bar\"></div>\n          <div class=\"bar\"></div>\n          <div class=\"bar\"></div>\n        </div>\n    </div>\n\n    <ul>\n      <li><a href=\"#\">Groepen</a></li>\n      <li><a [routerLink]=\"['/contact']\">Contact</a></li>\n      <li><a href=\"#\">FAQ</a></li>\n      <li><a href=\"#\">Smoelenboek</a></li>\n      <li><a href=\"#\">Microblog</a></li>\n      <li><a href=\"#\">Over ons</a></li>\n    </ul>\n\n    \n    \n  </nav>\n\n <div class=\"header-icons\">\n    <span><i class=\"fa fa-cog\"></i></span>\n    <span><i class=\"far fa-bell\"></i></span>\n  </div>\n<!--   <div class=\"header-list\">\n    <ul>\n      <li>Groepen</li>\n      <li>Contact</li>\n      <li>FAQ</li>\n      <li>Smoelenboek</li>\n      <li>Microblog</li>\n      <li>Over ons</li>\n    </ul>\n  </div> -->\n \n</header>\n  <hr class=\"break mobile-hide\">\n<!-- End Header -->\n\n<!-- Logo section -->\n<section class=\"logo-section\">\n  <div class=\"logo-wrapper\">\n     <div class=\"logo-img\">\n    <a [routerLink]=\"['/']\"><img src=\"../assets/elements/Bitmap.png\" alt=\"logo\"></a>\n  </div>\n  <div class=\"logo-text\"><span>Cura</span>Nu</div>\n  </div>\n \n  <div class=\"logo-subtitle\">Zorg en welzijn <span>Intranet</span></div>\n</section>\n<!-- End Logo section -->\n\n<!-- Title bar section -->\n<section class=\"title-bar\">\n  <div class=\"title-bar-wrapper\">\n    <ul>\n      <li><a href=\"\">ARTIKELEN</a></li>\n      <li><a href=\"\">NIEUWS</a></li>\n      <li><a href=\"\">EVENEMENTEN</a></li>\n      <li><a href=\"\">KWALITEITSHANDBOEK</a></li>\n    </ul>\n\n     <form action=\"\" class=\"Search\">\n    <input class=\"Search-box\" type=\"search\" id=\"Search-box\" autocomplete=\"off\" placeholder=\"Search\">\n    <label class=\"Search-label\" for=\"Search-box\"><img src=\"../assets/elements/zoeken.png\" alt=\"search\"></label>\n  </form>\n  </div>\n\n  <!-- mobile menue -->\n  <div id=\"cont\">\n<div id=\"menu-fixed\">\n<!--   <div class=\"notes\"><p>Expand the menu!</p></div>\n -->  <a href=\"#cont\">\n    <i class=\"material-icons back\">&#xE314;</i>\n  </a>\n  <a href=\"#menu-fixed\">\n    <div class=\"logo\">\n      <span></span>   \n      <p>CuraNu</p>\n    </div>\n<!--     <p class=\"pmenu\">CuraNu</p>\n -->  </a>\n  <hr>\n  <ul class=\"menu\">\n    <li><i class=\"material-icons\">info</i><p>ARTIKELEN</p></li>\n    <li><i class=\"material-icons\">language</i><p>NIEUWS</p></li>\n    <li><i class=\"material-icons\">event</i><p>EVENEMENTEN</p></li>\n    <li><i class=\"material-icons\">grade</i><p>KWALITEITSHANDBOEK</p></li>\n  </ul>\n  <i class=\"material-icons info\">&#xE88E;</i>\n</div>\n</div>\n\n</section>\n<!-- End Title bar section -->\n\n<!-- routing -->\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CuraNu';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






 // <----- Here





var routes = [
    { path: '', component: _content_content_component__WEBPACK_IMPORTED_MODULE_9__["ContentComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_9__["ContentComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
            ],
            providers: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field{\n\t    width: 27rem;\n}\n.contact_img img{\n\t    width: 100%;\n    height: 100%;\n}\n@media screen  and (min-width:0px) and (max-width:1024px)  {\n.contact-container{\n\tflex-direction: column;\n}\n.contact_img{\n\torder: 1;\n}\n.contact_form{\norder: 2;\n}\n.contact-container{\n    margin-left: 4rem;\n}\n}"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-container flexy\">\n\n  <mat-card class=\"contact_form\">\n    <h2>Contact pagina</h2>\n    <h4>Vertel ons over uw probleem, zodat we u sneller kunnen helpen.</h4>\n      <form class=\"form\" (ngSubmit)=\"onSubmit(c)\" #c=\"ngForm\" >\n        <p><mat-form-field class=\"full-width\">\n        <input matInput #Name=\"ngModel\" placeholder=\"Naam\" id=\"Name\" name=\"Name\" value=\"Name\" ngModel minlength=\"3\" maxlength=\"250\" required>\n        <mat-error *ngIf=\"Name.touched && Name.invalid\">\n            <div *ngIf=\"Name.errors.required\">    \n                 Please Enter your Name\n            </div> \n            <div *ngIf=\"Name.errors.minlength\">    \n                 Name not less than 3 character\n           </div>\n           <div *ngIf=\"Name.errors.maxlength\">    \n               Name not more than 250 character\n          </div>\n        </mat-error>  \n        \n      </mat-form-field></p>\n      \n    <p><mat-form-field class=\"full-width\">\n        <input matInput #email=\"ngModel\" placeholder=\"Email\" id=\"email\" name=\"email\" value=\"email\" pattern=\"[^ @]*@[^ @]*\" ngModel  required>\n        <mat-error *ngIf=\"email.touched && email.invalid\">\n            <div *ngIf=\"email.errors.required\">    \n                 Please Enter your email\n            </div> \n            <div *ngIf=\"email.errors.pattern\">    \n                Please Enter vaild email\n           </div>\n        </mat-error>  \n        \n      </mat-form-field></p>\n   \n\n      <!-- -->\n      <p><mat-form-field class=\"full-width\">\n        <input matInput #topic=\"ngModel\" placeholder=\"topic\" id=\"Onderwerp\" name=\"topic\" value=\"topic\" ngModel minlength=\"3\" maxlength=\"250\" required>\n        <mat-error *ngIf=\"topic.touched && topic.invalid\">\n            <div *ngIf=\"topic.errors.required\">    \n                 Please Enter Topic\n            </div> \n            <div *ngIf=\"topic.errors.minlength\">    \n                Topic not less than 3 character\n           </div>\n           <div *ngIf=\"topic.errors.maxlength\">    \n              Topic not more than 250 character\n          </div>\n        </mat-error>  \n        \n      </mat-form-field></p>\n \n      <p>\n        <mat-form-field class=\"full-width\">\n          <textarea matInput #message=\"ngModel\" placeholder=\"Bericht\" value=\"message\" id=\"message\" name=\"message\" ngModel minlength=\"4\" required></textarea>\n             <!-- Error Validation -->\n           <mat-error *ngIf=\"message.touched && message.invalid\">\n            <div *ngIf=\"message.errors.required\">    \n              Please Enter message\n         </div> \n              <div *ngIf=\"message.errors.minlength\">    \n                message length not less than 4 character\n            </div>\n     </mat-error>  \n   <!--End  Error Validation -->\n        </mat-form-field>\n      </p>\n\n        \n\n    \n\n      <br />\n      <button mat-raised-button type=\"submit\" [disabled]=\"c.invalid\">Verstuur</button>\n\n    </form>\n  </mat-card>\n<div class=\"contact_img\">\n  <img src=\"../../assets/elements/contact-banner.jpg\" alt=\"\">\n</div>\n</div>\n  "

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../alert.service */ "./src/app/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent(router, alertService) {
        this.router = router;
        this.alertService = alertService;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onSubmit = function (c) {
        if (c.valid) {
            c.reset();
            this.alertService.showToaster('Your question is submitted');
            this.router.navigateByUrl('/');
        }
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/content/content.component.css":
/*!***********************************************!*\
  !*** ./src/app/content/content.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/content.component.html":
/*!************************************************!*\
  !*** ./src/app/content/content.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner></ngx-spinner>\n\n<section class=\"three_colums\">\n  <section class=\"three_colums-one\">\n    <!-- Contenedor -->\n  <div class=\"accordion\">\n      <ng-container   *ngFor=\"let fetch of fetchdata.ACCORDIONS\">\n\n    <h2 class=\"accordion__items\">{{fetch.name}}</h2>\n    <div class=\"accordion__content\">\n      <h3 class=\"accordion__content__caption\">{{fetch.title}}</h3>\n      <p class=\"accordion__content__txt\">{{fetch.content}}</p>\n    </div>\n  </ng-container>\n</div>\n\n\n<!-- Second panel -->\n <div class=\"panel panel-default\">\n              <div class=\"panel-heading flexy\">\n                <img class=\"panel-img\" src=\"../../assets/elements/calendar.png\" alt=\"\">\n                <h3 class=\"panel-title\">EVENEMENTEN</h3><ul class=\"rad-panel-action\">\n                                  <li><img src=\"../../assets/elements/arrow-down.png\" class=\"fa fa-chevron-down\"></li><li><img src=\"../../assets/elements/Shape 2.png\" class=\"fa fa-close\">                                  </li>\n                                </ul>\n              </div>\n              <div class=\"panel-body\">\n                <ul  *ngFor=\"let fetch of fetchdata.EVENEMENTEN\">\n                  <li class=\"flexy\"><span class=\"p-elem1 custom-pad\">{{fetch.date}} </span>\n                    <span class=\"p-elem2\">{{fetch.eventname}}</span></li>\n                  <hr class=\"break\">\n                </ul>\n              </div>\n              <div class=\"panel-footer flexy\">\n                <span class=\"panel-footer_text\">Meer evenementen</span>\n                <img class=\"panel-footer_img\" src=\"../../assets/elements/arrow-right.png\" alt=\"\">\n              </div>\n            </div>\n\n<!-- panel 3 -->\n\n   <div class=\"panel panel-default\">\n              <div class=\"panel-heading flexy\">\n                <img class=\"panel-img\" src=\"../../assets/elements/newspaper.png\" alt=\"\">\n                <h3 class=\"panel-title\">NIEUWS</h3><ul class=\"rad-panel-action\">\n                                  <li><img src=\"../../assets/elements/arrow-down.png\" class=\"fa fa-chevron-down\"></li><li><img src=\"../../assets/elements/Shape 2.png\" class=\"fa fa-close\">\n                                  </li>\n                                </ul>\n              </div>\n              <div class=\"panel-body\">\n                <ul  *ngFor=\"let fetch of fetchdata.NIEUWS\">\n                  <li class=\"flexy\"><img class=\"p-elem1 custom-pad1\" src=\"../../assets/elements/{{fetch.img}}\" alt=\"\">\n                    <span class=\"p-elem2 custom-pad2\">\n                      <ul><li class=\"custom-pad\">{{fetch.date}}</li><li>{{fetch.content}}</li></ul>\n                    </span>\n                      <img class=\"p-elem3\" src=\"../../assets/elements/Bitmap 4.png\" alt=\"\">\n\n                  </li>\n                  <hr class=\"break\">\n\n                </ul>\n              </div>\n\n              <div class=\"panel-footer flexy\">\n                <span class=\"panel-footer_text\">Meer nieuws</span>\n                <img class=\"panel-footer_img\" src=\"../../assets/elements/arrow-right.png\" alt=\"\">\n              </div>\n            </div>\n\n\n<!-- panel 4 -->\n <div class=\"panel flexy p-top\">\n                <span class=\"panel-footer_text\">Widget toevoegen</span>\n                <img class=\"panel-footer_img\" src=\"../../assets/elements/add.png\" alt=\"\">\n              </div>\n\n  </section>\n\n\n\n  <section class=\"three_colums-two\">\n\n    <!-- panel 1 -->\n      <div class=\"panel panel-default\">\n              <div class=\"panel-heading flexy\">\n                <img class=\"panel-img\" src=\"../../assets/elements/external-link 3.png\" alt=\"\">\n                <h3 class=\"panel-title\">DIRECT NAAR</h3><ul class=\"rad-panel-action\">\n                                  <li><img src=\"../../assets/elements/arrow-down.png\" class=\"fa fa-chevron-down\"></li><li><img src=\"../../assets/elements/Shape 2.png\" class=\"fa fa-close\">\n                                  </li>\n                                </ul>\n              </div>\n              <div class=\"panel-body\">\n                <ul  *ngFor=\"let fetch of fetchdata.DIRECTNAAR\">\n                  <li class=\"flexy\"><img class=\"p-elem1\" src=\"../../assets/elements/{{fetch.img}}\" alt=\"\">\n                    <span class=\"p-elem2\">{{fetch.content}}</span></li>\n                  <hr class=\"break\">\n                \n                </ul>\n              </div>\n            </div>\n    \n\n<!-- Second panel -->\n <div class=\"panel panel-default\">\n              <div class=\"panel-heading flexy\">\n                <img class=\"panel-img\" src=\"../../assets/elements/calendar.png\" alt=\"\">\n                <h3 class=\"panel-title\">BLOGS</h3><ul class=\"rad-panel-action\">\n                                  <li><img src=\"../../assets/elements/arrow-down.png\" class=\"fa fa-chevron-down\"></li><li><img src=\"../../assets/elements/Shape 2.png\" class=\"fa fa-close\">\n                                  </li>\n                                </ul>\n              </div>\n              <div class=\"panel-body\">\n                <ul *ngFor=\"let fetch of fetchdata.BLOGS\">\n                  <li class=\"flexy\">\n                    <img src=\"../../assets/elements/{{fetch.img}}\" class=\"avatar\">\n                      <ul class=\"user-info\"><li>{{fetch.name}}</li><li class=\"custom-pad\">{{fetch.date}}</li></ul>\n                      <div class=\"user-likes\">\n                        <img src=\"../../assets/elements/Bitmap 4.png\" alt=\"\">\n                        <img src=\"../../assets/elements/Bitmap 4.png\" alt=\"\">\n                      </div>\n                    </li>\n                  \n\n                  <li>\n                   <ul class=\"user-comment\"><li>{{fetch.title}}</li><li>{{fetch.body}} </li></ul>\n\n                  </li>\n\n                   </ul>\n              </div>\n              <div class=\"panel-footer flexy\">\n                <span class=\"panel-footer_text\">Meer blogs</span>\n                <img class=\"panel-footer_img\" src=\"../../assets/elements/arrow-right.png\" alt=\"\">\n              </div>\n            </div>\n\n\n            <!-- panel 3 -->\n<div class=\"panel panel-default\">\n              <div class=\"panel-heading flexy\">\n                <img class=\"panel-img\" src=\"../../assets/elements/kwaliteitshandboek.png\" alt=\"\">\n                <h3 class=\"panel-title\">KWALITEITSHANDBOEK</h3><ul class=\"rad-panel-action\">\n                                  <li><img src=\"../../assets/elements/arrow-down.png\" class=\"fa fa-chevron-down\"></li><li><img src=\"../../assets/elements/Shape 2.png\" class=\"fa fa-close\">\n                                  </li>\n                                </ul>\n              </div>\n              <div class=\"panel-body\">\n                <ul *ngFor=\"let fetch of fetchdata.KWALITEITSHANDBOEK\">\n                  <li >                    \n                    <ul class=\"BOEK-info\"><li>{{fetch.title}}</li><li class=\"custom-pad\">{{fetch.body}}</li></ul>\n</li>\n                  <hr class=\"break\">\n                </ul>\n              </div>\n              <div class=\"panel-footer flexy\">\n                <span class=\"panel-footer_text\">Naar kwaliteitshandboek</span>\n                <img class=\"panel-footer_img\" src=\"../../assets/elements/arrow-right.png\" alt=\"\">\n              </div>\n            </div>\n\n\n  <!-- panel 4 -->\n<div class=\"panel panel-default\">\n              <div class=\"panel-heading flexy\">\n                <img class=\"panel-img\" src=\"../../assets/elements/kwaliteitshandboek.png\" alt=\"\">\n                <h3 class=\"panel-title\">PEILINGEN</h3><ul class=\"rad-panel-action\">\n                                  <li><img src=\"../../assets/elements/arrow-down.png\" class=\"fa fa-chevron-down\"></li><li><img src=\"../../assets/elements/Shape 2.png\" class=\"fa fa-close\">\n                                  </li>\n                                </ul>\n              </div>\n              <div class=\"panel-body\" >\n                <div class=\"empty-panel_text\" *ngFor=\"let fetch of fetchdata.PEILINGEN\">\n                    {{fetch.title}}\n                  \n                \n                </div>\n              </div>\n      \n            </div>\n\n\n  <!-- panel 5 -->\n<div class=\"panel panel-custom\">\n              <div class=\"panel-heading flexy\">\n                <img class=\"panel-img\" src=\"../../assets/elements/external-link 3.png\" alt=\"\">\n                <h3 class=\"panel-title\">MIJN LINKS</h3><ul class=\"rad-panel-action\">\n                                  <li><img src=\"../../assets/elements/arrow-down.png\" class=\"fa fa-chevron-down\"></li><li><img src=\"../../assets/elements/Shape 2.png\" class=\"fa fa-close\">\n                                  </li>\n                                </ul>\n              </div>\n              <div class=\"panel-body\">\n                <ul *ngFor=\"let fetch of fetchdata.MIJNLINKS\">\n                  <li >                    \n                    <ul class=\"BOEK-info\"><li>{{fetch}}</li></ul>\n</li>\n                  <hr class=\"break\">\n                </ul>\n              </div>\n             \n            </div>\n\n\n\n  </section>\n\n\n  <section class=\"three_colums-three three_colums-one_custom\">\n<!-- panel 1 -->\n    <div class=\"widget \">\n      <div class=\"container\">\n        <div class=\"content\">\n          <h2>TELEFOONBOEK</h2>\n        <h4>Vind collega’s op naam, trefwoord, functie, etc.</h4> \n        </div>\n \n      <form action=\"\" class=\"Search custom_search\">\n    <input class=\"Search-box custom_Search-box\" type=\"search\" id=\"Search-box\" autocomplete=\"off\" placeholder=\"Search\">\n    <label class=\"Search-label custom_Search-label\" for=\"Search-box\"><img src=\"../../assets/elements/zoeken.png\" alt=\"search\"></label>\n  </form>\n\n      </div>\n    </div>\n\n<!-- panel 2 -->\n <div class=\"panel \">\n              <div class=\"panel-heading flexy\">\n                <img class=\"panel-img\" src=\"../../assets/elements/Shape.png\" alt=\"\">\n                <h3 class=\"panel-title\">MICROBLOG</h3><ul class=\"rad-panel-action\">\n                                  <li><img src=\"../../assets/elements/arrow-down.png\" class=\"fa fa-chevron-down\"></li><li><img src=\"../../assets/elements/Shape 2.png\" class=\"fa fa-close\">\n                                  </li>\n                                </ul>\n              </div>\n              <div class=\"panel-body\">\n                <ul *ngFor=\"let fetch of fetchdata.MICROBLOG\">\n                  <li>\n                   <textarea class=\"panel-textarea\" name=\"blog\" id=\"blog\" cols=\"30\" rows=\"10\"></textarea>\n                    </li>\n                  \n                  <li class=\"flexy\">\n                   <img src=\"../../assets/elements/Bitmap 2.png\" alt=\"\">\n                    <button class=\"panel-btn\">Plaats</button>\n                  </li>\n\n\n                   <li class=\"flexy\">\n                    <img src=\"../../assets/elements/{{fetch.img}}\" class=\"avatar\">\n                      <ul class=\"user-info\"><li>{{fetch.name}}</li><li class=\"custom-pad\">{{fetch.date}}</li></ul>\n                      <div class=\"user-likes\">\n                        <img src=\"../../assets/elements/Bitmap 4.png\" alt=\"\">\n                      </div>\n                    </li>\n              <li class=\"user_news\">{{fetch.body}}</li>\n                <li><img class=\"panel-img_detail\" src=\"../../assets/elements/unnamed.png\" alt=\"\"></li>\n                <li>Lees meer en reacties (0)</li>\n                   </ul>\n              </div>\n              <div class=\"panel-footer flexy\">\n                <span class=\"panel-footer_text\">Toon meer</span>\n                <img class=\"panel-footer_img\" src=\"../../assets/elements/arrow-right.png\" alt=\"\">\n              </div>\n            </div>\n\n\n            <!-- panel 3 -->\n      <div class=\"panel \">\n              <div class=\"panel-heading flexy\">\n                <img class=\"panel-img\" src=\"../../assets/elements/groups.png\" alt=\"\">\n                <h3 class=\"panel-title\">MIJN GROEPEN</h3><ul class=\"rad-panel-action\">\n                                  <li><img src=\"../../assets/elements/arrow-down.png\" class=\"fa fa-chevron-down\"></li><li><img src=\"../../assets/elements/Shape 2.png\" class=\"fa fa-close\">\n                                  </li>\n                                </ul>\n              </div>\n              <div class=\"panel-body\">\n                <ul *ngFor=\"let fetch of fetchdata.MIJNGROEPEN\">\n                  <li class=\"flexy\"><img class=\"p-elem1\" src=\"../../assets/elements/{{fetch.img}}\" alt=\"\">\n                    <span class=\"p-elem2\">{{fetch.title}}</span></li>\n                  <hr class=\"break\">\n                  \n                </ul>\n              </div>\n              <div class=\"panel-footer flexy\">\n                <span class=\"panel-footer_text\">Meer groepen</span>\n                <img class=\"panel-footer_img\" src=\"../../assets/elements/arrow-right.png\" alt=\"\">\n              </div>\n            </div>\n\n  </section>\n\n</section>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _fetch_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../fetch.service */ "./src/app/fetch.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentComponent = /** @class */ (function () {
    function ContentComponent(spinner, fetch) {
        this.spinner = spinner;
        this.fetch = fetch;
        this.fetchdata = [];
    }
    ContentComponent.prototype.ngOnInit = function () {
        this.getPageData();
    };
    ContentComponent.prototype.getPageData = function () {
        var _this = this;
        this.fetch.getJSON().subscribe(function (data) {
            console.log(data);
            _this.fetchdata = data;
            setTimeout(function () {
                /** spinner ends after 5 seconds */
                _this.spinner.hide();
            }, 2300);
        });
        /** spinner starts on init */
        this.spinner.show();
    };
    // load script dynamically for script refreshing after routing
    ContentComponent.prototype.ngAfterViewInit = function () {
        this.loadScript('./../src/index.js');
    };
    ContentComponent.prototype.loadScript = function (url) {
        var node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], _fetch_service__WEBPACK_IMPORTED_MODULE_0__["FetchService"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/fetch.service.ts":
/*!**********************************!*\
  !*** ./src/app/fetch.service.ts ***!
  \**********************************/
/*! exports provided: FetchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchService", function() { return FetchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FetchService = /** @class */ (function () {
    function FetchService(http) {
        this.http = http;
    }
    FetchService.prototype.getJSON = function () {
        return this.http.get("./assets/data/data.json");
    };
    FetchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FetchService);
    return FetchService;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"]]
        })
    ], MaterialModule);
    return MaterialModule;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/usamahamed/Downloads/CuraNu-master/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map