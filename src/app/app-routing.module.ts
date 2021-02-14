import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { YearComponent } from './pages/year/year.component';
import { AppComponent } from './app.component';
import { SetupComponent } from './pages/setup/setup.component';


const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule)
  },
  { path: '', redirectTo: '/pages', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
