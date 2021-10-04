import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FloatButton } from './float-buttom.model';

@Component({
  selector: 'app-float-button',
  templateUrl: './float-button.component.html',
  styleUrls: ['./float-button.component.scss']
})
export class FloatButtonComponent implements OnInit {
  @Input()
  buttons: FloatButton[] | null = [];

  @Output()
  buttonPress: EventEmitter<Function> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.buttons);
  }

  onClick(action: Function | undefined){
    this.buttonPress.emit(action);
  }



}
