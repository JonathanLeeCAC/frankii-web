(function(t){function e(e){for(var r,i,u=e[0],c=e[1],s=e[2],f=0,p=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/frankii-web/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"22f2":function(t,e,n){"use strict";var r=n("3915"),a=n.n(r);a.a},3915:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",[n("h1",[t._v("Frankii")]),n("v-container",{attrs:{fluid:"",width:"700"}},[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"8"}},[n("FormatServiceCard")],1),n("v-col",{attrs:{cols:"4"}},[n("SearchCard")],1)],1)],1)],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseCard",{attrs:{title:"Search"}},[n("v-container",[n("v-row",[n("BaseSearchButton",{attrs:{url:t.googleUrl,text:"Search on Google"}})],1),n("v-row",[n("BaseSearchButton",{attrs:{url:t.qiitaURL,text:"qiitaで検索"}})],1),n("v-row",[n("BaseSearchButton",{attrs:{url:t.awsURL,text:"AWSの公式ドキュメンテーション"}})],1)],1)],1)},u=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"px-4 pt-2 scroll overflow-y-auto",attrs:{outlined:"",height:"450"}},[n("v-row",{attrs:{"no-gutters":""}},[n("div",{staticClass:"card-title pt-3 pb-3 pl-2"},[t._v(" "+t._s(t.title))])]),t._t("default")],2)},s=[],l={name:"BaseCard",props:{title:String}},f=l,p=(n("22f2"),n("2877")),d=n("6544"),v=n.n(d),h=n("b0af"),m=n("0fd9"),g=Object(p["a"])(f,c,s,!1,null,"712de7c2",null),b=g.exports;v()(g,{VCard:h["a"],VRow:m["a"]});var x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{staticClass:"my-2",attrs:{href:t.url,target:"_blank"}},[t._v(" "+t._s(t.text)+" ")])},y=[],_={name:"BaseSearchButton",props:{text:String,url:String}},w=_,C=n("8336"),T=Object(p["a"])(w,x,y,!1,null,"2e643c74",null),k=T.exports;v()(T,{VBtn:C["a"]});var S={name:"SearchCard",components:{BaseCard:b,BaseSearchButton:k},data:function(){return{googleUrl:"https://www.google.com",qiitaURL:"https://qiita.com/search?q=api",awsURL:"https://docs.aws.amazon.com/search/doc-search.html?searchQuery=apigateway"}}},B=S,O=n("a523"),V=Object(p["a"])(B,i,u,!1,null,"21f2c993",null),j=V.exports;v()(V,{VContainer:O["a"],VRow:m["a"]});var P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseCard",{attrs:{title:"質問文生成",id:"format-service-card"}},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("v-select",{staticClass:"my-2",staticStyle:{"text-align":"left"},attrs:{items:t.categories,"item-text":"displayText","item-value":"category",label:"カテゴリ",filled:"",dense:""},on:{change:t.getInputTemplate}}),t._l(t.inputTemplate,(function(e){return[t._v(" "+t._s(e.label)+" "),t.isMultiLine(e.multiline)?t._e():n("v-text-field",{key:e.key,attrs:{solo:"",dense:""},model:{value:t.input[e.key],callback:function(n){t.$set(t.input,e.key,n)},expression:"input[block.key]"}}),t.isMultiLine(e.multiline)?n("v-textarea",{key:e.key,attrs:{outlined:""},model:{value:t.input[e.key],callback:function(n){t.$set(t.input,e.key,n)},expression:"input[block.key]"}}):t._e()]})),n("v-btn",{on:{click:t.submitToAPI}},[t._v("質問文生成")]),t._v(" "),n("v-btn",[t._v("Clear All")])],2),n("v-col",{attrs:{cols:"6"}},[n("div",{staticClass:"pre-formatted"},[t._v(t._s(t.formattedText))]),n("br"),t.formattedTextExists?n("v-btn",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.formattedText,expression:"formattedText"}]},[t._v("COPY")]):t._e()],1)],1)],1)],1)},F=[],E=n("bc3a"),R=n.n(E);function $(t){return R.a.get(t).then((function(t){return t})).catch((function(t){return t}))}function L(t,e){return R.a.get(t,e).then((function(t){return t})).catch((function(t){return t}))}function M(t,e){return R.a.post(t,e).then((function(t){return t})).catch((function(t){return t}))}var q={get:$,getJson:L,postJson:M},A=q,I="https://zv003n3nr3.execute-api.ap-northeast-1.amazonaws.com/dev";function U(){return A.get(I+"/user/question-categories")}function z(t){return A.get(I+"/user/input-template/"+t)}function J(t){return A.postJson(I+"/user/format",t)}var Q={getFrankiiQuestionCategories:U,getInputTemplate:z,formatQuestionText:J},D=Q,G={name:"FormatServiceCard",components:{BaseCard:b},data:function(){return{theCategory:"",categories:[],input:{},inputTemplate:{},formattedText:""}},methods:{initialize:function(){var t=this;D.getFrankiiQuestionCategories().then((function(e){return t.categories=e.data}))},submitToAPI:function(){var t=this,e={category:this.theCategory,input:this.input};D.formatQuestionText(e).then((function(e){t.formattedText=e.data}))},getInputTemplate:function(t){var e=this;this.theCategory=t,D.getInputTemplate(t).then((function(t){return e.inputTemplate=t.data.blocks}))},isMultiLine:function(t){return t}},mounted:function(){this.initialize()},computed:{formattedTextExists:function(){return void 0!==this.formattedText&&""!==this.formattedText}}},N=G,W=(n("feae"),n("62ad")),Y=n("b974"),H=n("8654"),K=n("a844"),X=Object(p["a"])(N,P,F,!1,null,"c5607842",null),Z=X.exports;v()(X,{VBtn:C["a"],VCol:W["a"],VContainer:O["a"],VRow:m["a"],VSelect:Y["a"],VTextField:H["a"],VTextarea:K["a"]});var tt={name:"App",components:{FormatServiceCard:Z,SearchCard:j},data:function(){return{}}},et=tt,nt=(n("034f"),n("7496")),rt=Object(p["a"])(et,a,o,!1,null,null,null),at=rt.exports;v()(rt,{VApp:nt["a"],VCol:W["a"],VContainer:O["a"],VRow:m["a"]});var ot=n("f309");r["a"].use(ot["a"]);var it=new ot["a"]({theme:{themes:{light:{primary:"#E3F2FD"}}}}),ut=n("4ae6"),ct=n.n(ut);r["a"].use(ct.a),r["a"].config.productionTip=!1,new r["a"]({vuetify:it,render:function(t){return t(at)}}).$mount("#app")},"85ec":function(t,e,n){},cc17:function(t,e,n){},feae:function(t,e,n){"use strict";var r=n("cc17"),a=n.n(r);a.a}});
//# sourceMappingURL=app.fc3075d9.js.map