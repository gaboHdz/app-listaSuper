webpackJsonp([0],{

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 4 modules
var ionic_angular = __webpack_require__(113);

// CONCATENATED MODULE: ./src/pages/nuevo-mes/nuevo-mes.ts
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
var nuevo_mes_NuevoMesPage = /** @class */ (function () {
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
        Object(core["k" /* Component */])({
            selector: 'page-nuevo-mes',
            templateUrl: 'nuevo-mes.html',
        }),
        __metadata("design:paramtypes", [ionic_angular["f" /* NavController */], ionic_angular["g" /* NavParams */]])
    ], NuevoMesPage);
    return NuevoMesPage;
}());

//# sourceMappingURL=nuevo-mes.js.map
// CONCATENATED MODULE: ./src/pages/nuevo-mes/nuevo-mes.module.ts
var nuevo_mes_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var nuevo_mes_module_NuevoMesPageModule = /** @class */ (function () {
    function NuevoMesPageModule() {
    }
    NuevoMesPageModule = nuevo_mes_module___decorate([
        Object(core["D" /* NgModule */])({
            declarations: [
                nuevo_mes_NuevoMesPage,
            ],
            imports: [
                ionic_angular["d" /* IonicPageModule */].forChild(nuevo_mes_NuevoMesPage),
            ],
        })
    ], NuevoMesPageModule);
    return NuevoMesPageModule;
}());

//# sourceMappingURL=nuevo-mes.module.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory.js
var action_sheet_component_ngfactory = __webpack_require__(184);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-component.ngfactory.js
var alert_component_ngfactory = __webpack_require__(185);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.ngfactory.js
var app_root_ngfactory = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-component.ngfactory.js + 1 modules
var loading_component_ngfactory = __webpack_require__(187);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-component.ngfactory.js
var modal_component_ngfactory = __webpack_require__(188);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-component.ngfactory.js + 1 modules
var picker_component_ngfactory = __webpack_require__(189);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-component.ngfactory.js
var popover_component_ngfactory = __webpack_require__(190);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select-popover-component.ngfactory.js + 1 modules
var select_popover_component_ngfactory = __webpack_require__(191);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-component.ngfactory.js
var toast_component_ngfactory = __webpack_require__(192);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/card/card.js
var card = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.ngfactory.js + 1 modules
var item_ngfactory = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.js
var item = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/form.js
var util_form = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-reorder.js + 1 modules
var item_reorder = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list-header.js
var list_header = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-content.js
var item_content = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/label/label.js
var label = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.js
var input = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/ionic-angular/components/input/input.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 













var styles_TextInput = [];
var RenderType_TextInput = core["_15" /* ɵcrt */]({ encapsulation: 2, styles: styles_TextInput, data: {} });

