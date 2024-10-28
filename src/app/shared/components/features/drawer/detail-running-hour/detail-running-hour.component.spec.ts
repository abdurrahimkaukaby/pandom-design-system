import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRunningHourComponent } from './detail-running-hour.component';

describe('DetailRunningHourComponent', () => {
  let component: DetailRunningHourComponent;
  let fixture: ComponentFixture<DetailRunningHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailRunningHourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailRunningHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
