import { NgModule } from '@angular/core';
import { MovieComponent } from './movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieService } from './services/movie.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { SpinnerMovieService } from './services/spinner-movie.service';
import { ParseModule } from 'src/app/shared/parse/parse.module';

@NgModule({
  declarations: [
    MovieComponent,
    EditMovieComponent,
    DetailMovieComponent
  ],
  imports: [
    MovieRoutingModule,
    HttpClientModule,
    SharedModule,

    // material
    MatCardModule,

    ParseModule
  ],
  providers:[
    MovieService,
    SpinnerMovieService
  ]
})
export class MovieModule { }
