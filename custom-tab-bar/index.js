import TabMenu from './data';
Component({
  data: {
    active: 0,
    list: TabMenu,
  },

  methods: {
    updateTabBar: function () {
      
      const language = getApp().globalData.language;
      console.log('TabMenu: updateTabBar',language)
      this.setData({
        list: [
          { icon: 'home', text: language.tabBar.home, url: 'pages/home/home', },
          { icon: 'sort', text: language.tabBar.category, url: 'pages/goods/category/index', },
          { icon: 'cart', text: language.tabBar.cart, url: 'pages/cart/index', },
          { icon: 'person', text: language.tabBar.user,url: 'pages/usercenter/index', }
        ]
      });
    },

    onChange(event) {
      this.setData({ active: event.detail.value });
      wx.switchTab({
        url: this.data.list[event.detail.value].url.startsWith('/')
          ? this.data.list[event.detail.value].url
          : `/${this.data.list[event.detail.value].url}`,
      });
    },

    init() {
      const page = getCurrentPages().pop();
      const route = page ? page.route.split('?')[0] : '';
      const active = this.data.list.findIndex(
        (item) =>
          (item.url.startsWith('/') ? item.url.substr(1) : item.url) ===
          `${route}`,
      );
      this.setData({ active });
      this.updateTabBar();
    },
  },
});
