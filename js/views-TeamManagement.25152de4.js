(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-TeamManagement"],{"78d7":function(t,e,i){"use strict";var a=i("6b53");e["a"]=a["a"]},"8efc":function(t,e,i){},"90a2":function(t,e,i){"use strict";i("7db0");var a=i("53ca");function s(t,e){var i=e.modifiers||{},s=e.value,n="object"===Object(a["a"])(s)?s:{handler:s,options:{}},o=n.handler,c=n.options,d=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;if(t._observe){if(o&&(!i.quiet||t._observe.init)){var s=Boolean(e.find((function(t){return t.isIntersecting})));o(e,a,s)}t._observe.init&&i.once?r(t):t._observe.init=!0}}),c);t._observe={init:!1,observer:d},d.observe(t)}function r(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var n={inserted:s,unbind:r};e["a"]=n},adda:function(t,e,i){"use strict";i("a15b"),i("a9e3");var a=i("53ca"),s=(i("8efc"),i("90a2")),r=i("78d7"),n=i("7560"),o=i("58df"),c=i("d9f7"),d=i("d9bd"),l="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(o["a"])(r["a"],n["a"]).extend({name:"v-img",directives:{intersect:s["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(a["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!l||i||this.eager){if(this.normalisedSrc.lazySrc){var a=new Image;a.src=this.normalisedSrc.lazySrc,this.pollForSize(a,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(d["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=function a(){var s=t.naturalHeight,r=t.naturalWidth;s||r?(e.naturalWidth=r,e.calculatedAspectRatio=r/s):null!=i&&!e.hasError&&setTimeout(a,i)};a()},genContent:function(){var t=r["a"].options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=r["a"].options.render.call(this,t),i=Object(c["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:l?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},d047:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{id:"user-profile-view",fluid:"",tag:"section"}},[i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"12",md:"6"}},[i("app-card",{staticClass:"mt-4 text-center"},[i("v-img",{staticClass:"rounded-circle elevation-6 mt-n12 d-inline-block",attrs:{src:"https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg",width:"128"}}),i("v-card-text",{staticClass:"text-center"},[i("h6",{staticClass:"text-h6 mb-2 text--secondary"},[t._v(" CEO / Apex Technologies US ")]),i("h4",{staticClass:"text-h4 mb-3 text--primary"},[t._v(" Ryan Donaher ")]),i("p",{staticClass:"text--secondary"},[t._v(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolorem deserunt veniam tempora magnam quisquam quam error iusto cupiditate ducimus, et eligendi saepe voluptatibus assumenda similique temporibus placeat animi dicta? ")]),i("v-btn",{staticClass:"mr-0",attrs:{color:"primary","min-width":"100",rounded:""}},[t._v(" Follow ")])],1)],1)],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("app-card",{staticClass:"mt-4 text-center"},[i("v-img",{staticClass:"rounded-circle elevation-6 mt-n12 d-inline-block",attrs:{src:"https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg",width:"128"}}),i("v-card-text",{staticClass:"text-center"},[i("h6",{staticClass:"text-h6 mb-2 text--secondary"},[t._v(" Team Manager ")]),i("h4",{staticClass:"text-h4 mb-3 text--primary"},[t._v(" EJ Feulner ")]),i("p",{staticClass:"text--secondary"},[t._v(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolorem deserunt veniam tempora magnam quisquam quam error iusto cupiditate ducimus, et eligendi saepe voluptatibus assumenda similique temporibus placeat animi dicta? ")]),i("v-btn",{staticClass:"mr-0",attrs:{color:"primary","min-width":"100",rounded:""}},[t._v(" Follow ")])],1)],1)],1)],1),i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"12",md:"6"}},[i("app-card",{staticClass:"mt-4 text-center"},[i("v-img",{staticClass:"rounded-circle elevation-6 mt-n12 d-inline-block",attrs:{src:"https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg",width:"128"}}),i("v-card-text",{staticClass:"text-center"},[i("h6",{staticClass:"text-h6 mb-2 text--secondary"},[t._v(" Technical Director ")]),i("h4",{staticClass:"text-h4 mb-3 text--primary"},[t._v(" Chris Barrott ")]),i("p",{staticClass:"text--secondary"},[t._v(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolorem deserunt veniam tempora magnam quisquam quam error iusto cupiditate ducimus, et eligendi saepe voluptatibus assumenda similique temporibus placeat animi dicta? ")]),i("v-btn",{staticClass:"mr-0",attrs:{color:"primary","min-width":"100",rounded:""}},[t._v(" Follow ")])],1)],1)],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("app-card",{staticClass:"mt-4 text-center"},[i("v-img",{staticClass:"rounded-circle elevation-6 mt-n12 d-inline-block",attrs:{src:"https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg",width:"128"}}),i("v-card-text",{staticClass:"text-center"},[i("h6",{staticClass:"text-h6 mb-2 text--secondary"},[t._v(" Sporting Director ")]),i("h4",{staticClass:"text-h4 mb-3 text--primary"},[t._v(" Jamie Conway ")]),i("p",{staticClass:"text--secondary"},[t._v(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolorem deserunt veniam tempora magnam quisquam quam error iusto cupiditate ducimus, et eligendi saepe voluptatibus assumenda similique temporibus placeat animi dicta? ")]),i("v-btn",{staticClass:"mr-0",attrs:{color:"primary","min-width":"100",rounded:""}},[t._v(" Follow ")])],1)],1)],1)],1)],1)},s=[],r={name:"UserProfileView"},n=r,o=i("0c7c"),c=i("6544"),d=i.n(c),l=i("8336"),m=i("99d9"),u=i("62ad"),h=i("a523"),v=i("adda"),p=i("0fd9"),g=Object(o["a"])(n,a,s,!1,null,null,null);e["default"]=g.exports;d()(g,{VBtn:l["a"],VCardText:m["b"],VCol:u["a"],VContainer:h["a"],VImg:v["a"],VRow:p["a"]})}}]);
//# sourceMappingURL=views-TeamManagement.25152de4.js.map