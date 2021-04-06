import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[courseOnlyLetters]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: OnlyLettersDirective,
      multi: true
    }
  ]
})
export class OnlyLettersDirective implements Validator {

  constructor() {
  }

  public validate({value}: FormControl): ValidationErrors | null {
    const isValid = /^[a-zA-Z]*$/.test(value);
    return isValid
      ? null
      : {
        onlyLetters: 'Field should be without special symbol. $,%, .....'
      };
  }
}
