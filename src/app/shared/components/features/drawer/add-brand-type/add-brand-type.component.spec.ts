import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBrandTypeComponent } from './add-brand-type.component';

describe('AddBrandTypeComponent', () => {
  let component: AddBrandTypeComponent;
  let fixture: ComponentFixture<AddBrandTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBrandTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBrandTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
