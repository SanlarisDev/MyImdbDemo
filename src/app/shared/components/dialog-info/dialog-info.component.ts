import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-info',
  templateUrl: './dialog-info.component.html',
  styleUrls: ['./dialog-info.component.scss']
})
export class DialogInfoComponent implements OnInit {

  @Input()
  textDialogInfo!: string;

  @Input()
  time!: number;

  constructor() { }

  ngOnInit(): void {
  }

  //this._snackBar.open(message, action);

}
