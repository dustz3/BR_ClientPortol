import l from"https://cdn.jsdelivr.net/npm/reveal.js@5.1.0/dist/reveal.esm.js";import"https://cdn.jsdelivr.net/npm/reveal.js@5.1.0/dist/reveal.min.css";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const c=[{title:"服務說明與本頁目的",sections:[{heading:"本頁重點",bullets:["說明現行 SEO 維護服務的服務性質與定位","協助理解其適用情境與使用範圍","非比較、非評價既有服務提供者"]}]},{title:"服務的整體定位",sections:[{heading:"此類服務的核心定位",bullets:["基礎型 SEO 與網站維運代管","以穩定與持續運作為主要目標","協助降低內部技術與維護負擔"]},{heading:"關鍵理解",bullets:["非短期排名成長導向","非成效型行銷操作"]}]},{title:"此類服務通常涵蓋的事項",sections:[{heading:"常見服務內容",bullets:["關鍵字基礎設定與 On-page SEO","關鍵字排名追蹤與定期回報","主機、HTTPS、備份與基本資安維護","技術與 SEO 維運代管"]},{heading:"服務本質",bullets:["維持系統與搜尋結構正常運作"]}]},{title:"服務使用時需理解的邊界",sections:[{heading:"需先理解的幾個事實",bullets:["不以特定排名或流量作為保證","關鍵字調整 ≠ 成效必然提升","排名報表多為現況回報","若期待成長，通常需額外規劃"]}]},{title:"釐清方向與判斷框架",sections:[{heading:"在既有 SEO 基礎之上，可思考的問題",bullets:["目前追蹤的關鍵字，是否與實際業務高度相關？","排名變動後，是否有對應的調整行動？","SEO 是否實際影響內容或決策？"]},{heading:"進一步思考",bullets:["現階段期待：維持現況？還是主動成長？"]}]},{title:"重點整理與收斂說明",sections:[{heading:"核心結論",bullets:["重點不在於是否更換服務提供者","而在於目前服務是否符合現階段需求"]},{heading:"提醒",bullets:["在目標與角色尚未明確前","任何比較或調整都可能失焦"]}]}],a=document.querySelector(".slides");a.innerHTML=c.map(({title:r,sections:i})=>`
      <section>
        <h2>${r}</h2>
        ${i.map(({heading:n,bullets:s})=>`
              <div class="content-block">
                <p class="block-heading">${n}</p>
                <ul>
                  ${s.map(e=>`<li>${e}</li>`).join("")}
                </ul>
              </div>
            `).join("")}
      </section>
    `).join("");const u=new l({hash:!0,controls:!0,progress:!1,slideNumber:"c/t",navigationMode:"default",transition:"none"});u.initialize();
