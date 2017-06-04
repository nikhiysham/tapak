import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FtRental } from './ft-rental';

@NgModule({
  declarations: [
    FtRental,
  ],
  imports: [
    IonicPageModule.forChild(FtRental),
  ],
  exports: [
    FtRental
  ]
})
export class FtRentalModule {}
