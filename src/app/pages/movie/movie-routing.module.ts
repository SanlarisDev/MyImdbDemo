import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { URLS } from 'src/app/shared/urls';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MovieComponent } from './movie.component';

// /movie
const routes: Routes = [
  {path: '', component: MovieComponent},
  {path: URLS.EDIT, component: EditMovieComponent},
  {path: URLS.CREATE, component: EditMovieComponent},
  {path: URLS.DETAIL, component: DetailMovieComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
