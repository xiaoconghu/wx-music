// pages/search/search.js
import searchService from "../../core/api-server/search";
import {getSongUrlList} from "../../utils/song-util";

Page({

  /**
   * 页面的初始数据
   */
  data: {
      songList:[],
      hotKey:[],
      inputValue:''
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
    this.getSearchKey()
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
  getSearchKey() {
    searchService.getSearchKey().then(success => {
      let hotKey = success.data.hotkey.slice(0, 10);
      this.setData({ hotKey: hotKey })
    }, failed => {
      console.log(failed.msg);
    })
  },

  searchChange ($event) {
      console.log($event);
      this.setData({ inputValue: $event.detail.value });
    this.search($event.detail.value);

  },
  searchIt ($event)  {
    console.log($event);
    this.setData({ inputValue: $event });
    this.search($event);
  },

  search(value) {
    searchService.searchMusicByKeyWord(value).then(success => {
      let list = success.data.song.list;
      getSongUrlList(list).then(res => {
        this.setData({ songList: res });
      }, failed => {

      })
    }, failed => {

    })
  },

    deleteValue ()  {
    this.setData({ inputValue: '' })
  },

  navigateToDetail (index)  {
    console.log(index);
  }
})