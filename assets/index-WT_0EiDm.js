(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const s=document,c=window.location.pathname.split("/");let n="",f="";c.length==2?n=c[1]:(n=c[2],f=c[1]);let o=s.getElementById("/"+n);(o==null?void 0:o.id)=="/"&&(o=s.getElementById("/comercials"));if(o){o.className="active-link";const t=s.getElementById("art-dir-subNav");if(t){let i=o.id;(i=="/"||i=="/comercials"||i=="/movies")&&(t.className="subNav")}}if(n=="comercials"||n=="movies"||n==""){let t=s.getElementById("/");t&&(t.className="active-link")}const m=Array.from(s.getElementsByTagName("a"));m.forEach(t=>{t.addEventListener("click",u)});function u(t){t.preventDefault();const i=t.target;if(i){let l=f+i.id;console.log("--------",l),window.location.pathname=l}}
