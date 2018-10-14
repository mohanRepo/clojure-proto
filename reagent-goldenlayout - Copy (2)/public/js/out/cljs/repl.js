// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28143){
var map__28144 = p__28143;
var map__28144__$1 = ((((!((map__28144 == null)))?(((((map__28144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28144):map__28144);
var m = map__28144__$1;
var n = cljs.core.get.call(null,map__28144__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28144__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28146_28168 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28147_28169 = null;
var count__28148_28170 = (0);
var i__28149_28171 = (0);
while(true){
if((i__28149_28171 < count__28148_28170)){
var f_28172 = cljs.core._nth.call(null,chunk__28147_28169,i__28149_28171);
cljs.core.println.call(null,"  ",f_28172);


var G__28173 = seq__28146_28168;
var G__28174 = chunk__28147_28169;
var G__28175 = count__28148_28170;
var G__28176 = (i__28149_28171 + (1));
seq__28146_28168 = G__28173;
chunk__28147_28169 = G__28174;
count__28148_28170 = G__28175;
i__28149_28171 = G__28176;
continue;
} else {
var temp__5457__auto___28177 = cljs.core.seq.call(null,seq__28146_28168);
if(temp__5457__auto___28177){
var seq__28146_28178__$1 = temp__5457__auto___28177;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28146_28178__$1)){
var c__4351__auto___28179 = cljs.core.chunk_first.call(null,seq__28146_28178__$1);
var G__28180 = cljs.core.chunk_rest.call(null,seq__28146_28178__$1);
var G__28181 = c__4351__auto___28179;
var G__28182 = cljs.core.count.call(null,c__4351__auto___28179);
var G__28183 = (0);
seq__28146_28168 = G__28180;
chunk__28147_28169 = G__28181;
count__28148_28170 = G__28182;
i__28149_28171 = G__28183;
continue;
} else {
var f_28184 = cljs.core.first.call(null,seq__28146_28178__$1);
cljs.core.println.call(null,"  ",f_28184);


var G__28185 = cljs.core.next.call(null,seq__28146_28178__$1);
var G__28186 = null;
var G__28187 = (0);
var G__28188 = (0);
seq__28146_28168 = G__28185;
chunk__28147_28169 = G__28186;
count__28148_28170 = G__28187;
i__28149_28171 = G__28188;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28189 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28189);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28189)))?cljs.core.second.call(null,arglists_28189):arglists_28189));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28150_28190 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28151_28191 = null;
var count__28152_28192 = (0);
var i__28153_28193 = (0);
while(true){
if((i__28153_28193 < count__28152_28192)){
var vec__28154_28194 = cljs.core._nth.call(null,chunk__28151_28191,i__28153_28193);
var name_28195 = cljs.core.nth.call(null,vec__28154_28194,(0),null);
var map__28157_28196 = cljs.core.nth.call(null,vec__28154_28194,(1),null);
var map__28157_28197__$1 = ((((!((map__28157_28196 == null)))?(((((map__28157_28196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28157_28196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28157_28196):map__28157_28196);
var doc_28198 = cljs.core.get.call(null,map__28157_28197__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28199 = cljs.core.get.call(null,map__28157_28197__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28195);

cljs.core.println.call(null," ",arglists_28199);

if(cljs.core.truth_(doc_28198)){
cljs.core.println.call(null," ",doc_28198);
} else {
}


var G__28200 = seq__28150_28190;
var G__28201 = chunk__28151_28191;
var G__28202 = count__28152_28192;
var G__28203 = (i__28153_28193 + (1));
seq__28150_28190 = G__28200;
chunk__28151_28191 = G__28201;
count__28152_28192 = G__28202;
i__28153_28193 = G__28203;
continue;
} else {
var temp__5457__auto___28204 = cljs.core.seq.call(null,seq__28150_28190);
if(temp__5457__auto___28204){
var seq__28150_28205__$1 = temp__5457__auto___28204;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28150_28205__$1)){
var c__4351__auto___28206 = cljs.core.chunk_first.call(null,seq__28150_28205__$1);
var G__28207 = cljs.core.chunk_rest.call(null,seq__28150_28205__$1);
var G__28208 = c__4351__auto___28206;
var G__28209 = cljs.core.count.call(null,c__4351__auto___28206);
var G__28210 = (0);
seq__28150_28190 = G__28207;
chunk__28151_28191 = G__28208;
count__28152_28192 = G__28209;
i__28153_28193 = G__28210;
continue;
} else {
var vec__28159_28211 = cljs.core.first.call(null,seq__28150_28205__$1);
var name_28212 = cljs.core.nth.call(null,vec__28159_28211,(0),null);
var map__28162_28213 = cljs.core.nth.call(null,vec__28159_28211,(1),null);
var map__28162_28214__$1 = ((((!((map__28162_28213 == null)))?(((((map__28162_28213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28162_28213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28162_28213):map__28162_28213);
var doc_28215 = cljs.core.get.call(null,map__28162_28214__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28216 = cljs.core.get.call(null,map__28162_28214__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28212);

cljs.core.println.call(null," ",arglists_28216);

if(cljs.core.truth_(doc_28215)){
cljs.core.println.call(null," ",doc_28215);
} else {
}


var G__28217 = cljs.core.next.call(null,seq__28150_28205__$1);
var G__28218 = null;
var G__28219 = (0);
var G__28220 = (0);
seq__28150_28190 = G__28217;
chunk__28151_28191 = G__28218;
count__28152_28192 = G__28219;
i__28153_28193 = G__28220;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__28164 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28165 = null;
var count__28166 = (0);
var i__28167 = (0);
while(true){
if((i__28167 < count__28166)){
var role = cljs.core._nth.call(null,chunk__28165,i__28167);
var temp__5457__auto___28221__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28221__$1)){
var spec_28222 = temp__5457__auto___28221__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28222));
} else {
}


var G__28223 = seq__28164;
var G__28224 = chunk__28165;
var G__28225 = count__28166;
var G__28226 = (i__28167 + (1));
seq__28164 = G__28223;
chunk__28165 = G__28224;
count__28166 = G__28225;
i__28167 = G__28226;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__28164);
if(temp__5457__auto____$1){
var seq__28164__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28164__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__28164__$1);
var G__28227 = cljs.core.chunk_rest.call(null,seq__28164__$1);
var G__28228 = c__4351__auto__;
var G__28229 = cljs.core.count.call(null,c__4351__auto__);
var G__28230 = (0);
seq__28164 = G__28227;
chunk__28165 = G__28228;
count__28166 = G__28229;
i__28167 = G__28230;
continue;
} else {
var role = cljs.core.first.call(null,seq__28164__$1);
var temp__5457__auto___28231__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___28231__$2)){
var spec_28232 = temp__5457__auto___28231__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28232));
} else {
}


var G__28233 = cljs.core.next.call(null,seq__28164__$1);
var G__28234 = null;
var G__28235 = (0);
var G__28236 = (0);
seq__28164 = G__28233;
chunk__28165 = G__28234;
count__28166 = G__28235;
i__28167 = G__28236;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1538771241239
