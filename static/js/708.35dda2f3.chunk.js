/*! For license information please see 708.35dda2f3.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[708],{254:function(t,r,n){n.d(r,{Mm:function(){return p},SU:function(){return f},r2:function(){return l},sO:function(){return d},z1:function(){return h}});var e=n(861),o=n(243),i=n(686),a=n.n(i);function c(){c=function(){return t};var t={},r=Object.prototype,n=r.hasOwnProperty,e=Object.defineProperty||function(t,r,n){t[r]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(P){s=function(t,r,n){return t[r]=n}}function l(t,r,n,o){var i=r&&r.prototype instanceof h?r:h,a=Object.create(i.prototype),c=new E(o||[]);return e(a,"_invoke",{value:Z(t,n,c)}),a}function p(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(P){return{type:"throw",arg:P}}}t.wrap=l;var f={};function h(){}function d(){}function v(){}var y={};s(y,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(k([])));m&&m!==r&&n.call(m,i)&&(y=m);var x=v.prototype=h.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function b(t,r){function o(e,i,a,c){var u=p(t[e],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;e(this,"_invoke",{value:function(t,n){function e(){return new r((function(r,e){o(t,n,r,e)}))}return i=i?i.then(e,e):e()}})}function Z(t,r,n){var e="suspendedStart";return function(o,i){if("executing"===e)throw new Error("Generator is already running");if("completed"===e){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===e)throw e="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);e="executing";var u=p(t,r,n);if("normal"===u.type){if(e=n.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(e="completed",n.method="throw",n.arg=u.arg)}}}function L(t,r){var n=r.method,e=t.iterator[n];if(void 0===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var o=p(e,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,f;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function k(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function r(){for(;++e<t.length;)if(n.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return d.prototype=v,e(x,"constructor",{value:v,configurable:!0}),e(v,"constructor",{value:d,configurable:!0}),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(b.prototype),s(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(r,n,e,o,i){void 0===i&&(i=Promise);var a=new b(l(r,n,e,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),s(x,u,"Generator"),s(x,i,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),n=[];for(var e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},t.values=k,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(n,e){return a.type="throw",a.arg=t,r.next=n,e&&(r.method="next",r.arg=void 0),!!e}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),f},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),f}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}var u="c0ec3039a6ea9335ddc382eb1bd446f2",s="https://api.themoviedb.org/3",l="https://image.tmdb.org/t/p/w300/",p="https://via.placeholder.com/300x200/ccc/333?text=Not+Found+Image",f=function(){var t=(0,e.Z)(c().mark((function t(){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(s,"/movie/popular?api_key=").concat(u));case 3:return r=t.sent,n=r.data.results.slice(0,20),t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(0),console.error(t.t0),a().Notify.warning("Error fetching movies:",t.t0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(c().mark((function t(r){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&query=").concat(r));case 3:return n=t.sent,e=n.data.results.slice(0,20),t.abrupt("return",e);case 8:throw t.prev=8,t.t0=t.catch(0),console.error(t.t0),a().Notify.warning("Error searching movies:",t.t0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(s,"/movie/").concat(r,"?api_key=").concat(u));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(r){return t.apply(this,arguments)}}()},945:function(t,r,n){n.d(r,{Z:function(){return b}});n(791);var e,o,i,a,c,u,s=n(254),l=n(168),p=n(867),f=n(87),h=p.ZP.ul(e||(e=(0,l.Z)(["\n  margin: 0 auto;\n  list-style: none;\n  display: flex;\n  justify-content: center;\n  //flex-wrap: wrap;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 250px);\n  gap: 10px;\n  "]))),d=p.ZP.li(o||(o=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  border-radius: 15px;\n"]))),v=(0,p.ZP)(f.OL)(i||(i=(0,l.Z)(["\n  height: 200px;\n  border-radius: 15px;\n  \n"]))),y=p.ZP.img(a||(a=(0,l.Z)(["\nheight: 200px;\n  border-radius: 15px ;\n"]))),g=p.ZP.div(c||(c=(0,l.Z)(["\n  padding: 0 10px ;\n  display: flex;\n  position: relative;\n  bottom: 35px;\n  height: 35px;\n  border-radius: 0 0 15px 15px ;\n  background-color: rgba(0, 0, 0, 0.6);\n  "]))),m=p.ZP.p(u||(u=(0,l.Z)(["\n  margin: 0 auto;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 15px;\n  text-align: center;\n  font-size: 11px;\n\n"]))),x=n(950),w=n(184),b=function(t){var r=t.movies;return(0,w.jsx)(x.$,{children:(0,w.jsx)(h,{children:r.map((function(t){return null!==t.backdrop_path&&(0,w.jsx)(d,{children:(0,w.jsxs)(v,{to:"/movies/".concat(t.id),children:[(0,w.jsx)(y,{src:null!==t&&void 0!==t&&t.backdrop_path?s.r2+(null===t||void 0===t?void 0:t.backdrop_path):s.Mm,alt:(null===t||void 0===t?void 0:t.title)||(null===t||void 0===t?void 0:t.name)}),(0,w.jsx)(g,{children:(0,w.jsx)(m,{children:t.title})})]})},t.id)}))})})}},708:function(t,r,n){n.r(r),n.d(r,{default:function(){return m}});var e,o,i,a,c,u,s=n(439),l=n(791),p=n(254),f=n(168),h=n(867),d=h.ZP.h1(e||(e=(0,f.Z)(["\n  padding: 10px 0\n"]))),v=(h.ZP.ul(o||(o=(0,f.Z)(["\n  margin: 0 auto;\n  list-style: none;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  // display: grid;\n  // grid-template-columns: repeat(auto-fit, 250px);\n"]))),h.ZP.li(i||(i=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  border-radius: 15px;\n"]))),h.ZP.img(a||(a=(0,f.Z)(["\n  height: 100%;\n  border-radius: 15px ;\n"]))),h.ZP.div(c||(c=(0,f.Z)(["\n  position: relative;\n  bottom: 40px;\n  border-radius: 0 0 15px 15px ;\n  background-color: rgba(0, 0, 0, 0.6);\n"]))),h.ZP.p(u||(u=(0,f.Z)(["\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 0;\n  border-radius: 15px;\n  text-align: center;\n  font-size: 1.5 vw;\n\n"]))),n(950)),y=n(945),g=n(184);function m(){var t=(0,l.useState)([]),r=(0,s.Z)(t,2),n=r[0],e=r[1];return(0,l.useEffect)((function(){(0,p.SU)().then((function(t){e(t)})).catch((function(t){console.error(t)}))}),[]),(0,g.jsxs)(v.$,{children:[(0,g.jsx)(d,{children:"Trending today"}),(0,g.jsx)(y.Z,{movies:n})," "]})}},950:function(t,r,n){n.d(r,{$:function(){return i}});var e,o=n(168),i=n(867).ZP.section(e||(e=(0,o.Z)(["\n  text-align: center;\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 16px;\n  margin-top: 20px;\n"])))}}]);
//# sourceMappingURL=708.35dda2f3.chunk.js.map