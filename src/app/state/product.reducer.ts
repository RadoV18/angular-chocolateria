import { createReducer, on } from '@ngrx/store';

import { addProduct, removeProduct, reset } from './product.actions';
import { ProductCard } from '../product-card/product-card.model';

export const initialState: Array<ProductCard> = [
    {
        id: 1,
        title: 'Extra Creamy Milk Chocolate EXCELLENCE Bar (3.5 oz)',
        description: 'The ultimate milk chocolate experience-an exceptionally smooth and creamy recipe. EXCELLENCE Extra Creamy is a pure milk chocolate bar. Expertly crafted with the finest ingredients by the Master Chocolatiers at Lindt.',
        imagePath: '/assets/img/products/1.jpg',
        price: 4.29,
        quantity: 0
    },
    {
        id: 2,
        title: 'Large Swiss Milk Gold Bar (10.5 oz)',
        description: 'Our Gold Bars are a larger-format Swiss Classic Bar created with original Swiss chocolate recipes, developed with passion and dedication by Lindt Master Chocolatiers since 1845.',
        imagePath: '/assets/img/products/2.jpg',
        price: 10.59,
        quantity: 0
    },
    {
        id: 3,
        title: 'LINDOR Caramel Stick 24-pc Case (31.2 oz)',
        description: 'Each bulk case contains 24 LINDOR Caramel Sticks. LINDOR to go! This bar features our exquisitely creamy milk chocolate shell combined with a delicious smooth melting caramel filling.',
        imagePath: '/assets/img/products/3.png',
        price: 38.99,
        quantity: 0
    },
    {
        id: 4,
        title: 'Cookies & Crème CLASSIC RECIPE Bar (4.2 oz)',
        description: 'Enjoy the rich taste and genuine pleasure of this creamy and smooth white chocolate mixed with cookie pieces. White chocolate is an ivory-colored, rich and creamy confection of cocoa butter, sugar, and milk.',
        imagePath: '/assets/img/products/4.jpg',
        price: 4.29,
        quantity: 0
    },
    {
        id: 5,
        title: '70% Cocoa Dark Chocolate EXCELLENCE Bar (3.5 oz)',
        description: 'Experience the intense flavors of cocoa beans coupled with the rich aromas in this dark bar. EXCELLENCE 70% Cocoa is a full-bodied dark chocolate, masterfully balanced to be neither bitter nor overpowering. Expertly crafted with the finest ingredients.',
        imagePath: '/assets/img/products/5.jpg',
        price: 4.29,
        quantity: 0
    },
    {
        id: 6,
        title: '78% Cocoa Dark Chocolate EXCELLENCE Bar (3.5 oz)',
        description: 'EXCELLENCE 78% is distinguished by a deep, dark color and enticing aroma.This recipe masterfully emphasizes well-balanced cocoa notes that are robust, but not too intense, with an exceptionally silky feel.',
        imagePath: '/assets/img/products/6.jpg',
        price: 4.29,
        quantity: 0
    },
    {
        id: 7,
        title: '85% Cocoa Dark Chocolate EXCELLENCE Bar (3.5 oz)',
        description: 'Discover aromas of dried fruit and liquorice, as well as powerful earthy tones. An exceptional 85% cocoa dark chocolate that embodies the essence of cocoa beans, with robust flavors dark chocolate enthusiasts will savor.',
        imagePath: '/assets/img/products/7.jpg',
        price: 4.29,
        quantity: 0
    },
    {
        id: 8,
        title: '95% Cocoa Dark Chocolate EXCELLENCE Bar (2.8 oz)',
        description: 'Take a journey with EXCELLENCE, chocolate so rich and refined that it leads you to discover new territories of chocolate pleasure. EXCELLENCE 95% Cocoa is rich and velvety on the palate, revealing balanced notes of intense cocoa.',
        imagePath: '/assets/img/products/8.jpg',
        price: 4.29,
        quantity: 0
    },
    {
        id: 9,
        title: 'Almond Touch of Honey EXCELLENCE Bar (3.5 oz)',
        description: 'Bittersweet chocolate, roasted almonds and a touch of honey. Lindt’s Maître Chocolatiers have created this bar using almonds toasted to perfection. Made with premium Lindt chocolate.',
        imagePath: '/assets/img/products/9.jpg',
        price: 4.29,
        quantity: 0
    },
    {
        id: 10,
        title: 'Lindt Gourmet Truffles (26 pc 14.7 oz)',
        description: 'New! Experience pure bliss in a box with Lindt Gourmet truffles. A 26 piece box of the most luxurious chocolate sensations for a gourmet treat.',
        imagePath: '/assets/img/products/10.jpg',
        price: 21.99,
        quantity: 0
    },
    {
        id: 11,
        title: 'Lindt Gourmet Truffles (12pc 6.8 oz)',
        description: 'New! Experience pure bliss in a box with Lindt Gourmet truffles. A 12 piece box of the most luxurious chocolate sensations for a gourmet treat.',
        imagePath: '/assets/img/products/11.jpg',
        price: 10.99,
        quantity: 0
    },
    {
        id: 12,
        title: 'Milk Chocolate LINDOR Gift Box (36-pc)',
        description: 'The sweetest treat to give, 36 delectable LINDOR truffles in a premium gift box. Each truffle has a delicate milk chocolate shell surrounding a smooth milk chocolate truffle filling.',
        imagePath: '/assets/img/products/12.jpg',
        price: 20.99,
        quantity: 0
    },
    {
        id: 13,
        title: 'Assorted LINDOR Gift Box (36-pc)',
        description: 'The sweetest treat to give, 36 delectable LINDOR truffles in a premium gift box. Includes 4 recipes: Milk Chocolate, Dark Chocolate, White Chocolate and Milk Chocolate Caramel.',
        imagePath: '/assets/img/products/13.jpg',
        price: 20.99,
        quantity: 0
    },
    {
        id: 14,
        title: 'Swiss Luxury Selection (14-pc)',
        description: 'Swiss Luxury - A sophisticated collection of elegant European style pralines, crafted with our exquisite milk, dark and white chocolate. Features eight recipes, including macchiato, carre de stracciatella, caramelita and perle de cacao. Ribbon available.',
        imagePath: '/assets/img/products/14.png',
        price: 16.49,
        quantity: 0
    },
    {
        id: 15,
        title: 'Chocolate Classics Gift Basket',
        description: 'The perfect gift for any occasion. Contains an assortment of Lindt favorites from LINDOR, EXCELLENCE, imported and domestic pralines. Comes "gift ready" wrapped in clear plastic and tied with a satin bow.',
        imagePath: '/assets/img/products/15.jpg',
        price: 44.99,
        quantity: 0
    },
    {
        id: 16,
        title: 'Milk Chocolate LINDOR Truffles 75-pc Bag (31.7 oz)',
        description: 'Inspired by our secret recipe, the Lindt Master Chocolatiers created a masterpiece with the beloved Milk Chocolate LINDOR truffle. A delicate milk chocolate shell enrobes an irresistibly smooth milk chocolate center.',
        imagePath: '/assets/img/products/16.png',
        price: 27.99,
        quantity: 0
    },
    {
        id: 17,
        title: 'White Chocolate LINDOR Truffles 75-pc Bag (31.7 oz)',
        description: 'White chocolate has never been so creamy and indulgent. A delicate white chocolate shell enrobes an irresistibly smooth white chocolate center. Each bag contains approximately 75 divine White Chocolate Truffles.',
        imagePath: '/assets/img/products/17.png',
        price: 27.99,
        quantity: 0
    },
    {
        id: 18,
        title: 'Dark Chocolate LINDOR Truffles 75-pc Bag (31.7 oz)',
        description: 'Perfectly balanced dark chocolate offers a deeply indulgent premium chocolate experience. A delicate dark chocolate shell enrobes an irresistibly smooth dark chocolate center.',
        imagePath: '/assets/img/products/18.png',
        price: 27.99,
        quantity: 0
    },
    {
        id: 19,
        title: 'Caramel Milk Chocolate LINDOR Truffles Box (60-pc, 25.4 oz)',
        description: 'Each bulk case contains 60 Caramel Milk Chocolate LINDOR truffles featuring a milk chocolate shell with smooth melting milk chocolate caramel center.',
        imagePath: '/assets/img/products/19.jpg',
        price: 20.99,
        quantity: 0
    },
    {
        id: 20,
        title: 'White Chocolate LINDOR Truffles Box (60-pc, 25.4 oz)',
        description: 'Each bulk case contains 60 White Chocolate LINDOR truffles. White chocolate has never been so creamy and indulgent. What’s Inside: A delicate white chocolate shell enrobes an irresistibly.',
        imagePath: '/assets/img/products/20.jpg',
        price: 20.99,
        quantity: 0
    },
    {
        id: 21,
        title: '70% Baking Bar (7.1 oz)',
        description: 'New! Experience the intense aromas of the new Lindt High Cocoa Cooking Bar. A great addition to your recipes, this dark 70% cocoa bar adds a smooth texture and decadent taste. This bar elevates all of your baking with a touch of sophistication.',
        imagePath: '/assets/img/products/21.jpg',
        price: 5.24,
        quantity: 0
    }
];

export const productReducer = createReducer(
    initialState,
    on(addProduct, (state, { productId, newQuantity }) => state.map((product) => {
        return product.id === Number(productId) ? {...product, quantity: newQuantity } : product
    })),
    on(removeProduct, (state, { productId }) => state.map((product) => {
        return product.id === Number(productId) ? {...product, quantity: 0} : product
    })),
    on(reset, (state) => initialState)
);