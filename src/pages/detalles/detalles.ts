import { Component } from '@angular/core';
import { NavController, NavParams, Icon } from 'ionic-angular';
import { Rating } from '../rating/rating';
import { Network } from 'ionic-native';
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
public gallery_detalles:string ="assets/img/services2.jpg";
//private servicio: Servicio;
public nombre: string;
public descripcion: string;
public descripcionlarga: string;
  constructor(public navCtrl: NavController, public params: NavParams) {}

  ionViewDidLoad() {
    console.log('Hello detalles Page');
    this.nombre = this.params.get("servicio").nombre;
    this.descripcion = this.params.get("servicio").descripcion;
    this.descripcionlarga = this.params.get("servicio").descripcionlarga;


    if (Network.connection != 'none') {
      this.gallery_detalles = "https://source.unsplash.com/600x300/?apple,technology"
    }


  }

swipe(e){
  console.log("swipe");
  alert('swiped' + e.direction);
}
sharing(){
  
}
}
