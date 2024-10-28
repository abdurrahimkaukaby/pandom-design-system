import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSiteComponent } from './dropdown-site.component';

describe('DropdownSiteComponent', () => {
  let component: DropdownSiteComponent;
  let fixture: ComponentFixture<DropdownSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
