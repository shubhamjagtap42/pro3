import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbiembedComponent } from './pbiembed.component';

describe('PbiembedComponent', () => {
  let component: PbiembedComponent;
  let fixture: ComponentFixture<PbiembedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbiembedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbiembedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
