import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HobbiePage } from './hobbie';

@NgModule({
  declarations: [
    HobbiePage,
  ],
  imports: [
    IonicPageModule.forChild(HobbiePage),
  ],
})
export class HobbiePageModule {}
