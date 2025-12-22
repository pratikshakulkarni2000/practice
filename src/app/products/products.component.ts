import { Component } from "@angular/core";


@Component({
    selector : 'app-prod',
    templateUrl : './products.component.html',
    styleUrls : ['./products.component.scss']
})
export class prodComponent {
    name : string = 'Google Pixel'
    model : string = 'Pixel 10'
}