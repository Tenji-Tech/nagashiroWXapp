Component({
  externalClasses: ['wr-class', 'symbol-class', 'decimal-class'],
  useStore: [],
  properties: {

    priceUnit: {
      type: String,
      value: 'fen',
    }, // 价格单位，分 | 元, fen，yuan

    price: {
      type: Number,
      value: 0,
      observer: function(newVal) {
        this.formatNumber(newVal);
      },
    }, // 价格

    type: {
      type: String,
      value: '', //
    }, //  main 粗体, lighter 细体, mini 黑色, del 中划线, delthrough 中划线，包括货币符号

    symbol: {
      type: String,
      value: 'JP¥', // '￥',
    }, // 货币符号，默认是人民币符号￥

    fill: Boolean, // 是否自动补齐两位小数
    decimalSmaller: Boolean, // 小数字号小一点

    lineThroughWidth: {
      type: null,
      value: '0.12em',
    }, // 划线价线条高度
  },

  data: {
    formattedNumber: ''
  },

  lifetimes: {
    attached : function() {
      this.formatNumber(this.properties.price);
    }
  },

  methods: {
    // 格式化价格显示
    formatNumberWithCommas: function (number) {
      if (number < 1000) {
        return number.toString();
      }
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    formatNumber: function (number) {
      const formattedNumber = this.formatNumberWithCommas(number);
      this.setData({
        formattedNumber: formattedNumber
      });
    }

  },
});
