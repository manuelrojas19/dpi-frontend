import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertirriegoComponent } from './fertirriego.component';

describe('FertirriegoComponent', () => {
  let component: FertirriegoComponent;
  let fixture: ComponentFixture<FertirriegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FertirriegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FertirriegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
