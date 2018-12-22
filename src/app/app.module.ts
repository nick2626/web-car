import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AuthService } from './api/auth.service';

var config = {
  apiKey: "AIzaSyD90sT1jITRKbZMlmW6EmCrtYokQ3JHTrA",
  authDomain: "ts2t-add5e.firebaseapp.com",
  databaseURL: "https://ts2t-add5e.firebaseio.com",
  projectId: "ts2t-add5e",
  storageBucket: "ts2t-add5e.appspot.com",
  messagingSenderId: "567228972792"
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
      BrowserModule,
      AngularFireModule.initializeApp(config),
      AngularFireDatabaseModule,
      AngularFireAuthModule, 
      IonicModule.forRoot(), 
      AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
