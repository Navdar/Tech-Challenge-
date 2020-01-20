import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesservicesComponent } from './imagesservices.component';

describe('ImagesservicesComponent', () => {
  let component: ImagesservicesComponent;
  let fixture: ComponentFixture<ImagesservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
