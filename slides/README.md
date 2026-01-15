# CUUMED 網頁式簡報

以 Vite + Reveal.js 建立的六頁簡報，內容完全對應 `/Users/arieshsieh/Develop/Development/src/Projects/DGHM/DMS/docs/BrandRize/CUUMED/簡報文字.md`。

## 建置需求

- Node.js 18 或更新版本
- npm 9 或更新版本

## 安裝

```bash
cd slides
npm install
```

## 開發模式

```bash
npm run dev
```

Vite 預設會啟動本機開發伺服器（預設連線埠 5173）。按 `o` 可自動開啟瀏覽器。

## 建置正式版

```bash
npm run build
```

輸出檔案預設位於 `slides/dist/`。若需本機檢視打包結果，可執行：

```bash
npm run preview
```

## 專案結構

- `index.html`：Reveal.js 初始化容器。
- `main.js`：載入 Reveal.js、注入六頁投影片內容並設定控制選項。
- `style.css`：投影片的全局樣式（白底、左對齊、深灰文字、深藍重點）。

## Reveal.js CDN

專案透過 jsDelivr CDN 取得 Reveal.js 5.x，因此無須在本地安裝額外套件；Vite 將負責開發與建置流程。
