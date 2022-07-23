import {getGifts} from './index';

test('Test de getGifts', () => {
  const gifts = getGifts();
  expect(gifts).toEqual({ bici: 3, coche: 2, pelota: 1, peluche: 1 });
})