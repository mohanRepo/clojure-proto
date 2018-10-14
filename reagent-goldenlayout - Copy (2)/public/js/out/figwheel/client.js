// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e28431){if((e28431 instanceof Error)){
var e = e28431;
return "Error: Unable to stringify";
} else {
throw e28431;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__28434 = arguments.length;
switch (G__28434) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__28432_SHARP_){
if(typeof p1__28432_SHARP_ === 'string'){
return p1__28432_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__28432_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___28437 = arguments.length;
var i__4532__auto___28438 = (0);
while(true){
if((i__4532__auto___28438 < len__4531__auto___28437)){
args__4534__auto__.push((arguments[i__4532__auto___28438]));

var G__28439 = (i__4532__auto___28438 + (1));
i__4532__auto___28438 = G__28439;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq28436){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28436));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___28441 = arguments.length;
var i__4532__auto___28442 = (0);
while(true){
if((i__4532__auto___28442 < len__4531__auto___28441)){
args__4534__auto__.push((arguments[i__4532__auto___28442]));

var G__28443 = (i__4532__auto___28442 + (1));
i__4532__auto___28442 = G__28443;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq28440){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28440));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28444){
var map__28445 = p__28444;
var map__28445__$1 = ((((!((map__28445 == null)))?(((((map__28445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28445):map__28445);
var message = cljs.core.get.call(null,map__28445__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28445__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3949__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3938__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3938__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3938__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24605__auto___28524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto___28524,ch){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto___28524,ch){
return (function (state_28496){
var state_val_28497 = (state_28496[(1)]);
if((state_val_28497 === (7))){
var inst_28492 = (state_28496[(2)]);
var state_28496__$1 = state_28496;
var statearr_28498_28525 = state_28496__$1;
(statearr_28498_28525[(2)] = inst_28492);

(statearr_28498_28525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28497 === (1))){
var state_28496__$1 = state_28496;
var statearr_28499_28526 = state_28496__$1;
(statearr_28499_28526[(2)] = null);

(statearr_28499_28526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28497 === (4))){
var inst_28449 = (state_28496[(7)]);
var inst_28449__$1 = (state_28496[(2)]);
var state_28496__$1 = (function (){var statearr_28500 = state_28496;
(statearr_28500[(7)] = inst_28449__$1);

return statearr_28500;
})();
if(cljs.core.truth_(inst_28449__$1)){
var statearr_28501_28527 = state_28496__$1;
(statearr_28501_28527[(1)] = (5));

} else {
var statearr_28502_28528 = state_28496__$1;
(statearr_28502_28528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28497 === (15))){
var inst_28456 = (state_28496[(8)]);
var inst_28471 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28456);
var inst_28472 = cljs.core.first.call(null,inst_28471);
var inst_28473 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28472);
var inst_28474 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28473)].join('');
var inst_28475 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28474);
var state_28496__$1 = state_28496;
var statearr_28503_28529 = state_28496__$1;
(statearr_28503_28529[(2)] = inst_28475);

(statearr_28503_28529[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28497 === (13))){
var inst_28480 = (state_28496[(2)]);
var state_28496__$1 = state_28496;
var statearr_28504_28530 = state_28496__$1;
(statearr_28504_28530[(2)] = inst_28480);

(statearr_28504_28530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28497 === (6))){
var state_28496__$1 = state_28496;
var statearr_28505_28531 = state_28496__$1;
(statearr_28505_28531[(2)] = null);

(statearr_28505_28531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28497 === (17))){
var inst_28478 = (state_28496[(2)]);
var state_28496__$1 = state_28496;
var statearr_28506_28532 = state_28496__$1;
(statearr_28506_28532[(2)] = inst_28478);

(statearr_28506_28532[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28497 === (3))){
var inst_28494 = (state_28496[(2)]);
var state_28496__$1 = state_28496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28496__$1,inst_28494);
} else {
if((state_val_28497 === (12))){
var inst_28455 = (state_28496[(9)]);
var inst_28469 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28455,opts);
var state_28496__$1 = state_28496;
if(cljs.core.truth_(inst_28469)){
var statearr_28507_28533 = state_28496__$1;
(statearr_28507_28533[(1)] = (15));

} else {
var statearr_28508_28534 = state_28496__$1;
(statearr_28508_28534[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28497 === (2))){
var state_28496__$1 = state_28496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28496__$1,(4),ch);
} else {
if((state_val_28497 === (11))){
var inst_28456 = (state_28496[(8)]);
var inst_28461 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28462 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28456);
var inst_28463 = cljs.core.async.timeout.call(null,(1000));
var inst_28464 = [inst_28462,inst_28463];
var inst_28465 = (new cljs.core.PersistentVector(null,2,(5),inst_28461,inst_28464,null));
var state_28496__$1 = state_28496;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28496__$1,(14),inst_28465);
} else {
if((state_val_28497 === (9))){
var inst_28456 = (state_28496[(8)]);
var inst_28482 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28483 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28456);
var inst_28484 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28483);
var inst_28485 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28484)].join('');
var inst_28486 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28485);
var state_28496__$1 = (function (){var statearr_28509 = state_28496;
(statearr_28509[(10)] = inst_28482);

return statearr_28509;
})();
var statearr_28510_28535 = state_28496__$1;
(statearr_28510_28535[(2)] = inst_28486);

(statearr_28510_28535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28497 === (5))){
var inst_28449 = (state_28496[(7)]);
var inst_28451 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28452 = (new cljs.core.PersistentArrayMap(null,2,inst_28451,null));
var inst_28453 = (new cljs.core.PersistentHashSet(null,inst_28452,null));
var inst_28454 = figwheel.client.focus_msgs.call(null,inst_28453,inst_28449);
var inst_28455 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28454);
var inst_28456 = cljs.core.first.call(null,inst_28454);
var inst_28457 = figwheel.client.autoload_QMARK_.call(null);
var state_28496__$1 = (function (){var statearr_28511 = state_28496;
(statearr_28511[(9)] = inst_28455);

(statearr_28511[(8)] = inst_28456);

return statearr_28511;
})();
if(cljs.core.truth_(inst_28457)){
var statearr_28512_28536 = state_28496__$1;
(statearr_28512_28536[(1)] = (8));

} else {
var statearr_28513_28537 = state_28496__$1;
(statearr_28513_28537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28497 === (14))){
var inst_28467 = (state_28496[(2)]);
var state_28496__$1 = state_28496;
var statearr_28514_28538 = state_28496__$1;
(statearr_28514_28538[(2)] = inst_28467);

(statearr_28514_28538[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28497 === (16))){
var state_28496__$1 = state_28496;
var statearr_28515_28539 = state_28496__$1;
(statearr_28515_28539[(2)] = null);

(statearr_28515_28539[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28497 === (10))){
var inst_28488 = (state_28496[(2)]);
var state_28496__$1 = (function (){var statearr_28516 = state_28496;
(statearr_28516[(11)] = inst_28488);

return statearr_28516;
})();
var statearr_28517_28540 = state_28496__$1;
(statearr_28517_28540[(2)] = null);

(statearr_28517_28540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28497 === (8))){
var inst_28455 = (state_28496[(9)]);
var inst_28459 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28455,opts);
var state_28496__$1 = state_28496;
if(cljs.core.truth_(inst_28459)){
var statearr_28518_28541 = state_28496__$1;
(statearr_28518_28541[(1)] = (11));

} else {
var statearr_28519_28542 = state_28496__$1;
(statearr_28519_28542[(1)] = (12));

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
});})(c__24605__auto___28524,ch))
;
return ((function (switch__24514__auto__,c__24605__auto___28524,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24515__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24515__auto____0 = (function (){
var statearr_28520 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28520[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24515__auto__);

(statearr_28520[(1)] = (1));

return statearr_28520;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24515__auto____1 = (function (state_28496){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_28496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e28521){if((e28521 instanceof Object)){
var ex__24518__auto__ = e28521;
var statearr_28522_28543 = state_28496;
(statearr_28522_28543[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28544 = state_28496;
state_28496 = G__28544;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24515__auto__ = function(state_28496){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24515__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24515__auto____1.call(this,state_28496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24515__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24515__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto___28524,ch))
})();
var state__24607__auto__ = (function (){var statearr_28523 = f__24606__auto__.call(null);
(statearr_28523[(6)] = c__24605__auto___28524);

return statearr_28523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto___28524,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28545_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28545_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_28549 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28549){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_28547 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_28548 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_28547,_STAR_print_fn_STAR_28548,sb,base_path_28549){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_28547,_STAR_print_fn_STAR_28548,sb,base_path_28549))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28548;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28547;
}}catch (e28546){if((e28546 instanceof Error)){
var e = e28546;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28549], null));
} else {
var e = e28546;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28549))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28550){
var map__28551 = p__28550;
var map__28551__$1 = ((((!((map__28551 == null)))?(((((map__28551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28551):map__28551);
var opts = map__28551__$1;
var build_id = cljs.core.get.call(null,map__28551__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28551,map__28551__$1,opts,build_id){
return (function (p__28553){
var vec__28554 = p__28553;
var seq__28555 = cljs.core.seq.call(null,vec__28554);
var first__28556 = cljs.core.first.call(null,seq__28555);
var seq__28555__$1 = cljs.core.next.call(null,seq__28555);
var map__28557 = first__28556;
var map__28557__$1 = ((((!((map__28557 == null)))?(((((map__28557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28557):map__28557);
var msg = map__28557__$1;
var msg_name = cljs.core.get.call(null,map__28557__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28555__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28554,seq__28555,first__28556,seq__28555__$1,map__28557,map__28557__$1,msg,msg_name,_,map__28551,map__28551__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28554,seq__28555,first__28556,seq__28555__$1,map__28557,map__28557__$1,msg,msg_name,_,map__28551,map__28551__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28551,map__28551__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28559){
var vec__28560 = p__28559;
var seq__28561 = cljs.core.seq.call(null,vec__28560);
var first__28562 = cljs.core.first.call(null,seq__28561);
var seq__28561__$1 = cljs.core.next.call(null,seq__28561);
var map__28563 = first__28562;
var map__28563__$1 = ((((!((map__28563 == null)))?(((((map__28563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28563):map__28563);
var msg = map__28563__$1;
var msg_name = cljs.core.get.call(null,map__28563__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28561__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28565){
var map__28566 = p__28565;
var map__28566__$1 = ((((!((map__28566 == null)))?(((((map__28566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28566):map__28566);
var on_compile_warning = cljs.core.get.call(null,map__28566__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28566__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28566,map__28566__$1,on_compile_warning,on_compile_fail){
return (function (p__28568){
var vec__28569 = p__28568;
var seq__28570 = cljs.core.seq.call(null,vec__28569);
var first__28571 = cljs.core.first.call(null,seq__28570);
var seq__28570__$1 = cljs.core.next.call(null,seq__28570);
var map__28572 = first__28571;
var map__28572__$1 = ((((!((map__28572 == null)))?(((((map__28572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28572):map__28572);
var msg = map__28572__$1;
var msg_name = cljs.core.get.call(null,map__28572__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28570__$1;
var pred__28574 = cljs.core._EQ_;
var expr__28575 = msg_name;
if(cljs.core.truth_(pred__28574.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28575))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28574.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28575))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28566,map__28566__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24605__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto__,msg_hist,msg_names,msg){
return (function (state_28664){
var state_val_28665 = (state_28664[(1)]);
if((state_val_28665 === (7))){
var inst_28584 = (state_28664[(2)]);
var state_28664__$1 = state_28664;
if(cljs.core.truth_(inst_28584)){
var statearr_28666_28713 = state_28664__$1;
(statearr_28666_28713[(1)] = (8));

} else {
var statearr_28667_28714 = state_28664__$1;
(statearr_28667_28714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (20))){
var inst_28658 = (state_28664[(2)]);
var state_28664__$1 = state_28664;
var statearr_28668_28715 = state_28664__$1;
(statearr_28668_28715[(2)] = inst_28658);

(statearr_28668_28715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (27))){
var inst_28654 = (state_28664[(2)]);
var state_28664__$1 = state_28664;
var statearr_28669_28716 = state_28664__$1;
(statearr_28669_28716[(2)] = inst_28654);

(statearr_28669_28716[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (1))){
var inst_28577 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28664__$1 = state_28664;
if(cljs.core.truth_(inst_28577)){
var statearr_28670_28717 = state_28664__$1;
(statearr_28670_28717[(1)] = (2));

} else {
var statearr_28671_28718 = state_28664__$1;
(statearr_28671_28718[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (24))){
var inst_28656 = (state_28664[(2)]);
var state_28664__$1 = state_28664;
var statearr_28672_28719 = state_28664__$1;
(statearr_28672_28719[(2)] = inst_28656);

(statearr_28672_28719[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (4))){
var inst_28662 = (state_28664[(2)]);
var state_28664__$1 = state_28664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28664__$1,inst_28662);
} else {
if((state_val_28665 === (15))){
var inst_28660 = (state_28664[(2)]);
var state_28664__$1 = state_28664;
var statearr_28673_28720 = state_28664__$1;
(statearr_28673_28720[(2)] = inst_28660);

(statearr_28673_28720[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (21))){
var inst_28613 = (state_28664[(2)]);
var inst_28614 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28615 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28614);
var state_28664__$1 = (function (){var statearr_28674 = state_28664;
(statearr_28674[(7)] = inst_28613);

return statearr_28674;
})();
var statearr_28675_28721 = state_28664__$1;
(statearr_28675_28721[(2)] = inst_28615);

(statearr_28675_28721[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (31))){
var inst_28643 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28664__$1 = state_28664;
if(cljs.core.truth_(inst_28643)){
var statearr_28676_28722 = state_28664__$1;
(statearr_28676_28722[(1)] = (34));

} else {
var statearr_28677_28723 = state_28664__$1;
(statearr_28677_28723[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (32))){
var inst_28652 = (state_28664[(2)]);
var state_28664__$1 = state_28664;
var statearr_28678_28724 = state_28664__$1;
(statearr_28678_28724[(2)] = inst_28652);

(statearr_28678_28724[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (33))){
var inst_28639 = (state_28664[(2)]);
var inst_28640 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28641 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28640);
var state_28664__$1 = (function (){var statearr_28679 = state_28664;
(statearr_28679[(8)] = inst_28639);

return statearr_28679;
})();
var statearr_28680_28725 = state_28664__$1;
(statearr_28680_28725[(2)] = inst_28641);

(statearr_28680_28725[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (13))){
var inst_28598 = figwheel.client.heads_up.clear.call(null);
var state_28664__$1 = state_28664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28664__$1,(16),inst_28598);
} else {
if((state_val_28665 === (22))){
var inst_28619 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28620 = figwheel.client.heads_up.append_warning_message.call(null,inst_28619);
var state_28664__$1 = state_28664;
var statearr_28681_28726 = state_28664__$1;
(statearr_28681_28726[(2)] = inst_28620);

(statearr_28681_28726[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (36))){
var inst_28650 = (state_28664[(2)]);
var state_28664__$1 = state_28664;
var statearr_28682_28727 = state_28664__$1;
(statearr_28682_28727[(2)] = inst_28650);

(statearr_28682_28727[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (29))){
var inst_28630 = (state_28664[(2)]);
var inst_28631 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28632 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28631);
var state_28664__$1 = (function (){var statearr_28683 = state_28664;
(statearr_28683[(9)] = inst_28630);

return statearr_28683;
})();
var statearr_28684_28728 = state_28664__$1;
(statearr_28684_28728[(2)] = inst_28632);

(statearr_28684_28728[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (6))){
var inst_28579 = (state_28664[(10)]);
var state_28664__$1 = state_28664;
var statearr_28685_28729 = state_28664__$1;
(statearr_28685_28729[(2)] = inst_28579);

(statearr_28685_28729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (28))){
var inst_28626 = (state_28664[(2)]);
var inst_28627 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28628 = figwheel.client.heads_up.display_warning.call(null,inst_28627);
var state_28664__$1 = (function (){var statearr_28686 = state_28664;
(statearr_28686[(11)] = inst_28626);

return statearr_28686;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28664__$1,(29),inst_28628);
} else {
if((state_val_28665 === (25))){
var inst_28624 = figwheel.client.heads_up.clear.call(null);
var state_28664__$1 = state_28664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28664__$1,(28),inst_28624);
} else {
if((state_val_28665 === (34))){
var inst_28645 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28664__$1 = state_28664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28664__$1,(37),inst_28645);
} else {
if((state_val_28665 === (17))){
var inst_28604 = (state_28664[(2)]);
var inst_28605 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28606 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28605);
var state_28664__$1 = (function (){var statearr_28687 = state_28664;
(statearr_28687[(12)] = inst_28604);

return statearr_28687;
})();
var statearr_28688_28730 = state_28664__$1;
(statearr_28688_28730[(2)] = inst_28606);

(statearr_28688_28730[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (3))){
var inst_28596 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28664__$1 = state_28664;
if(cljs.core.truth_(inst_28596)){
var statearr_28689_28731 = state_28664__$1;
(statearr_28689_28731[(1)] = (13));

} else {
var statearr_28690_28732 = state_28664__$1;
(statearr_28690_28732[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (12))){
var inst_28592 = (state_28664[(2)]);
var state_28664__$1 = state_28664;
var statearr_28691_28733 = state_28664__$1;
(statearr_28691_28733[(2)] = inst_28592);

(statearr_28691_28733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (2))){
var inst_28579 = (state_28664[(10)]);
var inst_28579__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28664__$1 = (function (){var statearr_28692 = state_28664;
(statearr_28692[(10)] = inst_28579__$1);

return statearr_28692;
})();
if(cljs.core.truth_(inst_28579__$1)){
var statearr_28693_28734 = state_28664__$1;
(statearr_28693_28734[(1)] = (5));

} else {
var statearr_28694_28735 = state_28664__$1;
(statearr_28694_28735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (23))){
var inst_28622 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28664__$1 = state_28664;
if(cljs.core.truth_(inst_28622)){
var statearr_28695_28736 = state_28664__$1;
(statearr_28695_28736[(1)] = (25));

} else {
var statearr_28696_28737 = state_28664__$1;
(statearr_28696_28737[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (35))){
var state_28664__$1 = state_28664;
var statearr_28697_28738 = state_28664__$1;
(statearr_28697_28738[(2)] = null);

(statearr_28697_28738[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (19))){
var inst_28617 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28664__$1 = state_28664;
if(cljs.core.truth_(inst_28617)){
var statearr_28698_28739 = state_28664__$1;
(statearr_28698_28739[(1)] = (22));

} else {
var statearr_28699_28740 = state_28664__$1;
(statearr_28699_28740[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (11))){
var inst_28588 = (state_28664[(2)]);
var state_28664__$1 = state_28664;
var statearr_28700_28741 = state_28664__$1;
(statearr_28700_28741[(2)] = inst_28588);

(statearr_28700_28741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (9))){
var inst_28590 = figwheel.client.heads_up.clear.call(null);
var state_28664__$1 = state_28664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28664__$1,(12),inst_28590);
} else {
if((state_val_28665 === (5))){
var inst_28581 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28664__$1 = state_28664;
var statearr_28701_28742 = state_28664__$1;
(statearr_28701_28742[(2)] = inst_28581);

(statearr_28701_28742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (14))){
var inst_28608 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28664__$1 = state_28664;
if(cljs.core.truth_(inst_28608)){
var statearr_28702_28743 = state_28664__$1;
(statearr_28702_28743[(1)] = (18));

} else {
var statearr_28703_28744 = state_28664__$1;
(statearr_28703_28744[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (26))){
var inst_28634 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28664__$1 = state_28664;
if(cljs.core.truth_(inst_28634)){
var statearr_28704_28745 = state_28664__$1;
(statearr_28704_28745[(1)] = (30));

} else {
var statearr_28705_28746 = state_28664__$1;
(statearr_28705_28746[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (16))){
var inst_28600 = (state_28664[(2)]);
var inst_28601 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28602 = figwheel.client.heads_up.display_exception.call(null,inst_28601);
var state_28664__$1 = (function (){var statearr_28706 = state_28664;
(statearr_28706[(13)] = inst_28600);

return statearr_28706;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28664__$1,(17),inst_28602);
} else {
if((state_val_28665 === (30))){
var inst_28636 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28637 = figwheel.client.heads_up.display_warning.call(null,inst_28636);
var state_28664__$1 = state_28664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28664__$1,(33),inst_28637);
} else {
if((state_val_28665 === (10))){
var inst_28594 = (state_28664[(2)]);
var state_28664__$1 = state_28664;
var statearr_28707_28747 = state_28664__$1;
(statearr_28707_28747[(2)] = inst_28594);

(statearr_28707_28747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (18))){
var inst_28610 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28611 = figwheel.client.heads_up.display_exception.call(null,inst_28610);
var state_28664__$1 = state_28664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28664__$1,(21),inst_28611);
} else {
if((state_val_28665 === (37))){
var inst_28647 = (state_28664[(2)]);
var state_28664__$1 = state_28664;
var statearr_28708_28748 = state_28664__$1;
(statearr_28708_28748[(2)] = inst_28647);

(statearr_28708_28748[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (8))){
var inst_28586 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28664__$1 = state_28664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28664__$1,(11),inst_28586);
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
});})(c__24605__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24514__auto__,c__24605__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24515__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24515__auto____0 = (function (){
var statearr_28709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28709[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24515__auto__);

(statearr_28709[(1)] = (1));

return statearr_28709;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24515__auto____1 = (function (state_28664){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_28664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e28710){if((e28710 instanceof Object)){
var ex__24518__auto__ = e28710;
var statearr_28711_28749 = state_28664;
(statearr_28711_28749[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28750 = state_28664;
state_28664 = G__28750;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24515__auto__ = function(state_28664){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24515__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24515__auto____1.call(this,state_28664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24515__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24515__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto__,msg_hist,msg_names,msg))
})();
var state__24607__auto__ = (function (){var statearr_28712 = f__24606__auto__.call(null);
(statearr_28712[(6)] = c__24605__auto__);

return statearr_28712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto__,msg_hist,msg_names,msg))
);

return c__24605__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24605__auto___28779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto___28779,ch){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto___28779,ch){
return (function (state_28765){
var state_val_28766 = (state_28765[(1)]);
if((state_val_28766 === (1))){
var state_28765__$1 = state_28765;
var statearr_28767_28780 = state_28765__$1;
(statearr_28767_28780[(2)] = null);

(statearr_28767_28780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28766 === (2))){
var state_28765__$1 = state_28765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28765__$1,(4),ch);
} else {
if((state_val_28766 === (3))){
var inst_28763 = (state_28765[(2)]);
var state_28765__$1 = state_28765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28765__$1,inst_28763);
} else {
if((state_val_28766 === (4))){
var inst_28753 = (state_28765[(7)]);
var inst_28753__$1 = (state_28765[(2)]);
var state_28765__$1 = (function (){var statearr_28768 = state_28765;
(statearr_28768[(7)] = inst_28753__$1);

return statearr_28768;
})();
if(cljs.core.truth_(inst_28753__$1)){
var statearr_28769_28781 = state_28765__$1;
(statearr_28769_28781[(1)] = (5));

} else {
var statearr_28770_28782 = state_28765__$1;
(statearr_28770_28782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28766 === (5))){
var inst_28753 = (state_28765[(7)]);
var inst_28755 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28753);
var state_28765__$1 = state_28765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28765__$1,(8),inst_28755);
} else {
if((state_val_28766 === (6))){
var state_28765__$1 = state_28765;
var statearr_28771_28783 = state_28765__$1;
(statearr_28771_28783[(2)] = null);

(statearr_28771_28783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28766 === (7))){
var inst_28761 = (state_28765[(2)]);
var state_28765__$1 = state_28765;
var statearr_28772_28784 = state_28765__$1;
(statearr_28772_28784[(2)] = inst_28761);

(statearr_28772_28784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28766 === (8))){
var inst_28757 = (state_28765[(2)]);
var state_28765__$1 = (function (){var statearr_28773 = state_28765;
(statearr_28773[(8)] = inst_28757);

return statearr_28773;
})();
var statearr_28774_28785 = state_28765__$1;
(statearr_28774_28785[(2)] = null);

(statearr_28774_28785[(1)] = (2));


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
});})(c__24605__auto___28779,ch))
;
return ((function (switch__24514__auto__,c__24605__auto___28779,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24515__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24515__auto____0 = (function (){
var statearr_28775 = [null,null,null,null,null,null,null,null,null];
(statearr_28775[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24515__auto__);

(statearr_28775[(1)] = (1));

return statearr_28775;
});
var figwheel$client$heads_up_plugin_$_state_machine__24515__auto____1 = (function (state_28765){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_28765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e28776){if((e28776 instanceof Object)){
var ex__24518__auto__ = e28776;
var statearr_28777_28786 = state_28765;
(statearr_28777_28786[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28787 = state_28765;
state_28765 = G__28787;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24515__auto__ = function(state_28765){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24515__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24515__auto____1.call(this,state_28765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24515__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24515__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto___28779,ch))
})();
var state__24607__auto__ = (function (){var statearr_28778 = f__24606__auto__.call(null);
(statearr_28778[(6)] = c__24605__auto___28779);

return statearr_28778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto___28779,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24605__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto__){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto__){
return (function (state_28793){
var state_val_28794 = (state_28793[(1)]);
if((state_val_28794 === (1))){
var inst_28788 = cljs.core.async.timeout.call(null,(3000));
var state_28793__$1 = state_28793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28793__$1,(2),inst_28788);
} else {
if((state_val_28794 === (2))){
var inst_28790 = (state_28793[(2)]);
var inst_28791 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28793__$1 = (function (){var statearr_28795 = state_28793;
(statearr_28795[(7)] = inst_28790);

return statearr_28795;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28793__$1,inst_28791);
} else {
return null;
}
}
});})(c__24605__auto__))
;
return ((function (switch__24514__auto__,c__24605__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24515__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24515__auto____0 = (function (){
var statearr_28796 = [null,null,null,null,null,null,null,null];
(statearr_28796[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24515__auto__);

(statearr_28796[(1)] = (1));

return statearr_28796;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24515__auto____1 = (function (state_28793){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_28793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e28797){if((e28797 instanceof Object)){
var ex__24518__auto__ = e28797;
var statearr_28798_28800 = state_28793;
(statearr_28798_28800[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28801 = state_28793;
state_28793 = G__28801;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24515__auto__ = function(state_28793){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24515__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24515__auto____1.call(this,state_28793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24515__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24515__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto__))
})();
var state__24607__auto__ = (function (){var statearr_28799 = f__24606__auto__.call(null);
(statearr_28799[(6)] = c__24605__auto__);

return statearr_28799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto__))
);

return c__24605__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24605__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto__,figwheel_version,temp__5457__auto__){
return (function (state_28808){
var state_val_28809 = (state_28808[(1)]);
if((state_val_28809 === (1))){
var inst_28802 = cljs.core.async.timeout.call(null,(2000));
var state_28808__$1 = state_28808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28808__$1,(2),inst_28802);
} else {
if((state_val_28809 === (2))){
var inst_28804 = (state_28808[(2)]);
var inst_28805 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_28806 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_28805);
var state_28808__$1 = (function (){var statearr_28810 = state_28808;
(statearr_28810[(7)] = inst_28804);

return statearr_28810;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28808__$1,inst_28806);
} else {
return null;
}
}
});})(c__24605__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__24514__auto__,c__24605__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24515__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24515__auto____0 = (function (){
var statearr_28811 = [null,null,null,null,null,null,null,null];
(statearr_28811[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24515__auto__);

(statearr_28811[(1)] = (1));

return statearr_28811;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24515__auto____1 = (function (state_28808){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_28808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e28812){if((e28812 instanceof Object)){
var ex__24518__auto__ = e28812;
var statearr_28813_28815 = state_28808;
(statearr_28813_28815[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28816 = state_28808;
state_28808 = G__28816;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24515__auto__ = function(state_28808){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24515__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24515__auto____1.call(this,state_28808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24515__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24515__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto__,figwheel_version,temp__5457__auto__))
})();
var state__24607__auto__ = (function (){var statearr_28814 = f__24606__auto__.call(null);
(statearr_28814[(6)] = c__24605__auto__);

return statearr_28814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto__,figwheel_version,temp__5457__auto__))
);

return c__24605__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__28817){
var map__28818 = p__28817;
var map__28818__$1 = ((((!((map__28818 == null)))?(((((map__28818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28818):map__28818);
var file = cljs.core.get.call(null,map__28818__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__28818__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__28818__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__28820 = "";
var G__28820__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28820),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__28820);
var G__28820__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28820__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__28820__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28820__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__28820__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28821){
var map__28822 = p__28821;
var map__28822__$1 = ((((!((map__28822 == null)))?(((((map__28822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28822):map__28822);
var ed = map__28822__$1;
var formatted_exception = cljs.core.get.call(null,map__28822__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28822__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28822__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28824_28828 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28825_28829 = null;
var count__28826_28830 = (0);
var i__28827_28831 = (0);
while(true){
if((i__28827_28831 < count__28826_28830)){
var msg_28832 = cljs.core._nth.call(null,chunk__28825_28829,i__28827_28831);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28832);


var G__28833 = seq__28824_28828;
var G__28834 = chunk__28825_28829;
var G__28835 = count__28826_28830;
var G__28836 = (i__28827_28831 + (1));
seq__28824_28828 = G__28833;
chunk__28825_28829 = G__28834;
count__28826_28830 = G__28835;
i__28827_28831 = G__28836;
continue;
} else {
var temp__5457__auto___28837 = cljs.core.seq.call(null,seq__28824_28828);
if(temp__5457__auto___28837){
var seq__28824_28838__$1 = temp__5457__auto___28837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28824_28838__$1)){
var c__4351__auto___28839 = cljs.core.chunk_first.call(null,seq__28824_28838__$1);
var G__28840 = cljs.core.chunk_rest.call(null,seq__28824_28838__$1);
var G__28841 = c__4351__auto___28839;
var G__28842 = cljs.core.count.call(null,c__4351__auto___28839);
var G__28843 = (0);
seq__28824_28828 = G__28840;
chunk__28825_28829 = G__28841;
count__28826_28830 = G__28842;
i__28827_28831 = G__28843;
continue;
} else {
var msg_28844 = cljs.core.first.call(null,seq__28824_28838__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28844);


var G__28845 = cljs.core.next.call(null,seq__28824_28838__$1);
var G__28846 = null;
var G__28847 = (0);
var G__28848 = (0);
seq__28824_28828 = G__28845;
chunk__28825_28829 = G__28846;
count__28826_28830 = G__28847;
i__28827_28831 = G__28848;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28849){
var map__28850 = p__28849;
var map__28850__$1 = ((((!((map__28850 == null)))?(((((map__28850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28850):map__28850);
var w = map__28850__$1;
var message = cljs.core.get.call(null,map__28850__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public\\js\\out\\figwheel\\client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public\\js\\out\\figwheel\\client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3938__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28852 = cljs.core.seq.call(null,plugins);
var chunk__28853 = null;
var count__28854 = (0);
var i__28855 = (0);
while(true){
if((i__28855 < count__28854)){
var vec__28856 = cljs.core._nth.call(null,chunk__28853,i__28855);
var k = cljs.core.nth.call(null,vec__28856,(0),null);
var plugin = cljs.core.nth.call(null,vec__28856,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28862 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28852,chunk__28853,count__28854,i__28855,pl_28862,vec__28856,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28862.call(null,msg_hist);
});})(seq__28852,chunk__28853,count__28854,i__28855,pl_28862,vec__28856,k,plugin))
);
} else {
}


var G__28863 = seq__28852;
var G__28864 = chunk__28853;
var G__28865 = count__28854;
var G__28866 = (i__28855 + (1));
seq__28852 = G__28863;
chunk__28853 = G__28864;
count__28854 = G__28865;
i__28855 = G__28866;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28852);
if(temp__5457__auto__){
var seq__28852__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28852__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__28852__$1);
var G__28867 = cljs.core.chunk_rest.call(null,seq__28852__$1);
var G__28868 = c__4351__auto__;
var G__28869 = cljs.core.count.call(null,c__4351__auto__);
var G__28870 = (0);
seq__28852 = G__28867;
chunk__28853 = G__28868;
count__28854 = G__28869;
i__28855 = G__28870;
continue;
} else {
var vec__28859 = cljs.core.first.call(null,seq__28852__$1);
var k = cljs.core.nth.call(null,vec__28859,(0),null);
var plugin = cljs.core.nth.call(null,vec__28859,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28871 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28852,chunk__28853,count__28854,i__28855,pl_28871,vec__28859,k,plugin,seq__28852__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28871.call(null,msg_hist);
});})(seq__28852,chunk__28853,count__28854,i__28855,pl_28871,vec__28859,k,plugin,seq__28852__$1,temp__5457__auto__))
);
} else {
}


var G__28872 = cljs.core.next.call(null,seq__28852__$1);
var G__28873 = null;
var G__28874 = (0);
var G__28875 = (0);
seq__28852 = G__28872;
chunk__28853 = G__28873;
count__28854 = G__28874;
i__28855 = G__28875;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__28877 = arguments.length;
switch (G__28877) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__28878_28883 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__28879_28884 = null;
var count__28880_28885 = (0);
var i__28881_28886 = (0);
while(true){
if((i__28881_28886 < count__28880_28885)){
var msg_28887 = cljs.core._nth.call(null,chunk__28879_28884,i__28881_28886);
figwheel.client.socket.handle_incoming_message.call(null,msg_28887);


var G__28888 = seq__28878_28883;
var G__28889 = chunk__28879_28884;
var G__28890 = count__28880_28885;
var G__28891 = (i__28881_28886 + (1));
seq__28878_28883 = G__28888;
chunk__28879_28884 = G__28889;
count__28880_28885 = G__28890;
i__28881_28886 = G__28891;
continue;
} else {
var temp__5457__auto___28892 = cljs.core.seq.call(null,seq__28878_28883);
if(temp__5457__auto___28892){
var seq__28878_28893__$1 = temp__5457__auto___28892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28878_28893__$1)){
var c__4351__auto___28894 = cljs.core.chunk_first.call(null,seq__28878_28893__$1);
var G__28895 = cljs.core.chunk_rest.call(null,seq__28878_28893__$1);
var G__28896 = c__4351__auto___28894;
var G__28897 = cljs.core.count.call(null,c__4351__auto___28894);
var G__28898 = (0);
seq__28878_28883 = G__28895;
chunk__28879_28884 = G__28896;
count__28880_28885 = G__28897;
i__28881_28886 = G__28898;
continue;
} else {
var msg_28899 = cljs.core.first.call(null,seq__28878_28893__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_28899);


var G__28900 = cljs.core.next.call(null,seq__28878_28893__$1);
var G__28901 = null;
var G__28902 = (0);
var G__28903 = (0);
seq__28878_28883 = G__28900;
chunk__28879_28884 = G__28901;
count__28880_28885 = G__28902;
i__28881_28886 = G__28903;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4534__auto__ = [];
var len__4531__auto___28908 = arguments.length;
var i__4532__auto___28909 = (0);
while(true){
if((i__4532__auto___28909 < len__4531__auto___28908)){
args__4534__auto__.push((arguments[i__4532__auto___28909]));

var G__28910 = (i__4532__auto___28909 + (1));
i__4532__auto___28909 = G__28910;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28905){
var map__28906 = p__28905;
var map__28906__$1 = ((((!((map__28906 == null)))?(((((map__28906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28906):map__28906);
var opts = map__28906__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28904){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28904));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e28911){if((e28911 instanceof Error)){
var e = e28911;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e28911;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__28912){
var map__28913 = p__28912;
var map__28913__$1 = ((((!((map__28913 == null)))?(((((map__28913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28913):map__28913);
var msg_name = cljs.core.get.call(null,map__28913__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1538771241934
