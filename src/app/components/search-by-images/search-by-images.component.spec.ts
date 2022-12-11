import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByImagesComponent } from './search-by-images.component';

describe('SearchByImagesComponent', () => {
  let component: SearchByImagesComponent;
  let fixture: ComponentFixture<SearchByImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
