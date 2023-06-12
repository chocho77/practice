import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-myclass',
  templateUrl: './myclass.component.html',
  styleUrls: ['./myclass.component.css']
})
export class MyclassComponent {
  @Input()
  fromParent!: string;
  childMessage:string = 'From Chiled Component';

}
