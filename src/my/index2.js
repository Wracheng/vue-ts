const headEl = document.getElementsByTagName("head")[0];
console.log(headEl, "headEl");
function loadCSS(href, timeLimit) {
  if (href === void 0) {
    href = "";
  }
  if (timeLimit === void 0) {
    timeLimit = 3000;
  }
  let complete = false;
  let timeoutId;
  return new Promise(function(resolve, reject) {
    const styleEl = document.createElement("link");
    styleEl.rel = "stylesheet";
    styleEl.type = "text/css";
    styleEl.href = href;
    // 加载完成就会变为true
    styleEl.onload = function() {
      if (complete) {
        return;
      }
      console.log(33333);
      clearTimeout(timeoutId);
      complete = true;
      resolve();
    };
    styleEl.onerror = function() {
      if (complete) {
        return;
      }
      console.log(22222);
      clearTimeout(timeoutId);
      complete = true;
      reject(new Error("load css fail"));
    };
    headEl.appendChild(styleEl);
    timeoutId = setTimeout(function() {
      if (complete) {
        return;
      }
      console.log(11111);
      console.log(
        '[loadCSS]: \u6837\u5F0F\u52A0\u8F7D\u8D85\u65F6"' + href + '"'
      );
      complete = true;
      resolve();
    }, timeLimit);
  });
}
loadCSS("https://www.baidu.com").then(function(res) {
  console.log("地转天旋");
});
