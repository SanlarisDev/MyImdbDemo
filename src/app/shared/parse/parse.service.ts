import { Injectable } from '@angular/core';
import { forkJoin, Observable, of} from 'rxjs';
import { tap, map } from 'rxjs/operators';
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

    public getMovieWithActorsAndCompanies(idMovie: number): Observable<Movie>{
      let obs:Observable<Movie> = forkJoin({
        movie$: this.movieService.getMovie(idMovie),
        actors$: this.actorService.getAllActors(),
        companies$: this.companyService.getAllCompanies()})
        .pipe(
          tap((data) => console.log(data)),
          map((data) => this.parseMovieEntityToMovie(data.movie$, data.actors$, data.companies$)),
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
        companies: this.findCompaniessByMovieId(companies, movie),
      };
      return _movie;
    }

    private findActorsByMovieId(actors:ActorEntity[], movie: MovieEntity): Actor[]{
      let actorsArr = actors.filter(actor => movie.actors.filter(actorId => actorId === actor.id));
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

    private findCompaniessByMovieId(companies:CompanyEntity[], movie: MovieEntity): Company[]{
      let companiesArr = companies.filter(company => company.movies.filter(movieCompany => movieCompany === movie.id));
      let companiesMap: Company[] = companiesArr ? companiesArr.map((company) => ({
        id: company.id,
        name: company.name,
        country: company.country,
        createYear: company.createYear,
        employees: company.employees,
        rating: company.rating,
        movies: [],
      })): [];
      return companiesMap;
    }
}
