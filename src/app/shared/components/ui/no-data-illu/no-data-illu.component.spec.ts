import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDataIlluComponent } from './no-data-illu.component';

describe('NoDataIlluComponent', () => {
  let component: NoDataIlluComponent;
  let fixture: ComponentFixture<NoDataIlluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoDataIlluComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoDataIlluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
