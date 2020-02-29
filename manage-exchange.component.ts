import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-manage-exchange',
  templateUrl: './manage-exchange.component.html',
  styleUrls: ['./manage-exchange.component.css']
})
export class ManageExchangeComponent implements OnInit {

   data:any;
   servicedata:any;
   
  constructor() { }

  
  ngOnInit(): void {
    localStorage.setItem("name","Rajneesh");
    
    this.getData();
    document.getElementById("result").innerHTML = localStorage.getItem("name");
  }
  getData()
  {
   
    }
  }


