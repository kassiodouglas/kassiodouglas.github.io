import { Component } from '@angular/core';
import { CepService } from 'src/app/services/cep.service';
@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent {

  constructor(private cepService: CepService){}

  cep:string = '';
  dataCep:object|null|string = null;

  async consumirCep(){ 
    this.dataCep = null     
    let result = await this.cepService.cep(this.cep);

    this.dataCep = result        
  }
}




