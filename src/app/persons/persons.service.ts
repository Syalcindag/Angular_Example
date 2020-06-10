import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";


@Injectable({providedIn:'root'})
export class PersonsService{
  personsChanged = new Subject<string[]>();
  persons: string[] = [];
  constructor(private http:HttpClient){}

  fetchPerson(){
    this.http.get<any>('https://swapi.dev/api/people')
    .pipe(map( data => {
        return data.results.map(character => character.name);
    } ))
    .subscribe( resData => {
      this.personsChanged.next(resData);
        console.log(resData)
    })
  }

  onCreatedName(name: string){
    this.persons.push(name);
    this.personsChanged.next(this.persons);
  }

  removePerson(name:string){
    this.persons = this.persons.filter(person => {
      return person != name;
    })
    this.personsChanged.next(this.persons);

  }
}
