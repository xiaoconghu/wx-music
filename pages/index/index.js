Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    slider:[],
    items:[],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onLoad: function (options) {
    this.getRecommend()
    this.getCdInfo()
  },
  getRecommend() {
    wx.request({
      url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&uin=0&needNewCode=1', 
      success: (res) => {
        console.log(res.data)
        this.setData({
          slider: res.data.data.slider
        })
        console.log(this.data.slider)
      }
    })
  },
  getCdInfo() {
    wx.request({
      url: 'http://ustbhuangyi.com/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.7615671234405004',
      success: (res) => {
        console.log(res.data)
        this.setData({
          items: res.data.data.list
        })
      }
    })
  },
  navigateToDetail(e){
    console.log(e)
    wx.navigateTo({
      url: '../recommend-detail/recommend-detail?dissid=' + e.currentTarget.dataset.dissid
    })
  }
})