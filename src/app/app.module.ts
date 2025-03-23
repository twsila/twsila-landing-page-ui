import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { HeaderComponent } from './componenets/header/header.component';
import { NavbarComponent } from './componenets/header/componenets/navbar/navbar.component';
// Import ngx-translate modules
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HeroComponent } from './componenets/header/componenets/hero/hero.component';
import { AboutComponent } from './componenets/about/about.component';
import { GalleryComponent } from './componenets/gallery/gallery.component';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollTop } from 'primeng/scrolltop';
import { PricingComponent } from './componenets/pricing/pricing.component';
import { ContactComponent } from './componenets/contact/contact.component';
import { CareerComponent } from './componenets/career/career.component';
import { FileUpload } from 'primeng/fileupload';
import { PrivacyComponent } from './componenets/privacy/privacy.component';
import { FooterComponent } from './componenets/footer/footer.component';
import * as AOS from "aos";
import { NotFoundComponent } from './componenets/not-found/not-found.component';
import { TermsConditionComponent } from './componenets/privacy/componenets/terms-condition/terms-condition.component';
import { DialogModule } from 'primeng/dialog';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';


// Function to load translation files
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [AppComponent, HeaderComponent, NavbarComponent, HeroComponent, AboutComponent, GalleryComponent, PricingComponent, ContactComponent, CareerComponent, PrivacyComponent, FooterComponent, NotFoundComponent, TermsConditionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ReactiveFormsModule,
    FormsModule,
    MatSlideToggleModule,
    ButtonModule,
    GalleriaModule,
    ScrollTop,
    FileUpload,
    DialogModule,
    FieldsetModule,
    AvatarModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false,
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(){
    AOS.init({
      duration:1000,
      easing:"linear"
    });
  }
}
