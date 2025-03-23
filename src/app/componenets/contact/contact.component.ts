import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

  contantForm!:FormGroup;
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm(){
    this.contantForm = this.fb.group({
      email:[],
      fullName:[],
      subject:[],
      description:[]
    });
  }
  sendMessage(){
    console.log(this.contantForm.value);
    this.contantForm.reset();
  }


}
