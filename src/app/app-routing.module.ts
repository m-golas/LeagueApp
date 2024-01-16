import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/_helpers/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/ladder', pathMatch: 'full',  },
  { 
    path: 'ladder',
    canActivate: [AuthGuard], 
    loadChildren: () => import('./ladder/ladder.module').then(m => m.LadderModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
