import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentModal } from './payment-modal';

@NgModule({
  declarations: [
    PaymentModal,
  ],
  imports: [
    IonicPageModule.forChild(PaymentModal),
  ],
  exports: [
    PaymentModal
  ]
})
export class PaymentModalModule {}
