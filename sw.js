if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const c=e=>i(e,r),d={module:{uri:r},exports:n,require:c};s[r]=Promise.all(a.map((e=>d[e]||c(e)))).then((e=>(l(...e),n)))}}define(["./workbox-d2983725"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"656b6f6783eb4b402835900695acd010"},{url:"assets/entire-396e4430.js",revision:"c62222ce2a62a1aa265b93ad6213abc8"},{url:"assets/entire-526b7677.js",revision:"5a14defc556d26a7e8092da6a917422c"},{url:"assets/entire-ea4834ce.js",revision:"884e5ef0404ad302415ea5c9c2407179"},{url:"assets/entire-legacy.97c4c91a.js",revision:null},{url:"assets/entire-legacy.c21bff94.js",revision:null},{url:"assets/entire-legacy.fbfeabd7.js",revision:null},{url:"assets/Erc1155-e3b3e26f.js",revision:"b01607ebc12cbdbd3a40882d0959a4d8"},{url:"assets/Erc1155-legacy.af2590d4.js",revision:null},{url:"assets/Erc721-06d68796.js",revision:"0ece22c05ff262c21507d53b414b5781"},{url:"assets/Erc721-legacy.df326043.js",revision:null},{url:"assets/index-157125a0.js",revision:"1cbee17b6fc190991b6ceace9a9453a2"},{url:"assets/index-27f812b0.js",revision:"b80873cdf87a082d30f289375b953035"},{url:"assets/index-2a6cb313.js",revision:"74d6676e3f902d2a1d65cd2c1fda472c"},{url:"assets/index-2a83d848.js",revision:"4e98c80cef07f5c0a8234bb17a3aa46c"},{url:"assets/index-2aa52b4e.css",revision:"969d8aeb1c802ec5e05b9d623a9fb5fd"},{url:"assets/index-31e3f2b0.js",revision:"cb6d1496ce854d03b0ab37e6536e9df2"},{url:"assets/index-51588c82.js",revision:"c11d43845b3b3c4fbb52ceacdd561a69"},{url:"assets/index-52ec58f3.js",revision:"b003e1389398bdeecf497bba17f05af2"},{url:"assets/index-63637872.js",revision:"58fccc7201d94baa19a08eeb98736ff0"},{url:"assets/index-6db2869a.js",revision:"f126d388462e0b75a052cdd9c0bfdfb9"},{url:"assets/index-7273221b.js",revision:"69f88457241d3054d169573370299e5c"},{url:"assets/index-7da022ff.js",revision:"6d9a36e696554ef9fe8b32c0387232ec"},{url:"assets/index-836700e0.js",revision:"a8dd9cad2d8c6f7700d9030dcbf7719c"},{url:"assets/index-931c74ee.js",revision:"730c8443a32e425bbc61010e6cf85809"},{url:"assets/index-9b6b46a6.js",revision:"857312ad555aa230f5415c17408497e7"},{url:"assets/index-a05ce4f7.js",revision:"090608b4aa39765cbfd1248b9a3210be"},{url:"assets/index-a3067f9f.js",revision:"dc64a294e2d0462f416fb887365efc49"},{url:"assets/index-a447201d.js",revision:"21261b7a1a2a530f2a15f83256dca9ef"},{url:"assets/index-b75117e3.js",revision:"16b6705b11e41f195adbc5bdd1fd98c7"},{url:"assets/index-bee00fea.js",revision:"88dd174a9d1ec1731132fb1c6959bbd3"},{url:"assets/index-c7144883.js",revision:"12b8c79d0e13b353310e5e034f855abc"},{url:"assets/index-c9eac15a.js",revision:"47fc59bce6c744b3fcbe282606f4d2bc"},{url:"assets/index-e13c8d95.js",revision:"0c7dfdff27212f08a378279f6022ae05"},{url:"assets/index-ec927e32.js",revision:"6aa0f66bc47474562c4a6e2e1b9ab8e7"},{url:"assets/index-f06ecf04.js",revision:"2680143e9cf1fbf864ac25935dd10487"},{url:"assets/index-f11a9738.js",revision:"65d3dd3808c5ce88d831914c0f60f23e"},{url:"assets/index-f1e870d5.js",revision:"19022bc0b7ef6fe5db3a98fa34a3be80"},{url:"assets/index-legacy.0ff54e64.js",revision:null},{url:"assets/index-legacy.12fcdc7e.js",revision:null},{url:"assets/index-legacy.1b3f933a.js",revision:null},{url:"assets/index-legacy.2392af5a.js",revision:null},{url:"assets/index-legacy.3a81747d.js",revision:null},{url:"assets/index-legacy.4757b06f.js",revision:null},{url:"assets/index-legacy.52ff03fe.js",revision:null},{url:"assets/index-legacy.56119f31.js",revision:null},{url:"assets/index-legacy.5e449b3e.js",revision:null},{url:"assets/index-legacy.621b84bc.js",revision:null},{url:"assets/index-legacy.655bb272.js",revision:null},{url:"assets/index-legacy.663c2972.js",revision:null},{url:"assets/index-legacy.6b7ecbfd.js",revision:null},{url:"assets/index-legacy.6bd40470.js",revision:null},{url:"assets/index-legacy.7ba7576a.js",revision:null},{url:"assets/index-legacy.7fd0df3e.js",revision:null},{url:"assets/index-legacy.8460688d.js",revision:null},{url:"assets/index-legacy.8e0293c2.js",revision:null},{url:"assets/index-legacy.9dd94d7a.js",revision:null},{url:"assets/index-legacy.bb5879c9.js",revision:null},{url:"assets/index-legacy.c695ce94.js",revision:null},{url:"assets/index-legacy.c757da5e.js",revision:null},{url:"assets/index-legacy.dc58f6b8.js",revision:null},{url:"assets/index-legacy.e383dbd7.js",revision:null},{url:"assets/index-legacy.ee83bdde.js",revision:null},{url:"assets/index-legacy.f59fe8a2.js",revision:null},{url:"assets/list-210d7ab2.js",revision:"457639c22accd5de51b2f8b86c9cffb9"},{url:"assets/list-44d98589.js",revision:"5fef015129647ea49a9e94ee13cf294a"},{url:"assets/list-47daaa82.js",revision:"a3f766c3ef513135c38335e56cb37bdc"},{url:"assets/list-533fec23.js",revision:"ca53d683e51f4fb6b20a0c6ca601a514"},{url:"assets/list-9f53a015.js",revision:"66af99cf3adb0d30be34bfb9b6fb716b"},{url:"assets/list-db61542b.js",revision:"7912cf64999ffc21fd04dfd94bae029e"},{url:"assets/list-legacy.394300bf.js",revision:null},{url:"assets/list-legacy.4b0fa330.js",revision:null},{url:"assets/list-legacy.7a9abc43.js",revision:null},{url:"assets/list-legacy.89950e7c.js",revision:null},{url:"assets/list-legacy.e2ca3511.js",revision:null},{url:"assets/list-legacy.f6348831.js",revision:null},{url:"assets/Locker-8ef30f6f.js",revision:"c8ecd825b6241815171679a3c019fa62"},{url:"assets/Locker-legacy.af9c6a62.js",revision:null},{url:"assets/Locker.codes-d3f42ed5.js",revision:"006e5a4daf6eca87e5671d3f73eed3c6"},{url:"assets/Locker.codes-legacy.d5ca7e1e.js",revision:null},{url:"assets/polyfills-legacy.024e4cb7.js",revision:null},{url:"assets/Resolver-4b5654b6.js",revision:"0e9bf4b92859b8d0677d198e147577dd"},{url:"assets/Resolver-legacy.716f46bb.js",revision:null},{url:"assets/Resolver.codes-ee4f74d3.js",revision:"dfc2119dfa40fdf2d9e1ae364f26be40"},{url:"assets/Resolver.codes-legacy.77c566ca.js",revision:null},{url:"assets/vendor-c36f6596.js",revision:"49bf48f083ed88d26c36b18318ec03ce"},{url:"assets/vendor-c8c15b27.js",revision:"c1f832e02cdd999cf3e9f790d49f61a0"},{url:"assets/vendor-legacy.1eac6803.js",revision:null},{url:"assets/vendor-legacy.5567aa4d.js",revision:null},{url:"index.html",revision:"656b6f6783eb4b402835900695acd010"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"bac32860718c5331438bb102ec9c76af"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
