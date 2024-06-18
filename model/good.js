import { cdnBase } from '../config/index';

const goodsA = require('goodsDataA.js');
const goodsB = require('goodsDataB.js');
const goodsC = require('goodsDataC.js');
const goodsD = require('goodsDataD.js');
const goodsE = require('goodsDataE.js');
const goodsF = require('goodsDataF.js');
const goodsG = require('goodsDataG.js');
const goodsZ = require('goodsDataZ.js');
const goodsZ24M6 = require('goodsDataZ_24M6.js');

const imgPrefix = cdnBase;

const defaultDesc = [`${imgPrefix}/goods/details-1.png`];

// const allGoods = goodsA;

const allGoods = [
  ...goodsA.default,
  ...goodsB.default,
  ...goodsC.default,
  ...goodsD.default,
  ...goodsE.default,
  ...goodsF.default,
  ...goodsG.default,
  ...goodsZ.default,
  ...goodsZ24M6.default,
];

console.log("allGoods:",allGoods);


/**
 * @param {string} id
 * @param {number} [available] 库存, 默认1
 */
export function genGood(id, available = 1) {
  // const specID = ['135681624', '135681628'];
  
  if (id > 0) {
    return allGoods.filter((good) => String(good.spuId) === String(id) )[0];
  } else if(id.length > 0) {
    return allGoods.filter((good) => String(good.spuId) === String(id))[0];
  } else {
    const real_index = (id * -1) % allGoods.length
    const item = allGoods[real_index];
    console.log("genGood:id:",id, real_index,item)
    return item
  }
  
}

export function filterGoodsByCategories(cats) {

  const filteredGoods = allGoods.filter(good => {
    // 判断 good.categoryIds 和 cats 是否有交集
    return good.categoryIds.some(categoryId => cats.includes(categoryId));
  });
  // 根据 spuId 去重
  const uniqueSpuIds = new Set(filteredGoods.map(good => good.spuId));
  const uniqueGoods = Array.from(uniqueSpuIds).map(spuId => 
    filteredGoods.find(good => good.spuId === spuId)
  );
  console.log("filterGoodsByCategories:", uniqueGoods);
  return uniqueGoods;
}
