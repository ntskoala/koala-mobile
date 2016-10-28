import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { Services } from '../services/services';
import {TranslateService} from 'ng2-translate/ng2-translate';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = Services;
  tab3Root: any = ContactPage;
  tab4Root: any = AboutPage;
public trucos:string;
public servicios:string;
public contact:string;
public about:string;
  constructor(public translate: TranslateService) {

  }
ionViewDidEnter() {
    this.translate.get('menu.home').subscribe((data) => {this.trucos = data},(error) => console.log("translate error",error));
    this.translate.get('menu.servicios').subscribe((data) => this.servicios = data);
    this.translate.get('menu.contact').subscribe((data) => this.contact = data);
    this.translate.get('menu.about').subscribe((data) => this.about = data);
}

}
