export const qqPrefix = "https://c.y.qq.com";
export const mkPrefix = "http://ustbhuangyi.com";
export function get(url,body) {
    return new Promise((resolve, reject) => {
        wx.request({
            url:url,
            data:body,
            success:function (e) {
                resolve(e)
            },
            fail:function (e) {
                reject(e)
            }
        })
    })

}