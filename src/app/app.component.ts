
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  name:string = 'Josephet';

  constructor( /*Services from DI*/ ) {}

  ngOnInit() {
    // Life cycle hook, runs when component is created.
  }

  changeName(name:string):void {
    this.name = name;
  }
}

