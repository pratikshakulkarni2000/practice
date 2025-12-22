import { Component } from "@angular/core";


@Component({
    selector : 'app-bikes',
    templateUrl : './bikes.component.html',
    styleUrls : ['./bikes.component.scss']
})
export class bikeComponent {
    bike_name : string = 'Royal Enfield'
    bike_Color : string = 'Red wid Black'
}