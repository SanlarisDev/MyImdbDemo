import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { URLSAPI } from 'src/app/shared/urls';
import { environment } from 'src/environments/environment';
import { Movie } from './movie';

@Injectable()
export class MovieService {

  private _baseUrl: string = environment.urlApi + URLSAPI.MOVIE;

  constructor(private http: HttpClient) { }

  /**
   *
   * @returns Observable<Movie[]>
   */
  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this._baseUrl).pipe(retry(3), catchError(this.handleError));
  }

  /**
   *
   * @param id
   * @returns Observable<Movie>
   */
  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(this._baseUrl + '/' + id).pipe(retry(3), catchError(this.handleError));
  }

  /**
   *
   * @param movie
   * @returns Observable<Movie>
   */
  createMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(this._baseUrl, movie).pipe(retry(3), catchError(this.handleError));
  }

  /**
   *
   * @param movie
   * @returns Observable<Movie>
   */
  setMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(this._baseUrl  + '/' + movie.id, movie).pipe(retry(3), catchError(this.handleError));
  }

  /**
   *
   * @param error
   * @returns throwError
   */
  handleError(error: HttpErrorResponse){
    if(error.status === 0) {
      console.error('And error ocurred: ', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was`, error.error);
    }

    return throwError(
      'Something  bad happened; please try again later.');
  }



}
