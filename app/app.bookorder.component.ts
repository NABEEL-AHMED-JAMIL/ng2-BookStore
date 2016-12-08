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
                {
                    this.isbn = param['isbn'];
                    console.log(this.isbn);
                    this.book = this.bookService.getBook(this.isbn); 
              }
            });
    }

    onDone(): void{
        if(this.quantity == null || this.quantity == undefined || this.quantity > this.book.no_copies  ){
           console.log("Enter value is wrong...");   
        }else{
            if(this.book.no_copies == 0){
                console.log("book not Available");

            }else{
            
            this.update_copies = this.book.no_copies;
            console.log("First in update"+this.update_copies);
            this.update_copies -= this.quantity;
            console.log("second update"+this.update_copies);
            // get the object
            let book : Book = this.bookService.getBook(this.isbn);
            console.log(book.no_copies);
            book.isbn = this.book.isbn;
            book.no_copies = this.update_copies;
            // call the method an watch
            this.bookService.updateBook(book);

        
           
            }
            

            
        }
    
    
  }
  
}