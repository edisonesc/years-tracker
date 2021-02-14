import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { NgbModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { YearComponent } from './year/year.component';
import { SetupComponent } from './setup/setup.component';
import { FormsModule } from '@angular/forms';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    YearComponent,
    SetupComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,

    NgbModule,
    NgbDatepickerModule,
    
    MatProgressSpinnerModule
  ]
})
export class PagesModule { }
