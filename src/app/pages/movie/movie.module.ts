import { NgModule } from '@angular/core';
import { MovieComponent } from './movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieService } from './services/movie.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { ParseModule } from 'src/app/shared/parse/parse.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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

    FormsModule,
    ReactiveFormsModule,

    ParseModule
  ],
  providers:[
    MovieService
  ]
})
export class MovieModule { }
