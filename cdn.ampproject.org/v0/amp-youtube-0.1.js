(self.AMP=self.AMP||[]).push({n:"amp-youtube",v:"2011252111002",f:(function(AMP,_){
'use strict';var g,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var m;
if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var p;a:{var ca={a:!0},da={};try{da.__proto__=ca;p=da.a;break a}catch(a){}p=!1}m=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ea=m;function fa(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function ha(a,b){var c=b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return c}};var ia=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function ja(a){var b=Object.create(null);if(!a)return b;for(var c;c=ia.exec(a);){var d=ha(c[1],c[1]),e=c[2]?ha(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var q="";var ka=Object.prototype.toString;function r(a){return"[object Object]"===ka.call(a)}function t(a){return"number"===typeof a&&isFinite(a)};function u(a){var b=!1,c=null,d=a;return function(e){for(var f=[],h=0;h<arguments.length;++h)f[h-0]=arguments[h];b||(c=d.apply(self,f),b=!0,d=null);return c}};var v=self.AMP_CONFIG||{},la=("string"==typeof v.cdnProxyRegex?new RegExp(v.cdnProxyRegex):v.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function ma(a){if(self.document&&self.document.head&&(!self.location||!la.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}v.cdnUrl||ma("runtime-host");v.geoApiUrl||ma("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var na=self.__AMP_LOG;function w(){if(!na.user)throw Error("failed to call initLogConstructor");return na.user}function x(a,b,c){return w().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function y(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return z(a,b)}function A(a,b){var c=B(a);c=C(c);return z(c,b)}function D(a,b){a=B(a);a=C(a);return oa(a,b)?z(a,b):null}function B(a){return a.nodeType?y((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function C(a){a=B(a);return a.isSingleDoc()?a.win:a}function z(a,b){oa(a,b);a=pa(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function pa(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function oa(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};var E;function qa(){return E?E:E=Promise.resolve(void 0)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function F(a){var b=Object.create(null);a&&Object.assign(b,a);return b}function G(a){return a||{}};function H(a){a.parentElement&&a.parentElement.removeChild(a)}function ra(a){function b(k){return k}var c=a.dataset;a={};var d=/^param(.+)/,e;for(e in c){var f=e.match(d);if(f){var h=f[1][0].toLowerCase()+f[1].substr(1);a[b(h)]=c[e]}}return a}function I(a,b,c){c=c||{};var d=a.ownerDocument.createEvent("Event");d.data=c;d.initEvent(b,!0,!0);a.dispatchEvent(d)};function J(a){a.signals().signal("user-interacted")};G({c:!0,v:!0,a:!0,ad:!0});var K;function L(a){a=a.ownerDocument||a;K&&K.ownerDocument===a||(K=a.createElement("div"));return sa}function sa(a){var b=K;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a};function ta(a){try{return JSON.parse(a)}catch(b){return null}};var ua=["<iframe frameborder=0 allowfullscreen></iframe>"];function va(a,b,c){if(null!=c[b]){var d=c[b];(Array.isArray(d)?d:[d]).forEach(function(e){I(a,e)})}}function wa(a,b){var c=a.element,d=L(c)(ua);a.propagateAttributes(["referrerpolicy"],d);d.src=D(c,"url").assertHttpsUrl(b,c);a.applyFillContent(d);c.appendChild(d);return d}function xa(a){var b=a.getAttribute("allow")||"";a.setAttribute("allow",b+"autoplay;")};var N;function O(a,b,c){var d=a,e=c;var f=function(k){try{return e(k)}catch(l){throw self.__AMP_REPORT_ERROR(l),l;}};var h=ya();d.addEventListener(b,f,h?void 0:!1);return function(){d&&d.removeEventListener(b,f,h?void 0:!1);f=d=e=null}}function ya(){if(void 0!==N)return N;N=!1;try{var a={get capture(){N=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return N};function za(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function P(a,b,c){return O(a,b,c)}function Aa(a,b){var c=b,d=O(a,"loadedmetadata",function(e){try{c(e)}finally{c=null,d()}});return d};var Ba={title:"",artist:"",album:"",artwork:[{src:""}]};function Ca(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){var c=ta(b.textContent);if(c&&c.image){if("string"===typeof c.image)return c.image;if(c.image["@list"]&&"string"===typeof c.image["@list"][0])return c.image["@list"][0];if("string"===typeof c.image.url)return c.image.url;if("string"===typeof c.image[0])return c.image[0]}}}
function Da(a,b){var c=D(a,"url");if(b&&b.artwork){var d=b.artwork;Array.isArray(d);d.forEach(function(e){e&&(e=r(e)?e.src:e,x(c.isProtocolValid(e)))})}};function Ea(){this.o=null}g=Ea.prototype;g.add=function(a){var b=this;this.o||(this.o=[]);this.o.push(a);return function(){b.remove(a)}};g.remove=function(a){this.o&&(a=this.o.indexOf(a),-1<a&&this.o.splice(a,1))};g.removeAll=function(){this.o&&(this.o.length=0)};g.fire=function(a){if(this.o)for(var b=this.o,c=0;c<b.length;c++)(0,b[c])(a)};g.getHandlerCount=function(){return this.o?this.o.length:0};function Q(){this.P=!1;this.ia=new Ea}Q.prototype.onSessionEnd=function(a){this.ia.add(a)};Q.prototype.beginSession=function(){this.P=!0};Q.prototype.endSession=function(){this.P&&this.ia.fire();this.P=!1};Q.prototype.isSessionActive=function(){return this.P};var R,Fa="Webkit webkit Moz moz ms O o".split(" ");function Ga(a,b){for(var c in b){var d=a,e=b[c];var f=d.style;var h=c;if(h.startsWith("--"))f=h;else{R||(R=F());var k=R[h];if(!k){k=h;if(void 0===f[h]){var l=h;l=l.charAt(0).toUpperCase()+l.slice(1);b:{for(var n=0;n<Fa.length;n++){var M=Fa[n]+l;if(void 0!==f[M]){l=M;break b}}l=""}void 0!==f[l]&&(k=l)}R[h]=k}f=k}f&&(f.startsWith("--")?d.style.setProperty(f,e):d.style[f]=e)}};function Ha(a,b){if(b)return Promise.resolve(!1);var c=a.document.createElement("video");c.setAttribute("muted","");c.setAttribute("playsinline","");c.setAttribute("webkit-playsinline","");c.setAttribute("height","0");c.setAttribute("width","0");c.muted=!0;c.playsinline=!0;c.webkitPlaysinline=!0;Ga(c,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"});(new Promise(function(d){return d(c.play())})).catch(function(){});return Promise.resolve(!c.paused)}var Ia=null;function Ja(a,b){return new b.IntersectionObserver(a,{threshold:.5})}new WeakMap;new WeakMap;function Ka(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null};var La=".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";var Ma=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],Na=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function Oa(a,b){var c=L(a)(Ma);b&&b.title&&c.setAttribute("aria-label",b.title);return c}
function Pa(a){var b=L(a)(Na),c=b.firstElementChild;for(a=0;4>a;a++){for(var d=c.cloneNode(!0),e=d.children,f=0;f<e.length;f++)e[f].classList.add("amp-video-eq-"+(a+1)+"-"+(f+1));b.appendChild(d)}H(c);return b};function Qa(a){var b=this;this.ampdoc=a;this.installAutoplayStyles=u(function(){var c=La,d=b.ampdoc.getHeadNode(),e=d.__AMP_CSS_TR;var f=e?e(c):c;(c=d.__AMP_CSS_SM)||(c=d.__AMP_CSS_SM=F());(e=Ka(d,c,"amp-extension=amp-video-autoplay"))?e.textContent!==f&&(e.textContent=f):(e=(d.ownerDocument||d).createElement("style"),e.textContent=f,e.setAttribute("amp-extension","amp-video-autoplay"),f=Ka(d,c,"amp-runtime"),(f=void 0===f?null:f)?d.insertBefore(e,f.nextSibling):d.insertBefore(e,d.firstChild),c["amp-extension=amp-video-autoplay"]=
e)});this.Z=this.L=this.l=null;this.S=y(a.win,"timer");this.pa=D(a.getHeadNode(),"action");this.ha=function(){for(var c=0;c<b.l.length;c++){var d=b.l[c];if("paused"!==d.getPlayingState()){S(d,"video-seconds-played");var e=d.video.getCurrentTime(),f=d.video.getDuration();t(e)&&t(f)&&0<f&&(e=za(b.ampdoc.win,"video-manager.timeUpdate",G({time:e,percent:e/f})),b.pa.trigger(d.video.element,"timeUpdate",e,1))}}b.S.delay(b.ha,1E3)};this.V=u(function(){return new T(b.ampdoc,b)});this.S.delay(this.ha,1E3)}
g=Qa.prototype;g.dispose=function(){this.V().dispose();this.L.disconnect();this.L=null;if(this.l)for(var a=0;a<this.l.length;a++)this.l[a].dispose()};
g.register=function(a){var b=this;Ra(a);if(a.supportsPlatform()){this.L||(this.L=Ja(function(e){return e.forEach(function(f){var h=f.isIntersecting;U(b,f.target).updateVisibility(h)})},this.ampdoc.win));this.L.observe(a.element);P(a.element,"reloaded",function(){return c.videoLoaded()});this.l=this.l||[];var c=new Sa(this,a);this.l.push(c);var d=c.video.element;I(d,"registered");d.classList.add("i-amphtml-media-component");a.signals().signal("registered");d.classList.add("i-amphtml-video-interface")}};
function Ra(a){function b(){return a.fullscreenEnter()}function c(d,e){a.registerAction(d,function(){J(a);e()},1)}c("play",function(){return a.play(!1)});c("pause",function(){return a.pause()});c("mute",function(){return a.mute()});c("unmute",function(){return a.unmute()});c("fullscreenenter",b);c("fullscreen",b)}function U(a,b){if(Ta(a.Z,b))return a.Z;for(var c=0;c<a.l.length;c++){var d=a.l[c];if(Ta(d,b))return a.Z=d}return null}g.registerForAutoFullscreen=function(a){this.V().register(a)};
g.wa=function(){return this.V()};g.getVideoStateProperty=function(a,b){var c=this.ampdoc.getRootNode(),d=w().assertElement(c.getElementById(a),'Could not find an element with id="'+a+'" for VIDEO_STATE');a=U(this,d);return(a?a.getAnalyticsDetails():qa()).then(function(e){return e?e[b]:""})};g.getPlayingState=function(a){return U(this,a).getPlayingState()};g.isMuted=function(a){return U(this,a).isMuted()};g.userInteracted=function(a){return U(this,a).userInteracted()};
g.isRollingAd=function(a){return U(this,a).isRollingAd()};g.pauseOtherVideos=function(a){this.l.forEach(function(b){b.isPlaybackManaged()&&b!==a&&"playing_manual"==b.getPlayingState()&&b.video.pause()})};function Ta(a,b){return!!a&&(a.video===b||a.video.element===b)}
function Sa(a,b){var c=this;this.I=a;this.j=a.ampdoc;this.video=b;this.$=!0;this.H=this.O=this.D=this.na=!1;this.U=new Q;this.U.onSessionEnd(function(){return S(c,"video-session")});this.J=new Q;this.J.onSessionEnd(function(){return S(c,"video-session-visible")});this.da=function(){var d=c.j.win,e=d||self;if(e.__AMP_MODE)e=e.__AMP_MODE;else{var f=ja(e.location.originalHash||e.location.hash);var h=ja(e.location.search);q||(q=e.AMP_CONFIG&&e.AMP_CONFIG.v?e.AMP_CONFIG.v:"012011252111002");f={localDev:!1,
development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(f.development)||e.AMP_DEV_MODE),examiner:"2"==f.development,esm:!1,geoOverride:f["amp-geo"],minified:!0,lite:void 0!=h.amp_lite,test:!1,log:f.log,version:"2011252111002",rtvVersion:q};e=e.__AMP_MODE=f}e=e.lite;Ia||(Ia=u(Ha));return Ia(d,e)};this.ka=u(function(){return new V(c.j.win,c)});this.aa=this.oa=!1;this.W=null;this.la=this.C=!1;(this.hasAutoplay=b.element.hasAttribute("autoplay"))&&this.I.installAutoplayStyles();this.A=Ba;
this.ta=function(){c.video.play(!1)};this.sa=function(){c.video.pause()};P(b.element,"load",function(){return c.videoLoaded()});P(b.element,"pause",function(){S(c,"video-pause");c.D=!1;c.aa?c.aa=!1:c.U.endSession()});P(b.element,"play",function(){c.la=!0;S(c,"video-play")});P(b.element,"playing",function(){c.D=!0;"playing_manual"==c.getPlayingState()&&(c.ja(),c.I.pauseOtherVideos(c));var d=c.video,e=d.element;if(!d.preimplementsMediaSessionAPI()&&!e.classList.contains("i-amphtml-disable-mediasession")){Da(e,
c.A);d=c.j.win;e=c.A;var f=c.ta,h=c.sa,k=d.navigator;"mediaSession"in k&&d.MediaMetadata&&(k.mediaSession.metadata=new d.MediaMetadata(Ba),k.mediaSession.metadata=new d.MediaMetadata(e),k.mediaSession.setActionHandler("play",f),k.mediaSession.setActionHandler("pause",h))}c.U.beginSession();c.H&&c.J.beginSession();c.la||S(c,"video-play")});P(b.element,"muted",function(){return c.C=!0});P(b.element,"unmuted",function(){c.C=!1;c.I.pauseOtherVideos(c)});P(b.element,"amp:video:tick",function(d){d=d.data;
var e=d.eventType;e&&Ua(c,e,d.vars)});P(b.element,"ended",function(){c.O=!1;S(c,"video-ended")});P(b.element,"ad_start",function(){c.O=!0;S(c,"video-ad-start")});P(b.element,"ad_end",function(){c.O=!1;S(c,"video-ad-end")});b.signals().whenSignal("registered").then(function(){var d=c.video.element;(c.video.preimplementsAutoFullscreen()||!d.hasAttribute("rotate-to-fullscreen")?0:x(c.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",
d))&&c.I.registerForAutoFullscreen(c);c.hasAutoplay&&Va(c)});this.ja=u(function(){var d=za(c.j.win,"firstPlay",G({})),e=c.video.element;D(e,"action").trigger(e,"firstPlay",d,1)});Wa(this)}g=Sa.prototype;g.dispose=function(){this.ka().stop()};function Ua(a,b,c){var d={},e=(d["__amp:eventType"]=b,d);Object.keys(c).forEach(function(f){e["custom_"+f]=c[f]});S(a,"video-hosted-custom",e)}function Wa(a){a.video.signals().whenSignal("playback-delegated").then(function(){a.$=!1;a.D&&a.video.pause()})}
g.isMuted=function(){return this.C};g.isPlaybackManaged=function(){return this.$};
g.videoLoaded=function(){this.na=!0;this.W=this.video.element.querySelector("video, iframe");if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.A=F(this.video.getMetadata()));var a=this.j.win.document;if(!this.A.artwork||0==this.A.artwork.length){var b;(b=Ca(a))||(b=(b=a.querySelector('meta[property="og:image"]'))?b.getAttribute("content"):void 0);b||(b=(b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);
b&&(this.A.artwork=[{src:b}])}!this.A.title&&(a=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.W.getAttribute("title")||this.W.getAttribute("aria-label")||a.title)&&(this.A.title=a)}this.ka().start();this.H&&Xa(this)};
function Xa(a){a.j.isVisible()&&a.da().then(function(b){a.hasAutoplay&&!a.userInteracted()&&b?a.$&&(a.H?(a.J.beginSession(),a.video.play(!0),a.oa=!0):(a.D&&a.J.endSession(),a.video.pause(),a.aa=!0)):a.H?a.J.beginSession():a.D&&a.J.endSession()})}function Va(a){a.video.isInteractive()&&a.video.hideControls();a.da().then(function(b){!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),Ya(a))})}
function Ya(a){var b=a.video,c=a.video.element;if(!c.hasAttribute("noaudio")&&!c.signals().get("user-interacted")){var d=Pa(c),e=function(l){b.mutateElementSkipRemeasure(function(){return d.classList.toggle("amp-video-eq-play",l)})};b.mutateElementSkipRemeasure(function(){return c.appendChild(d)});var f=[P(c,"pause",function(){return e(!1)}),P(c,"playing",function(){return e(!0)})];b.signals().whenSignal("user-interacted").then(function(){var l=a.video,n=l.element;a.ja();l.isInteractive()&&l.showControls();
l.unmute();f.forEach(function(M){M()});l=n.querySelector(".amp-video-eq");n=n.querySelector(".i-amphtml-video-mask");l&&H(l);n&&H(n)});if(b.isInteractive()){var h=Oa(c,a.A),k=function(l){b.mutateElementSkipRemeasure(function(){var n=l;void 0===n&&(n=h.hasAttribute("hidden"));n?h.removeAttribute("hidden"):h.setAttribute("hidden","")})};b.hideControls();b.mutateElementSkipRemeasure(function(){return c.appendChild(h)});[P(h,"click",function(){return J(b)}),P(c,"ad_start",function(){k(!1);b.showControls()}),
P(c,"ad_end",function(){k(!0);b.hideControls()}),P(c,"unmuted",function(){return J(b)})].forEach(function(l){return f.push(l)})}}}g.updateVisibility=function(a){var b=this.H;this.H=a;a!=b&&this.na&&Xa(this)};g.getPlayingState=function(){return this.D?this.D&&this.oa&&!this.userInteracted()?"playing_auto":"playing_manual":"paused"};g.isRollingAd=function(){return this.O};g.userInteracted=function(){return null!=this.video.signals().get("user-interacted")};
g.getAnalyticsDetails=function(){var a=this,b=this.video;return this.da().then(function(c){var d=b.element.getLayoutBox(),e=d.width;d=d.height;var f=a.hasAutoplay&&c,h=b.getPlayedRanges(),k=h.reduce(function(l,n){return l+n[1]-n[0]},0);return{autoplay:f,currentTime:b.getCurrentTime(),duration:b.getDuration(),height:d,id:b.element.id,muted:a.C,playedTotal:k,playedRangesJson:JSON.stringify(h),state:a.getPlayingState(),width:e}})};
function T(a,b){var c=this;this.I=b;this.j=a;this.F=this.K=null;this.l=[];this.m=[];this.M=function(){return Za(c)};this.ra=function(d){return"playing_manual"==c.I.getPlayingState(d)};this.qa=function(d,e){d=d.element.getIntersectionChangeEntry();var f=d.intersectionRatio;d=d.boundingClientRect;var h=e.element.getIntersectionChangeEntry();e=h.boundingClientRect;f-=h.intersectionRatio;.1<Math.abs(f)?d=f:(h=A(c.j,"viewport"),f=$a(h,d),h=$a(h,e),d=f<h||f>h?f-h:d.top-e.top);return d};ab(this);bb(this)}
T.prototype.dispose=function(){this.m.forEach(function(a){return a()});this.m.length=0};T.prototype.register=function(a){a=a.video;var b=a.element;if("video"==b.querySelector("video, iframe").tagName.toLowerCase())var c=!0;else c=y(this.j.win,"platform"),c=c.isIos()||c.isSafari()?!!{"amp-dailymotion":!0,"amp-ima-video":!0}[b.tagName.toLowerCase()]:!0;c&&(this.l.push(a),O(b,"pause",this.M),O(b,"playing",this.M),O(b,"ended",this.M),a.signals().whenSignal("user-interacted").then(this.M),Za(this))};
function bb(a){function b(){a.K=null}var c=a.j.getRootNode();a.m.push(O(c,"webkitfullscreenchange",b),O(c,"mozfullscreenchange",b),O(c,"fullscreenchange",b),O(c,"MSFullscreenChange",b))}T.prototype.isInLandscape=function(){var a=this.j.win;return a.screen&&"orientation"in a.screen?a.screen.orientation.type.startsWith("landscape"):90==Math.abs(a.orientation)};
function ab(a){var b=a.j.win,c=b.screen;c&&"orientation"in c&&a.m.push(P(c.orientation,"change",function(){return cb(a)}));a.m.push(P(b,"orientationchange",function(){return cb(a)}))}function cb(a){a.isInLandscape()?null!=a.F&&db(a,a.F):a.K&&eb(a,a.K)}function db(a,b){var c=y(a.j.win,"platform");a.K=b;c.isAndroid()&&c.isChrome()?b.fullscreenEnter():fb(a,b).then(function(){return b.fullscreenEnter()})}function eb(a,b){a.K=null;fb(a,b,"center").then(function(){return b.fullscreenExit()})}
function fb(a,b,c){var d=c=void 0===c?null:c,e=b.element,f=A(a.j,"viewport");return y(a.j.win,"timer").promise(330).then(function(){var h=e.getIntersectionChangeEntry().boundingClientRect,k=h.top;h=h.bottom;var l=f.getSize().height;return 0<=k&&h<=l?qa():f.animateScrollIntoView(e,d?d:h>l?"bottom":"top")})}function Za(a){if(a.isInLandscape())return a.F;a.F=null;var b=a.l.filter(a.ra).sort(a.qa)[0];b&&.5<=b.element.getIntersectionChangeEntry().intersectionRatio&&(a.F=b);return a.F}
function $a(a,b){var c=b.top+b.height/2,d=a.getSize().height/2;return Math.abs(c-d)}function V(a,b){this.S=y(a,"timer");this.N=b;this.m=null;this.T=this.ma=0}V.prototype.start=function(){var a=this,b=this.N.video.element;this.stop();this.m=this.m||[];gb(this)?hb(this,this.T):this.m.push(Aa(b,function(){gb(a)&&hb(a,a.T)}));this.m.push(P(b,"ended",function(){gb(a)&&ib(a,100)}))};V.prototype.stop=function(){if(this.m){for(;0<this.m.length;)this.m.pop()();this.T++}};
function gb(a){var b=a.N.video,c=b.getDuration();if(!(c&&!isNaN(c)&&1<c))return!1;250>50*c&&a.va("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",5,"seconds long.",b.element);return!0}V.prototype.va=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];w().warn.apply(w(),["video-manager"].concat(b))};
function hb(a,b){if(b==a.T){var c=a.N,d=a.S,e=c.video,f=function(){return hb(a,b)};if("paused"==c.getPlayingState())d.delay(f,500);else if((c=e.getDuration())&&!isNaN(c)&&1<c){var h=Math.min(Math.max(50*c,250),4E3),k=e.getCurrentTime()/c*100,l=5*Math.floor(k/5);t(l);ib(a,l);d.delay(f,h)}else d.delay(f,500)}}function ib(a,b){0>=b||a.ma==b||(a.ma=b,S(a.N,"video-percentage-played",{normalizedPercentage:b.toString()}))}
function S(a,b,c){var d=a.video;a.getAnalyticsDetails().then(function(e){c&&Object.assign(e,c);I(d.element,b,e)})};var jb=["<img placeholder referrerpolicy=origin>"];function W(a){a=AMP.BaseElement.call(this,a)||this;a.B=null;a.R=null;a.C=!1;a.X=!1;a.Y=!1;a.h=null;a.G=null;a.ga=null;a.ba=null;a.ca=null;a.fa=null;a.ea=null;return a}var X=AMP.BaseElement;W.prototype=aa(X.prototype);W.prototype.constructor=W;if(ea)ea(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var kb=Object.getOwnPropertyDescriptor(X,Y);kb&&Object.defineProperty(W,Y,kb)}else W[Y]=X[Y];W.xa=X.prototype;g=W.prototype;
g.preconnectCallback=function(a){var b=y(this.win,"preconnect"),c=this.getAmpDoc();b.url(c,lb(this));b.url(c,"https://s.ytimg.com",a);b.url(c,"https://i.ytimg.com",a)};g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};g.renderOutsideViewport=function(){return.75};
g.buildCallback=function(){this.B=this.element.getAttribute("data-videoid");this.R=this.element.getAttribute("data-live-channelid");mb(this);var a=new fa;this.ba=a.promise;this.ca=a.resolve;!this.getPlaceholder()&&this.B&&nb(this);a=B(this.element);var b=C(a),c=pa(b),d=c["video-manager"];d||(d=c["video-manager"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,adopted:!1});d.ctor||d.obj||(d.ctor=Qa,d.context=a,d.adopted=!1,d.resolve&&z(b,"video-manager"))};
function lb(a){if(a.ga)return a.ga;mb(a);var b="";"omit"===(a.element.getAttribute("credentials")||"include")&&(b="-nocookie");b="https://www.youtube"+b+".com/embed/";var c=a.B?encodeURIComponent(a.B||"")+"?":"live_stream?channel="+(encodeURIComponent(a.R||"")+"&");c=""+b+c+"enablejsapi=1&amp=1";var d=a.element;b=ra(d);"autoplay"in b&&(delete b.autoplay,a.user().error("AMP-YOUTUBE","Use autoplay attribute instead of data-param-autoplay"));"playsinline"in b||(b.playsinline="1");d.hasAttribute("autoplay")&&
("iv_load_policy"in b||(b.iv_load_policy="3"),b.playsinline="1");"loop"in b&&a.user().warn("AMP-YOUTUBE","Use loop attribute instead of the deprecated data-param-loop");a.X=d.hasAttribute("loop")||"loop"in b&&"1"==b.loop;a.Y="playlist"in b;a.X&&(a.Y?b.loop="1":"loop"in b&&delete b.loop);d=[];for(k in b){var e=b[k];if(null!=e)if(Array.isArray(e))for(var f=0;f<e.length;f++){var h=e[f];d.push(encodeURIComponent(k)+"="+encodeURIComponent(h))}else d.push(encodeURIComponent(k)+"="+encodeURIComponent(e))}var k=
d.join("&");k&&(b=c.split("#",2),c=b[0].split("?",2),k=c[0]+(c[1]?"?"+c[1]+"&"+k:"?"+k),c=k+=b[1]?"#"+b[1]:"");return a.ga=c}
g.layoutCallback=function(){var a=this,b=wa(this,lb(this));b.title=this.element.title||"YouTube video";xa(b);this.h=b;A(this.element,"video-manager").register(this);this.fa=P(this.win,"message",this.ua.bind(this));this.X&&!this.Y&&(this.ea=P(this.element,"ended",function(){return a.play(!1)}));var c=this.loadPromise(this.h).then(function(){return y(a.win,"timer").promise(300)}).then(function(){a.h&&a.h.contentWindow.postMessage(JSON.stringify(G({event:"listening"})),"*");I(a.element,"load")});this.ca(c);
return c};g.unlayoutCallback=function(){this.h&&(H(this.h),this.h=null);this.fa&&this.fa();this.ea&&this.ea();var a=new fa;this.ba=a.promise;this.ca=a.resolve;return!0};g.pauseCallback=function(){this.h&&this.h.contentWindow&&this.pause()};g.mutatedAttributesCallback=function(a){null!=a["data-videoid"]&&(this.B=this.element.getAttribute("data-videoid"),this.h&&Z(this,"loadVideoById",[this.B]))};
function mb(a){x(!(a.B&&a.R)&&(a.B||a.R),"Exactly one of data-videoid or data-live-channelid should be present for <amp-youtube> %s",a.element)}function Z(a,b,c){a.ba.then(function(){if(a.h&&a.h.contentWindow){var d=JSON.stringify(G({event:"command",func:b,args:c||""}));a.h.contentWindow.postMessage(d,"*")}})}
g.ua=function(a){var b=this.h;if(b&&a.source==b.contentWindow&&"https://www.youtube.com"==a.origin){var c=a.data;if(c&&(r(c)||c.startsWith("{"))&&(b=r(c)?c:ta(c),null!=b)){a=b.event;var d=b.info||{};b=this.element;var e=d.playerState;if("infoDelivery"==a&&null!=e)a={},va(b,e.toString(),(a[1]="playing",a[2]="pause",a[0]=["ended","pause"],a));else{var f=d.muted;"infoDelivery"==a&&d&&null!=f?this.C!=f&&(this.C=f,I(b,this.C?"muted":"unmuted")):"initialDelivery"==a?(this.G=d,I(b,"loadedmetadata")):"infoDelivery"==
a&&void 0!==d.currentTime&&(this.G.currentTime=d.currentTime)}}}};
function nb(a){var b=a.element,c=L(b)(jb),d=a.B;Ga(c,{"object-fit":"cover",visibility:"hidden"});a.propagateAttributes(["aria-label"],c);c.src="https://i.ytimg.com/vi/"+encodeURIComponent(d)+"/sddefault.jpg#404_is_fine";c.hasAttribute("aria-label")?c.setAttribute("alt","Loading video - "+c.getAttribute("aria-label")):c.setAttribute("alt","Loading video");a.applyFillContent(c);b.appendChild(c);a.loadPromise(c).then(function(){if(120==c.naturalWidth&&90==c.naturalHeight)throw Error("sddefault.jpg is not found");
}).catch(function(){c.src="https://i.ytimg.com/vi/"+encodeURIComponent(d)+"/hqdefault.jpg";return a.loadPromise(c)}).then(function(){a.getVsync().mutate(function(){Ga(c,{visibility:""})})})}g.supportsPlatform=function(){return!0};g.isInteractive=function(){return!0};g.play=function(){Z(this,"playVideo")};g.pause=function(){Z(this,"pauseVideo")};g.mute=function(){Z(this,"mute")};g.unmute=function(){Z(this,"unMute")};g.showControls=function(){};g.hideControls=function(){};
g.fullscreenEnter=function(){if(this.h){var a=this.h,b=a.requestFullscreen||a.requestFullScreen||a.webkitRequestFullscreen||a.webkitEnterFullscreen||a.msRequestFullscreen||a.mozRequestFullScreen;b&&b.call(a)}};
g.fullscreenExit=function(){if(this.h){var a=this.h,b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen;b?b.call(a):(a=a.ownerDocument)&&(b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen)&&b.call(a)}};
g.isFullscreen=function(){if(this.h){var a=this.h;var b=a.webkitDisplayingFullscreen;a=void 0!==b?b:(b=a.ownerDocument)?(b.fullscreenElement||b.webkitFullscreenElement||b.mozFullScreenElement||b.webkitCurrentFullScreenElement)==a:!1}else a=!1;return a};g.getMetadata=function(){};g.preimplementsMediaSessionAPI=function(){return!0};g.preimplementsAutoFullscreen=function(){return!1};g.getCurrentTime=function(){return this.G?this.G.currentTime:NaN};
g.getDuration=function(){return this.G?this.G.duration:NaN};g.getPlayedRanges=function(){return[]};g.seekTo=function(){this.user().error("amp-youtube","`seekTo` not supported.")};(function(a){a.registerElement("amp-youtube",W)})(self.AMP);
})});

//# sourceMappingURL=amp-youtube-0.1.js.map
