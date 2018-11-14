import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerTrackersComponent } from './banner-trackers.component';

describe('BannerTrackersComponent', () => {
  let component: BannerTrackersComponent;
  let fixture: ComponentFixture<BannerTrackersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerTrackersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerTrackersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
