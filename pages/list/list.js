// pages/list/list.js
//模块引入
var common = require('../../common/common')
Page({

  /**
   * Page initial data
   */
  data: {
    arr:[
      {id:1, name:'zhangsan1',age:18},
      {id:2, name:'zhangsan2',age:19},
      {id:3, name:'zhangsan13',age:18},
      {id:4, name:'zhangsan14',age:18},
    ],
    name:'',
    inputValue:'默认值'
  },

  buttonTap(){
    this.setData({
      name:common.together('haha')
    })
    common.showAge('18')
    console.log("按钮")
  },
  getElement(){
    this.createIntersectionObserver('get-element', {
      
    })
  },
  fuFun(val){
    console.log(val.detail)
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(1111)
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    this.setData({
      name:common.together('haha')
    })
    console.log(22222)
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    console.log(33333)
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