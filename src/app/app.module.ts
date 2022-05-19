import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const MaterialComponents = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule
]

// Components
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageCatalogComponent } from './page-catalog/page-catalog.component';
import { PageCartComponent } from './page-cart/page-cart.component';
import { PageContactUsComponent } from './page-contact-us/page-contact-us.component';
import { RouterModule } from '@angular/router';
import { appRoute } from './routes';
import { PageErrorComponent } from './page-error/page-error.component';

// state management
import { StoreModule } from '@ngrx/store';
import { productReducer } from './state/product.reducer';
import { ProductCounterComponent } from './product-counter/product-counter.component';

//StoreDevtoolsModule
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SnackbarComponent } from './snackbar/snackbar.component'; // Angular CLI environment


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    PageHomeComponent,
    PageCatalogComponent,
    PageCartComponent,
    PageContactUsComponent,
    PageErrorComponent,
    ProductCounterComponent,
    SnackbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoute),
    StoreModule.forRoot({ cart: productReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    [MaterialComponents]
  ],
  exports: [
    [MaterialComponents]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
