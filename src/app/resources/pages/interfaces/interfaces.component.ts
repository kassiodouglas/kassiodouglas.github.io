import { Component } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Animal } from 'src/app/interfaces/Animal';
import { AnimalsService } from 'src/app/services/animals.service';

@Component({
  selector: 'app-interfaces',
  templateUrl: './interfaces.component.html',
  styleUrls: ['./interfaces.component.scss']
})
export class InterfacesComponent {

  constructor(private animalsService:AnimalsService){
    this.getAnimals()
  }

  animals: Animal[] = []

  showAge(animal:Animal): void
  {
    let msg = `O ${animal.type} com nome ${animal.name} tem ${animal.age} anos!`
    Notiflix.Notify.info(msg)
  }

  getAnimals():void
  {
    this.animalsService.getAll().subscribe((animals) => (this.animals = animals));
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((a) => animal !== a);
    this.animalsService.remove(animal.id).subscribe();
  }
}






