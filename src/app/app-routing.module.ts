import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { NgbCarouselComponent } from './ngb-carousel/ngb-carousel.component';
import { NgbAccordionComponent } from './ngb-accordion/ngb-accordion.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'accordion-basic', component: NgbAccordionComponent },
  { path: 'carousel', component: NgbCarouselComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    [ RouterModule.forRoot(routes) ]
  ],
  declarations: []
})
export class AppRoutingModule { }
