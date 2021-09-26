import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { URLS } from "src/app/shared/urls";
import { CompanyComponent } from "./company.component";

const routes: Routes = [
  {path: '', component: CompanyComponent},
  {path: URLS.DETAIL, component: CompanyComponent},
  {path: URLS.EDIT, component: CompanyComponent},
  {path: URLS.CREATE, component: CompanyComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
