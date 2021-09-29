import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {
  public movie!: Movie | null;
  public loadingListMovies: boolean = true;

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let actualId = this.route.snapshot.paramMap.get('id');

    if(actualId){
      this.movieService.getMovie(actualId).subscribe({
        next: (_movie) => {this.movie = _movie},
        error: () => {},
        complete: () => {this.loadingListMovies = false}
      });

    } else {
      this.movie = null;
      this.loadingListMovies = false;
    }

  }

}
