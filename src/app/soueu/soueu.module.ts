import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoueuPageRoutingModule } from './soueu-routing.module';

import { SoueuPage } from './soueu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoueuPageRoutingModule
  ],
  declarations: [SoueuPage]
})
export class SoueuPageModule {}
