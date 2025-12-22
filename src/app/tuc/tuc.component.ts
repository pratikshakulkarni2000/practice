import { Component } from "@angular/core";


@Component({
    selector : 'app-tuc',
    template : `<p>The Founder of the <strong>{{name}}</strong> institute is <strong>{{founder}}</strong>.  </p>`,
    styles : [`
            p{
                background-color : pink;
                color : #000;
                text-align : center;
                padding : 20px;
            }
        `]
})
export class TUCcomponent {
    name : string = 'TUC'
    founder : string = 'Mr. Ravikiran Niturkar Sir'
}