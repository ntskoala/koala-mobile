import { Component, OnInit, AfterViewInit } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { SQLite } from 'ionic-native';


import {DetallesPage} from '../detalles/detalles';
import {Noticias} from '../noticias/noticias';

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/timer'
import 'rxjs/add/observable/from'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/scan'
import 'rxjs/add/operator/map'



export interface Servicio{
  id:number;
  title: string,
  message: string,
  //descripcionlarga: string,
  image: string
}
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit, AfterViewInit{
public servicios: Servicio[]=[];
// {"nombre":'web.nombre',"descripcion":"web.descripcion","descripcionlarga":"web.descripcionlarga","imagen":"web.jpg"},
// {"nombre":"apps.nombre","descripcion":"apps.descripcion","descripcionlarga":"apps.descripcionlarga","imagen":"apps.jpg"},
// {"nombre":"webapps.nombre","descripcion":"webapps.descripcion","descripcionlarga":"webapps.descripcionlarga","imagen":"webapps.jpg"}
// ];
//public koalaservicios:Array<any>=[];
public koalaservicios = new Array();
$noticias;
public db: SQLite;
  constructor(platform: Platform,public navCtrl: NavController) {
    platform.ready().then(() => 
      this.loadnoticias());
  
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

    this.$noticias;
this.koalaservicios=[];
  this.anim();
 
 }
anim(){
    var timer = 0;
    var elem;
    this.$noticias = Observable.from([[], ...this.servicios])
    .mergeMap(x => Observable.timer(timer++ * 300)
    .map(y => {
      console.log(x);
      this.koalaservicios.push(x);
      return this.koalaservicios
    }))

}
detalles(noticia){
  this.navCtrl.push(Noticias,{noticia});
}

loadnoticias(){
    this.db = new SQLite();
    this.db.openDatabase({ name: "koala.db", location: "default" }).then(() => {
      //this.refresh();
      console.log("base de datos abierta");
      this.db.executeSql('select * from noticias ORDER BY id DESC', []).then((data) => {
        console.log("NOTICIA SELECT-> ", data.rows.length);
                   for(let i = 0; i < data.rows.length; i++) {
                      this.servicios.push({
                        "id": data.rows.item(i).id,
                      "title": data.rows.item(i).title,
                      "message": data.rows.item(i).message,
                     // "descripcionlarga": data.rows.item(i).noticia,
                      "image": data.rows.item(i).image,
                      });
                    }
                    this.anim();
        //  alert ('creada logins');
      }, (error) => {
        console.log("ERROR load noticias -> ", error);
      });
    }, (error) => {
      console.log("ERROR al abrir la bd en loadnoticias: ", error);
    });
}
}
