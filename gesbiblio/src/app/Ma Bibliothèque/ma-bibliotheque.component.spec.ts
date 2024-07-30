import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaBibliothequeComponent } from './ma-bibliotheque.component';

describe('MaBibliothequeComponent', () => {
  let component: MaBibliothequeComponent;
  let fixture: ComponentFixture<MaBibliothequeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaBibliothequeComponent]
    });
    fixture = TestBed.createComponent(MaBibliothequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
