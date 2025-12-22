import { Component } from "@angular/core";

@Component({
    selector : 'app-test2',
    template : `
            <p>The exams will starts from <strong>{{test_dt}}</strong> till <strong>{{till_dt}}</strong>.</p> `,
    styles : [`p{
        background-color : yellow;
        color:#000;
        padding :20px;
        text-align : center;
    }
    `]
})
export class test2Component{
    test_dt : string = '26 Dec'
    till_dt : string = '5 Jan'
}