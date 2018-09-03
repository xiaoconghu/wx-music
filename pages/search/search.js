// pages/search/search.js
import searchService from "../../core/api-server/search";
import {
  getSongUrlList
} from "../../utils/song-util";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    songList: [],
    hotKey: [],
    inputValue: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.getSearchKey()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  getSearchKey() {
    searchService.getSearchKey().then(success => {
      let hotKey = success.data.hotkey.slice(0, 10);
      this.setData({
        hotKey: hotKey
      })
    }, failed => {
      console.log(failed.msg);
    })
  },

  searchChange($event) {
    console.log($event);
    this.setData({
      inputValue: $event.detail.value
    });
    this.search($event.detail.value);

  },
  searchIt($event) {
    console.log($event);
    this.setData({
      inputValue: $event
    });
    this.search($event);
  },

  search(value) {
    searchService.searchMusicByKeyWord(value).then(success => {
      let list = success.data.song.list;
      getSongUrlList(list).then(res => {
        this.setData({
          songList: res
        });
      }, failed => {

      })
    }, failed => {

    })
  },

  deleteValue() {
    this.setData({
      inputValue: ''
    })
  },

  navigateToDetail(index) {
    console.log(index);
  },
  launchAppError: function(e) {
    console.log(e.detail.errMsg)
  },
  openMap: function() {
    wx.getLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res) {
        // success
        wx.openLocation({
          latitude: res.latitude, // 纬度，范围为-90~90，负数表示南纬
          longitude: res.longitude, // 经度，范围为-180~180，负数表示西经
          scale: 28, // 缩放比例
        })
      }
    })
  },
  getSystemInfo() {
    wx.getSystemInfo({
      success: function(res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
      }
    })
  },
  makePhoneCall() {
    
    
  }
})