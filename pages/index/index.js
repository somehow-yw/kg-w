Page({
  data: {
    imgUrls: [
      'https://kgcom.oss-cn-shenzhen.aliyuncs.com/17609/425326308428488704.png',
      'https://kgcom.oss-cn-shenzhen.aliyuncs.com/17609/425326457909288960.png',
      'https://kgcom.oss-cn-shenzhen.aliyuncs.com/17609/425326390334857216.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    currentMenu: 1,
    menus: [{
      value: 0,
      label: "推荐"
    }, {
      value: 1,
      label: "区块链"
    }, {
      value: 2,
      label: "新金融"
    }, {
      value: 3,
      label: "宏观"
    }, {
      value: 4,
      label: "股票"
    }],
    active: 0
  },
  menusTap (e) { // 点击nav
    console.log('e', e)
    this.setData({
      active: e.currentTarget.dataset.name
    })
  }
})