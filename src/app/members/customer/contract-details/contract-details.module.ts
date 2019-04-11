import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContractDetailsPage } from './contract-details.page';
import { ContractModalPageComponent } from '../contract-modal-page/contract-modal-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContractDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContractDetailsPage, ContractModalPageComponent],
  entryComponents: [ContractModalPageComponent]
})
export class ContractDetailsPageModule {}
