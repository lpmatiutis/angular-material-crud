import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebamaterialComponent } from './pruebamaterial.component';

describe('PruebamaterialComponent', () => {
  let component: PruebamaterialComponent;
  let fixture: ComponentFixture<PruebamaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebamaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebamaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
