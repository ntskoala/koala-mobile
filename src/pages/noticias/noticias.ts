import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { SocialSharing } from 'ionic-native';
/*
  Generated class for the Noticias page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html'
})
export class Noticias {
 public noticia: string;
 public title: string;
  constructor(public navCtrl: NavController, public params: NavParams) {}

  ionViewDidLoad() {
    console.log('Hello Noticias Page');
   this.title = this.params.get('data').title;
   this.noticia = this.params.get('data').message;
  }


sharing(){
  let message = "La nueva app de koala se está cocinando";
let subject = "koala app";
let file = "http://www.ntskoala.com/img/logo.png";
let url ="http://ntskoala.com";
  SocialSharing.share(message, subject, file, url).then(
    (resultado) => console.log("shared",resultado),
    (error) => console.log("sharing error",error)
  );

}


}
