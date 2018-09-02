// pages/singer-detail/singer-detail.js
import singerService from "../../core/api-server/singer";
import {getSongUrlList} from "../../utils/song-util";

Page({

  /**
   * 页面的初始数据
   */
  data: {
      id: '',
      songData: [],
      title:'',
      imgUrl:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let imgUrl=`https://y.gtimg.cn/music/photo_new/T001R300x300M000${options.id}.jpg?max_age=2592000`;
      this.setData({imgUrl:imgUrl});
      this.getSingerDetail(options.id);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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
    getSingerDetail(id){
        singerService.getSingerDetail(id).then(success=>{
//                    console.log(success);
            let title = success.data.singer_name;
            this.setData({title:title});
            let songs = [];
            success.data.list.forEach(item=>{
                let {musicData} = item;
                songs.push(musicData)
            });
            getSongUrlList(songs).then(res=>{
                this.setData({songData:res})
            },failed=>{

            })

        })
    },
})