import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TitleService {
  private _title: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public readonly title$ = this._title.asObservable();

  constructor() { }

  getTitle(): Observable<string>{
    console.log()
    return this._title;
  }

  setTitle(title: string){
    console.log(title);
    this._title.next(title);
  }

  public setTitleMoviePage(_title?: string, _year?: number){
    let titleMovie = _title ? _title : '';
    titleMovie    += _year ? `(${_year})` : '';

    this.setTitle(titleMovie);
  }
}
