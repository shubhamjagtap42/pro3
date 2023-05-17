import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbidemoComponent } from './pbidemo.component';

describe('PbidemoComponent', () => {
  let component: PbidemoComponent;
  let fixture: ComponentFixture<PbidemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbidemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbidemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
