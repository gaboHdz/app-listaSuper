import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mes',
  templateUrl: 'mes.html',
})
export class MesPage {

  public mes;

  public productos;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.mes = this.navParams.get('mes');
    this.productos = this.mes.productos;
    console.log('mes => ',this.mes)
    console.log('productos => ',this.productos)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesPage');
  }

}
