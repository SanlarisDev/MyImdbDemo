import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogInfoComponent } from './components/dialog-info/dialog-info.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { DurationPipe } from './pipes/duration.pipe';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    SpinnerComponent,
    DialogInfoComponent,
    DurationPipe
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
    MatDividerModule,
    MatListModule,

    // components
    SpinnerComponent,

    //Pipe
    DurationPipe,

    TranslateModule
  ],
  providers: []
})
export class SharedModule { }
