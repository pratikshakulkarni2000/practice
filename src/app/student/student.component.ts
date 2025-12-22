import { Component } from "@angular/core";


@Component({
    selector : 'app-student',
    templateUrl : './student.component.html',
    styleUrls : ['./student.component.scss']
})
export class studentComponent {
    student_name : string = 'Jhon'
    student_id : string = '123'
}