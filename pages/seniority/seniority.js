// pages/seniority/seniority.js
import seniorityService from "../../core/api-server/seniority";

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      this.getTopList()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
    getTopList() {
        seniorityService.getTopList().then(success => {
            console.log(success);
            let arr = success.data.topList;
            this.setData({listData: arr})
        }, failed => {
            console.log(failed);
        })
    }
,
    goToDetail(target) {
      let mid = target.currentTarget.dataset.id;
      wx.navigateTo({
        url: '../seniority-detail/seniority-detail?id=' + mid
      })
    }
})