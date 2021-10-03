import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { SpinnerMovieService } from 'src/app/pages/movie/services/spinner-movie.service';
import { URLS } from 'src/app/shared/urls';
import { MovieEntity } from './movie.entity';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  public listMovies?: MovieEntity[];
  public loadingListMovies: boolean = true;
  public urls = URLS;

  constructor(private movieService:MovieService, public loadingService: SpinnerMovieService) {
  }

  ngOnInit(): void {
    this.movieService.getAllMovies().pipe(finalize(() => this.loadingListMovies = false))
    .subscribe( (_listMovies: MovieEntity[]) => {
      this.listMovies = _listMovies;
    });
  }

}
