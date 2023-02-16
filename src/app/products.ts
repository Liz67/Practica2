export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
}

export const products = [
  {
    id: 1,
    name: 'Aretes patito de baño',
    price: 799,
    description: 'Aretes personalizados para días calurosos',
    stock: 10,
  },
  {
    id: 2,
    name: 'Cenicero el pato volador',
    price: 699,
    description: 'Cinero de arcilla moldeable que se adapta a tu estilo',
    stock: 1,
  },
  {
    id: 3,
    name: 'Maceta pato jardinero',
    price: 299,
    description: 'Maceta de barro con un diseño único',
    stock: 10,
  },
  {
    id: 4,
    name: 'Crocks pato aguado',
    price: 299,
    description: 'Crocks para días de hueva, pero siempre con estilo',
    stock: 20,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
