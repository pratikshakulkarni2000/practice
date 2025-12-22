import { Component } from "@angular/core";


@Component({
    selector : 'app-cars',
    templateUrl : './cars.component.html',
    styleUrls : ['./cars.component.scss']
})
export class carsComponent{
    car_name : string = 'BMW'
    car_model : string = 'M5'
}