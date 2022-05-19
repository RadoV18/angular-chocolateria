import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  constructor() { }

  redirect() {
    window.location.href = '/catalogo';
  }

  ngOnInit(): void {
  }

}
