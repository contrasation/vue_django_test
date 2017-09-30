/*!
* Vue Material v0.7.5
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=468)})({0:function(e,t){e.exports=function(e,t,n,i,o){var s,r=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,r=e.default);var c="function"==typeof r?r.options:r;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),i&&(c._scopeId=i);var d;if(o?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=d):n&&(d=n),d){var a=c.functional,l=a?c.render:c.beforeCreate;a?c.render=function(e,t){return d.call(t),l(e,t)}:c.beforeCreate=l?[].concat(l,d):[d]}return{esModule:s,exports:r,options:c}}},1:function(e,t,n){"use strict";function i(e){if(!e)return null;var t=e.mdTheme;return t||"md-theme"!==e.$options._componentTag||(t=e.mdName),t||i(e.$parent)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return i(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(e){this.$material.useTheme(e)}},beforeMount:function(){var e=this.mdTheme;this.$material.useTheme(e?e:"default")}},e.exports=t.default},102:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e){e.component("md-sidenav",r.default),e.material.styles.push(c.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var s=n(347),r=i(s),u=n(284),c=i(u);e.exports=t.default},178:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),s=i(o);t.default={name:"md-sidenav",data:function(){return{mdVisible:!1}},mixins:[s.default],props:{mdSwipeable:Boolean,mdSwipeThreshold:{type:Number,default:15},mdSwipeDistance:{type:Number,default:100}},computed:{classes:function(){return this.mdVisible&&"md-active"}},methods:{show:function(){this.open()},open:function(){this.mdVisible=!0,this.$el.focus(),this.$emit("open")},close:function(){this.mdVisible=!1,this.$el.blur(),this.$emit("close")},toggle:function(){this.mdVisible?this.close():this.open()},isHorizontallyInside:function(e){return e>0&&e<this.mountedRect.left+this.mountedRect.width},isVerticallyInside:function(e){return e>0&&e<this.mountedRect.top+this.mountedRect.height},isFromStartWhenClosed:function(e){return!!this.mdVisible||e<this.mdSwipeThreshold},handleTouchStart:function(e){var t=e.touches[0].clientX-this.mountedRect.left,n=e.touches[0].clientY-this.mountedRect.top;this.isHorizontallyInside(t)&&this.isVerticallyInside(n)&&this.isFromStartWhenClosed(t)&&(this.initialTouchPosition=t,this.canMove=!0)},handleTouchEnd:function(){this.canMove=!1,this.initialTouchPosition=null},handleTouchMove:function(e){if(this.canMove){var t=e.touches[0].clientX,n=this.mdVisible?this.initialTouchPosition-t:t-this.initialTouchPosition,i=this.mdVisible?"close":"open";n>this.mdSwipeDistance&&this[i]()}}},mounted:function(){this.mdSwipeable&&(this.mountedRect=this.$refs.backdrop.$el.getBoundingClientRect(),this.initialTouchPosition=null,this.canMove=!1,document.addEventListener("touchstart",this.handleTouchStart),document.addEventListener("touchend",this.handleTouchEnd),document.addEventListener("touchmove",this.handleTouchMove))},beforeDestroy:function(){this.mdSwipeable&&(document.removeEventListener("touchstart",this.handleTouchStart),document.removeEventListener("touchend",this.handleTouchEnd),document.removeEventListener("touchmove",this.handleTouchMove))}},e.exports=t.default},249:function(e,t){},284:function(e,t){e.exports=".THEME_NAME.md-sidenav .md-sidenav-content{background-color:BACKGROUND-COLOR;color:BACKGROUND-CONTRAST}\n"},347:function(e,t,n){function i(e){n(249)}var o=n(0)(n(178),n(414),i,null,null);e.exports=o.exports},414:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-sidenav",class:[e.themeClass,e.classes],attrs:{tabindex:"0"},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"esc",27)?void e.close(t):null}}},[n("div",{staticClass:"md-sidenav-content"},[e._t("default")],2),e._v(" "),n("md-backdrop",{ref:"backdrop",staticClass:"md-sidenav-backdrop",on:{close:e.close}})],1)},staticRenderFns:[]}},468:function(e,t,n){e.exports=n(102)}})}));