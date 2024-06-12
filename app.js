import updateManager from './common/updateManager';

App({
  onLaunch: function () {
    const language = wx.getStorageSync('language') || 'zh';
    this.loadLanguage(language);
  },
  
  onShow: function () {
    updateManager();
  },

  loadLanguage: function (lang) {
    console.log('app.js: loadLanguage')
    const that = this;
    try {
      const languageData = require(`./i18n/${lang}.js`);
      console.log('app.js: loadLanguage success');
      this.globalData.language = languageData;
      this.updateTabBarLanguage();
      this.updateNavigationBar();
    } catch (e) {
      console.log('app.js: loadLanguage fail', e);
    }
  },
  globalData: {
    language: null
  },

  updateTabBarLanguage: function () {
    // console.log('app.js: updateTabBarLanguage', this.getTabBar())
    // this.getTabBar().updateTabBar();

    const pages = getCurrentPages();
    console.log('app.js: try updateTabBarLanguage', pages, pages.length)
    if (pages.length) {
      const currentPage = pages[pages.length - 1];
      if (currentPage) {
        currentPage.getTabBar().updateTabBar();
        console.log('app.js: updateTabBarLanguage', currentPage.getTabBar())
      }
    }
  },
  updateTabBar: function () {
    // const language = this.globalData.language;
    // const tabBarList = [
    //   {
    //     "iconPath": "path/to/icon/home.png",
    //     "selectedIconPath": "path/to/icon/home_selected.png",
    //     "pagePath": "pages/home/home",
    //     "text": language.tabBar.home
    //   },
    //   {
    //     "iconPath": "path/to/icon/sort.png",
    //     "selectedIconPath": "path/to/icon/sort_selected.png",
    //     "pagePath": "pages/goods/category/index",
    //     "text": language.tabBar.category
    //   },
    //   {
    //     "iconPath": "path/to/icon/cart.png",
    //     "selectedIconPath": "path/to/icon/cart_selected.png",
    //     "pagePath": "pages/cart/index",
    //     "text": language.tabBar.cart
    //   },
    //   {
    //     "iconPath": "path/to/icon/person.png",
    //     "selectedIconPath": "path/to/icon/person_selected.png",
    //     "pagePath": "pages/usercenter/index",
    //     "text": language.tabBar.user
    //   }
    // ];
    // wx.setTabBarItem({
    //   index: 0,
    //   text: tabBarList[0].text
    // });
    // wx.setTabBarItem({
    //   index: 1,
    //   text: tabBarList[1].text
    // });
    // wx.setTabBarItem({
    //   index: 2,
    //   text: tabBarList[2].text
    // });
    // wx.setTabBarItem({
    //   index: 3,
    //   text: tabBarList[3].text
    // });
  },
  updateNavigationBar: function () {
    const language = this.globalData.language;
    const pages = getCurrentPages();
    if (pages.length) {
      const currentPage = pages[pages.length - 1];
      wx.setNavigationBarTitle({
        title: language.navigationBar[currentPage.route] || 'Default Title'
      });
    }
  },
  
});
