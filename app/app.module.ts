//-------Module---------------------
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule ,Routes} from '@angular/router';
import { FormsModule }   from '@angular/forms';
//-------Component-------------------
import { AppComponent }  from './app.component';
import {BookList} from './app.booklist.component';
import {BookOrder} from './app.bookorder.component';
import {InsertBook} from './app.insertbook.component';
import {UpdateBook} from './app.updatebook.component';
//-------Service--------------------
import {BookService} from './app.book.service';

//-------Routes for page------------
const appRoutes : Routes = [
  { path: '', redirectTo: '/book-list', pathMatch: 'full' },
  { path: 'book-list', component: BookList },
  { path: 'insert-book', component: InsertBook },
  { path: 'update-book/:isbn', component: UpdateBook },
  { path: 'book-order/:isbn', component: BookOrder },
 
 
];
@NgModule({
  //---------Module----------------
  imports: [ BrowserModule,FormsModule , RouterModule.forRoot(appRoutes) ],
  exports:[RouterModule],
  //---------Component------------
  declarations: [ AppComponent, BookList, BookOrder, InsertBook , UpdateBook],
  //---------Service--------------
  providers: [BookService],
  //------------------------------
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
