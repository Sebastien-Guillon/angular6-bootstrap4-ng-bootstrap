import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NgbAccordionComponent} from './ngb-accordion/ngb-accordion.component';
import {NgbCarouselComponent} from './ngb-carousel/ngb-carousel.component';


const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
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
