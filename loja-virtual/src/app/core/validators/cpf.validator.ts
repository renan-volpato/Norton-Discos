import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function cpfValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor = control.value?.replace(/\D/g, '') || '';
    if (!valor) return null;
    if (valor.length !== 11 || /^(\d)\1{10}$/.test(valor)) {
      return { cpfInvalido: true };
    }
    return null;
  };
}