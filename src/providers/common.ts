import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class Common {

  constructor(public toastCtrl: ToastController) {
    console.log('Hello Common Provider');
  }

  public isEmpty(data: any) {
    if (data === "" || data === null || data === undefined) {
      return true;
    } else {
      return false;
    }
  }

  public isEmptyObject(data: any) {
    if (data === "" || data === null || data === undefined || data === '{}') {
      return true;
    } else {
      return false;
    }
  }

  public presentToast(msg: string) {
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
  }

}
