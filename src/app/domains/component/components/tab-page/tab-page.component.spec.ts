import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPageComponent } from './tab-page.component';

describe('TabPageComponent', () => {
  let component: TabPageComponent;
  let fixture: ComponentFixture<TabPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
