import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  getPersons() {
    return [
      {
        name: 'Chris',
        awesomeness: 11,
        inDeveloperMafia: true
      },
      {
        name: 'Liam',
        awesomeness: 10,
        inDeveloperMafia: true
      },
      {
        name: 'John',
        awesomeness: 10,
        inDeveloperMafia: false
      }
    ];
  }
}
