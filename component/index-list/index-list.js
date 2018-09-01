// component/index-list/index-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Array,
      value: function() {
        return [{
          singer: [{
            name: ''
          }],
        }]
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    toView: 'Z'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    touchMove(target) {
      console.dir(target.touches);
    },
    mouseDown(target) {

      let id = target.currentTarget.dataset.targetId;
      let index = target.currentTarget.dataset.targetIndex;
      this.setData({
        toView: id
      })
      wx.showToast({
        title: index,
        icon: 'none',
        duration: 2000
      })
    },
    selectItem(target){
      let mid = target.currentTarget.dataset.mid;
      wx.navigateTo({
        url: '../singer-detail/singer-detail?id=' +mid
      })
    }
  }
})