// const { mock } = require('mockjs')
const Mock = require('mockjs')
Mock.mock('/userInfo/',{
  date:'2020/12/24',
  information:[
    {
      title:'欢迎来这里',
      status:'正在审核',
      user:'李四',
      city:'西安'
    }
  ],
  say:'这是一次完美的旅行'
})

//第二份数据
Mock.mock('/username/',{
  date:'2020/12/24',
  information:[
    {
      title:'正常营业中',
      status:'售货中',
      user:'张三',
      city:'咸阳'
    }
  ],
  say:'真诚为您服务'
})



