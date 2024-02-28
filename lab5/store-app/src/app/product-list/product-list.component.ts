import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookstoreService } from '../services/bookstore/bookstore.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  tags: string[] = [];
  constructor(private bookservice: BookstoreService){ }

  ngOnInit(): void {
    this.tags = this.bookservice.getAllTags();
  }

}
