import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustratoComponent } from './sustrato.component';

describe('SustratoComponent', () => {
  let component: SustratoComponent;
  let fixture: ComponentFixture<SustratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SustratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SustratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
