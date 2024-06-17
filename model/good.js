import { cdnBase } from '../config/index';
const imgPrefix = cdnBase;

const defaultDesc = [`${imgPrefix}/goods/details-1.png`];
const allGoods = [
  {
    saasId: '88888888',
    storeId: '1000',
    spuId: '1',
    title: '养殖鲭鱼',
    title_en: 'Farming Mackerel',
    title_jp: '養殖サバ',
    primaryImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A1/01.jpg',
    images: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A1/01.jpg',
    ],
    video: null,
    available: 1,
    minSalePrice: 20000,
    minLinePrice: 20000,
    maxSalePrice: 20000,
    maxLinePrice: 20000,
    spuStockQuantity: Math.floor(Math.random() * 1000) + 1,
    soldNum: Math.floor(Math.random() * 1000) + 1,
    isPutOnSale: 1,
    categoryIds: [
      'A1',
    ],
    groupIdList: [
      'A1',
    ],
    specList: [],
    skuList: [
      {
        skuId: '135676631',
        skuImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A1/01.jpg',
        specInfo: [],
        priceInfo: [
          { priceType: 1, price: '20000', priceTypeName: null },
        ],
        stockInfo: {
          stockQuantity: Math.floor(Math.random() * 100) + 1,
          safeStockQuantity: 0,
          soldQuantity: Math.floor(Math.random() * 50) + 1,
        },
        weight: { 
          value: '600', 
          unit: 'g', 
          desc: '600 g / 5枚', 
          shape: 2, 
          storageCondition: 5 
        },
        volume: null,
        profitPrice: null,
      },
    ],
    spuTagList: [{ id: '13001', title: '限时抢购', image: null }],
    limitInfo: [],
    desc: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A1/01.jpg',
    ],
    etitle: '',
  },
  {
    saasId: '88888888',
    storeId: '1000',
    spuId: '2',
    title: '斑点鲷鱼',
    title_en: 'Hamachi',
    title_jp: 'ハマチ',
    primaryImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A1/02.jpg',
    images: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A1/02.jpg',
    ],
    video: null,
    available: 1,
    minSalePrice: 25000,
    minLinePrice: 25000,
    maxSalePrice: 25000,
    maxLinePrice: 25000,
    spuStockQuantity: Math.floor(Math.random() * 1000) + 1,
    soldNum: Math.floor(Math.random() * 1000) + 1,
    isPutOnSale: 1,
    categoryIds: [
      'A1',
    ],
    groupIdList: [
      'A1',
    ],
    specList: [],
    skuList: [
      {
        skuId: '135676632',
        skuImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A1/02.jpg',
        specInfo: [],
        priceInfo: [
          { priceType: 1, price: '25000', priceTypeName: null },
        ],
        stockInfo: {
          stockQuantity: Math.floor(Math.random() * 100) + 1,
          safeStockQuantity: 0,
          soldQuantity: Math.floor(Math.random() * 50) + 1,
        },
        weight: { 
          value: '800', 
          unit: 'g', 
          desc: '800 g / 4枚', 
          shape: 1, 
          storageCondition: 3 
        },
        volume: null,
        profitPrice: null,
      },
    ],
    spuTagList: [{ id: '13001', title: '限时抢购', image: null }],
    limitInfo: [],
    desc: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A1/02.jpg',
    ],
    etitle: '',
  },
  {
    saasId: '88888888',
    storeId: '1000',
    spuId: '3',
    title: '鲷鱼',
    title_en: 'Buri',
    title_jp: 'ぶり',
    primaryImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A1/03.jpg',
    images: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A1/03.jpg',
    ],
    video: null,
    available: 1,
    minSalePrice: 28000,
    minLinePrice: 28000,
    maxSalePrice: 28000,
    maxLinePrice: 28000,
    spuStockQuantity: Math.floor(Math.random() * 1000) + 1,
    soldNum: Math.floor(Math.random() * 1000) + 1,
    isPutOnSale: 1,
    categoryIds: [
      'A1',
    ],
    groupIdList: [
      'A1',
    ],
    specList: [],
    skuList: [
      {
        skuId: '135676633',
        skuImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A1/03.jpg',
        specInfo: [],
        priceInfo: [
          { priceType: 1, price: '28000', priceTypeName: null },
        ],
        stockInfo: {
          stockQuantity: Math.floor(Math.random() * 100) + 1,
          safeStockQuantity: 0,
          soldQuantity: Math.floor(Math.random() * 50) + 1,
        },
        weight: { 
          value: '750', 
          unit: 'g', 
          desc: '750 g / 3枚', 
          shape: 4, 
          storageCondition: 1 
        },
        volume: null,
        profitPrice: null,
      },
    ],
    spuTagList: [{ id: '13001', title: '限时抢购', image: null }],
    limitInfo: [],
    desc: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A1/03.jpg',
    ],
    etitle: '',
  },
  {
    saasId: '88888888',
    storeId: '1000',
    spuId: '4',
    title: '白带鱼',
    title_en: 'Shimaaji',
    title_jp: 'シマアジ',
    primaryImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A1/04.jpg',
    images: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A1/04.jpg',
    ],
    video: null,
    available: 1,
    minSalePrice: 22000,
    minLinePrice: 22000,
    maxSalePrice: 22000,
    maxLinePrice: 22000,
    spuStockQuantity: Math.floor(Math.random() * 1000) + 1,
    soldNum: Math.floor(Math.random() * 1000) + 1,
    isPutOnSale: 1,
    categoryIds: [
      'A1',
    ],
    groupIdList: [
      'A1',
    ],
    specList: [],
    skuList: [
      {
        skuId: '135676634',
        skuImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A1/04.jpg',
        specInfo: [],
        priceInfo: [
          { priceType: 1, price: '22000', priceTypeName: null },
        ],
        stockInfo: {
          stockQuantity: Math.floor(Math.random() * 100) + 1,
          safeStockQuantity: 0,
          soldQuantity: Math.floor(Math.random() * 50) + 1,
        },
        weight: { 
          value: '500', 
          unit: 'g', 
          desc: '500 g / 4枚', 
          shape: 3, 
          storageCondition: 2 
        },
        volume: null,
        profitPrice: null,
      },
    ],
    spuTagList: [{ id: '13001', title: '限时抢购', image: null }],
    limitInfo: [],
    desc: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A1/04.jpg',
    ],
    etitle: '',
  },
  {
    saasId: '88888888',
    storeId: '1000',
    spuId: '5',
    title: '宽额大眼鲷',
    title_en: 'Kanpachi',
    title_jp: 'カンパチ',
    primaryImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A1/05.jpg',
    images: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A1/05.jpg',
    ],
    video: null,
    available: 1,
    minSalePrice: 27000,
    minLinePrice: 27000,
    maxSalePrice: 27000,
    maxLinePrice: 27000,
    spuStockQuantity: Math.floor(Math.random() * 1000) + 1,
    soldNum: Math.floor(Math.random() * 1000) + 1,
    isPutOnSale: 1,
    categoryIds: [
      'A1',
    ],
    groupIdList: [
      'A1',
    ],
    specList: [],
    skuList: [
      {
        skuId: '135676635',
        skuImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A1/05.jpg',
        specInfo: [],
        priceInfo: [
          { priceType: 1, price: '27000', priceTypeName: null },
        ],
        stockInfo: {
          stockQuantity: Math.floor(Math.random() * 100) + 1,
          safeStockQuantity: 0,
          soldQuantity: Math.floor(Math.random() * 50) + 1,
        },
        weight: { 
          value: '850', 
          unit: 'g', 
          desc: '850 g / 6枚', 
          shape: 5, 
          storageCondition: 4 
        },
        volume: null,
        profitPrice: null,
      },
    ],
    spuTagList: [{ id: '13001', title: '限时抢购', image: null }],
    limitInfo: [],
    desc: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A1/05.jpg',
    ],
    etitle: '',
  },
  {
    saasId: '88888888',
    storeId: '1000',
    spuId: '6',
    title: '银鳕鱼',
    title_en: 'Silver Cod',
    title_jp: '銀鱈',
    primaryImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A2/01.jpg',
    images: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A2/01.jpg',
    ],
    video: null,
    available: 1,
    minSalePrice: 30000,
    minLinePrice: 30000,
    maxSalePrice: 30000,
    maxLinePrice: 30000,
    spuStockQuantity: Math.floor(Math.random() * 1000) + 1,
    soldNum: Math.floor(Math.random() * 1000) + 1,
    isPutOnSale: 1,
    categoryIds: [
      'A2',
    ],
    groupIdList: [
      'A2',
    ],
    specList: [],
    skuList: [
      {
        skuId: '135676636',
        skuImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A2/01.jpg',
        specInfo: [],
        priceInfo: [
          { priceType: 1, price: '30000', priceTypeName: null },
        ],
        stockInfo: {
          stockQuantity: Math.floor(Math.random() * 100) + 1,
          safeStockQuantity: 0,
          soldQuantity: Math.floor(Math.random() * 50) + 1,
        },
        weight: { 
          value: '900', 
          unit: 'g', 
          desc: '900 g / 4枚', 
          shape: 1, 
          storageCondition: 1 
        },
        volume: null,
        profitPrice: null,
      },
    ],
    spuTagList: [{ id: '13001', title: '限时抢购', image: null }],
    limitInfo: [],
    desc: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A2/01.jpg',
    ],
    etitle: '',
  },
  {
    saasId: '88888888',
    storeId: '1000',
    spuId: '7',
    title: '蓝鳍金枪鱼',
    title_en: 'Bluefin Tuna',
    title_jp: '本マグロ',
    primaryImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A3/01.jpg',
    images: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A3/01.jpg',
    ],
    video: null,
    available: 1,
    minSalePrice: 45000,
    minLinePrice: 45000,
    maxSalePrice: 45000,
    maxLinePrice: 45000,
    spuStockQuantity: Math.floor(Math.random() * 1000) + 1,
    soldNum: Math.floor(Math.random() * 1000) + 1,
    isPutOnSale: 1,
    categoryIds: [
      'A3',
    ],
    groupIdList: [
      'A3',
    ],
    specList: [],
    skuList: [
      {
        skuId: '135676637',
        skuImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A3/01.jpg',
        specInfo: [],
        priceInfo: [
          { priceType: 1, price: '45000', priceTypeName: null },
        ],
        stockInfo: {
          stockQuantity: Math.floor(Math.random() * 100) + 1,
          safeStockQuantity: 0,
          soldQuantity: Math.floor(Math.random() * 50) + 1,
        },
        weight: { 
          value: '1200', 
          unit: 'g', 
          desc: '1200 g / 3枚', 
          shape: 2, 
          storageCondition: 3 
        },
        volume: null,
        profitPrice: null,
      },
    ],
    spuTagList: [{ id: '13001', title: '限时抢购', image: null }],
    limitInfo: [],
    desc: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A3/01.jpg',
    ],
    etitle: '',
  },
  {
    saasId: '88888888',
    storeId: '1000',
    spuId: '8',
    title: '金枪鱼碎肉',
    title_en: 'Negitoro',
    title_jp: 'ネギトロ',
    primaryImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A3/02.jpg',
    images: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A3/02.jpg',
    ],
    video: null,
    available: 1,
    minSalePrice: 35000,
    minLinePrice: 35000,
    maxSalePrice: 35000,
    maxLinePrice: 35000,
    spuStockQuantity: Math.floor(Math.random() * 1000) + 1,
    soldNum: Math.floor(Math.random() * 1000) + 1,
    isPutOnSale: 1,
    categoryIds: [
      'A3',
    ],
    groupIdList: [
      'A3',
    ],
    specList: [],
    skuList: [
      {
        skuId: '135676638',
        skuImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A3/02.jpg',
        specInfo: [],
        priceInfo: [
          { priceType: 1, price: '35000', priceTypeName: null },
        ],
        stockInfo: {
          stockQuantity: Math.floor(Math.random() * 100) + 1,
          safeStockQuantity: 0,
          soldQuantity: Math.floor(Math.random() * 50) + 1,
        },
        weight: { 
          value: '1000', 
          unit: 'g', 
          desc: '1000 g / 10枚', 
          shape: 4, 
          storageCondition: 4 
        },
        volume: null,
        profitPrice: null,
      },
    ],
    spuTagList: [{ id: '13001', title: '限时抢购', image: null }],
    limitInfo: [],
    desc: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A3/02.jpg',
    ],
    etitle: '',
  },
  {
    saasId: '88888888',
    storeId: '1000',
    spuId: '9',
    title: '金枪鱼脸颊肉',
    title_en: 'Tuna Cheek Meat',
    title_jp: 'ほほ肉',
    primaryImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A3/03.jpg',
    images: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A3/03.jpg',
    ],
    video: null,
    available: 1,
    minSalePrice: 40000,
    minLinePrice: 40000,
    maxSalePrice: 40000,
    maxLinePrice: 40000,
    spuStockQuantity: Math.floor(Math.random() * 1000) + 1,
    soldNum: Math.floor(Math.random() * 1000) + 1,
    isPutOnSale: 1,
    categoryIds: [
      'A3',
    ],
    groupIdList: [
      'A3',
    ],
    specList: [],
    skuList: [
      {
        skuId: '135676639',
        skuImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A3/03.jpg',
        specInfo: [],
        priceInfo: [
          { priceType: 1, price: '40000', priceTypeName: null },
        ],
        stockInfo: {
          stockQuantity: Math.floor(Math.random() * 100) + 1,
          safeStockQuantity: 0,
          soldQuantity: Math.floor(Math.random() * 50) + 1,
        },
        weight: { 
          value: '850', 
          unit: 'g', 
          desc: '850 g / 6枚', 
          shape: 5, 
          storageCondition: 2 
        },
        volume: null,
        profitPrice: null,
      },
    ],
    spuTagList: [{ id: '13001', title: '限时抢购', image: null }],
    limitInfo: [],
    desc: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A3/03.jpg',
    ],
    etitle: '',
  },
  {
    saasId: '88888888',
    storeId: '1000',
    spuId: '10',
    title: '花鲈',
    title_en: 'Suzuki',
    title_jp: 'スズキ',
    primaryImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A4/01.jpg',
    images: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A4/01.jpg',
    ],
    video: null,
    available: 1,
    minSalePrice: 32000,
    minLinePrice: 32000,
    maxSalePrice: 32000,
    maxLinePrice: 32000,
    spuStockQuantity: 500,
    soldNum: 200,
    isPutOnSale: 1,
    categoryIds: [
      'A4',
    ],
    groupIdList: [
      'A4',
    ],
    specList: [],
    skuList: [
      {
        skuId: '135676640',
        skuImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A4/01.jpg',
        specInfo: [],
        priceInfo: [
          { priceType: 1, price: '32000', priceTypeName: null },
        ],
        stockInfo: {
          stockQuantity: 100,
          safeStockQuantity: 0,
          soldQuantity: 20,
        },
        weight: { 
          value: '1200', 
          unit: 'g', 
          desc: '1200 g / 5枚', 
          shape: 3, 
          storageCondition: 3 
        },
        volume: null,
        profitPrice: null,
      },
    ],
    spuTagList: [{ id: '13001', title: '限时抢购', image: null }],
    limitInfo: [],
    desc: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A4/01.jpg',
    ],
    etitle: '',
  },
  {
    saasId: '88888888',
    storeId: '1000',
    spuId: '11',
    title: '鲷鱼',
    title_en: 'Tai',
    title_jp: '鯛',
    primaryImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A4/02.jpg',
    images: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A4/02.jpg',
    ],
    video: null,
    available: 1,
    minSalePrice: 34000,
    minLinePrice: 34000,
    maxSalePrice: 34000,
    maxLinePrice: 34000,
    spuStockQuantity: 600,
    soldNum: 300,
    isPutOnSale: 1,
    categoryIds: [
      'A4',
    ],
    groupIdList: [
      'A4',
    ],
    specList: [],
    skuList: [
      {
        skuId: '135676641',
        skuImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A4/02.jpg',
        specInfo: [],
        priceInfo: [
          { priceType: 1, price: '34000', priceTypeName: null },
        ],
        stockInfo: {
          stockQuantity: 150,
          safeStockQuantity: 0,
          soldQuantity: 30,
        },
        weight: { 
          value: '1100', 
          unit: 'g', 
          desc: '1100 g / 4枚', 
          shape: 4, 
          storageCondition: 1 
        },
        volume: null,
        profitPrice: null,
      },
    ],
    spuTagList: [{ id: '13001', title: '限时抢购', image: null }],
    limitInfo: [],
    desc: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A4/02.jpg',
    ],
    etitle: '',
  },
  {
    saasId: '88888888',
    storeId: '1000',
    spuId: '12',
    title: '秋刀鱼',
    title_en: 'Pacific Saury',
    title_jp: '秋刀魚',
    primaryImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A5/01.jpg',
    images: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A5/01.jpg',
    ],
    video: null,
    available: 1,
    minSalePrice: 25000,
    minLinePrice: 25000,
    maxSalePrice: 25000,
    maxLinePrice: 25000,
    spuStockQuantity: 700,
    soldNum: 350,
    isPutOnSale: 1,
    categoryIds: [
      'A5',
    ],
    groupIdList: [
      'A5',
    ],
    specList: [],
    skuList: [
      {
        skuId: '135676642',
        skuImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A5/01.jpg',
        specInfo: [],
        priceInfo: [
          { priceType: 1, price: '25000', priceTypeName: null },
        ],
        stockInfo: {
          stockQuantity: 200,
          safeStockQuantity: 0,
          soldQuantity: 40,
        },
        weight: { 
          value: '800', 
          unit: 'g', 
          desc: '800 g / 6枚', 
          shape: 5, 
          storageCondition: 4 
        },
        volume: null,
        profitPrice: null,
      },
    ],
    spuTagList: [{ id: '13001', title: '限时抢购', image: null }],
    limitInfo: [],
    desc: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A5/01.jpg',
    ],
    etitle: '',
  },
  {
    saasId: '88888888',
    storeId: '1000',
    spuId: '13',
    title: '比目鱼',
    title_en: 'Flounder',
    title_jp: 'ヒラメ',
    primaryImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A6/01.jpg',
    images: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A6/01.jpg',
    ],
    video: null,
    available: 1,
    minSalePrice: 28000,
    minLinePrice: 28000,
    maxSalePrice: 28000,
    maxLinePrice: 28000,
    spuStockQuantity: 800,
    soldNum: 400,
    isPutOnSale: 1,
    categoryIds: [
      'A6',
    ],
    groupIdList: [
      'A6',
    ],
    specList: [],
    skuList: [
      {
        skuId: '135676643',
        skuImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A6/01.jpg',
        specInfo: [],
        priceInfo: [
          { priceType: 1, price: '28000', priceTypeName: null },
        ],
        stockInfo: {
          stockQuantity: 250,
          safeStockQuantity: 0,
          soldQuantity: 50,
        },
        weight: { 
          value: '1300', 
          unit: 'g', 
          desc: '1300 g / 3枚', 
          shape: 1, 
          storageCondition: 2 
        },
        volume: null,
        profitPrice: null,
      },
    ],
    spuTagList: [{ id: '13001', title: '限时抢购', image: null }],
    limitInfo: [],
    desc: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A6/01.jpg',
    ],
    etitle: '',
  },
  {
    saasId: '88888888',
    storeId: '1000',
    spuId: '14',
    title: '海胆',
    title_en: 'Uni',
    title_jp: 'ウニ',
    primaryImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A7/01.jpg',
    images: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A7/01.jpg',
    ],
    video: null,
    available: 1,
    minSalePrice: 50000,
    minLinePrice: 50000,
    maxSalePrice: 50000,
    maxLinePrice: 50000,
    spuStockQuantity: 900,
    soldNum: 450,
    isPutOnSale: 1,
    categoryIds: [
      'A7',
    ],
    groupIdList: [
      'A7',
    ],
    specList: [],
    skuList: [
      {
        skuId: '135676644',
        skuImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A7/01.jpg',
        specInfo: [],
        priceInfo: [
          { priceType: 1, price: '50000', priceTypeName: null },
        ],
        stockInfo: {
          stockQuantity: 300,
          safeStockQuantity: 0,
          soldQuantity: 60,
        },
        weight: { 
          value: '600', 
          unit: 'g', 
          desc: '600 g / 8枚', 
          shape: 5, 
          storageCondition: 3 
        },
        volume: null,
        profitPrice: null,
      },
    ],
    spuTagList: [{ id: '13001', title: '限时抢购', image: null }],
    limitInfo: [],
    desc: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A7/01.jpg',
    ],
    etitle: '',
  },
  {
    saasId: '88888888',
    storeId: '1000',
    spuId: '15',
    title: '鳕鱼白子',
    title_en: 'Cod Milt',
    title_jp: '鱈白子',
    primaryImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A8/01.jpg',
    images: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A8/01.jpg',
    ],
    video: null,
    available: 1,
    minSalePrice: 38000,
    minLinePrice: 38000,
    maxSalePrice: 38000,
    maxLinePrice: 38000,
    spuStockQuantity: 550,
    soldNum: 275,
    isPutOnSale: 1,
    categoryIds: [
      'A8',
    ],
    groupIdList: [
      'A8',
    ],
    specList: [],
    skuList: [
      {
        skuId: '135676645',
        skuImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A8/01.jpg',
        specInfo: [],
        priceInfo: [
          { priceType: 1, price: '38000', priceTypeName: null },
        ],
        stockInfo: {
          stockQuantity: 150,
          safeStockQuantity: 0,
          soldQuantity: 30,
        },
        weight: { 
          value: '500', 
          unit: 'g', 
          desc: '500 g / 4枚', 
          shape: 1, 
          storageCondition: 1 
        },
        volume: null,
        profitPrice: null,
      },
    ],
    spuTagList: [{ id: '13001', title: '限时抢购', image: null }],
    limitInfo: [],
    desc: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A8/01.jpg',
    ],
    etitle: '',
  },
  {
    saasId: '88888888',
    storeId: '1000',
    spuId: '16',
    title: '小柱',
    title_en: 'Small Scallops',
    title_jp: '小柱',
    primaryImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A8/02.jpg',
    images: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A8/02.jpg',
    ],
    video: null,
    available: 1,
    minSalePrice: 36000,
    minLinePrice: 36000,
    maxSalePrice: 36000,
    maxLinePrice: 36000,
    spuStockQuantity: 650,
    soldNum: 325,
    isPutOnSale: 1,
    categoryIds: [
      'A8',
    ],
    groupIdList: [
      'A8',
    ],
    specList: [],
    skuList: [
      {
        skuId: '135676646',
        skuImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A8/02.jpg',
        specInfo: [],
        priceInfo: [
          { priceType: 1, price: '36000', priceTypeName: null },
        ],
        stockInfo: {
          stockQuantity: 200,
          safeStockQuantity: 0,
          soldQuantity: 40,
        },
        weight: { 
          value: '600', 
          unit: 'g', 
          desc: '600 g / 5枚', 
          shape: 2, 
          storageCondition: 2 
        },
        volume: null,
        profitPrice: null,
      },
    ],
    spuTagList: [{ id: '13001', title: '限时抢购', image: null }],
    limitInfo: [],
    desc: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A8/02.jpg',
    ],
    etitle: '',
  },
  {
    saasId: '88888888',
    storeId: '1000',
    spuId: '17',
    title: '鲜鲟肝',
    title_en: 'Fresh Monkfish Liver',
    title_jp: '鮟肝',
    primaryImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A8/03.jpg',
    images: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A8/03.jpg',
    ],
    video: null,
    available: 1,
    minSalePrice: 42000,
    minLinePrice: 42000,
    maxSalePrice: 42000,
    maxLinePrice: 42000,
    spuStockQuantity: 750,
    soldNum: 375,
    isPutOnSale: 1,
    categoryIds: [
      'A8',
    ],
    groupIdList: [
      'A8',
    ],
    specList: [],
    skuList: [
      {
        skuId: '135676647',
        skuImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A8/03.jpg',
        specInfo: [],
        priceInfo: [
          { priceType: 1, price: '42000', priceTypeName: null },
        ],
        stockInfo: {
          stockQuantity: 250,
          safeStockQuantity: 0,
          soldQuantity: 50,
        },
        weight: { 
          value: '700', 
          unit: 'g', 
          desc: '700 g / 3枚', 
          shape: 3, 
          storageCondition: 3 
        },
        volume: null,
        profitPrice: null,
      },
    ],
    spuTagList: [{ id: '13001', title: '限时抢购', image: null }],
    limitInfo: [],
    desc: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A8/03.jpg',
    ],
    etitle: '',
  },
  {
    saasId: '88888888',
    storeId: '1000',
    spuId: '18',
    title: '白鲫鱼子',
    title_en: 'Mullet Roe',
    title_jp: 'ボラ子',
    primaryImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A8/04.jpg',
    images: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A8/04.jpg',
    ],
    video: null,
    available: 1,
    minSalePrice: 46000,
    minLinePrice: 46000,
    maxSalePrice: 46000,
    maxLinePrice: 46000,
    spuStockQuantity: 850,
    soldNum: 425,
    isPutOnSale: 1,
    categoryIds: [
      'A8',
    ],
    groupIdList: [
      'A8',
    ],
    specList: [],
    skuList: [
      {
        skuId: '135676648',
        skuImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A8/04.jpg',
        specInfo: [],
        priceInfo: [
          { priceType: 1, price: '46000', priceTypeName: null },
        ],
        stockInfo: {
          stockQuantity: 300,
          safeStockQuantity: 0,
          soldQuantity: 60,
        },
        weight: { 
          value: '550', 
          unit: 'g', 
          desc: '550 g / 4枚', 
          shape: 4, 
          storageCondition: 4 
        },
        volume: null,
        profitPrice: null,
      },
    ],
    spuTagList: [{ id: '13001', title: '限时抢购', image: null }],
    limitInfo: [],
    desc: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A8/04.jpg',
    ],
    etitle: '',
  },
  {
    saasId: '88888888',
    storeId: '1000',
    spuId: '19',
    title: '新鲜海带',
    title_en: 'Fresh Wakame',
    title_jp: '生わかめ',
    primaryImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A8/05.jpg',
    images: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A8/05.jpg',
    ],
    video: null,
    available: 1,
    minSalePrice: 32000,
    minLinePrice: 32000,
    maxSalePrice: 32000,
    maxLinePrice: 32000,
    spuStockQuantity: 950,
    soldNum: 475,
    isPutOnSale: 1,
    categoryIds: [
      'A8',
    ],
    groupIdList: [
      'A8',
    ],
    specList: [],
    skuList: [
      {
        skuId: '135676649',
        skuImage: 'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A8/05.jpg',
        specInfo: [],
        priceInfo: [
          { priceType: 1, price: '32000', priceTypeName: null },
        ],
        stockInfo: {
          stockQuantity: 350,
          safeStockQuantity: 0,
          soldQuantity: 70,
        },
        weight: { 
          value: '650', 
          unit: 'g', 
          desc: '650 g / 5枚', 
          shape: 5, 
          storageCondition: 5 
        },
        volume: null,
        profitPrice: null,
      },
    ],
    spuTagList: [{ id: '13001', title: '限时抢购', image: null }],
    limitInfo: [],
    desc: [
      'cloud://nagashiro-7gx3ygvt2a49505e.6e61-nagashiro-7gx3ygvt2a49505e-1327079852/images/goods_demo_rename/A/A8/05.jpg',
    ],
    etitle: '',
  },
];


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
