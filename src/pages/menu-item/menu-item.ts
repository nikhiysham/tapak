import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Common } from '../../providers/common';
import { ChoosePicture } from '../../components/choose-picture/choose-picture';

@IonicPage()
@Component({
  selector: 'page-menu-item',
  templateUrl: 'menu-item.html',
})
export class MenuItem {
  public base64Image: String = "";
  items: Array<any> = [];

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, private camera: Camera, public navParams: NavParams, public common: Common) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuItem');
  }

  addItems() {
    console.log('add items');
    if (this.items.length < 3) {
      this.items.push({ id: 1, value: 'item1' });
    } else {
      this.common.presentToast('Max product allowed 3 only');
    }
  }

  removeItem(index:any) {
      console.log(index);
      this.items.splice(index,1);
  }

  choose(ind) {
    let popover = this.popoverCtrl.create(ChoosePicture);
    popover.present();

    popover.onDidDismiss((data) => {
      switch (data) {
        case 'camera':
          this.takePicture(this.camera.PictureSourceType.CAMERA, ind);
          break;
        case 'gallery':
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY, ind);
          break;
      }
    });
  }

  takePicture(source: any, ind:any) {
    const options: CameraOptions = {
      sourceType: source,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 640,
      targetHeight: 320,
      quality: 75,
      allowEdit: true,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imageData) => {
      let data = "data:image/jpeg;base64," + imageData;
      this.items[ind].base64Image = data;
    }, (err) => {
      console.log(err);
    });
  }

}
