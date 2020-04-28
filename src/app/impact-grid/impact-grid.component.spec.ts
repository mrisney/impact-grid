import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactGridComponent } from './impact-grid.component';

describe('ImpactGridComponent', () => {
  let component: ImpactGridComponent;
  let fixture: ComponentFixture<ImpactGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpactGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


