// 客戶預覽簡報主要 JavaScript 檔案

// 初始化 Reveal.js
document.addEventListener('DOMContentLoaded', function() {
    // 配置 Reveal.js
    Reveal.initialize({
        hash: true,
        transition: 'slide',
        transitionSpeed: 'default',
        backgroundTransition: 'fade',
        controls: true,
        progress: true,
        center: true,
        touch: true,
        loop: false,
        rtl: false,
        navigationMode: 'default',
        shuffle: false,
        fragments: true,
        fragmentInURL: false,
        embedded: false,
        help: true,
        showNotes: false,
        autoPlayMedia: null,
        preloadIframes: null,
        autoSlide: 0,
        autoSlideStoppable: true,
        autoSlideMethod: null,
        defaultTiming: null,
        mouseWheel: false,
        previewLinks: false,
        postMessage: true,
        postMessageEvents: false,
        focusBodyOnPageVisibilityChange: true,
        focusBodyOnPageVisibilityChange: true,
        width: 960,
        height: 700,
        margin: 0.1,
        minScale: 0.2,
        maxScale: 1.5,
        disableLayout: false
    });

    // 添加自訂功能
    initializeCustomFeatures();
});

// 自訂功能初始化
function initializeCustomFeatures() {
    // 添加鍵盤快捷鍵
    addKeyboardShortcuts();
    
    // 添加動畫效果
    addAnimationEffects();
    
    // 添加互動功能
    addInteractiveFeatures();
}

// 鍵盤快捷鍵
function addKeyboardShortcuts() {
    document.addEventListener('keydown', function(event) {
        switch(event.key) {
            case 'f':
            case 'F':
                toggleFullscreen();
                break;
            case 'h':
            case 'H':
                showHelp();
                break;
            case 'p':
            case 'P':
                togglePresenterMode();
                break;
        }
    });
}

// 全螢幕切換
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log('無法進入全螢幕模式:', err);
        });
    } else {
        document.exitFullscreen();
    }
}

// 顯示幫助
function showHelp() {
    const helpText = `
    鍵盤快捷鍵：
    F - 切換全螢幕
    H - 顯示此幫助
    P - 切換簡報者模式
    方向鍵 - 切換投影片
    空白鍵 - 下一張投影片
    ESC - 退出全螢幕
    `;
    
    alert(helpText);
}

// 簡報者模式
function togglePresenterMode() {
    // 這裡可以添加簡報者模式的邏輯
    console.log('切換簡報者模式');
}

// 動畫效果
function addAnimationEffects() {
    // 為投影片添加進入動畫
    Reveal.on('slidechanged', function(event) {
        const currentSlide = event.currentSlide;
        const elements = currentSlide.querySelectorAll('.animate-on-enter');
        
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('animated');
            }, index * 200);
        });
    });
}

// 互動功能
function addInteractiveFeatures() {
    // 添加點擊事件監聽器
    document.addEventListener('click', function(event) {
        // 如果點擊的是可互動元素
        if (event.target.classList.contains('interactive')) {
            handleInteractiveClick(event.target);
        }
    });
}

// 處理互動點擊
function handleInteractiveClick(element) {
    const action = element.dataset.action;
    
    switch(action) {
        case 'next':
            Reveal.next();
            break;
        case 'prev':
            Reveal.prev();
            break;
        case 'home':
            Reveal.slide(0);
            break;
        case 'end':
            Reveal.slide(Reveal.getTotalSlides() - 1);
            break;
        default:
            console.log('未知的互動動作:', action);
    }
}

// 工具函數
const utils = {
    // 格式化時間
    formatTime: function(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    },
    
    // 生成隨機 ID
    generateId: function() {
        return Math.random().toString(36).substr(2, 9);
    },
    
    // 檢查是否為行動裝置
    isMobile: function() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
};

// 匯出到全域
window.PresentationUtils = utils;

