import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiltroBarra } from './filtro-barra';

describe('FiltroBarra', () => {
  let component: FiltroBarra;
  let fixture: ComponentFixture<FiltroBarra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroBarra],
    }).compileComponents();

    fixture = TestBed.createComponent(FiltroBarra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
