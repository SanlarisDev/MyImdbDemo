import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SpinnerComponent } from './components/spinner/spinner.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DialogInfoComponent } from './components/dialog-info/dialog-info.component';
import {MatChipsModule} from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

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
    MatSnackBarModule,

    TranslateModule.forChild({extend: true})
  ],
  exports: [
    //vendor
    CommonModule,
    RouterModule,

    // material
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatChipsModule,
    MatButtonModule,

    // components
    SpinnerComponent,

    TranslateModule
  ],
  providers: []
})
export class SharedModule { }
