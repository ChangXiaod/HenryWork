// pages/mine/mine.js
Page({

  /**
   * Page initial data
   */
  data: {

  },
  //消息提示框
  information(){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 1000
    })
  },
  //模态对话框
  showModel(){
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success (res) {
        console.log(res)
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  // loading提示框
  loading(){
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  getInfo(){
    wx.getSystemInfo({
      success: (res) => {
        console.log(res.brand) //设备品牌
        console.log(res.model)//设备型号
        console.log(res.pixelRatio)//设备像素比
        console.log(res.windowWidth)//可使用窗口宽度
        console.log(res.windowHeight)//可使用窗口高度
        console.log(res.language)//微信设置的语言
        console.log(res.version)//微信版本号
        console.log(res.platform)//客户端平台
      },
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})