const headEl = document.getElementsByTagName('head')[0];
function loadCSS(href = '', timeLimit = 3000): Promise<void> {
  let complete = false;
  let timeoutId: ReturnType<typeof setTimeout>;
  return new Promise((resolve, reject): void => {
    const styleEl = document.createElement('link');
    styleEl.rel = 'stylesheet';
    styleEl.type = 'text/css';
    styleEl.href = href;
    styleEl.onload = (): void => {
      if (complete) return;
      clearTimeout(timeoutId);
      complete = true;
      resolve();
    };
    styleEl.onerror = (): void => {
      if (complete) return;
      clearTimeout(timeoutId);
      complete = true;
      reject(new Error('load css fail'));
    };
    headEl.appendChild(styleEl);
    timeoutId = setTimeout((): void => {
      if (complete) return;
      console.log(`[loadCSS]: 样式加载超时"${href}"`);
      complete = true;
      resolve();
    }, timeLimit);
  });
}
loadCSS('https://www.loveYC.com').then(res => {
  console.log('地转天旋');
});
