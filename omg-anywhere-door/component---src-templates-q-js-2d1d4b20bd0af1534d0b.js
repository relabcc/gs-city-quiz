(self.webpackChunkstyled_gatsby_starter=self.webpackChunkstyled_gatsby_starter||[]).push([[171],{6767:function(e,t,n){"use strict";n.d(t,{E:function(){return m}});var r=n(2543),a=n(6299),i=n(4526),o=n(4667),c=n(7294),l=n(4055),u=n(4059);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var d=c.forwardRef((function(e,t){var n=e.htmlWidth,r=e.htmlHeight,a=e.alt,i=f(e,["htmlWidth","htmlHeight","alt"]);return c.createElement("img",s({width:n,height:r,ref:t,alt:a},i))})),m=(0,r.G)((function(e,t){var n=e.fallbackSrc,r=e.fallback,o=e.src,m=e.align,p=e.fit,g=e.loading,h=e.ignoreFallback,b=e.crossOrigin,v=f(e,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),w=null!=g||h,y=function(e){var t=e.src,n=e.srcSet,r=e.onLoad,a=e.onError,i=e.crossOrigin,o=e.sizes,s=e.ignoreFallback,f=(0,c.useState)("pending"),d=(0,l.Z)(f,2),m=d[0],p=d[1];(0,c.useEffect)((function(){p(t?"loading":"pending")}),[t]);var g=(0,c.useRef)(),h=(0,c.useCallback)((function(){if(t){b();var e=new Image;e.src=t,i&&(e.crossOrigin=i),n&&(e.srcset=n),o&&(e.sizes=o),e.onload=function(e){b(),p("loaded"),null==r||r(e)},e.onerror=function(e){b(),p("failed"),null==a||a(e)},g.current=e}}),[t,i,n,o,r,a]),b=function(){g.current&&(g.current.onload=null,g.current.onerror=null,g.current=null)};return(0,u.G)((function(){if(!s)return"loading"===m&&h(),function(){b()}}),[m,h,s]),s?"loaded":m}(s({},e,{ignoreFallback:w})),x=s({ref:t,objectFit:p,objectPosition:m},w?v:(0,i.CE)(v,["onError","onLoad"]));return"loaded"!==y?r||c.createElement(a.m$.img,s({as:d,className:"chakra-image__placeholder",src:n},x)):c.createElement(a.m$.img,s({as:d,src:o,crossOrigin:b,loading:g,className:"chakra-image"},x))}));o.Ts&&(m.displayName="Image")},2437:function(e,t,n){"use strict";n.d(t,{o:function(){return s}});var r=n(2543),a=n(6299),i=n(5587),o=n(8950),c=n(4667),l=n(7294);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=(0,r.G)((function(e,t){var n=e.ratio,r=void 0===n?4/3:n,c=e.children,s=e.className,f=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["ratio","children","className"]),d=l.Children.only(c),m=(0,i.cx)("chakra-aspect-ratio",s);return l.createElement(a.m$.div,u({ref:t,position:"relative",className:m,_before:{height:0,content:'""',display:"block",paddingBottom:(0,o.XQ)(r,(function(e){return 1/e*100+"%"}))},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},f),d)}));c.Ts&&(s.displayName="AspectRatio")},8950:function(e,t,n){"use strict";n.d(t,{XQ:function(){return i}});var r=n(4667),a=n(4526);Object.freeze(["base","sm","md","lg","xl","2xl"]);function i(e,t){return(0,r.kJ)(e)?e.map((function(e){return null===e?null:t(e)})):(0,r.Kn)(e)?(0,a.Yd)(e).reduce((function(n,r){return n[r]=t(e[r]),n}),{}):null!=e?t(e):null}},1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(a),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function l(e){return e&&e.map((function(e,t){return r.createElement(e.tag,o({key:t},e.attr),l(e.child))}))}function u(e){return function(t){return r.createElement(s,o({attr:o({},e.attr)},t),l(e.child))}}function s(e){var t=function(t){var n,a=e.attr,i=e.size,l=e.title,u=c(e,["attr","size","title"]),s=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}},918:function(e,t,n){"use strict";var r=n(7294),a=n(9947);t.Z=function(e,t,n){if(!a.jU)return[t,function(){}];var i=(0,r.useState)((function(){try{var r=sessionStorage.getItem(e);return"string"!=typeof r?(sessionStorage.setItem(e,n?String(t):JSON.stringify(t)),t):n?r:JSON.parse(r||"null")}catch(i){return t}})),o=i[0],c=i[1];return(0,r.useEffect)((function(){try{var t=n?String(o):JSON.stringify(o);sessionStorage.setItem(e,t)}catch(i){}})),[o,c]}},8020:function(e,t,n){"use strict";n.d(t,{g:function(){return l}});var r=n(1469),a=n.n(r),i=n(7361),o=n.n(i),c=n(7294),l=function(e){var t="undefined"!=typeof window&&o()(window,"Modernizr.webp");if(!a()(e))return(null==e?void 0:e.default)||e;var n=t?e[0]:e[1];return(null==n?void 0:n.default)||n};t.Z=function(e){return(0,c.useMemo)((function(){return l(e)}),[e])}},4253:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ne}});var r=n(1401),a=n(5444),i=n(7294),o=n(7690),c=n(5708),l=n(494),u=n(918),s=n(1779),f=n(6162),d=n.n(f),m=n(3750),p=n(5230),g=n(2437),h=n(2543),b=n(4667),v=n(7242);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var y=(0,h.G)((function(e,t){var n=e.icon,r=e.children,a=e.isRound,o=e["aria-label"],c=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["icon","children","isRound","aria-label"]),l=n||r,u=i.isValidElement(l)?i.cloneElement(l,{"aria-hidden":!0,focusable:!1}):null;return i.createElement(v.z,w({padding:"0",borderRadius:a?"full":void 0,ref:t,"aria-label":o},c),u)}));b.Ts&&(y.displayName="IconButton");var x=n(132),E=n(2359),k=n(466),Z=n(1531),O=n(1469),j=n.n(O),S=n(928),C=n.n(S),q=n(6767),N=["src","alt"],_={gif:"image/gif",jpeg:"image/jpeg",jpg:"image/jpeg",png:"image/png",tiff:"image/tiff",tif:"image/tiff",webp:"image/webp"},I=/data:(\w+\/\w+);base64/,P=(0,i.forwardRef)((function(e,t){var n=e.src,r=e.alt,a=(0,Z.Z)(e,N),o=(0,i.useMemo)((function(){return j()(n)?{sources:n.map((function(e){var t=I.exec(e),n=t?t[1]:_[C()(e.split("."))];return{srcSet:e,type:n}})),fallback:C()(n)}:null}),[n]);return j()(n)?i.createElement(q.E,Object.assign({as:"picture"},a,{ref:t}),o.sources.map((function(e,t){return i.createElement("source",Object.assign({key:t},e))})),i.createElement("img",{src:o.fallback,alt:r})):i.createElement(q.E,Object.assign({src:n,alt:r},a,{ref:t}))}));P.defaultProps={width:"100%"},P.displayName="Image";var z,W=P,Q=n(3941),F=n(9370),J=n(3347),M=n(8126),A=n(4774),R=n(545),T=JSON.parse('{"istanbul":[[12,20,0],[12,0,8],[20,12,0],[16,0,8],[20,0,4],[20,8,0]],"hawaii":[[16,0,8],[16,0,12],[20,4,0],[4,0,16],[8,4,20],[20,12,0]],"ibiza":[[12,0,16],[12,0,4],[20,8,0],[12,0,20],[16,4,8],[16,12,0]],"amsterdam":[[0,16,8],[0,4,12],[0,20,8],[8,20,4],[0,16,8],[12,20,0]],"nice":[[8,0,16],[0,8,16],[8,16,0],[0,16,12],[0,12,20],[16,8,0]],"iceland":[[8,16,4],[0,16,4],[0,8,20],[16,8,0],[20,8,0],[0,8,20]],"moscow":[[20,12,0],[20,8,0],[12,8,4],[20,0,4],[20,0,8],[4,0,20]],"stockholm":[[4,12,8],[4,16,8],[8,16,4],[20,0,4],[0,4,20],[4,20,8]],"munich":[[8,20,0],[0,20,4],[0,16,8],[12,20,4],[8,12,0],[0,16,12]],"nyc":[[20,4,0],[16,12,0],[4,8,20],[12,0,4],[20,0,8],[12,0,20]]}'),B=n(7364),G=[[n(8487).Z,n(8895).Z],[n(3286).Z,n(4478).Z],[n(7598).Z,n(6078).Z],[n(7879).Z,n(7383).Z],[n(1865).Z,n(896).Z],[n(4205).Z,n(7381).Z]],L={1:i.createElement(E.S,{alt:"Q1",src:"../image/q1.png",layout:"fullWidth",loading:"lazy",placeholder:"dominantColor",formats:["auto"],__imageData:n(6894)}),2:i.createElement(g.o,{ratio:768/599},i.createElement(W,{alt:"Q2",src:G[1]})),3:i.createElement(g.o,{ratio:768/599},i.createElement(W,{alt:"Q3",src:G[2]})),4:i.createElement(g.o,{ratio:768/599},i.createElement(W,{alt:"Q4",src:G[3]})),5:i.createElement(g.o,{ratio:768/599},i.createElement(W,{alt:"Q5",src:G[4]})),6:i.createElement(g.o,{ratio:768/599},i.createElement(W,{alt:"Q6",src:G[5]}))},D=Object.values(T),X=Object.keys(T),$=function(e){var t=e.data,n=e.pageContext,r=n.id,o=n.isLast,l=n.length,u=e.onNext,s=e.onPrev,f=(0,i.useState)(),g=f[0],h=f[1],b=(0,i.useState)(),v=b[0],w=b[1],E=(0,p.useToken)("colors",["custom.teal"])[0],Z=(0,c.u6)(),O=Z.values,j=Z.setFieldValue,S=(0,i.useRef)(),C=(0,i.useCallback)((function(e){var t=O.answers.slice(0,5).concat(e);h(!0);var n=D.reduce((function(e,n){var r=n.reduce((function(e,n,r){return e+=n[t[r]]||0}),0);return e.push(r),e}),[]),r=n.reduce((function(e,t,r){return t===d()(n)&&e.push(r),e}),[]),a=X[r[Math.floor(Math.random()*r.length)]];j("points",d()(n)),w(a)}),[O,j]);return(0,i.useEffect)((function(){v&&setTimeout((function(){S.current&&S.current.querySelector("a").click()}))}),[v]),i.createElement(i.Fragment,null,i.createElement(J.Z,{alignItems:"flex-end",justifyContent:"space-around"},i.createElement(Q.Z,{width:(0,A.jW)("100%","442px")},i.createElement(J.Z,{pb:"0.25em",alignItems:"center",justify:"space-between",borderBottom:"1px solid",borderColor:"custom.borderGray"},i.createElement(y,{as:"1"===r&&function(e){return i.createElement(a.Link,Object.assign({to:"/"},e))},w:"1.5em",h:"1.5em",mr:"0.25em",minWidth:"auto",bg:"transparent",color:"custom.darkBlue",icon:i.createElement(x.J,{as:m.Ao2,w:6,h:6}),isDisabled:g,_hover:{bg:"transparent"},onClick:function(){"1"!==r&&s()}}),i.createElement(F.Z,{fontSize:"1.5rem",letterSpacing:"0.125em",fontFamily:"Flama",color:"lightGray"},i.createElement(F.Z.Inline,{color:"gray"},r),"/",l)),i.createElement(F.Z,{mt:"0.5em",fontWeight:"500",color:"custom.darkBlue",fontSize:"1.125em"},t.question),i.createElement(Q.Z,{pt:(0,A.jW)("1em","3em"),px:"9%"},L[r]),i.createElement(Q.Z,null,t.options.map((function(e,t){return i.createElement(Q.Z,{as:k.E.div,whileTap:{scale:1.1},mt:t&&"1em",key:t},i.createElement(M.Z,{onClick:function(e){o||u(),(0,R.t6)(r,t),j("answers."+(r-1),t),o&&C(t)},width:"100%",isDisabled:g,isActive:O.answers[+r-1]===t,_hover:{bg:(0,A.jW)("custom.gray","custom.teal")},_active:{bg:"custom.teal"}},e))}))))),o&&i.createElement(Q.Z.Absolute,{opacity:"0",width:"0",height:"0",overflow:"hidden",ref:S},i.createElement(B.Z,{tabIndex:"-1",hex:E,to:"/result/"+v})))},H=n(6810),V=n(8400),K=n.n(V),U=n(8020),Y=function(e){return new Promise((function(t){var n=new Image;n.onload=function(){return setTimeout(t)},function(){var e=document.getElementById("re-image-preloader");return e||((e=document.createElement("div")).setAttribute("id","re-image-preloader"),e.style.position="absolute",e.style.top="-9999px",e.style.left="-9999px",e.style.zIndex="-999",e.style.width="1px",document.body.appendChild(e)),e}().appendChild(n),n.src=j()(e)?(0,U.g)(e):(null==e?void 0:e.default)||e}))},ee=function(e){if(j()(e)){var t=K()(e.filter(Boolean),6);return t.length>1?t.reduce((function(e,t){return e.then((function(){return Promise.all(t.map(Y))}))}),Promise.resolve()):Promise.all(e.map(Y))}return Y(e)},te=(0,l.Z)(s.Z)(z||(z=(0,r.Z)(["\n@media (min-height: 640px) and (min-width: 784px) {\n  .footer {\n    padding-top: 0px;\n    padding-bottom: 0px;\n    position: absolute;\n    transform: translateX(-50%);\n    background: transparent;\n  }\n}\n@media (max-height: 639px) {\n  .footer {\n    padding-top: 2em;\n    padding-bottom: 2em;\n  }\n}\n@media (min-height: 811px) and (min-width: 784px) {\n  height: 812px;\n}\n@media (min-height: 640px) and (max-width: 784px) {\n  .main-wrapper {\n    height: calc(100% - 56px);\n  }\n}\n@media (max-height: 639px) and (min-width: 784px) {\n  .main-wrapper {\n    height: auto;\n  }\n}\n"]))),ne=function(e){var t=e.data,n=e.pageContext.id,r=t.allQuestionsJson.nodes.length,l=n-1,s=(0,c.u6)().values,f=(0,u.Z)("view-home")[0],d=(0,i.useCallback)((function(e){setTimeout((function(){(0,a.navigate)("/q/"+(e+2))}),300)}),[]),m=(0,i.useCallback)((function(e){(0,a.navigate)("/q/"+e)}),[]);(0,i.useEffect)((function(){n<6&&ee([G[+n]])}),[n]);var p=(0,i.useMemo)((function(){return s.answers.length<n-1}),[n,s.answers.length]);(0,i.useEffect)((function(){!p&&f||/\/q\//.test(window.location.pathname)&&(0,a.navigate)("/")}),[p,f]);var g=(0,i.useMemo)((function(){return t.allQuestionsJson.nodes.map((function(e,t){return t===l&&i.createElement(o.xu,{bg:"white",key:e.id,px:"1.875em"},i.createElement($,{data:e,onNext:function(){return d(t)},onPrev:function(){return m(t)},pageContext:{id:e.id,length:r,isLast:t===r-1}}))}))}),[l,t.allQuestionsJson.nodes,d,m,r]);return p||!f?null:i.createElement(te,{bg:"white",title:"第"+(l+1)+"題",footerProps:{bg:"white",maxWidth:(0,A.jW)("auto","375px"),mx:"auto",position:"static",left:"50%",transform:"none",bottom:"2em",pb:"2em"}},i.createElement(H.Z,{className:"main-wrapper",height:(0,A.jW)("auto","100%"),maxWidth:(0,A.jW)("auto","375px"),pt:"1em",px:"0"},g))}},545:function(e,t,n){"use strict";n.d(t,{t6:function(){return r},ob:function(){return a}});var r=function(e,t){window.gtag&&window.gtag("event","select_content",{content_type:"Answer",item_id:"Q"+e+"-"+(t+1)})},a=function(e){window.gtag&&window.gtag("event","button_click",{btn_label:e})}},6029:function(e,t,n){var r=n(3448);e.exports=function(e,t,n){for(var a=-1,i=e.length;++a<i;){var o=e[a],c=t(o);if(null!=c&&(void 0===l?c==c&&!r(c):n(c,l)))var l=c,u=o}return u}},3325:function(e){e.exports=function(e,t){return e>t}},4259:function(e){e.exports=function(e,t,n){var r=-1,a=e.length;t<0&&(t=-t>a?0:a+t),(n=n>a?a:n)<0&&(n+=a),a=t>n?0:n-t>>>0,t>>>=0;for(var i=Array(a);++r<a;)i[r]=e[r+t];return i}},8400:function(e,t,n){var r=n(4259),a=n(6612),i=n(554),o=Math.ceil,c=Math.max;e.exports=function(e,t,n){t=(n?a(e,t,n):void 0===t)?1:c(i(t),0);var l=null==e?0:e.length;if(!l||t<1)return[];for(var u=0,s=0,f=Array(o(l/t));u<l;)f[s++]=r(e,u,u+=t);return f}},6557:function(e){e.exports=function(e){return e}},928:function(e){e.exports=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}},6162:function(e,t,n){var r=n(6029),a=n(3325),i=n(6557);e.exports=function(e){return e&&e.length?r(e,i,a):void 0}},554:function(e,t,n){var r=n(8601);e.exports=function(e){var t=r(e),n=t%1;return t==t?n?t-n:t:0}},8895:function(e,t,n){"use strict";t.Z=n.p+"static/q1-33076c3cd672da7a5d69853da1a732cd.png"},8487:function(e,t,n){"use strict";t.Z=n.p+"static/q1-7edf4f7f589f5f64e54c334bea9da334.webp"},4478:function(e,t,n){"use strict";t.Z=n.p+"static/q2-9e4a70df4fb8521fd55de4472dd4f9e2.png"},3286:function(e,t,n){"use strict";t.Z=n.p+"static/q2-b1f010be93b22bdbaf7eb0b78636eb0e.webp"},6078:function(e,t,n){"use strict";t.Z=n.p+"static/q3-9f7dd3f95f56311033d9df3b3137f031.png"},7598:function(e,t,n){"use strict";t.Z=n.p+"static/q3-dbab83a7db34c9eeb40239a85946e27f.webp"},7383:function(e,t,n){"use strict";t.Z=n.p+"static/q4-82f54154d7b5814e39e94d2fd1639fda.png"},7879:function(e,t,n){"use strict";t.Z=n.p+"static/q4-1e8492f09d964ce7fa6fb7d730682fc4.webp"},896:function(e,t,n){"use strict";t.Z=n.p+"static/q5-b10e4f8b617da320517c82314132251f.png"},1865:function(e,t,n){"use strict";t.Z=n.p+"static/q5-5b398bfcda23287ef7739f334f1a1691.webp"},7381:function(e,t,n){"use strict";t.Z=n.p+"static/q6-c136f39d28d603ac911aa53083a0acb5.png"},4205:function(e,t,n){"use strict";t.Z=n.p+"static/q6-a466b7699907abd2693febf300f9aca4.webp"},6894:function(e){"use strict";e.exports=JSON.parse('{"layout":"fullWidth","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/omg-anywhere-door/static/2e92246386d7b81319d6dd258bd28af8/7bf67/q1.png","srcSet":"/omg-anywhere-door/static/2e92246386d7b81319d6dd258bd28af8/fb6cf/q1.png 750w,\\n/omg-anywhere-door/static/2e92246386d7b81319d6dd258bd28af8/7a2d8/q1.png 1080w,\\n/omg-anywhere-door/static/2e92246386d7b81319d6dd258bd28af8/a7fc0/q1.png 1366w,\\n/omg-anywhere-door/static/2e92246386d7b81319d6dd258bd28af8/7bf67/q1.png 1525w","sizes":"100vw"},"sources":[]},"width":1,"height":0.7875409836065574}')}}]);
//# sourceMappingURL=component---src-templates-q-js-2d1d4b20bd0af1534d0b.js.map