import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Registration } from '../registration/registration';
import { Home } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class Main {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad Main');
  }

  ionViewWillEnter() {
    // console.log('ionViewWillEnter Main');
  }

  ionViewWillLeave() {
    // console.log('ionViewWillLeave Main');
  }

  goToSignUp() {
    // this.navCtrl.push(Registration, {}, {animate: true, direction:'forward'});
    this.navCtrl.push(Registration);
  }

  doLogin () {
    this.navCtrl.setRoot(Home);
  }

}
