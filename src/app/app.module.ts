import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeroimgComponent } from './shared/components/heroimg/heroimg.component';
import { InspirationComponent } from './shared/components/inspiration/inspiration.component';
import { IconsComponent } from './shared/components/icons/icons.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeatureComponent } from './shared/components/feature/feature.component';
import { FeatureCardComponent } from './shared/components/feature-card/feature-card.component';
import { FooterComponent } from './shared/components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroimgComponent,
    InspirationComponent,
    IconsComponent,
    FeatureComponent,
    FeatureCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
