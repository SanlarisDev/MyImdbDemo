import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorService } from 'src/app/shared/services/error.service';
import { URLSAPI } from 'src/app/shared/urls';
import { environment } from 'src/environments/environment';
import { ActorEntity } from '../actor.entity';

@Injectable()
export class ActorService {

  private _baseUrl: string = environment.urlApi + URLSAPI.ACTOR;

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  /**
   *
   * @returns Observable<ActorEntity[]>
   */
  getAllActors(): Observable<ActorEntity[]> {
    return this.http.get<ActorEntity[]>(this._baseUrl).pipe(catchError((e) => this.errorService.handleError(e, 'los actores')));
  }

  /**
   *
   * @param id
   * @returns Observable<ActorEntity>
   */
  getActor(id: string): Observable<ActorEntity> {
    return this.http.get<ActorEntity>(this._baseUrl + '/' + id).pipe(catchError((e) => this.errorService.handleError(e, 'el actor', true)));
  }

  /**
   *
   * @param actor
   * @returns Observable<ActorEntity>
   */
  createActor(actor: ActorEntity): Observable<ActorEntity> {
    return this.http.put<ActorEntity>(this._baseUrl, actor).pipe(catchError((e) => this.errorService.handleError(e, 'el actor')));
  }

  /**
   *
   * @param actor
   * @returns Observable<ActorEntity>
   */
  setActor(actor: ActorEntity): Observable<ActorEntity> {
    return this.http.put<ActorEntity>(this._baseUrl  + '/' + actor.id, actor).pipe(catchError((e) => this.errorService.handleError(e, 'el actor')));
  }
}
