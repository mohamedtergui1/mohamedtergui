if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let t={};const r=e=>s(e,c),f={module:{uri:c},exports:t,require:r};a[c]=Promise.all(i.map((e=>f[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-c2c0676f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Armel Munyaneza-RESUME.pdf",revision:"2afbb40203b845fd0052d7b123114925"},{url:"/Mistral_AI.png",revision:"b45d615ecd31b52c10658b8442edc299"},{url:"/_next/static/chunks/430-92604b4ce8f01765.js",revision:"m3p5fvDLHgizNu3GPWX2k"},{url:"/_next/static/chunks/717-af624858384ab802.js",revision:"m3p5fvDLHgizNu3GPWX2k"},{url:"/_next/static/chunks/8e1d74a4-b917a4b9a441fdf0.js",revision:"m3p5fvDLHgizNu3GPWX2k"},{url:"/_next/static/chunks/app/_not-found/page-c99911a0807ccb94.js",revision:"m3p5fvDLHgizNu3GPWX2k"},{url:"/_next/static/chunks/app/layout-a918ede37f027f12.js",revision:"m3p5fvDLHgizNu3GPWX2k"},{url:"/_next/static/chunks/app/page-6d014a6bc967beb4.js",revision:"m3p5fvDLHgizNu3GPWX2k"},{url:"/_next/static/chunks/fd9d1056-6402681317ea8432.js",revision:"m3p5fvDLHgizNu3GPWX2k"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"m3p5fvDLHgizNu3GPWX2k"},{url:"/_next/static/chunks/main-ac50e05dab33d253.js",revision:"m3p5fvDLHgizNu3GPWX2k"},{url:"/_next/static/chunks/main-app-8c35c244c3e2cfbe.js",revision:"m3p5fvDLHgizNu3GPWX2k"},{url:"/_next/static/chunks/pages/_app-72b849fbd24ac258.js",revision:"m3p5fvDLHgizNu3GPWX2k"},{url:"/_next/static/chunks/pages/_error-7ba65e1336b92748.js",revision:"m3p5fvDLHgizNu3GPWX2k"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-5a2affa4f51c4cef.js",revision:"m3p5fvDLHgizNu3GPWX2k"},{url:"/_next/static/css/eb0feaf3bd6a7d0b.css",revision:"eb0feaf3bd6a7d0b"},{url:"/_next/static/m3p5fvDLHgizNu3GPWX2k/_buildManifest.js",revision:"c155cce658e53418dec34664328b51ac"},{url:"/_next/static/m3p5fvDLHgizNu3GPWX2k/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/0484562807a97172-s.p.woff2",revision:"b550bca8934bd86812d1f5e28c9cc1de"},{url:"/_next/static/media/8888a3826f4a3af4-s.p.woff2",revision:"792477d09826b11d1e5a611162c9797a"},{url:"/_next/static/media/a1386beebedccca4-s.woff2",revision:"d3aa06d13d3cf9c0558927051f3cb948"},{url:"/_next/static/media/b957ea75a84b6ea7-s.p.woff2",revision:"0bd523f6049956faaf43c254a719d06a"},{url:"/_next/static/media/c3bc380753a8436c-s.woff2",revision:"5a1b7c983a9dc0a87a2ff138e07ae822"},{url:"/_next/static/media/eafabf029ad39a43-s.p.woff2",revision:"43751174b6b810eb169101a20d8c26f8"},{url:"/_next/static/media/f10b8e9d91f3edcb-s.woff2",revision:"63af7d5e18e585fad8d0220e5d551da1"},{url:"/_next/static/media/fe0777f1195381cb-s.woff2",revision:"f2a04185547c36abfa589651236a9849"},{url:"/chatbot.svg",revision:"e91dd23326eb5fcf734be2564c3bd88b"},{url:"/chrihdaba.webp",revision:"38b66bf6aee435f26bdafcb5f2b9e109"},{url:"/citronix.jpg",revision:"66ac42b4478f301c2a8ff311f5a1ab4b"},{url:"/ebankify.jpg",revision:"b6778a26551e06aca7751dfc7ce56d45"},{url:"/gahigi.jpeg",revision:"2526645d65716054a23c39226326d390"},{url:"/googlemaps.svg",revision:"b0ab5781a3538e96cb33136734516af9"},{url:"/groq.png",revision:"f77dfbcaf1311778f08ee591eeaff51d"},{url:"/icon512_maskable.png",revision:"e8d8ebf79b92c8c0438fc7f6a4fd3e6f"},{url:"/icon512_rounded.png",revision:"e27e0d2b405f55a29a7ebd566d182161"},{url:"/icons8-spring-boot-48.png",revision:"3166bf895c1cf47f40f2ee0e94e94e06"},{url:"/icons8-spring-boot-80.png",revision:"423b5fa3c79fe9871f8a63baaed7887a"},{url:"/java-script.png",revision:"44916721112468104cbc9e916e3d4b63"},{url:"/java.png",revision:"6c8962df7dc1f9a79a8cd76057e32ff7"},{url:"/lucia.svg",revision:"102d88158507496a9120ecf557687fd7"},{url:"/manifest.json",revision:"52f073f58675be7c77126b6ed9437884"},{url:"/mark8.png",revision:"81c057228074a00f4c721a9b387284d2"},{url:"/mohamed_-tergui.pdf",revision:"ce964cd6962ddfd67f63575853c9288b"},{url:"/mohamed_tergui__cv java.pdf",revision:"aa15c7a4665723cfb4ddc6cfb9380ad7"},{url:"/mohamedtergui.jpg",revision:"fd3948b386268bac6bdd7921525575a9"},{url:"/mui.svg",revision:"b981a7f2d3401d748b527388a7262eb4"},{url:"/myschool.jpg",revision:"d8f112628e3aaa55b1cb1afb9eb5760f"},{url:"/mysql.png",revision:"69db6e0d5319a0fb747ff959313794a3"},{url:"/nestjs.svg",revision:"b116884163ec07618bc105663f4c83fe"},{url:"/nextdotjs.svg",revision:"8940008433bffc35af2046c4dd5763a7"},{url:"/ollama.svg",revision:"59818133b7b076471185fbb589205d83"},{url:"/photo.jpg",revision:"abd78c27187112f407c1728bc104c9f8"},{url:"/php-programming-language.png",revision:"c2ec7b1a45683d023a4dfe2dbe85e066"},{url:"/postgresql.svg",revision:"f764e24c539694c843ad2b39058da623"},{url:"/restaurantFinder.png",revision:"598be4bd6d98f9b71fb4366863f4804a"},{url:"/shadcnui.svg",revision:"74bc14d58535d2829d576a91b87749f7"},{url:"/streamlit.svg",revision:"72d182e43c18b36e625378f04b52f9bb"},{url:"/tailwindcss.svg",revision:"fd3cfb934b3b34c41d80e37a2369c5e8"},{url:"/taskflow.jpg",revision:"d44e949e567fc9e994570f6160af4929"},{url:"/ts.png",revision:"6a2fbbf0266890c613e6789f5f0dac26"},{url:"/uniconnect.png",revision:"79f9d17e865c2c97cf0c93895c5bd652"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/wiki.png",revision:"e01faad29240537b7a5946739da01baa"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
