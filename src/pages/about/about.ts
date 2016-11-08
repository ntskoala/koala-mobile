import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SocialSharing, Network } from 'ionic-native';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
public gallery_about:string ="assets/img/services2.jpg";
  constructor(public navCtrl: NavController) {

  }
    ionViewDidLoad(){
    //  alert("didload");
    if (Network.connection != 'none') {
      this.gallery_about = "https://source.unsplash.com/600x300/?water"
    }
  }
// ngOnInit(){
// alert("oninit");
// if (Network.connection != 'none'){
//   this.gallery_about = "https://source.unsplash.com/600x300/?desert"
// }
// }

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
