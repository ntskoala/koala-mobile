import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Help page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-help',
  templateUrl: 'help.html'
})
export class Help {
public help:string;
  constructor(public navCtrl: NavController, public params: NavParams) {
        this.help = "help."+params.get('asunto');
  }

  ionViewDidLoad() {
    console.log('Hello Help Page');
    alert(this.params.get('asunto'));
    this.help = this.params.get('asunto');
  }

cerrar(){
  this.navCtrl.pop();
}

}
