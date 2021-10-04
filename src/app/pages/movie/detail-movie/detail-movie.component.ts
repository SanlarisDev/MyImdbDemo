import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ParseService } from 'src/app/shared/parse/parse.service';
import { TitleService } from 'src/app/shared/services/title.service';
import { URLS } from 'src/app/shared/urls';
import { Movie } from '../movie';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {
  public movie!: Movie | null;
  public loadingMovie: boolean = true;
  public urls = URLS;

  constructor(
    private parseService: ParseService,
    private route: ActivatedRoute,
    private titleService: TitleService) { }

  ngOnInit(): void {
    let actualId = this.route.snapshot.paramMap.get('id');

    if(actualId){
      this.parseService.getMovieWithActorsAndCompanies(parseInt(actualId))
      .pipe(finalize(() => this.loadingMovie = false))
      .subscribe( (_movie: Movie) => {

        this.titleService.setTitleMoviePage(_movie.title, _movie.year);
        this.movie = _movie;
      });

    } else {
      this.movie = null;
      this.loadingMovie = false;
    }
  }
}
