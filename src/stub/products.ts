import { Product } from 'src/types/product.type';
import { subDays } from 'date-fns';

export const productsStub: Product[] = [{
  id: '1',
  name: 'Bob',
  category: 'German Shepherd',
  currentPrice: 100,
  lastUpdateDate: subDays(new Date(), 4)
},
{
  id: '2',
  name: 'Sam',
  category: 'Bulldog',
  currentPrice: 200,
  lastUpdateDate: subDays(new Date(), 2)
},
{
  id: '3',
  name: 'Jane',
  category: 'Poodle',
  currentPrice: 400,
  lastUpdateDate: subDays(new Date(), 1)
},
{
  id: '4',
  name: 'Beagle',
  category: 'German Shepherd',
  currentPrice: 100,
  lastUpdateDate: subDays(new Date(), 7)
},
{
  id: '5',
  name: 'Alice',
  category: 'Husky',
  currentPrice: 1000,
  lastUpdateDate: subDays(new Date(), 20)
},
{
  id: '6',
  name: 'Bob',
  category: 'Rottweiler',
  currentPrice: 50,
  lastUpdateDate: subDays(new Date(), 25)
}];

export default productsStub;
