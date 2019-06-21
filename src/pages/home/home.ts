import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public fecha;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.fecha = new Date();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
