import { HomepageComponent } from '..//homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    //redirectTo: 'homepage',
    pathMatch: 'full',
    component: HomepageComponent
  },
  {
    path: 'homepage',
    pathMatch: 'full',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
