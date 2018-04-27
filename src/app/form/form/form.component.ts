import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Custom } from '../custom';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    public timeForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.timeForm = fb.group({
            firstName: [null, Validators.required],
            date: [null, null, Custom.unique],
            startHour: null,
            startMinute: null,
            endHour: null,
            endMinute: null,
            startRadio: null,
            endRadio: null
        });
    }

    get firstName() {
        return this.timeForm.get('firstName') as FormControl;
    }

    get date() {
        return this.timeForm.get('date') as FormControl;
    }

    send() {
        console.log(this.timeForm.value);
    }

    reset() {
        this.timeForm.reset();
    }

    ngOnInit() {
    }

}
