import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductCard } from '../product-card/product-card.model';

@Component({
  selector: 'app-page-catalog',
  templateUrl: './page-catalog.component.html',
  styleUrls: ['./page-catalog.component.css']
})
export class PageCatalogComponent implements OnInit {
  cart$: Observable<Array<ProductCard>>;

  constructor(private store: Store<{ cart: Array<ProductCard>}>) {
    this.cart$ = store.select('cart');
  }

  ngOnInit(): void {
  }

}
