import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
    selector: '[appUnique]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => UniqueDirective),
            multi: true
        }
    ]
})
export class UniqueDirective implements Validator {

    validate(c: AbstractControl) {
        const db = ['Gary'];
        if (db.indexOf(c.value) !== -1) {
            return {unique: false};
        }
        return null;
    }

    constructor() {
    }

}
