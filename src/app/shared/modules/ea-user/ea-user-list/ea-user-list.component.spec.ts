import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaUserListComponent } from './ea-user-list.component';

describe('EaUserListComponent', () => {
  let component: EaUserListComponent;
  let fixture: ComponentFixture<EaUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EaUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EaUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
