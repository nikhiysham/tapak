import { Component, ViewChild } from '@angular/core';
import { ViewController, Select } from 'ionic-angular';

@Component({
  selector: 'choose-picture',
  templateUrl: 'choose-picture.html'
})
export class ChoosePicture {

  text: string;
  selectOptions:any = {title: 'Source', subTitle: 'Select source', mode: 'md'};
  sources:Array<any> = [{id:1, value: 'Camera'}, {id:2, value: 'Photo Library'}];

  constructor(public viewCtrl: ViewController) {
  }

  close (type) {
    this.viewCtrl.dismiss(type);
  }

}
