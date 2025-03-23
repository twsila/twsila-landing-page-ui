import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  standalone: false,
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css'
})
export class PrivacyComponent implements OnInit{

  showDialog:boolean = false;

  ngOnInit(): void {
  }

  openDialog() {
    this.showDialog = true;
  }

}
