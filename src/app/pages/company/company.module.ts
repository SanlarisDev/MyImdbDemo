import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyService } from './services/company.service';
import { ParseService } from 'src/app/shared/parse/parse.service';



@NgModule({
  declarations: [
    CompanyComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  providers: [CompanyService]
})
export class CompanyModule { }
