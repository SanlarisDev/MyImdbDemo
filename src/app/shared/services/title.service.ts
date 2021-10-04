import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface TitleElements{
  title: string;
  isBack: boolean;
}

@Injectable()
export class TitleService {
  private _title: BehaviorSubject<TitleElements> = new BehaviorSubject<TitleElements>({title: '', isBack: false});
  public readonly title$ = this._title.asObservable();

  constructor() { }

  getTitle(): Observable<TitleElements>{
    return this._title;
  }

  setTitle(_title: string, _back: boolean){
    this._title.next({title: _title, isBack: _back});
  }

  public setTitleMoviePage(_title?: string, _year?: number, _back?: boolean){
    let titleMovie = _title ? _title : '';
    titleMovie    += _year ? `(${_year})` : '';

    let isBack = _back ? _back : false;
    this.setTitle(titleMovie, isBack);
  }
}
