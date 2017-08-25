import { Component , OnInit} from '@angular/core';
import { Book } from './app.book';
import { BookService } from './app.book.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector:'update-book',
    templateUrl: 'views/app.updatebook.component.html',
})
export class UpdateBook implements OnInit {
    
   book:Book;
   name: any;
   author:any;
   isbn:any;
   no_copies:any;
   price:any;
   constructor(private activatedRoute: ActivatedRoute, private bookService: BookService) { }
   ngOnInit(): void {
     this.activatedRoute.params.
      subscribe((param:any) =>{
        this.isbn = param['isbn'];
        this.book = this.bookService.getBook(this.isbn); 
        this.name = this.book.name;
        this.author = this.book.author;
        this.no_copies = this.book.no_copies;
        this.price = this.book.price;
      });
    }

  onSubmit():void{
    console.log(this.price);
    let tempBook : Book = this.book;
    tempBook.no_copies = this.no_copies;
    tempBook.price = this.price;
    this.bookService.updateBook(tempBook);
    
  }


 
}