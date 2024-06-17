import { genGood, filterGoodsByCategories } from './good';

export function getGoodsList(baseID = 0, length = 10, cats=[]) {

  if( cats.length > 0 ){
    return filterGoodsByCategories(cats);
  } else {
    return new Array(length).fill(0).map((_, idx) => genGood(idx + baseID));
  }

}

export const goodsList = getGoodsList();
