#!/bin/bash

echo "🚀 網站標題和 Meta 描述抓取工具"
echo "=================================="

# 檢查 Python 是否安裝
if ! command -v python3 &> /dev/null; then
    echo "❌ 錯誤: 未找到 Python3，請先安裝 Python"
    exit 1
fi

# 檢查依賴是否安裝
echo "📦 檢查依賴套件..."
python3 -c "import requests, bs4" 2>/dev/null
if [ $? -ne 0 ]; then
    echo "📥 安裝依賴套件..."
    pip3 install -r requirements.txt
fi

# 檢查網站是否運行
echo "🌐 檢查網站是否運行..."
if curl -s http://127.0.0.1:55944 > /dev/null; then
    echo "✅ 網站正在運行"
else
    echo "⚠️  警告: 網站可能未運行，請先啟動 live-server"
    echo "   執行: npx live-server dist --port=55944"
    echo ""
    read -p "是否繼續執行？(y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# 執行抓取程式
echo "🔍 開始抓取網站資料..."
python3 scraper.py

echo ""
echo "✅ 抓取完成！"
echo "📁 查看結果:"
echo "   - JSON 資料: scraping_results.json"
echo "   - HTML 報告: seo_report.html"
