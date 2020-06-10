import { Component } from '@angular/core';
import { PersonsService } from './persons.service';


@Component({
  selector:'app-person-input',
  templateUrl:'./person-input.component.html',
  styleUrls:['./person-input.component.css']
})
export class PersonInputComponent {

  enteredName = '';
  constructor(private prsService:PersonsService){}

  onCreatePerson(){
    console.log('Created Person name : ' + this.enteredName);
    this.prsService.onCreatedName(this.enteredName);
    this.enteredName = '';
  }
}
