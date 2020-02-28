// pages/zhuye/zhuye.js
const app = getApp()
Page({
  data: {
    zhuyearray: [
      [
        {
          str: 'CloudPool浊池',
          styleclass: 'textH1'
        },
        {
          str: '是由一群年轻人管理的博客',
          styleclass: ''
        },
        {
          str: '文章、图片等来源于朋友们自愿提交',
          styleclass: ''
        },
        {
          str: '如果你也有兴趣加入我们',
          styleclass: ''
        },
        {
          str: '或者给我们提意见',
          styleclass: ''
        },
        {
          str: '欢迎联系我们',
          styleclass: ''
        },
        {
          str: 'cloudpool@zhuochi.org',
          styleclass: ''
        },
        {
          str: '.',
          styleclass: 'textH1'
        },
        {
          str: '.',
          styleclass: 'textH1'
        },
        {
          str: '.',
          styleclass: 'textH1'
        },
        {
          str: 'CloudPool浊池',
          styleclass: 'textH1'
        },
        { 
          str:'is a blog managed by a group of young people',
          styleclass:''
        },
        {
          str: 'articles, pictures, etc.are submitted voluntarily by friends',
          styleclass: ''
        },
        {
          str: 'if you are interested in joining us',
          styleclass: ''
        },
        {
          str: 'or want to give us feedback',
          styleclass: ''
        },
        {
          str: 'please contact us',
          styleclass: ''
        },
        {
          str: 'cloudpool@zhuochi.org',
          styleclass: ''
        }
      ],
      [
        {
          str: '为什么我们喜欢一个不存在的网站',
          styleclass: 'textH1'
        },
        {
          str: '2017-01-07',
          styleclass: ''
        },
        {
          str: '为什么我们要做浊池',
          styleclass: 'textH1'
        },
        {
          str: '2017-01-10',
          styleclass: ''
        },
        {
          str: '【不想手动置顶】(滑稽) 浊池需要帮助',
          styleclass: 'textH1'
        },
        {
          str: '2099-01-01',
          styleclass: ''
        },
      ],
      [
        {
          str: '忘了发出来的微电影（大概算吧）',
          styleclass: 'textH1'
        },
        {
          str: '2018-06-08',
          styleclass: ''
        }
      ],
      [
        {
          str: '关于物理的文章01',
          styleclass: 'textH1'
        },
        {
          str: '2018-05-13',
          styleclass: ''
        },
        {
          str: '关于物理的文章02',
          styleclass: 'textH1'
        },
        {
          str: '2018-05-13',
          styleclass: ''
        },
        {
          str: '奥卡姆上帝',
          styleclass: 'textH1'
        },
        {
          str: '2018-08-26',
          styleclass: ''
        }
      ],
      [
        {
          str: '自用梯子教程',
          styleclass: 'textH1'
        },
        {
          str: '2019-06-22',
          styleclass: ''
        },
        {
          str: '软件推荐v2.1',
          styleclass: 'textH1'
        },
        {
          str: '2019-08-10',
          styleclass: ''
        },
        {
          str: 'WTG--U盘内安装Windows',
          styleclass: 'textH1'
        },
        {
          str: '2019-01-21',
          styleclass: ''
        },
        {
          str: 'Windows安装',
          styleclass: 'textH1'
        },
        {
          str: '2018-10-17',
          styleclass: ''
        }
      ]
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  NavigateToFenlei: function (event) {
    wx.navigateTo({
      url: '../fenlei/fenlei',
    })
  },
  NavigateToBiaoQian: function (event) {
    wx.navigateTo({
      url: '../biaoqian/biaoqian',
    })
  },
  NavigateToGuiDang: function (event) {
    wx.navigateTo({
      url: '../guidang/guidang',
    })
  },
  NavigateToWangKan: function (event) {
    wx.navigateTo({
      url: '../wangkan/wangkan',
    })
  },
  NavigateToGuanYu: function (event) {
    wx.navigateTo({
      url: '../guanyu/guanyu',
    })
  },
  NavigateToFenlei: function (event) {
    wx.navigateTo({
      url: '../fenlei/fenlei',
    })
  },
  NavigateToFenlei: function (event) {
    wx.navigateTo({
      url: '../fenlei/fenlei',
    })
  },

  bindViewTap: function () {

  },
  onLload: function () {

  },
  icon: function (e) {
    wx.makePhoneCall({
      phoneNumber: '13575098615',
    });
  }
})
