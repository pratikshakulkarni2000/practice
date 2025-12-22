import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { productComponent } from './product/product.component';
import { TestComponent } from './test/test.component';
import { companyComponent } from './company/company.component';
import { studentComponent } from './student/student.component';
import { carsComponent } from './cars/cars.component';
import { bookComponent } from './books/book.component';
import { teamComponent } from './team/team.component';
import { bikeComponent } from './bikes/bikes.component';
import { TUCcomponent } from './tuc/tuc.component';
import { test2Component } from './test2/test2.component';
import { prodComponent } from './products/products.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    productComponent,
    TestComponent,
    companyComponent,
    studentComponent,
    carsComponent,
    bookComponent,
    teamComponent,
    bikeComponent,
    TUCcomponent,
    test2Component,
    prodComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
