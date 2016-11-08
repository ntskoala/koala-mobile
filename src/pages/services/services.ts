import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DetallesPage} from '../detalles/detalles';
import { Network } from 'ionic-native';
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

/*
  Generated class for the Services page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-services',
  templateUrl: 'services.html'
})
export class Services {
  public gallery_service:string ="assets/img/services2.jpg";
public servicios: Servicio[]=[
{"nombre":'web.nombre',"descripcion":"web.descripcion","descripcionlarga":"web.descripcionlarga","imagen":"web.jpg"},
{"nombre":"apps.nombre","descripcion":"apps.descripcion","descripcionlarga":"apps.descripcionlarga","imagen":"apps.jpg"},
{"nombre":"webapps.nombre","descripcion":"webapps.descripcion","descripcionlarga":"webapps.descripcionlarga","imagen":"webapps.jpg"}
];
public koalaservicios = new Array();
$servicios;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    if (Network.connection != 'none') {
      this.gallery_service = "https://source.unsplash.com/600x300/?service"
    }
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
