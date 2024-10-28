import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationWrapperComponent } from './confirmation-wrapper.component';

describe('ConfirmationWrapperComponent', () => {
  let component: ConfirmationWrapperComponent;
  let fixture: ComponentFixture<ConfirmationWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmationWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmationWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
