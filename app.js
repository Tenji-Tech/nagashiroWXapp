import updateManager from './common/updateManager';

App({
  
  globalData: {
    language: null,
    eventBus: null
  },

  onLaunch: function () {
    //默认语言设置为日语，并存储到本地
    const language = wx.getStorageSync('language') || 'jp';
    this.loadLanguage(language);
    this.globalData.eventBus = this.createEventBus();
  },
  
  onShow: function () {
    updateManager();
  },

  loadLanguage: function (lang) {
    const that = this;
    try {
      const languageData = require(`./i18n/${lang}.js`);
      console.log('app.js: loadLanguage success');
      this.globalData.language = languageData;
      this.updateTabBarLanguage();
      this.updateNavigationBar();
      this.emitLanguageChange();
    } catch (e) {
      console.log('app.js: loadLanguage fail', e);
    }
  },
  

  updateTabBarLanguage: function () {
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

  emitLanguageChange: function () {
    const eventChannel = this.eventChannel;
    if (eventChannel) {
      eventChannel.emit('languageChanged', this.globalData.language);
    }
  },
  onLanguageChange: function(callback) {
    const eventChannel = this.eventChannel || wx.createEventChannel();
    this.eventChannel = eventChannel;
    eventChannel.on('languageChanged', callback);
  },
  createEventBus: function() {
    const events = {};
    return {
      on(event, listener) {
        if (!events[event]) {
          events[event] = [];
        }
        events[event].push(listener);
      },
      emit(event, data) {
        if (events[event]) {
          events[event].forEach(listener => listener(data));
        }
      },
      off(event, listener) {
        if (events[event]) {
          const index = events[event].indexOf(listener);
          if (index > -1) {
            events[event].splice(index, 1);
          }
        }
      }
    };
  },
});
