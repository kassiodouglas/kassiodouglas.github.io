import { Component } from '@angular/core';

@Component({
  selector: 'app-compatilhamento',
  templateUrl: './compatilhamento.component.html',
  styleUrls: ['./compatilhamento.component.scss'] 
})
export class CompatilhamentoComponent { 

  defaultMessage:string = 'Nenhuma msg dos filhos!';

  parents:Array<any> =[
    {
      nameParent: 'Zico',
      childs: ['Cássio','Dandara']
    },
    {
      nameParent: 'Kássio Douglas',
      childs: ['Zeca','Luna','Ragnar','Jake']
    },
    {
      nameParent: 'Marlete',
      childs: ['kássio','Jan']
    }
  ];

  onSendEventToAvo(){
    console.log('app onSendEventToAvo')
  }

}
