_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(o.default.useContext(r.AmpStateContext))};var i,o=(i=n("q1tI"))&&i.__esModule?i:{default:i},r=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,i=e.hybrid,o=void 0!==i&&i,r=e.hasQuery,s=void 0!==r&&r;return n||o&&s}},"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("QeBL")}])},"/eHF":function(e,t,n){"use strict";function i(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function o(e,t){var n=t.distance,i=t.left,o=t.right,r=t.up,s=t.down,a=t.top,u=t.bottom,c=t.big,d=t.mirror,h=t.opposite,f=(n?n.toString():0)+((i?1:0)|(o?2:0)|(a||s?4:0)|(u||r?8:0)|(d?16:0)|(h?32:0)|(e?64:0)|(c?128:0));if(p.hasOwnProperty(f))return p[f];var v=i||o||r||s||a||u,m=void 0,b=void 0;if(v){if(!d!=!(e&&h)){var y=[o,i,u,a,s,r];i=y[0],o=y[1],a=y[2],u=y[3],r=y[4],s=y[5]}var w=n||(c?"2000px":"100%");m=i?"-"+w:o?w:"0",b=s||a?"-"+w:r||u?w:"0"}return p[f]=(0,l.animation)((e?"to":"from")+" {opacity: 0;"+(v?" transform: translate3d("+m+", "+b+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),p[f]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.children,r=(e.out,e.forever),s=e.timeout,a=e.duration,u=void 0===a?l.defaults.duration:a,d=e.delay,p=void 0===d?l.defaults.delay:d,h=e.count,f=void 0===h?l.defaults.count:h,v=i(e,["children","out","forever","timeout","duration","delay","count"]),m={make:o,duration:void 0===s?u:s,delay:p,forever:r,count:f,style:{animationFillMode:"both"},reverse:v.left};return t?(0,c.default)(v,m,m,n):m}Object.defineProperty(t,"__esModule",{value:!0});var s,a=n("17x9"),l=n("ar19"),u=n("eH+L"),c=(s=u)&&s.__esModule?s:{default:s},d={out:a.bool,left:a.bool,right:a.bool,top:a.bool,bottom:a.bool,big:a.bool,mirror:a.bool,opposite:a.bool,duration:a.number,timeout:a.number,distance:a.string,delay:a.number,count:a.number,forever:a.bool},p={};r.propTypes=d,t.default=r,e.exports=t.default},"28nh":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,r=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(e){o=!0,r=e}finally{try{!i&&a.return&&a.return()}finally{if(o)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n("q1tI"),u=(i=l)&&i.__esModule?i:{default:i},c=n("17x9"),d=n("ar19"),p=(0,c.shape)({make:c.func,duration:c.number.isRequired,delay:c.number.isRequired,forever:c.bool,count:c.number.isRequired,style:c.object.isRequired,reverse:c.bool}),h={collapse:c.bool,collapseEl:c.element,cascade:c.bool,wait:c.number,force:c.bool,disabled:c.bool,appear:c.bool,enter:c.bool,exit:c.bool,fraction:c.number,refProp:c.string,innerRef:c.func,onReveal:c.func,unmountOnExit:c.bool,mountOnEnter:c.bool,inEffect:p.isRequired,outEffect:(0,c.oneOfType)([p,(0,c.oneOf)([!1])]).isRequired,ssrReveal:c.bool,collapseOnly:c.bool,ssrFadeout:c.bool},f={transitionGroup:c.object},v=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return i.isOn=void 0===e.when||!!e.when,i.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:i.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},i.savedChild=!1,i.isShown=!1,d.observerMode?i.handleObserve=i.handleObserve.bind(i):(i.revealHandler=i.makeHandler(i.reveal),i.resizeHandler=i.makeHandler(i.resize)),i.saveRef=i.saveRef.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?s({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!d.observerMode&&this.props.collapse&&window.document.dispatchEvent(d.collapseend)))}},{key:"animationEnd",value:function(e,t,n){var i=this,o=n.forever,r=n.count,s=n.delay,a=n.duration;if(!o){this.animationEndTimeout=window.setTimeout((function(){i&&i.el&&(i.animationEndTimeout=void 0,e.call(i))}),s+(a+(t?a:0)*r))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,n){var i=n.duration+(t.cascade?n.duration:0),o=this.isOn?this.getDimensionValue():0,r=void 0,s=void 0;if(t.collapseOnly)r=n.duration/3,s=n.delay;else{var a=i>>2,l=a>>1;r=a,s=n.delay+(this.isOn?0:i-a-l),e.style.animationDuration=i-a+(this.isOn?l:-l)+"ms",e.style.animationDelay=n.delay+(this.isOn?a-l:0)+"ms"}return e.collapse={height:o,transition:"height "+r+"ms ease "+s+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,n=e[t?"outEffect":"inEffect"],i="style"in n&&n.style.animationName||void 0,o=void 0;e.collapseOnly?o={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(i=n.make),o={hasAppeared:!0,hasExited:!1,collapse:void 0,style:s({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:i}),className:n.className}),this.setState(e.collapse?this.collapse(o,e,n):o),t?(this.savedChild=u.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),d.ssr&&(0,d.disableSsr)()}},{key:"handleObserve",value:function(e,t){r(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&d.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];d.globalHide||(0,d.hideAll)(),this&&this.el&&(e||(e=this.props),d.ssr&&(0,d.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):n||this.inViewport(e)||e.force?this.animate(e):d.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var n=this.context.transitionGroup,i=n&&!n.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!i||d.ssr&&!d.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):d.ssr&&(d.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map((function(e,t){return u.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):u.default.Children.toArray(e);var i=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],r=i.duration,a=i.reverse,l=n.length,c=2*r;this.props.collapse&&(c=parseInt(this.state.style.animationDuration,10),r=c/2);var p=a?l:0;return n.map((function(e){return"object"===(void 0===e?"undefined":o(e))&&e?u.default.cloneElement(e,{style:s({},e.props.style,t.state.style,{animationDuration:Math.round((0,d.cascade)(a?p--:p++,0,l,r,c))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===o(this.props.children)){var e=u.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:u.default.createElement("div",null,e)}return u.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var n=!1,i=t.props,o=i.style,r=i.className,a=i.children,l=this.props.disabled?r:(this.props.outEffect?d.namespace:"")+(this.state.className?" "+this.state.className:"")+(r?" "+r:"")||void 0,c=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&a&&this.state.style.animationName?(n=this.cascade(a),c=s({},o,{opacity:1})):c=this.props.disabled?o:s({},o,this.state.style);var p=s({},this.props.props,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({className:l,style:c},this.props.refProp,this.saveRef)),h=u.default.cloneElement(t,p,e?n||a:void 0);return void 0!==this.props.collapse?this.props.collapseEl?u.default.cloneElement(this.props.collapseEl,{style:s({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:h}):u.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:h}):h}},{key:"makeHandler",value:function(e){var t=this,n=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,d.raf)(n),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var n=this.el.offsetHeight,i=window.pageYOffset-t.getTop(this.el),o=Math.min(n,window.innerHeight)*(d.globalHide?e.fraction:0);return i>o-window.innerHeight&&i<n-o}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){d.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!d.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(u.default.Component);v.propTypes=h,v.defaultProps={fraction:.2,refProp:"ref"},v.contextTypes=f,v.displayName="RevealBase",t.default=v,e.exports=t.default},"7W2i":function(e,t,n){var i=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=c,t.default=void 0;var i,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=i?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),r=(i=n("Xuae"))&&i.__esModule?i:{default:i},s=n("lwAK"),a=n("FYa8"),l=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,i={};return function(o){var r=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?r=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?r=!1:t.add(o.type);break;case"meta":for(var a=0,l=p.length;a<l;a++){var u=p[a];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?r=!1:n.add(u);else{var c=o.props[u],d=i[u]||new Set;d.has(c)?r=!1:(d.add(c),i[u]=d)}}}return r}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function f(e){var t=e.children,n=(0,o.useContext)(s.AmpStateContext),i=(0,o.useContext)(a.HeadManagerContext);return o.default.createElement(r.default,{reduceComponentsToState:h,headManager:i,inAmpMode:(0,l.isInAmpMode)(n)},t)}f.rewind=function(){};var v=f;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var i;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((i=n("q1tI"))&&i.__esModule?i:{default:i}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var i=n("WkPL");e.exports=function(e){if(Array.isArray(e))return i(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},QeBL:function(e,t,n){"use strict";n.r(t);var i=n("nKUr"),o=n("q1tI"),r=n("8Kt/"),s=n.n(r),a=n("nnH0"),l=n.n(a),u=function(){return Object(i.jsxs)("h1",{className:l.a.wrapper,children:[Object(i.jsx)("div",{className:l.a.cssInJs,children:"CSS-in-JS"}),Object(i.jsx)("div",{className:l.a.vs,children:"vs"}),Object(i.jsx)("div",{className:l.a.stateManagers,children:"State managers"})]})},c=n("/eHF"),d=n.n(c),p=function(e){var t=e.href,n=e.children;return Object(i.jsx)("a",{className:"text-blue-800 border-b border-dashed border-current transition-colors hover:text-blue-400",href:t,children:n})},h=function(e){var t=e.items.slice(0).sort((function(e,t){return e.label.toLocaleLowerCase().localeCompare(t.label.toLocaleLowerCase())}));return Object(i.jsx)("ol",{className:"pl-12 list-decimal list-outside space-y-3 text-lg sm:text-xl sm whitespace-nowrap",children:t.map((function(e,t){var n=e.label,o=e.url;return Object(i.jsx)(d.a,{children:Object(i.jsx)("li",{children:Object(i.jsx)(p,{href:o,children:n})})},t)}))})},f=function(e){var t=e.children;return Object(i.jsx)("div",{className:"space-y-4 text-2xl text-black",children:t})},v=[{label:"Aphrodite",url:"https://github.com/Khan/aphrodite"},{label:"astroturf",url:"https://github.com/4Catalyzer/astroturf"},{label:"Classy",url:"https://inturn.github.io/classy/"},{label:"CSJS",url:"https://github.com/rtsao/csjs"},{label:"CSS constructor",url:"https://github.com/siddharthkp/css-constructor"},{label:"Emotion",url:"https://emotion.sh/"},{label:"Fela",url:"https://fela.js.org/"},{label:"freestyler",url:"https://github.com/streamich/freestyler"},{label:"glamor",url:"https://github.com/threepointone/glamor"},{label:"glamorous",url:"https://glamorous.rocks/"},{label:"goober",url:"https://github.com/cristianbote/goober"},{label:"JSS",url:"https://cssinjs.org/"},{label:"jsxstyle",url:"https://github.com/jsxstyle/jsxstyle"},{label:"Linaria",url:"https://linaria.dev/"},{label:"nano-css",url:"https://github.com/streamich/nano-css"},{label:"radium",url:"https://formidable.com/open-source/radium/"},{label:"Stitches",url:"https://stitches.dev/"},{label:"style-it",url:"https://github.com/buildbreakdo/style-it"},{label:"styled-components",url:"https://styled-components.com/"},{label:"Styletron",url:"https://styletron.org/"},{label:"treat",url:"https://github.com/seek-oss/treat"},{label:"TypeStyle",url:"https://typestyle.github.io/"},{label:"ui-box",url:"https://github.com/segmentio/ui-box"},{label:"xstyled",url:"https://xstyled.dev/"}],m=[{label:"ActiveJS",url:"https://activejs.dev/"},{label:"Constate",url:"https://github.com/diegohaz/constate"},{label:"Easy Peasy",url:"https://easy-peasy.now.sh/"},{label:"effector",url:"https://effector.dev/"},{label:"Faste",url:"https://github.com/theKashey/faste"},{label:"Focal",url:"https://github.com/grammarly/focal"},{label:"Jotai",url:"https://jotai.surge.sh/"},{label:"Microstates",url:"https://github.com/thefrontside/microstates"},{label:"MobX",url:"https://mobx.js.org/"},{label:"Overmind",url:"https://overmindjs.org/"},{label:"Parket",url:"https://github.com/ForsakenHarmony/parket"},{label:"Reatom",url:"https://reatom.js.org/"},{label:"Reclare",url:"https://github.com/oguzgelal/reclare"},{label:"Recoil",url:"https://recoiljs.org/"},{label:"Redux",url:"https://redux.js.org/"},{label:"reistore",url:"https://github.com/Wroud/reistore"},{label:"Storeon",url:"https://github.com/storeon/storeon"},{label:"Undux",url:"https://undux.org/"},{label:"unistore",url:"https://github.com/developit/unistore"},{label:"Unstated",url:"https://github.com/jamiebuilds/unstated"},{label:"Unstated Next",url:"https://github.com/jamiebuilds/unstated-next"},{label:"XState",url:"https://xstate.js.org/"},{label:"Zedux",url:"https://github.com/bowheart/zedux"},{label:"Zustand",url:"https://zustand.surge.sh/"}],b={tie:"bg-gray-50",cssInJs:"bg-pink-50",stateManagers:"bg-blue-50"};t.default=function(){var e=function(e,t){if(e.length>t.length)return"cssInJs";if(t.length>e.length)return"stateManagers";return"tie"}(v,m);return Object(o.useEffect)((function(){var t=b[e];return document.body.classList.add(t),function(){return document.body.classList.remove(t)}}),[e]),Object(i.jsxs)("div",{className:"px-8 py-16 mx-auto w-full max-w-4xl space-y-16",children:[Object(i.jsx)(s.a,{children:Object(i.jsx)("title",{children:"CSS-IN-JS vs STATE MANAGERS"})}),Object(i.jsx)(u,{}),Object(i.jsxs)(f,{children:[Object(i.jsx)("p",{children:"One day I realized there are a lot of CSS-in-JS libraries. Maybe more than state management libraries, which are a lot too..."}),Object(i.jsx)("p",{children:"So, if I count them all, which would win? Let the battle begin!"})]}),Object(i.jsxs)("div",{className:"flex justify-between",children:[Object(i.jsx)("div",{className:"w-5/12",children:Object(i.jsx)(h,{items:v})}),Object(i.jsx)("div",{className:"w-5/12",children:Object(i.jsx)(h,{items:m})})]}),Object(i.jsxs)("div",{className:"text-center text-2xl",children:["cssInJs"===e?Object(i.jsx)("p",{children:"CSS-in-JS wins!"}):"stateManagers"===e?Object(i.jsx)("p",{children:"State managers wins!"}):Object(i.jsx)("p",{children:"It's tie!"}),Object(i.jsxs)("p",{children:["Know a library not listed here?"," ",Object(i.jsx)(p,{href:"https://github.com/44px/css-in-js-vs-state-managers/edit/main/src/data.ts",children:"Add it!"})]})]})]})}},Qetd:function(e,t,n){"use strict";var i=Object.assign.bind(Object);e.exports=i,e.exports.default=e.exports},RIqP:function(e,t,n){var i=n("Ijbi"),o=n("EbDI"),r=n("ZhPi"),s=n("Bnag");e.exports=function(e){return i(e)||o(e)||r(e)||s()}},SksO:function(e,t){function n(t,i){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,i)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}e.exports=function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}},Xuae:function(e,t,n){"use strict";var i=n("RIqP"),o=n("lwsE"),r=n("W8MJ"),s=(n("PJYZ"),n("7W2i")),a=n("a1gu"),l=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return a(this,n)}}t.__esModule=!0,t.default=void 0;var c=n("q1tI"),d=function(e){s(n,e);var t=u(n);function n(e){var r;return o(this,n),(r=t.call(this,e))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(i(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return r(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(c.Component);t.default=d},ZhPi:function(e,t,n){var i=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}},a1gu:function(e,t,n){var i=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?o(e):t}},ar19:function(e,t,n){"use strict";function i(e){try{return f.insertRule(e,f.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function o(){c||(t.globalHide=c=!0,window.removeEventListener("scroll",o,!0),i("."+r+" { opacity: 0; }"),window.removeEventListener("orientationchange",o,!0),window.document.removeEventListener("visibilitychange",o))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=i,t.cascade=function(e,t,n,i,o){var r=Math.log(i),s=(Math.log(o)-r)/(n-t);return Math.exp(r+s*(e-t))},t.animation=function(e){if(!f)return"";var t="@keyframes "+(v+p)+"{"+e+"}",n=h[e];return n?""+v+n:(f.insertRule(t,f.cssRules.length),h[e]=p,""+v+p++)},t.hideAll=o,t.default=function(e){var n=e.ssrFadeout;t.fadeOutEnabled=n};var r=t.namespace="react-reveal",s=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),a=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},u=t.disableSsr=function(){return t.ssr=s=!1},c=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),d=(t.ie10=!1,t.collapseend=void 0),p=1,h={},f=!1,v=r+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=a="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=s=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),s&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=s=!1),s&&window.setTimeout(u,1500),a||(t.collapseend=d=document.createEvent("Event"),d.initEvent("collapseend",!0,!0));var m=document.createElement("style");document.head.appendChild(m),m.sheet&&m.sheet.cssRules&&m.sheet.insertRule&&(f=m.sheet,window.addEventListener("scroll",o,!0),window.addEventListener("orientationchange",o,!0),window.document.addEventListener("visibilitychange",o))}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},"eH+L":function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=function(e,t,n,i){return"in"in e&&(e.when=e.in),r.default.Children.count(i)<2?r.default.createElement(s.default,o({},e,{inEffect:t,outEffect:n,children:i})):(i=r.default.Children.map(i,(function(i){return r.default.createElement(s.default,o({},e,{inEffect:t,outEffect:n,children:i}))})),"Fragment"in r.default?r.default.createElement(r.default.Fragment,null,i):r.default.createElement("span",null,i))};var r=i(n("q1tI")),s=i(n("28nh"));e.exports=t.default},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var i;t.__esModule=!0,t.AmpStateContext=void 0;var o=((i=n("q1tI"))&&i.__esModule?i:{default:i}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},nnH0:function(e,t,n){e.exports={wrapper:"Logo_wrapper__zBEdm",cssInJs:"Logo_cssInJs__1SJ4y",stateManagers:"Logo_stateManagers__1V8Gx",vs:"Logo_vs__M_UBt"}}},[["/EDR",0,1]]]);