import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class SuccesService{
  constructor(private snackBar: MatSnackBar){}

  public handleSucces(type:string, resource: string){
    this.snackBar.open('Guardado correctamente.', 'close', { duration: 2000, panelClass: 'successSnack'});
  }
}
