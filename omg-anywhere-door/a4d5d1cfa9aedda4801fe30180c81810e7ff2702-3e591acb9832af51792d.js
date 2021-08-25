/*! For license information please see a4d5d1cfa9aedda4801fe30180c81810e7ff2702-3e591acb9832af51792d.js.LICENSE.txt */
(self.webpackChunkstyled_gatsby_starter=self.webpackChunkstyled_gatsby_starter||[]).push([[760],{1885:function(t,e,i){"use strict";i.d(e,{o:function(){return c}});var n=i(2543),r=i(6299),o=i(4667),a=i(4526);Object.freeze(["base","sm","md","lg","xl","2xl"]);var s=i(5587),l=i(7294);function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}var c=(0,n.G)((function(t,e){var i,n,c=t.ratio,u=void 0===c?4/3:c,d=t.children,m=t.className,p=function(t,e){if(null==t)return{};var i,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||(r[i]=t[i]);return r}(t,["ratio","children","className"]),f=l.Children.only(d),v=(0,s.cx)("chakra-aspect-ratio",m);return l.createElement(r.m$.div,h({ref:e,position:"relative",className:v,_before:{height:0,content:'""',display:"block",paddingBottom:(i=u,n=function(t){return 1/t*100+"%"},(0,o.kJ)(i)?i.map((function(t){return null===t?null:n(t)})):(0,o.Kn)(i)?(0,a.Yd)(i).reduce((function(t,e){return t[e]=n(i[e]),t}),{}):null!=i?n(i):null)},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},p),f)}));o.Ts&&(c.displayName="AspectRatio")},7690:function(t,e,i){"use strict";i.d(e,{xu:function(){return h}});var n=i(6299),r=i(2543),o=i(4667),a=i(7294);function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var i,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||(r[i]=t[i]);return r}var h=(0,n.m$)("div");o.Ts&&(h.displayName="Box");var c=(0,r.G)((function(t,e){var i=t.size,n=t.centerContent,r=void 0===n||n,o=l(t,["size","centerContent"]),c=r?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return a.createElement(h,s({ref:e,boxSize:i,__css:s({},c,{flexShrink:0,flexGrow:0})},o))}));o.Ts&&(c.displayName="Square");var u=(0,r.G)((function(t,e){var i=t.size,n=l(t,["size"]);return a.createElement(c,s({size:i,ref:e,borderRadius:"9999px"},n))}));o.Ts&&(u.displayName="Circle")},2543:function(t,e,i){"use strict";i.d(e,{G:function(){return r}});var n=i(7294);function r(t){return n.forwardRef(t)}},6299:function(t,e,i){"use strict";i.d(e,{m$:function(){return m}});var n=i(4762),r=i(4526),o=i(4238),a=i(494),s=i(3089),l=new Set([].concat((0,s.Z)(n.propNames),["textStyle","layerStyle","apply","isTruncated","noOfLines","focusBorderColor","errorBorderColor","as","__css","css","sx"])),h=new Set(["htmlWidth","htmlHeight","htmlSize"]),c=function(t){return h.has(t)||!l.has(t)},u=i(7487);function d(t,e){if(null==t)return{};var i,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||(r[i]=t[i]);return r}var m=function(t,e){var i=null!=e?e:{},s=i.baseStyle,l=d(i,["baseStyle"]);l.shouldForwardProp||(l.shouldForwardProp=c);var h=function(t){var e=t.baseStyle;return function(t){var i=t.css,a=t.__css,s=t.sx,l=d(t,["theme","css","__css","sx"]),h=(0,r.lw)(l,(function(t,e){return(0,n.isStyleProp)(e)})),c=(0,o.Pu)(e,t),u=Object.assign({},a,c,(0,r.YU)(h),s),m=(0,n.css)(u)(t.theme);return i?[m,i]:m}}({baseStyle:s});return(0,a.Z)(t,l)(h)};u.t6.forEach((function(t){m[t]=m(t)}))},7487:function(t,e,i){"use strict";i.d(e,{t6:function(){return r},Lr:function(){return o}});var n=i(4526),r=["a","b","article","aside","blockquote","button","caption","cite","circle","code","dd","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","img","input","kbd","label","li","main","mark","nav","ol","p","path","pre","q","rect","s","svg","section","select","strong","small","span","sub","sup","table","tbody","td","textarea","tfoot","th","thead","tr","ul"];function o(t){return(0,n.CE)(t,["styleConfig","size","variant","colorScheme"])}},494:function(t,e,i){"use strict";i.d(e,{Z:function(){return v}});i(4362);var n=i(7294),r=i(4038),o=i(7548),a=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,s=(0,o.Z)((function(t){return a.test(t)||111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)<91})),l=i(5813),h=i(981),c=i(4418),u=s,d=function(t){return"theme"!==t},m=function(t){return"string"==typeof t&&t.charCodeAt(0)>96?u:d},p=function(t,e,i){var n;if(e){var r=e.shouldForwardProp;n=t.__emotion_forwardProp&&r?function(e){return t.__emotion_forwardProp(e)&&r(e)}:r}return"function"!=typeof n&&i&&(n=t.__emotion_forwardProp),n},f=function t(e,i){var o,a,s=e.__emotion_real===e,u=s&&e.__emotion_base||e;void 0!==i&&(o=i.label,a=i.target);var d=p(e,i,s),f=d||m(u),v=!f("as");return function(){var y=arguments,g=s&&void 0!==e.__emotion_styles?e.__emotion_styles.slice(0):[];if(void 0!==o&&g.push("label:"+o+";"),null==y[0]||void 0===y[0].raw)g.push.apply(g,y);else{0,g.push(y[0][0]);for(var b=y.length,w=1;w<b;w++)g.push(y[w],y[0][w])}var k=(0,l.w)((function(t,e,i){var r=v&&t.as||u,o="",s=[],p=t;if(null==t.theme){for(var y in p={},t)p[y]=t[y];p.theme=(0,n.useContext)(l.T)}"string"==typeof t.className?o=(0,h.f)(e.registered,s,t.className):null!=t.className&&(o=t.className+" ");var b=(0,c.O)(g.concat(s),e.registered,p);(0,h.M)(e,b,"string"==typeof r);o+=e.key+"-"+b.name,void 0!==a&&(o+=" "+a);var w=v&&void 0===d?m(r):f,k={};for(var x in t)v&&"as"===x||w(x)&&(k[x]=t[x]);return k.className=o,k.ref=i,(0,n.createElement)(r,k)}));return k.displayName=void 0!==o?o:"Styled("+("string"==typeof u?u:u.displayName||u.name||"Component")+")",k.defaultProps=e.defaultProps,k.__emotion_real=k,k.__emotion_base=u,k.__emotion_styles=g,k.__emotion_forwardProp=d,Object.defineProperty(k,"toString",{value:function(){return"."+a}}),k.withComponent=function(e,n){return t(e,(0,r.Z)({},i,n,{shouldForwardProp:p(k,n,!0)})).apply(void 0,g)},k}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(t){f[t]=f(t)}));var v=f},7766:function(t,e,i){t.exports=function t(e,i,n){function r(a,s){if(!i[a]){if(!e[a]){if(o)return o(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var h=i[a]={exports:{}};e[a][0].call(h.exports,(function(t){var i=e[a][1][t];return r(i||t)}),h,h.exports,t,e,i,n)}return i[a].exports}for(var o=void 0,a=0;a<n.length;a++)r(n[a]);return r}({1:[function(t,e,i){"use strict";var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function s(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(r){return!1}}e.exports=s()?Object.assign:function(t,e){for(var i,s,l=a(t),h=1;h<arguments.length;h++){for(var c in i=Object(arguments[h]))r.call(i,c)&&(l[c]=i[c]);if(n){s=n(i);for(var u=0;u<s.length;u++)o.call(i,s[u])&&(l[s[u]]=i[s[u]])}}return l}},{}],2:[function(t,e,i){(function(t){(function(){var i,n,r,o,a,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(i()-a)/1e6},n=t.hrtime,o=(i=function(){var t;return 1e9*(t=n())[0]+t[1]})(),s=1e9*t.uptime(),a=o-s):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)}).call(this,t("_process"))},{_process:3}],3:[function(t,e,i){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function l(t){if(n===setTimeout)return setTimeout(t,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}function h(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{return r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(t){n=a}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var c,u=[],d=!1,m=-1;function p(){d&&c&&(d=!1,c.length?u=c.concat(u):m=-1,u.length&&f())}function f(){if(!d){var t=l(p);d=!0;for(var e=u.length;e;){for(c=u,u=[];++m<e;)c&&c[m].run();m=-1,e=u.length}c=null,d=!1,h(t)}}function v(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];u.push(new v(t,e)),1!==u.length||d||l(f)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},{}],4:[function(t,e,n){(function(i){for(var n=t("performance-now"),r="undefined"==typeof window?i:window,o=["moz","webkit"],a="AnimationFrame",s=r["request"+a],l=r["cancel"+a]||r["cancelRequest"+a],h=0;!s&&h<o.length;h++)s=r[o[h]+"Request"+a],l=r[o[h]+"Cancel"+a]||r[o[h]+"CancelRequest"+a];if(!s||!l){var c=0,u=0,d=[],m=1e3/60;s=function(t){if(0===d.length){var e=n(),i=Math.max(0,m-(e-c));c=i+e,setTimeout((function(){var t=d.slice(0);d.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(c)}catch(i){setTimeout((function(){throw i}),0)}}),Math.round(i))}return d.push({handle:++u,callback:t,cancelled:!1}),u},l=function(t){for(var e=0;e<d.length;e++)d[e].handle===t&&(d[e].cancelled=!0)}}e.exports=function(t){return s.call(r,t)},e.exports.cancel=function(){l.apply(r,arguments)},e.exports.polyfill=function(){r.requestAnimationFrame=s,r.cancelAnimationFrame=l}}).call(this,void 0!==i.g?i.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"performance-now":2}],5:[function(t,e,i){"use strict";var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=t("raf"),a=t("object-assign"),s={propertyCache:{},vendors:[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],clamp:function(t,e,i){return e<i?t<e?e:t>i?i:t:t<i?i:t>e?e:t},data:function(t,e){return s.deserialize(t.getAttribute("data-"+e))},deserialize:function(t){return"true"===t||"false"!==t&&("null"===t?null:!isNaN(parseFloat(t))&&isFinite(t)?parseFloat(t):t)},camelCase:function(t){return t.replace(/-+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))},accelerate:function(t){s.css(t,"transform","translate3d(0,0,0) rotate(0.0001deg)"),s.css(t,"transform-style","preserve-3d"),s.css(t,"backface-visibility","hidden")},transformSupport:function(t){for(var e=document.createElement("div"),i=!1,n=null,r=!1,o=null,a=null,l=0,h=s.vendors.length;l<h;l++)if(null!==s.vendors[l]?(o=s.vendors[l][0]+"transform",a=s.vendors[l][1]+"Transform"):(o="transform",a="transform"),void 0!==e.style[a]){i=!0;break}switch(t){case"2D":r=i;break;case"3D":if(i){var c=document.body||document.createElement("body"),u=document.documentElement,d=u.style.overflow,m=!1;document.body||(m=!0,u.style.overflow="hidden",u.appendChild(c),c.style.overflow="hidden",c.style.background=""),c.appendChild(e),e.style[a]="translate3d(1px,1px,1px)",r=void 0!==(n=window.getComputedStyle(e).getPropertyValue(o))&&n.length>0&&"none"!==n,u.style.overflow=d,c.removeChild(e),m&&(c.removeAttribute("style"),c.parentNode.removeChild(c))}}return r},css:function(t,e,i){var n=s.propertyCache[e];if(!n)for(var r=0,o=s.vendors.length;r<o;r++)if(n=null!==s.vendors[r]?s.camelCase(s.vendors[r][1]+"-"+e):e,void 0!==t.style[n]){s.propertyCache[e]=n;break}t.style[n]=i}},l=30,h={relativeInput:!1,clipRelativeInput:!1,inputElement:null,hoverOnly:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!1,precision:1,onReady:null,selector:null},c=function(){function t(e,i){r(this,t),this.element=e;var n={calibrateX:s.data(this.element,"calibrate-x"),calibrateY:s.data(this.element,"calibrate-y"),invertX:s.data(this.element,"invert-x"),invertY:s.data(this.element,"invert-y"),limitX:s.data(this.element,"limit-x"),limitY:s.data(this.element,"limit-y"),scalarX:s.data(this.element,"scalar-x"),scalarY:s.data(this.element,"scalar-y"),frictionX:s.data(this.element,"friction-x"),frictionY:s.data(this.element,"friction-y"),originX:s.data(this.element,"origin-x"),originY:s.data(this.element,"origin-y"),pointerEvents:s.data(this.element,"pointer-events"),precision:s.data(this.element,"precision"),relativeInput:s.data(this.element,"relative-input"),clipRelativeInput:s.data(this.element,"clip-relative-input"),hoverOnly:s.data(this.element,"hover-only"),inputElement:document.querySelector(s.data(this.element,"input-element")),selector:s.data(this.element,"selector")};for(var o in n)null===n[o]&&delete n[o];a(this,h,n,i),this.inputElement||(this.inputElement=this.element),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.elementPositionX=0,this.elementPositionY=0,this.elementWidth=0,this.elementHeight=0,this.elementCenterX=0,this.elementCenterY=0,this.elementRangeX=0,this.elementRangeY=0,this.calibrationX=0,this.calibrationY=0,this.inputX=0,this.inputY=0,this.motionX=0,this.motionY=0,this.velocityX=0,this.velocityY=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onDeviceMotion=this.onDeviceMotion.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onMotionTimer=this.onMotionTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.windowWidth=null,this.windowHeight=null,this.windowCenterX=null,this.windowCenterY=null,this.windowRadiusX=null,this.windowRadiusY=null,this.portrait=!1,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),this.motionSupport=!!window.DeviceMotionEvent&&!this.desktop,this.orientationSupport=!!window.DeviceOrientationEvent&&!this.desktop,this.orientationStatus=0,this.motionStatus=0,this.initialise()}return n(t,[{key:"initialise",value:function(){void 0===this.transform2DSupport&&(this.transform2DSupport=s.transformSupport("2D"),this.transform3DSupport=s.transformSupport("3D")),this.transform3DSupport&&s.accelerate(this.element),"static"===window.getComputedStyle(this.element).getPropertyValue("position")&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)}},{key:"doReadyCallback",value:function(){this.onReady&&this.onReady()}},{key:"updateLayers",value:function(){this.selector?this.layers=this.element.querySelectorAll(this.selector):this.layers=this.element.children,this.layers.length||console.warn("ParallaxJS: Your scene does not have any layers."),this.depthsX=[],this.depthsY=[];for(var t=0;t<this.layers.length;t++){var e=this.layers[t];this.transform3DSupport&&s.accelerate(e),e.style.position=t?"absolute":"relative",e.style.display="block",e.style.left=0,e.style.top=0;var i=s.data(e,"depth")||0;this.depthsX.push(s.data(e,"depth-x")||i),this.depthsY.push(s.data(e,"depth-y")||i)}}},{key:"updateDimensions",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowCenterX=this.windowWidth*this.originX,this.windowCenterY=this.windowHeight*this.originY,this.windowRadiusX=Math.max(this.windowCenterX,this.windowWidth-this.windowCenterX),this.windowRadiusY=Math.max(this.windowCenterY,this.windowHeight-this.windowCenterY)}},{key:"updateBounds",value:function(){this.bounds=this.inputElement.getBoundingClientRect(),this.elementPositionX=this.bounds.left,this.elementPositionY=this.bounds.top,this.elementWidth=this.bounds.width,this.elementHeight=this.bounds.height,this.elementCenterX=this.elementWidth*this.originX,this.elementCenterY=this.elementHeight*this.originY,this.elementRangeX=Math.max(this.elementCenterX,this.elementWidth-this.elementCenterX),this.elementRangeY=Math.max(this.elementCenterY,this.elementHeight-this.elementCenterY)}},{key:"queueCalibration",value:function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)}},{key:"enable",value:function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=!1,window.addEventListener("deviceorientation",this.onDeviceOrientation),this.detectionTimer=setTimeout(this.onOrientationTimer,this.supportDelay)):this.motionSupport?(this.portrait=!1,window.addEventListener("devicemotion",this.onDeviceMotion),this.detectionTimer=setTimeout(this.onMotionTimer,this.supportDelay)):(this.calibrationX=0,this.calibrationY=0,this.portrait=!1,window.addEventListener("mousemove",this.onMouseMove),this.doReadyCallback()),window.addEventListener("resize",this.onWindowResize),this.raf=o(this.onAnimationFrame))}},{key:"disable",value:function(){this.enabled&&(this.enabled=!1,this.orientationSupport?window.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?window.removeEventListener("devicemotion",this.onDeviceMotion):window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize),o.cancel(this.raf))}},{key:"calibrate",value:function(t,e){this.calibrateX=void 0===t?this.calibrateX:t,this.calibrateY=void 0===e?this.calibrateY:e}},{key:"invert",value:function(t,e){this.invertX=void 0===t?this.invertX:t,this.invertY=void 0===e?this.invertY:e}},{key:"friction",value:function(t,e){this.frictionX=void 0===t?this.frictionX:t,this.frictionY=void 0===e?this.frictionY:e}},{key:"scalar",value:function(t,e){this.scalarX=void 0===t?this.scalarX:t,this.scalarY=void 0===e?this.scalarY:e}},{key:"limit",value:function(t,e){this.limitX=void 0===t?this.limitX:t,this.limitY=void 0===e?this.limitY:e}},{key:"origin",value:function(t,e){this.originX=void 0===t?this.originX:t,this.originY=void 0===e?this.originY:e}},{key:"setInputElement",value:function(t){this.inputElement=t,this.updateDimensions()}},{key:"setPosition",value:function(t,e,i){e=e.toFixed(this.precision)+"px",i=i.toFixed(this.precision)+"px",this.transform3DSupport?s.css(t,"transform","translate3d("+e+","+i+",0)"):this.transform2DSupport?s.css(t,"transform","translate("+e+","+i+")"):(t.style.left=e,t.style.top=i)}},{key:"onOrientationTimer",value:function(){this.orientationSupport&&0===this.orientationStatus?(this.disable(),this.orientationSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onMotionTimer",value:function(){this.motionSupport&&0===this.motionStatus?(this.disable(),this.motionSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onCalibrationTimer",value:function(){this.calibrationFlag=!0}},{key:"onWindowResize",value:function(){this.updateDimensions()}},{key:"onAnimationFrame",value:function(){this.updateBounds();var t=this.inputX-this.calibrationX,e=this.inputY-this.calibrationY;(Math.abs(t)>this.calibrationThreshold||Math.abs(e)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.motionX=this.calibrateX?e:this.inputY,this.motionY=this.calibrateY?t:this.inputX):(this.motionX=this.calibrateX?t:this.inputX,this.motionY=this.calibrateY?e:this.inputY),this.motionX*=this.elementWidth*(this.scalarX/100),this.motionY*=this.elementHeight*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.motionX=s.clamp(this.motionX,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.motionY=s.clamp(this.motionY,-this.limitY,this.limitY)),this.velocityX+=(this.motionX-this.velocityX)*this.frictionX,this.velocityY+=(this.motionY-this.velocityY)*this.frictionY;for(var i=0;i<this.layers.length;i++){var n=this.layers[i],r=this.depthsX[i],a=this.depthsY[i],l=this.velocityX*(r*(this.invertX?-1:1)),h=this.velocityY*(a*(this.invertY?-1:1));this.setPosition(n,l,h)}this.raf=o(this.onAnimationFrame)}},{key:"rotate",value:function(t,e){var i=(t||0)/l,n=(e||0)/l,r=this.windowHeight>this.windowWidth;this.portrait!==r&&(this.portrait=r,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.calibrationX=i,this.calibrationY=n),this.inputX=i,this.inputY=n}},{key:"onDeviceOrientation",value:function(t){var e=t.beta,i=t.gamma;null!==e&&null!==i&&(this.orientationStatus=1,this.rotate(e,i))}},{key:"onDeviceMotion",value:function(t){var e=t.rotationRate.beta,i=t.rotationRate.gamma;null!==e&&null!==i&&(this.motionStatus=1,this.rotate(e,i))}},{key:"onMouseMove",value:function(t){var e=t.clientX,i=t.clientY;if(this.hoverOnly&&(e<this.elementPositionX||e>this.elementPositionX+this.elementWidth||i<this.elementPositionY||i>this.elementPositionY+this.elementHeight))return this.inputX=0,void(this.inputY=0);this.relativeInput?(this.clipRelativeInput&&(e=Math.max(e,this.elementPositionX),e=Math.min(e,this.elementPositionX+this.elementWidth),i=Math.max(i,this.elementPositionY),i=Math.min(i,this.elementPositionY+this.elementHeight)),this.elementRangeX&&this.elementRangeY&&(this.inputX=(e-this.elementPositionX-this.elementCenterX)/this.elementRangeX,this.inputY=(i-this.elementPositionY-this.elementCenterY)/this.elementRangeY)):this.windowRadiusX&&this.windowRadiusY&&(this.inputX=(e-this.windowCenterX)/this.windowRadiusX,this.inputY=(i-this.windowCenterY)/this.windowRadiusY)}},{key:"destroy",value:function(){this.disable(),clearTimeout(this.calibrationTimer),clearTimeout(this.detectionTimer),this.element.removeAttribute("style");for(var t=0;t<this.layers.length;t++)this.layers[t].removeAttribute("style");delete this.element,delete this.layers}},{key:"version",value:function(){return"3.1.0"}}]),t}();e.exports=c},{"object-assign":1,raf:4}]},{},[5])(5)},1371:function(t,e,i){"use strict";var n=i(1885),r=i(7690),o=i(7294),a=i(2407),s=i(7766),l=i.n(s);e.Z=function(t){var e=t.images,i=t.width,s=t.height,h=(0,o.useRef)();return(0,o.useEffect)((function(){new(l())(h.current,{relativeInput:!0})}),[]),o.createElement(n.o,{ratio:i/s,bg:"custom.lightBlueBg"},o.createElement(r.xu,{height:"100%",ref:h},e.map((function(t,e){return o.createElement(r.xu,{key:e,"data-depth":t.depth,height:"100%",width:"100%",position:"absolute"},o.createElement(r.xu,{as:a.G,image:t.image,alt:t.name,position:"absolute",style:{width:t.width/i*100+"%",height:t.height/s*100+"%",left:t.x/i*100+"%",top:t.y/s*100+"%"}}))}))))}}}]);
//# sourceMappingURL=a4d5d1cfa9aedda4801fe30180c81810e7ff2702-3e591acb9832af51792d.js.map