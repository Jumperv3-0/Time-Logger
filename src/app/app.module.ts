import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListModule } from './list/list.module';
import { FormModule } from './form/form.module';
import { CoreModule } from './core/core.module';
import { LogService } from './log.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ListModule,
    FormModule,
    CoreModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
