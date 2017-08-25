import {Book} from './app.book';
import {Injectable} from '@angular/core';


export const BOOKS: Book[] = [
     { name: 'Android', author: 'ALi Jan', isbn: '159-3689-987', no_copies: 1000, price:100 },
  { name: 'C++', author: 'ALi Jan', isbn: '259-3689-987', no_copies: 1000, price:200 },
  { name: 'JUnit', author: 'ALi Jan', isbn: '359-3689-987', no_copies: 1000, price:300 },
  { name: 'Java', author: 'ALi Jan', isbn: '459-3689-987', no_copies: 1000, price:400 },
  { name: 'Pakistan', author: 'ALi Jan', isbn: '559-3689-987', no_copies: 1000, price:500 },
  { name: 'Angular-2', author: 'ALi Jan', isbn: '659-3689-987', no_copies: 1000, price:600 },
  { name: 'HTML', author: 'ALi Jan', isbn: '759-3689-987', no_copies: 1000, price:700 },
  { name: 'C#', author: 'ALi Jan', isbn: '859-3689-987', no_copies: 1000, price:800 }
];


@Injectable()
export class BookService{
  // get the all book
  getBooks():Book[]{
    return BOOKS;
  }

  getBook(isbn:String):Book{
    for(let i=0; i<BOOKS.length; i++){
       if(BOOKS[i].isbn == isbn){
         return BOOKS[i];
       }
    }
  }

 // update the book during shoping
 updateBook(book:Book):void{
    for(let i=0; i<BOOKS.length; i++){
       if(BOOKS[i].isbn == book.isbn){
         // then update the book
         BOOKS[i].no_copies = book.no_copies;
         BOOKS[i].author = book.author;
         BOOKS[i].name = book.name;
         BOOKS[i].isbn = book.isbn;
         BOOKS[i].price = book.price;
         
       }
    }
 }

  // add the new book
  addNewBook(book:Book){
      BOOKS.push(book);
  }
  //
  deleteBook(book:Book){
    var index = BOOKS.indexOf(book);
    BOOKS.splice(index, 1);
  }
  
}