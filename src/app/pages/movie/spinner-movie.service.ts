import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SpinnerMovieService {
  private _loadingListMovies: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly loadingListMovies$ = this._loadingListMovies.asObservable();

  constructor() { }

  listMovieShow() {
    this._loadingListMovies.next(true);
  }

  listMovieHide() {
    this._loadingListMovies.next(false);
  }
}
