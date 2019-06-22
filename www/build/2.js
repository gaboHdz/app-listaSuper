webpackJsonp([2],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesPageModule", function() { return MesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mes__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MesPageModule = /** @class */ (function () {
    function MesPageModule() {
    }
    MesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mes__["a" /* MesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mes__["a" /* MesPage */]),
            ],
        })
    ], MesPageModule);
    return MesPageModule;
}());

//# sourceMappingURL=mes.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesPage; });
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
 * Generated class for the MesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MesPage = /** @class */ (function () {
    function MesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mes = this.navParams.get('mes');
        this.productos = this.mes.productos;
        console.log('mes => ', this.mes);
        console.log('productos => ', this.productos);
    }
    MesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MesPage');
    };
    MesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mes',template:/*ion-inline-start:"/Users/centralzone/Documents/ionic/app-listaSuper/src/pages/mes/mes.html"*/'<!--\n  Generated template for the MesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{mes.mes[0].nombre}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-grid>\n      <ion-row class="color-naranja">\n        <ion-col class="centrar-texto" col-sm-4 col-md-4 col-lg-4>Nombre</ion-col>\n        <ion-col class="centrar-texto" col-sm-4 col-md-4 col-lg-4>Cantidad</ion-col>\n        <ion-col class="centrar-texto" col-sm-4 col-md-4 col-lg-4>Historial</ion-col>\n      </ion-row>\n      <ion-row *ngFor="let prod of productos; let i = index">\n        <ion-col class="centrar-texto" col-sm-4 col-md-4 col-lg-4>{{ i+1 }} - {{prod.nombre}}</ion-col>\n        <ion-col class="centrar-texto" col-sm-4 col-md-4 col-lg-4>{{prod.cantidad}}</ion-col>\n        <ion-col class="centrar-texto" col-sm-4 col-md-4 col-lg-4>{{prod.historial}}</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/centralzone/Documents/ionic/app-listaSuper/src/pages/mes/mes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MesPage);
    return MesPage;
}());

//# sourceMappingURL=mes.js.map

/***/ })

});
//# sourceMappingURL=2.js.map