import { Component, OnInit, AfterViewInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import {DetallesPage} from '../detalles/detalles';

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/timer'
import 'rxjs/add/observable/from'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/scan'
import 'rxjs/add/operator/map'



export interface Servicio{
  nombre: string,
  descripcion: string,
  descripcionlarga: string,
  imagen: string
}
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit, AfterViewInit{
public servicios: Servicio[]=[
{"nombre":'web.nombre',"descripcion":"web.descripcion","descripcionlarga":"web.descripcionlarga","imagen":"web.jpg"},
{"nombre":"apps.nombre","descripcion":"apps.descripcion","descripcionlarga":"apps.descripcionlarga","imagen":"apps.jpg"},
{"nombre":"webapps.nombre","descripcion":"webapps.descripcion","descripcionlarga":"webapps.descripcionlarga","imagen":"webapps.jpg"}

];
//public koalaservicios:Array<any>=[];
public koalaservicios = new Array();
$servicios;
  constructor(public navCtrl: NavController) {

  }
ngAfterViewInit(){
 // alert('viewinit');

}
ngOnInit(){
//alert("oninit")
}
 ionViewDidLoad() {
 //   alert('viewload');
  }
  ionViewDidEnter() {
    this.$servicios;
this.koalaservicios=[];
  this.anim();
 }
anim(){
    var timer = 0;
    var elem;
    this.$servicios = Observable.from([[], ...this.servicios])
    .mergeMap(x => Observable.timer(timer++ * 300)
    .map(y => {
      console.log(x);
      this.koalaservicios.push(x);
      return this.koalaservicios
    }))

}
detalles(servicio){
  this.navCtrl.push(DetallesPage,{servicio});
}

}
