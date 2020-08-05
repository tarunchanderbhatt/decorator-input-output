import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input('parentcomponentchild') Pdata: any;

  @Output() childevent = new EventEmitter();

  constructor() { }

  onchange(data: any): any {
    this.childevent.emit(data);
  }

}
