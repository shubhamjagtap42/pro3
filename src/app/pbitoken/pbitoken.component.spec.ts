import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbitokenComponent } from './pbitoken.component';

describe('PbitokenComponent', () => {
  let component: PbitokenComponent;
  let fixture: ComponentFixture<PbitokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbitokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbitokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
