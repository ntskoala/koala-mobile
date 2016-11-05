import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Rating page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'rating',
  templateUrl: 'rating.html'
})
export class Rating {
public rating: number[]=[1,2,3,4,5];
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Rating Page');
  }
setrating(index){
  console.log(index);
  for (let i=0; i< 5; i++){
   (i<=index) ? document.getElementById('star'+i).className = "star2" : document.getElementById('star'+i).className = "star";
  }
}
}
