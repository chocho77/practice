import { Component } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent {

  message:string = 'Message From Typescript Component File.';
  imgUrl:string = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80';
  imgNaturaUrl:string = 'https://media.istockphoto.com/id/467367026/photo/perfect-sky-and-ocean.jpg?s=1024x1024&w=is&k=20&c=IM7cOUPReUOJ_CVZBn1oliD9j-wBc8z-G7NIgrkPtsE=';
  imgKitUrl:string = 'https://media.istockphoto.com/id/1164887104/photo/a-baby-humpback-whale-plays-near-the-surface-in-blue-water.webp?s=2048x2048&w=is&k=20&c=cArhOJbfgGibHlIdBhwUrcJdpDqBzusg8hMdX9noFnE=';
  
  bool:boolean = false;

  buttonClick() {
    console.log('Clicked!');
    
  }
  
}
