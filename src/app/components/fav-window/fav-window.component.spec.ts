import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavWindowComponent } from './fav-window.component';

describe('FavWindowComponent', () => {
  let component: FavWindowComponent;
  let fixture: ComponentFixture<FavWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
