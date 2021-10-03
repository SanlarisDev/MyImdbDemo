import { NgModule } from "@angular/core";
import { ActorService } from "../../pages/actor/services/actor.service";
import { CompanyService } from "../../pages/company/services/company.service";
import { MovieService } from "../../pages/movie/services/movie.service";
import { ParseService } from "./parse.service";

@NgModule({
  providers: [MovieService, ActorService, CompanyService, ParseService]
})

export class ParseModule { }
