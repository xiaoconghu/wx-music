// pages/player/player.js
import Song from "../../utils/song";

let app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentSong: {},
        isPlay: true
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

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        let songList = app.globalData.songList;
        let currentMusicIndex = app.globalData.currentMusicIndex;
        let song = new Song(songList[currentMusicIndex]);
        console.log(songList);
        this.setData({currentSong: song});
        console.log(song.url);
        let backgroundAudioManager = wx.getBackgroundAudioManager();
        backgroundAudioManager.src = song.url;
        this.setData({isPlay: true})
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
    play() {

        backgroundAudioManager[this.data.isPlay?'pause':'play']();
        this.setData({isPlay: !this.data.isPlay})

    },
    next() {

    },
    loveIt() {

    },
    previous() {

    }
})