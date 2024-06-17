import { cdnBase } from '../config/index';

const goodsA = require('goodsDataA.js');
const goodsB = require('goodsDataB.js');
const goodsC = require('goodsDataC.js');
const goodsD = require('goodsDataD.js');
const goodsE = require('goodsDataE.js');
const goodsF = require('goodsDataF.js');
const goodsG = require('goodsDataG.js');
const goodsZ = require('goodsDataZ.js');

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
];

console.log("allGoods:",allGoods);


/**
 * @param {string} id
 * @param {number} [available] 库存, 默认1
 */
export function genGood(id, available = 1) {
  const specID = ['135681624', '135681628'];
  if (specID.indexOf(id) > -1) {
    return allGoods.filter((good) => good.spuId === id)[0];
  }
  const item = allGoods[id % allGoods.length];
  return {
    ...item,
    spuId: `${id}`,
    available: available,
    desc: item?.desc || defaultDesc,
    images: item?.images || [item?.primaryImage],
  };
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
