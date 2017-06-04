import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FtAdvertisement } from './ft-advertisement';

@NgModule({
  declarations: [
    FtAdvertisement,
  ],
  imports: [
    IonicPageModule.forChild(FtAdvertisement),
  ],
  exports: [
    FtAdvertisement
  ]
})
export class FtAdvertisementModule {}
