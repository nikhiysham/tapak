import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';

// Components
import { MyApp } from './app.component';

// Module
import { MainModule } from '../pages/main/main.module';
import { FtPaymentModule } from '../pages/ft-payment/ft-payment.module';
import { FtAdvertisementModule } from '../pages/ft-advertisement/ft-advertisement.module';
import { FtRentalModule } from '../pages/ft-rental/ft-rental.module';
import { MenuItemModule } from '../pages/menu-item/menu-item.module';
import { PaymentModule } from '../pages/payment/payment.module';
import { PaymentModalModule } from '../pages/payment-modal/payment-modal.module';
import { ProfileModule } from '../pages/profile/profile.module';
import { RegistrationModule } from '../pages/registration/registration.module';
import { ChoosePictureModule } from '../components/choose-picture/choose-picture.module';

// Pages
// import { Main } from '../pages/main/main';
import { Home } from '../pages/home/home';
// import { Registration } from '../pages/registration/registration';
// import { Payment } from '../pages/payment/payment';
// import { PaymentModal } from '../pages/payment-modal/payment-modal';
// import { Profile } from '../pages/profile/profile';
// import { FtPayment } from '../pages/ft-payment/ft-payment';
// import { MenuItem } from '../pages/menu-item/menu-item';
// import { FtRental } from '../pages/ft-rental/ft-rental';

// Providers
import { Common } from '../providers/common';
// import {AngularFireModule} from 'angularfire2';

// Components
import { ActiveMenu } from '../components/active-menu/active-menu';

@NgModule({
  declarations: [
    MyApp,
    Home,
    ActiveMenu
  ],
  imports: [
    MainModule,
    BrowserModule,
    CommonModule,
    FtPaymentModule,
    PaymentModule,
    PaymentModalModule,
    FtAdvertisementModule,
    FtRentalModule,
    MenuItemModule,
    ProfileModule,
    RegistrationModule,
    ChoosePictureModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Common,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
