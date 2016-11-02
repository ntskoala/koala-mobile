import { Component } from '@angular/core';
import { NavController,NavParams, Icon } from 'ionic-angular';
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
 public image: string;
  constructor(public navCtrl: NavController, public params: NavParams) {}

  ionViewDidLoad() {
    console.log('Hello Noticias Page');
   this.title = this.params.get('noticia').title;
   this.noticia = this.params.get('noticia').message;
   this.image = this.params.get('noticia').image;
  }


sharing(){
  let message = this.noticia;
let subject = this.title;
let file = this.image;
let url ="http://ntskoala.com";
  SocialSharing.share(message, subject, file, url).then(
    (resultado) => console.log("shared",resultado),
    (error) => console.log("sharing error",error)
  );

}

swiped(e){
 // console.log ("swiped" + e.direction);
}

}
