import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoteoComponent } from './goteo.component';

describe('GoteoComponent', () => {
  let component: GoteoComponent;
  let fixture: ComponentFixture<GoteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoteoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
