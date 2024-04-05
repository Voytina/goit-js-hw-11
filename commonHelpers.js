import{S as f,i as l}from"./assets/vendor-0fc460d7.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function u(s){const i="https://pixabay.com/api/",r=new URLSearchParams({key:"43216493-c3660c641d44e8d68813e69e4",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),o=`${i}?${r}`;return fetch(o).then(e=>e.json()).catch(e=>{throw console.error("Error occurred while fetching images:",e),e})}function h(s){return s.map(({largeImageURL:i,webformatURL:r,tags:o,likes:e,views:t,comments:n,downloads:m})=>`<li class="list-item">
     <a class="gallery-link" href ="${i}">
     <img src="${r}" alt="${o}" class="gallery-image"
     </a>
     
      <ul class="information-list">
        <li class="item-information-container">
          <h2 class="main-info">Likes </h2>
            <p class="info">${e}</p>
          
        </li>
        <li class="item-information-container">
          <h2 class="main-info"> Views</h2>
            <p class="info">${t}</p>
          
        </li>
        <li class="item-information-container">
          <h2 class="main-info">Comments </h2>
            <p class="info">${n}</p>
          
        </li>
        <li class="item-information-container">
          <h2 class="main-info">Downloads </h2>
            <p class="info">${m}</p>
        </li>
      </ul>
   
    </li>`).join("")}const c=document.querySelector(".form"),d=document.querySelector(".list"),a=document.querySelector(".box__loader"),g=new f(".gallery-link",{captionsData:"alt",captionsDelay:250});c.addEventListener("submit",s=>{s.preventDefault(),a.classList.toggle("hidden");const i=c.elements.search.value.trim();if(i==="")return a.classList.toggle("hidden"),l.warning({message:"Please try again! Write something.",position:"topRight",color:"orange"});u(i).then(r=>{if(r.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),a.classList.toggle("hidden");return}a.classList.toggle("hidden");const o=h(r.hits);d.innerHTML=o,g.refresh()}).catch(r=>{a.classList.toggle("hidden"),console.error("Error",r)}),s.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
