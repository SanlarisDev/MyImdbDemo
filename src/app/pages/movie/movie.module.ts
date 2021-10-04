import { NgModule } from '@angular/core';
import { MovieComponent } from './movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieService } from './services/movie.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedMovieActorCompanyModule } from 'src/app/shared/parse/sharedMovieActorCompany.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MovieComponent,
    EditMovieComponent,
    DetailMovieComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MovieRoutingModule,
    HttpClientModule,
    SharedModule,

    SharedMovieActorCompanyModule
  ],
  providers:[
    MovieService
  ]
})
export class MovieModule { }
