import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Person } from '../post/Person';
import { Pingible } from '../Pingible';

@Component({
  selector: 'app-myclass',
  templateUrl: './myclass.component.html',
  styleUrls: ['./myclass.component.css']
})
export class MyclassComponent implements Pingible{
  firstName!:string;
  lastName!:string;
  emailadress!:string;
  num!:number;
  num1!:number;
  result!:number;
  result1!:number;

  @Input()
  fromParent!: string;
  childMessage:string = 'From Chiled Component';

  outputChildMessage:string = 'Message from Child Component Via Output';

  @Output() messageEvent = new EventEmitter<string>();


  constructor() {
    this.ping();
  }
  ping(): void {
    const person = new Person();
    this.firstName = person.firstName;
    this.lastName = person.lastName;
    this.emailadress = person.emailPerson;
    this.num = person.sub(2);
    this.num1 = person.ed(2,3);
    this.result = person.sub(3) * person.ed(3,3);
    this.result1 = person.sub(5.5) * person.ed(4.5,7.8);
  }

}
