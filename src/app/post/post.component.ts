import { Component, OnInit, Input, ViewChild, AfterViewInit} from '@angular/core';
import {Pingible} from '../Pingible';
import { Point } from '../Point';
import { MyclassComponent } from '../myclass/myclass.component';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, Pingible, AfterViewInit{
  
  title:string = 'List of Posts';
  pingMsg:string = 'Ping';
  num!:number;
  message!:string;
  @Input()
  fromParent!: string;
  @Input()
  fromPrt!:string;
  postMessage:string = "Message from Post Component. Parent!";
  
  constructor () {
    this.ping();
    const pt = new Point();
    pt.m();
    pt.sub();
    this.num = pt.res;
    console.log(this.childComp);
    
   }
  ngAfterViewInit(): void {
    console.log(this.childComp);
    this.message = this.childComp.childMessage;
  }
  ping(): void {
    const pingMsg = "Ping Message";
    this.pingMsg = pingMsg;

  }


  ngOnInit(): void {
    
  }

  @ViewChild(MyclassComponent) childComp: any;

}
