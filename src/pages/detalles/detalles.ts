import { Component } from '@angular/core';
import { NavController, NavParams, Icon } from 'ionic-angular';


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
  }

swipe(e){
  console.log("swipe");
  alert('swiped' + e.direction);
}
sharing(){
  
}
}
