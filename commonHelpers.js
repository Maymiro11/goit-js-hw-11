import{S as l}from"./assets/vendor-d5aa4654.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const u=new l(".gallery a",{scrollZoom:!1}),f=document.querySelector(".form"),c=document.querySelector(".gallery"),a=document.querySelector(".loader");f.addEventListener("submit",d);function m(t){const o="https://pixabay.com/api/?",n=new URLSearchParams({key:"42172991-e7a3268a8ccb87dfba8d5efbc",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=o+n;return fetch(s).then(e=>e.json())}function d(t){t.preventDefault();const o=document.querySelector('input[type="text"]').value.trim();o!==""&&(a.style.display="inline-block",m(o).then(n=>{n.hits.length===0?c.innerHTML="<p>Sorry, there are no images matching your search query. Please try again!</p>":(c.innerHTML=p(n.hits),u.refresh())}).catch(n=>console.error("Error fetching data:",n)).finally(()=>{a.style.display="none"}))}function p(t){return t.map(g).join("")}function g(t){return`<div class="card">
<a href="${t.largeImageURL}" data-lightbox="image">
    <img src="${t.webformatURL}" alt="${t.tags}">
</a>
<div class="details">
    <p><strong>Likes:</strong> ${t.likes}</p>
    <p><strong>Views:</strong> ${t.views}</p>
    <p><strong>Comments:</strong> ${t.comments}</p>
    <p><strong>Downloads:</strong> ${t.downloads}</p>
</div>
</div>`}
//# sourceMappingURL=commonHelpers.js.map
