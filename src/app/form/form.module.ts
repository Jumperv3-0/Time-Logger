import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UniqueDirective } from './unique.directive';

@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ FormComponent, UniqueDirective ]
})
export class FormModule { }
