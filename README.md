# Client Portal - 客戶報告管理入口平台

這是一個為客戶提供安全登入和查看專案報告的入口平台。客戶可以使用自己的帳號和案號來查看相關的分析報告和專案成果。

## 功能特色

- 🔐 客戶帳號登入系統
- 📊 多專案報告管理 (如：SEO 分析、數據分析等)
- 🌐 線上即時預覽
- 📱 響應式設計
- 🎨 可自訂主題
- 📈 專業報告展示
- 🔒 安全的資料存取控制

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
client-portal/
├── src/
│   ├── templates/
│   │   ├── base/        # 登入頁面和基礎模板
│   │   └── projects/    # 各客戶專案報告
│   │       ├── kaiwei/  # Kaiwei SEO 分析報告
│   │       └── ...      # 其他客戶專案
│   ├── styles/          # Stylus 樣式檔案
│   ├── js/             # JavaScript 檔案
│   └── assets/         # 圖片和靜態資源
├── dist/               # 建置後的檔案
├── public/             # 靜態檔案
└── package.json
```

## 使用說明

### 新增客戶專案
1. 在 `src/templates/projects/` 中為新客戶建立資料夾
2. 在 `src/styles/projects/` 中建立對應的樣式檔案
3. 在 `src/assets/images/projects/` 中放置專案相關圖片
4. 執行 `npm run dev` 進行預覽
5. 執行 `npm run build` 建置專案

### 現有專案範例
- **Kaiwei 專案**：SEO 分析報告展示
  - 模板：`src/templates/projects/kaiwei/`
  - 樣式：`src/styles/projects/kaiwei/`
  - 圖片：`src/assets/images/projects/kaiwei/`

## 部署

專案已配置好 GitHub Pages 部署，執行 `npm run deploy` 即可自動部署到 GitHub Pages。

