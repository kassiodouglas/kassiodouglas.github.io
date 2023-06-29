import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Output() msgToParent: EventEmitter<any> = new EventEmitter();
  @Output() msgToAvo: EventEmitter<any> = new EventEmitter();

  @Input() nameParent: string = '';
  @Input() nameChild: string = '';

  sendMsgToParent(){    
    this.msgToParent.emit();
  }

  sendEventToAvo(){
    this.msgToAvo.emit();
  }
  
}
