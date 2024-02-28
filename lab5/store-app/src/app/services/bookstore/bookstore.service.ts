import { Injectable } from '@angular/core';
import { Book, products } from '../../book';

@Injectable({
  providedIn: 'root'
})
export class BookstoreService {

  constructor() { }


  getAllBooksByTag(tag: string): Book[] {
    if(tag == "All") 
      return this.getAll();
    else 
      return this.getAll().filter(book => book.genre.includes(tag));
  }

  getAllTags(): string[]{
    return [
      'Literature',
      'Detective',
      'Self-help',
      'Classics'
    ];
  }

  getAll():Book[]{
    return products;
  }
}
