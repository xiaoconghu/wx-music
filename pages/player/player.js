// pages/player/player.js
import Song from "../../utils/song";
let backgroundAudioManager = wx.getBackgroundAudioManager();
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

        this.setMusicConfig(0)

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
        console.log(111);
    },
    play() {

        backgroundAudioManager[this.data.isPlay?'pause':'play']();
        this.setData({isPlay: !this.data.isPlay})

    },
    next() {
        this.setMusicConfig(1)
    },
    loveIt() {

    },
    previous() {
        this.setMusicConfig(-1)
    },
    setMusicConfig(index){
        let songList = app.globalData.songList;
        let currentMusicIndex = app.globalData.currentMusicIndex+index;

        if(currentMusicIndex<0){
            currentMusicIndex = songList.length-1;
        }
        if(currentMusicIndex>songList.length-1){
            currentMusicIndex = 0;
        }
        app.setGlobalData({currentMusicIndex:currentMusicIndex});
        let song = new Song(songList[currentMusicIndex]);
        this.setData({currentSong: song});
        backgroundAudioManager.title = song.album;
        backgroundAudioManager.epname = song.name;
        backgroundAudioManager.singer = song.singer[0].name;
        backgroundAudioManager.coverImgUrl = song.image;
        backgroundAudioManager.src = song.url;
        this.setData({isPlay: true})
    }
})