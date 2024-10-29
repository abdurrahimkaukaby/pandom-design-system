import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropsWrapperComponent } from './props-wrapper.component';

describe('PropsWrapperComponent', () => {
  let component: PropsWrapperComponent;
  let fixture: ComponentFixture<PropsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropsWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
