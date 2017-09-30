!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterialInput=t():e.VueMaterialInput=t()}(this,function(){return function(e){function t(l){if(a[l])return a[l].exports;var o=a[l]={exports:{},id:l,loaded:!1};return e[l].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var o=a(3),n=l(o);e.exports=n.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"material-input",computed:{computedErrors:function(){return"string"==typeof this.errorMessages?[this.errorMessages]:this.errorMessages},computedClasses:function(){return{"material--active":this.focus,"material--disabled":this.disabled,"material--has-errors":Boolean(!this.valid||this.errorMessages&&this.errorMessages.length),"material--raised":Boolean(this.focus||this.valueCopy||this.placeholder&&!this.valueCopy)}}},data:function(){return{valueCopy:null,focus:!1,valid:!0}},beforeMount:function(){this.copyValue(this.value)},methods:{handleModelInput:function(e){this.$emit("input",e.target.value,e),this.handleValidation()},handleFocus:function(e){this.focus=e},handleValidation:function(){this.valid=this.$el?this.$el.querySelector(".material-input").validity.valid:this.valid},copyValue:function(e){this.valueCopy=e,this.handleValidation()}},watch:{value:function(e){this.copyValue(e)}},props:{id:{type:String,default:null},name:{type:String,default:null},type:{type:String,default:"text"},value:{default:null},placeholder:{type:String,default:null},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},min:{type:String,default:null},max:{type:String,default:null},step:{type:Number,default:null},minlength:{type:Number,default:null},maxlength:{type:Number,default:null},required:{type:Boolean,default:!0},autocomplete:{type:String,default:null},errorMessages:{type:[Array,String],default:null}}}},function(e,t){},function(e,t,a){var l,o;a(2),l=a(1);var n=a(4);o=l=l||{},"object"!=typeof l.default&&"function"!=typeof l.default||(o=l=l.default),"function"==typeof o&&(o=o.options),o.render=n.render,o.staticRenderFns=n.staticRenderFns,e.exports=l},function(e,t){e.exports={render:function(){var e=this;return e._h("div",{staticClass:"material-input__component",class:e.computedClasses},["email"===e.type?e._h("input",{directives:[{name:"model",rawName:"v-model",value:e.valueCopy,expression:"valueCopy"}],staticClass:"material-input",attrs:{type:"email",name:e.name,id:e.id,placeholder:e.placeholder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autocomplete,required:e.required},domProps:{value:e._s(e.valueCopy)},on:{focus:function(t){e.handleFocus(!0)},blur:function(t){e.handleFocus(!1)},input:[function(t){t.target.composing||(e.valueCopy=t.target.value)},e.handleModelInput]}}):e._e()," ","url"===e.type?e._h("input",{directives:[{name:"model",rawName:"v-model",value:e.valueCopy,expression:"valueCopy"}],staticClass:"material-input",attrs:{type:"url",name:e.name,id:e.id,placeholder:e.placeholder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autocomplete,required:e.required},domProps:{value:e._s(e.valueCopy)},on:{focus:function(t){e.handleFocus(!0)},blur:function(t){e.handleFocus(!1)},input:[function(t){t.target.composing||(e.valueCopy=t.target.value)},e.handleModelInput]}}):e._e()," ","number"===e.type?e._h("input",{directives:[{name:"model",rawName:"v-model",value:e.valueCopy,expression:"valueCopy"}],staticClass:"material-input",attrs:{type:"number",name:e.name,id:e.id,placeholder:e.placeholder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autocomplete,max:e.max,min:e.min,step:e.step,minlength:e.minlength,maxlength:e.maxlength,required:e.required},domProps:{value:e._s(e.valueCopy)},on:{focus:function(t){e.handleFocus(!0)},blur:function(t){e.handleFocus(!1)},input:[function(t){t.target.composing||(e.valueCopy=e._n(t.target.value))},e.handleModelInput]}}):e._e()," ","password"===e.type?e._h("input",{directives:[{name:"model",rawName:"v-model",value:e.valueCopy,expression:"valueCopy"}],staticClass:"material-input",attrs:{type:"password",name:e.name,id:e.id,placeholder:e.placeholder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autocomplete,max:e.max,min:e.min,step:e.step,required:e.required},domProps:{value:e._s(e.valueCopy)},on:{focus:function(t){e.handleFocus(!0)},blur:function(t){e.handleFocus(!1)},input:[function(t){t.target.composing||(e.valueCopy=t.target.value)},e.handleModelInput]}}):e._e()," ","tel"===e.type?e._h("input",{directives:[{name:"model",rawName:"v-model",value:e.valueCopy,expression:"valueCopy"}],staticClass:"material-input",attrs:{type:"tel",name:e.name,id:e.id,placeholder:e.placeholder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autocomplete,required:e.required},domProps:{value:e._s(e.valueCopy)},on:{focus:function(t){e.handleFocus(!0)},blur:function(t){e.handleFocus(!1)},input:[function(t){t.target.composing||(e.valueCopy=t.target.value)},e.handleModelInput]}}):e._e()," ","text"===e.type?e._h("input",{directives:[{name:"model",rawName:"v-model",value:e.valueCopy,expression:"valueCopy"}],staticClass:"material-input",attrs:{type:"text",name:e.name,id:e.id,placeholder:e.placeholder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autocomplete,minlength:e.minlength,maxlength:e.maxlength,required:e.required},domProps:{value:e._s(e.valueCopy)},on:{focus:function(t){e.handleFocus(!0)},blur:function(t){e.handleFocus(!1)},input:[function(t){t.target.composing||(e.valueCopy=t.target.value)},e.handleModelInput]}}):e._e()," ",e._m(0)," ",e._h("label",{staticClass:"material-label"},[e._t("default")])," ",e.errorMessages?e._h("div",{staticClass:"material-errors"},[e._l(e.computedErrors,function(t){return e._h("div",{staticClass:"material-error"},["\n      "+e._s(t)+"\n    "])})]):e._e()])},staticRenderFns:[function(){var e=this;return e._h("span",{staticClass:"material-input-bar"})}]}}])});