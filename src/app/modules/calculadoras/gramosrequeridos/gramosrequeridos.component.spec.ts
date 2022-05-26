import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GramosrequeridosComponent } from './gramosrequeridos.component';

describe('GramosrequeridosComponent', () => {
  let component: GramosrequeridosComponent;
  let fixture: ComponentFixture<GramosrequeridosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GramosrequeridosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GramosrequeridosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
