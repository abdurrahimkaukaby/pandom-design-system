import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdataBasicCardComponent } from './masterdata-basic-card.component';

describe('MasterdataBasicCardComponent', () => {
  let component: MasterdataBasicCardComponent;
  let fixture: ComponentFixture<MasterdataBasicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterdataBasicCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterdataBasicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
