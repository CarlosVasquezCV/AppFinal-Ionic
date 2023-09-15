import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroperPage } from './registroper.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroperPageRoutingModule {}
