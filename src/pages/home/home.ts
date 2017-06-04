import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Profile } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  rootPage:any;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    this.rootPage = Profile;
  }

  ngOnInit() {
    console.log('masuk');
  }

  openPage(page:any) {
    this.rootPage = page;
  }

}
