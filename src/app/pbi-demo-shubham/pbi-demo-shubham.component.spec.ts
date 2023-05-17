import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbiDemoShubhamComponent } from './pbi-demo-shubham.component';

describe('PbiDemoShubhamComponent', () => {
  let component: PbiDemoShubhamComponent;
  let fixture: ComponentFixture<PbiDemoShubhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbiDemoShubhamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbiDemoShubhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
