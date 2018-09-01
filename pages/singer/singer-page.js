// pages/singer/singer-page.js
import {CommonUtil} from "../../utils/common-util";
import singerService from "../../core/api-server/singer";

Page({
    data: {
        singerData:[]
    },

  /**
 * 生命周期函数--监听页面初次渲染完成
 */
  onReady: function () {
    //获得dialog组件
    this.dialog = this.selectComponent("#dialog");
    this.getSingerList();
  },

  showDialog() {
    this.dialog.showDialog();
  },
  getSingerList() {
    let data, arr = [], singerData = [];

    let generateBig = CommonUtil.generateBig_1();
    singerService.getSingerList().then(success => {
      data = success.data.list;
      data.forEach((_item, index) => {
        _item._Fsinger_mid = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${_item.Fsinger_mid}.jpg?max_age=2592000`
        if (index < 5) {
          arr.push(_item);
        }
      });
      singerData.push({ index: '热', _index:'热门',id:'hot', childNode: arr });
      generateBig.forEach(item => {
        let arr = data.filter((_item, index) => {
          if (item === _item.Findex) {
            return _item
          }
        });
        let obj;
        if (data.length > 0) {
          obj = { index: item,_index:item, id:item, childNode: arr };
        }
        singerData.push(obj)
      })
      this.setData({ singerData: singerData })
      console.log(this.data.singerData)
    });

  },
  //取消事件
  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');
    this.dialog.hideDialog();
  }
})