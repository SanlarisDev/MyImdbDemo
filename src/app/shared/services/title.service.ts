import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TITLE_DEFAULT } from '../constant';

@Injectable()
export class TitleService {
  private _title: BehaviorSubject<string> = new BehaviorSubject<string>(TITLE_DEFAULT);
  public readonly title$ = this._title.asObservable();

  constructor() { }

  getTitle(): Observable<string>{
    return this._title;
  }

  setTitle(title: string){
    this._title.next(title);
  }
}
