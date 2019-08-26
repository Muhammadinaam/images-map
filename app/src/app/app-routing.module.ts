import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: '', canActivate: [AuthGuard], loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'tab-account', canActivate: [AuthGuard], loadChildren: './tab-account/tab-account.module#TabAccountPageModule' },
  { path: 'auth', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'auth', loadChildren: './register/register.module#RegisterPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
