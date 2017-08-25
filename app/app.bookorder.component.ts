import { Component } from '@angular/core';
import { Book } from './app.book';
import { BookService } from './app.book.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId : module.id,
    selector: 'book-order',
    templateUrl: 'views/app.bookorder.component.html',

})

export class BookOrder {
    update_copies: any;
    isbn: String;
    book: Book;
    quantity: any;
    
    constructor(
        private activatedRoute: ActivatedRoute,
        private bookService: BookService) {
        // getting the value of the query parameter 
        this.activatedRoute.params.subscribe(
            (param: any) => {
                this.isbn = param['isbn'];
                this.book = this.bookService.getBook(this.isbn); 
            });
    }

    onDone(): void{
        if(this.quantity == null || this.quantity == undefined || this.quantity > this.book.no_copies  ){
              
        }else{
            if(this.book.no_copies == 0){
            }else{
                this.update_copies = this.book.no_copies;
                this.update_copies -= this.quantity;
                let book : Book = this.bookService.getBook(this.isbn);
                book.isbn = this.book.isbn;
                book.no_copies = this.update_copies;
                this.bookService.updateBook(book);
            }
        }
    }
}