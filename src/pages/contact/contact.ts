import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {NFC, Ndef} from 'ionic-native';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

    NFC.enabled().then(data => console.log("hay nfc" + data),error => console.log("algo pasa" + error));
    NFC.addNdefListener().subscribe(
      data => console.log("..."+data),
      error => console.log ("error" + error),
    );
    NFC.showSettings().then(data => console.log("datos nfc: " + data),error => console.log("error datos: " + error));
    //NFC.handover()
    NFC.addTagDiscoveredListener("").subscribe(
      data => {console.log("reading..."+data);
              console.log("..."+data.tag);
              //console.log("..."+data.tag.id)
              
              },
      error => console.log ("error" + error),
    );
  }

}
