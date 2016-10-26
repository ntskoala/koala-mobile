import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Push } from 'ionic-native';
import { Device } from 'ionic-native';
import { Noticias } from '../pages/noticias/noticias';

/*
  Generated class for the Notifications provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Notifications {

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
    var sURL = "http://web.ntskoala.com/api/registerdevice.php?uuid="+uuid+"&token="+token+"&platform="+platform+"&model="+model;

    this.http.get(sURL).subscribe(
    (data) => console.log(data.json()),
    (error)=> console.log(error),
    ()=>console.log("Fin registro")
    );
}


}
