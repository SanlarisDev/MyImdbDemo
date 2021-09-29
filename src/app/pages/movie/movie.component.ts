import { Component, OnInit } from '@angular/core';
import { SpinnerMovieService } from 'src/app/pages/movie/spinner-movie.service';
import { URLS } from 'src/app/shared/urls';
import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  public listMovies?: Movie[];
  public loadingListMovies: boolean = true;
  public urls = URLS;

  constructor(private movieService:MovieService, public loadingService: SpinnerMovieService) {
  }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe({
      next: (_listMovies) => {this.listMovies = _listMovies},
      error: () => {},
      complete: () => {this.loadingListMovies = false}
    });
  }

}
