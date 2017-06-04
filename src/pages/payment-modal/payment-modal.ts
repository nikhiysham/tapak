import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Main } from '../main/main';

/**
 * Generated class for the PaymentModal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-payment-modal',
  templateUrl: 'payment-modal.html',
})
export class PaymentModal {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentModal');
  }

  goToHome() {
    // this.navCtrl.pop();
    // console.log('dismiss');
    this.viewCtrl.dismiss();
    // this.navCtrl.setRoot(Main);
  }

}
