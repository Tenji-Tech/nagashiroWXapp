import { getGoodsList } from './goods';

/**
 * @param {number} sort
 * @param {number} pageNum
 * @param {number} pageSize
 * @param {number} minPrice
 * @param {number} maxPrice
 * @param {string} keyword
 */

export function getSearchHistory() {
  return {
    historyWords: [
      '蔬菜类',
      '干货',
      '柑橘',
      '菌菇类',
      '蔬菜腌渍',
      '装饰用',
      '鱼类',
      '青花鱼类',
      '鲜鱼类',
      '其他海鲜',
      '水果',
      '活鱼',
    ],
  };
}

export function getSearchPopular() {
  return {
    popularWords: [
      '特殊部位',
      '鱼类腌渍',
      '根茎类',
      '梨',
      '苹果',
      '草莓',
      '比目鱼科',
      '蔬菜类',
      '青花鱼类',
      '山菜类',
      '冷冻品',
      '梅',
    ],
  };
}


export function getSearchResult() {
  return {
    saasId: null,
    storeId: null,
    pageNum: 1,
    pageSize: 30,
    totalCount: 1,
    spuList: getGoodsList(7),
    algId: 0,
  };
}
