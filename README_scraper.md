# 網站標題和 Meta 描述抓取工具

這個 Python 程式可以幫您抓取專案網站中所有頁面的 Title 和 Meta description，並生成詳細的 SEO 分析報告。

## 🚀 快速開始

### 1. 安裝依賴

```bash
pip install -r requirements.txt
```

### 2. 啟動您的網站

確保您的網站正在運行（例如使用 live-server）：

```bash
npx live-server dist --port=55944
```

### 3. 執行抓取程式

```bash
python scraper.py
```

## 📋 功能特色

- ✅ **自動抓取**：自動抓取專案中的所有頁面
- ✅ **多種格式輸出**：JSON 資料檔案 + HTML 視覺化報告
- ✅ **錯誤處理**：網路錯誤和解析錯誤的完整處理
- ✅ **統計摘要**：成功/失敗頁面統計
- ✅ **可自訂**：支援自訂基礎 URL 和輸出檔案名稱

## 🛠️ 使用方式

### 基本使用

```bash
python scraper.py
```

### 自訂參數

```bash
# 自訂基礎 URL
python scraper.py --url http://localhost:3000

# 自訂輸出檔案名稱
python scraper.py --output my_results.json --report my_report.html
```

### 參數說明

- `--url`: 基礎 URL（預設: http://127.0.0.1:55944）
- `--output`: JSON 輸出檔案名稱（預設: scraping_results.json）
- `--report`: HTML 報告檔案名稱（預設: seo_report.html）

## 📊 輸出檔案

### 1. JSON 資料檔案

包含每個頁面的詳細資訊：

```json
{
  "url": "http://127.0.0.1:55944/projects/kaiwei/",
  "title": "凱崴數位網站健檢報告 - 品耀數位行銷",
  "description": "凱崴數位網站 SEO 健檢報告...",
  "keywords": "SEO, 網站優化, 凱崴數位",
  "status": "success",
  "timestamp": "2024-01-10 15:30:45"
}
```

### 2. HTML 視覺化報告

包含：

- 📈 統計摘要（成功/失敗頁面數）
- 📄 每個頁面的詳細資訊
- 🎨 美觀的視覺化介面
- ✅ 成功/❌ 失敗狀態標示

## 🔍 抓取的頁面

程式會自動抓取以下頁面：

- 首頁 (`/`, `/index.html`)
- 登入頁面 (`/login.html`)
- Kaiwei 專案所有頁面
  - 封面頁 (`/projects/kaiwei/cover.html`)
  - 投影片 1-8 (`/projects/kaiwei/slide1.html` ~ `/slide8.html`)
- 其他頁面 (`/table-demo.html`)

## 🛡️ 錯誤處理

- **網路錯誤**：自動重試和錯誤記錄
- **解析錯誤**：HTML 解析失敗的處理
- **超時處理**：10 秒請求超時設定
- **狀態追蹤**：每個頁面的成功/失敗狀態

## 📝 注意事項

1. 確保網站正在運行再執行抓取程式
2. 程式會自動在請求間加入 0.5 秒延遲，避免過於頻繁的請求
3. 支援 UTF-8 編碼，可正確處理中文內容
4. 生成的報告檔案會儲存在專案根目錄

## 🎯 使用場景

- **SEO 分析**：檢查所有頁面的標題和描述
- **內容審核**：確保重要頁面都有適當的 Meta 資訊
- **網站維護**：定期檢查網站內容的完整性
- **報告生成**：為客戶或團隊生成專業的 SEO 報告