function View_TextInput_1(_l) { return core["_40" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, [[1, 0], ["textInput", 1]], null, 1, "input", [["class", "text-input"], ["dir", "auto"]], [[8, "type", 0], [1, "aria-labelledby", 0], [1, "min", 0], [1, "max", 0], [1, "step", 0], [1, "autocomplete", 0], [1, "autocorrect", 0], [8, "placeholder", 0], [8, "disabled", 0], [8, "readOnly", 0]], [[null, "input"], [null, "blur"], [null, "focus"], [null, "keydown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_co.onInput($event) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_co.onBlur($event) !== false);
        ad = (pd_1 && ad);
    } if (("focus" === en)) {
        var pd_2 = (_co.onFocus($event) !== false);
        ad = (pd_2 && ad);
    } if (("keydown" === en)) {
        var pd_3 = (_co.onKeydown($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), core["_16" /* ɵdid */](1, 278528, null, 0, common["h" /* NgClass */], [core["A" /* IterableDiffers */], core["B" /* KeyValueDiffers */], core["p" /* ElementRef */], core["O" /* Renderer2 */]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_10 = "text-input"; var currVal_11 = ("text-input-" + _co._mode); _ck(_v, 1, 0, currVal_10, currVal_11); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co._type; var currVal_1 = _co._labelId; var currVal_2 = _co.min; var currVal_3 = _co.max; var currVal_4 = _co.step; var currVal_5 = _co.autocomplete; var currVal_6 = _co.autocorrect; var currVal_7 = _co.placeholder; var currVal_8 = _co._disabled; var currVal_9 = _co._readonly; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
function View_TextInput_2(_l) { return core["_40" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, [[1, 0], ["textInput", 1]], null, 1, "textarea", [["class", "text-input"]], [[1, "aria-labelledby", 0], [1, "autocomplete", 0], [1, "autocorrect", 0], [8, "placeholder", 0], [8, "disabled", 0], [8, "readOnly", 0]], [[null, "input"], [null, "blur"], [null, "focus"], [null, "keydown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_co.onInput($event) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_co.onBlur($event) !== false);
        ad = (pd_1 && ad);
    } if (("focus" === en)) {
        var pd_2 = (_co.onFocus($event) !== false);
        ad = (pd_2 && ad);
    } if (("keydown" === en)) {
        var pd_3 = (_co.onKeydown($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), core["_16" /* ɵdid */](1, 278528, null, 0, common["h" /* NgClass */], [core["A" /* IterableDiffers */], core["B" /* KeyValueDiffers */], core["p" /* ElementRef */], core["O" /* Renderer2 */]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_6 = "text-input"; var currVal_7 = ("text-input-" + _co._mode); _ck(_v, 1, 0, currVal_6, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co._labelId; var currVal_1 = _co.autocomplete; var currVal_2 = _co.autocorrect; var currVal_3 = _co.placeholder; var currVal_4 = _co._disabled; var currVal_5 = _co._readonly; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
function View_TextInput_3(_l) { return core["_40" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 1, "button", [["class", "text-input-clear-icon"], ["clear", ""], ["ion-button", ""], ["tabindex", "-1"], ["type", "button"]], null, [[null, "click"], [null, "mousedown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clearTextInput($event) !== false);
        ad = (pd_0 && ad);
    } if (("mousedown" === en)) {
        var pd_1 = (_co.clearTextInput($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_16" /* ɵdid */](1, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { clear: [0, "clear"] }, null)], function (_ck, _v) { var currVal_0 = ""; _ck(_v, 1, 0, currVal_0); }, null); }
function View_TextInput_4(_l) { return core["_40" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 0, "div", [["class", "input-cover"]], null, [[null, "touchstart"], [null, "touchend"], [null, "mousedown"], [null, "mouseup"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("touchstart" === en)) {
        var pd_0 = (_co._pointerStart($event) !== false);
        ad = (pd_0 && ad);
    } if (("touchend" === en)) {
        var pd_1 = (_co._pointerEnd($event) !== false);
        ad = (pd_1 && ad);
    } if (("mousedown" === en)) {
        var pd_2 = (_co._pointerStart($event) !== false);
        ad = (pd_2 && ad);
    } if (("mouseup" === en)) {
        var pd_3 = (_co._pointerEnd($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null))], null, null); }
function View_TextInput_0(_l) { return core["_40" /* ɵvid */](2, [core["_36" /* ɵqud */](671088640, 1, { _native: 0 }), (_l()(), core["_12" /* ɵand */](16777216, null, null, 1, null, View_TextInput_1)), core["_16" /* ɵdid */](2, 16384, null, 0, common["j" /* NgIf */], [core["_0" /* ViewContainerRef */], core["V" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_12" /* ɵand */](16777216, null, null, 1, null, View_TextInput_2)), core["_16" /* ɵdid */](4, 16384, null, 0, common["j" /* NgIf */], [core["_0" /* ViewContainerRef */], core["V" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_12" /* ɵand */](16777216, null, null, 1, null, View_TextInput_3)), core["_16" /* ɵdid */](6, 16384, null, 0, common["j" /* NgIf */], [core["_0" /* ViewContainerRef */], core["V" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_12" /* ɵand */](16777216, null, null, 1, null, View_TextInput_4)), core["_16" /* ɵdid */](8, 16384, null, 0, common["j" /* NgIf */], [core["_0" /* ViewContainerRef */], core["V" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co._isTextarea; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co._isTextarea; _ck(_v, 4, 0, currVal_1); var currVal_2 = _co._clearInput; _ck(_v, 6, 0, currVal_2); var currVal_3 = _co._useAssist; _ck(_v, 8, 0, currVal_3); }, null); }
function View_TextInput_Host_0(_l) { return core["_40" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 1, "ion-input", [], null, null, null, View_TextInput_0, RenderType_TextInput)), core["_16" /* ɵdid */](1, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app["a" /* App */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["f" /* NgControl */]], dom_controller["a" /* DomController */]], null, null)], null, null); }
var TextInputNgFactory = core["_13" /* ɵccf */]("ion-input,ion-textarea", input["a" /* TextInput */], View_TextInput_Host_0, { value: "value", color: "color", mode: "mode", disabled: "disabled", clearInput: "clearInput", type: "type", readonly: "readonly", clearOnEdit: "clearOnEdit", autocomplete: "autocomplete", autocorrect: "autocorrect", placeholder: "placeholder", min: "min", max: "max", step: "step" }, { ionFocus: "ionFocus", ionChange: "ionChange", ionBlur: "ionBlur", input: "input", blur: "blur", focus: "focus" }, []);

//# sourceMappingURL=input.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/grid.js
var grid = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/row.js
var row = __webpack_require__(118);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/col.js
var col = __webpack_require__(116);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(235);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(193);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(194);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(9);

// CONCATENATED MODULE: ./src/pages/nuevo-mes/nuevo-mes.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





































var styles_NuevoMesPage = [];
var RenderType_NuevoMesPage = core["_15" /* ɵcrt */]({ encapsulation: 2, styles: styles_NuevoMesPage, data: {} });

function View_NuevoMesPage_1(_l) { return core["_40" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 39, "ion-card", [], null, null, null, null, null)), core["_16" /* ɵdid */](1, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_38" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_17" /* ɵeld */](3, 0, null, null, 28, "ion-list", [], null, null, null, null, null)), core["_16" /* ɵdid */](4, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_38" /* ɵted */](-1, null, ["\n\n      "])), (_l()(), core["_17" /* ɵeld */](6, 0, null, null, 6, "ion-list-header", [["class", "centrar-texto item"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_16" /* ɵdid */](7, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_36" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_36" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_36" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_16" /* ɵdid */](11, 16384, null, 0, list_header["a" /* ListHeader */], [config["a" /* Config */], core["N" /* Renderer */], core["p" /* ElementRef */], [8, null]], null, null), (_l()(), core["_38" /* ɵted */](-1, 2, ["\n        Mes\n      "])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n\n      "])), (_l()(), core["_17" /* ɵeld */](14, 0, null, null, 16, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_16" /* ɵdid */](15, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_36" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_36" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_36" /* ɵqud */](603979776, 6, { _icons: 1 }), core["_16" /* ɵdid */](19, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_38" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_17" /* ɵeld */](21, 0, null, 1, 2, "ion-label", [["stacked", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](22, 16384, [[4, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_38" /* ɵted */](-1, null, ["Nombre :"])), (_l()(), core["_38" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_17" /* ɵeld */](25, 0, null, 3, 4, "ion-input", [["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.nombreMes = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_TextInput_0, RenderType_TextInput)), core["_16" /* ɵdid */](26, 671744, null, 0, esm5_forms["h" /* NgModel */], [[8, null], [8, null], [8, null], [8, null]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_34" /* ɵprd */](2048, null, esm5_forms["f" /* NgControl */], null, [esm5_forms["h" /* NgModel */]]), core["_16" /* ɵdid */](28, 16384, null, 0, esm5_forms["g" /* NgControlStatus */], [esm5_forms["f" /* NgControl */]], null, null), core["_16" /* ɵdid */](29, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app["a" /* App */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["f" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"] }, null), (_l()(), core["_38" /* ɵted */](-1, 2, ["\n      "])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), core["_17" /* ɵeld */](33, 0, null, null, 5, "div", [["padding", ""]], null, null, null, null, null)), (_l()(), core["_38" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_17" /* ɵeld */](35, 0, null, null, 2, "button", [["block", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.crearNombreMes() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_16" /* ɵdid */](36, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_38" /* ɵted */](-1, 0, ["Crear"])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.nombreMes; _ck(_v, 26, 0, currVal_7); var currVal_8 = "text"; _ck(_v, 29, 0, currVal_8); var currVal_9 = ""; _ck(_v, 36, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 28).ngClassUntouched; var currVal_1 = core["_29" /* ɵnov */](_v, 28).ngClassTouched; var currVal_2 = core["_29" /* ɵnov */](_v, 28).ngClassPristine; var currVal_3 = core["_29" /* ɵnov */](_v, 28).ngClassDirty; var currVal_4 = core["_29" /* ɵnov */](_v, 28).ngClassValid; var currVal_5 = core["_29" /* ɵnov */](_v, 28).ngClassInvalid; var currVal_6 = core["_29" /* ɵnov */](_v, 28).ngClassPending; _ck(_v, 25, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_NuevoMesPage_2(_l) { return core["_40" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 71, "ion-card", [], null, null, null, null, null)), core["_16" /* ɵdid */](1, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_38" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_17" /* ɵeld */](3, 0, null, null, 60, "ion-list", [], null, null, null, null, null)), core["_16" /* ɵdid */](4, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_38" /* ɵted */](-1, null, ["\n\n      "])), (_l()(), core["_17" /* ɵeld */](6, 0, null, null, 6, "ion-list-header", [["class", "centrar-texto item"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_16" /* ɵdid */](7, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_36" /* ɵqud */](335544320, 7, { contentLabel: 0 }), core["_36" /* ɵqud */](603979776, 8, { _buttons: 1 }), core["_36" /* ɵqud */](603979776, 9, { _icons: 1 }), core["_16" /* ɵdid */](11, 16384, null, 0, list_header["a" /* ListHeader */], [config["a" /* Config */], core["N" /* Renderer */], core["p" /* ElementRef */], [8, null]], null, null), (_l()(), core["_38" /* ɵted */](-1, 2, ["\n        Producto\n      "])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n        \n        "])), (_l()(), core["_17" /* ɵeld */](14, 0, null, null, 48, "ion-grid", [["class", "grid"]], null, null, null, null, null)), core["_16" /* ɵdid */](15, 16384, null, 0, grid["a" /* Grid */], [], null, null), (_l()(), core["_38" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["_17" /* ɵeld */](17, 0, null, null, 16, "ion-row", [["class", "row"]], null, null, null, null, null)), core["_16" /* ɵdid */](18, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_38" /* ɵted */](-1, null, ["\n              "])), (_l()(), core["_17" /* ɵeld */](20, 0, null, null, 12, "ion-col", [["class", "col"], ["col-lg-12", ""], ["col-md-12", ""], ["col-sm-12", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](21, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_38" /* ɵted */](-1, null, ["\n                  "])), (_l()(), core["_17" /* ɵeld */](23, 0, null, null, 2, "ion-label", [["stacked", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](24, 16384, null, 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_38" /* ɵted */](-1, null, ["Nombre :"])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n                  "])), (_l()(), core["_17" /* ɵeld */](27, 0, null, null, 4, "ion-input", [["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.nombreProd = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_TextInput_0, RenderType_TextInput)), core["_16" /* ɵdid */](28, 671744, null, 0, esm5_forms["h" /* NgModel */], [[8, null], [8, null], [8, null], [8, null]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_34" /* ɵprd */](2048, null, esm5_forms["f" /* NgControl */], null, [esm5_forms["h" /* NgModel */]]), core["_16" /* ɵdid */](30, 16384, null, 0, esm5_forms["g" /* NgControlStatus */], [esm5_forms["f" /* NgControl */]], null, null), core["_16" /* ɵdid */](31, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app["a" /* App */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["f" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"] }, null), (_l()(), core["_38" /* ɵted */](-1, null, ["\n              "])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["_17" /* ɵeld */](35, 0, null, null, 26, "ion-row", [["class", "row"]], null, null, null, null, null)), core["_16" /* ɵdid */](36, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_17" /* ɵeld */](38, 0, null, null, 10, "ion-col", [["class", "col"], ["col-lg-6", ""], ["col-md-6", ""], ["col-sm-6", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](39, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_17" /* ɵeld */](40, 0, null, null, 2, "ion-label", [["stacked", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](41, 16384, null, 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_38" /* ɵted */](-1, null, ["Cantidad :"])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n              "])), (_l()(), core["_17" /* ɵeld */](44, 0, null, null, 4, "ion-input", [["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.cantidadProd = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_TextInput_0, RenderType_TextInput)), core["_16" /* ɵdid */](45, 671744, null, 0, esm5_forms["h" /* NgModel */], [[8, null], [8, null], [8, null], [8, null]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_34" /* ɵprd */](2048, null, esm5_forms["f" /* NgControl */], null, [esm5_forms["h" /* NgModel */]]), core["_16" /* ɵdid */](47, 16384, null, 0, esm5_forms["g" /* NgControlStatus */], [esm5_forms["f" /* NgControl */]], null, null), core["_16" /* ɵdid */](48, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app["a" /* App */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["f" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"] }, null), (_l()(), core["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_17" /* ɵeld */](50, 0, null, null, 10, "ion-col", [["class", "col"], ["col-lg-6", ""], ["col-md-6", ""], ["col-sm-6", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](51, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_17" /* ɵeld */](52, 0, null, null, 2, "ion-label", [["stacked", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](53, 16384, null, 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_38" /* ɵted */](-1, null, ["Tipo :"])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n              "])), (_l()(), core["_17" /* ɵeld */](56, 0, null, null, 4, "ion-input", [["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.tipoCantidad = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_TextInput_0, RenderType_TextInput)), core["_16" /* ɵdid */](57, 671744, null, 0, esm5_forms["h" /* NgModel */], [[8, null], [8, null], [8, null], [8, null]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_34" /* ɵprd */](2048, null, esm5_forms["f" /* NgControl */], null, [esm5_forms["h" /* NgModel */]]), core["_16" /* ɵdid */](59, 16384, null, 0, esm5_forms["g" /* NgControlStatus */], [esm5_forms["f" /* NgControl */]], null, null), core["_16" /* ɵdid */](60, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app["a" /* App */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["f" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"] }, null), (_l()(), core["_38" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), core["_17" /* ɵeld */](65, 0, null, null, 5, "div", [["padding", ""]], null, null, null, null, null)), (_l()(), core["_38" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_17" /* ɵeld */](67, 0, null, null, 2, "button", [["block", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.agregarProducto() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_16" /* ɵdid */](68, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_38" /* ɵted */](-1, 0, ["A\u00F1adir"])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.nombreProd; _ck(_v, 28, 0, currVal_7); var currVal_8 = "text"; _ck(_v, 31, 0, currVal_8); var currVal_16 = _co.cantidadProd; _ck(_v, 45, 0, currVal_16); var currVal_17 = "text"; _ck(_v, 48, 0, currVal_17); var currVal_25 = _co.tipoCantidad; _ck(_v, 57, 0, currVal_25); var currVal_26 = "text"; _ck(_v, 60, 0, currVal_26); var currVal_27 = ""; _ck(_v, 68, 0, currVal_27); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 30).ngClassUntouched; var currVal_1 = core["_29" /* ɵnov */](_v, 30).ngClassTouched; var currVal_2 = core["_29" /* ɵnov */](_v, 30).ngClassPristine; var currVal_3 = core["_29" /* ɵnov */](_v, 30).ngClassDirty; var currVal_4 = core["_29" /* ɵnov */](_v, 30).ngClassValid; var currVal_5 = core["_29" /* ɵnov */](_v, 30).ngClassInvalid; var currVal_6 = core["_29" /* ɵnov */](_v, 30).ngClassPending; _ck(_v, 27, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_9 = core["_29" /* ɵnov */](_v, 47).ngClassUntouched; var currVal_10 = core["_29" /* ɵnov */](_v, 47).ngClassTouched; var currVal_11 = core["_29" /* ɵnov */](_v, 47).ngClassPristine; var currVal_12 = core["_29" /* ɵnov */](_v, 47).ngClassDirty; var currVal_13 = core["_29" /* ɵnov */](_v, 47).ngClassValid; var currVal_14 = core["_29" /* ɵnov */](_v, 47).ngClassInvalid; var currVal_15 = core["_29" /* ɵnov */](_v, 47).ngClassPending; _ck(_v, 44, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_18 = core["_29" /* ɵnov */](_v, 59).ngClassUntouched; var currVal_19 = core["_29" /* ɵnov */](_v, 59).ngClassTouched; var currVal_20 = core["_29" /* ɵnov */](_v, 59).ngClassPristine; var currVal_21 = core["_29" /* ɵnov */](_v, 59).ngClassDirty; var currVal_22 = core["_29" /* ɵnov */](_v, 59).ngClassValid; var currVal_23 = core["_29" /* ɵnov */](_v, 59).ngClassInvalid; var currVal_24 = core["_29" /* ɵnov */](_v, 59).ngClassPending; _ck(_v, 56, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24); }); }
function View_NuevoMesPage_4(_l) { return core["_40" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 10, "ion-row", [["class", "row"]], null, null, null, null, null)), core["_16" /* ɵdid */](1, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_17" /* ɵeld */](3, 0, null, null, 2, "ion-col", [["class", "centrar-texto col"], ["col-lg-6", ""], ["col-md-6", ""], ["col-sm-6", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](4, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_38" /* ɵted */](5, null, ["", " - ", ""])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_17" /* ɵeld */](7, 0, null, null, 2, "ion-col", [["class", "centrar-texto col"], ["col-lg-6", ""], ["col-md-6", ""], ["col-sm-6", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](8, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_38" /* ɵted */](9, null, ["", " / ", ""])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n          "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.id; var currVal_1 = _v.context.$implicit.nombre; _ck(_v, 5, 0, currVal_0, currVal_1); var currVal_2 = _v.context.$implicit.cantidad; var currVal_3 = _v.context.$implicit.tipo; _ck(_v, 9, 0, currVal_2, currVal_3); }); }
function View_NuevoMesPage_3(_l) { return core["_40" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 44, "ion-card", [], null, null, null, null, null)), core["_16" /* ɵdid */](1, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_38" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_17" /* ɵeld */](3, 0, null, null, 33, "ion-list", [], null, null, null, null, null)), core["_16" /* ɵdid */](4, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_38" /* ɵted */](-1, null, ["\n\n      "])), (_l()(), core["_17" /* ɵeld */](6, 0, null, null, 6, "ion-list-header", [["class", "centrar-texto item"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_16" /* ɵdid */](7, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_36" /* ɵqud */](335544320, 10, { contentLabel: 0 }), core["_36" /* ɵqud */](603979776, 11, { _buttons: 1 }), core["_36" /* ɵqud */](603979776, 12, { _icons: 1 }), core["_16" /* ɵdid */](11, 16384, null, 0, list_header["a" /* ListHeader */], [config["a" /* Config */], core["N" /* Renderer */], core["p" /* ElementRef */], [8, null]], null, null), (_l()(), core["_38" /* ɵted */](-1, 2, ["\n        Productos a\u00F1adidos\n      "])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n\n      "])), (_l()(), core["_17" /* ɵeld */](14, 0, null, null, 21, "ion-card", [], null, null, null, null, null)), core["_16" /* ɵdid */](15, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_38" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_17" /* ɵeld */](17, 0, null, null, 17, "ion-grid", [["class", "grid"]], null, null, null, null, null)), core["_16" /* ɵdid */](18, 16384, null, 0, grid["a" /* Grid */], [], null, null), (_l()(), core["_38" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["_17" /* ɵeld */](20, 0, null, null, 10, "ion-row", [["class", "color-naranja row"]], null, null, null, null, null)), core["_16" /* ɵdid */](21, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_17" /* ɵeld */](23, 0, null, null, 2, "ion-col", [["class", "centrar-texto col"], ["col-lg-6", ""], ["col-md-6", ""], ["col-sm-6", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](24, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_38" /* ɵted */](-1, null, ["Nombre"])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_17" /* ɵeld */](27, 0, null, null, 2, "ion-col", [["class", "centrar-texto col"], ["col-lg-6", ""], ["col-md-6", ""], ["col-sm-6", ""]], null, null, null, null, null)), core["_16" /* ɵdid */](28, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_38" /* ɵted */](-1, null, ["Cantidad"])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n          "])), (_l()(), core["_12" /* ɵand */](16777216, null, null, 1, null, View_NuevoMesPage_4)), core["_16" /* ɵdid */](33, 802816, null, 0, common["i" /* NgForOf */], [core["_0" /* ViewContainerRef */], core["V" /* TemplateRef */], core["A" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_38" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n\n    "])), (_l()(), core["_17" /* ɵeld */](38, 0, null, null, 5, "div", [["padding", ""]], null, null, null, null, null)), (_l()(), core["_38" /* ɵted */](-1, null, ["\n      "])), (_l()(), core["_17" /* ɵeld */](40, 0, null, null, 2, "button", [["block", ""], ["class", "boton-naranaja"], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.agregarProductoLocalStorage() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_16" /* ɵdid */](41, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_38" /* ɵted */](-1, 0, ["A\u00F1adir todos"])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.productos; _ck(_v, 33, 0, currVal_0); var currVal_1 = ""; _ck(_v, 41, 0, currVal_1); }, null); }
function View_NuevoMesPage_0(_l) { return core["_40" /* ɵvid */](0, [(_l()(), core["_38" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_17" /* ɵeld */](1, 0, null, null, 10, "ion-header", [], null, null, null, null, null)), core["_16" /* ɵdid */](2, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_38" /* ɵted */](-1, null, ["\n  "])), (_l()(), core["_17" /* ɵeld */](4, 0, null, null, 6, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_16" /* ɵdid */](5, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */]], null, null), (_l()(), core["_38" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_17" /* ɵeld */](7, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_16" /* ɵdid */](8, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["N" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_38" /* ɵted */](-1, 0, ["Mes nuevo"])), (_l()(), core["_38" /* ɵted */](-1, 3, ["\n  "])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_38" /* ɵted */](-1, null, ["\n\n"])), (_l()(), core["_17" /* ɵeld */](13, 0, null, null, 11, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_16" /* ɵdid */](14, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["N" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["G" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_38" /* ɵted */](-1, 1, ["\n\n  "])), (_l()(), core["_12" /* ɵand */](16777216, null, 1, 1, null, View_NuevoMesPage_1)), core["_16" /* ɵdid */](17, 16384, null, 0, common["j" /* NgIf */], [core["_0" /* ViewContainerRef */], core["V" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_38" /* ɵted */](-1, 1, ["\n\n  "])), (_l()(), core["_12" /* ɵand */](16777216, null, 1, 1, null, View_NuevoMesPage_2)), core["_16" /* ɵdid */](20, 16384, null, 0, common["j" /* NgIf */], [core["_0" /* ViewContainerRef */], core["V" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_38" /* ɵted */](-1, 1, ["\n\n  "])), (_l()(), core["_12" /* ɵand */](16777216, null, 1, 1, null, View_NuevoMesPage_3)), core["_16" /* ɵdid */](23, 16384, null, 0, common["j" /* NgIf */], [core["_0" /* ViewContainerRef */], core["V" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_38" /* ɵted */](-1, 1, ["\n\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = (_co.banderaNombreMes == false); _ck(_v, 17, 0, currVal_4); var currVal_5 = (_co.banderaNombreMes == true); _ck(_v, 20, 0, currVal_5); var currVal_6 = (_co.productos.length > 0); _ck(_v, 23, 0, currVal_6); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 5)._hidden; var currVal_1 = core["_29" /* ɵnov */](_v, 5)._sbPadding; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = core["_29" /* ɵnov */](_v, 14).statusbarPadding; var currVal_3 = core["_29" /* ɵnov */](_v, 14)._hasRefresher; _ck(_v, 13, 0, currVal_2, currVal_3); }); }
function View_NuevoMesPage_Host_0(_l) { return core["_40" /* ɵvid */](0, [(_l()(), core["_17" /* ɵeld */](0, 0, null, null, 1, "page-nuevo-mes", [], null, null, null, View_NuevoMesPage_0, RenderType_NuevoMesPage)), core["_16" /* ɵdid */](1, 49152, null, 0, nuevo_mes_NuevoMesPage, [nav_controller["a" /* NavController */], nav_params["a" /* NavParams */]], null, null)], null, null); }
var NuevoMesPageNgFactory = core["_13" /* ɵccf */]("page-nuevo-mes", nuevo_mes_NuevoMesPage, View_NuevoMesPage_Host_0, {}, {}, []);

//# sourceMappingURL=nuevo-mes.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/module.js
var ionic_angular_module = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(36);

// CONCATENATED MODULE: ./src/pages/nuevo-mes/nuevo-mes.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoMesPageModuleNgFactory", function() { return NuevoMesPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















var NuevoMesPageModuleNgFactory = core["_14" /* ɵcmf */](nuevo_mes_module_NuevoMesPageModule, [], function (_l) { return core["_25" /* ɵmod */]([core["_26" /* ɵmpd */](512, core["l" /* ComponentFactoryResolver */], core["_10" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], NuevoMesPageNgFactory]], [3, core["l" /* ComponentFactoryResolver */]], core["E" /* NgModuleRef */]]), core["_26" /* ɵmpd */](4608, common["l" /* NgLocalization */], common["k" /* NgLocaleLocalization */], [core["C" /* LOCALE_ID */], [2, common["t" /* ɵa */]]]), core["_26" /* ɵmpd */](4608, esm5_forms["k" /* ɵi */], esm5_forms["k" /* ɵi */], []), core["_26" /* ɵmpd */](4608, esm5_forms["c" /* FormBuilder */], esm5_forms["c" /* FormBuilder */], []), core["_26" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["j" /* ɵba */], esm5_forms["j" /* ɵba */], []), core["_26" /* ɵmpd */](512, esm5_forms["d" /* FormsModule */], esm5_forms["d" /* FormsModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["i" /* ReactiveFormsModule */], esm5_forms["i" /* ReactiveFormsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_26" /* ɵmpd */](512, nuevo_mes_module_NuevoMesPageModule, nuevo_mes_module_NuevoMesPageModule, []), core["_26" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], nuevo_mes_NuevoMesPage, [])]); });

//# sourceMappingURL=nuevo-mes.module.ngfactory.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_Navbar; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_Navbar_0;
/* unused harmony export View_Navbar_Host_0 */
/* unused harmony export NavbarNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_button_ngfactory__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_button__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icon_icon__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navigation_view_controller__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navigation_nav_controller__ = __webpack_require__(18);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_Navbar = [];
var RenderType_Navbar = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵcrt */]({ encapsulation: 2, styles: styles_Navbar, data: {} });

function View_Navbar_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "toolbar-background"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](1, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Renderer2 */]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](2, 0, null, null, 8, "button", [["class", "back-button"], ["ion-button", "bar-button"]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.backButtonClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, __WEBPACK_IMPORTED_MODULE_2__button_button_ngfactory__["b" /* View_Button_0 */], __WEBPACK_IMPORTED_MODULE_2__button_button_ngfactory__["a" /* RenderType_Button */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](3, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Renderer2 */]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](4, 1097728, null, 0, __WEBPACK_IMPORTED_MODULE_3__button_button__["a" /* Button */], [[8, "bar-button"], __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](5, 0, null, 0, 2, "ion-icon", [["class", "back-button-icon"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](6, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Renderer2 */]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](7, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_5__icon_icon__["a" /* Icon */], [__WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](8, 0, null, 0, 2, "span", [["class", "back-button-text"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](9, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Renderer2 */]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_38" /* ɵted */](10, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* ɵncd */](null, 0), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* ɵncd */](null, 1), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* ɵncd */](null, 2), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](14, 0, null, null, 2, "div", [["class", "toolbar-content"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](15, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Renderer2 */]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* ɵncd */](null, 3)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "toolbar-background"; var currVal_1 = ("toolbar-background-" + _co._mode); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = "back-button"; var currVal_4 = ("back-button-" + _co._mode); _ck(_v, 3, 0, currVal_3, currVal_4); var currVal_6 = "back-button-icon"; var currVal_7 = ("back-button-icon-" + _co._mode); _ck(_v, 6, 0, currVal_6, currVal_7); var currVal_8 = _co._bbIcon; _ck(_v, 7, 0, currVal_8); var currVal_9 = "back-button-text"; var currVal_10 = ("back-button-text-" + _co._mode); _ck(_v, 9, 0, currVal_9, currVal_10); var currVal_12 = "toolbar-content"; var currVal_13 = ("toolbar-content-" + _co._mode); _ck(_v, 15, 0, currVal_12, currVal_13); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co._hideBb; _ck(_v, 2, 0, currVal_2); var currVal_5 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 7)._hidden; _ck(_v, 5, 0, currVal_5); var currVal_11 = _co._backText; _ck(_v, 10, 0, currVal_11); }); }
function View_Navbar_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵeld */](0, 0, null, null, 1, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, View_Navbar_0, RenderType_Navbar)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵdid */](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_6__navbar__["a" /* Navbar */], [__WEBPACK_IMPORTED_MODULE_7__app_app__["a" /* App */], [2, __WEBPACK_IMPORTED_MODULE_8__navigation_view_controller__["a" /* ViewController */]], [2, __WEBPACK_IMPORTED_MODULE_9__navigation_nav_controller__["a" /* NavController */]], __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */]], null, null)], null, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 1)._hidden; var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 1)._sbPadding; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
var NavbarNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ɵccf */]("ion-navbar", __WEBPACK_IMPORTED_MODULE_6__navbar__["a" /* Navbar */], View_Navbar_Host_0, { color: "color", mode: "mode", hideBackButton: "hideBackButton" }, {}, ["[menuToggle],ion-buttons[left]", "ion-buttons[start]", "ion-buttons[end],ion-buttons[right]", "*"]);

//# sourceMappingURL=navbar.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=0.js.map