import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Common } from '../../providers/common';
import { ChoosePicture } from '../../components/choose-picture/choose-picture';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {
  public base64Image:String = "";
  foodtruck:any = {};
  user:any = {};
  source: any = {};
  selectOptions:any = { subTitle: 'Select picture source', mode: 'md'};
  sources:Array<any> = [{id:1, value: 'Camera'}, {id:2, value: 'Photo Library'}];

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, private camera: Camera, public common: Common, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile');
  }

  choose(evt) {
    let popover = this.popoverCtrl.create(ChoosePicture);
    popover.present({
      ev: evt
    });

    popover.onDidDismiss((data) => {
        console.log(data);
        switch (data) {
          case 'camera':
            this.takePicture(this.camera.PictureSourceType.CAMERA);
            break;
          case 'gallery':
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
            break;
        }
    });
  }

  takePicture(source:any) {
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
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });
  }

}
