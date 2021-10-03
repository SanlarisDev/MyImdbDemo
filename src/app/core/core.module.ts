import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrorService } from '../shared/services/error.service';
import { SuccesService } from '../shared/services/succes.service';


@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    // vendor
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    // material
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,

    CommonModule,
    TranslateModule.forChild({extend: true})
  ],
  exports: [MainLayoutComponent],
  providers: [ErrorService, SuccesService]
})
export class CoreModule { }
