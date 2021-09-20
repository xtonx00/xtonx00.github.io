import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
  [
    /*{ path: '', redirectTo: 'homepage', pathMatch: 'full' ,*/
    { path: '', loadChildren: () => import('./features/page-routing/page-routing.module').then(m => m.PageRoutingModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
