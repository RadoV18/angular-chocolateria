import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductCard } from '../product-card/product-card.model';
import { addProduct, removeProduct, reset } from '../state/product.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-page-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.css']
})
export class PageCartComponent implements OnInit {
  cart$: Observable<Array<ProductCard>>;
  discount: number = 0.0;
  subTotal: number = 0.0;
  total: number = 0.0;
  productCount: number = 0;

  constructor(private store: Store<{ cart: Array<ProductCard> }>, private _snackbar: MatSnackBar) {
    this.calculateTotal();
  }

  calculateTotal() {
    this.store.dispatch(reset());
    this.productCount = 0.0;
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.forEach((item: any) => {
      const props = {
        productId: item[0],
        newQuantity: item[1]
      }
      this.store.dispatch(addProduct(props));
    });

    this.cart$ = this.store.select('cart');
    this.cart$.forEach((item: any) => {

      this.productCount = 0;
      this.discount = 0.0;
      let cart = JSON.parse(localStorage.getItem('cart') || '[]');
      cart.forEach((item: any) => {
        this.productCount++;
      });
      console.log(this.productCount);
      this.total = 0.0;
      this.subTotal = 0.0;

      item.forEach((product: any) => {
        if (product.quantity > 0) {
          console.log(product.quantity * product.price);
          this.subTotal = this.subTotal + (product.quantity * product.price);
          console.log('subtotal', this.subTotal);
        }
      })
    
      if (this.productCount <= 3) {
        this.discount = this.subTotal * 0.1;
      } else {
        this.discount = this.subTotal * 0.15;
      }

      this.total = this.subTotal - this.discount;
      this.discount = Number(this.discount.toFixed(2));
      this.total = Number(this.total.toFixed(2));
    })
  }

  delete(id: any) {
    console.log(id);
    this.store.dispatch(removeProduct({ productId: id }));
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    let indexToDelete = -1;
    cart.forEach((item: any, index: number) => {
      if (Number(item[0]) === id) {
        indexToDelete = index;
      }
    });
    cart.splice(indexToDelete, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  openSnackBar() {
    let ref = this._snackbar.open('Pedido realizado correctamente.', 'Volver a Inicio');
    ref.afterDismissed().subscribe(() => {
      localStorage.removeItem('cart');
      window.location.href = '/home';
    })
  }

  ngOnInit(): void {
  }
}
