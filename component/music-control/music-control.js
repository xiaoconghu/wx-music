// component/music-control/music-control.js
import Song from "../../utils/song";

const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
      isPlay:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    click(){
      if (app.globalData.songList.length > 0){
        wx.navigateTo({
          url: '../player/player?flag='+1,
        })
      }
      
    }
  },
    pageLifetimes:{
        show: function () {
            console.log(111);
        },
        hidden:function () {
            console.log(111);
        }
    },
    ready() {

        // if(app.globalData.songList.length>0){
        //     this.setData({isPlay:true})
        // }else {
        //     this.setData({isPlay:false})
        // }
    },
    attached(){

        // if(app.globalData.songList.length>0){
        //     this.setData({isPlay:true})
        // }else {
        //     this.setData({isPlay:false})
        // }
    }
})
