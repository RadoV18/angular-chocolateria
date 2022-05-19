import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductCard } from '../product-card/product-card.model';

export const selectProducts = createFeatureSelector<Array<ProductCard>>('products');

export const selectAllProducts = createSelector(
    selectProducts,
    (products) => {
        return products;
    }
)

export const selectCartProducts = createSelector(
    selectProducts,
    (products) => {
        return products.filter(product => product.quantity > 0);
    }
)