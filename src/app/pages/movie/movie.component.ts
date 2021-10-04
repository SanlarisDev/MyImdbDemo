import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ColorButton, FloatButton } from 'src/app/core/layout/components/float-button/float-buttom.model';
import { FloatButtonService } from 'src/app/core/layout/services/float-button.service';
import { TITLE } from 'src/app/shared/constant';
import { TitleService } from 'src/app/shared/services/title.service';
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

  constructor(
    private movieService:MovieService,
    private titleService: TitleService,
    private floatButton: FloatButtonService,
    private route: Router){}

  ngOnInit(): void {
    this.titleService.setTitleMoviePage(TITLE.MOVIE);

    this.floatButton.setFloatButtons([
      new FloatButton(ColorButton.ACCENT, 'Crear Página', 'add', () => {this.route.navigate([URLS.MOVIE, URLS.CREATE]);})
    ]);

    this.movieService.getAllMovies().pipe(finalize(() => this.loadingListMovies = false))
    .subscribe( (_listMovies: MovieEntity[]) => {
      this.listMovies = _listMovies;
    });
  }

  onClickLink(movie: MovieEntity){
    this.route.navigate([URLS.MOVIE, movie.id.toString()]);
  }

}
