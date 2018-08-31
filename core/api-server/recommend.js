import {qqPrefix, mkPrefix} from "./config";

export default {
    /**
     * 获取推荐列表
     * @returns {Promise}
     */
    getRecommend() {
        return new Promise((resolve, reject) => {
            wx.request({
                url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&uin=0&needNewCode=1',
                success: (result) => {
                    result.data.code === 0 ? resolve(result.data) : reject(result.data);
                },
                fail: () => {

                }
            })
        })
    },
    /**
     * 获取歌单信息
     * @returns {Promise}
     */
    getCdInfo() {
        return new Promise((resolve, reject) => {
            wx.request({
                url: 'http://ustbhuangyi.com/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.7615671234405004',
                success: (result) => {
                    result.data.code === 0 ? resolve(result.data) : reject(result.data);
                },
                fail: () => {

                }
            })
        })
    },
    /**
     * 获取歌单详情信息
     * @param id
     * @returns {Promise<any>}
     */
    getCdListDetail(id) {
        return new Promise((resolve, reject) => {
            let data = Object.assign({}, getCdListDetailParmas, {
                disstid: id,
            });
            wx.request({
                url: `http://ustbhuangyi.com/music/api/getCdInfo?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&disstid=${id}&type=1&json=1&utf8=1&onlysong=0&platform=yqq&hostUin=0&needNewCode=0`,
                success: (result) => {
                    result.data.code === 0 ? resolve(result.data) : reject(result.data);
                },
                fail: () => {

                }
            })
            
        })
    }
}

export const commonParams = {
    g_tk: 1928093487,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    format: 'json'
};

const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
});
const getCdListDetailParmas = Object.assign({}, commonParams, {
    g_tk: 1928093487,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    format: 'json',
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0
});
