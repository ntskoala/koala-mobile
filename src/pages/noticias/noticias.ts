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
  public id:number;
 public noticia: string;
 public title: string;
 public image: string;
  constructor(public navCtrl: NavController, public params: NavParams) {}

  ionViewDidLoad() {
    console.log('Hello Noticias Page');
    this.id = this.params.get('noticia').id;
   this.title = this.params.get('noticia').title;
   this.noticia = this.params.get('noticia').message;
   this.image = this.params.get('noticia').image;
  }


sharemail(){
  alert('mail');
  let message = this.noticia;
let subject = this.title;
let file = this.image;
let url ="http://ntskoala.com";
  SocialSharing.shareViaEmail(message, subject,null,null,null, file).then(
    (resultado) => console.log("shared",resultado),
    (error) => console.log("sharing error",error)
  );
}

sharewhatsapp(){
  alert('whatsapp');
  let message = this.noticia;
let subject = this.title;
let file = this.image;
let url ="http://ntskoala.com";
  SocialSharing.shareViaWhatsApp(message,file, url).then(
    (resultado) => console.log("shared",resultado),
    (error) => console.log("sharing error",error)
  );
}

sharefacebook(){
  alert('facebook');
  let message = this.noticia;
let subject = this.title;
let file = this.image;
let url ="http://web.ntskoala.com/noticias/noticia.php?id"+this.id;
  SocialSharing.shareViaFacebookWithPasteMessageHint(null,null,url,subject).then(
    (resultado) => console.log("shared",resultado),
    (error) => console.log("sharing error",error)
  );
}

shareinstagram(){
  alert('instagram');
  let message = this.noticia;
let subject = this.title;
let file = this.image;
let url ="http://ntskoala.com";
  SocialSharing.shareViaInstagram(message, file).then(
    (resultado) => console.log("shared",resultado),
    (error) => console.log("sharing error",error)
  );
}

swiped(e){
 // console.log ("swiped" + e.direction);
}

}
