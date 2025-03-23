import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { language } from '../_enums/language.enum';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageSwitcherService {
  private currentLangSubject: BehaviorSubject<language>;
  public currentLang$: Observable<language>;

  constructor(private translate: TranslateService) {
    // Get language from localStorage or default to Arabic
    const savedLang =
      (localStorage.getItem('appLanguage') as language) || language.ar;
    this.currentLangSubject = new BehaviorSubject<language>(savedLang);
    this.currentLang$ = this.currentLangSubject.asObservable();
  }

  /**
   * Switch language dynamically
   * @param lang New language to set
   */
  setLanguage(lang: language): void {
    if(lang==language.ar) this.arabicLang();
    if(lang==language.en) this.englishLang();
  }

  switchLang() {
    let lang = this.getLanguage();
    document.body.classList.remove('font-english', 'font-arabic');
    if (lang) {
      if(lang==language.ar) this.englishLang();
      if(lang==language.en) this.arabicLang();
    } else {
      // Get user's language (optional)
      const browserLang = this.translate.getBrowserLang();
      lang = (browserLang?.match(/en|ar/) ? browserLang : 'en') as language;
      this.setLanguage(lang);
    }
  }
  arabicLang() {
    document.dir = 'rtl';
    document.documentElement.lang = language.ar;
    document.body.classList.add('font-arabic');
    this.currentLangSubject.next(language.ar);
    localStorage.setItem('appLanguage', language.ar);
    this.translate.use(language.ar);
    this.translate.setDefaultLang(language.ar);
  }
  englishLang() {
    document.dir = 'ltr';
    document.documentElement.lang = language.en;
    document.body.classList.add('font-english');
    this.currentLangSubject.next(language.en);
    localStorage.setItem('appLanguage', language.en);
    this.translate.use(language.en);
    this.translate.setDefaultLang(language.en);
  }

  /**
   * Get the current language value
   */
  getLanguage(): language {
    return this.currentLangSubject.value;
  }
}
