import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ColorButton, FloatButton } from 'src/app/core/layout/components/float-button/float-buttom.model';
import { FloatButtonService } from 'src/app/core/layout/services/float-button.service';
import { ParseService } from 'src/app/shared/parse/parse.service';
import { TitleService } from 'src/app/shared/services/title.service';
import { URLS } from 'src/app/shared/urls';
import { Movie } from '../movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {
  public movie!: Movie | null;
  public loadingMovie: boolean = true;
  public urls = URLS;
  public actualId: string | null;

  constructor(
    private parseService: ParseService,
    private activateRoute: ActivatedRoute,
    private titleService: TitleService,
    private floatButtonService: FloatButtonService,
    private movieService: MovieService,
    private route: Router) {
      this.actualId = this.activateRoute.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {

    if(this.actualId){
      // Dont work in this.movieService.delete..., required string, not string | undefined
      var id: string = this.actualId;
      this.floatButtonService.setFloatButtons([
        new FloatButton(ColorButton.PRIMARY, 'Editar película', 'edit', () => this.route.navigate([URLS.MOVIE, this.actualId ,URLS.ONLY_EDIT])),
        new FloatButton(ColorButton.WARN, 'Eliminar película', 'delete', () => this.movieService.deleteMovie(parseInt(id)))
      ]);

      this.parseService.getMovieWithActorsAndCompanies(parseInt(id))
      .pipe(finalize(() => this.loadingMovie = false))
      .subscribe( (_movie: Movie) => {

        this.titleService.setTitleMoviePage(_movie.title, _movie.year, true);
        this.movie = _movie;
      });

    } else {
      this.movie = null;
      this.loadingMovie = false;
    }
  }
}
