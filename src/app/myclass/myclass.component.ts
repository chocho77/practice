import { Component,Input } from '@angular/core';
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

  @Input()
  fromParent!: string;
  childMessage:string = 'From Chiled Component';

  constructor() {
    this.ping();
  }
  ping(): void {
    const person = new Person();
    this.firstName = person.firstName;
    this.lastName = person.lastName;
    this.emailadress = person.emailPerson;
    
  }

}
