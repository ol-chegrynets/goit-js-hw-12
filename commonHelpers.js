import{a as L,S as w,i as b}from"./assets/vendor-b0d10f48.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();async function h(e,o){const s="https://pixabay.com/api/",l={key:"44531752-ad7ff84ad7be874d52dfce5ce",q:e,per_page:15,page:o,image_type:"photo",orientation:"horizontal",safesearch:!0};try{const{data:t}=await L.get(s,{params:l});return console.log(t),t}catch(t){console.error("Error fetching photos:",t)}}function p(e){return e.map(M).join("")}function M(e){return`<li class="gallery-item">
  <a href="${e.largeImageURL}" class="gallery-item-link"
    ><img
      class="gallery-item-img"
      src="${e.webformatURL}"
      alt="${e.tags}"
      width="360"
  /></a>
  <ul class="photo-info-list">
    <li class="photo-info-item">
      <p class="photo-data-name">Likes</p>
      <p class="photo-data">${e.likes}</p>
    </li>
    <li class="photo-info-item">
      <p class="photo-data-name">Views</p>
      <p class="photo-data">${e.views}</p>
    </li>
    <li class="photo-info-item">
      <p class="photo-data-name">Comments</p>
      <p class="photo-data">${e.comments}</p>
    </li>
    <li class="photo-info-item">
      <p class="photo-data-name">Downloads</p>
      <p class="photo-data">${e.downloads}</p>
    </li>
  </ul>
</li>`}const v="/goit-js-hw-12/assets/close-06de2d57.svg",r={searchForm:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")},m=new w(".gallery a",{captionsData:"alt",captionDelay:350});let c="",n=1,g=1;const S=15;r.searchForm.addEventListener("submit",P);async function P(e){if(e.preventDefault(),c=e.target.elements.searchField.value.trim(),n=1,c===""){r.gallery.innerHTML="",i("You forgot enter data for search","#ffa000");return}u(r.loader);try{const{totalHits:o,hits:s}=await h(c,n);s.length===0&&(r.gallery.innerHTML="",i("Sorry, there are no images matching your search query. Please try again!","#EF4040")),g=Math.ceil(o/S);const l=p(s);r.gallery.innerHTML=l,m.refresh()}catch(o){console.log(o),i("An error occurred while fetching photos. Please try again later.","#EF4040")}finally{r.searchForm.reset(),f(r.loader)}y()}r.loadMoreBtn.addEventListener("click",B);async function B(){u(r.loader),n++;try{const{hits:e}=await h(c,n),o=p(e);r.gallery.insertAdjacentHTML("beforeend",o),m.refresh(),E()}catch(e){console.log(e),i("An error occurred while fetching photos. Please try again later.","#EF4040")}finally{f(r.loader)}y()}function i(e,o){b.show({message:e,position:"topRight",backgroundColor:o,iconUrl:v,messageColor:"#fff",theme:"dark",maxWidth:"350px"})}function y(){n>=g?(f(r.loadMoreBtn),i("We're sorry, but you've reached the end of search results.","#ffa000"),r.searchForm.reset()):n>1&&u(r.loadMoreBtn)}function f(e){e.classList.add("visually-hidden")}function u(e){e.classList.remove("visually-hidden")}function E(){const o=r.gallery.children[0].getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
