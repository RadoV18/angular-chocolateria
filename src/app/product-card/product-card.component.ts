import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() id: any;
  @Input() title: any;
  @Input() description: any;
  @Input() imgSrc: any;
  @Input() price: any;
  @Input() quantity: any;

  constructor() { }

  ngOnInit(): void {
  }

}
