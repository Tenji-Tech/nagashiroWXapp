/** 地址 */
export function genAddress(id) {
  return {
    saasId: '88888888',
    uid: `8888888820550${id}`,
    authToken: null,
    id: `${id}`,
    addressId: `${id}`,
    phone: '17612345678',
    name: `测试用户${id}`,
    countryName: '中国',
    countryCode: 'chn',
    provinceName: '上海',
    provinceCode: '310000',
    cityName: '上海市',
    cityCode: '310100',
    districtName: '浦东新区',
    districtCode: '310115',
    detailAddress: `腾讯大厦${id}层${id}号`,
    isDefault: `${id}` === '0' ? 1 : 0,
    addressTag: id === 0 ? '' : '公司',
    latitude: '31.224361',
    longitude: '121.544379',
    storeId: null,
  };
}
// export function genAddress(id) {
//   return {
//     saasId: '88888888',
//     uid: `8888888820550${id}`,
//     authToken: null,
//     id: `${id}`,
//     addressId: `${id}`,
//     phone: '17612345678',
//     name: `测试用户${id}`,
//     countryName: '中国',
//     countryCode: 'chn',
//     provinceName: '上海',
//     provinceCode: '620000',
//     cityName: '甘南藏族自治州',
//     cityCode: '623000',
//     districtName: '碌曲县',
//     districtCode: '623026',
//     detailAddress: `松日鼎盛大厦${id}层${id}号`,
//     isDefault: `${id}` === '0' ? 1 : 0,
//     addressTag: id === 0 ? '' : '公司',
//     latitude: '34.59103',
//     longitude: '102.48699',
//     storeId: null,
//   };
// }

/** 地址列表 */
export function genAddressList(len = 4) {
  return new Array(len).fill(0).map((_, idx) => genAddress(idx));
}
