import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { URLS } from './shared/urls';

const routes: Routes = [
  {path: URLS.MOVIE, loadChildren: () => import('./pages/movie/movie.module').then(m => m.MovieModule)},
  {path: URLS.ACTOR, loadChildren: () => import('./pages/actor/actor.module').then(m => m.ActorModule)},
  {path: URLS.COMPANY, loadChildren: () => import('./pages/company/company.module').then(m => m.CompanyModule)},
  {path: '', redirectTo: URLS.MOVIE, pathMatch: 'full'},
  {path: '**', redirectTo: URLS.MOVIE}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
