import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MesesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meses',
  templateUrl: 'meses.html',
})
export class MesesPage {

  public meses = JSON.parse(window.localStorage.getItem('meses'));

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesesPage');
  }

  nuevoMes() {
    this.navCtrl.push('NuevoMesPage');
  }

  verMes(mes) {
    this.navCtrl.push('MesPage',{mes: mes});
  }

}
