import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cap917-ca4',
  templateUrl: './cap917-ca4.component.html',
  styleUrls: ['./cap917-ca4.component.css']
})
export class CAP917CA4Component implements OnInit {
  post=[{id:1,name:'Senior Manager'},{id:2,name:'Manager'},{id:3,name:'Accountant'},{id:4,name:'Coustmer Servies'}]
  log(V1:any){}
  changeV1(val: any) {
    console.log(val.value);
    }
    
    submit(frm: any)
    {
    alert('Form submitted');
    }
    constructor() { 
    }
    
    ngOnInit(): void {
    }
   
    
    }