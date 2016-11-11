import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Network } from 'ionic-native';
import { ModalController } from 'ionic-angular';
import { Help } from '../help/help';
 export interface prespuestoapp{
   login:boolean,
   notificaciones:boolean,
   camara:boolean,
   gps:boolean,
   rating:boolean,
   idiomas:boolean
 }
/*
  Generated class for the Presupuesto page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-presupuesto',
  templateUrl: 'presupuesto.html'
})
export class Presupuesto {
public gallery_presupuesto: string;
public tipo:string;
public app: any;// = {"login":false,"notificaciones":false,"camara":false,"gps":false,"rating":false,"idiomas":false};
public presupuesto:any;// = {"login":450,"notificaciones":450,"camara":500,"gps":350,"rating":400,"idiomas":350};
public opciones:string[] = [];
public valor: number = 390;
  constructor(public navCtrl: NavController, public params: NavParams, public modalCtrl: ModalController) {
    this.tipo = this.params.get("tipo");
    console.log("constructor",this.tipo);
    switch (this.tipo){
      case "apps.nombre":
      this.app = {"login":false,"notificaciones":false,"camara":false,"gps":false,"rating":false,"idiomas":false};
      this.presupuesto = {"login":450,"notificaciones":450,"camara":500,"gps":350,"rating":400,"idiomas":350};
      this.carga();
      break;
      case "web.nombre":
      console.log("web",this.tipo);
      this.app = {"personal":false,"tienda online":false,"blog":false,"noticias":false,"backoffice":false,"idiomas":false};
      this.presupuesto = {"personal":0,"tienda online":1500,"blog":400,"noticias":400,"backoffice":1500,"idiomas":350};
      this.carga();
      break;
      case "webapps.nombre":
      this.app = {"login":false,"notificaciones":false,"gps":false,"rating":false,"idiomas":false};
      this.presupuesto = {"login":450,"notificaciones":450,"gps":350,"rating":400,"idiomas":350};
      this.carga();
      break;
    }
  }

  ionViewDidLoad() {
    
    console.log('Hello Presupuesto Page', this.tipo);
        if (Network.connection != 'none') {
      this.gallery_presupuesto = "https://source.unsplash.com/600x300/?money"
    }
    
  }
carga(){
for(let elem in this.app){
      console.log(elem);
      this.opciones.push(elem);
    }
}

  

   help(asunto){
    this.modalCtrl.create(Help,{asunto}).present();
  }

enviar(){
  console.log(this.app);
}
cambio(){
  this.valor = 390;
     for(let elem in this.app){
      this.valor += (this.app[elem] ? this.presupuesto[elem]:0);
    }
}
}
