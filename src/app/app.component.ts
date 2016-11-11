import { Component, ViewChild } from '@angular/core';
import { Platform, Nav  } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Push } from 'ionic-native';
import { SQLite } from 'ionic-native';

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
public db: SQLite;
  constructor(platform: Platform, private translate: TranslateService, public notifications: Notifications) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.notificaciones();
      StatusBar.styleDefault();
      this.inicializa();





    });

       this.pages = [
      { title: 'menu.home' , component: HomePage },
      { title: 'menu.servicios' , component: Services },
      { title: 'menu.contact' , component: ContactPage },
       { title: 'menu.config' , component: Config }
      ];

      if (localStorage.getItem("lang") === null){
        localStorage.setItem("lang","es");
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

push.on('notification', (noticia) => {
    console.log(noticia.message);
    console.log(noticia.title);
    console.log(noticia.count);
    console.log(noticia.sound);
    console.log(noticia.image);
    console.log(noticia.additionalData);
   this.nav.push(Noticias, {noticia});
   this.guarda(noticia);
});

push.on('error', (e) => {
    console.log(e.message);
});
}


  inicializa() {
    let titulo1,titulo2,noticia1,noticia2;
    let foto1="http://web.ntskoala.com/LogoP.jpg";
    let foto2="http://web.ntskoala.com/noticias/img/windows.jpg";
    this.translate.get("titulo1").subscribe((data) => titulo1=data);
    this.translate.get("noticia1").subscribe((data) => noticia1=data);
    this.translate.get("titulo2").subscribe((data) => titulo2=data);
    this.translate.get("noticia2").subscribe((data) => noticia2=data);
    this.db = new SQLite();
    this.db.openDatabase({ name: "koala.db", location: "default" }).then(() => {
      //this.refresh();
      console.log("base de datos abierta");
      //this.db.executeSql('DROP TABLE noticias',[]);
      this.db.executeSql('CREATE TABLE IF NOT EXISTS noticias (id INTEGER PRIMARY KEY, title TEXT, message TEXT, image TEXT, fuente TEXT)', []).then((data) => {
        console.log("TABLE CREATED  noticias-> " + JSON.stringify(data));
      //   this.db.executeSql('INSERT INTO noticias (title , message, image ) VALUES (?,?,?)', [titulo1, noticia1,foto1]).then((data) => {
      //   console.log("NOTICIA GUARDADA 1-> " + JSON.stringify(data.res));
      //   //  alert ('creada logins');
      // }, (error) => {
      //   console.log("ERROR -> ", error);
      // });
      // this.db.executeSql('INSERT INTO noticias (title , message, image ) VALUES (?,?,?)', [titulo2, noticia2,foto2]).then((data) => {
      //   console.log("NOTICIA GUARDADA 2-> " + JSON.stringify(data.res));
      // }, (error) => {
      //   console.log("ERROR -> ", error);
      // });
      this.notifications.sincronews();
      }, (error) => {
        console.log("ERROR -> " + JSON.stringify(error.err));
      });
    }, (error) => {
      console.log("ERROR al abrir la bd: ", error);
    });
  }

guarda(data){
  let titulo = data.title;
  let noticia = data.message;
  let foto = data.image;
      this.db = new SQLite();
    this.db.openDatabase({ name: "koala.db", location: "default" }).then(() => {
      //this.refresh();
      console.log("base de datos abierta");
      this.db.executeSql('INSERT INTO noticias (title , message, image ) VALUES (?,?,?)', [titulo, noticia,foto]).then((data) => {
        console.log("NOTICIA GUARDADA-> " + JSON.stringify(data.res));
        //  alert ('creada logins');
      }, (error) => {
        console.log("ERROR -> ", error);
      });
    }, (error) => {
      console.log("ERROR al abrir la bd: ", error);
    });
}

}
