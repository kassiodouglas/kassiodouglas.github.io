import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor() { }

  async cep(cep:string){ 
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    try{
      const response = await fetch(url);
      const result = await response.json()    

      if(result.erro)
        return {'error':'CEP inválido ou não encontrado'};  

      return result;

    }catch(e){      
      let errorMessage = "Failed to do something exceptional";

      if (e instanceof Error) {
        errorMessage = e.message;
      }

      return {'error':errorMessage};   
    }

  }
}
