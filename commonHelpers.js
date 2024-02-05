import{S as l,i as u}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const f="/goit-js-hw-11/assets/izitoast-icon-172762f2.svg",g="/goit-js-hw-11/assets/izitoast-close-b4fe742b.svg",m=new l(".gallery a",{scrollZoom:!1}),c=document.querySelector(".form"),d=document.querySelector(".gallery"),a=document.querySelector(".loader");c.addEventListener("submit",y);function p(t){const r="https://pixabay.com/api/?",s=new URLSearchParams({key:"42172991-e7a3268a8ccb87dfba8d5efbc",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=r+s;return fetch(n).then(e=>e.json())}function y(t){t.preventDefault();const r=document.querySelector('input[type="text"]').value.trim();r!==""&&(a.style.display="inline-block",p(r).then(s=>{s.hits.length===0?(u.show({messageAlign:"center",message:"Sorry, there are no images matching <br> your search query. Please try again!",messageColor:"#FFFFFF",messageSize:"16px",position:"center",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",iconUrl:f,displayMode:"replace",close:!1,closeOnEscape:!0,pauseOnHover:!1,buttons:[[`<button type="button" style="background-color: transparent;"><img src=${g}></button>`,function(n,e){n.hide({transitionOut:"fadeOut"},e)}]]}),c.reset()):(d.innerHTML=h(s.hits),m.refresh())}).catch(s=>console.error("Error fetching data:",s)).finally(()=>{a.style.display="none"}))}function h(t){return t.map(b).join("")}function b(t){return`<li class="gallery-card">
<a href="${t.largeImageURL}" data-lightbox="image">
    <img class="gallery-image"
    src="${t.webformatURL}" alt="${t.tags}">
</a>
<div class="details">
    <p><strong>Likes:</strong> ${t.likes}</p>
    <p><strong>Views:</strong> ${t.views}</p>
    <p><strong>Comments:</strong> ${t.comments}</p>
    <p><strong>Downloads:</strong> ${t.downloads}</p>
</div>
</li>`}
//# sourceMappingURL=commonHelpers.js.map
