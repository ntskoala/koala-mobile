import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Push } from 'ionic-native';
import { Device } from 'ionic-native';
import { Noticias } from '../pages/noticias/noticias';
import {SQLite} from 'ionic-native';
/*
  Generated class for the Notifications provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Notifications {
public db:SQLite;
  constructor(public http: Http) {
    console.log('Hello Notifications Provider');
  }

registerdevice(token){

    // $('#resultado').html('probando');
    //alert('cargando...');
    //uuid=localStorage["uuid"];
    //uuid = localStorage["uuid"];
    var platform= Device.device.platform;
    var model = Device.device.model;
    var uuid = Device.device.uuid;
    var fabricante = Device.device.manufacturer;
    var version = Device.device.version;
    var lang = localStorage.getItem("lang");
    var sURL = "http://web.ntskoala.com/api/registerdevice.php?uuid="+uuid+"&token="+token+"&platform="+platform+"&model="+model+"&fabricante="+fabricante+"&version="+version+"&lang="+lang;

    this.http.get(sURL).subscribe(
    (data) => console.log(data.json()),
    (error)=> console.log(error),
    ()=>console.log("Fin registro")
    );
}

sincronews(){
  this.db = new SQLite();
this.db.openDatabase({ name: "koala.db", location: "default" }).then(() => {
                          //this.refresh();
                          console.log("base de datos abierta");
                          }, (error) => {
                          console.log("ERROR al abrir la bd: ", error);
                        });

  var platform= Device.device.platform;
  var lang= localStorage.getItem("lang");
  var sURL = "http://web.ntskoala.com/api/news.php?platform="+platform+"&lang="+lang;
  this.http.get(sURL).map(
    (data) => data.json()
  ).subscribe(
    (noticias) => {
                      this.db.executeSql("delete from noticias",[]);
                      noticias.data.forEach(noticia => {  
                      let id = noticia.id;
                      let titulo = noticia.title;
                      let message = noticia.msg;
                      let foto = noticia.image; 
                          this.db.executeSql('INSERT INTO noticias (title , message, image ) VALUES (?,?,?)', [titulo, message,foto])
                          .then((data) => {
                            console.log("NOTICIA SINCRO GUARDADA-> " + JSON.stringify(data.res));
                            //  alert ('creada logins');
                          }, (error) => {
                            console.log("ERROR -> ", error);
                          });
                        }); 
                  },
    (error) => console.log("error",error)
  );
}
}
