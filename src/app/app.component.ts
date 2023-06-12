import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  parentMessage:string = 'Message from parent component.';
  parentMsg:string = 'Another message from parent component.';
}
