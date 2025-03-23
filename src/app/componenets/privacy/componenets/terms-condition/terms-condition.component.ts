import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { language } from '../../../../shared/_enums/language.enum';

@Component({
  selector: 'app-terms-condition',
  standalone: false,
  templateUrl: './terms-condition.component.html',
  styleUrl: './terms-condition.component.css'
})
export class TermsConditionComponent implements OnInit{

  constructor(public translate:TranslateService){}

  ngOnInit(): void {

  }

  public get langEnum():typeof language{
    return language;
  }

}
