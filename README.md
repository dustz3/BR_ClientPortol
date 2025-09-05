# 客戶預覽簡報系統

這是一個專門為客戶提供線上簡報預覽的系統。

## 功能特色

- 📊 專業的簡報展示
- 🌐 線上即時預覽
- 📱 響應式設計
- 🎨 可自訂主題
- 📈 SEO 優化

## 快速開始

### 安裝依賴
```bash
npm install
```

### 開發模式
```bash
npm run dev
```
這會啟動本地伺服器並在瀏覽器中開啟 http://localhost:3000

### 建置專案
```bash
npm run build
```

### 監聽檔案變化
```bash
npm run watch
```

### 部署到 GitHub Pages
```bash
npm run deploy
```

## 專案結構

```
client-preview-presentation/
├── src/
│   ├── js/           # JavaScript 檔案
│   ├── styles/       # Stylus 樣式檔案
│   ├── templates/    # HTML 模板
│   └── images/       # 圖片資源
├── dist/             # 建置後的檔案
├── public/           # 靜態檔案
└── package.json
```

## 使用說明

1. 在 `src/templates/` 中編輯簡報內容
2. 在 `src/styles/` 中自訂樣式
3. 在 `src/js/` 中添加互動功能
4. 執行 `npm run dev` 進行預覽
5. 執行 `npm run build` 建置專案

## 部署

專案已配置好 GitHub Pages 部署，執行 `npm run deploy` 即可自動部署到 GitHub Pages。

