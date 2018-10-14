// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3949__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27475_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27475_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27476 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27477 = null;
var count__27478 = (0);
var i__27479 = (0);
while(true){
if((i__27479 < count__27478)){
var n = cljs.core._nth.call(null,chunk__27477,i__27479);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27480 = seq__27476;
var G__27481 = chunk__27477;
var G__27482 = count__27478;
var G__27483 = (i__27479 + (1));
seq__27476 = G__27480;
chunk__27477 = G__27481;
count__27478 = G__27482;
i__27479 = G__27483;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27476);
if(temp__5457__auto__){
var seq__27476__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27476__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__27476__$1);
var G__27484 = cljs.core.chunk_rest.call(null,seq__27476__$1);
var G__27485 = c__4351__auto__;
var G__27486 = cljs.core.count.call(null,c__4351__auto__);
var G__27487 = (0);
seq__27476 = G__27484;
chunk__27477 = G__27485;
count__27478 = G__27486;
i__27479 = G__27487;
continue;
} else {
var n = cljs.core.first.call(null,seq__27476__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27488 = cljs.core.next.call(null,seq__27476__$1);
var G__27489 = null;
var G__27490 = (0);
var G__27491 = (0);
seq__27476 = G__27488;
chunk__27477 = G__27489;
count__27478 = G__27490;
i__27479 = G__27491;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__27492){
var vec__27493 = p__27492;
var _ = cljs.core.nth.call(null,vec__27493,(0),null);
var v = cljs.core.nth.call(null,vec__27493,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__27496){
var vec__27497 = p__27496;
var k = cljs.core.nth.call(null,vec__27497,(0),null);
var v = cljs.core.nth.call(null,vec__27497,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27509_27517 = cljs.core.seq.call(null,deps);
var chunk__27510_27518 = null;
var count__27511_27519 = (0);
var i__27512_27520 = (0);
while(true){
if((i__27512_27520 < count__27511_27519)){
var dep_27521 = cljs.core._nth.call(null,chunk__27510_27518,i__27512_27520);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_27521;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27521));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27521,(depth + (1)),state);
} else {
}


var G__27522 = seq__27509_27517;
var G__27523 = chunk__27510_27518;
var G__27524 = count__27511_27519;
var G__27525 = (i__27512_27520 + (1));
seq__27509_27517 = G__27522;
chunk__27510_27518 = G__27523;
count__27511_27519 = G__27524;
i__27512_27520 = G__27525;
continue;
} else {
var temp__5457__auto___27526 = cljs.core.seq.call(null,seq__27509_27517);
if(temp__5457__auto___27526){
var seq__27509_27527__$1 = temp__5457__auto___27526;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27509_27527__$1)){
var c__4351__auto___27528 = cljs.core.chunk_first.call(null,seq__27509_27527__$1);
var G__27529 = cljs.core.chunk_rest.call(null,seq__27509_27527__$1);
var G__27530 = c__4351__auto___27528;
var G__27531 = cljs.core.count.call(null,c__4351__auto___27528);
var G__27532 = (0);
seq__27509_27517 = G__27529;
chunk__27510_27518 = G__27530;
count__27511_27519 = G__27531;
i__27512_27520 = G__27532;
continue;
} else {
var dep_27533 = cljs.core.first.call(null,seq__27509_27527__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_27533;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27533));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27533,(depth + (1)),state);
} else {
}


var G__27534 = cljs.core.next.call(null,seq__27509_27527__$1);
var G__27535 = null;
var G__27536 = (0);
var G__27537 = (0);
seq__27509_27517 = G__27534;
chunk__27510_27518 = G__27535;
count__27511_27519 = G__27536;
i__27512_27520 = G__27537;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27513){
var vec__27514 = p__27513;
var seq__27515 = cljs.core.seq.call(null,vec__27514);
var first__27516 = cljs.core.first.call(null,seq__27515);
var seq__27515__$1 = cljs.core.next.call(null,seq__27515);
var x = first__27516;
var xs = seq__27515__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27514,seq__27515,first__27516,seq__27515__$1,x,xs,get_deps__$1){
return (function (p1__27500_SHARP_){
return clojure.set.difference.call(null,p1__27500_SHARP_,x);
});})(vec__27514,seq__27515,first__27516,seq__27515__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27538 = cljs.core.seq.call(null,provides);
var chunk__27539 = null;
var count__27540 = (0);
var i__27541 = (0);
while(true){
if((i__27541 < count__27540)){
var prov = cljs.core._nth.call(null,chunk__27539,i__27541);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27542_27550 = cljs.core.seq.call(null,requires);
var chunk__27543_27551 = null;
var count__27544_27552 = (0);
var i__27545_27553 = (0);
while(true){
if((i__27545_27553 < count__27544_27552)){
var req_27554 = cljs.core._nth.call(null,chunk__27543_27551,i__27545_27553);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27554,prov);


var G__27555 = seq__27542_27550;
var G__27556 = chunk__27543_27551;
var G__27557 = count__27544_27552;
var G__27558 = (i__27545_27553 + (1));
seq__27542_27550 = G__27555;
chunk__27543_27551 = G__27556;
count__27544_27552 = G__27557;
i__27545_27553 = G__27558;
continue;
} else {
var temp__5457__auto___27559 = cljs.core.seq.call(null,seq__27542_27550);
if(temp__5457__auto___27559){
var seq__27542_27560__$1 = temp__5457__auto___27559;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27542_27560__$1)){
var c__4351__auto___27561 = cljs.core.chunk_first.call(null,seq__27542_27560__$1);
var G__27562 = cljs.core.chunk_rest.call(null,seq__27542_27560__$1);
var G__27563 = c__4351__auto___27561;
var G__27564 = cljs.core.count.call(null,c__4351__auto___27561);
var G__27565 = (0);
seq__27542_27550 = G__27562;
chunk__27543_27551 = G__27563;
count__27544_27552 = G__27564;
i__27545_27553 = G__27565;
continue;
} else {
var req_27566 = cljs.core.first.call(null,seq__27542_27560__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27566,prov);


var G__27567 = cljs.core.next.call(null,seq__27542_27560__$1);
var G__27568 = null;
var G__27569 = (0);
var G__27570 = (0);
seq__27542_27550 = G__27567;
chunk__27543_27551 = G__27568;
count__27544_27552 = G__27569;
i__27545_27553 = G__27570;
continue;
}
} else {
}
}
break;
}


