import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ColorButton, FloatButton } from '../components/float-button/float-buttom.model';

@Injectable({
  providedIn: 'root'
})
export class FloatButtonService {
  private _floatButtons: BehaviorSubject<FloatButton[]> = new BehaviorSubject<FloatButton[]>([]);
  public readonly floatButtons$ = this._floatButtons.asObservable();

  constructor() { }

  getFloatButtons(): Observable<FloatButton[]>{
    return this._floatButtons;
  }

  setFloatButtons(_buttons: FloatButton[]){
    this._floatButtons.next(_buttons);
  }
}
