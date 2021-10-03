import { Injectable } from '@angular/core';
import { forkJoin, Observable, of} from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { Actor } from 'src/app/pages/actor/actor';
import { ActorEntity } from 'src/app/pages/actor/actor.entity';
import { Company } from 'src/app/pages/company/company';
import { CompanyEntity } from 'src/app/pages/company/company.entity';
import { Movie } from 'src/app/pages/movie/movie';
import { MovieEntity } from 'src/app/pages/movie/movie.entity';
import { MovieService } from 'src/app/pages/movie/services/movie.service';
import { ActorService } from '../../pages/actor/services/actor.service';
import { CompanyService } from '../../pages/company/services/company.service';
import { ErrorService } from '../services/error.service';

@Injectable()
export class ParseService {
  constructor(private companyService: CompanyService,
    private actorService: ActorService,
    private movieService: MovieService,
    private errorService: ErrorService){}

    public getMovieWithActorsAndCompanies(idMovie: number): Observable<Movie>{
      let movie$ = this.movieService.getMovie(idMovie);
      let actors$ = this.actorService.getAllActors().pipe(catchError(err => of([])));
      let companies$ = this.companyService.getAllCompanies().pipe(catchError(err => of([])));

      let obs:Observable<Movie> = forkJoin({
        _movie$: movie$,
        _actors$: actors$,
        _companies$: companies$})
        .pipe(
          tap((result) => console.log(result)),
          map((data) => this.parseMovieEntityToMovie(data._movie$, data._actors$, data._companies$)),
          tap((result) => console.log(result))
          );
      return obs;
    }

    private parseMovieEntityToMovie(movie: MovieEntity, actors: ActorEntity[], companies: CompanyEntity[]){
      let _movie: Movie = {
        id: movie.id,
        title: movie.title,
        poster: movie.poster,
        genre: movie.genre,
        year: movie.year,
        duration: movie.duration,
        imdbRating: movie.imdbRating,
        actors: this.findActorsByMovieId(actors, movie),
        company: this.findCompaniessByMovieId(companies, movie),
      };
      return _movie;
    }

    private findActorsByMovieId(actors:ActorEntity[], movie: MovieEntity): Actor[]{
      let actorsArr = actors.filter(actor => {
        let res = movie.actors.filter(actorId => {
          return actorId === actor.id
        });
        return res.length > 0
      });

      let actorsMap:Actor[] = actorsArr ? actorsArr.map((actor) => ({
        id: actor.id,
        firstName: actor.first_name,
        lastName: actor.last_name,
        gender: actor.gender,
        bornCity: actor.bornCity,
        birthdate: actor.birthdate,
        img: actor.img,
        rating: actor.rating,
        movies: [],
      })) : [];
      return actorsMap;
    }

    private findCompaniessByMovieId(companies:CompanyEntity[], movie: MovieEntity): Company | undefined{
      let companiesArr = companies.find(company => {
        let res = company.movies.find(movieCompany => {
          return movieCompany === movie.id;
        });
        return res;
      });
      let companiesMap: Company | undefined = companiesArr ? {
        id: companiesArr.id,
        name: companiesArr.name,
        country: companiesArr.country,
        createYear: companiesArr.createYear,
        employees: companiesArr.employees,
        rating: companiesArr.rating,
        movies: [],
      } : undefined;
      return companiesMap;
    }
}
