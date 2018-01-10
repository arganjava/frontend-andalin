import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PelajaranComponent } from './pelajaran.component';

describe('PelajaranComponent', () => {
  let component: PelajaranComponent;
  let fixture: ComponentFixture<PelajaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelajaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelajaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
