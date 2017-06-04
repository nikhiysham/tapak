import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FtRental page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ft-rental',
  templateUrl: 'ft-rental.html',
})
export class FtRental {

  search:any = {};
  menuCategories:Array<any> = [{id:1, value: 'Local'},{id:2, value: 'Western'},{id:3, value: 'Asian'},{id:4, value: 'Fusion'},{id:5, value: 'Beverages'}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FtRental');
  }

}
