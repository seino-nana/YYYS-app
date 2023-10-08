import{d as e,m as a,a as t,K as l,r as s,o,c,w as r,g as i,e as n,h as u,b as d,t as h,f as p,n as m,H as f,i as y,l as g,L as _,y as b,p as v,z as k,j as C,k as S,F as w,C as x,B as I,S as $,s as A}from"./index-c10f9bc5.js";import{b as B,_ as j}from"./u-image.0192172e.js";import{r as z}from"./uni-app.es.7b888dc1.js";import{_ as T}from"./_plugin-vue_export-helper.1b428a4d.js";import{c as V}from"./data.700934dc.js";import"./member.156f20f2.js";const F=T({name:"u-search",mixins:[a,t,{props:{shape:{type:String,default:e.search.shape},bgColor:{type:String,default:e.search.bgColor},placeholder:{type:String,default:e.search.placeholder},clearabled:{type:Boolean,default:e.search.clearabled},focus:{type:Boolean,default:e.search.focus},showAction:{type:Boolean,default:e.search.showAction},actionStyle:{type:Object,default:e.search.actionStyle},actionText:{type:String,default:e.search.actionText},inputAlign:{type:String,default:e.search.inputAlign},inputStyle:{type:Object,default:e.search.inputStyle},disabled:{type:Boolean,default:e.search.disabled},borderColor:{type:String,default:e.search.borderColor},searchIconColor:{type:String,default:e.search.searchIconColor},color:{type:String,default:e.search.color},placeholderColor:{type:String,default:e.search.placeholderColor},searchIcon:{type:String,default:e.search.searchIcon},searchIconSize:{type:[Number,String],default:e.search.searchIconSize},margin:{type:String,default:e.search.margin},animation:{type:Boolean,default:e.search.animation},modelValue:{type:String,default:e.search.value},value:{type:String,default:e.search.value},maxlength:{type:[String,Number],default:e.search.maxlength},height:{type:[String,Number],default:e.search.height},label:{type:[String,Number,null],default:e.search.label}}}],data(){return{keyword:"",showClear:!1,show:!1,focused:this.focus}},watch:{keyword(e){this.$emit("update:modelValue",e),this.$emit("change",e)},modelValue:{immediate:!0,handler(e){this.keyword=e}}},computed:{showActionBtn(){return!this.animation&&this.showAction}},emits:["clear","search","custom","focus","blur","click","clickIcon","update:modelValue","change"],methods:{inputChange(e){this.keyword=e.detail.value},clear(){this.keyword="",this.$nextTick((()=>{this.$emit("clear")}))},search(e){this.$emit("search",e.detail.value);try{l()}catch(a){}},custom(){this.$emit("custom",this.keyword);try{l()}catch(e){}},getFocus(){this.focused=!0,this.animation&&this.showAction&&(this.show=!0),this.$emit("focus",this.keyword)},blur(){setTimeout((()=>{this.focused=!1}),100),this.show=!1,this.$emit("blur",this.keyword)},clickHandler(){this.disabled&&this.$emit("click")},clickIcon(){this.$emit("clickIcon")}}},[["render",function(e,a,t,l,b,v){const k=y,C=z(s("u-icon"),B),S=g,w=_;return o(),c(S,{class:"u-search",onClick:v.clickHandler,style:n([{margin:e.margin},e.$u.addStyle(e.customStyle)])},{default:r((()=>[i(S,{class:"u-search__content",style:n({backgroundColor:e.bgColor,borderRadius:"round"==e.shape?"100px":"4px",borderColor:e.borderColor})},{default:r((()=>[e.$slots.label||null!==e.label?u(e.$slots,"label",{key:0},(()=>[i(k,{class:"u-search__content__label"},{default:r((()=>[d(h(e.label),1)])),_:1})]),!0):p("",!0),i(S,{class:"u-search__content__icon"},{default:r((()=>[i(C,{onClick:v.clickIcon,size:e.searchIconSize,name:e.searchIcon,color:e.searchIconColor?e.searchIconColor:e.color},null,8,["onClick","size","name","color"])])),_:1}),i(w,{"confirm-type":"search",onBlur:v.blur,value:b.keyword,onConfirm:v.search,onInput:v.inputChange,disabled:e.disabled,onFocus:v.getFocus,focus:e.focus,maxlength:e.maxlength,"placeholder-class":"u-search__content__input--placeholder",placeholder:e.placeholder,"placeholder-style":`color: ${e.placeholderColor}`,class:"u-search__content__input",type:"text",style:n([{textAlign:e.inputAlign,color:e.color,backgroundColor:e.bgColor,height:e.$u.addUnit(e.height)},e.inputStyle])},null,8,["onBlur","value","onConfirm","onInput","disabled","onFocus","focus","maxlength","placeholder","placeholder-style","style"]),b.keyword&&e.clearabled&&b.focused?(o(),c(S,{key:1,class:"u-search__content__icon u-search__content__close",onClick:v.clear},{default:r((()=>[i(C,{name:"close",size:"11",color:"#ffffff",customStyle:"line-height: 12px"})])),_:1},8,["onClick"])):p("",!0)])),_:3},8,["style"]),i(k,{style:n([e.actionStyle]),class:m(["u-search__action",[(v.showActionBtn||b.show)&&"u-search__action--active"]]),onClick:f(v.custom,["stop","prevent"])},{default:r((()=>[d(h(e.actionText),1)])),_:1},8,["style","class","onClick"])])),_:3},8,["onClick","style"])}],["__scopeId","data-v-0989bf86"]]),L=T({__name:"search",setup(e){const{safeAreaInsets:a}=b(),t=v(""),l=v([]),u=v(0),p=v(!1),m=v({keywords:t,range:0,num:10,page:1}),f=()=>{t.value?(m.value.page=1,l.value=[],V(m.value).then((e=>{l.value=e.movieList,u.value=e.count})),p.value=!0):p.value=!1},y=()=>{x({url:"/pages/index/index"})},_=async()=>{m.value.page++;const e=await V(m.value);0!==e.movieList.length?l.value.push(...e.movieList):I({title:"已经没有了",duration:2e3})};return(e,m)=>{const b=z(s("u-search"),F),v=g,x=z(s("u-image"),j),I=$;return o(),c(v,{class:"search"},{default:r((()=>{var e;return[i(v,{class:"search-bar",style:n({paddingTop:(null==(e=k(a))?void 0:e.top)+"px"})},{default:r((()=>[i(b,{clearabled:!0,bgColor:"#eee",actionText:"取消",shape:"square",modelValue:t.value,"onUpdate:modelValue":m[0]||(m[0]=e=>t.value=e),onChange:f,onCustom:y},null,8,["modelValue"])])),_:1},8,["style"]),i(I,{"scroll-y":"",class:"scroll-view",onScrolltolower:_},{default:r((()=>[p.value?(o(),c(v,{key:0},{default:r((()=>[i(v,{class:"total"},{default:r((()=>[d("查询到有"+h(u.value)+"个相关数据",1)])),_:1}),i(v,{class:"movie-list"},{default:r((()=>[(o(!0),C(w,null,S(l.value,(e=>(o(),c(v,{class:"movie-list-item",onClick:a=>{return t=e.movieId,void A({url:"/pages/playPage/playPage?id="+t});var t}},{default:r((()=>[i(x,{width:"220rpx",height:"280rpx",src:e.image_thumb,"lazy-load":!0},null,8,["src"]),i(v,{class:"movie-list-item-info"},{default:r((()=>[i(v,{style:{"font-size":"32rpx",color:"#f39c12"}},{default:r((()=>[d(h(e.nm),1)])),_:2},1024),i(v,{class:"info-item"},{default:r((()=>[d("年份："+h(e.year)+" · "+h(e.typeDesc)+" · "+h(e.area),1)])),_:2},1024),i(v,{class:"info-item"},{default:r((()=>[d("主演："+h(e.actors),1)])),_:2},1024),i(v,{class:"info-item"},{default:r((()=>[d("类型："+h(e.categorys),1)])),_:2},1024),i(v,{class:"info-item"},{default:r((()=>[d("状态："+h(e.ut),1)])),_:2},1024),i(v,{class:"info-item"},{default:r((()=>[d("播放次数："+h(e.play_count),1)])),_:2},1024)])),_:2},1024),i(v,{class:"score"},{default:r((()=>[d(h(e.score),1)])),_:2},1024)])),_:2},1032,["onClick"])))),256))])),_:1})])),_:1})):(o(),c(v,{key:1,style:{"padding-top":"20rpx"}},{default:r((()=>[d("历史记录")])),_:1}))])),_:1})]})),_:1})}}},[["__scopeId","data-v-ffd6ab6a"]]);export{L as default};