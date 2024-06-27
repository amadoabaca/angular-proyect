import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardComponentTsComponent } from './character-card.component.ts.component';

describe('CharacterCardComponentTsComponent', () => {
  let component: CharacterCardComponentTsComponent;
  let fixture: ComponentFixture<CharacterCardComponentTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterCardComponentTsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterCardComponentTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
