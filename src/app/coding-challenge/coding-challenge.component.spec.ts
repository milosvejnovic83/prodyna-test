import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingChallengeComponent } from './coding-challenge.component';

describe('CodingChallengeComponent', () => {
  let component: CodingChallengeComponent;
  let fixture: ComponentFixture<CodingChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodingChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
