import { Product } from 'src/types/product.type';

export const productsStub: Product[] = [{
  id: '1',
  name: 'Bob',
  currentPrice: 100,
  lastUpdateDate: new Date(),
  imageUrl: `https://placedog.net/200/200?id=10`
},
{
  id: '2',
  name: 'Sam',
  currentPrice: 200,
  lastUpdateDate: new Date(),
  imageUrl: `https://placedog.net/200/200?id=11`
},
{
  id: '3',
  name: 'Jane',
  currentPrice: 400,
  lastUpdateDate: new Date(),
  imageUrl: `https://placedog.net/200/200?id=12`
},
{
  id: '4',
  name: 'Alexia',
  currentPrice: 100,
  lastUpdateDate: new Date(),
  imageUrl: `https://placedog.net/200/200?id=13`
},
{
  id: '5',
  name: 'Alice',
  currentPrice: 1000,
  lastUpdateDate: new Date(),
  imageUrl: `https://placedog.net/200/200?id=14`
},
{
  id: '6',
  name: 'Bob',
  currentPrice: 50,
  lastUpdateDate: new Date(),
  imageUrl: `https://placedog.net/200/200?id=15`
}];

export default productsStub;
