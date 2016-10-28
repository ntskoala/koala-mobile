import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {CallNumber} from 'ionic-native';
import { SocialSharing } from 'ionic-native';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

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
