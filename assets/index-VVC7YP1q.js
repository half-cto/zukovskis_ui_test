(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&f(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function f(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const r=document,l=window.location.pathname.split("/");let n="",m="";l.length==2?n=l[1]:(n=l[2],m=l[1]);const u=r.getElementById("/"+n);u&&(u.className="active-link");if(n=="comercials"||n=="movies"){let i=r.getElementById("/");i&&(i.className="active-link")}console.log(n);const p=Array.from(r.getElementsByTagName("a"));p.forEach(i=>{i.addEventListener("click",g)});function g(i){i.preventDefault();const o=i.target;if(o){let s=m+o.id;console.log("--------",s),window.location.pathname=s}}let c=r.getElementById("art-dir-subNav"),d=r.getElementById("/");d!=null&&d.classList.contains("active-link")&&c?c.className="subNav":c&&(c.className="hidden");
