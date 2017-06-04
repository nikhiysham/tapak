import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Payment } from '../payment/payment';

/**
 * Generated class for the Registration page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class Registration {

  profile:any = {};
  user:any = {};
  showSpinner:boolean = false;
  types:Array<any> = [{id:'foodtruck', value:'Food Truck'},
  {id:'public', value:'Public'}, {id:'event', value:'Event Organizer'}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.profile.type = 'foodtruck';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Registration');
  }

  doSignUp() {
    this.showSpinner = true;
    let timeoutId = setTimeout(() => {
        this.showSpinner = false;
        this.navCtrl.push(Payment, {}, {animate: false});
    }, 3000);
  }

}
