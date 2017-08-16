import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Error404PagesComponent } from './error-404-pages.component';

describe('Error404PagesComponent', () => {
  let component: Error404PagesComponent;
  let fixture: ComponentFixture<Error404PagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Error404PagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error404PagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
