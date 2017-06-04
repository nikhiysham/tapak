import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PaymentModal } from '../payment-modal/payment-modal';
import { Main } from '../main/main';

/**
 * Generated class for the Payment page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class Payment {

  payment:any = {};
  showSpinner:boolean = false;
  bankNames:Array<any> = [{id:'maybank', value: 'Maybank2U'},{id:'cimb', value: 'Cimb Clicks'}]

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Payment');
  }

  presentCompleteModal () {
    let compModal = this.modalCtrl.create(PaymentModal);
    compModal.onDidDismiss(data => {
       this.navCtrl.setRoot(Main);
    });
    compModal.present();
  }

  doPay () {
    console.log('true');
    this.showSpinner = true;
    let timeoutId = setTimeout(() => {
        this.showSpinner = false;
        this.presentCompleteModal();
    }, 3000);
  }

}
