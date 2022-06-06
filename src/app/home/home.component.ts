import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  number:any ="";
  title:any='';
  modify:any=false;

  constructor() { }
  changeTitle(){
    if(this.number===8){
      this.title="You Win!"
    }
    else{
      this.title="You lose!"
    }
    this.modify=true
  }

  ngOnInit(): void {
  }

}
