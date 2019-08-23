import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabUploadImagePage } from './tab-upload-image.page';

const routes: Routes = [
  {
    path: '',
    component: TabUploadImagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabUploadImagePage]
})
export class TabUploadImagePageModule {}
