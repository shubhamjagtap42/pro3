import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbifirstComponent } from './pbifirst.component';

describe('PbifirstComponent', () => {
  let component: PbifirstComponent;
  let fixture: ComponentFixture<PbifirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbifirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbifirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
