//全局数据使用
const app = getApp()
// import Mock from "mockjs"
// require('../../mock/_mock')
var datalist = require('../../mock/request')
Page({

  /**
   * Page initial data
   */
  data: {
    width:'100%',
    height:'350rpx',
    listmock:[],
    listlocal:[]
  },
  request(){
    wx.request({
      url: app.globalData.request_url + '/username/',
      method:"GET",
      dataType:"json",
      timeout: 0,
      success: (result) => {
        console.log(result)
      },
      fail: (res) => {
        console.log("请求失败");
      }, 
    })
  },
  localhostData(){
    wx.request({
      url: 'http://api.artgoer.cn:8084/artgoer/api/v1/user/324380/v3/topic/topicHomeByLabel?pageIndex=1&token=b544cd63-6d42-46fe-a96c-3cf96ba3113&topicId=6218e7',
      method:"GET",
      header: {
        'content-type': 'application/json' 
      },
      data:{

      },
      success:(res)=>{
        console.log(res);
        this.setData({
    
        })
      }
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