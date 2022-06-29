import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcardComponent } from './gcard.component';

describe('GcardComponent', () => {
  let component: GcardComponent;
  let fixture: ComponentFixture<GcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
