export default {
    get(url, body) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: url,
                data: body,
                success: function (e) {
                    resolve(e)
                },
                fail: function (e) {
                    reject(e)
                }
            })
        })
    },
    post(url, body) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: url,
                data: body,
                method: 'POST',
                success: (e) => {
                    resolve(e)
                },
                fail: (e) => {
                    reject(e)
                }
            })
        })
    }
}