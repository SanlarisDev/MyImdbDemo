import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ErrorService } from 'src/app/shared/services/error.service';
import { URLSAPI } from 'src/app/shared/urls';
import { environment } from 'src/environments/environment';
import { MovieEntity } from '../movie.entity';

@Injectable()
export class MovieService {

  private _baseUrl: string = environment.urlApi + URLSAPI.MOVIE;

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  /**
   *
   * @returns Observable<MovieEntity[]>
   */
  getAllMovies(): Observable<MovieEntity[]> {
    return this.http.get<MovieEntity[]>(this._baseUrl).pipe(catchError((e) => this.errorService.handleError(e, 'las películas')));
  }

  /**
   *
   * @param id
   * @returns Observable<MovieEntity>
   */
  getMovie(id: number): Observable<MovieEntity> {
    return this.http.get<MovieEntity>(this._baseUrl + '/' + id.toString()).pipe(catchError((e) => this.errorService.handleError(e, 'la película', true)));
  }

  /**
   *
   * @param movie
   * @returns Observable<MovieEntity>
   */
  createMovie(movie: MovieEntity): Observable<MovieEntity> {
    return this.http.put<MovieEntity>(this._baseUrl, movie).pipe(catchError((e) => this.errorService.handleError(e, 'la película')));
  }

  /**
   *
   * @param movie
   * @returns Observable<MovieEntity>
   */
  setMovie(movie: MovieEntity): Observable<MovieEntity> {
    return this.http.put<MovieEntity>(this._baseUrl  + '/' + movie.id.toString(), movie).pipe(catchError((e) => this.errorService.handleError(e, 'la película')));
  }

    /**
   *
   * @param id
   * @returns Observable<MovieEntity>
   */
     deleteMovie(id: number): Observable<MovieEntity> {
      return this.http.delete<MovieEntity>(this._baseUrl  + '/' + id.toString()).pipe(catchError((e) => this.errorService.handleError(e, 'la película')));
    }
}

