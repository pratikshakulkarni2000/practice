import { Component } from "@angular/core";

@Component({
    selector : 'app-team',
    template : `<p class="p-3"> The Team Leader <strong>{{team_leader}}</strong> has his Jursy number <strong>{{Jursy_no}}</strong>.`,
    styles : [`p{
        background-color : blue;
        color :#000;
        text-align : center;
        padding : 3px;
    }`
    ]
})
export class teamComponent{
    team_leader : string = "Rohit Sharma"
    Jursy_no : string = '45'
}