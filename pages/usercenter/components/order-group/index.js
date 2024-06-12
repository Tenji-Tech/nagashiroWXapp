Component({
  externalClasses: ['title-class', 'icon-class', 'number-class'],
  options: {
    multipleSlots: true,
  },
  properties: {
    orderTagInfos: {
      type: Array,
      value: [],
    },
    title: {
      type: String,
      value: '我的订单',
    },
    desc: {
      type: String,
      value: '',
      // value: '全部订单',
    },
    isTop: {
      type: Boolean,
      value: true,
    },
    classPrefix: {
      type: String,
      value: 'wr',
    },
  },
  lifetimes: {
    attached: function() {
      this.setLanguage();
      const app = getApp();
      app.globalData.eventBus.on('languageChanged', this.setLanguage.bind(this));
    },
    detached: function() {
      const app = getApp();
      if (app && app.globalData.eventBus) {
        app.globalData.eventBus.off('languageChanged', this.setLanguage.bind(this));
      }
    }
  },
  methods: {
    onClickItem(e) {
      this.triggerEvent('onClickItem', e.currentTarget.dataset.item);
    },

    onClickTop() {
      // this.triggerEvent('onClickTop', {});
    },

    setLanguage: function() {
      console.log('pages/usercenter/components/order-group  :  try setLanguage')
      const language = getApp().globalData.language;
      if (!language) {
        language = getApp().globalData.language;
      }
      this.setData({
        title: language.orderGroup.title,
        desc: language.orderGroup.desc
      });
    },
  },
});
