import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {CallNumber, Network} from 'ionic-native';
import { SocialSharing } from 'ionic-native';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
public gallery_contact:string ="assets/img/contactar.jpg";
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    if (Network.connection != 'none') {
      this.gallery_contact = "https://source.unsplash.com/600x300/?networking"
    }
  }

dial(){
CallNumber.callNumber('695169539', true)
  .then(() => console.log('Launched dialer!'))
  .catch(() => console.log('Error launching dialer'));
}
 
whatsapp(){
  SocialSharing.shareViaWhatsAppToReceiver('695169539','test contacto via app de koala')
  .then((data)=> console.log("ok whatsapp",data))
  .catch((error)=> alert ("errorwhatsapp"+error))
}

mail(){
  SocialSharing.shareViaEmail("","Contacto App",["jorged@ntskoala.com"]);
}
}
