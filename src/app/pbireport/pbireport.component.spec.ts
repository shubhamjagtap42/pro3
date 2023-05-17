import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbireportComponent } from './pbireport.component';

describe('PbireportComponent', () => {
  let component: PbireportComponent;
  let fixture: ComponentFixture<PbireportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbireportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbireportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
