import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FtPayment } from './ft-payment';

@NgModule({
  declarations: [
    FtPayment,
  ],
  imports: [
    IonicPageModule.forChild(FtPayment),
  ],
  exports: [
    FtPayment
  ]
})
export class FtPaymentModule {}
