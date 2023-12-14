import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/_helpers/auth.guard';
import { LoginPageComponent } from './core/containers/login-page/login-page.component';
import { RegisterPageComponent } from './core/containers/register-page/register-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/ladder', pathMatch: 'full' },
  { 
    path: 'ladder', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./ladder/ladder.module').then(m => m.LadderModule)
  },
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
