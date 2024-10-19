(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=c(t);fetch(t.href,e)}})();async function a(){let o="";o=(await(await fetch("https://fakestoreapi.com/products")).json()).map(r=>`<div class="product">
          <h1>${r.title}</h1>
          <img src=${r.image} alt="product">
          <div class="description">
          ${r.description}
          </div>
          <div class="price">${r.price}</div>
          <div class="category">category: ${r.category}</div>
          <div class="rating">
            <div class="rate">rate: ${r.rating.rate}</div>
            <div class="count">count: ${r.rating.count}</div>
          </div>
          <a href="#" class="btn">buy now</a>
        </div>`),document.querySelector("#products").insertAdjacentHTML("afterbegin",o.join(""))}a();
