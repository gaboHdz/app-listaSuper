webpackJsonp([1],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesesPageModule", function() { return MesesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meses__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MesesPageModule = /** @class */ (function () {
    function MesesPageModule() {
    }
    MesesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__meses__["a" /* MesesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__meses__["a" /* MesesPage */]),
            ],
        })
    ], MesesPageModule);
    return MesesPageModule;
}());

//# sourceMappingURL=meses.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MesesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MesesPage = /** @class */ (function () {
    function MesesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.meses = JSON.parse(window.localStorage.getItem('meses'));
        console.log('meses => ', this.meses);
    }
    MesesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MesesPage');
    };
    MesesPage.prototype.nuevoMes = function () {
        this.navCtrl.push('NuevoMesPage');
    };
    MesesPage.prototype.verMes = function (mes) {
        this.navCtrl.push('MesPage', { mes: mes });
    };
    MesesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-meses',template:/*ion-inline-start:"C:\Users\gabriel.hernandez\Documents\cordova\miApp\app-listaSuper\src\pages\meses\meses.html"*/'<!--\n\n  Generated template for the MesesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n    <ion-buttons end>\n\n      <button (click)="nuevoMes()" ion-button icon-only>\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n    <ion-title>Tus meses</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <ion-list *ngIf="meses !=null">\n\n      <button *ngFor="let m of meses" ion-item (click)=\'verMes(m)\'>\n\n        {{m.mes[0].nombre}}\n\n      </button>\n\n    </ion-list>\n\n\n\n    <ion-list *ngIf="meses ==null">\n\n      <p>No hay datos que mostrar</p>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\gabriel.hernandez\Documents\cordova\miApp\app-listaSuper\src\pages\meses\meses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MesesPage);
    return MesesPage;
}());

//# sourceMappingURL=meses.js.map

/***/ })

});
//# sourceMappingURL=1.js.map