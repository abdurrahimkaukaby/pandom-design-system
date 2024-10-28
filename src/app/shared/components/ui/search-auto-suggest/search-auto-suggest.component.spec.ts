import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAutoSuggestComponent } from './search-auto-suggest.component';

describe('SearchAutoSuggestComponent', () => {
  let component: SearchAutoSuggestComponent;
  let fixture: ComponentFixture<SearchAutoSuggestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchAutoSuggestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchAutoSuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
