import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetearPageRoutingModule } from './resetear-routing.module';

import { ResetearPage } from './resetear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetearPageRoutingModule
  ],
  declarations: [ResetearPage]
})
export class ResetearPageModule {}
