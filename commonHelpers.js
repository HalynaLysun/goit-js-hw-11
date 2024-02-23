import{S as u,i as f}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const h="/goit-js-hw-11/assets/bi_x-octagon-9b778eac.svg";function m(s,o){o.innerHTML=s.map(t=>`<li>
                <a href="${t.largeImageURL}"><img src="${t.webformatURL}" alt="${t.tags}"></a>
                <ul>
                    <li>
                        <h>Likes</h>
                        <p>${t.likes}</p>
                    </li>
                    <li>
                        <h>Views</h>
                        <p>${t.views}</p>
                    </li>                    
                    <li>
                        <h>Comments</h>
                        <p>${t.comments}</p>
                    </li>                    
                    <li>
                        <h>Downloads</h>
                        <p>${t.downloads}</p>
                    </li>
                </ul>
                </li>`).join(""),new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function d(s,o,i){const t="https://pixabay.com/api/",e=new URLSearchParams({key:"42515030-f0931f035bd772c998b8c15c1",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),r=`${t}?${e}`;return console.log(r),fetch(r).then(n=>{if(!n.ok)throw new Error("Error!");return n.json()}).catch(n=>{alert("Error while searching images!")}).finally(()=>{o.classList.add("is-hidden"),i.reset()})}const a=document.querySelector(".form"),l=document.querySelector(".loader"),c=document.querySelector(".gallery");a.addEventListener("submit",s=>{s.preventDefault(),c.innerHTML="",l.classList.remove("is-hidden");const o=s.currentTarget.image_name.value.trim();o!==""&&setTimeout(()=>{d(o,l,a).then(i=>{i.hits.length===0&&f.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:h,position:"topRight",pauseOnHover:!0,timeout:3e3});const t=i.hits.slice(0,15);m(t,c)})},1e3)});
//# sourceMappingURL=commonHelpers.js.map
