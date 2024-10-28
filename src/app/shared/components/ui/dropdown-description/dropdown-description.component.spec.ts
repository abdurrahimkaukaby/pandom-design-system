import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownDescriptionComponent } from './dropdown-description.component';

describe('DropdownDescriptionComponent', () => {
  let component: DropdownDescriptionComponent;
  let fixture: ComponentFixture<DropdownDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
