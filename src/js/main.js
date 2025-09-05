// 垂直滾動簡報系統

document.addEventListener('DOMContentLoaded', function () {
  // 初始化垂直滾動簡報
  initializeVerticalPresentation();
});

function initializeVerticalPresentation() {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  let isScrolling = false;
  let scrollTimeout;

  // 設定初始狀態
  slides.forEach((slide, index) => {
    slide.style.position = 'fixed';
    slide.style.top = '0';
    slide.style.left = '0';
    slide.style.width = '100%';
    slide.style.height = '100vh';
    slide.style.display = 'flex';
    slide.style.flexDirection = 'column';
    slide.style.justifyContent = 'center';
    slide.style.alignItems = 'center';
    slide.style.padding = '2rem';
    slide.style.boxSizing = 'border-box';
    slide.style.transition = 'transform 0.6s ease-in-out';
    slide.style.transform = `translateY(${index * 100}vh)`;
    slide.style.zIndex = slides.length - index;

    // 設定背景色
    const bgColor = slide.getAttribute('data-background-color');
    if (bgColor) {
      slide.style.backgroundColor = bgColor;
      slide.style.color = '#ffffff';
    }
  });

  // 顯示第一張投影片
  showSlide(0);

  // 監聽滾輪事件
  document.addEventListener(
    'wheel',
    function (event) {
      if (isScrolling) return;

      isScrolling = true;
      clearTimeout(scrollTimeout);

      // 防止預設滾動行為
      event.preventDefault();

      if (event.deltaY > 0) {
        // 向下滾動 - 下一張
        nextSlide();
      } else {
        // 向上滾動 - 上一張
        prevSlide();
      }

      // 重置滾動狀態
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 600);
    },
    { passive: false }
  );

  // 監聽觸控事件
  let startY = 0;
  let startX = 0;

  document.addEventListener(
    'touchstart',
    function (event) {
      startY = event.touches[0].clientY;
      startX = event.touches[0].clientX;
    },
    { passive: true }
  );

  document.addEventListener(
    'touchend',
    function (event) {
      if (isScrolling) return;

      const endY = event.changedTouches[0].clientY;
      const endX = event.changedTouches[0].clientX;
      const diffY = startY - endY;
      const diffX = startX - endX;

      // 判斷是垂直滑動還是水平滑動
      if (Math.abs(diffY) > Math.abs(diffX)) {
        isScrolling = true;

        if (diffY > 50) {
          // 向上滑動 - 下一張
          nextSlide();
        } else if (diffY < -50) {
          // 向下滑動 - 上一張
          prevSlide();
        }

        // 重置滾動狀態
        setTimeout(() => {
          isScrolling = false;
        }, 600);
      }
    },
    { passive: true }
  );

  // 監聽鍵盤事件
  document.addEventListener('keydown', function (event) {
    switch (event.key) {
      case 'ArrowDown':
      case ' ':
        event.preventDefault();
        nextSlide();
        break;
      case 'ArrowUp':
        event.preventDefault();
        prevSlide();
        break;
      case 'Home':
        event.preventDefault();
        showSlide(0);
        break;
      case 'End':
        event.preventDefault();
        showSlide(slides.length - 1);
        break;
    }
  });

  // 下一張投影片
  function nextSlide() {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      showSlide(currentSlide);
    }
  }

  // 上一張投影片
  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      showSlide(currentSlide);
    }
  }

  // 顯示指定投影片
  function showSlide(index) {
    currentSlide = Math.max(0, Math.min(index, slides.length - 1));

    slides.forEach((slide, i) => {
      const offset = (i - currentSlide) * 100;
      slide.style.transform = `translateY(${offset}vh)`;
    });

    // 更新進度指示器
    updateProgress();
  }

  // 更新進度指示器
  function updateProgress() {
    const progress = ((currentSlide + 1) / slides.length) * 100;

    // 創建或更新進度條
    let progressBar = document.querySelector('.progress-bar');
    if (!progressBar) {
      progressBar = document.createElement('div');
      progressBar.className = 'progress-bar';
      progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: rgba(255, 255, 255, 0.3);
        z-index: 1000;
      `;

      const progressFill = document.createElement('div');
      progressFill.className = 'progress-fill';
      progressFill.style.cssText = `
        height: 100%;
        background: #3498db;
        transition: width 0.3s ease;
      `;

      progressBar.appendChild(progressFill);
      document.body.appendChild(progressBar);
    }

    const progressFill = progressBar.querySelector('.progress-fill');
    progressFill.style.width = `${progress}%`;
  }

  // 創建導航指示器
  function createNavigation() {
    const nav = document.createElement('div');
    nav.className = 'slide-navigation';
    nav.style.cssText = `
      position: fixed;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1000;
      display: flex;
      flex-direction: column;
      gap: 10px;
    `;

    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.className = 'nav-dot';
      dot.style.cssText = `
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: ${
          index === currentSlide ? '#3498db' : 'rgba(255, 255, 255, 0.5)'
        };
        cursor: pointer;
        transition: all 0.3s ease;
      `;

      dot.addEventListener('click', () => {
        showSlide(index);
      });

      nav.appendChild(dot);
    });

    document.body.appendChild(nav);
  }

  // 初始化導航
  createNavigation();

  // 更新導航點
  function updateNavigation() {
    const dots = document.querySelectorAll('.nav-dot');
    dots.forEach((dot, index) => {
      dot.style.background =
        index === currentSlide ? '#3498db' : 'rgba(255, 255, 255, 0.5)';
    });
  }

  // 重寫 showSlide 函數以包含導航更新
  const originalShowSlide = showSlide;
  showSlide = function (index) {
    originalShowSlide(index);
    updateNavigation();
  };

  // 防止頁面滾動
  document.body.style.overflow = 'hidden';

  // 響應式處理
  window.addEventListener('resize', function () {
    // 重新計算投影片位置
    slides.forEach((slide, i) => {
      const offset = (i - currentSlide) * 100;
      slide.style.transform = `translateY(${offset}vh)`;
    });
  });
}

// 工具函數
const utils = {
  // 格式化時間
  formatTime: function (seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  },

  // 生成隨機 ID
  generateId: function () {
    return Math.random().toString(36).substr(2, 9);
  },

  // 檢查是否為行動裝置
  isMobile: function () {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  },
};

// 匯出到全域
window.PresentationUtils = utils;
