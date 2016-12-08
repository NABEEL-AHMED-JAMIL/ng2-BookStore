import { Component, OnInit } from '@angular/core';
import { Book } from './app.book';
import { BookService } from './app.book.service';
@Component({
    moduleId : module.id,
    selector: 'book-list',
    templateUrl: 'views/app.booklist.component.html',
})

export class BookList implements OnInit {
    books: Book[];
    selectedbook: Book;
    constructor(private bookservice: BookService,
    ) {

    }

    ngOnInit(): void {
       this.books = this.bookservice.getBooks();
    }

    delete(book: Book): void {
      this.bookservice.deleteBook(book);
      //this.books = this.bookservice.getBooks();

    }
}
