import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss']
})
export class OffcanvasComponent {

  @Input() idoff:string = 'offcanvas';
  @Input() title:string = 'Title Offcanvas';
  @Input() position:string = 'start';

  labelledby:String = this.idoff + 'Label';

}
