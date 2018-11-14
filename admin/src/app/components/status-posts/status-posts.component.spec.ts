import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPostsComponent } from './status-posts.component';

describe('StatusPostsComponent', () => {
  let component: StatusPostsComponent;
  let fixture: ComponentFixture<StatusPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
