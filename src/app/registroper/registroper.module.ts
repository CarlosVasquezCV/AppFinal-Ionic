import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroperPageRoutingModule } from './registroper-routing.module';

import { RegistroperPage } from './registroper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroperPageRoutingModule
  ],
  declarations: [RegistroperPage]
})
export class RegistroperPageModule {}
