import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoosePicture } from './choose-picture';

@NgModule({
  declarations: [
    ChoosePicture,
  ],
  imports: [
    IonicPageModule.forChild(ChoosePicture),
  ],
  exports: [
    ChoosePicture
  ]
})
export class ChoosePictureModule {}
