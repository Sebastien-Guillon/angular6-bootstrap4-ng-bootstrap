import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { NgbAccordionComponent } from './ngb-accordion/ngb-accordion.component';
import { NgbCarouselComponent } from './ngb-carousel/ngb-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NgbAccordionComponent,
    NgbCarouselComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
