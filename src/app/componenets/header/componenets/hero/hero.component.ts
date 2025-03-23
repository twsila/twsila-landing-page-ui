import { Component, OnInit } from '@angular/core';
import { LanguageSwitcherService } from '../../../../shared/_services/language-switcher.service';
import { language } from '../../../../shared/_enums/language.enum';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit{
  isArabic = false;
  constructor(private languageSwitcherService:LanguageSwitcherService){
     this.isArabic = this.languageSwitcherService.getLanguage()
      ? this.languageSwitcherService.getLanguage() == language.ar
        ? true
        : false
      : false;
  }

  ngOnInit(): void {
  }

}
