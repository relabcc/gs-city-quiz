(self.webpackChunkstyled_gatsby_starter=self.webpackChunkstyled_gatsby_starter||[]).push([[24],{6554:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var r=n(6968),a=n.n(r),i=n(7294),o=n(5444),l=n(5708),u=n(7247),c=n(2543),s=n(4667),f=n(6549);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=(0,c.G)((function(e,t){var n=e.icon,r=e.children,a=e.isRound,o=e["aria-label"],l=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["icon","children","isRound","aria-label"]),u=n||r,c=i.isValidElement(u)?i.cloneElement(u,{"aria-hidden":!0,focusable:!1}):null;return i.createElement(f.z,d({padding:"0",borderRadius:a?"full":void 0,ref:t,"aria-label":o},l),c)}));s.Ts&&(m.displayName="IconButton");var p=n(8917),v=n(3941),h=(n(2599),n(9370)),b=n(7669),g=n(7004),E=n(6810),w=n(4770),y=n(8646),Z=function(e){var t=e.data,n=e.pageContext,r=n.id,c=n.isLast,s=n.length,f=(0,l.u6)(),d=f.values,Z=f.submitForm;(0,i.useEffect)((function(){d.answers.length<+r&&(0,o.navigate)("/q/"+(d.answers.length+1))}),[d.answers,r]);var _=Object.values(y),O=_.reduce((function(e,t){var n=t.reduce((function(e,t,n){return e+=t[d.answers[n]]||0}),0);return e.push(n),e}),[]);return console.log(d,_,O),i.createElement(w.Z,{title:"第"+r+"題"},i.createElement(v.Z,{bg:"white",height:"100%"},i.createElement(E.Z,null,i.createElement(b.Z,{alignItems:"center"},r>1&&i.createElement(m,{as:p.Z,swipe:!0,direction:"right",to:"/q/"+(r-1),mr:"0.25em",minWidth:"auto",w:"1.5em",h:"1.5em",isRound:!0,bg:"black",color:"white",icon:i.createElement(u.Kjp,{size:"1.5em"})}),i.createElement(h.Z,{fontWeight:"bold"},i.createElement(h.Z.Inline,{fontSize:"2em"},r),"/ ",s)),i.createElement(h.Z,null,null==t?void 0:t.questionsJson.question),i.createElement(v.Z,null,null==t?void 0:t.questionsJson.options.map((function(e,t){return i.createElement(v.Z,{mt:"1em",key:t},i.createElement(g.Z,{as:!c&&function(e){return i.createElement(p.Z,Object.assign({top:"entry"},e))},onClick:function(){a()(d,["answers",+r-1],t),c&&Z()},to:!c&&"/q/"+(+r+1),swipe:!0,direction:"left",width:"100%"},e))}))))))}},4865:function(e,t,n){var r=n(9465),a=n(7813),i=Object.prototype.hasOwnProperty;e.exports=function(e,t,n){var o=e[t];i.call(e,t)&&a(o,n)&&(void 0!==n||t in e)||r(e,t,n)}},9465:function(e,t,n){var r=n(8777);e.exports=function(e,t,n){"__proto__"==t&&r?r(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}},611:function(e,t,n){var r=n(4865),a=n(1811),i=n(5776),o=n(3218),l=n(327);e.exports=function(e,t,n,u){if(!o(e))return e;for(var c=-1,s=(t=a(t,e)).length,f=s-1,d=e;null!=d&&++c<s;){var m=l(t[c]),p=n;if("__proto__"===m||"constructor"===m||"prototype"===m)return e;if(c!=f){var v=d[m];void 0===(p=u?u(v,m,d):void 0)&&(p=o(v)?v:i(t[c+1])?[]:{})}r(d,m,p),d=d[m]}return e}},8777:function(e,t,n){var r=n(852),a=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(t){}}();e.exports=a},6968:function(e,t,n){var r=n(611);e.exports=function(e,t,n){return null==e?e:r(e,t,n)}}}]);
//# sourceMappingURL=component---src-templates-question-js-e20663fdaa24a9c2cafa.js.map