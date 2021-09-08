import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  userForm:FormGroup;
  ngOnInit(){
    this.userForm=new FormGroup({
      fname:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(30)]),
      lname:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(255)]),
      des:new FormControl('',[Validators.minLength(8),Validators.maxLength(4000)])
    })
  }
  
}
