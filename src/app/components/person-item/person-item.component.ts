import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Person } from '../../models/Person';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css']
})
export class PersonItemComponent implements OnInit {
  @Input() person: Person;
  @Output() deletePerson: EventEmitter<Person> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToggle(p: Person){
    p.inDeveloperMafia = false;
  }

  onDelete(p: Person){
    this.deletePerson.emit(p)
  }
}
