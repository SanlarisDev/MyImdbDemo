import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorComponent } from './actor.component';
import { ActorRoutingModule } from './actor-routing.module';
import { ParseService } from 'src/app/shared/parse/parse.service';
import { ActorService } from './services/actor.service';
import { SharedMovieActorCompanyModule } from 'src/app/shared/parse/sharedMovieActorCompany.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ActorComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ActorRoutingModule,
    SharedMovieActorCompanyModule
  ],
  providers: [ActorService, ParseService]
})
export class ActorModule { }
