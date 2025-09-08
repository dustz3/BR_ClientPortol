(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// 簡報控制 JavaScript

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// 初始化簡報
function initPresentation() {
    if (slides.length === 0) return;
    
    // 顯示第一張投影片
    showSlide(0);
    
    // 添加鍵盤事件監聽器
    document.addEventListener('keydown', handleKeyPress);
    
    // 添加滑鼠滾輪事件監聽器
    document.addEventListener('wheel', handleWheel);
    
    // 添加觸控事件監聽器
    let startY = 0;
    document.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', (e) => {
        const endY = e.changedTouches[0].clientY;
        const diff = startY - endY;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    });
}

// 顯示指定投影片
function showSlide(index) {
    if (index < 0 || index >= totalSlides) return;
    
    // 隱藏所有投影片
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    
    // 顯示當前投影片
    slides[index].style.display = 'flex';
    currentSlide = index;
    
    // 更新進度條
    updateProgressBar();
}

// 下一張投影片
function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        showSlide(currentSlide + 1);
    }
}

// 上一張投影片
function prevSlide() {
    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    }
}

// 處理鍵盤按鍵
function handleKeyPress(e) {
    switch(e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
            e.preventDefault();
            nextSlide();
            break;
        case 'ArrowLeft':
        case 'ArrowUp':
            e.preventDefault();
            prevSlide();
            break;
        case 'Home':
            e.preventDefault();
            showSlide(0);
            break;
        case 'End':
            e.preventDefault();
            showSlide(totalSlides - 1);
            break;
        case 'Escape':
            e.preventDefault();
            logout();
            break;
    }
}

// 處理滑鼠滾輪
function handleWheel(e) {
    e.preventDefault();
    
    if (e.deltaY > 0) {
        nextSlide();
    } else {
        prevSlide();
    }
}

// 更新進度條
function updateProgressBar() {
    const progressBar = document.querySelector('.progress-fill');
    if (progressBar) {
        const progress = ((currentSlide + 1) / totalSlides) * 100;
        progressBar.style.width = progress + '%';
    }
}

// 登出功能
function logout() {
    if (confirm('確定要登出嗎？')) {
        // 清除 sessionStorage
        sessionStorage.clear();
        
        // 重定向到登入頁面
        window.location.href = 'login.html';
    }
}

// 當頁面載入完成時初始化簡報
document.addEventListener('DOMContentLoaded', initPresentation);

// 如果頁面已經載入完成，直接初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPresentation);
} else {
    initPresentation();
}


},{}]},{},[1]);
