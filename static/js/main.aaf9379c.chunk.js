(this["webpackJsonppoddy-web"]=this["webpackJsonppoddy-web"]||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){},117:function(e,t){},119:function(e,t){},145:function(e,t){},147:function(e,t){},162:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(80),o=a.n(r),u=(a(90),a(13)),l=a.n(u),s=a(20),i=a(5),m=(a(92),a(81)),f=a.n(m),d=function(e){return f.a.get((t="search","".concat("https://cors-anywhere.herokuapp.com/").concat("https://itunes.apple.com/search","/").concat(t)),{params:{entity:"podcast",term:e},headers:{"access-control-allow-origin":"*"}});var t},b=(a(55),a(109),a(110),function(e){var t=e.children;return c.a.createElement("div",{className:"modal is-active"},c.a.createElement("div",{className:"modal-background"}),c.a.createElement("div",{className:"modal-card"},t))}),p=function(e){var t=e.title,a=e.onCancel;return c.a.createElement("header",{className:"modal-card-head"},c.a.createElement("p",{className:"modal-card-title"},t),c.a.createElement("button",{className:"delete","aria-label":"close",onClick:a}))},E=function(e){var t=e.children;return c.a.createElement("section",{className:"modal-card-body"},t)},v=function(e){var t=e.onCancel;return c.a.createElement("footer",{className:"modal-card-foot"},c.a.createElement("button",{className:"button",onClick:t},"Close"))},h=a(82),j=function(e){return"".concat("https://cors-anywhere.herokuapp.com/").concat(e)},N=new(a.n(h).a)({customFields:{}}),O=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.parseURL(j(t));case 2:return a=e.sent,n=[],a.items.map((function(e){e.enclosure&&n.push({title:e.title,url:e.enclosure.url})})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=(a(162),a(83)),w=function(e){var t=e.title,a=e.url,n=e.onPlay,r=e.currentTrack;return c.a.createElement("div",{className:"track"},c.a.createElement("h1",null,t),c.a.createElement("button",{className:"button play is-fullwidth",onClick:n},c.a.createElement(g.a,{icon:a===r?"pause":"play"})))},k=(a(165),a(168)),y=a(169),C=(a(166),function(e){var t=e.onNext,a=e.onPrevious,n=e.pageNumbers,r=e.activePage,o=function(e){return e>=n||e<0};return c.a.createElement("div",{className:"pagination"},c.a.createElement("ul",{id:"pageNumberList"},c.a.createElement("button",{onClick:a,className:"button previous",disabled:o(r-1)},"Prevous"),c.a.createElement("button",{className:"button"},r+1),c.a.createElement("button",{onClick:t,className:"button next",disabled:o(r+1)},"Next")))}),S=function(e){var t=e.title,a=e.onClose,r=e.image,o=e.feedUrl,u=Object(n.useState)([]),m=Object(i.a)(u,2),f=m[0],d=m[1],h=Object(n.useState)([]),j=Object(i.a)(h,2),N=j[0],g=j[1],S=Object(n.useState)(0),x=Object(i.a)(S,2),P=x[0],U=x[1],D=Object(n.useState)(""),W=Object(i.a)(D,2),A=W[0],B=W[1],F=Object(n.useState)(null),H=Object(i.a)(F,2),J=H[0],L=H[1],T=function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=d,e.t1=k.a,e.next=4,O(t);case 4:e.t2=e.sent,e.t3=(0,e.t1)(10,e.t2),(0,e.t0)(e.t3);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){T(o)}),[]),Object(n.useEffect)((function(){g(f[P])}),[P,f]),Object(n.useEffect)((function(){R()}),[J]);var I=function(){J&&J.pause()},R=function(){J&&J.play()},$=function(){I(),a()};return c.a.createElement(b,null,c.a.createElement(p,{title:t,onCancel:$}),c.a.createElement(E,null,c.a.createElement("div",{className:"image"},c.a.createElement("img",{src:r,alt:""})),N&&N.map((function(e){return c.a.createElement(w,{title:e.title,url:e.url,currentTrack:A,onPlay:function(){return function(e){I(),e.url===A?(B(null),I()):(B(e.url),L(new Audio(e.url)))}(e)}})})),c.a.createElement(C,{activePage:P,pageNumbers:Object(y.a)(f),onNext:function(){U(P+1)},onPrevious:function(){U(P-1)}})),c.a.createElement(v,{onCancel:$}))},x=function(e){var t=e.podcast.feedUrl,a=e.title,r=e.image,o=e.imageHD,u=Object(n.useState)(!1),l=Object(i.a)(u,2),s=l[0],m=l[1];return c.a.createElement(c.a.Fragment,null,s&&c.a.createElement(S,{onClose:function(){m(!1)},title:a,image:o||r,feedUrl:t}),c.a.createElement("div",{onClick:function(){m(!0)},className:"podcast column is-3"},c.a.createElement("h1",null,a),c.a.createElement("div",{className:"image"},c.a.createElement("img",{src:r,alt:a}))))},P=a(84);a(22).b.add(P.a);var U=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),u=Object(i.a)(o,2),m=u[0],f=u[1],b=Object(n.useState)(""),p=Object(i.a)(b,2),E=p[0],v=p[1],h=Object(n.useState)("soccer"),j=Object(i.a)(h,2),N=j[0],O=j[1],g=Object(n.useState)(0),w=Object(i.a)(g,2),S=w[0],P=w[1];Object(n.useEffect)((function(){U()}),[N]),Object(n.useEffect)((function(){D()}),[S,a]);var U=function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(N).then((function(e){r(Object(k.a)(10,e.data.results))}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){f(a[S])};return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"Poddy Web")),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),O(E)},className:"search-form"},c.a.createElement("input",{placeholder:"Enter keyword",type:"text",className:"search-bar",value:E,onChange:function(e){v(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"search-button"},"Search")),c.a.createElement(C,{activePage:S,onNext:function(){return P(S+1)},onPrevious:function(){return P(S-1)},pageNumbers:Object(y.a)(a)}),c.a.createElement("div",{className:"podcasts"},m&&m.map((function(e){return c.a.createElement(x,{podcast:e,title:e.collectionName,image:e.artworkUrl100,imageHD:e.artworkUrl600})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},85:function(e,t,a){e.exports=a(167)},90:function(e,t,a){},92:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.aaf9379c.chunk.js.map