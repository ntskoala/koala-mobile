import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Servicio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detalles',
  templateUrl: 'detalles.html'
})
export class DetallesPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello detalles Page');
  }

}
