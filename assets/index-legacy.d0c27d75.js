System.register(["./index-legacy.5ad5b141.js","./vendor-legacy.1eac6803.js"],(function(e,t){"use strict";var s,r,o,n,i;return{setters:[e=>{s=e.T,r=e.g},e=>{o=e.y,n=e.m,i=e.e}],execute:function(){var t=Object.defineProperty,a=Object.getOwnPropertyDescriptor,c=(e,s,r,o)=>{for(var n,i=o>1?void 0:o?a(s,r):s,c=e.length-1;c>=0;c--)(n=e[c])&&(i=(o?n(s,r,i):n(i))||i);return o&&i&&t(s,r,i),i};let l=class extends(s("")){constructor(){super(...arguments),this.icon=""}render(){return o`<strong class="block w-24 h-24 m-12 mx-auto" href="/"><img class="w-full h-full object-contain select-none pointer-events-none" src="${this.icon||"/assets/doid-15c8a698.svg"}"></strong><div class="my-8 text-center"><strong class="block"><slot name="h1"></slot></strong><slot name="msg"></slot></div>`}};c([n()],l.prototype,"icon",2),l=c([i("doid-symbol")],l);var d=Object.defineProperty,u=Object.getOwnPropertyDescriptor;let g=e("ViewHome",class extends(s("")){constructor(){super(...arguments),this.goto=e=>{const{token:t,uri:s,DOID:o}=e.detail;t.name?r(`/collection/${s}`):r(`/artist/${o.doid}`)}}render(){return o`<div class="home"><div class="dui-container"><doid-symbol icon="${"/assets/logo-26ba3c98.svg"}"><span slot="h1">ARTSCAN</span><p slot="msg">Authentic art, with Web3 artist signature</p></doid-symbol><div class="max-w-2xl mx-auto"><search-bar placeholder="Search by DOID artist signature/artwork" label="DOID of artist or artwork"></search-bar></div></div></div>`}});e("ViewHome",g=((e,t,s,r)=>{for(var o,n=r>1?void 0:r?u(t,s):t,i=e.length-1;i>=0;i--)(o=e[i])&&(n=(r?o(t,s,n):o(n))||n);return r&&n&&d(t,s,n),n})([i("view-home")],g))}}}));
