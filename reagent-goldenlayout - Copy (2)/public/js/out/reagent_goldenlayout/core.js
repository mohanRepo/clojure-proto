// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent_goldenlayout.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('js.goldenlayout');
reagent_goldenlayout.core.config = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"row",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Users",new cljs.core.Keyword(null,"type","type",1174270348),"react-component",new cljs.core.Keyword(null,"component","component",1555936782),"user-list"], null)], null)], null)], null)], null);
reagent_goldenlayout.core.config_js = cljs.core.clj__GT_js.call(null,reagent_goldenlayout.core.config);
reagent_goldenlayout.core.t2 = (new GoldenLayout(reagent_goldenlayout.core.config_js));
reagent_goldenlayout.core.User = reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["event:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.props.userData)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Other-Smothing"], null)], null);
})], null));
reagent_goldenlayout.core.User_component = (function reagent_goldenlayout$core$User_component(user){
var sta = reagent.core.atom.call(null,user);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get-initial-state","get-initial-state",-4494070),((function (sta){
return (function (){
return cljs.core.clj__GT_js.call(null,user);
});})(sta))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (sta){
return (function (this$){
cljs.core.println.call(null,"I mounted - user");

cljs.core.println.call(null,this$.props);

cljs.core.println.call(null,"above props");

cljs.core.println.call(null,this$.state);

cljs.core.println.call(null,"above state");

var iter__4324__auto__ = ((function (sta){
return (function reagent_goldenlayout$core$User_component_$_iter__26185(s__26186){
return (new cljs.core.LazySeq(null,((function (sta){
return (function (){
var s__26186__$1 = s__26186;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26186__$1);
if(temp__5457__auto__){
var s__26186__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26186__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__26186__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__26188 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__26187 = (0);
while(true){
if((i__26187 < size__4323__auto__)){
var p = cljs.core._nth.call(null,c__4322__auto__,i__26187);
cljs.core.chunk_append.call(null,b__26188,cljs.core.println.call(null,["Property:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('')));

var G__26189 = (i__26187 + (1));
i__26187 = G__26189;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26188),reagent_goldenlayout$core$User_component_$_iter__26185.call(null,cljs.core.chunk_rest.call(null,s__26186__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26188),null);
}
} else {
var p = cljs.core.first.call(null,s__26186__$2);
return cljs.core.cons.call(null,cljs.core.println.call(null,["Property:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('')),reagent_goldenlayout$core$User_component_$_iter__26185.call(null,cljs.core.rest.call(null,s__26186__$2)));
}
} else {
return null;
}
break;
}
});})(sta))
,null,null));
});})(sta))
;
return iter__4324__auto__.call(null,this$.props);
});})(sta))
,new cljs.core.Keyword(null,"display-name","display-name",694513143),"user-component-1",new cljs.core.Keyword(null,"render","render",-1408033454),((function (sta){
return (function (this$){
cljs.core.println.call(null,"in render");

cljs.core.println.call(null,this$.state);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),this$.state.name], null);
});})(sta))
], null));
});
reagent_goldenlayout.core.UserList = reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"store","store",1512230022),reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"get-initial-state","get-initial-state",-4494070),(function (this$){
cljs.core.reset_BANG_.call(null,this$.store,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"users","users",-713552705),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"11Jackson Turner",new cljs.core.Keyword(null,"street","street",1870012303),"217 Tawny End",new cljs.core.Keyword(null,"img","img",1442687358),"men_1.jpg"], null)], null)], null));

cljs.core.println.call(null,this$.props.glEventHub);

return cljs.core.deref.call(null,this$.store);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
cljs.core.println.call(null,"did i get my state");

cljs.core.println.call(null,this$.state);

cljs.core.println.call(null,this$.props);

cljs.core.println.call(null,"above props");

var iter__4324__auto__ = (function reagent_goldenlayout$core$iter__26190(s__26191){
return (new cljs.core.LazySeq(null,(function (){
var s__26191__$1 = s__26191;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26191__$1);
if(temp__5457__auto__){
var s__26191__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26191__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__26191__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__26193 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__26192 = (0);
while(true){
if((i__26192 < size__4323__auto__)){
var p = cljs.core._nth.call(null,c__4322__auto__,i__26192);
cljs.core.chunk_append.call(null,b__26193,cljs.core.println.call(null,["Property:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('')));

var G__26198 = (i__26192 + (1));
i__26192 = G__26198;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26193),reagent_goldenlayout$core$iter__26190.call(null,cljs.core.chunk_rest.call(null,s__26191__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26193),null);
}
} else {
var p = cljs.core.first.call(null,s__26191__$2);
return cljs.core.cons.call(null,cljs.core.println.call(null,["Property:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('')),reagent_goldenlayout$core$iter__26190.call(null,cljs.core.rest.call(null,s__26191__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,this$.props);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4324__auto__ = (function reagent_goldenlayout$core$iter__26194(s__26195){
return (new cljs.core.LazySeq(null,(function (){
var s__26195__$1 = s__26195;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26195__$1);
if(temp__5457__auto__){
var s__26195__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26195__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__26195__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__26197 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__26196 = (0);
while(true){
if((i__26196 < size__4323__auto__)){
var user = cljs.core._nth.call(null,c__4322__auto__,i__26196);
cljs.core.chunk_append.call(null,b__26197,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_goldenlayout.core.User_component,user,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glEventHub","glEventHub",-2110076359),this$.props.glEventHub], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(user)], null)));

var G__26199 = (i__26196 + (1));
i__26196 = G__26199;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26197),reagent_goldenlayout$core$iter__26194.call(null,cljs.core.chunk_rest.call(null,s__26195__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26197),null);
}
} else {
var user = cljs.core.first.call(null,s__26195__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_goldenlayout.core.User_component,user,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"glEventHub","glEventHub",-2110076359),this$.props.glEventHub], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(user)], null)),reagent_goldenlayout$core$iter__26194.call(null,cljs.core.rest.call(null,s__26195__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(this$.state));
})()], null);
})], null));
reagent_goldenlayout.core.home_page = (function reagent_goldenlayout$core$home_page(){
cljs.core.println.call(null,"I am in home page");

reagent_goldenlayout.core.t2.registerComponent("user-list",reagent_goldenlayout.core.UserList);

return reagent_goldenlayout.core.t2.init();
});
reagent_goldenlayout.core.mount_root = (function reagent_goldenlayout$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_goldenlayout.core.home_page], null),document.getElementById("app"));
});
reagent_goldenlayout.core.init_BANG_ = (function reagent_goldenlayout$core$init_BANG_(){
return reagent_goldenlayout.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1538898183309
