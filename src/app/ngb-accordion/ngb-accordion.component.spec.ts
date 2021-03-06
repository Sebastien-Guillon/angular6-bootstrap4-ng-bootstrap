import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbAccordionComponent } from './ngb-accordion.component';

describe('NgbAccordionComponent', () => {
  let component: NgbAccordionComponent;
  let fixture: ComponentFixture<NgbAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
