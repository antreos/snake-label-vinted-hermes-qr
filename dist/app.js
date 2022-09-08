/*! For license information please see app.js.LICENSE.txt */
(self.webpackChunksnake_label=self.webpackChunksnake_label||[]).push([[260],{680:(t,e,r)=>{"use strict";var n=r(716),o=r(495),a=r(299);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function c(){c=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",u=n.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return T()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var d={};function f(){}function p(){}function g(){}var m={};l(m,o,(function(){return this}));var v=Object.getPrototypeOf,w=v&&v(v(P([])));w&&w!==e&&r.call(w,o)&&(m=w);var y=g.prototype=f.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function I(t,e){function n(o,a,c,u){var l=h(t[o],t,a);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==i(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(d).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function P(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:T}}function T(){return{value:void 0,done:!0}}return p.prototype=g,l(y,"constructor",g),l(g,"constructor",p),p.displayName=l(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(I.prototype),l(I.prototype,a,(function(){return this})),t.AsyncIterator=I,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new I(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),l(y,u,"Generator"),l(y,o,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function u(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){u(a,n,o,i,c,"next",t)}function c(t){u(a,n,o,i,c,"throw",t)}i(void 0)}))}}a.GlobalWorkerOptions.workerSrc="./dist/pdf.worker.min.js";var s=r(729),h=!1;console.log("Application loaded. debug =",h);var d,f,p=document.getElementById("view");function g(){return(g=l(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:e=t.sent,s(e,document.getElementById("file-input").files[0].name.replace(".pdf","")+"-Label.pdf","application/pdf");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(){return v.apply(this,arguments)}function v(){return(v=l(c().mark((function t(){var e,r,n,a,i,u,l;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=function(t){return 72*t/300},u=function(t){return.03937007874*t*72},t.next=4,o.PDFDocument.create();case 4:return e=t.sent,r=l(d.width)+u(6),n=u(62),a=e.addPage([r,n]),t.next=9,e.embedPng(f);case 9:return i=t.sent,a.drawImage(i,{x:u(3),y:u(1.5),width:r-u(6),height:n-u(3)}),t.abrupt("return",e.save());case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(){d=(0,n.Z)(document.getElementById("label-type").value);var t=new FileReader;console.log("Reading file."),t.readAsArrayBuffer(document.getElementById("file-input").files[0]),t.onload=function(){var e=l(c().mark((function e(r){var n,o,i,u,l,s,h,g;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.getDocument)(t.result).promise;case 2:return n=e.sent,console.log("PDF loaded.",n),e.next=6,n.getPage(d.file.page);case 6:return o=e.sent,i=document.createElement("canvas"),u=o.getViewport({scale:4,rotation:d.file.rotation}),i.width=u.width,i.height=u.height,e.next=12,o.render({canvasContext:i.getContext("2d"),viewport:u}).promise;case 12:return l=new Image,s=new Promise((function(t){return l.onload=t})),l.src=i.toDataURL(),e.next=17,s;case 17:return e.next=19,new Promise((function(t){return setTimeout(t,100)}));case 19:h=document.createElement("canvas"),g=h.getContext("2d"),h.width=d.width,h.height=696,g.fillStyle="white",g.fillRect(0,0,h.width,h.height),g.strokeStyle="black",g.lineWidth=2,d.crop(h,g,l),console.log("Label cropped."),p.src=h.toDataURL(),p.hidden=buttons.hidden=!0,h.toBlob((function(t){var e=new FileReader;e.addEventListener("loadend",(function(){f=e.result,p.hidden=buttons.hidden=!1})),e.readAsArrayBuffer(t)}),"image/png"),console.log("Finished.");case 31:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}convertLabel.addEventListener("click",w,!1),downloadLabel.addEventListener("click",(function(){return g.apply(this,arguments)}),!1),downloadLabelIMG.addEventListener("click",(function(){s(f,document.getElementById("file-input").files[0].name.replace(".pdf","")+"-Label.png","image/png")}),!1)},716:(t,e,r)=>{"use strict";function n(t){switch(t){case"dhl-privat":return o;case"dhl-privat-international":return a;case"dhl-retoure":return i;case"hermes-privat-v102":return c;default:console.error("Unknown label type.")}}r.d(e,{Z:()=>n});var o={file:{type:"pdf",page:1,rotation:90},width:1606,crop:function(t,e,r){e.drawImage(r,1964,108,1124,92,0,12,890,73),e.drawImage(r,1964,210,785,625,0,95,580,465);var n=296;e.drawImage(r,2763,215,n,n,594,95,n,n),e.rotate(-Math.PI/2),e.drawImage(r,3075,240,20,190,-395,647,-20,190),e.rotate(Math.PI/2),e.drawImage(r,1964,933,1124,152,0,565,890,120),e.beginPath(),e.moveTo(910,12),e.lineTo(910,t.height-12),e.stroke();var o=676,a=320;e.drawImage(r,2198,1526,o,a,930,20,o,a),e.drawImage(r,2198,1940,o,a,930,364,o,a)}},a={file:{type:"pdf",page:1,rotation:90},width:1866,crop:function(t,e,r){e.drawImage(r,1964,108,1124,92,0,12,890,73),e.drawImage(r,1964,210,785,625,0,95,580,465);var n=296;e.drawImage(r,2763,215,n,n,594,95,n,n),e.rotate(-Math.PI/2),e.drawImage(r,3075,240,20,190,-395,647,-20,190),e.rotate(Math.PI/2),e.drawImage(r,2770,740,300,35,590,520,300,35),e.drawImage(r,1964,933,1124,152,0,565,890,120),e.beginPath(),e.moveTo(910,12),e.lineTo(910,t.height-12),e.stroke();var o=936,a=280;e.drawImage(r,1964,1422,o,70,930,15,o,70),e.drawImage(r,2068,1634,o,a,930,100,o,a),e.drawImage(r,2068,2048,o,a,930,404,o,a)}},i={file:{type:"pdf",page:1,rotation:90},width:1630,crop:function(t,e,r){e.drawImage(r,2020,85,500,70,0,12,450,63),e.drawImage(r,2780,85,250,70,425,12,225,63),e.drawImage(r,2020,162,720,200,0,90,648,180),e.drawImage(r,2020,435,720,270,0,280,648,243),e.beginPath(),e.moveTo(0,580),e.lineTo(650,580),e.stroke(),e.drawImage(r,2020,745,720,110,0,590,648,99),e.beginPath(),e.moveTo(665,12),e.lineTo(665,t.height-12),e.stroke();var n=950,o=240;e.drawImage(r,2030,1230,n,120,680,15,n,120),e.drawImage(r,2030,1460,n,o,680,180,n,o),e.drawImage(r,2030,1810,n,o,680,440,n,o)}},c={file:{type:"pdf",page:1,rotation:0},width:1701,crop:function(t,e,r){e.drawImage(r,185,180,915,45,20,20,915,45),e.drawImage(r,200,1115,770,350,20,80,770,350),e.drawImage(r,1625,165,485,80,40,460,364,60),e.drawImage(r,1100,280,350,95,130,540,313,85),e.rotate(Math.PI/2),e.drawImage(r,2140,350,70,1020,650,-20,35,-510),e.rotate(-Math.PI/2),e.drawImage(r,1100,425,580,260,810,100,493,221),e.drawImage(r,780,870,250,220,560,370,225,198),e.drawImage(r,1100,865,580,260,810,370,493,221),e.drawImage(r,1100,1245,580,40,810,630,493,34),e.drawImage(r,1850,1325,230,140,645,600,138,84),e.drawImage(r,1640,1330,110,140,560,600,66,84),e.drawImage(r,210,370,370,640,1320,28,370,640),e.lineWidth=4,e.beginPath(),e.moveTo(0,2),e.lineTo(this.width,2),e.stroke(),e.beginPath(),e.moveTo(0,t.height-2),e.lineTo(this.width,t.height-2),e.stroke(),e.beginPath(),e.moveTo(2,4),e.lineTo(2,t.height-4),e.stroke(),e.beginPath(),e.moveTo(this.width-2,4),e.lineTo(this.width-2,t.height-4),e.stroke()}}},414:()=>{},172:()=>{},1:()=>{},779:()=>{},558:()=>{},258:()=>{}},t=>{var e=e=>t(t.s=e);t.O(0,[660],(()=>(e(680),e(716))));t.O()}]);