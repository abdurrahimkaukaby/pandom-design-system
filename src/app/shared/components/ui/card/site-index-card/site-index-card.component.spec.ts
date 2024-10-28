import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteIndexCardComponent } from './site-index-card.component';

describe('SiteIndexCardComponent', () => {
  let component: SiteIndexCardComponent;
  let fixture: ComponentFixture<SiteIndexCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteIndexCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteIndexCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
