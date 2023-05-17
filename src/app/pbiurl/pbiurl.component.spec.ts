import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbiurlComponent } from './pbiurl.component';

describe('PbiurlComponent', () => {
  let component: PbiurlComponent;
  let fixture: ComponentFixture<PbiurlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbiurlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbiurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
