/*!
* Vue Material v0.7.5
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()})(this,(function(){return (function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=462)})({0:function(t,e){t.exports=function(t,e,n,i,o){var s,r=t=t||{},d=typeof t.default;"object"!==d&&"function"!==d||(s=t,r=t.default);var l="function"==typeof r?r.options:r;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),i&&(l._scopeId=i);var u;if(o?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=u):n&&(u=n),u){var h=l.functional,a=h?l.render:l.beforeCreate;h?l.render=function(t,e){return u.call(e),a(t,e)}:l.beforeCreate=a?[].concat(a,u):[u]}return{esModule:s,exports:r,options:l}}},10:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function t(e,n){return!(!e||!e.$el)&&(0!==e._uid&&(e.$el.classList.contains(n)?e:t(e.$parent,n)))};e.default=i,t.exports=e.default},125:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=0,o=function(t,e){return e.top<=i-parseInt(getComputedStyle(t).marginTop,10)},s=function(t,e){return e.top+t.offsetHeight+i>=window.innerHeight-parseInt(getComputedStyle(t).marginTop,10)},r=function(t,e){return e.left<=i-parseInt(getComputedStyle(t).marginLeft,10)},d=function(t,e){return e.left+t.offsetWidth+i>=window.innerWidth-parseInt(getComputedStyle(t).marginLeft,10)},l=function(t,e){var n=getComputedStyle(t);return o(t,e)&&(e.top=i-parseInt(n.marginTop,10)),r(t,e)&&(e.left=i-parseInt(n.marginLeft,10)),d(t,e)&&(e.left=window.innerWidth-i-t.offsetWidth-parseInt(n.marginLeft,10)),s(t,e)&&(e.top=window.innerHeight-i-t.offsetHeight-parseInt(n.marginTop,10)),e};e.default=l,t.exports=e.default},168:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(42),s=i(o),r=n(125),d=i(r);e.default={name:"md-menu",props:{mdSize:{type:[Number,String],default:0},mdDirection:{type:String,default:"bottom right"},mdAlignTrigger:{type:Boolean,default:!1},mdOffsetX:{type:[Number,String],default:0},mdOffsetY:{type:[Number,String],default:0},mdCloseOnSelect:{type:Boolean,default:!0},mdAutoWidth:{type:Boolean,default:!1},mdFixed:{type:Boolean,default:!1},mdNoFocus:{type:Boolean,default:!1},mdManualToggle:{type:Boolean,default:!1},mdMaxHeight:{type:Number,default:0}},data:function(){return{active:!1}},watch:{mdSize:function(t,e){t>=1&&t<=7&&(this.removeLastSizeMenuContentClass(e),this.addNewSizeMenuContentClass(t))},mdDirection:function(t,e){this.removeLastDirectionMenuContentClass(e),this.addNewDirectionMenuContentClass(t)},mdAlignTrigger:function(t){this.handleAlignTriggerClass(t)}},methods:{validateMenu:function(){if(!this.menuContent)throw this.$destroy(),new Error("You must have a md-menu-content inside your menu.");if(!this.menuTrigger)throw this.$destroy(),new Error("You must have an element with a md-menu-trigger attribute inside your menu.")},removeLastSizeMenuContentClass:function(t){this.menuContent.classList.remove("md-size-"+t)},removeLastDirectionMenuContentClass:function(t){this.menuContent.classList.remove("md-direction-"+t.replace(/ /g,"-"))},addNewSizeMenuContentClass:function(t){this.menuContent.classList.add("md-size-"+t)},addNewDirectionMenuContentClass:function(t){this.menuContent.classList.add("md-direction-"+t.replace(/ /g,"-"))},handleAlignTriggerClass:function(t){t&&this.menuContent.classList.add("md-align-trigger")},getPosition:function(t,e){var n=this.menuTrigger.getBoundingClientRect(),i="top"===t?n.top+n.height-this.menuContent.offsetHeight:n.top,o="left"===e?n.left-this.menuContent.offsetWidth+n.width:n.left;return i+=parseInt(this.mdOffsetY,10),o+=parseInt(this.mdOffsetX,10),this.mdAlignTrigger&&("top"===t?i-=n.height+11:i+=n.height+11),{top:i,left:o}},calculateMenuContentPos:function(){var t=void 0,e=void 0,n=8;if(!this._destroyed){if(t=this.mdDirection?this.getPosition.apply(this,this.mdDirection.trim().split(" ")):this.getPosition("bottom","right"),this.mdAutoWidth&&(e=this.menuTrigger.getBoundingClientRect().width,this.menuContent.style.width=parseInt(e,10)+"px"),this.mdFixed){if(0===this.mdMaxHeight)this.menuContent.style.maxHeight=window.innerHeight-this.menuTrigger.getBoundingClientRect().bottom-n+"px";else if(this.menuContent.children[0].children.length>0){var i=this.menuContent.children[0].children[0].clientHeight;this.menuContent.style.maxHeight=2*n+i*this.mdMaxHeight+"px"}}else t=(0,d.default)(this.menuContent,t);this.menuContent.style.top=t.top+window.pageYOffset+"px",this.menuContent.style.left=t.left+window.pageXOffset+"px"}},recalculateOnResize:function(){window.requestAnimationFrame(this.calculateMenuContentPos)},open:function(){document.body.contains(this.menuContent)&&document.body.removeChild(this.menuContent),document.body.appendChild(this.menuContent),document.body.appendChild(this.backdropElement),window.addEventListener("resize",this.recalculateOnResize),this.calculateMenuContentPos(),getComputedStyle(this.menuContent).top,this.menuContent.classList.add("md-active"),this.mdNoFocus||this.menuContent.focus(),this.active=!0,this.$emit("open")},close:function t(){var e=this,t=function t(n){if(e.menuContent&&n.target===e.menuContent){var i=e.menuContent.querySelector(".md-ripple.md-active");e.menuContent.removeEventListener(s.default,t),e.mdNoFocus||e.menuTrigger.focus(),e.active=!1,i&&i.classList.remove("md-active"),document.body.contains(e.menuContent)&&document.body.removeChild(e.menuContent),document.body.contains(e.backdropElement)&&document.body.removeChild(e.backdropElement),window.removeEventListener("resize",e.recalculateOnResize)}};this.menuContent.addEventListener(s.default,t),this.menuContent.classList.remove("md-active"),this.$emit("close")},toggle:function(){this.active?this.close():this.open()}},mounted:function(){var t=this;this.$nextTick((function(){t.menuTrigger=t.$el.querySelector("[md-menu-trigger]"),t.menuContent=t.$el.querySelector(".md-menu-content"),t.backdropElement=t.$refs.backdrop.$el,t.validateMenu(),t.handleAlignTriggerClass(t.mdAlignTrigger),t.addNewSizeMenuContentClass(t.mdSize),t.addNewDirectionMenuContentClass(t.mdDirection),t.$el.removeChild(t.$refs.backdrop.$el),t.menuContent.parentNode.removeChild(t.menuContent),t.mdManualToggle||t.menuTrigger.addEventListener("click",t.toggle)}))},beforeDestroy:function(){document.body.contains(this.menuContent)&&(document.body.removeChild(this.menuContent),document.body.removeChild(this.backdropElement)),this.mdManualToggle||this.menuTrigger.removeEventListener("click",this.toggle),window.removeEventListener("resize",this.recalculateOnResize),this._destroyed=!0}},t.exports=e.default},169:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"md-menu-content",data:function(){return{oldHighlight:!1,highlighted:!1,itemsAmount:0,itemListCount:0}},methods:{close:function(){this.highlighted=!1,this.$parent.close()},highlightItem:function(t){this.itemsAmount=this.$children[0].$children.length,this.itemsAmount<this.highlighted-1&&(this.highlighted=1),this.oldHighlight=this.highlighted,"up"===t&&(1===this.highlighted?this.highlighted=this.itemsAmount:this.highlighted--),"down"===t&&(this.highlighted===this.itemsAmount?this.highlighted=1:this.highlighted++),this.$children[0].$children[this.highlighted-1].$el.scrollIntoView({block:"end",behavior:"smooth"});for(var e=0;e<this.itemsAmount;e++)this.$children[0].$children[e].highlighted=!1;this.$children[0].$children[this.highlighted-1].highlighted=!0},fireClick:function(){this.highlighted>0&&this.getOptions()[this.highlighted-1].$el.click()},getOptions:function(){return this.$children[0].$children.filter((function(t){return t.$el.classList.contains("md-option")}))}},mounted:function(){if(!this.$parent.$el.classList.contains("md-menu"))throw this.$destroy(),new Error("You must wrap the md-menu-content in a md-menu")}},t.exports=e.default},170:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(10),s=i(o);n(228),e.default={name:"md-menu-item",props:{href:String,target:String,disabled:Boolean,listIndex:{type:Number,default:-1},manualHighlight:{type:Boolean,default:!1}},data:function(){return{parentContent:{},index:0,highlighted:!1}},computed:{classes:function(){return{"md-highlighted":this.highlighted}},getHighlight:function(){if(!this.manualHighlight)return this.index===this.parentContent.highlighted?(this.disabled&&(this.parentContent.oldHighlight>this.parentContent.highlighted?this.parentContent.highlighted--:this.parentContent.highlighted++),1===this.index?this.parentContent.$el.scrollTop=0:this.index===this.parentContent.itemsAmount?this.parentContent.$el.scrollTop=this.parentContent.$el.scrollHeight:this.$el.scrollIntoViewIfNeeded(!1),this.highlighted=!0,!0):(this.highlighted=!1,!1)}},methods:{close:function(t){this.parentMenu.mdManualToggle?this.disabled||(this.$emit("click",t),this.$emit("selected",t)):this.disabled||(this.parentMenu.mdCloseOnSelect&&this.parentContent.close(),this.$emit("click",t),this.$emit("selected",t))}},mounted:function(){if(this.parentContent=(0,s.default)(this.$parent,"md-menu-content"),this.parentMenu=(0,s.default)(this.$parent,"md-menu"),!this.parentContent)throw this.$destroy(),new Error("You must wrap the md-menu-item in a md-menu-content");this.listIndex===-1?(this.parentContent.itemListCount++,this.index=this.parentContent.itemListCount):this.index=this.listIndex+1}},t.exports=e.default},228:function(t,e){Element.prototype.scrollIntoViewIfNeeded||(Element.prototype.scrollIntoViewIfNeeded=function(t){t=0===arguments.length||!!t;var e=this.parentNode,n=window.getComputedStyle(e,null),i=parseInt(n.getPropertyValue("border-top-width")),o=parseInt(n.getPropertyValue("border-left-width")),s=this.offsetTop-e.offsetTop<e.scrollTop,r=this.offsetTop-e.offsetTop+this.clientHeight-i>e.scrollTop+e.clientHeight,d=this.offsetLeft-e.offsetLeft<e.scrollLeft,l=this.offsetLeft-e.offsetLeft+this.clientWidth-o>e.scrollLeft+e.clientWidth,u=s&&!r;(s||r)&&t&&(e.scrollTop=this.offsetTop-e.offsetTop-e.clientHeight/2-i+this.clientHeight/2),(d||l)&&t&&(e.scrollLeft=this.offsetLeft-e.offsetLeft-e.clientWidth/2-o+this.clientWidth/2),(s||r||d||l)&&!t&&this.scrollIntoView(u)})},263:function(t,e){},278:function(t,e){t.exports=".md-menu-content .THEME_NAME.md-list{background-color:BACKGROUND-COLOR;color:BACKGROUND-CONTRAST}.md-menu-content .THEME_NAME.md-list .md-menu-item:hover .md-button:not([disabled]),.md-menu-content .THEME_NAME.md-list .md-menu-item:focus .md-button:not([disabled]),.md-menu-content .THEME_NAME.md-list .md-menu-item.md-highlighted .md-button:not([disabled]){background-color:BACKGROUND-CONTRAST-0.12}.md-menu-content .THEME_NAME.md-list .md-menu-item[disabled]{color:BACKGROUND-CONTRAST-0.38}\n"},337:function(t,e,n){function i(t){n(263)}var o=n(0)(n(168),n(440),i,null,null);t.exports=o.exports},338:function(t,e,n){var i=n(0)(n(169),n(432),null,null,null);t.exports=i.exports},339:function(t,e,n){var i=n(0)(n(170),n(384),null,null,null);t.exports=i.exports},384:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-list-item",{staticClass:"md-menu-item",class:t.classes,attrs:{href:t.href,target:t.target,disabled:t.disabled},on:{click:t.close}},[t._t("default")],2)},staticRenderFns:[]}},42:function(t,e,n){"use strict";function i(){var t=document.createElement("span"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var n in e)if(void 0!==t.style[n])return e[n]}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i(),t.exports=e.default},432:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-menu-content",attrs:{tabindex:"-1"},on:{keydown:[function(e){return"button"in e||!t._k(e.keyCode,"esc",27)?(e.preventDefault(),void t.close(e)):null},function(e){return"button"in e||!t._k(e.keyCode,"tab",9)?(e.preventDefault(),void t.close(e)):null},function(e){return"button"in e||!t._k(e.keyCode,"up",38)?(e.preventDefault(),void t.highlightItem("up")):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40)?(e.preventDefault(),void t.highlightItem("down")):null},function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?void t.fireClick(e):null},function(e){return"button"in e||!t._k(e.keyCode,"space",32)?void t.fireClick(e):null}]}},[n("md-list",[t._t("default")],2)],1)},staticRenderFns:[]}},440:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-menu"},[t._t("default"),t._v(" "),n("md-backdrop",{ref:"backdrop",staticClass:"md-menu-backdrop md-transparent md-active",on:{close:t.close}})],2)},staticRenderFns:[]}},462:function(t,e,n){t.exports=n(96)},96:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t){t.component("md-menu",r.default),t.component("md-menu-item",l.default),t.component("md-menu-content",h.default),t.material.styles.push(c.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var s=n(337),r=i(s),d=n(339),l=i(d),u=n(338),h=i(u),a=n(278),c=i(a);t.exports=e.default}})}));