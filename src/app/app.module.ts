import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './atomic/pages/body/body.component';
import { NavbarComponent } from './atomic/template/navbar/navbar.component';
import { SidebarComponent } from './atomic/template/sidebar/sidebar.component';
import { AdditionComponent } from './atomic/pages/addition/addition.component';
import { SubtractionComponent } from './atomic/pages/subtraction/subtraction.component';
import { MultiplicationComponent } from './atomic/pages/multiplication/multiplication.component';
import { OnlyNumbersDirective } from './atomic/directives/only-numbers/only-numbers.directive';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NavbarComponent,
    SidebarComponent,
    AdditionComponent,
    SubtractionComponent,
    MultiplicationComponent,
    OnlyNumbersDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
