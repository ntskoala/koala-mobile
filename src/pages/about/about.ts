import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SocialSharing } from 'ionic-native';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

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
