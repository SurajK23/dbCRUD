import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpLinkComponent } from './emp-link.component';

describe('EmpLinkComponent', () => {
  let component: EmpLinkComponent;
  let fixture: ComponentFixture<EmpLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
