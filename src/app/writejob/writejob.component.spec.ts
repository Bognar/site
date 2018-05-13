import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritejobComponent } from './writejob.component';

describe('WritejobComponent', () => {
  let component: WritejobComponent;
  let fixture: ComponentFixture<WritejobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritejobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritejobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
