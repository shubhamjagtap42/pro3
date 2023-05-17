import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbilastComponent } from './pbilast.component';

describe('PbilastComponent', () => {
  let component: PbilastComponent;
  let fixture: ComponentFixture<PbilastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbilastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbilastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
