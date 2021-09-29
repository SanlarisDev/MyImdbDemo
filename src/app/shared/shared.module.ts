import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SpinnerComponent } from './components/spinner/spinner.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DialogInfoComponent } from './components/dialog-info/dialog-info.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    DialogInfoComponent
  ],
  imports: [
    // vendor
    CommonModule,
    RouterModule,

    // material
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  exports: [
    //vendor
    CommonModule,
    RouterModule,

    // material
    MatProgressSpinnerModule,
    MatSnackBarModule,

    // components
    SpinnerComponent
  ],
  providers: []
})
export class SharedModule { }
