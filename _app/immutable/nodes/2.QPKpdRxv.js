import{t as e,a as n}from"../chunks/Dgj5og9d.js";import"../chunks/Beu_j2Vh.js";import{N as f,g as _,h as c,b as g,s as u,f as d}from"../chunks/ps3hRBSn.js";import{b as h}from"../chunks/DIPrhFQM.js";const b=Symbol("is custom element"),m=Symbol("is html");function v(r,s,t,o){var a=N(r);c&&(a[s]=r.getAttribute(s),r.nodeName==="LINK")||a[s]!==(a[s]=t)&&(t==null?r.removeAttribute(s):typeof t!="string"&&y(r).includes(s)?r[s]=t:r.setAttribute(s,t))}function N(r){return r.__attributes??(r.__attributes={[b]:r.nodeName.includes("-"),[m]:r.namespaceURI===f})}var p=new Map;function y(r){var s=p.get(r.nodeName);if(s)return s;p.set(r.nodeName,s=[]);for(var t,o=r,a=Element.prototype;a!==o;){t=g(o);for(var i in t)t[i].set&&s.push(i);o=_(o)}return s}var A=e("<h1>sveltekit-gh-pages</h1> <p>Deployed to GitHub Pages.</p> <a>About</a>",1);function L(r){var s=A(),t=u(d(s),4);v(t,"href",`${h??""}/about`),n(r,s)}export{L as component};
