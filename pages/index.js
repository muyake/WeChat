var flag = true;
Page({
  data: {
    color: 'window'
      // text:"这是一个页面"
  },
  click: function() {
    var color = '';
    if (flag) {
      color = "window-red";
      flag = false;
    } else {
      color = "window";
      flag = true;
    }
    this.setData({
      color: color
    });

  },
  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  }
})