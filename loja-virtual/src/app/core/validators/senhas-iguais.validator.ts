import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function senhasIguaisValidator(campoSenha: string, campoConfirma: string): ValidatorFn {
  return (grupo: AbstractControl): ValidationErrors | null => {
    const senha = grupo.get(campoSenha)?.value;
    const confirma = grupo.get(campoConfirma)?.value;
    return senha === confirma ? null : { senhasDiferentes: true };
  };
}