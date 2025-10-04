// 開偉專案簡報系統 JavaScript

// 登出功能
function logout() {
  sessionStorage.clear();
  window.location.href = '../../index.html';
}

// 垂直滾動簡報系統
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  let isScrolling = false;
  let scrollTimeout;
  
  // 設定初始狀態
  slides.forEach((slide, index) => {
    if (index === 0) {
      slide.style.opacity = '1';
      slide.style.zIndex = '1';
    } else {
      slide.style.opacity = '0';
      slide.style.zIndex = '0';
    }
  });
  
  // 顯示第一張投影片
  showSlide(0);
  
  // 監聽滾輪事件
  document.addEventListener('wheel', function(event) {
    if (isScrolling) return;
    
    isScrolling = true;
    clearTimeout(scrollTimeout);
    
    // 防止預設滾動行為
    event.preventDefault();
    
    if (event.deltaY > 0) {
      // 向下滾動 - 下一張
      if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
      }
    } else {
      // 向上滾動 - 上一張
      if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
      }
    }
    
    // 重置滾動狀態 - 增加延遲時間防止連續滾動
    scrollTimeout = setTimeout(() => {
      isScrolling = false;
    }, 1000);
  }, { passive: false });
  
  // 監聽觸控事件
  let startY = 0;
  let startX = 0;
  
  document.addEventListener('touchstart', function(event) {
    startY = event.touches[0].clientY;
    startX = event.touches[0].clientX;
  }, { passive: true });
  
  document.addEventListener('touchend', function(event) {
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
        if (currentSlide < slides.length - 1) {
          currentSlide++;
          showSlide(currentSlide);
        }
      } else if (diffY < -50) {
        // 向下滑動 - 上一張
        if (currentSlide > 0) {
          currentSlide--;
          showSlide(currentSlide);
        }
      }
      
      // 重置滾動狀態 - 增加延遲時間防止連續滑動
      setTimeout(() => {
        isScrolling = false;
      }, 1000);
    }
  }, { passive: true });
  
  // 監聽鍵盤事件
  document.addEventListener('keydown', function(event) {
    switch(event.key) {
      case 'ArrowDown':
      case ' ':
        event.preventDefault();
        if (currentSlide < slides.length - 1) {
          currentSlide++;
          showSlide(currentSlide);
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (currentSlide > 0) {
          currentSlide--;
          showSlide(currentSlide);
        }
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
  
  // 顯示指定投影片
  function showSlide(index) {
    currentSlide = Math.max(0, Math.min(index, slides.length - 1));
    
    slides.forEach((slide, i) => {
      if (i === currentSlide) {
        slide.style.opacity = '1';
        slide.style.zIndex = '1';
      } else {
        slide.style.opacity = '0';
        slide.style.zIndex = '0';
      }
    });
    
    // 更新進度指示器
    updateProgress();
    updateNavigation();
    updateSlideIndicator();
  }
  
  // 更新進度指示器
  function updateProgress() {
    const progress = ((currentSlide + 1) / slides.length) * 100;
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
      progressFill.style.width = `${progress}%`;
    }
  }
  
  // 創建導航指示器
  function createNavigation() {
    const nav = document.getElementById('slideNavigation');
    if (!nav) return;
    
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.className = 'nav-dot';
      if (index === currentSlide) {
        dot.classList.add('active');
      }
      
      dot.addEventListener('click', () => {
        showSlide(index);
      });
      
      nav.appendChild(dot);
    });
  }
  
  // 創建頁面指示器
  function createSlideIndicator() {
    const indicator = document.getElementById('slideIndicator');
    if (!indicator) return;
    
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.className = 'indicator-dot';
      if (index === currentSlide) {
        dot.classList.add('active');
      }
      
      dot.addEventListener('click', () => {
        showSlide(index);
      });
      
      indicator.appendChild(dot);
    });
  }
  
  // 更新導航點
  function updateNavigation() {
    const dots = document.querySelectorAll('.nav-dot');
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
  
  // 更新頁面指示器
  function updateSlideIndicator() {
    const indicatorDots = document.querySelectorAll('.indicator-dot');
    indicatorDots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
  
  // 初始化導航
  createNavigation();
  createSlideIndicator();
  
  // 響應式滾動處理
  function handleResponsiveScroll() {
    if (window.innerWidth <= 768) {
      // 手機版：啟用滾動，顯示所有內容
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
      document.body.style.left = 'auto';
      document.body.style.right = 'auto';
      
      const presentationContainer = document.querySelector('.presentation-container');
      if (presentationContainer) {
        presentationContainer.style.height = 'auto';
        presentationContainer.style.flexDirection = 'column';
      }
      
      // 顯示所有投影片，移除淡入淡出效果
      const slides = document.querySelectorAll('.slide');
      slides.forEach(slide => {
        slide.style.display = 'block';
        slide.style.position = 'relative';
        slide.style.transform = 'none';
        slide.style.opacity = '1';
        slide.style.visibility = 'visible';
        slide.style.height = 'auto';
        slide.style.minHeight = '100vh';
        slide.style.left = 'auto';
        slide.style.right = 'auto';
      });
    } else {
      // 桌面版：禁用滾動，使用淡入淡出效果
      document.body.style.overflow = 'hidden';
      
      const presentationContainer = document.querySelector('.presentation-container');
      if (presentationContainer) {
        presentationContainer.style.height = '100vh';
        presentationContainer.style.flexDirection = 'row';
      }
    }
  }
  
  // 初始化滾動設定
  handleResponsiveScroll();
  
  // 響應式處理
  window.addEventListener('resize', function() {
    handleResponsiveScroll();
  });
});
