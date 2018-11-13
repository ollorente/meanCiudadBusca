import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenefaComponent } from './cenefa.component';

describe('CenefaComponent', () => {
  let component: CenefaComponent;
  let fixture: ComponentFixture<CenefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenefaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
