import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YearComponent } from './year/year.component';
import { SetupComponent } from './setup/setup.component';


const routes: Routes = [
  {
    path: 'home',
    component: YearComponent
  },
  {
    path: 'setup',
    component: SetupComponent
  },
  { path: '', redirectTo: '/setup', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
