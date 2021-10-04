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

@Injectable()
export class ParseService {
  constructor(private companyService: CompanyService,
    private actorService: ActorService,
    private movieService: MovieService){}

    public readonly actors$ = this.actorService.getAllActors().pipe(catchError(err => of([])));
    public readonly companies$ = this.companyService.getAllCompanies().pipe(catchError(err => of([])));

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
          //tap((result) => console.log(result))
          );
      return obs;
    }

    private parseMovieEntityToMovie(movie: MovieEntity, actors: ActorEntity[], companies: CompanyEntity[]){
      let _actors: Actor[] = this.findActorsByMovieId(actors, movie);
      let _company: Company = this.findCompaniessByMovieId(companies, movie);

      let _movie: Movie = new Movie(movie.id, movie.title, movie.poster, movie.genre,
                                    movie.year, movie.duration, movie.imdbRating, _actors, _company);
      return _movie;
    }

    private findActorsByMovieId(actors:ActorEntity[], movie: MovieEntity): Actor[]{
      let actorsArr = actors.filter(actor => {
        let res = movie.actors.filter(actorId => {
          return actorId === actor.id
        });
        return res.length > 0
      });

      let actorsMap:Actor[] = actorsArr ? actorsArr.map((actor) => (
        new Actor(actor.id, actor.first_name, actor.last_name, actor.gender, actor.bornCity,
                    actor.birthdate, actor.img, actor.rating))) : [];

      return actorsMap;
    }

    private findCompaniessByMovieId(companies:CompanyEntity[], movie: MovieEntity): Company{
      let companiesArr = companies.find(company => {
        let res = company.movies.find(movieCompany => {
          return movieCompany === movie.id;
        });
        return res;
      });

      let companiesMap: Company = companiesArr ?
        new Company(companiesArr.id, companiesArr.name, companiesArr.country, companiesArr.createYear,
        companiesArr.employees, companiesArr.rating) : new Company();

      return companiesMap;
    }
}
