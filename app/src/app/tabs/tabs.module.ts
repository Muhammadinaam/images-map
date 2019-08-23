import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
      { path: 'tab-map', loadChildren: () => import('../tab-map/tab-map.module').then(m => m.TabMapPageModule) },
      { path: 'tab-upload-image', loadChildren: () => import('../tab-upload-image/tab-upload-image.module').then(m => m.TabUploadImagePageModule) },
    ]
  },
  {
    path:'',
    redirectTo:'/tabs/tab-map',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