var G__27571 = seq__27538;
var G__27572 = chunk__27539;
var G__27573 = count__27540;
var G__27574 = (i__27541 + (1));
seq__27538 = G__27571;
chunk__27539 = G__27572;
count__27540 = G__27573;
i__27541 = G__27574;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27538);
if(temp__5457__auto__){
var seq__27538__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27538__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__27538__$1);
var G__27575 = cljs.core.chunk_rest.call(null,seq__27538__$1);
var G__27576 = c__4351__auto__;
var G__27577 = cljs.core.count.call(null,c__4351__auto__);
var G__27578 = (0);
seq__27538 = G__27575;
chunk__27539 = G__27576;
count__27540 = G__27577;
i__27541 = G__27578;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27538__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27546_27579 = cljs.core.seq.call(null,requires);
var chunk__27547_27580 = null;
var count__27548_27581 = (0);
var i__27549_27582 = (0);
while(true){
if((i__27549_27582 < count__27548_27581)){
var req_27583 = cljs.core._nth.call(null,chunk__27547_27580,i__27549_27582);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27583,prov);


var G__27584 = seq__27546_27579;
var G__27585 = chunk__27547_27580;
var G__27586 = count__27548_27581;
var G__27587 = (i__27549_27582 + (1));
seq__27546_27579 = G__27584;
chunk__27547_27580 = G__27585;
count__27548_27581 = G__27586;
i__27549_27582 = G__27587;
continue;
} else {
var temp__5457__auto___27588__$1 = cljs.core.seq.call(null,seq__27546_27579);
if(temp__5457__auto___27588__$1){
var seq__27546_27589__$1 = temp__5457__auto___27588__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27546_27589__$1)){
var c__4351__auto___27590 = cljs.core.chunk_first.call(null,seq__27546_27589__$1);
var G__27591 = cljs.core.chunk_rest.call(null,seq__27546_27589__$1);
var G__27592 = c__4351__auto___27590;
var G__27593 = cljs.core.count.call(null,c__4351__auto___27590);
var G__27594 = (0);
seq__27546_27579 = G__27591;
chunk__27547_27580 = G__27592;
count__27548_27581 = G__27593;
i__27549_27582 = G__27594;
continue;
} else {
var req_27595 = cljs.core.first.call(null,seq__27546_27589__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27595,prov);


var G__27596 = cljs.core.next.call(null,seq__27546_27589__$1);
var G__27597 = null;
var G__27598 = (0);
var G__27599 = (0);
seq__27546_27579 = G__27596;
chunk__27547_27580 = G__27597;
count__27548_27581 = G__27598;
i__27549_27582 = G__27599;
continue;
}
} else {
}
}
break;
}


