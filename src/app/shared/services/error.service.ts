import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BehaviorSubject, throwError } from "rxjs";
import { Location } from '@angular/common';

export interface ErrorSnackBar{
  message: string,
  duration: number,
  panelClass: string,
}

export interface ErrorEvent{
  payload: ErrorSnackBar,
  show: boolean
}

@Injectable()
export class ErrorService{
  private errorDefault: ErrorEvent = {
    payload: {
      message: '',
      duration: 5000,
      panelClass: 'errorSnack'
    },
    show: false
  }
  private _showError: BehaviorSubject<ErrorEvent> = new BehaviorSubject<ErrorEvent>(this.errorDefault);
  public readonly showError$ = this._showError.asObservable()

  constructor(private location: Location, private snackBar: MatSnackBar){}

  showError(error: ErrorSnackBar) {
    this._showError.next({payload: error, show: true});
  }

  hideError(error: ErrorSnackBar) {
    this._showError.next({payload: error, show: false});
  }

  public handleError(error: HttpErrorResponse, resource: string, goBack?: boolean){
    let message: string = "Ha ocurrido un error";
    switch(error.status){
      case 0:
        message = `Ha ocurrido un error: ${error.error}`;
        break;
      case 404:
        message = `No se ha encontrado ${resource}`;
        break
      default:
        message = `Backend ha devuelto el código de error ${error.status}`;
    }

    // TODO: Hacer que no se solapen los snackbar si salen a la vez
   let errorSnackBar: ErrorSnackBar = {
        message: message,
        duration: this.errorDefault.payload.duration,
        panelClass: this.errorDefault.payload.panelClass
      }

    this.snackBar.open(errorSnackBar.message,'',
    { duration: errorSnackBar.duration, panelClass: errorSnackBar.panelClass });
    //this.showError(errorSnackBar);

    if(goBack){
      // TODO: Solución momentánea hasta que pueda cargarse en layout
      setInterval(() => {
        this.location.back();
      }, 2000);
    }

    return throwError(error);
  }
}
