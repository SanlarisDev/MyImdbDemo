import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorComponent } from './actor.component';
import { ActorRoutingModule } from './actor-routing.module';
import { ParseService } from 'src/app/shared/parse/parse.service';
import { ActorService } from './services/actor.service';
import { ParseModule } from 'src/app/shared/parse/parse.module';



@NgModule({
  declarations: [
    ActorComponent
  ],
  imports: [
    CommonModule,
    ActorRoutingModule
  ],
  providers: [ActorService]
})
export class ActorModule { }
