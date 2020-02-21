import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/Person';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  peopleList: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.peopleList = this.personService.getPersons();
  }

  deletePerson(p:Person){
    console.log('triggered Delete');
    this.peopleList = this.peopleList.filter(person => person.name !== p.name)
  }

}
