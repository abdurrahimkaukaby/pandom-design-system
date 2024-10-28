import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMachineSubCategoryComponent } from './add-machine-sub-category.component';

describe('AddMachineSubCategoryComponent', () => {
  let component: AddMachineSubCategoryComponent;
  let fixture: ComponentFixture<AddMachineSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMachineSubCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMachineSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
