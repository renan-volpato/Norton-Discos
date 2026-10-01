import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Login } from './login';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require a valid email and a six-character password', () => {
    expect(component.form.invalid).toBe(true);

    component.form.setValue({ email: 'cliente@email.com', senha: '123456' });

    expect(component.form.valid).toBe(true);
  });

  it('should mark all fields as touched when submitted empty', () => {
    component.entrar();

    expect(component.form.controls.email.touched).toBe(true);
    expect(component.form.controls.senha.touched).toBe(true);
  });
});
