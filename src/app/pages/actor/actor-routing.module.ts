import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { URLS } from "src/app/shared/urls";
import { ActorComponent } from "./actor.component";

const routes: Routes = [
  {path: '', component: ActorComponent},
  {path: URLS.DETAIL, component: ActorComponent},
  {path: URLS.EDIT, component: ActorComponent},
  {path: URLS.CREATE, component: ActorComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorRoutingModule { }
