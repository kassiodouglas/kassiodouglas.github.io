import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent {

  id:number = 0;

  constructor(private route:ActivatedRoute){
    this.getId()
  }

  getId(){
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

}
