import { LanguageSwitcherService } from './shared/_services/language-switcher.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    private languageSwitcherService: LanguageSwitcherService,
    private activateRoute: ActivatedRoute
  ) {
    this.languageSwitcherService.setLanguage(
      languageSwitcherService.getLanguage()
    );
  }
  ngOnInit(): void {
    this.activateRoute.fragment.subscribe((data:any) => {
      this.jumpToSection(data);
    });
  }

  jumpToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