var G__27600 = cljs.core.next.call(null,seq__27538__$1);
var G__27601 = null;
var G__27602 = (0);
var G__27603 = (0);
seq__27538 = G__27600;
chunk__27539 = G__27601;
count__27540 = G__27602;
i__27541 = G__27603;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27604_27608 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27605_27609 = null;
var count__27606_27610 = (0);
var i__27607_27611 = (0);
while(true){
if((i__27607_27611 < count__27606_27610)){
var ns_27612 = cljs.core._nth.call(null,chunk__27605_27609,i__27607_27611);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27612);


var G__27613 = seq__27604_27608;
var G__27614 = chunk__27605_27609;
var G__27615 = count__27606_27610;
var G__27616 = (i__27607_27611 + (1));
seq__27604_27608 = G__27613;
chunk__27605_27609 = G__27614;
count__27606_27610 = G__27615;
i__27607_27611 = G__27616;
continue;
} else {
var temp__5457__auto___27617 = cljs.core.seq.call(null,seq__27604_27608);
if(temp__5457__auto___27617){
var seq__27604_27618__$1 = temp__5457__auto___27617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27604_27618__$1)){
var c__4351__auto___27619 = cljs.core.chunk_first.call(null,seq__27604_27618__$1);
var G__27620 = cljs.core.chunk_rest.call(null,seq__27604_27618__$1);
var G__27621 = c__4351__auto___27619;
var G__27622 = cljs.core.count.call(null,c__4351__auto___27619);
var G__27623 = (0);
seq__27604_27608 = G__27620;
chunk__27605_27609 = G__27621;
count__27606_27610 = G__27622;
i__27607_27611 = G__27623;
continue;
} else {
var ns_27624 = cljs.core.first.call(null,seq__27604_27618__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27624);


var G__27625 = cljs.core.next.call(null,seq__27604_27618__$1);
var G__27626 = null;
var G__27627 = (0);
var G__27628 = (0);
seq__27604_27608 = G__27625;
chunk__27605_27609 = G__27626;
count__27606_27610 = G__27627;
i__27607_27611 = G__27628;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3949__auto__ = goog.require__;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27629__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27629 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27630__i = 0, G__27630__a = new Array(arguments.length -  0);
while (G__27630__i < G__27630__a.length) {G__27630__a[G__27630__i] = arguments[G__27630__i + 0]; ++G__27630__i;}
  args = new cljs.core.IndexedSeq(G__27630__a,0,null);
} 
return G__27629__delegate.call(this,args);};
G__27629.cljs$lang$maxFixedArity = 0;
G__27629.cljs$lang$applyTo = (function (arglist__27631){
var args = cljs.core.seq(arglist__27631);
return G__27629__delegate(args);
});
G__27629.cljs$core$IFn$_invoke$arity$variadic = G__27629__delegate;
return G__27629;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__27632_SHARP_,p2__27633_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27632_SHARP_)].join('')),p2__27633_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__27634_SHARP_,p2__27635_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27634_SHARP_)].join(''),p2__27635_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27636 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27636.addCallback(((function (G__27636){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__27636))
);

G__27636.addErrback(((function (G__27636){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__27636))
);

return G__27636;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27637){if((e27637 instanceof Error)){
var e = e27637;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27637;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27638){if((e27638 instanceof Error)){
var e = e27638;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27638;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27639 = cljs.core._EQ_;
var expr__27640 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27639.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27640))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27639.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27640))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27639.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27640))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__27639,expr__27640){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27639,expr__27640))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27642,callback){
var map__27643 = p__27642;
var map__27643__$1 = ((((!((map__27643 == null)))?(((((map__27643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27643):map__27643);
var file_msg = map__27643__$1;
var request_url = cljs.core.get.call(null,map__27643__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__27643,map__27643__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27643,map__27643__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24605__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto__){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto__){
return (function (state_27681){
var state_val_27682 = (state_27681[(1)]);
if((state_val_27682 === (7))){
var inst_27677 = (state_27681[(2)]);
var state_27681__$1 = state_27681;
var statearr_27683_27709 = state_27681__$1;
(statearr_27683_27709[(2)] = inst_27677);

(statearr_27683_27709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (1))){
var state_27681__$1 = state_27681;
var statearr_27684_27710 = state_27681__$1;
(statearr_27684_27710[(2)] = null);

(statearr_27684_27710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (4))){
var inst_27647 = (state_27681[(7)]);
var inst_27647__$1 = (state_27681[(2)]);
var state_27681__$1 = (function (){var statearr_27685 = state_27681;
(statearr_27685[(7)] = inst_27647__$1);

return statearr_27685;
})();
if(cljs.core.truth_(inst_27647__$1)){
var statearr_27686_27711 = state_27681__$1;
(statearr_27686_27711[(1)] = (5));

} else {
var statearr_27687_27712 = state_27681__$1;
(statearr_27687_27712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (15))){
var inst_27662 = (state_27681[(8)]);
var inst_27660 = (state_27681[(9)]);
var inst_27664 = inst_27662.call(null,inst_27660);
var state_27681__$1 = state_27681;
var statearr_27688_27713 = state_27681__$1;
(statearr_27688_27713[(2)] = inst_27664);

(statearr_27688_27713[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (13))){
var inst_27671 = (state_27681[(2)]);
var state_27681__$1 = state_27681;
var statearr_27689_27714 = state_27681__$1;
(statearr_27689_27714[(2)] = inst_27671);

(statearr_27689_27714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (6))){
var state_27681__$1 = state_27681;
var statearr_27690_27715 = state_27681__$1;
(statearr_27690_27715[(2)] = null);

(statearr_27690_27715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (17))){
var inst_27668 = (state_27681[(2)]);
var state_27681__$1 = state_27681;
var statearr_27691_27716 = state_27681__$1;
(statearr_27691_27716[(2)] = inst_27668);

(statearr_27691_27716[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (3))){
var inst_27679 = (state_27681[(2)]);
var state_27681__$1 = state_27681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27681__$1,inst_27679);
} else {
if((state_val_27682 === (12))){
var state_27681__$1 = state_27681;
var statearr_27692_27717 = state_27681__$1;
(statearr_27692_27717[(2)] = null);

(statearr_27692_27717[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (2))){
var state_27681__$1 = state_27681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27681__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27682 === (11))){
var inst_27652 = (state_27681[(10)]);
var inst_27658 = figwheel.client.file_reloading.blocking_load.call(null,inst_27652);
var state_27681__$1 = state_27681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27681__$1,(14),inst_27658);
} else {
if((state_val_27682 === (9))){
var inst_27652 = (state_27681[(10)]);
var state_27681__$1 = state_27681;
if(cljs.core.truth_(inst_27652)){
var statearr_27693_27718 = state_27681__$1;
(statearr_27693_27718[(1)] = (11));

} else {
var statearr_27694_27719 = state_27681__$1;
(statearr_27694_27719[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (5))){
var inst_27653 = (state_27681[(11)]);
var inst_27647 = (state_27681[(7)]);
var inst_27652 = cljs.core.nth.call(null,inst_27647,(0),null);
var inst_27653__$1 = cljs.core.nth.call(null,inst_27647,(1),null);
var state_27681__$1 = (function (){var statearr_27695 = state_27681;
(statearr_27695[(10)] = inst_27652);

(statearr_27695[(11)] = inst_27653__$1);

return statearr_27695;
})();
if(cljs.core.truth_(inst_27653__$1)){
var statearr_27696_27720 = state_27681__$1;
(statearr_27696_27720[(1)] = (8));

} else {
var statearr_27697_27721 = state_27681__$1;
(statearr_27697_27721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (14))){
var inst_27652 = (state_27681[(10)]);
var inst_27662 = (state_27681[(8)]);
var inst_27660 = (state_27681[(2)]);
var inst_27661 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27662__$1 = cljs.core.get.call(null,inst_27661,inst_27652);
var state_27681__$1 = (function (){var statearr_27698 = state_27681;
(statearr_27698[(8)] = inst_27662__$1);

(statearr_27698[(9)] = inst_27660);

return statearr_27698;
})();
if(cljs.core.truth_(inst_27662__$1)){
var statearr_27699_27722 = state_27681__$1;
(statearr_27699_27722[(1)] = (15));

} else {
var statearr_27700_27723 = state_27681__$1;
(statearr_27700_27723[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (16))){
var inst_27660 = (state_27681[(9)]);
var inst_27666 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27660);
var state_27681__$1 = state_27681;
var statearr_27701_27724 = state_27681__$1;
(statearr_27701_27724[(2)] = inst_27666);

(statearr_27701_27724[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (10))){
var inst_27673 = (state_27681[(2)]);
var state_27681__$1 = (function (){var statearr_27702 = state_27681;
(statearr_27702[(12)] = inst_27673);

return statearr_27702;
})();
var statearr_27703_27725 = state_27681__$1;
(statearr_27703_27725[(2)] = null);

(statearr_27703_27725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27682 === (8))){
var inst_27653 = (state_27681[(11)]);
var inst_27655 = eval(inst_27653);
var state_27681__$1 = state_27681;
var statearr_27704_27726 = state_27681__$1;
(statearr_27704_27726[(2)] = inst_27655);

(statearr_27704_27726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24605__auto__))
;
return ((function (switch__24514__auto__,c__24605__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24515__auto__ = null;
var figwheel$client$file_reloading$state_machine__24515__auto____0 = (function (){
var statearr_27705 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27705[(0)] = figwheel$client$file_reloading$state_machine__24515__auto__);

(statearr_27705[(1)] = (1));

return statearr_27705;
});
var figwheel$client$file_reloading$state_machine__24515__auto____1 = (function (state_27681){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_27681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e27706){if((e27706 instanceof Object)){
var ex__24518__auto__ = e27706;
var statearr_27707_27727 = state_27681;
(statearr_27707_27727[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27728 = state_27681;
state_27681 = G__27728;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24515__auto__ = function(state_27681){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24515__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24515__auto____1.call(this,state_27681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24515__auto____0;
figwheel$client$file_reloading$state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24515__auto____1;
return figwheel$client$file_reloading$state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto__))
})();
var state__24607__auto__ = (function (){var statearr_27708 = f__24606__auto__.call(null);
(statearr_27708[(6)] = c__24605__auto__);

return statearr_27708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto__))
);

return c__24605__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27730 = arguments.length;
switch (G__27730) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27732,callback){
var map__27733 = p__27732;
var map__27733__$1 = ((((!((map__27733 == null)))?(((((map__27733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27733):map__27733);
var file_msg = map__27733__$1;
var namespace = cljs.core.get.call(null,map__27733__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27733,map__27733__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27733,map__27733__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27735){
var map__27736 = p__27735;
var map__27736__$1 = ((((!((map__27736 == null)))?(((((map__27736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27736):map__27736);
var file_msg = map__27736__$1;
var namespace = cljs.core.get.call(null,map__27736__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27738){
var map__27739 = p__27738;
var map__27739__$1 = ((((!((map__27739 == null)))?(((((map__27739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27739):map__27739);
var file_msg = map__27739__$1;
var namespace = cljs.core.get.call(null,map__27739__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3938__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3938__auto__){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27741,callback){
var map__27742 = p__27741;
var map__27742__$1 = ((((!((map__27742 == null)))?(((((map__27742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27742):map__27742);
var file_msg = map__27742__$1;
var request_url = cljs.core.get.call(null,map__27742__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27742__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24605__auto___27792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto___27792,out){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto___27792,out){
return (function (state_27777){
var state_val_27778 = (state_27777[(1)]);
if((state_val_27778 === (1))){
var inst_27751 = cljs.core.seq.call(null,files);
var inst_27752 = cljs.core.first.call(null,inst_27751);
var inst_27753 = cljs.core.next.call(null,inst_27751);
var inst_27754 = files;
var state_27777__$1 = (function (){var statearr_27779 = state_27777;
(statearr_27779[(7)] = inst_27753);

(statearr_27779[(8)] = inst_27754);

(statearr_27779[(9)] = inst_27752);

return statearr_27779;
})();
var statearr_27780_27793 = state_27777__$1;
(statearr_27780_27793[(2)] = null);

(statearr_27780_27793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (2))){
var inst_27760 = (state_27777[(10)]);
var inst_27754 = (state_27777[(8)]);
var inst_27759 = cljs.core.seq.call(null,inst_27754);
var inst_27760__$1 = cljs.core.first.call(null,inst_27759);
var inst_27761 = cljs.core.next.call(null,inst_27759);
var inst_27762 = (inst_27760__$1 == null);
var inst_27763 = cljs.core.not.call(null,inst_27762);
var state_27777__$1 = (function (){var statearr_27781 = state_27777;
(statearr_27781[(10)] = inst_27760__$1);

(statearr_27781[(11)] = inst_27761);

return statearr_27781;
})();
if(inst_27763){
var statearr_27782_27794 = state_27777__$1;
(statearr_27782_27794[(1)] = (4));

} else {
var statearr_27783_27795 = state_27777__$1;
(statearr_27783_27795[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (3))){
var inst_27775 = (state_27777[(2)]);
var state_27777__$1 = state_27777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27777__$1,inst_27775);
} else {
if((state_val_27778 === (4))){
var inst_27760 = (state_27777[(10)]);
var inst_27765 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27760);
var state_27777__$1 = state_27777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27777__$1,(7),inst_27765);
} else {
if((state_val_27778 === (5))){
var inst_27771 = cljs.core.async.close_BANG_.call(null,out);
var state_27777__$1 = state_27777;
var statearr_27784_27796 = state_27777__$1;
(statearr_27784_27796[(2)] = inst_27771);

(statearr_27784_27796[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (6))){
var inst_27773 = (state_27777[(2)]);
var state_27777__$1 = state_27777;
var statearr_27785_27797 = state_27777__$1;
(statearr_27785_27797[(2)] = inst_27773);

(statearr_27785_27797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27778 === (7))){
var inst_27761 = (state_27777[(11)]);
var inst_27767 = (state_27777[(2)]);
var inst_27768 = cljs.core.async.put_BANG_.call(null,out,inst_27767);
var inst_27754 = inst_27761;
var state_27777__$1 = (function (){var statearr_27786 = state_27777;
(statearr_27786[(12)] = inst_27768);

(statearr_27786[(8)] = inst_27754);

return statearr_27786;
})();
var statearr_27787_27798 = state_27777__$1;
(statearr_27787_27798[(2)] = null);

(statearr_27787_27798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__24605__auto___27792,out))
;
return ((function (switch__24514__auto__,c__24605__auto___27792,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24515__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24515__auto____0 = (function (){
var statearr_27788 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27788[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24515__auto__);

(statearr_27788[(1)] = (1));

return statearr_27788;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24515__auto____1 = (function (state_27777){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_27777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e27789){if((e27789 instanceof Object)){
var ex__24518__auto__ = e27789;
var statearr_27790_27799 = state_27777;
(statearr_27790_27799[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27800 = state_27777;
state_27777 = G__27800;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24515__auto__ = function(state_27777){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24515__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24515__auto____1.call(this,state_27777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24515__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24515__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto___27792,out))
})();
var state__24607__auto__ = (function (){var statearr_27791 = f__24606__auto__.call(null);
(statearr_27791[(6)] = c__24605__auto___27792);

return statearr_27791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto___27792,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27801,opts){
var map__27802 = p__27801;
var map__27802__$1 = ((((!((map__27802 == null)))?(((((map__27802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27802):map__27802);
var eval_body = cljs.core.get.call(null,map__27802__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27802__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3938__auto__ = eval_body;
if(cljs.core.truth_(and__3938__auto__)){
return typeof eval_body === 'string';
} else {
return and__3938__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27804){var e = e27804;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27805_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27805_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27806){
var vec__27807 = p__27806;
var k = cljs.core.nth.call(null,vec__27807,(0),null);
var v = cljs.core.nth.call(null,vec__27807,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27810){
var vec__27811 = p__27810;
var k = cljs.core.nth.call(null,vec__27811,(0),null);
var v = cljs.core.nth.call(null,vec__27811,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27817,p__27818){
var map__27819 = p__27817;
var map__27819__$1 = ((((!((map__27819 == null)))?(((((map__27819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27819):map__27819);
var opts = map__27819__$1;
var before_jsload = cljs.core.get.call(null,map__27819__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27819__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27819__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27820 = p__27818;
var map__27820__$1 = ((((!((map__27820 == null)))?(((((map__27820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27820):map__27820);
var msg = map__27820__$1;
var files = cljs.core.get.call(null,map__27820__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27820__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27820__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24605__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto__,map__27819,map__27819__$1,opts,before_jsload,on_jsload,reload_dependents,map__27820,map__27820__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto__,map__27819,map__27819__$1,opts,before_jsload,on_jsload,reload_dependents,map__27820,map__27820__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27974){
var state_val_27975 = (state_27974[(1)]);
if((state_val_27975 === (7))){
var inst_27834 = (state_27974[(7)]);
var inst_27836 = (state_27974[(8)]);
var inst_27837 = (state_27974[(9)]);
var inst_27835 = (state_27974[(10)]);
var inst_27842 = cljs.core._nth.call(null,inst_27835,inst_27837);
var inst_27843 = figwheel.client.file_reloading.eval_body.call(null,inst_27842,opts);
var inst_27844 = (inst_27837 + (1));
var tmp27976 = inst_27834;
var tmp27977 = inst_27836;
var tmp27978 = inst_27835;
var inst_27834__$1 = tmp27976;
var inst_27835__$1 = tmp27978;
var inst_27836__$1 = tmp27977;
var inst_27837__$1 = inst_27844;
var state_27974__$1 = (function (){var statearr_27979 = state_27974;
(statearr_27979[(7)] = inst_27834__$1);

(statearr_27979[(8)] = inst_27836__$1);

(statearr_27979[(9)] = inst_27837__$1);

(statearr_27979[(11)] = inst_27843);

(statearr_27979[(10)] = inst_27835__$1);

return statearr_27979;
})();
var statearr_27980_28063 = state_27974__$1;
(statearr_27980_28063[(2)] = null);

(statearr_27980_28063[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (20))){
var inst_27877 = (state_27974[(12)]);
var inst_27885 = figwheel.client.file_reloading.sort_files.call(null,inst_27877);
var state_27974__$1 = state_27974;
var statearr_27981_28064 = state_27974__$1;
(statearr_27981_28064[(2)] = inst_27885);

(statearr_27981_28064[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (27))){
var state_27974__$1 = state_27974;
var statearr_27982_28065 = state_27974__$1;
(statearr_27982_28065[(2)] = null);

(statearr_27982_28065[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (1))){
var inst_27826 = (state_27974[(13)]);
var inst_27823 = before_jsload.call(null,files);
var inst_27824 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27825 = (function (){return ((function (inst_27826,inst_27823,inst_27824,state_val_27975,c__24605__auto__,map__27819,map__27819__$1,opts,before_jsload,on_jsload,reload_dependents,map__27820,map__27820__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27814_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27814_SHARP_);
});
;})(inst_27826,inst_27823,inst_27824,state_val_27975,c__24605__auto__,map__27819,map__27819__$1,opts,before_jsload,on_jsload,reload_dependents,map__27820,map__27820__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27826__$1 = cljs.core.filter.call(null,inst_27825,files);
var inst_27827 = cljs.core.not_empty.call(null,inst_27826__$1);
var state_27974__$1 = (function (){var statearr_27983 = state_27974;
(statearr_27983[(13)] = inst_27826__$1);

(statearr_27983[(14)] = inst_27823);

(statearr_27983[(15)] = inst_27824);

return statearr_27983;
})();
if(cljs.core.truth_(inst_27827)){
var statearr_27984_28066 = state_27974__$1;
(statearr_27984_28066[(1)] = (2));

} else {
var statearr_27985_28067 = state_27974__$1;
(statearr_27985_28067[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (24))){
var state_27974__$1 = state_27974;
var statearr_27986_28068 = state_27974__$1;
(statearr_27986_28068[(2)] = null);

(statearr_27986_28068[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (39))){
var inst_27927 = (state_27974[(16)]);
var state_27974__$1 = state_27974;
var statearr_27987_28069 = state_27974__$1;
(statearr_27987_28069[(2)] = inst_27927);

(statearr_27987_28069[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (46))){
var inst_27969 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
var statearr_27988_28070 = state_27974__$1;
(statearr_27988_28070[(2)] = inst_27969);

(statearr_27988_28070[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (4))){
var inst_27871 = (state_27974[(2)]);
var inst_27872 = cljs.core.List.EMPTY;
var inst_27873 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27872);
var inst_27874 = (function (){return ((function (inst_27871,inst_27872,inst_27873,state_val_27975,c__24605__auto__,map__27819,map__27819__$1,opts,before_jsload,on_jsload,reload_dependents,map__27820,map__27820__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27815_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27815_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27815_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27815_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_27871,inst_27872,inst_27873,state_val_27975,c__24605__auto__,map__27819,map__27819__$1,opts,before_jsload,on_jsload,reload_dependents,map__27820,map__27820__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27875 = cljs.core.filter.call(null,inst_27874,files);
var inst_27876 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27877 = cljs.core.concat.call(null,inst_27875,inst_27876);
var state_27974__$1 = (function (){var statearr_27989 = state_27974;
(statearr_27989[(17)] = inst_27873);

(statearr_27989[(18)] = inst_27871);

(statearr_27989[(12)] = inst_27877);

return statearr_27989;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27990_28071 = state_27974__$1;
(statearr_27990_28071[(1)] = (16));

} else {
var statearr_27991_28072 = state_27974__$1;
(statearr_27991_28072[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (15))){
var inst_27861 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
var statearr_27992_28073 = state_27974__$1;
(statearr_27992_28073[(2)] = inst_27861);

(statearr_27992_28073[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (21))){
var inst_27887 = (state_27974[(19)]);
var inst_27887__$1 = (state_27974[(2)]);
var inst_27888 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27887__$1);
var state_27974__$1 = (function (){var statearr_27993 = state_27974;
(statearr_27993[(19)] = inst_27887__$1);

return statearr_27993;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27974__$1,(22),inst_27888);
} else {
if((state_val_27975 === (31))){
var inst_27972 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27974__$1,inst_27972);
} else {
if((state_val_27975 === (32))){
var inst_27927 = (state_27974[(16)]);
var inst_27932 = inst_27927.cljs$lang$protocol_mask$partition0$;
var inst_27933 = (inst_27932 & (64));
var inst_27934 = inst_27927.cljs$core$ISeq$;
var inst_27935 = (cljs.core.PROTOCOL_SENTINEL === inst_27934);
var inst_27936 = ((inst_27933) || (inst_27935));
var state_27974__$1 = state_27974;
if(cljs.core.truth_(inst_27936)){
var statearr_27994_28074 = state_27974__$1;
(statearr_27994_28074[(1)] = (35));

} else {
var statearr_27995_28075 = state_27974__$1;
(statearr_27995_28075[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (40))){
var inst_27949 = (state_27974[(20)]);
var inst_27948 = (state_27974[(2)]);
var inst_27949__$1 = cljs.core.get.call(null,inst_27948,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27950 = cljs.core.get.call(null,inst_27948,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27951 = cljs.core.not_empty.call(null,inst_27949__$1);
var state_27974__$1 = (function (){var statearr_27996 = state_27974;
(statearr_27996[(20)] = inst_27949__$1);

(statearr_27996[(21)] = inst_27950);

return statearr_27996;
})();
if(cljs.core.truth_(inst_27951)){
var statearr_27997_28076 = state_27974__$1;
(statearr_27997_28076[(1)] = (41));

} else {
var statearr_27998_28077 = state_27974__$1;
(statearr_27998_28077[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (33))){
var state_27974__$1 = state_27974;
var statearr_27999_28078 = state_27974__$1;
(statearr_27999_28078[(2)] = false);

(statearr_27999_28078[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (13))){
var inst_27847 = (state_27974[(22)]);
var inst_27851 = cljs.core.chunk_first.call(null,inst_27847);
var inst_27852 = cljs.core.chunk_rest.call(null,inst_27847);
var inst_27853 = cljs.core.count.call(null,inst_27851);
var inst_27834 = inst_27852;
var inst_27835 = inst_27851;
var inst_27836 = inst_27853;
var inst_27837 = (0);
var state_27974__$1 = (function (){var statearr_28000 = state_27974;
(statearr_28000[(7)] = inst_27834);

(statearr_28000[(8)] = inst_27836);

(statearr_28000[(9)] = inst_27837);

(statearr_28000[(10)] = inst_27835);

return statearr_28000;
})();
var statearr_28001_28079 = state_27974__$1;
(statearr_28001_28079[(2)] = null);

(statearr_28001_28079[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (22))){
var inst_27895 = (state_27974[(23)]);
var inst_27887 = (state_27974[(19)]);
var inst_27890 = (state_27974[(24)]);
var inst_27891 = (state_27974[(25)]);
var inst_27890__$1 = (state_27974[(2)]);
var inst_27891__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27890__$1);
var inst_27892 = (function (){var all_files = inst_27887;
var res_SINGLEQUOTE_ = inst_27890__$1;
var res = inst_27891__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27895,inst_27887,inst_27890,inst_27891,inst_27890__$1,inst_27891__$1,state_val_27975,c__24605__auto__,map__27819,map__27819__$1,opts,before_jsload,on_jsload,reload_dependents,map__27820,map__27820__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27816_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27816_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27895,inst_27887,inst_27890,inst_27891,inst_27890__$1,inst_27891__$1,state_val_27975,c__24605__auto__,map__27819,map__27819__$1,opts,before_jsload,on_jsload,reload_dependents,map__27820,map__27820__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27893 = cljs.core.filter.call(null,inst_27892,inst_27890__$1);
var inst_27894 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27895__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27894);
var inst_27896 = cljs.core.not_empty.call(null,inst_27895__$1);
var state_27974__$1 = (function (){var statearr_28002 = state_27974;
(statearr_28002[(23)] = inst_27895__$1);

(statearr_28002[(26)] = inst_27893);

(statearr_28002[(24)] = inst_27890__$1);

(statearr_28002[(25)] = inst_27891__$1);

return statearr_28002;
})();
if(cljs.core.truth_(inst_27896)){
var statearr_28003_28080 = state_27974__$1;
(statearr_28003_28080[(1)] = (23));

} else {
var statearr_28004_28081 = state_27974__$1;
(statearr_28004_28081[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (36))){
var state_27974__$1 = state_27974;
var statearr_28005_28082 = state_27974__$1;
(statearr_28005_28082[(2)] = false);

(statearr_28005_28082[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (41))){
var inst_27949 = (state_27974[(20)]);
var inst_27953 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27954 = cljs.core.map.call(null,inst_27953,inst_27949);
var inst_27955 = cljs.core.pr_str.call(null,inst_27954);
var inst_27956 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27955)].join('');
var inst_27957 = figwheel.client.utils.log.call(null,inst_27956);
var state_27974__$1 = state_27974;
var statearr_28006_28083 = state_27974__$1;
(statearr_28006_28083[(2)] = inst_27957);

(statearr_28006_28083[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (43))){
var inst_27950 = (state_27974[(21)]);
var inst_27960 = (state_27974[(2)]);
var inst_27961 = cljs.core.not_empty.call(null,inst_27950);
var state_27974__$1 = (function (){var statearr_28007 = state_27974;
(statearr_28007[(27)] = inst_27960);

return statearr_28007;
})();
if(cljs.core.truth_(inst_27961)){
var statearr_28008_28084 = state_27974__$1;
(statearr_28008_28084[(1)] = (44));

} else {
var statearr_28009_28085 = state_27974__$1;
(statearr_28009_28085[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (29))){
var inst_27895 = (state_27974[(23)]);
var inst_27887 = (state_27974[(19)]);
var inst_27893 = (state_27974[(26)]);
var inst_27890 = (state_27974[(24)]);
var inst_27927 = (state_27974[(16)]);
var inst_27891 = (state_27974[(25)]);
var inst_27923 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27926 = (function (){var all_files = inst_27887;
var res_SINGLEQUOTE_ = inst_27890;
var res = inst_27891;
var files_not_loaded = inst_27893;
var dependencies_that_loaded = inst_27895;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27895,inst_27887,inst_27893,inst_27890,inst_27927,inst_27891,inst_27923,state_val_27975,c__24605__auto__,map__27819,map__27819__$1,opts,before_jsload,on_jsload,reload_dependents,map__27820,map__27820__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27925){
var map__28010 = p__27925;
var map__28010__$1 = ((((!((map__28010 == null)))?(((((map__28010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28010):map__28010);
var namespace = cljs.core.get.call(null,map__28010__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27895,inst_27887,inst_27893,inst_27890,inst_27927,inst_27891,inst_27923,state_val_27975,c__24605__auto__,map__27819,map__27819__$1,opts,before_jsload,on_jsload,reload_dependents,map__27820,map__27820__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27927__$1 = cljs.core.group_by.call(null,inst_27926,inst_27893);
var inst_27929 = (inst_27927__$1 == null);
var inst_27930 = cljs.core.not.call(null,inst_27929);
var state_27974__$1 = (function (){var statearr_28012 = state_27974;
(statearr_28012[(28)] = inst_27923);

(statearr_28012[(16)] = inst_27927__$1);

return statearr_28012;
})();
if(inst_27930){
var statearr_28013_28086 = state_27974__$1;
(statearr_28013_28086[(1)] = (32));

} else {
var statearr_28014_28087 = state_27974__$1;
(statearr_28014_28087[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (44))){
var inst_27950 = (state_27974[(21)]);
var inst_27963 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27950);
var inst_27964 = cljs.core.pr_str.call(null,inst_27963);
var inst_27965 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27964)].join('');
var inst_27966 = figwheel.client.utils.log.call(null,inst_27965);
var state_27974__$1 = state_27974;
var statearr_28015_28088 = state_27974__$1;
(statearr_28015_28088[(2)] = inst_27966);

(statearr_28015_28088[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (6))){
var inst_27868 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
var statearr_28016_28089 = state_27974__$1;
(statearr_28016_28089[(2)] = inst_27868);

(statearr_28016_28089[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (28))){
var inst_27893 = (state_27974[(26)]);
var inst_27920 = (state_27974[(2)]);
var inst_27921 = cljs.core.not_empty.call(null,inst_27893);
var state_27974__$1 = (function (){var statearr_28017 = state_27974;
(statearr_28017[(29)] = inst_27920);

return statearr_28017;
})();
if(cljs.core.truth_(inst_27921)){
var statearr_28018_28090 = state_27974__$1;
(statearr_28018_28090[(1)] = (29));

} else {
var statearr_28019_28091 = state_27974__$1;
(statearr_28019_28091[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (25))){
var inst_27891 = (state_27974[(25)]);
var inst_27907 = (state_27974[(2)]);
var inst_27908 = cljs.core.not_empty.call(null,inst_27891);
var state_27974__$1 = (function (){var statearr_28020 = state_27974;
(statearr_28020[(30)] = inst_27907);

return statearr_28020;
})();
if(cljs.core.truth_(inst_27908)){
var statearr_28021_28092 = state_27974__$1;
(statearr_28021_28092[(1)] = (26));

} else {
var statearr_28022_28093 = state_27974__$1;
(statearr_28022_28093[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (34))){
var inst_27943 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
if(cljs.core.truth_(inst_27943)){
var statearr_28023_28094 = state_27974__$1;
(statearr_28023_28094[(1)] = (38));

} else {
var statearr_28024_28095 = state_27974__$1;
(statearr_28024_28095[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (17))){
var state_27974__$1 = state_27974;
var statearr_28025_28096 = state_27974__$1;
(statearr_28025_28096[(2)] = recompile_dependents);

(statearr_28025_28096[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (3))){
var state_27974__$1 = state_27974;
var statearr_28026_28097 = state_27974__$1;
(statearr_28026_28097[(2)] = null);

(statearr_28026_28097[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (12))){
var inst_27864 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
var statearr_28027_28098 = state_27974__$1;
(statearr_28027_28098[(2)] = inst_27864);

(statearr_28027_28098[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (2))){
var inst_27826 = (state_27974[(13)]);
var inst_27833 = cljs.core.seq.call(null,inst_27826);
var inst_27834 = inst_27833;
var inst_27835 = null;
var inst_27836 = (0);
var inst_27837 = (0);
var state_27974__$1 = (function (){var statearr_28028 = state_27974;
(statearr_28028[(7)] = inst_27834);

(statearr_28028[(8)] = inst_27836);

(statearr_28028[(9)] = inst_27837);

(statearr_28028[(10)] = inst_27835);

return statearr_28028;
})();
var statearr_28029_28099 = state_27974__$1;
(statearr_28029_28099[(2)] = null);

(statearr_28029_28099[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (23))){
var inst_27895 = (state_27974[(23)]);
var inst_27887 = (state_27974[(19)]);
var inst_27893 = (state_27974[(26)]);
var inst_27890 = (state_27974[(24)]);
var inst_27891 = (state_27974[(25)]);
var inst_27898 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27900 = (function (){var all_files = inst_27887;
var res_SINGLEQUOTE_ = inst_27890;
var res = inst_27891;
var files_not_loaded = inst_27893;
var dependencies_that_loaded = inst_27895;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27895,inst_27887,inst_27893,inst_27890,inst_27891,inst_27898,state_val_27975,c__24605__auto__,map__27819,map__27819__$1,opts,before_jsload,on_jsload,reload_dependents,map__27820,map__27820__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27899){
var map__28030 = p__27899;
var map__28030__$1 = ((((!((map__28030 == null)))?(((((map__28030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28030):map__28030);
var request_url = cljs.core.get.call(null,map__28030__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27895,inst_27887,inst_27893,inst_27890,inst_27891,inst_27898,state_val_27975,c__24605__auto__,map__27819,map__27819__$1,opts,before_jsload,on_jsload,reload_dependents,map__27820,map__27820__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27901 = cljs.core.reverse.call(null,inst_27895);
var inst_27902 = cljs.core.map.call(null,inst_27900,inst_27901);
var inst_27903 = cljs.core.pr_str.call(null,inst_27902);
var inst_27904 = figwheel.client.utils.log.call(null,inst_27903);
var state_27974__$1 = (function (){var statearr_28032 = state_27974;
(statearr_28032[(31)] = inst_27898);

return statearr_28032;
})();
var statearr_28033_28100 = state_27974__$1;
(statearr_28033_28100[(2)] = inst_27904);

(statearr_28033_28100[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (35))){
var state_27974__$1 = state_27974;
var statearr_28034_28101 = state_27974__$1;
(statearr_28034_28101[(2)] = true);

(statearr_28034_28101[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (19))){
var inst_27877 = (state_27974[(12)]);
var inst_27883 = figwheel.client.file_reloading.expand_files.call(null,inst_27877);
var state_27974__$1 = state_27974;
var statearr_28035_28102 = state_27974__$1;
(statearr_28035_28102[(2)] = inst_27883);

(statearr_28035_28102[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (11))){
var state_27974__$1 = state_27974;
var statearr_28036_28103 = state_27974__$1;
(statearr_28036_28103[(2)] = null);

(statearr_28036_28103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (9))){
var inst_27866 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
var statearr_28037_28104 = state_27974__$1;
(statearr_28037_28104[(2)] = inst_27866);

(statearr_28037_28104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (5))){
var inst_27836 = (state_27974[(8)]);
var inst_27837 = (state_27974[(9)]);
var inst_27839 = (inst_27837 < inst_27836);
var inst_27840 = inst_27839;
var state_27974__$1 = state_27974;
if(cljs.core.truth_(inst_27840)){
var statearr_28038_28105 = state_27974__$1;
(statearr_28038_28105[(1)] = (7));

} else {
var statearr_28039_28106 = state_27974__$1;
(statearr_28039_28106[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (14))){
var inst_27847 = (state_27974[(22)]);
var inst_27856 = cljs.core.first.call(null,inst_27847);
var inst_27857 = figwheel.client.file_reloading.eval_body.call(null,inst_27856,opts);
var inst_27858 = cljs.core.next.call(null,inst_27847);
var inst_27834 = inst_27858;
var inst_27835 = null;
var inst_27836 = (0);
var inst_27837 = (0);
var state_27974__$1 = (function (){var statearr_28040 = state_27974;
(statearr_28040[(7)] = inst_27834);

(statearr_28040[(8)] = inst_27836);

(statearr_28040[(9)] = inst_27837);

(statearr_28040[(32)] = inst_27857);

(statearr_28040[(10)] = inst_27835);

return statearr_28040;
})();
var statearr_28041_28107 = state_27974__$1;
(statearr_28041_28107[(2)] = null);

(statearr_28041_28107[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (45))){
var state_27974__$1 = state_27974;
var statearr_28042_28108 = state_27974__$1;
(statearr_28042_28108[(2)] = null);

(statearr_28042_28108[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (26))){
var inst_27895 = (state_27974[(23)]);
var inst_27887 = (state_27974[(19)]);
var inst_27893 = (state_27974[(26)]);
var inst_27890 = (state_27974[(24)]);
var inst_27891 = (state_27974[(25)]);
var inst_27910 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27912 = (function (){var all_files = inst_27887;
var res_SINGLEQUOTE_ = inst_27890;
var res = inst_27891;
var files_not_loaded = inst_27893;
var dependencies_that_loaded = inst_27895;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27895,inst_27887,inst_27893,inst_27890,inst_27891,inst_27910,state_val_27975,c__24605__auto__,map__27819,map__27819__$1,opts,before_jsload,on_jsload,reload_dependents,map__27820,map__27820__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27911){
var map__28043 = p__27911;
var map__28043__$1 = ((((!((map__28043 == null)))?(((((map__28043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28043):map__28043);
var namespace = cljs.core.get.call(null,map__28043__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28043__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27895,inst_27887,inst_27893,inst_27890,inst_27891,inst_27910,state_val_27975,c__24605__auto__,map__27819,map__27819__$1,opts,before_jsload,on_jsload,reload_dependents,map__27820,map__27820__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27913 = cljs.core.map.call(null,inst_27912,inst_27891);
var inst_27914 = cljs.core.pr_str.call(null,inst_27913);
var inst_27915 = figwheel.client.utils.log.call(null,inst_27914);
var inst_27916 = (function (){var all_files = inst_27887;
var res_SINGLEQUOTE_ = inst_27890;
var res = inst_27891;
var files_not_loaded = inst_27893;
var dependencies_that_loaded = inst_27895;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27895,inst_27887,inst_27893,inst_27890,inst_27891,inst_27910,inst_27912,inst_27913,inst_27914,inst_27915,state_val_27975,c__24605__auto__,map__27819,map__27819__$1,opts,before_jsload,on_jsload,reload_dependents,map__27820,map__27820__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27895,inst_27887,inst_27893,inst_27890,inst_27891,inst_27910,inst_27912,inst_27913,inst_27914,inst_27915,state_val_27975,c__24605__auto__,map__27819,map__27819__$1,opts,before_jsload,on_jsload,reload_dependents,map__27820,map__27820__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27917 = setTimeout(inst_27916,(10));
var state_27974__$1 = (function (){var statearr_28045 = state_27974;
(statearr_28045[(33)] = inst_27910);

(statearr_28045[(34)] = inst_27915);

return statearr_28045;
})();
var statearr_28046_28109 = state_27974__$1;
(statearr_28046_28109[(2)] = inst_27917);

(statearr_28046_28109[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (16))){
var state_27974__$1 = state_27974;
var statearr_28047_28110 = state_27974__$1;
(statearr_28047_28110[(2)] = reload_dependents);

(statearr_28047_28110[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (38))){
var inst_27927 = (state_27974[(16)]);
var inst_27945 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27927);
var state_27974__$1 = state_27974;
var statearr_28048_28111 = state_27974__$1;
(statearr_28048_28111[(2)] = inst_27945);

(statearr_28048_28111[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (30))){
var state_27974__$1 = state_27974;
var statearr_28049_28112 = state_27974__$1;
(statearr_28049_28112[(2)] = null);

(statearr_28049_28112[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (10))){
var inst_27847 = (state_27974[(22)]);
var inst_27849 = cljs.core.chunked_seq_QMARK_.call(null,inst_27847);
var state_27974__$1 = state_27974;
if(inst_27849){
var statearr_28050_28113 = state_27974__$1;
(statearr_28050_28113[(1)] = (13));

} else {
var statearr_28051_28114 = state_27974__$1;
(statearr_28051_28114[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (18))){
var inst_27881 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
if(cljs.core.truth_(inst_27881)){
var statearr_28052_28115 = state_27974__$1;
(statearr_28052_28115[(1)] = (19));

} else {
var statearr_28053_28116 = state_27974__$1;
(statearr_28053_28116[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (42))){
var state_27974__$1 = state_27974;
var statearr_28054_28117 = state_27974__$1;
(statearr_28054_28117[(2)] = null);

(statearr_28054_28117[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (37))){
var inst_27940 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
var statearr_28055_28118 = state_27974__$1;
(statearr_28055_28118[(2)] = inst_27940);

(statearr_28055_28118[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (8))){
var inst_27847 = (state_27974[(22)]);
var inst_27834 = (state_27974[(7)]);
var inst_27847__$1 = cljs.core.seq.call(null,inst_27834);
var state_27974__$1 = (function (){var statearr_28056 = state_27974;
(statearr_28056[(22)] = inst_27847__$1);

return statearr_28056;
})();
if(inst_27847__$1){
var statearr_28057_28119 = state_27974__$1;
(statearr_28057_28119[(1)] = (10));

} else {
var statearr_28058_28120 = state_27974__$1;
(statearr_28058_28120[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24605__auto__,map__27819,map__27819__$1,opts,before_jsload,on_jsload,reload_dependents,map__27820,map__27820__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24514__auto__,c__24605__auto__,map__27819,map__27819__$1,opts,before_jsload,on_jsload,reload_dependents,map__27820,map__27820__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24515__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24515__auto____0 = (function (){
var statearr_28059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28059[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24515__auto__);

(statearr_28059[(1)] = (1));

return statearr_28059;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24515__auto____1 = (function (state_27974){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_27974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e28060){if((e28060 instanceof Object)){
var ex__24518__auto__ = e28060;
var statearr_28061_28121 = state_27974;
(statearr_28061_28121[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28122 = state_27974;
state_27974 = G__28122;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24515__auto__ = function(state_27974){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24515__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24515__auto____1.call(this,state_27974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24515__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24515__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto__,map__27819,map__27819__$1,opts,before_jsload,on_jsload,reload_dependents,map__27820,map__27820__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24607__auto__ = (function (){var statearr_28062 = f__24606__auto__.call(null);
(statearr_28062[(6)] = c__24605__auto__);

return statearr_28062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto__,map__27819,map__27819__$1,opts,before_jsload,on_jsload,reload_dependents,map__27820,map__27820__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24605__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28125,link){
var map__28126 = p__28125;
var map__28126__$1 = ((((!((map__28126 == null)))?(((((map__28126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28126):map__28126);
var file = cljs.core.get.call(null,map__28126__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__28126,map__28126__$1,file){
return (function (p1__28123_SHARP_,p2__28124_SHARP_){
if(cljs.core._EQ_.call(null,p1__28123_SHARP_,p2__28124_SHARP_)){
return p1__28123_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__28126,map__28126__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28129){
var map__28130 = p__28129;
var map__28130__$1 = ((((!((map__28130 == null)))?(((((map__28130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28130):map__28130);
var match_length = cljs.core.get.call(null,map__28130__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28130__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28128_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28128_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28132_SHARP_,p2__28133_SHARP_){
return cljs.core.assoc.call(null,p1__28132_SHARP_,cljs.core.get.call(null,p2__28133_SHARP_,key),p2__28133_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_28134 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28134);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28134);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28135,p__28136){
var map__28137 = p__28135;
var map__28137__$1 = ((((!((map__28137 == null)))?(((((map__28137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28137):map__28137);
var on_cssload = cljs.core.get.call(null,map__28137__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28138 = p__28136;
var map__28138__$1 = ((((!((map__28138 == null)))?(((((map__28138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28138):map__28138);
var files_msg = map__28138__$1;
var files = cljs.core.get.call(null,map__28138__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1538771241106
