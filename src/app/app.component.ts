import { Component, ViewChild } from '@angular/core';
import { Platform, Nav  } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Push } from 'ionic-native';


import {TranslateService} from 'ng2-translate/ng2-translate';
import { Noticias } from '../pages/noticias/noticias'

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { Notifications } from '../providers/notifications';
import { Config } from '../pages/config/config';
import { Services} from '../pages/services/services';

@Component({
  templateUrl: 'app.component.html',
})
export class MyApp {
  rootPage = TabsPage;
  @ViewChild(Nav) nav: Nav;
  //rootPage = HomePage;
pages: Array<{title: string, component: any}>;
  constructor(platform: Platform, private translate: TranslateService, public notifications: Notifications) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.notificaciones();
      StatusBar.styleDefault();






    });

       this.pages = [
      { title: 'menu.home' , component: HomePage },
      { title: 'menu.servicios' , component: Services },
      { title: 'menu.contact' , component: ContactPage },
       { title: 'menu.config' , component: Config }
      ];

      if (localStorage.getItem("lang") === null){
        translate.setDefaultLang('es');
        translate.use('es');
      }
      else {
          this.translate.use(localStorage.getItem("lang"));
          this.translate.setDefaultLang(localStorage.getItem("lang"));
      }
  } 

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(page.component);
    this.nav.push(page.component);
}

notificaciones(){
      let push = Push.init({
          android: {
            senderID: "114122564808"
          },
          ios: {
            alert: "true",
            badge: true,
            sound: 'false'
          },
          windows: {}
          });

          push.on('registration', (data) => {
    console.log("registration:",data.registrationId);
    this.notifications.registerdevice(data.registrationId)
});

push.on('notification', (data) => {
    console.log(data.message);
    console.log(data.title);
    console.log(data.count);
    console.log(data.sound);
    console.log(data.image);
    console.log(data.additionalData);
   this.nav.push(Noticias, {data});
});

push.on('error', (e) => {
    console.log(e.message);
});
}

}
