!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/dist",t(t.s=1)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();n.RandomGenerator=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"randomInterger",value:function(){return Math.floor(100*Math.random())+1}},{key:"randomRange",value:function(e,n){return Math.floor(Math.random()*(n-e)+1)+e}}]),e}()},function(e,n,t){"use strict";t(3);var r=t(0),o=document.querySelector("#outputParagraph"),u=document.querySelector("#randomInt"),a=document.querySelector("#randomRange");u.addEventListener("click",function(){return o.textContent=r.RandomGenerator.randomInterger()}),a.addEventListener("click",function(){return o.textContent=r.RandomGenerator.randomRange(1,500)})},,function(e,n){}]);