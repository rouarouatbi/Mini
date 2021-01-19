import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassmentComponent } from './classment.component';

describe('ClassmentComponent', () => {
  let component: ClassmentComponent;
  let fixture: ComponentFixture<ClassmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
