import { NgModule } from "@angular/core";
import { ActorService } from "../../pages/actor/services/actor.service";
import { CompanyService } from "../../pages/company/services/company.service";
import { MovieService } from "../../pages/movie/services/movie.service";
import { ParseService } from "./parse.service";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports:[
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MovieService, ActorService, CompanyService, ParseService]
})

export class SharedMovieActorCompanyModule { }
