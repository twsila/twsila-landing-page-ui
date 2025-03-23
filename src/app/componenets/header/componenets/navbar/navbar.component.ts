import { LanguageSwitcherService } from './../../../../shared/_services/language-switcher.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { language } from '../../../../shared/_enums/language.enum';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  isArabic = false;
  constructor(private languageSwitcherService:LanguageSwitcherService){}
  ngOnInit(): void {
    this.isArabic = this.languageSwitcherService.getLanguage()
  ? this.languageSwitcherService.getLanguage() == language.ar
    ? true
    : false
  : false;
  }
  switchLang(){
    this.languageSwitcherService.switchLang();
    this.isArabic = !this.isArabic;
    document.location.reload();
  }
}
