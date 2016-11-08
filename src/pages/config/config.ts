import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TranslateService} from 'ng2-translate/ng2-translate';
import { Network } from 'ionic-native';
/*
  Generated class for the Config page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-config',
  templateUrl: 'config.html'
})
export class Config {
public gallery_config:string ="assets/img/configuracion.jpg";
public lang:string;
  constructor(public navCtrl: NavController, public translate: TranslateService) {
        this.lang = localStorage.getItem("lang");
  }

  ionViewDidLoad() {
    if (Network.connection != 'none') {
      this.gallery_config = "https://source.unsplash.com/600x300/?engine"
    }
  }

selectlang(){
//  alert ("idioma" + this.lang);
  localStorage.setItem("lang",this.lang);
  this.translate.use(this.lang);
  this.translate.setDefaultLang(this.lang);
}

}
