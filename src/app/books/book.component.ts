import { Component } from "@angular/core";


@Component({
    selector : 'app-books',
    templateUrl : './book.component.html',
    styleUrls : ['./book.component.scss']
})
export class bookComponent{
    book_name : string = 'Think like a Monk'
    book_author : string = 'Jay Shetty'
}