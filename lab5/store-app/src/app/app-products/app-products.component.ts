import { Component, OnInit } from '@angular/core';
import { BookstoreService } from '../services/bookstore/bookstore.service';
import { CommonModule } from '@angular/common';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';


@Component({
  selector: 'app-app-products',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app-products.component.html',
  styleUrl: './app-products.component.css'
})
export class AppProductsComponent implements OnInit{

  books: Book[] = [];
  constructor(private bookService: BookstoreService, private route: ActivatedRoute) { 
    
  }
  public toggleLike(book: Book): void {
    book.like++;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchTerm'])
        this.books = this.bookService.getAll().filter(book => book.title.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      else if (params['tag']) // this.books = this.bookService.getAll().filter(book => book.genre.toLowerCase().includes(params['tag'].toLowerCase()));
        this.books = this.bookService.getAllBooksByTag(params['tag']);
      else this.books = this.bookService.getAll();
    })
    
  }

  removeItem(index:number): void {
    this.books.splice(index,1);
  }
 

}
