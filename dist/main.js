!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let r=document.querySelector(".messages"),o=document.querySelector(".weather-icon"),i=document.querySelector(".temperature"),a=document.querySelector(".description"),c=document.querySelector(".search"),l=document.querySelector("#btn"),u=document.querySelector(".city"),s=document.querySelector(".country"),d=document.querySelector("#temp-switch"),p=document.querySelector(".unit");const f=e=>{let t=Math.floor(e.main.temp-237);o.innerHTML=`<img src='assets/icons/${e.weather[0].icon}.png'>`,i.innerHTML=`${t}`,p.innerHTML="<span>°C</span>",a.innerHTML=`${e.weather[0].description}`,u.innerHTML=e.name,s.innerHTML=`, ${e.sys.country}`},y={unit:"celsius",value:""},m=e=>{let t=e.coords.latitude,n=e.coords.longitude;fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${n}&APPID=67d0e0f98e9f6eed6c046ce44004ced6`).then(e=>e.json()).then(e=>{y.value=Math.floor(e.main.temp-237),f(e)}).catch(e=>{r.style.display="block",r.innerHTML=e})};l.addEventListener("click",()=>{r.style.display="none";let e=(()=>c.value)();fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=67d0e0f98e9f6eed6c046ce44004ced6`).then(e=>e.json()).then(e=>{y.value=Math.floor(e.main.temp-237),f(e)}).catch(e=>{r.style.display="block",r.innerHTML="could not process your request at this time, please try again later"})});const h=e=>{notificationElement.style.display="block",notificationElement.innerHTML="could not process your request at this time, please try again later"};d.addEventListener("click",()=>{if(null!=y.value)if("celsius"==y.unit){let e=(e=>9*e/5+32)(y.value);e=Math.floor(e),i.innerHTML=`${e}`,p.innerHTML="°<span>F</span>",y.unit="fahrenheit",d.innerHTML="View in Celsius"}else i.innerHTML=`${y.value}`,p.innerHTML="°<span>C</span>",y.unit="celsius",d.innerHTML="View in Fahrenheits"});navigator.geolocation?navigator.geolocation.getCurrentPosition(m,h):(r.style.display="block",r.innerHTML="error")}]);