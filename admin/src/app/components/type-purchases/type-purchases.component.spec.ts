import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePurchasesComponent } from './type-purchases.component';

describe('TypePurchasesComponent', () => {
  let component: TypePurchasesComponent;
  let fixture: ComponentFixture<TypePurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypePurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
