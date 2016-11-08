import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
/*
  Generated class for the Fotos provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Fotos {

  constructor(public http: Http) {
    console.log('Hello Fotos Provider');
  }

getimages():Observable<any> {
  let page=1;
  let url="https://pixabay.com/api/?key=3711407-f85861336b25c75b196529043&q=technology+inspiration&image_type=photo&orientation=horizontal&page="+page;
  return this.http.get(url).map(
  result=> result.json());
}

}
