(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{386:function(t,n,e){"use strict";e.d(n,"d",(function(){return r})),e.d(n,"a",(function(){return a})),e.d(n,"i",(function(){return u})),e.d(n,"f",(function(){return l})),e.d(n,"g",(function(){return o})),e.d(n,"h",(function(){return c})),e.d(n,"b",(function(){return f})),e.d(n,"e",(function(){return h})),e.d(n,"k",(function(){return p})),e.d(n,"l",(function(){return d})),e.d(n,"c",(function(){return g})),e.d(n,"j",(function(){return m}));e(81),e(55),e(388),e(390),e(219),e(80),e(118),e(119),e(33),e(123),e(217);var r=/#.*$/,i=/\.(md|html)$/,a=/\/$/,u=/^[a-z]+:/i;function s(t){return decodeURI(t).replace(r,"").replace(i,"")}function l(t){return u.test(t)}function o(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function f(t){if(l(t))return t;var n=t.match(r),e=n?n[0]:"",i=s(t);return a.test(i)?t:i+".html"+e}function h(t,n){var e=decodeURIComponent(t.hash),i=function(t){var n=t.match(r);if(n)return n[0]}(n);return(!i||e===i)&&s(t.path)===s(n)}function p(t,n,e){if(l(n))return{type:"external",path:n};e&&(n=function(t,n,e){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return n+t;var i=n.split("/");e&&i[i.length-1]||i.pop();for(var a=t.replace(/^\//,"").split("/"),u=0;u<a.length;u++){var s=a[u];".."===s?i.pop():"."!==s&&i.push(s)}""!==i[0]&&i.unshift("");return i.join("/")}(n,e));for(var r=s(n),i=0;i<t.length;i++)if(s(t[i].regularPath)===r)return Object.assign({},t[i],{type:"page",path:f(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(n,'"')),{}}function d(t,n,e,r){var i=e.pages,a=e.themeConfig,u=r&&a.locales&&a.locales[r]||a;if("auto"===(t.frontmatter.sidebar||u.sidebar||a.sidebar))return v(t);var s=u.sidebar||a.sidebar;if(s){var l=function(t,n){if(Array.isArray(n))return{base:"/",config:n};for(var e in n)if(0===(r=t,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(encodeURI(e)))return{base:e,config:n[e]};var r;return{}}(n,s),o=l.base,c=l.config;return"auto"===c?v(t):c?c.map((function(t){return function t(n,e,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof n)return p(e,n,r);if(Array.isArray(n))return Object.assign(p(e,n[0],r),{title:n[1]});var a=n.children||[];return 0===a.length&&n.path?Object.assign(p(e,n.path,r),{title:n.title}):{type:"group",path:n.path,title:n.title,sidebarDepth:n.sidebarDepth,initialOpenGroupIndex:n.initialOpenGroupIndex,children:a.map((function(n){return t(n,e,r,i+1)})),collapsable:!1!==n.collapsable}}(t,i,o)})):[]}return[]}function v(t){var n=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:n.map((function(n){return{type:"auto",title:n.title,basePath:t.path,path:t.path+"#"+n.slug,children:n.children||[]}}))}]}function g(t){var n;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?n=t:n&&(n.children||(n.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},387:function(t,n,e){"use strict";e(391),e(120),e(117);var r=e(386),i={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(r.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(n){return n===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(r.g)(this.link)||Object(r.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(r.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(r.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction:function(){this.$emit("focusout")}}},a=e(54),u=Object(a.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isInternal?e("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(n){return t.focusoutAction(n)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);n.a=u.exports},388:function(t,n,e){"use strict";var r=e(214),i=e(11),a=e(22),u=e(26),s=e(215),l=e(216);r("match",1,(function(t,n,e){return[function(n){var e=u(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,e):new RegExp(n)[t](String(e))},function(t){var r=e(n,t,this);if(r.done)return r.value;var u=i(t),o=String(this);if(!u.global)return l(u,o);var c=u.unicode;u.lastIndex=0;for(var f,h=[],p=0;null!==(f=l(u,o));){var d=String(f[0]);h[p]=d,""===d&&(u.lastIndex=s(o,a(u.lastIndex),c)),p++}return 0===p?null:h}]}))},389:function(t,n,e){},390:function(t,n,e){"use strict";var r=e(214),i=e(218),a=e(11),u=e(26),s=e(394),l=e(215),o=e(22),c=e(216),f=e(82),h=e(2),p=[].push,d=Math.min,v=!h((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,n,e){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var r=String(u(this)),a=void 0===e?4294967295:e>>>0;if(0===a)return[];if(void 0===t)return[r];if(!i(t))return n.call(r,t,a);for(var s,l,o,c=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,v=new RegExp(t.source,h+"g");(s=f.call(v,r))&&!((l=v.lastIndex)>d&&(c.push(r.slice(d,s.index)),s.length>1&&s.index<r.length&&p.apply(c,s.slice(1)),o=s[0].length,d=l,c.length>=a));)v.lastIndex===s.index&&v.lastIndex++;return d===r.length?!o&&v.test("")||c.push(""):c.push(r.slice(d)),c.length>a?c.slice(0,a):c}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,e){var i=u(this),a=null==n?void 0:n[t];return void 0!==a?a.call(n,i,e):r.call(String(i),n,e)},function(t,i){var u=e(r,t,this,i,r!==n);if(u.done)return u.value;var f=a(t),h=String(this),p=s(f,RegExp),g=f.unicode,m=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(v?"y":"g"),b=new p(v?f:"^(?:"+f.source+")",m),k=void 0===i?4294967295:i>>>0;if(0===k)return[];if(0===h.length)return null===c(b,h)?[h]:[];for(var x=0,_=0,y=[];_<h.length;){b.lastIndex=v?_:0;var I,O=c(b,v?h:h.slice(_));if(null===O||(I=d(o(b.lastIndex+(v?0:_)),h.length))===x)_=l(h,_,g);else{if(y.push(h.slice(x,_)),y.length===k)return y;for(var C=1;C<=O.length-1;C++)if(y.push(O[C]),y.length===k)return y;_=x=I}}return y.push(h.slice(x)),y}]}),!v)},391:function(t,n,e){"use strict";var r=e(0),i=e(392);r({target:"String",proto:!0,forced:e(393)("link")},{link:function(t){return i(this,"a","href",t)}})},392:function(t,n,e){var r=e(26),i=/"/g;t.exports=function(t,n,e,a){var u=String(r(t)),s="<"+n;return""!==e&&(s+=" "+e+'="'+String(a).replace(i,"&quot;")+'"'),s+">"+u+"</"+n+">"}},393:function(t,n,e){var r=e(2);t.exports=function(t){return r((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},394:function(t,n,e){var r=e(11),i=e(57),a=e(1)("species");t.exports=function(t,n){var e,u=r(t).constructor;return void 0===u||null==(e=r(u)[a])?n:i(e)}},396:function(t,n,e){"use strict";e(389)},429:function(t,n,e){"use strict";e.r(n);var r={components:{NavLink:e(387).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(e(396),e(54)),a=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("div",{staticClass:"hero"},[e("DemoMojsLogoReveal",{attrs:{isPlaying:""}}),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()],1),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(n,r){return e("div",{key:r,staticClass:"feature"},[e("img",{class:n.imageClass?"feature__image "+n.imageClass:"feature__image",attrs:{src:n.image,alt:n.title}}),t._v(" "),e("h2",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.details))])])})),0):t._e(),t._v(" "),e("Content",{attrs:{custom:""}}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);n.default=a.exports}}]);