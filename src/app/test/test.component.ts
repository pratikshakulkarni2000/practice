import { Component } from "@angular/core";



@Component({
    selector : 'app-test',
    template : `<p>The test of <strong>{{test_name}}</strong> will be at <strong>{{test_id}}</strong>.</p>`,
    styles : [`p{
                background-color:pink;
                color : #000;
                text-align : center;
                padding : 20px;
        }`]
})
export class TestComponent{
    test_name : string = "Chemistry"
    test_id : string = '14'
}