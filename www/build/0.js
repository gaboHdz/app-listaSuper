webpackJsonp([0],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoMesPageModule", function() { return NuevoMesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuevo_mes__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NuevoMesPageModule = /** @class */ (function () {
    function NuevoMesPageModule() {
    }
    NuevoMesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nuevo_mes__["a" /* NuevoMesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nuevo_mes__["a" /* NuevoMesPage */]),
            ],
        })
    ], NuevoMesPageModule);
    return NuevoMesPageModule;
}());

//# sourceMappingURL=nuevo-mes.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevoMesPage; });
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
 * Generated class for the NuevoMesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NuevoMesPage = /** @class */ (function () {
    function NuevoMesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.banderaNombreMes = false;
        this.mesesLocalSrorage = [];
        this.productos = [];
        this.mesesLocalSrorage = JSON.parse(window.localStorage.getItem('meses'));
        if (this.mesesLocalSrorage != null) {
            this.contadorMesesId = this.mesesLocalSrorage.length + 1;
            console.log('contadorMesesId if => ', this.contadorMesesId);
        }
        else {
            this.contadorMesesId = 1;
            console.log('contadorMesesId else => ', this.contadorMesesId);
            this.mesesLocalSrorage = [];
        }
    }
    NuevoMesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NuevoMesPage');
    };
    NuevoMesPage.prototype.crearNombreMes = function () {
        if (this.nombreMes != null && this.nombreMes != '') {
            var mes = {
                mes: [{ 'id': this.contadorMesesId, 'nombre': this.nombreMes }],
                productos: []
            };
            console.log('meses antes ls => ', this.mesesLocalSrorage);
            this.mesesLocalSrorage.push(mes);
            console.log('meses despues ls => ', this.mesesLocalSrorage);
            window.localStorage.setItem('meses', JSON.stringify(this.mesesLocalSrorage));
            this.banderaNombreMes = true;
        }
    };
    NuevoMesPage.prototype.agregarProductoLocalStorage = function () {
        this.mesesLocalSrorage[this.contadorMesesId - 1].productos = this.productos;
        window.localStorage.setItem('meses', JSON.stringify(this.mesesLocalSrorage));
        console.log('meses con producto => ', this.mesesLocalSrorage);
        this.navCtrl.setRoot('MesesPage');
    };
    NuevoMesPage.prototype.agregarProducto = function () {
        console.log('posicion mes => ', this.mesesLocalSrorage[this.contadorMesesId - 1]);
        if (this.mesesLocalSrorage[this.contadorMesesId - 1].productos != null) {
            this.contadorProdId = this.mesesLocalSrorage[this.contadorMesesId - 1].productos.length + 1;
        }
        else {
            this.contadorProdId = 1;
        }
        this.producto = {
            id: this.contadorProdId,
            nombre: this.nombreProd,
            cantidad: this.cantidadProd,
            tipo: this.tipoCantidad,
            historial: ''
        };
        this.productos.push(this.producto);
        this.nombreProd = null;
        this.cantidadProd = null;
        this.tipoCantidad = null;
        console.log('lista productos => ', this.productos);
    };
    NuevoMesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nuevo-mes',template:/*ion-inline-start:"C:\Users\gabriel.hernandez\Documents\cordova\miApp\app-listaSuper\src\pages\nuevo-mes\nuevo-mes.html"*/'<!--\n\n  Generated template for the NuevoMesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Mes nuevo</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card *ngIf="banderaNombreMes == false">\n\n    <ion-list>\n\n\n\n      <ion-list-header class="centrar-texto">\n\n        Mes\n\n      </ion-list-header>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Nombre :</ion-label>\n\n        <ion-input [(ngModel)]="nombreMes" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <div padding>\n\n      <button (click)="crearNombreMes()" ion-button block>Crear</button>\n\n    </div>\n\n\n\n  </ion-card>\n\n\n\n  <ion-card *ngIf="banderaNombreMes == true">\n\n    <ion-list>\n\n\n\n      <ion-list-header class="centrar-texto">\n\n        Producto\n\n      </ion-list-header>\n\n        \n\n        <ion-grid>\n\n          <ion-row>\n\n              <ion-col col-sm-12 col-md-12 col-lg-12>\n\n                  <ion-label stacked>Nombre :</ion-label>\n\n                  <ion-input [(ngModel)]="nombreProd" type="text"></ion-input>\n\n              </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-sm-6 col-md-6 col-lg-6><ion-label stacked>Cantidad :</ion-label>\n\n              <ion-input [(ngModel)]="cantidadProd" type="text"></ion-input></ion-col>\n\n            <ion-col col-sm-6 col-md-6 col-lg-6><ion-label stacked>Tipo :</ion-label>\n\n              <ion-input [(ngModel)]="tipoCantidad" type="text"></ion-input></ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n\n\n    </ion-list>\n\n\n\n    <div padding>\n\n      <button (click)="agregarProducto()" ion-button block>Añadir</button>\n\n    </div>\n\n\n\n  </ion-card>\n\n\n\n  <ion-card *ngIf="productos.length > 0">\n\n    <ion-list>\n\n\n\n      <ion-list-header class="centrar-texto">\n\n        Productos añadidos\n\n      </ion-list-header>\n\n\n\n      <ion-card>\n\n        <ion-grid>\n\n          <ion-row class="color-naranja">\n\n            <ion-col class="centrar-texto" col-sm-6 col-md-6 col-lg-6>Nombre</ion-col>\n\n            <ion-col class="centrar-texto" col-sm-6 col-md-6 col-lg-6>Cantidad</ion-col>\n\n          </ion-row>\n\n          <ion-row *ngFor="let prod of productos">\n\n            <ion-col class="centrar-texto" col-sm-6 col-md-6 col-lg-6>{{prod.id}} - {{prod.nombre}}</ion-col>\n\n            <ion-col class="centrar-texto" col-sm-6 col-md-6 col-lg-6>{{prod.cantidad}} / {{prod.tipo}}</ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-card>\n\n\n\n    </ion-list>\n\n\n\n    <div padding>\n\n      <button class="boton-naranaja" (click)="agregarProductoLocalStorage()" ion-button block>Añadir todos</button>\n\n    </div>\n\n\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\gabriel.hernandez\Documents\cordova\miApp\app-listaSuper\src\pages\nuevo-mes\nuevo-mes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NuevoMesPage);
    return NuevoMesPage;
}());

//# sourceMappingURL=nuevo-mes.js.map

/***/ })

});
//# sourceMappingURL=0.js.map