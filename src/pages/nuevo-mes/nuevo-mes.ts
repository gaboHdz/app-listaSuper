import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { stringify } from '@angular/compiler/src/util';

/**
 * Generated class for the NuevoMesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo-mes',
  templateUrl: 'nuevo-mes.html',
})
export class NuevoMesPage {

  public banderaNombreMes = false;

  public mesesLocalSrorage = [];

  /**
   * Mes
   */
  public contadorMesesId;
  public nombreMes;

  /**
   * Productos
   */
  public contadorProdId;
  public nombreProd;
  public cantidadProd;
  public producto;
  public productos;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.mesesLocalSrorage = JSON.parse(window.localStorage.getItem('meses'));

    if (this.mesesLocalSrorage != null) {
      this.contadorMesesId = this.mesesLocalSrorage.length + 1;
      console.log('contadorMesesId if => ', this.contadorMesesId)
    } else {
      this.contadorMesesId = 1;
      console.log('contadorMesesId else => ', this.contadorMesesId)
      this.mesesLocalSrorage = [];
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoMesPage');
  }

  crearNombreMes() {

    if (this.nombreMes != null && this.nombreMes != '') {

      let mes = {
        mes: [{ 'id': this.contadorMesesId, 'nombre': this.nombreMes }],
        productos: []
      }

      console.log('meses antes ls => ', this.mesesLocalSrorage)

      this.mesesLocalSrorage.push(mes);

      console.log('meses despues ls => ', this.mesesLocalSrorage)

      window.localStorage.setItem('meses', JSON.stringify(this.mesesLocalSrorage));

      this.banderaNombreMes = true;
    }
  }


  agregarProducto(){

    console.log('posicion mes => ',this.mesesLocalSrorage[this.contadorMesesId-1])

    if(this.mesesLocalSrorage[this.contadorMesesId-1].productos !=null){

      this.contadorProdId = this.mesesLocalSrorage[this.contadorMesesId-1].productos.length + 1;

    }else{
      this.contadorProdId = 1;
    }

    this.producto = {
      id: this.contadorProdId,
      nombre: this.nombreProd,
      cantidad: this.cantidadProd,
      historial: ''
    }

    this.mesesLocalSrorage[this.contadorMesesId-1].productos.push(this.producto);
    window.localStorage.setItem('meses', JSON.stringify(this.mesesLocalSrorage));

    console.log('meses con producto => ', this.mesesLocalSrorage)

    this.navCtrl.setRoot('MesesPage')

  }

}
