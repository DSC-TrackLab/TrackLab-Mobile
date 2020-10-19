import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsigninComponent } from './guestsignin.component';

describe('GuestsigninComponent', () => {
  let component: GuestsigninComponent;
  let fixture: ComponentFixture<GuestsigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestsigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
