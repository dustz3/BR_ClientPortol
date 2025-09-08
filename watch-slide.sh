#!/bin/bash

# 自動編譯和預覽 slide 頁面的腳本

echo "🔄 開始監控 slide.pug 檔案變更..."

# 編譯 slide.pug
echo "📝 編譯 slide.pug..."
npx pug src/templates/projects/kaiwei/slide.pug -o dist/projects/kaiwei/ --pretty

# 編譯 CSS
echo "🎨 編譯 slide.css..."
npx stylus src/styles/projects/kaiwei/slide.styl -o dist/css/projects/kaiwei/

echo "✅ 編譯完成！"
echo "🌐 預覽網址: http://localhost:3002/projects/kaiwei/slide.html"
echo "💡 提示: 修改 src/templates/projects/kaiwei/slide.pug 後重新執行此腳本"

