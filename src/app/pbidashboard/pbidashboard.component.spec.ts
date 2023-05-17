import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbidashboardComponent } from './pbidashboard.component';

describe('PbidashboardComponent', () => {
  let component: PbidashboardComponent;
  let fixture: ComponentFixture<PbidashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbidashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbidashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
