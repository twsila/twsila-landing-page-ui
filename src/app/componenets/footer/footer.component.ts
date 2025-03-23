import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { language } from '../../shared/_enums/language.enum';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{


  constructor(public translate:TranslateService){}

  ngOnInit(): void {
  }

  public get languageEnum():typeof language{
    return language;
  }

}
