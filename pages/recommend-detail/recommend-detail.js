// pages/recommend-detail/recommend-detail.js
import $recommendService from "../../core/api-server/recommend";
import {CommonUtil} from "../../utils/common-util";
import {getSongUrlList} from "../../utils/song-util";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        dissid: "",
        cdList: [],
        songList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
        this.getCdListDetail(options.dissid)
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

    getCdListDetail(id) {
        $recommendService.getCdListDetail(id).then(result => {
            this.setData({cdList: result.cdlist});
            getSongUrlList(result.cdlist[0].songlist).then(res => {
                this.setData({songList:res})
            }, failed => {

            })
        }, failed => {

        })
    },
    clickPlayAll() {
        let index = CommonUtil.getRandomNumBoth(1, this.cdList[0].songlist.length + 1);
        // this.currentMusicIndex(index);
        // this.currentMusic(this.cdList[0].songlist);
        // this.playerDetailShow(true)
    },
    navigateToDetail(index) {
        // this.currentMusic(this.cdList[0].songlist);
        // this.currentMusicIndex(index);
        // this.playerDetailShow(true);
    },
    goBack() {
        // this.$router.push({
        //     path: '/'
        // })
    }
})