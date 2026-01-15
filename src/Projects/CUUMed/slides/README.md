# CUUMED Reveal 簡報

依據 `/Users/arieshsieh/Develop/Development/src/Projects/DGHM/DMS/docs/BrandRize/CUUMED/簡報文字.md` 內容製作的六頁網頁式簡報。以 Vite 搭配 Reveal.js (CDN) 呈現，版面為左對齊、白底深灰字並使用深藍作為主色。

## 環境需求

- Node.js 18+
- npm 9+

## 安裝

```bash
cd src/Projects/CUUMed/slides
npm install
```

## 啟動開發伺服器

```bash
npm run dev
```

Vite 會顯示本機網址（預設 `http://localhost:5173/`，若埠號被占用會自動換號）。按 `o` 可立即在預設瀏覽器開啟。

## 建置正式版

```bash
npm run build
```

輸出將位於 `dist/`。如需檢視打包結果：

```bash
npm run preview
```

## 檔案結構

- `index.html`：Reveal.js 容器與入口。
- `main.js`：載入 Reveal.js、注入六張投影片內容並設定控制與頁碼顯示。
- `style.css`：調整字級、留白與顏色配置。
- `package.json`：Vite 指令定義（`dev` / `build` / `preview`）。
