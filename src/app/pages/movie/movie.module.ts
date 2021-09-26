import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieService } from './movie.service';

@NgModule({
  declarations: [
    MovieComponent,
    EditMovieComponent,
    DetailMovieComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule
  ],
  providers:[MovieService]
})
export class MovieModule { }
