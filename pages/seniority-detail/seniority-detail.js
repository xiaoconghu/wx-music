// pages/seniority-detail/seniority-detail.js
import seniorityService from "../../core/api-server/seniority";
import {getSongUrlList} from "../../utils/song-util";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        id: '',
        data: [],
        title: '',
        imgUrl: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.getTopListDetail(options.id)
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
    getTopListDetail(id) {
        seniorityService.getTopListDetail(id).then(success => {
            console.log(success);
            let imgUrl = success.topinfo.MacDetailPicUrl;
            this.setData({imgUrl: imgUrl});
            let title = success.topinfo.ListName;
            this.setData({title: title});
            let arr = [];
            success.songlist.forEach(item => {
                let {data} = item;
                arr.push(data);
            })
            getSongUrlList(arr).then(res => {
                this.setData({data:res})

            }, failed => {

            })
            console.log(this.data);
        })
    }
})