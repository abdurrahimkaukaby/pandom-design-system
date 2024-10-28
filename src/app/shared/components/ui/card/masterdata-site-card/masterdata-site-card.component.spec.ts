import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdataSiteCardComponent } from './masterdata-site-card.component';

describe('MasterdataSiteCardComponent', () => {
  let component: MasterdataSiteCardComponent;
  let fixture: ComponentFixture<MasterdataSiteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterdataSiteCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterdataSiteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
