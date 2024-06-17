import { getCategoryList } from '../../../services/good/fetchCategoryList';
Page({
  data: {
    list: [],
  },
  async init() {
    try {
      const result = await getCategoryList();
      this.setData({
        list: result,
      });
    } catch (error) {
      console.error('err:', error);
    }
  },

  onShow() {
    this.getTabBar().init();
  },
  onChange(event) {
    const good_detail = event.detail.item
    console.log('Category: onChange: ', good_detail.groupId, good_detail )
    wx.navigateTo({
      url: '/pages/goods/list/index?cats=' + good_detail.groupId,
    });
  },
  onLoad() {
    this.init(true);
  },
});
