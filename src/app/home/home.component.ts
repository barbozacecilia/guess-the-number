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
  tamano:number=2;
  cssTitle:string=""

  op1:number=0
  op2:number=0
 result:any

 cssClassResult:string=""
  idea:any=[
    {
      id:1,
      name:"I was born that day"
    },
    {
      id:2,
      name:"If you find it in a horizontal position, it seems infinite"
    }
  ]
  constructor() { }
  changeTitle(){
    if(this.number===8){
      this.title="You Win!"
      this.cssTitle="red"
    }
    else{(this.number!==8)
      this.title="You lost your chance"
    }
    this.modify=true

  }
  sum(){
    this.result= this.op1 +this.op2
    if(this.result>0){
      this.cssClassResult="red"
    }else if
      (this.result>0){
      this.cssClassResult="blue"
    }else{
      this.cssClassResult=""
    }
  }
  changeProduct(){
  this.idea=[
    {
    id:3,
    name:"I'm not going to tell you"
    }
  ]
}


  ngOnInit(): void {
  }

}
