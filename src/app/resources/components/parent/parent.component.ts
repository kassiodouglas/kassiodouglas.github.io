import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  @Output() onMsgParentToAvo: EventEmitter<any> = new EventEmitter();

  @Input() nameParent:string = '';
  @Input() childs:Array<string> = [];
  @Input() message:string = '';


  onMsgToParent(nameChild: string){
    this.message = nameChild;
  }

  onMsgToAvo(){
    this.onMsgParentToAvo.emit();
  }


}
