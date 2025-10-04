(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// Dashboard 登入系統 JavaScript

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    // 載入客戶資料
    let clients = {};
    
    fetch('config/clients.json')
      .then(response => response.json())
      .then(data => {
        clients = data.clients;
      })
      .catch(error => {
        console.error('載入客戶資料失敗:', error);
        // 如果載入失敗，使用預設資料
        clients = {
          'kaiwei': {
            password: 'br08pj00625c08',
            projectPath: 'projects/kaiwei/index.html',
            displayName: '凱崴數位'
          }
        };
      });
    
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const username = document.getElementById('username').value.trim().toLowerCase();
      const password = document.getElementById('password').value.trim().toLowerCase();
      const errorMessage = document.getElementById('errorMessage');
      
      // 清除之前的錯誤訊息
      errorMessage.style.display = 'none';
      
      // 驗證客戶資料（大小寫不敏感）
      const client = clients[username];
      if (client && client.password.toLowerCase() === password) {
        // 登入成功，重定向到對應專案頁面
        window.location.href = client.projectPath;
      } else {
        // 登入失敗，顯示錯誤訊息
        errorMessage.textContent = '客戶名稱或案號錯誤，請重新輸入';
        errorMessage.style.display = 'block';
      }
    });
  }
});

},{}]},{},[1]);
