import{i as d}from"./assets/vendor-ad859c2f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const h="/goit-js-hw-11/assets/bi_x-octagon-9b778eac.svg",c=document.querySelector(".form"),l=document.querySelector(".loader"),u=document.querySelector(".gallery");c.addEventListener("submit",n=>{n.preventDefault(),u.innerHTML="",l.classList.remove("is-hidden");const s=n.currentTarget.image_name.value;if(s.trim()!==""){let r=function(){return fetch(e).then(t=>{if(!t.ok)throw new Error("Error!");return t.json()}).catch(t=>{alert("Error while searching images!")}).finally(()=>{l.classList.add("is-hidden"),c.reset()})};const a="https://pixabay.com/api/",i=new URLSearchParams({key:"42515030-f0931f035bd772c998b8c15c1",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${a}?${i}`;setTimeout(()=>{r().then(t=>{t.hits.length===0&&d.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:h,position:"topRight",pauseOnHover:!0,timeout:3e3});const f=t.hits.slice(0,15);u.innerHTML=f.map(o=>`<li>
                <a href="${o.largeImageURL}"><img src="${o.webformatURL}" alt="${o.tags}"></a>
                <ul>
                    <li>
                        <h>Likes</h>
                        <p>${o.likes}</p>
                    </li>
                    <li>
                        <h>Views</h>
                        <p>${o.views}</p>
                    </li>                    
                    <li>
                        <h>Comments</h>
                        <p>${o.comments}</p>
                    </li>                    
                    <li>
                        <h>Downloads</h>
                        <p>${o.downloads}</p>
                    </li>
                </ul>
                </li>`).join("")})},2e3)}});
//# sourceMappingURL=commonHelpers.js.map
