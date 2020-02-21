import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './components/people/people.component';
import { PersonItemComponent } from './components/person-item/person-item.component';
import { PersonService } from './services/person.service';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PersonItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
