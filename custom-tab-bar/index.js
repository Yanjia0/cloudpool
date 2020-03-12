Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "zhuye EN",
      iconPath: "Image/nochosen.png",
      selectedIconPath:  "Image/chosen.png",
      text: "English"
    }, {
      pagePath: "zhuye",
      iconPath: "Image/nochosen.png",
        selectedIconPath:  "Image/chosen.png",
      text: "中文"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})