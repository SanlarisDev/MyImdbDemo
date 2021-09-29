import { NgModule } from '@angular/core';
import { MovieComponent } from './movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieService } from './movie.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { SpinnerMovieService } from './spinner-movie.service';
import { HttpConfigInterceptor } from 'src/app/shared/interceptors/http-config.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
    MatCardModule
  ],
  providers:[
    {provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true},
    MovieService,
    SpinnerMovieService]
})
export class MovieModule { }
