import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { Main } from '../pages/main/main';
import { Home } from '../pages/home/home';
import { Main } from '../pages/main/main';
import { Profile } from '../pages/profile/profile';
import { FtPayment } from '../pages/ft-payment/ft-payment';
import { MenuItem } from '../pages/menu-item/menu-item';
import { FtRental } from '../pages/ft-rental/ft-rental';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = FtRental;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: any) {
    switch (page) {
      case 'Home':
        this.rootPage = Home;
        break;
      case 'Profile':
        this.rootPage = Profile;
        break;
      case 'FtPayment':
        this.rootPage = FtPayment;
        break;
      case 'MenuItem':
      console.log('menuitem');
        this.rootPage = MenuItem;
        break;
      case 'FtRental':
        this.rootPage = FtRental;
        break;
      case 'Main':
        this.rootPage = Main;
        break;
    }

  }
}
