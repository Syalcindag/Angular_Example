import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';


@Component({
  selector:'my-persons',
  templateUrl: './persons.component.html'
})

export class PersonsComponent implements OnInit, OnDestroy {
  personList:string[];
  private personListSubs = new Subscription;
  isfetching = false;

  constructor(private prsService: PersonsService){ }

  ngOnInit(){
    this.personListSubs =  this.prsService.personsChanged.subscribe(persons => {
      this.personList = persons;
      this.isfetching = false;
    });
    this.isfetching = true;
    this.prsService.fetchPerson();
  }

  removePerson(name:string){
    this.prsService.removePerson(name);
    console.log(this.personList);
  }

  ngOnDestroy(){
    this.personListSubs.unsubscribe();
  }

}
