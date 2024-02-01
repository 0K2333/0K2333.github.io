<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = '👀这就不学了？';
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = '🫡好好学习，天天向上';
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});