import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {DetallesPage} from '../pages/detalles/detalles';
import { Services } from '../pages/services/services';
import { Rating } from '../pages/rating/rating';
import { Config } from '../pages/config/config';

import { Noticias } from '../pages/noticias/noticias';
import { Notifications } from '../providers/notifications';
import { Fotos } from '../providers/fotos';
import {HttpModule,Http} from '@angular/http';
import {TranslateModule,TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import {BrowserModule} from "@angular/platform-browser";

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetallesPage,
    Noticias,
    Services,
    Config,
    Rating
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({provide: TranslateLoader,useFactory: (createTranslateLoader),deps: [Http]}),
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'})
    //IonicModule.forRoot(MyApp)
  ],
  exports: [BrowserModule, HttpModule, TranslateModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetallesPage,
    Noticias,
    Services,
    Config,
    Rating
  ],
  providers: [Notifications,Fotos]
})
export class AppModule {}
