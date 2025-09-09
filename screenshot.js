const puppeteer = require('puppeteer');
const path = require('path');

async function takeScreenshot() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // 設定視窗大小
  await page.setViewport({ width: 1200, height: 800 });

  // 載入頁面
  await page.goto('http://127.0.0.1:3002/table-demo.html', {
    waitUntil: 'networkidle0',
  });

  // 等待表格載入
  await page.waitForSelector('.seo-geo-table');

  // 截圖
  await page.screenshot({
    path: 'table-demo.png',
    fullPage: true,
    type: 'png',
  });

  console.log('截圖已儲存為 table-demo.png');

  await browser.close();
}

takeScreenshot().catch(console.error);
