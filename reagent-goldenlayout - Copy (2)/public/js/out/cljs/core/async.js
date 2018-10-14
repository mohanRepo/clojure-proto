// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__24665 = arguments.length;
switch (G__24665) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24666 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24666 = (function (f,blockable,meta24667){
this.f = f;
this.blockable = blockable;
this.meta24667 = meta24667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24668,meta24667__$1){
var self__ = this;
var _24668__$1 = this;
return (new cljs.core.async.t_cljs$core$async24666(self__.f,self__.blockable,meta24667__$1));
});

cljs.core.async.t_cljs$core$async24666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24668){
var self__ = this;
var _24668__$1 = this;
return self__.meta24667;
});

cljs.core.async.t_cljs$core$async24666.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24666.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24666.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24666.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24667","meta24667",-772361745,null)], null);
});

cljs.core.async.t_cljs$core$async24666.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24666.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24666";

cljs.core.async.t_cljs$core$async24666.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async24666");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24666.
 */
cljs.core.async.__GT_t_cljs$core$async24666 = (function cljs$core$async$__GT_t_cljs$core$async24666(f__$1,blockable__$1,meta24667){
return (new cljs.core.async.t_cljs$core$async24666(f__$1,blockable__$1,meta24667));
});

}

return (new cljs.core.async.t_cljs$core$async24666(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__24672 = arguments.length;
switch (G__24672) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__24675 = arguments.length;
switch (G__24675) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__24678 = arguments.length;
switch (G__24678) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24680 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24680);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24680,ret){
return (function (){
return fn1.call(null,val_24680);
});})(val_24680,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__24682 = arguments.length;
switch (G__24682) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___24684 = n;
var x_24685 = (0);
while(true){
if((x_24685 < n__4408__auto___24684)){
(a[x_24685] = (0));

var G__24686 = (x_24685 + (1));
x_24685 = G__24686;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24687 = (i + (1));
i = G__24687;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24688 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24688 = (function (flag,meta24689){
this.flag = flag;
this.meta24689 = meta24689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24690,meta24689__$1){
var self__ = this;
var _24690__$1 = this;
return (new cljs.core.async.t_cljs$core$async24688(self__.flag,meta24689__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24688.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24690){
var self__ = this;
var _24690__$1 = this;
return self__.meta24689;
});})(flag))
;

cljs.core.async.t_cljs$core$async24688.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24688.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24688.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24688.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24688.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24689","meta24689",2051809246,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24688.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24688.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24688";

cljs.core.async.t_cljs$core$async24688.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async24688");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24688.
 */
cljs.core.async.__GT_t_cljs$core$async24688 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24688(flag__$1,meta24689){
return (new cljs.core.async.t_cljs$core$async24688(flag__$1,meta24689));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24688(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24691 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24691 = (function (flag,cb,meta24692){
this.flag = flag;
this.cb = cb;
this.meta24692 = meta24692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24693,meta24692__$1){
var self__ = this;
var _24693__$1 = this;
return (new cljs.core.async.t_cljs$core$async24691(self__.flag,self__.cb,meta24692__$1));
});

cljs.core.async.t_cljs$core$async24691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24693){
var self__ = this;
var _24693__$1 = this;
return self__.meta24692;
});

cljs.core.async.t_cljs$core$async24691.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24691.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24691.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24691.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24691.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24692","meta24692",1460689093,null)], null);
});

cljs.core.async.t_cljs$core$async24691.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24691.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24691";

cljs.core.async.t_cljs$core$async24691.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async24691");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24691.
 */
cljs.core.async.__GT_t_cljs$core$async24691 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24691(flag__$1,cb__$1,meta24692){
return (new cljs.core.async.t_cljs$core$async24691(flag__$1,cb__$1,meta24692));
});

}

return (new cljs.core.async.t_cljs$core$async24691(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24694_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24694_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24695_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24695_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24696 = (i + (1));
i = G__24696;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24702 = arguments.length;
var i__4532__auto___24703 = (0);
while(true){
if((i__4532__auto___24703 < len__4531__auto___24702)){
args__4534__auto__.push((arguments[i__4532__auto___24703]));

var G__24704 = (i__4532__auto___24703 + (1));
i__4532__auto___24703 = G__24704;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24699){
var map__24700 = p__24699;
var map__24700__$1 = ((((!((map__24700 == null)))?(((((map__24700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24700):map__24700);
var opts = map__24700__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24697){
var G__24698 = cljs.core.first.call(null,seq24697);
var seq24697__$1 = cljs.core.next.call(null,seq24697);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24698,seq24697__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__24706 = arguments.length;
switch (G__24706) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24605__auto___24752 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto___24752){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto___24752){
return (function (state_24730){
var state_val_24731 = (state_24730[(1)]);
if((state_val_24731 === (7))){
var inst_24726 = (state_24730[(2)]);
var state_24730__$1 = state_24730;
var statearr_24732_24753 = state_24730__$1;
(statearr_24732_24753[(2)] = inst_24726);

(statearr_24732_24753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24731 === (1))){
var state_24730__$1 = state_24730;
var statearr_24733_24754 = state_24730__$1;
(statearr_24733_24754[(2)] = null);

(statearr_24733_24754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24731 === (4))){
var inst_24709 = (state_24730[(7)]);
var inst_24709__$1 = (state_24730[(2)]);
var inst_24710 = (inst_24709__$1 == null);
var state_24730__$1 = (function (){var statearr_24734 = state_24730;
(statearr_24734[(7)] = inst_24709__$1);

return statearr_24734;
})();
if(cljs.core.truth_(inst_24710)){
var statearr_24735_24755 = state_24730__$1;
(statearr_24735_24755[(1)] = (5));

} else {
var statearr_24736_24756 = state_24730__$1;
(statearr_24736_24756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24731 === (13))){
var state_24730__$1 = state_24730;
var statearr_24737_24757 = state_24730__$1;
(statearr_24737_24757[(2)] = null);

(statearr_24737_24757[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24731 === (6))){
var inst_24709 = (state_24730[(7)]);
var state_24730__$1 = state_24730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24730__$1,(11),to,inst_24709);
} else {
if((state_val_24731 === (3))){
var inst_24728 = (state_24730[(2)]);
var state_24730__$1 = state_24730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24730__$1,inst_24728);
} else {
if((state_val_24731 === (12))){
var state_24730__$1 = state_24730;
var statearr_24738_24758 = state_24730__$1;
(statearr_24738_24758[(2)] = null);

(statearr_24738_24758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24731 === (2))){
var state_24730__$1 = state_24730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24730__$1,(4),from);
} else {
if((state_val_24731 === (11))){
var inst_24719 = (state_24730[(2)]);
var state_24730__$1 = state_24730;
if(cljs.core.truth_(inst_24719)){
var statearr_24739_24759 = state_24730__$1;
(statearr_24739_24759[(1)] = (12));

} else {
var statearr_24740_24760 = state_24730__$1;
(statearr_24740_24760[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24731 === (9))){
var state_24730__$1 = state_24730;
var statearr_24741_24761 = state_24730__$1;
(statearr_24741_24761[(2)] = null);

(statearr_24741_24761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24731 === (5))){
var state_24730__$1 = state_24730;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24742_24762 = state_24730__$1;
(statearr_24742_24762[(1)] = (8));

} else {
var statearr_24743_24763 = state_24730__$1;
(statearr_24743_24763[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24731 === (14))){
var inst_24724 = (state_24730[(2)]);
var state_24730__$1 = state_24730;
var statearr_24744_24764 = state_24730__$1;
(statearr_24744_24764[(2)] = inst_24724);

(statearr_24744_24764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24731 === (10))){
var inst_24716 = (state_24730[(2)]);
var state_24730__$1 = state_24730;
var statearr_24745_24765 = state_24730__$1;
(statearr_24745_24765[(2)] = inst_24716);

(statearr_24745_24765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24731 === (8))){
var inst_24713 = cljs.core.async.close_BANG_.call(null,to);
var state_24730__$1 = state_24730;
var statearr_24746_24766 = state_24730__$1;
(statearr_24746_24766[(2)] = inst_24713);

(statearr_24746_24766[(1)] = (10));


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
});})(c__24605__auto___24752))
;
return ((function (switch__24514__auto__,c__24605__auto___24752){
return (function() {
var cljs$core$async$state_machine__24515__auto__ = null;
var cljs$core$async$state_machine__24515__auto____0 = (function (){
var statearr_24747 = [null,null,null,null,null,null,null,null];
(statearr_24747[(0)] = cljs$core$async$state_machine__24515__auto__);

(statearr_24747[(1)] = (1));

return statearr_24747;
});
var cljs$core$async$state_machine__24515__auto____1 = (function (state_24730){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_24730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e24748){if((e24748 instanceof Object)){
var ex__24518__auto__ = e24748;
var statearr_24749_24767 = state_24730;
(statearr_24749_24767[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24768 = state_24730;
state_24730 = G__24768;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
cljs$core$async$state_machine__24515__auto__ = function(state_24730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24515__auto____1.call(this,state_24730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24515__auto____0;
cljs$core$async$state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24515__auto____1;
return cljs$core$async$state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto___24752))
})();
var state__24607__auto__ = (function (){var statearr_24750 = f__24606__auto__.call(null);
(statearr_24750[(6)] = c__24605__auto___24752);

return statearr_24750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto___24752))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24769){
var vec__24770 = p__24769;
var v = cljs.core.nth.call(null,vec__24770,(0),null);
var p = cljs.core.nth.call(null,vec__24770,(1),null);
var job = vec__24770;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24605__auto___24941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto___24941,res,vec__24770,v,p,job,jobs,results){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto___24941,res,vec__24770,v,p,job,jobs,results){
return (function (state_24777){
var state_val_24778 = (state_24777[(1)]);
if((state_val_24778 === (1))){
var state_24777__$1 = state_24777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24777__$1,(2),res,v);
} else {
if((state_val_24778 === (2))){
var inst_24774 = (state_24777[(2)]);
var inst_24775 = cljs.core.async.close_BANG_.call(null,res);
var state_24777__$1 = (function (){var statearr_24779 = state_24777;
(statearr_24779[(7)] = inst_24774);

return statearr_24779;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24777__$1,inst_24775);
} else {
return null;
}
}
});})(c__24605__auto___24941,res,vec__24770,v,p,job,jobs,results))
;
return ((function (switch__24514__auto__,c__24605__auto___24941,res,vec__24770,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____0 = (function (){
var statearr_24780 = [null,null,null,null,null,null,null,null];
(statearr_24780[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__);

(statearr_24780[(1)] = (1));

return statearr_24780;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____1 = (function (state_24777){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_24777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e24781){if((e24781 instanceof Object)){
var ex__24518__auto__ = e24781;
var statearr_24782_24942 = state_24777;
(statearr_24782_24942[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24943 = state_24777;
state_24777 = G__24943;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__ = function(state_24777){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____1.call(this,state_24777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto___24941,res,vec__24770,v,p,job,jobs,results))
})();
var state__24607__auto__ = (function (){var statearr_24783 = f__24606__auto__.call(null);
(statearr_24783[(6)] = c__24605__auto___24941);

return statearr_24783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto___24941,res,vec__24770,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24784){
var vec__24785 = p__24784;
var v = cljs.core.nth.call(null,vec__24785,(0),null);
var p = cljs.core.nth.call(null,vec__24785,(1),null);
var job = vec__24785;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___24944 = n;
var __24945 = (0);
while(true){
if((__24945 < n__4408__auto___24944)){
var G__24788_24946 = type;
var G__24788_24947__$1 = (((G__24788_24946 instanceof cljs.core.Keyword))?G__24788_24946.fqn:null);
switch (G__24788_24947__$1) {
case "compute":
var c__24605__auto___24949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24945,c__24605__auto___24949,G__24788_24946,G__24788_24947__$1,n__4408__auto___24944,jobs,results,process,async){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (__24945,c__24605__auto___24949,G__24788_24946,G__24788_24947__$1,n__4408__auto___24944,jobs,results,process,async){
return (function (state_24801){
var state_val_24802 = (state_24801[(1)]);
if((state_val_24802 === (1))){
var state_24801__$1 = state_24801;
var statearr_24803_24950 = state_24801__$1;
(statearr_24803_24950[(2)] = null);

(statearr_24803_24950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24802 === (2))){
var state_24801__$1 = state_24801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24801__$1,(4),jobs);
} else {
if((state_val_24802 === (3))){
var inst_24799 = (state_24801[(2)]);
var state_24801__$1 = state_24801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24801__$1,inst_24799);
} else {
if((state_val_24802 === (4))){
var inst_24791 = (state_24801[(2)]);
var inst_24792 = process.call(null,inst_24791);
var state_24801__$1 = state_24801;
if(cljs.core.truth_(inst_24792)){
var statearr_24804_24951 = state_24801__$1;
(statearr_24804_24951[(1)] = (5));

} else {
var statearr_24805_24952 = state_24801__$1;
(statearr_24805_24952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24802 === (5))){
var state_24801__$1 = state_24801;
var statearr_24806_24953 = state_24801__$1;
(statearr_24806_24953[(2)] = null);

(statearr_24806_24953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24802 === (6))){
var state_24801__$1 = state_24801;
var statearr_24807_24954 = state_24801__$1;
(statearr_24807_24954[(2)] = null);

(statearr_24807_24954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24802 === (7))){
var inst_24797 = (state_24801[(2)]);
var state_24801__$1 = state_24801;
var statearr_24808_24955 = state_24801__$1;
(statearr_24808_24955[(2)] = inst_24797);

(statearr_24808_24955[(1)] = (3));


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
});})(__24945,c__24605__auto___24949,G__24788_24946,G__24788_24947__$1,n__4408__auto___24944,jobs,results,process,async))
;
return ((function (__24945,switch__24514__auto__,c__24605__auto___24949,G__24788_24946,G__24788_24947__$1,n__4408__auto___24944,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____0 = (function (){
var statearr_24809 = [null,null,null,null,null,null,null];
(statearr_24809[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__);

(statearr_24809[(1)] = (1));

return statearr_24809;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____1 = (function (state_24801){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_24801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e24810){if((e24810 instanceof Object)){
var ex__24518__auto__ = e24810;
var statearr_24811_24956 = state_24801;
(statearr_24811_24956[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24957 = state_24801;
state_24801 = G__24957;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__ = function(state_24801){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____1.call(this,state_24801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__;
})()
;})(__24945,switch__24514__auto__,c__24605__auto___24949,G__24788_24946,G__24788_24947__$1,n__4408__auto___24944,jobs,results,process,async))
})();
var state__24607__auto__ = (function (){var statearr_24812 = f__24606__auto__.call(null);
(statearr_24812[(6)] = c__24605__auto___24949);

return statearr_24812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(__24945,c__24605__auto___24949,G__24788_24946,G__24788_24947__$1,n__4408__auto___24944,jobs,results,process,async))
);


break;
case "async":
var c__24605__auto___24958 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24945,c__24605__auto___24958,G__24788_24946,G__24788_24947__$1,n__4408__auto___24944,jobs,results,process,async){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (__24945,c__24605__auto___24958,G__24788_24946,G__24788_24947__$1,n__4408__auto___24944,jobs,results,process,async){
return (function (state_24825){
var state_val_24826 = (state_24825[(1)]);
if((state_val_24826 === (1))){
var state_24825__$1 = state_24825;
var statearr_24827_24959 = state_24825__$1;
(statearr_24827_24959[(2)] = null);

(statearr_24827_24959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24826 === (2))){
var state_24825__$1 = state_24825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24825__$1,(4),jobs);
} else {
if((state_val_24826 === (3))){
var inst_24823 = (state_24825[(2)]);
var state_24825__$1 = state_24825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24825__$1,inst_24823);
} else {
if((state_val_24826 === (4))){
var inst_24815 = (state_24825[(2)]);
var inst_24816 = async.call(null,inst_24815);
var state_24825__$1 = state_24825;
if(cljs.core.truth_(inst_24816)){
var statearr_24828_24960 = state_24825__$1;
(statearr_24828_24960[(1)] = (5));

} else {
var statearr_24829_24961 = state_24825__$1;
(statearr_24829_24961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24826 === (5))){
var state_24825__$1 = state_24825;
var statearr_24830_24962 = state_24825__$1;
(statearr_24830_24962[(2)] = null);

(statearr_24830_24962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24826 === (6))){
var state_24825__$1 = state_24825;
var statearr_24831_24963 = state_24825__$1;
(statearr_24831_24963[(2)] = null);

(statearr_24831_24963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24826 === (7))){
var inst_24821 = (state_24825[(2)]);
var state_24825__$1 = state_24825;
var statearr_24832_24964 = state_24825__$1;
(statearr_24832_24964[(2)] = inst_24821);

(statearr_24832_24964[(1)] = (3));


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
});})(__24945,c__24605__auto___24958,G__24788_24946,G__24788_24947__$1,n__4408__auto___24944,jobs,results,process,async))
;
return ((function (__24945,switch__24514__auto__,c__24605__auto___24958,G__24788_24946,G__24788_24947__$1,n__4408__auto___24944,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____0 = (function (){
var statearr_24833 = [null,null,null,null,null,null,null];
(statearr_24833[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__);

(statearr_24833[(1)] = (1));

return statearr_24833;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____1 = (function (state_24825){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_24825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e24834){if((e24834 instanceof Object)){
var ex__24518__auto__ = e24834;
var statearr_24835_24965 = state_24825;
(statearr_24835_24965[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24966 = state_24825;
state_24825 = G__24966;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__ = function(state_24825){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____1.call(this,state_24825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__;
})()
;})(__24945,switch__24514__auto__,c__24605__auto___24958,G__24788_24946,G__24788_24947__$1,n__4408__auto___24944,jobs,results,process,async))
})();
var state__24607__auto__ = (function (){var statearr_24836 = f__24606__auto__.call(null);
(statearr_24836[(6)] = c__24605__auto___24958);

return statearr_24836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(__24945,c__24605__auto___24958,G__24788_24946,G__24788_24947__$1,n__4408__auto___24944,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24788_24947__$1)].join('')));

}

var G__24967 = (__24945 + (1));
__24945 = G__24967;
continue;
} else {
}
break;
}

var c__24605__auto___24968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto___24968,jobs,results,process,async){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto___24968,jobs,results,process,async){
return (function (state_24858){
var state_val_24859 = (state_24858[(1)]);
if((state_val_24859 === (1))){
var state_24858__$1 = state_24858;
var statearr_24860_24969 = state_24858__$1;
(statearr_24860_24969[(2)] = null);

(statearr_24860_24969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24859 === (2))){
var state_24858__$1 = state_24858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24858__$1,(4),from);
} else {
if((state_val_24859 === (3))){
var inst_24856 = (state_24858[(2)]);
var state_24858__$1 = state_24858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24858__$1,inst_24856);
} else {
if((state_val_24859 === (4))){
var inst_24839 = (state_24858[(7)]);
var inst_24839__$1 = (state_24858[(2)]);
var inst_24840 = (inst_24839__$1 == null);
var state_24858__$1 = (function (){var statearr_24861 = state_24858;
(statearr_24861[(7)] = inst_24839__$1);

return statearr_24861;
})();
if(cljs.core.truth_(inst_24840)){
var statearr_24862_24970 = state_24858__$1;
(statearr_24862_24970[(1)] = (5));

} else {
var statearr_24863_24971 = state_24858__$1;
(statearr_24863_24971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24859 === (5))){
var inst_24842 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24858__$1 = state_24858;
var statearr_24864_24972 = state_24858__$1;
(statearr_24864_24972[(2)] = inst_24842);

(statearr_24864_24972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24859 === (6))){
var inst_24839 = (state_24858[(7)]);
var inst_24844 = (state_24858[(8)]);
var inst_24844__$1 = cljs.core.async.chan.call(null,(1));
var inst_24845 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24846 = [inst_24839,inst_24844__$1];
var inst_24847 = (new cljs.core.PersistentVector(null,2,(5),inst_24845,inst_24846,null));
var state_24858__$1 = (function (){var statearr_24865 = state_24858;
(statearr_24865[(8)] = inst_24844__$1);

return statearr_24865;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24858__$1,(8),jobs,inst_24847);
} else {
if((state_val_24859 === (7))){
var inst_24854 = (state_24858[(2)]);
var state_24858__$1 = state_24858;
var statearr_24866_24973 = state_24858__$1;
(statearr_24866_24973[(2)] = inst_24854);

(statearr_24866_24973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24859 === (8))){
var inst_24844 = (state_24858[(8)]);
var inst_24849 = (state_24858[(2)]);
var state_24858__$1 = (function (){var statearr_24867 = state_24858;
(statearr_24867[(9)] = inst_24849);

return statearr_24867;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24858__$1,(9),results,inst_24844);
} else {
if((state_val_24859 === (9))){
var inst_24851 = (state_24858[(2)]);
var state_24858__$1 = (function (){var statearr_24868 = state_24858;
(statearr_24868[(10)] = inst_24851);

return statearr_24868;
})();
var statearr_24869_24974 = state_24858__$1;
(statearr_24869_24974[(2)] = null);

(statearr_24869_24974[(1)] = (2));


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
});})(c__24605__auto___24968,jobs,results,process,async))
;
return ((function (switch__24514__auto__,c__24605__auto___24968,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____0 = (function (){
var statearr_24870 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24870[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__);

(statearr_24870[(1)] = (1));

return statearr_24870;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____1 = (function (state_24858){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_24858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e24871){if((e24871 instanceof Object)){
var ex__24518__auto__ = e24871;
var statearr_24872_24975 = state_24858;
(statearr_24872_24975[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24976 = state_24858;
state_24858 = G__24976;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__ = function(state_24858){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____1.call(this,state_24858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto___24968,jobs,results,process,async))
})();
var state__24607__auto__ = (function (){var statearr_24873 = f__24606__auto__.call(null);
(statearr_24873[(6)] = c__24605__auto___24968);

return statearr_24873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto___24968,jobs,results,process,async))
);


var c__24605__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto__,jobs,results,process,async){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto__,jobs,results,process,async){
return (function (state_24911){
var state_val_24912 = (state_24911[(1)]);
if((state_val_24912 === (7))){
var inst_24907 = (state_24911[(2)]);
var state_24911__$1 = state_24911;
var statearr_24913_24977 = state_24911__$1;
(statearr_24913_24977[(2)] = inst_24907);

(statearr_24913_24977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (20))){
var state_24911__$1 = state_24911;
var statearr_24914_24978 = state_24911__$1;
(statearr_24914_24978[(2)] = null);

(statearr_24914_24978[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (1))){
var state_24911__$1 = state_24911;
var statearr_24915_24979 = state_24911__$1;
(statearr_24915_24979[(2)] = null);

(statearr_24915_24979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (4))){
var inst_24876 = (state_24911[(7)]);
var inst_24876__$1 = (state_24911[(2)]);
var inst_24877 = (inst_24876__$1 == null);
var state_24911__$1 = (function (){var statearr_24916 = state_24911;
(statearr_24916[(7)] = inst_24876__$1);

return statearr_24916;
})();
if(cljs.core.truth_(inst_24877)){
var statearr_24917_24980 = state_24911__$1;
(statearr_24917_24980[(1)] = (5));

} else {
var statearr_24918_24981 = state_24911__$1;
(statearr_24918_24981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (15))){
var inst_24889 = (state_24911[(8)]);
var state_24911__$1 = state_24911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24911__$1,(18),to,inst_24889);
} else {
if((state_val_24912 === (21))){
var inst_24902 = (state_24911[(2)]);
var state_24911__$1 = state_24911;
var statearr_24919_24982 = state_24911__$1;
(statearr_24919_24982[(2)] = inst_24902);

(statearr_24919_24982[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (13))){
var inst_24904 = (state_24911[(2)]);
var state_24911__$1 = (function (){var statearr_24920 = state_24911;
(statearr_24920[(9)] = inst_24904);

return statearr_24920;
})();
var statearr_24921_24983 = state_24911__$1;
(statearr_24921_24983[(2)] = null);

(statearr_24921_24983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (6))){
var inst_24876 = (state_24911[(7)]);
var state_24911__$1 = state_24911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24911__$1,(11),inst_24876);
} else {
if((state_val_24912 === (17))){
var inst_24897 = (state_24911[(2)]);
var state_24911__$1 = state_24911;
if(cljs.core.truth_(inst_24897)){
var statearr_24922_24984 = state_24911__$1;
(statearr_24922_24984[(1)] = (19));

} else {
var statearr_24923_24985 = state_24911__$1;
(statearr_24923_24985[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (3))){
var inst_24909 = (state_24911[(2)]);
var state_24911__$1 = state_24911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24911__$1,inst_24909);
} else {
if((state_val_24912 === (12))){
var inst_24886 = (state_24911[(10)]);
var state_24911__$1 = state_24911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24911__$1,(14),inst_24886);
} else {
if((state_val_24912 === (2))){
var state_24911__$1 = state_24911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24911__$1,(4),results);
} else {
if((state_val_24912 === (19))){
var state_24911__$1 = state_24911;
var statearr_24924_24986 = state_24911__$1;
(statearr_24924_24986[(2)] = null);

(statearr_24924_24986[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (11))){
var inst_24886 = (state_24911[(2)]);
var state_24911__$1 = (function (){var statearr_24925 = state_24911;
(statearr_24925[(10)] = inst_24886);

return statearr_24925;
})();
var statearr_24926_24987 = state_24911__$1;
(statearr_24926_24987[(2)] = null);

(statearr_24926_24987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (9))){
var state_24911__$1 = state_24911;
var statearr_24927_24988 = state_24911__$1;
(statearr_24927_24988[(2)] = null);

(statearr_24927_24988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (5))){
var state_24911__$1 = state_24911;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24928_24989 = state_24911__$1;
(statearr_24928_24989[(1)] = (8));

} else {
var statearr_24929_24990 = state_24911__$1;
(statearr_24929_24990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (14))){
var inst_24889 = (state_24911[(8)]);
var inst_24891 = (state_24911[(11)]);
var inst_24889__$1 = (state_24911[(2)]);
var inst_24890 = (inst_24889__$1 == null);
var inst_24891__$1 = cljs.core.not.call(null,inst_24890);
var state_24911__$1 = (function (){var statearr_24930 = state_24911;
(statearr_24930[(8)] = inst_24889__$1);

(statearr_24930[(11)] = inst_24891__$1);

return statearr_24930;
})();
if(inst_24891__$1){
var statearr_24931_24991 = state_24911__$1;
(statearr_24931_24991[(1)] = (15));

} else {
var statearr_24932_24992 = state_24911__$1;
(statearr_24932_24992[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (16))){
var inst_24891 = (state_24911[(11)]);
var state_24911__$1 = state_24911;
var statearr_24933_24993 = state_24911__$1;
(statearr_24933_24993[(2)] = inst_24891);

(statearr_24933_24993[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (10))){
var inst_24883 = (state_24911[(2)]);
var state_24911__$1 = state_24911;
var statearr_24934_24994 = state_24911__$1;
(statearr_24934_24994[(2)] = inst_24883);

(statearr_24934_24994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (18))){
var inst_24894 = (state_24911[(2)]);
var state_24911__$1 = state_24911;
var statearr_24935_24995 = state_24911__$1;
(statearr_24935_24995[(2)] = inst_24894);

(statearr_24935_24995[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24912 === (8))){
var inst_24880 = cljs.core.async.close_BANG_.call(null,to);
var state_24911__$1 = state_24911;
var statearr_24936_24996 = state_24911__$1;
(statearr_24936_24996[(2)] = inst_24880);

(statearr_24936_24996[(1)] = (10));


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
});})(c__24605__auto__,jobs,results,process,async))
;
return ((function (switch__24514__auto__,c__24605__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____0 = (function (){
var statearr_24937 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24937[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__);

(statearr_24937[(1)] = (1));

return statearr_24937;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____1 = (function (state_24911){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_24911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e24938){if((e24938 instanceof Object)){
var ex__24518__auto__ = e24938;
var statearr_24939_24997 = state_24911;
(statearr_24939_24997[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24998 = state_24911;
state_24911 = G__24998;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__ = function(state_24911){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____1.call(this,state_24911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24515__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto__,jobs,results,process,async))
})();
var state__24607__auto__ = (function (){var statearr_24940 = f__24606__auto__.call(null);
(statearr_24940[(6)] = c__24605__auto__);

return statearr_24940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto__,jobs,results,process,async))
);

return c__24605__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__25000 = arguments.length;
switch (G__25000) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__25003 = arguments.length;
switch (G__25003) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__25006 = arguments.length;
switch (G__25006) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24605__auto___25055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto___25055,tc,fc){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto___25055,tc,fc){
return (function (state_25032){
var state_val_25033 = (state_25032[(1)]);
if((state_val_25033 === (7))){
var inst_25028 = (state_25032[(2)]);
var state_25032__$1 = state_25032;
var statearr_25034_25056 = state_25032__$1;
(statearr_25034_25056[(2)] = inst_25028);

(statearr_25034_25056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25033 === (1))){
var state_25032__$1 = state_25032;
var statearr_25035_25057 = state_25032__$1;
(statearr_25035_25057[(2)] = null);

(statearr_25035_25057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25033 === (4))){
var inst_25009 = (state_25032[(7)]);
var inst_25009__$1 = (state_25032[(2)]);
var inst_25010 = (inst_25009__$1 == null);
var state_25032__$1 = (function (){var statearr_25036 = state_25032;
(statearr_25036[(7)] = inst_25009__$1);

return statearr_25036;
})();
if(cljs.core.truth_(inst_25010)){
var statearr_25037_25058 = state_25032__$1;
(statearr_25037_25058[(1)] = (5));

} else {
var statearr_25038_25059 = state_25032__$1;
(statearr_25038_25059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25033 === (13))){
var state_25032__$1 = state_25032;
var statearr_25039_25060 = state_25032__$1;
(statearr_25039_25060[(2)] = null);

(statearr_25039_25060[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25033 === (6))){
var inst_25009 = (state_25032[(7)]);
var inst_25015 = p.call(null,inst_25009);
var state_25032__$1 = state_25032;
if(cljs.core.truth_(inst_25015)){
var statearr_25040_25061 = state_25032__$1;
(statearr_25040_25061[(1)] = (9));

} else {
var statearr_25041_25062 = state_25032__$1;
(statearr_25041_25062[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25033 === (3))){
var inst_25030 = (state_25032[(2)]);
var state_25032__$1 = state_25032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25032__$1,inst_25030);
} else {
if((state_val_25033 === (12))){
var state_25032__$1 = state_25032;
var statearr_25042_25063 = state_25032__$1;
(statearr_25042_25063[(2)] = null);

(statearr_25042_25063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25033 === (2))){
var state_25032__$1 = state_25032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25032__$1,(4),ch);
} else {
if((state_val_25033 === (11))){
var inst_25009 = (state_25032[(7)]);
var inst_25019 = (state_25032[(2)]);
var state_25032__$1 = state_25032;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25032__$1,(8),inst_25019,inst_25009);
} else {
if((state_val_25033 === (9))){
var state_25032__$1 = state_25032;
var statearr_25043_25064 = state_25032__$1;
(statearr_25043_25064[(2)] = tc);

(statearr_25043_25064[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25033 === (5))){
var inst_25012 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25013 = cljs.core.async.close_BANG_.call(null,fc);
var state_25032__$1 = (function (){var statearr_25044 = state_25032;
(statearr_25044[(8)] = inst_25012);

return statearr_25044;
})();
var statearr_25045_25065 = state_25032__$1;
(statearr_25045_25065[(2)] = inst_25013);

(statearr_25045_25065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25033 === (14))){
var inst_25026 = (state_25032[(2)]);
var state_25032__$1 = state_25032;
var statearr_25046_25066 = state_25032__$1;
(statearr_25046_25066[(2)] = inst_25026);

(statearr_25046_25066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25033 === (10))){
var state_25032__$1 = state_25032;
var statearr_25047_25067 = state_25032__$1;
(statearr_25047_25067[(2)] = fc);

(statearr_25047_25067[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25033 === (8))){
var inst_25021 = (state_25032[(2)]);
var state_25032__$1 = state_25032;
if(cljs.core.truth_(inst_25021)){
var statearr_25048_25068 = state_25032__$1;
(statearr_25048_25068[(1)] = (12));

} else {
var statearr_25049_25069 = state_25032__$1;
(statearr_25049_25069[(1)] = (13));

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
});})(c__24605__auto___25055,tc,fc))
;
return ((function (switch__24514__auto__,c__24605__auto___25055,tc,fc){
return (function() {
var cljs$core$async$state_machine__24515__auto__ = null;
var cljs$core$async$state_machine__24515__auto____0 = (function (){
var statearr_25050 = [null,null,null,null,null,null,null,null,null];
(statearr_25050[(0)] = cljs$core$async$state_machine__24515__auto__);

(statearr_25050[(1)] = (1));

return statearr_25050;
});
var cljs$core$async$state_machine__24515__auto____1 = (function (state_25032){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_25032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e25051){if((e25051 instanceof Object)){
var ex__24518__auto__ = e25051;
var statearr_25052_25070 = state_25032;
(statearr_25052_25070[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25071 = state_25032;
state_25032 = G__25071;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
cljs$core$async$state_machine__24515__auto__ = function(state_25032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24515__auto____1.call(this,state_25032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24515__auto____0;
cljs$core$async$state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24515__auto____1;
return cljs$core$async$state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto___25055,tc,fc))
})();
var state__24607__auto__ = (function (){var statearr_25053 = f__24606__auto__.call(null);
(statearr_25053[(6)] = c__24605__auto___25055);

return statearr_25053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto___25055,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24605__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto__){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto__){
return (function (state_25092){
var state_val_25093 = (state_25092[(1)]);
if((state_val_25093 === (7))){
var inst_25088 = (state_25092[(2)]);
var state_25092__$1 = state_25092;
var statearr_25094_25112 = state_25092__$1;
(statearr_25094_25112[(2)] = inst_25088);

(statearr_25094_25112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (1))){
var inst_25072 = init;
var state_25092__$1 = (function (){var statearr_25095 = state_25092;
(statearr_25095[(7)] = inst_25072);

return statearr_25095;
})();
var statearr_25096_25113 = state_25092__$1;
(statearr_25096_25113[(2)] = null);

(statearr_25096_25113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (4))){
var inst_25075 = (state_25092[(8)]);
var inst_25075__$1 = (state_25092[(2)]);
var inst_25076 = (inst_25075__$1 == null);
var state_25092__$1 = (function (){var statearr_25097 = state_25092;
(statearr_25097[(8)] = inst_25075__$1);

return statearr_25097;
})();
if(cljs.core.truth_(inst_25076)){
var statearr_25098_25114 = state_25092__$1;
(statearr_25098_25114[(1)] = (5));

} else {
var statearr_25099_25115 = state_25092__$1;
(statearr_25099_25115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (6))){
var inst_25079 = (state_25092[(9)]);
var inst_25072 = (state_25092[(7)]);
var inst_25075 = (state_25092[(8)]);
var inst_25079__$1 = f.call(null,inst_25072,inst_25075);
var inst_25080 = cljs.core.reduced_QMARK_.call(null,inst_25079__$1);
var state_25092__$1 = (function (){var statearr_25100 = state_25092;
(statearr_25100[(9)] = inst_25079__$1);

return statearr_25100;
})();
if(inst_25080){
var statearr_25101_25116 = state_25092__$1;
(statearr_25101_25116[(1)] = (8));

} else {
var statearr_25102_25117 = state_25092__$1;
(statearr_25102_25117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (3))){
var inst_25090 = (state_25092[(2)]);
var state_25092__$1 = state_25092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25092__$1,inst_25090);
} else {
if((state_val_25093 === (2))){
var state_25092__$1 = state_25092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25092__$1,(4),ch);
} else {
if((state_val_25093 === (9))){
var inst_25079 = (state_25092[(9)]);
var inst_25072 = inst_25079;
var state_25092__$1 = (function (){var statearr_25103 = state_25092;
(statearr_25103[(7)] = inst_25072);

return statearr_25103;
})();
var statearr_25104_25118 = state_25092__$1;
(statearr_25104_25118[(2)] = null);

(statearr_25104_25118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (5))){
var inst_25072 = (state_25092[(7)]);
var state_25092__$1 = state_25092;
var statearr_25105_25119 = state_25092__$1;
(statearr_25105_25119[(2)] = inst_25072);

(statearr_25105_25119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (10))){
var inst_25086 = (state_25092[(2)]);
var state_25092__$1 = state_25092;
var statearr_25106_25120 = state_25092__$1;
(statearr_25106_25120[(2)] = inst_25086);

(statearr_25106_25120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (8))){
var inst_25079 = (state_25092[(9)]);
var inst_25082 = cljs.core.deref.call(null,inst_25079);
var state_25092__$1 = state_25092;
var statearr_25107_25121 = state_25092__$1;
(statearr_25107_25121[(2)] = inst_25082);

(statearr_25107_25121[(1)] = (10));


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
});})(c__24605__auto__))
;
return ((function (switch__24514__auto__,c__24605__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24515__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24515__auto____0 = (function (){
var statearr_25108 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25108[(0)] = cljs$core$async$reduce_$_state_machine__24515__auto__);

(statearr_25108[(1)] = (1));

return statearr_25108;
});
var cljs$core$async$reduce_$_state_machine__24515__auto____1 = (function (state_25092){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_25092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e25109){if((e25109 instanceof Object)){
var ex__24518__auto__ = e25109;
var statearr_25110_25122 = state_25092;
(statearr_25110_25122[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25123 = state_25092;
state_25092 = G__25123;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24515__auto__ = function(state_25092){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24515__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24515__auto____1.call(this,state_25092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24515__auto____0;
cljs$core$async$reduce_$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24515__auto____1;
return cljs$core$async$reduce_$_state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto__))
})();
var state__24607__auto__ = (function (){var statearr_25111 = f__24606__auto__.call(null);
(statearr_25111[(6)] = c__24605__auto__);

return statearr_25111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto__))
);

return c__24605__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24605__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto__,f__$1){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto__,f__$1){
return (function (state_25129){
var state_val_25130 = (state_25129[(1)]);
if((state_val_25130 === (1))){
var inst_25124 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25129__$1 = state_25129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25129__$1,(2),inst_25124);
} else {
if((state_val_25130 === (2))){
var inst_25126 = (state_25129[(2)]);
var inst_25127 = f__$1.call(null,inst_25126);
var state_25129__$1 = state_25129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25129__$1,inst_25127);
} else {
return null;
}
}
});})(c__24605__auto__,f__$1))
;
return ((function (switch__24514__auto__,c__24605__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24515__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24515__auto____0 = (function (){
var statearr_25131 = [null,null,null,null,null,null,null];
(statearr_25131[(0)] = cljs$core$async$transduce_$_state_machine__24515__auto__);

(statearr_25131[(1)] = (1));

return statearr_25131;
});
var cljs$core$async$transduce_$_state_machine__24515__auto____1 = (function (state_25129){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_25129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e25132){if((e25132 instanceof Object)){
var ex__24518__auto__ = e25132;
var statearr_25133_25135 = state_25129;
(statearr_25133_25135[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25136 = state_25129;
state_25129 = G__25136;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24515__auto__ = function(state_25129){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24515__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24515__auto____1.call(this,state_25129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24515__auto____0;
cljs$core$async$transduce_$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24515__auto____1;
return cljs$core$async$transduce_$_state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto__,f__$1))
})();
var state__24607__auto__ = (function (){var statearr_25134 = f__24606__auto__.call(null);
(statearr_25134[(6)] = c__24605__auto__);

return statearr_25134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto__,f__$1))
);

return c__24605__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__25138 = arguments.length;
switch (G__25138) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24605__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto__){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto__){
return (function (state_25163){
var state_val_25164 = (state_25163[(1)]);
if((state_val_25164 === (7))){
var inst_25145 = (state_25163[(2)]);
var state_25163__$1 = state_25163;
var statearr_25165_25186 = state_25163__$1;
(statearr_25165_25186[(2)] = inst_25145);

(statearr_25165_25186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (1))){
var inst_25139 = cljs.core.seq.call(null,coll);
var inst_25140 = inst_25139;
var state_25163__$1 = (function (){var statearr_25166 = state_25163;
(statearr_25166[(7)] = inst_25140);

return statearr_25166;
})();
var statearr_25167_25187 = state_25163__$1;
(statearr_25167_25187[(2)] = null);

(statearr_25167_25187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (4))){
var inst_25140 = (state_25163[(7)]);
var inst_25143 = cljs.core.first.call(null,inst_25140);
var state_25163__$1 = state_25163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25163__$1,(7),ch,inst_25143);
} else {
if((state_val_25164 === (13))){
var inst_25157 = (state_25163[(2)]);
var state_25163__$1 = state_25163;
var statearr_25168_25188 = state_25163__$1;
(statearr_25168_25188[(2)] = inst_25157);

(statearr_25168_25188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (6))){
var inst_25148 = (state_25163[(2)]);
var state_25163__$1 = state_25163;
if(cljs.core.truth_(inst_25148)){
var statearr_25169_25189 = state_25163__$1;
(statearr_25169_25189[(1)] = (8));

} else {
var statearr_25170_25190 = state_25163__$1;
(statearr_25170_25190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (3))){
var inst_25161 = (state_25163[(2)]);
var state_25163__$1 = state_25163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25163__$1,inst_25161);
} else {
if((state_val_25164 === (12))){
var state_25163__$1 = state_25163;
var statearr_25171_25191 = state_25163__$1;
(statearr_25171_25191[(2)] = null);

(statearr_25171_25191[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (2))){
var inst_25140 = (state_25163[(7)]);
var state_25163__$1 = state_25163;
if(cljs.core.truth_(inst_25140)){
var statearr_25172_25192 = state_25163__$1;
(statearr_25172_25192[(1)] = (4));

} else {
var statearr_25173_25193 = state_25163__$1;
(statearr_25173_25193[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (11))){
var inst_25154 = cljs.core.async.close_BANG_.call(null,ch);
var state_25163__$1 = state_25163;
var statearr_25174_25194 = state_25163__$1;
(statearr_25174_25194[(2)] = inst_25154);

(statearr_25174_25194[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (9))){
var state_25163__$1 = state_25163;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25175_25195 = state_25163__$1;
(statearr_25175_25195[(1)] = (11));

} else {
var statearr_25176_25196 = state_25163__$1;
(statearr_25176_25196[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (5))){
var inst_25140 = (state_25163[(7)]);
var state_25163__$1 = state_25163;
var statearr_25177_25197 = state_25163__$1;
(statearr_25177_25197[(2)] = inst_25140);

(statearr_25177_25197[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (10))){
var inst_25159 = (state_25163[(2)]);
var state_25163__$1 = state_25163;
var statearr_25178_25198 = state_25163__$1;
(statearr_25178_25198[(2)] = inst_25159);

(statearr_25178_25198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (8))){
var inst_25140 = (state_25163[(7)]);
var inst_25150 = cljs.core.next.call(null,inst_25140);
var inst_25140__$1 = inst_25150;
var state_25163__$1 = (function (){var statearr_25179 = state_25163;
(statearr_25179[(7)] = inst_25140__$1);

return statearr_25179;
})();
var statearr_25180_25199 = state_25163__$1;
(statearr_25180_25199[(2)] = null);

(statearr_25180_25199[(1)] = (2));


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
});})(c__24605__auto__))
;
return ((function (switch__24514__auto__,c__24605__auto__){
return (function() {
var cljs$core$async$state_machine__24515__auto__ = null;
var cljs$core$async$state_machine__24515__auto____0 = (function (){
var statearr_25181 = [null,null,null,null,null,null,null,null];
(statearr_25181[(0)] = cljs$core$async$state_machine__24515__auto__);

(statearr_25181[(1)] = (1));

return statearr_25181;
});
var cljs$core$async$state_machine__24515__auto____1 = (function (state_25163){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_25163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e25182){if((e25182 instanceof Object)){
var ex__24518__auto__ = e25182;
var statearr_25183_25200 = state_25163;
(statearr_25183_25200[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25201 = state_25163;
state_25163 = G__25201;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
cljs$core$async$state_machine__24515__auto__ = function(state_25163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24515__auto____1.call(this,state_25163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24515__auto____0;
cljs$core$async$state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24515__auto____1;
return cljs$core$async$state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto__))
})();
var state__24607__auto__ = (function (){var statearr_25184 = f__24606__auto__.call(null);
(statearr_25184[(6)] = c__24605__auto__);

return statearr_25184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto__))
);

return c__24605__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25202 = (function (ch,cs,meta25203){
this.ch = ch;
this.cs = cs;
this.meta25203 = meta25203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25204,meta25203__$1){
var self__ = this;
var _25204__$1 = this;
return (new cljs.core.async.t_cljs$core$async25202(self__.ch,self__.cs,meta25203__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25202.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25204){
var self__ = this;
var _25204__$1 = this;
return self__.meta25203;
});})(cs))
;

cljs.core.async.t_cljs$core$async25202.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25202.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25202.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25202.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25202.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25202.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25202.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25203","meta25203",1936734506,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25202.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25202";

cljs.core.async.t_cljs$core$async25202.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async25202");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25202.
 */
cljs.core.async.__GT_t_cljs$core$async25202 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25202(ch__$1,cs__$1,meta25203){
return (new cljs.core.async.t_cljs$core$async25202(ch__$1,cs__$1,meta25203));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25202(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24605__auto___25424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto___25424,cs,m,dchan,dctr,done){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto___25424,cs,m,dchan,dctr,done){
return (function (state_25339){
var state_val_25340 = (state_25339[(1)]);
if((state_val_25340 === (7))){
var inst_25335 = (state_25339[(2)]);
var state_25339__$1 = state_25339;
var statearr_25341_25425 = state_25339__$1;
(statearr_25341_25425[(2)] = inst_25335);

(statearr_25341_25425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (20))){
var inst_25238 = (state_25339[(7)]);
var inst_25250 = cljs.core.first.call(null,inst_25238);
var inst_25251 = cljs.core.nth.call(null,inst_25250,(0),null);
var inst_25252 = cljs.core.nth.call(null,inst_25250,(1),null);
var state_25339__$1 = (function (){var statearr_25342 = state_25339;
(statearr_25342[(8)] = inst_25251);

return statearr_25342;
})();
if(cljs.core.truth_(inst_25252)){
var statearr_25343_25426 = state_25339__$1;
(statearr_25343_25426[(1)] = (22));

} else {
var statearr_25344_25427 = state_25339__$1;
(statearr_25344_25427[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (27))){
var inst_25207 = (state_25339[(9)]);
var inst_25280 = (state_25339[(10)]);
var inst_25282 = (state_25339[(11)]);
var inst_25287 = (state_25339[(12)]);
var inst_25287__$1 = cljs.core._nth.call(null,inst_25280,inst_25282);
var inst_25288 = cljs.core.async.put_BANG_.call(null,inst_25287__$1,inst_25207,done);
var state_25339__$1 = (function (){var statearr_25345 = state_25339;
(statearr_25345[(12)] = inst_25287__$1);

return statearr_25345;
})();
if(cljs.core.truth_(inst_25288)){
var statearr_25346_25428 = state_25339__$1;
(statearr_25346_25428[(1)] = (30));

} else {
var statearr_25347_25429 = state_25339__$1;
(statearr_25347_25429[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (1))){
var state_25339__$1 = state_25339;
var statearr_25348_25430 = state_25339__$1;
(statearr_25348_25430[(2)] = null);

(statearr_25348_25430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (24))){
var inst_25238 = (state_25339[(7)]);
var inst_25257 = (state_25339[(2)]);
var inst_25258 = cljs.core.next.call(null,inst_25238);
var inst_25216 = inst_25258;
var inst_25217 = null;
var inst_25218 = (0);
var inst_25219 = (0);
var state_25339__$1 = (function (){var statearr_25349 = state_25339;
(statearr_25349[(13)] = inst_25216);

(statearr_25349[(14)] = inst_25257);

(statearr_25349[(15)] = inst_25219);

(statearr_25349[(16)] = inst_25217);

(statearr_25349[(17)] = inst_25218);

return statearr_25349;
})();
var statearr_25350_25431 = state_25339__$1;
(statearr_25350_25431[(2)] = null);

(statearr_25350_25431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (39))){
var state_25339__$1 = state_25339;
var statearr_25354_25432 = state_25339__$1;
(statearr_25354_25432[(2)] = null);

(statearr_25354_25432[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (4))){
var inst_25207 = (state_25339[(9)]);
var inst_25207__$1 = (state_25339[(2)]);
var inst_25208 = (inst_25207__$1 == null);
var state_25339__$1 = (function (){var statearr_25355 = state_25339;
(statearr_25355[(9)] = inst_25207__$1);

return statearr_25355;
})();
if(cljs.core.truth_(inst_25208)){
var statearr_25356_25433 = state_25339__$1;
(statearr_25356_25433[(1)] = (5));

} else {
var statearr_25357_25434 = state_25339__$1;
(statearr_25357_25434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (15))){
var inst_25216 = (state_25339[(13)]);
var inst_25219 = (state_25339[(15)]);
var inst_25217 = (state_25339[(16)]);
var inst_25218 = (state_25339[(17)]);
var inst_25234 = (state_25339[(2)]);
var inst_25235 = (inst_25219 + (1));
var tmp25351 = inst_25216;
var tmp25352 = inst_25217;
var tmp25353 = inst_25218;
var inst_25216__$1 = tmp25351;
var inst_25217__$1 = tmp25352;
var inst_25218__$1 = tmp25353;
var inst_25219__$1 = inst_25235;
var state_25339__$1 = (function (){var statearr_25358 = state_25339;
(statearr_25358[(13)] = inst_25216__$1);

(statearr_25358[(18)] = inst_25234);

(statearr_25358[(15)] = inst_25219__$1);

(statearr_25358[(16)] = inst_25217__$1);

(statearr_25358[(17)] = inst_25218__$1);

return statearr_25358;
})();
var statearr_25359_25435 = state_25339__$1;
(statearr_25359_25435[(2)] = null);

(statearr_25359_25435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (21))){
var inst_25261 = (state_25339[(2)]);
var state_25339__$1 = state_25339;
var statearr_25363_25436 = state_25339__$1;
(statearr_25363_25436[(2)] = inst_25261);

(statearr_25363_25436[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (31))){
var inst_25287 = (state_25339[(12)]);
var inst_25291 = done.call(null,null);
var inst_25292 = cljs.core.async.untap_STAR_.call(null,m,inst_25287);
var state_25339__$1 = (function (){var statearr_25364 = state_25339;
(statearr_25364[(19)] = inst_25291);

return statearr_25364;
})();
var statearr_25365_25437 = state_25339__$1;
(statearr_25365_25437[(2)] = inst_25292);

(statearr_25365_25437[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (32))){
var inst_25279 = (state_25339[(20)]);
var inst_25280 = (state_25339[(10)]);
var inst_25282 = (state_25339[(11)]);
var inst_25281 = (state_25339[(21)]);
var inst_25294 = (state_25339[(2)]);
var inst_25295 = (inst_25282 + (1));
var tmp25360 = inst_25279;
var tmp25361 = inst_25280;
var tmp25362 = inst_25281;
var inst_25279__$1 = tmp25360;
var inst_25280__$1 = tmp25361;
var inst_25281__$1 = tmp25362;
var inst_25282__$1 = inst_25295;
var state_25339__$1 = (function (){var statearr_25366 = state_25339;
(statearr_25366[(20)] = inst_25279__$1);

(statearr_25366[(10)] = inst_25280__$1);

(statearr_25366[(22)] = inst_25294);

(statearr_25366[(11)] = inst_25282__$1);

(statearr_25366[(21)] = inst_25281__$1);

return statearr_25366;
})();
var statearr_25367_25438 = state_25339__$1;
(statearr_25367_25438[(2)] = null);

(statearr_25367_25438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (40))){
var inst_25307 = (state_25339[(23)]);
var inst_25311 = done.call(null,null);
var inst_25312 = cljs.core.async.untap_STAR_.call(null,m,inst_25307);
var state_25339__$1 = (function (){var statearr_25368 = state_25339;
(statearr_25368[(24)] = inst_25311);

return statearr_25368;
})();
var statearr_25369_25439 = state_25339__$1;
(statearr_25369_25439[(2)] = inst_25312);

(statearr_25369_25439[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (33))){
var inst_25298 = (state_25339[(25)]);
var inst_25300 = cljs.core.chunked_seq_QMARK_.call(null,inst_25298);
var state_25339__$1 = state_25339;
if(inst_25300){
var statearr_25370_25440 = state_25339__$1;
(statearr_25370_25440[(1)] = (36));

} else {
var statearr_25371_25441 = state_25339__$1;
(statearr_25371_25441[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (13))){
var inst_25228 = (state_25339[(26)]);
var inst_25231 = cljs.core.async.close_BANG_.call(null,inst_25228);
var state_25339__$1 = state_25339;
var statearr_25372_25442 = state_25339__$1;
(statearr_25372_25442[(2)] = inst_25231);

(statearr_25372_25442[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (22))){
var inst_25251 = (state_25339[(8)]);
var inst_25254 = cljs.core.async.close_BANG_.call(null,inst_25251);
var state_25339__$1 = state_25339;
var statearr_25373_25443 = state_25339__$1;
(statearr_25373_25443[(2)] = inst_25254);

(statearr_25373_25443[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (36))){
var inst_25298 = (state_25339[(25)]);
var inst_25302 = cljs.core.chunk_first.call(null,inst_25298);
var inst_25303 = cljs.core.chunk_rest.call(null,inst_25298);
var inst_25304 = cljs.core.count.call(null,inst_25302);
var inst_25279 = inst_25303;
var inst_25280 = inst_25302;
var inst_25281 = inst_25304;
var inst_25282 = (0);
var state_25339__$1 = (function (){var statearr_25374 = state_25339;
(statearr_25374[(20)] = inst_25279);

(statearr_25374[(10)] = inst_25280);

(statearr_25374[(11)] = inst_25282);

(statearr_25374[(21)] = inst_25281);

return statearr_25374;
})();
var statearr_25375_25444 = state_25339__$1;
(statearr_25375_25444[(2)] = null);

(statearr_25375_25444[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (41))){
var inst_25298 = (state_25339[(25)]);
var inst_25314 = (state_25339[(2)]);
var inst_25315 = cljs.core.next.call(null,inst_25298);
var inst_25279 = inst_25315;
var inst_25280 = null;
var inst_25281 = (0);
var inst_25282 = (0);
var state_25339__$1 = (function (){var statearr_25376 = state_25339;
(statearr_25376[(20)] = inst_25279);

(statearr_25376[(10)] = inst_25280);

(statearr_25376[(11)] = inst_25282);

(statearr_25376[(21)] = inst_25281);

(statearr_25376[(27)] = inst_25314);

return statearr_25376;
})();
var statearr_25377_25445 = state_25339__$1;
(statearr_25377_25445[(2)] = null);

(statearr_25377_25445[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (43))){
var state_25339__$1 = state_25339;
var statearr_25378_25446 = state_25339__$1;
(statearr_25378_25446[(2)] = null);

(statearr_25378_25446[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (29))){
var inst_25323 = (state_25339[(2)]);
var state_25339__$1 = state_25339;
var statearr_25379_25447 = state_25339__$1;
(statearr_25379_25447[(2)] = inst_25323);

(statearr_25379_25447[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (44))){
var inst_25332 = (state_25339[(2)]);
var state_25339__$1 = (function (){var statearr_25380 = state_25339;
(statearr_25380[(28)] = inst_25332);

return statearr_25380;
})();
var statearr_25381_25448 = state_25339__$1;
(statearr_25381_25448[(2)] = null);

(statearr_25381_25448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (6))){
var inst_25271 = (state_25339[(29)]);
var inst_25270 = cljs.core.deref.call(null,cs);
var inst_25271__$1 = cljs.core.keys.call(null,inst_25270);
var inst_25272 = cljs.core.count.call(null,inst_25271__$1);
var inst_25273 = cljs.core.reset_BANG_.call(null,dctr,inst_25272);
var inst_25278 = cljs.core.seq.call(null,inst_25271__$1);
var inst_25279 = inst_25278;
var inst_25280 = null;
var inst_25281 = (0);
var inst_25282 = (0);
var state_25339__$1 = (function (){var statearr_25382 = state_25339;
(statearr_25382[(20)] = inst_25279);

(statearr_25382[(10)] = inst_25280);

(statearr_25382[(11)] = inst_25282);

(statearr_25382[(29)] = inst_25271__$1);

(statearr_25382[(21)] = inst_25281);

(statearr_25382[(30)] = inst_25273);

return statearr_25382;
})();
var statearr_25383_25449 = state_25339__$1;
(statearr_25383_25449[(2)] = null);

(statearr_25383_25449[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (28))){
var inst_25279 = (state_25339[(20)]);
var inst_25298 = (state_25339[(25)]);
var inst_25298__$1 = cljs.core.seq.call(null,inst_25279);
var state_25339__$1 = (function (){var statearr_25384 = state_25339;
(statearr_25384[(25)] = inst_25298__$1);

return statearr_25384;
})();
if(inst_25298__$1){
var statearr_25385_25450 = state_25339__$1;
(statearr_25385_25450[(1)] = (33));

} else {
var statearr_25386_25451 = state_25339__$1;
(statearr_25386_25451[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (25))){
var inst_25282 = (state_25339[(11)]);
var inst_25281 = (state_25339[(21)]);
var inst_25284 = (inst_25282 < inst_25281);
var inst_25285 = inst_25284;
var state_25339__$1 = state_25339;
if(cljs.core.truth_(inst_25285)){
var statearr_25387_25452 = state_25339__$1;
(statearr_25387_25452[(1)] = (27));

} else {
var statearr_25388_25453 = state_25339__$1;
(statearr_25388_25453[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (34))){
var state_25339__$1 = state_25339;
var statearr_25389_25454 = state_25339__$1;
(statearr_25389_25454[(2)] = null);

(statearr_25389_25454[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (17))){
var state_25339__$1 = state_25339;
var statearr_25390_25455 = state_25339__$1;
(statearr_25390_25455[(2)] = null);

(statearr_25390_25455[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (3))){
var inst_25337 = (state_25339[(2)]);
var state_25339__$1 = state_25339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25339__$1,inst_25337);
} else {
if((state_val_25340 === (12))){
var inst_25266 = (state_25339[(2)]);
var state_25339__$1 = state_25339;
var statearr_25391_25456 = state_25339__$1;
(statearr_25391_25456[(2)] = inst_25266);

(statearr_25391_25456[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (2))){
var state_25339__$1 = state_25339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25339__$1,(4),ch);
} else {
if((state_val_25340 === (23))){
var state_25339__$1 = state_25339;
var statearr_25392_25457 = state_25339__$1;
(statearr_25392_25457[(2)] = null);

(statearr_25392_25457[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (35))){
var inst_25321 = (state_25339[(2)]);
var state_25339__$1 = state_25339;
var statearr_25393_25458 = state_25339__$1;
(statearr_25393_25458[(2)] = inst_25321);

(statearr_25393_25458[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (19))){
var inst_25238 = (state_25339[(7)]);
var inst_25242 = cljs.core.chunk_first.call(null,inst_25238);
var inst_25243 = cljs.core.chunk_rest.call(null,inst_25238);
var inst_25244 = cljs.core.count.call(null,inst_25242);
var inst_25216 = inst_25243;
var inst_25217 = inst_25242;
var inst_25218 = inst_25244;
var inst_25219 = (0);
var state_25339__$1 = (function (){var statearr_25394 = state_25339;
(statearr_25394[(13)] = inst_25216);

(statearr_25394[(15)] = inst_25219);

(statearr_25394[(16)] = inst_25217);

(statearr_25394[(17)] = inst_25218);

return statearr_25394;
})();
var statearr_25395_25459 = state_25339__$1;
(statearr_25395_25459[(2)] = null);

(statearr_25395_25459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (11))){
var inst_25238 = (state_25339[(7)]);
var inst_25216 = (state_25339[(13)]);
var inst_25238__$1 = cljs.core.seq.call(null,inst_25216);
var state_25339__$1 = (function (){var statearr_25396 = state_25339;
(statearr_25396[(7)] = inst_25238__$1);

return statearr_25396;
})();
if(inst_25238__$1){
var statearr_25397_25460 = state_25339__$1;
(statearr_25397_25460[(1)] = (16));

} else {
var statearr_25398_25461 = state_25339__$1;
(statearr_25398_25461[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (9))){
var inst_25268 = (state_25339[(2)]);
var state_25339__$1 = state_25339;
var statearr_25399_25462 = state_25339__$1;
(statearr_25399_25462[(2)] = inst_25268);

(statearr_25399_25462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (5))){
var inst_25214 = cljs.core.deref.call(null,cs);
var inst_25215 = cljs.core.seq.call(null,inst_25214);
var inst_25216 = inst_25215;
var inst_25217 = null;
var inst_25218 = (0);
var inst_25219 = (0);
var state_25339__$1 = (function (){var statearr_25400 = state_25339;
(statearr_25400[(13)] = inst_25216);

(statearr_25400[(15)] = inst_25219);

(statearr_25400[(16)] = inst_25217);

(statearr_25400[(17)] = inst_25218);

return statearr_25400;
})();
var statearr_25401_25463 = state_25339__$1;
(statearr_25401_25463[(2)] = null);

(statearr_25401_25463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (14))){
var state_25339__$1 = state_25339;
var statearr_25402_25464 = state_25339__$1;
(statearr_25402_25464[(2)] = null);

(statearr_25402_25464[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (45))){
var inst_25329 = (state_25339[(2)]);
var state_25339__$1 = state_25339;
var statearr_25403_25465 = state_25339__$1;
(statearr_25403_25465[(2)] = inst_25329);

(statearr_25403_25465[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (26))){
var inst_25271 = (state_25339[(29)]);
var inst_25325 = (state_25339[(2)]);
var inst_25326 = cljs.core.seq.call(null,inst_25271);
var state_25339__$1 = (function (){var statearr_25404 = state_25339;
(statearr_25404[(31)] = inst_25325);

return statearr_25404;
})();
if(inst_25326){
var statearr_25405_25466 = state_25339__$1;
(statearr_25405_25466[(1)] = (42));

} else {
var statearr_25406_25467 = state_25339__$1;
(statearr_25406_25467[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (16))){
var inst_25238 = (state_25339[(7)]);
var inst_25240 = cljs.core.chunked_seq_QMARK_.call(null,inst_25238);
var state_25339__$1 = state_25339;
if(inst_25240){
var statearr_25407_25468 = state_25339__$1;
(statearr_25407_25468[(1)] = (19));

} else {
var statearr_25408_25469 = state_25339__$1;
(statearr_25408_25469[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (38))){
var inst_25318 = (state_25339[(2)]);
var state_25339__$1 = state_25339;
var statearr_25409_25470 = state_25339__$1;
(statearr_25409_25470[(2)] = inst_25318);

(statearr_25409_25470[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (30))){
var state_25339__$1 = state_25339;
var statearr_25410_25471 = state_25339__$1;
(statearr_25410_25471[(2)] = null);

(statearr_25410_25471[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (10))){
var inst_25219 = (state_25339[(15)]);
var inst_25217 = (state_25339[(16)]);
var inst_25227 = cljs.core._nth.call(null,inst_25217,inst_25219);
var inst_25228 = cljs.core.nth.call(null,inst_25227,(0),null);
var inst_25229 = cljs.core.nth.call(null,inst_25227,(1),null);
var state_25339__$1 = (function (){var statearr_25411 = state_25339;
(statearr_25411[(26)] = inst_25228);

return statearr_25411;
})();
if(cljs.core.truth_(inst_25229)){
var statearr_25412_25472 = state_25339__$1;
(statearr_25412_25472[(1)] = (13));

} else {
var statearr_25413_25473 = state_25339__$1;
(statearr_25413_25473[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (18))){
var inst_25264 = (state_25339[(2)]);
var state_25339__$1 = state_25339;
var statearr_25414_25474 = state_25339__$1;
(statearr_25414_25474[(2)] = inst_25264);

(statearr_25414_25474[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (42))){
var state_25339__$1 = state_25339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25339__$1,(45),dchan);
} else {
if((state_val_25340 === (37))){
var inst_25307 = (state_25339[(23)]);
var inst_25207 = (state_25339[(9)]);
var inst_25298 = (state_25339[(25)]);
var inst_25307__$1 = cljs.core.first.call(null,inst_25298);
var inst_25308 = cljs.core.async.put_BANG_.call(null,inst_25307__$1,inst_25207,done);
var state_25339__$1 = (function (){var statearr_25415 = state_25339;
(statearr_25415[(23)] = inst_25307__$1);

return statearr_25415;
})();
if(cljs.core.truth_(inst_25308)){
var statearr_25416_25475 = state_25339__$1;
(statearr_25416_25475[(1)] = (39));

} else {
var statearr_25417_25476 = state_25339__$1;
(statearr_25417_25476[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25340 === (8))){
var inst_25219 = (state_25339[(15)]);
var inst_25218 = (state_25339[(17)]);
var inst_25221 = (inst_25219 < inst_25218);
var inst_25222 = inst_25221;
var state_25339__$1 = state_25339;
if(cljs.core.truth_(inst_25222)){
var statearr_25418_25477 = state_25339__$1;
(statearr_25418_25477[(1)] = (10));

} else {
var statearr_25419_25478 = state_25339__$1;
(statearr_25419_25478[(1)] = (11));

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
});})(c__24605__auto___25424,cs,m,dchan,dctr,done))
;
return ((function (switch__24514__auto__,c__24605__auto___25424,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24515__auto__ = null;
var cljs$core$async$mult_$_state_machine__24515__auto____0 = (function (){
var statearr_25420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25420[(0)] = cljs$core$async$mult_$_state_machine__24515__auto__);

(statearr_25420[(1)] = (1));

return statearr_25420;
});
var cljs$core$async$mult_$_state_machine__24515__auto____1 = (function (state_25339){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_25339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e25421){if((e25421 instanceof Object)){
var ex__24518__auto__ = e25421;
var statearr_25422_25479 = state_25339;
(statearr_25422_25479[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25480 = state_25339;
state_25339 = G__25480;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24515__auto__ = function(state_25339){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24515__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24515__auto____1.call(this,state_25339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24515__auto____0;
cljs$core$async$mult_$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24515__auto____1;
return cljs$core$async$mult_$_state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto___25424,cs,m,dchan,dctr,done))
})();
var state__24607__auto__ = (function (){var statearr_25423 = f__24606__auto__.call(null);
(statearr_25423[(6)] = c__24605__auto___25424);

return statearr_25423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto___25424,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__25482 = arguments.length;
switch (G__25482) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___25494 = arguments.length;
var i__4532__auto___25495 = (0);
while(true){
if((i__4532__auto___25495 < len__4531__auto___25494)){
args__4534__auto__.push((arguments[i__4532__auto___25495]));

var G__25496 = (i__4532__auto___25495 + (1));
i__4532__auto___25495 = G__25496;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25488){
var map__25489 = p__25488;
var map__25489__$1 = ((((!((map__25489 == null)))?(((((map__25489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25489):map__25489);
var opts = map__25489__$1;
var statearr_25491_25497 = state;
(statearr_25491_25497[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__25489,map__25489__$1,opts){
return (function (val){
var statearr_25492_25498 = state;
(statearr_25492_25498[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25489,map__25489__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_25493_25499 = state;
(statearr_25493_25499[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25484){
var G__25485 = cljs.core.first.call(null,seq25484);
var seq25484__$1 = cljs.core.next.call(null,seq25484);
var G__25486 = cljs.core.first.call(null,seq25484__$1);
var seq25484__$2 = cljs.core.next.call(null,seq25484__$1);
var G__25487 = cljs.core.first.call(null,seq25484__$2);
var seq25484__$3 = cljs.core.next.call(null,seq25484__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25485,G__25486,G__25487,seq25484__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25500 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25500 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta25501){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta25501 = meta25501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25502,meta25501__$1){
var self__ = this;
var _25502__$1 = this;
return (new cljs.core.async.t_cljs$core$async25500(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta25501__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25500.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25502){
var self__ = this;
var _25502__$1 = this;
return self__.meta25501;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25500.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25500.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25500.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25500.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25500.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25500.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25500.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25500.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25500.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta25501","meta25501",-1978700030,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25500.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25500.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25500";

cljs.core.async.t_cljs$core$async25500.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async25500");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25500.
 */
cljs.core.async.__GT_t_cljs$core$async25500 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25500(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25501){
return (new cljs.core.async.t_cljs$core$async25500(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25501));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25500(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24605__auto___25664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto___25664,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto___25664,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25604){
var state_val_25605 = (state_25604[(1)]);
if((state_val_25605 === (7))){
var inst_25519 = (state_25604[(2)]);
var state_25604__$1 = state_25604;
var statearr_25606_25665 = state_25604__$1;
(statearr_25606_25665[(2)] = inst_25519);

(statearr_25606_25665[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (20))){
var inst_25531 = (state_25604[(7)]);
var state_25604__$1 = state_25604;
var statearr_25607_25666 = state_25604__$1;
(statearr_25607_25666[(2)] = inst_25531);

(statearr_25607_25666[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (27))){
var state_25604__$1 = state_25604;
var statearr_25608_25667 = state_25604__$1;
(statearr_25608_25667[(2)] = null);

(statearr_25608_25667[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (1))){
var inst_25506 = (state_25604[(8)]);
var inst_25506__$1 = calc_state.call(null);
var inst_25508 = (inst_25506__$1 == null);
var inst_25509 = cljs.core.not.call(null,inst_25508);
var state_25604__$1 = (function (){var statearr_25609 = state_25604;
(statearr_25609[(8)] = inst_25506__$1);

return statearr_25609;
})();
if(inst_25509){
var statearr_25610_25668 = state_25604__$1;
(statearr_25610_25668[(1)] = (2));

} else {
var statearr_25611_25669 = state_25604__$1;
(statearr_25611_25669[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (24))){
var inst_25555 = (state_25604[(9)]);
var inst_25564 = (state_25604[(10)]);
var inst_25578 = (state_25604[(11)]);
var inst_25578__$1 = inst_25555.call(null,inst_25564);
var state_25604__$1 = (function (){var statearr_25612 = state_25604;
(statearr_25612[(11)] = inst_25578__$1);

return statearr_25612;
})();
if(cljs.core.truth_(inst_25578__$1)){
var statearr_25613_25670 = state_25604__$1;
(statearr_25613_25670[(1)] = (29));

} else {
var statearr_25614_25671 = state_25604__$1;
(statearr_25614_25671[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (4))){
var inst_25522 = (state_25604[(2)]);
var state_25604__$1 = state_25604;
if(cljs.core.truth_(inst_25522)){
var statearr_25615_25672 = state_25604__$1;
(statearr_25615_25672[(1)] = (8));

} else {
var statearr_25616_25673 = state_25604__$1;
(statearr_25616_25673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (15))){
var inst_25549 = (state_25604[(2)]);
var state_25604__$1 = state_25604;
if(cljs.core.truth_(inst_25549)){
var statearr_25617_25674 = state_25604__$1;
(statearr_25617_25674[(1)] = (19));

} else {
var statearr_25618_25675 = state_25604__$1;
(statearr_25618_25675[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (21))){
var inst_25554 = (state_25604[(12)]);
var inst_25554__$1 = (state_25604[(2)]);
var inst_25555 = cljs.core.get.call(null,inst_25554__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25556 = cljs.core.get.call(null,inst_25554__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25557 = cljs.core.get.call(null,inst_25554__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25604__$1 = (function (){var statearr_25619 = state_25604;
(statearr_25619[(9)] = inst_25555);

(statearr_25619[(12)] = inst_25554__$1);

(statearr_25619[(13)] = inst_25556);

return statearr_25619;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25604__$1,(22),inst_25557);
} else {
if((state_val_25605 === (31))){
var inst_25586 = (state_25604[(2)]);
var state_25604__$1 = state_25604;
if(cljs.core.truth_(inst_25586)){
var statearr_25620_25676 = state_25604__$1;
(statearr_25620_25676[(1)] = (32));

} else {
var statearr_25621_25677 = state_25604__$1;
(statearr_25621_25677[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (32))){
var inst_25563 = (state_25604[(14)]);
var state_25604__$1 = state_25604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25604__$1,(35),out,inst_25563);
} else {
if((state_val_25605 === (33))){
var inst_25554 = (state_25604[(12)]);
var inst_25531 = inst_25554;
var state_25604__$1 = (function (){var statearr_25622 = state_25604;
(statearr_25622[(7)] = inst_25531);

return statearr_25622;
})();
var statearr_25623_25678 = state_25604__$1;
(statearr_25623_25678[(2)] = null);

(statearr_25623_25678[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (13))){
var inst_25531 = (state_25604[(7)]);
var inst_25538 = inst_25531.cljs$lang$protocol_mask$partition0$;
var inst_25539 = (inst_25538 & (64));
var inst_25540 = inst_25531.cljs$core$ISeq$;
var inst_25541 = (cljs.core.PROTOCOL_SENTINEL === inst_25540);
var inst_25542 = ((inst_25539) || (inst_25541));
var state_25604__$1 = state_25604;
if(cljs.core.truth_(inst_25542)){
var statearr_25624_25679 = state_25604__$1;
(statearr_25624_25679[(1)] = (16));

} else {
var statearr_25625_25680 = state_25604__$1;
(statearr_25625_25680[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (22))){
var inst_25564 = (state_25604[(10)]);
var inst_25563 = (state_25604[(14)]);
var inst_25562 = (state_25604[(2)]);
var inst_25563__$1 = cljs.core.nth.call(null,inst_25562,(0),null);
var inst_25564__$1 = cljs.core.nth.call(null,inst_25562,(1),null);
var inst_25565 = (inst_25563__$1 == null);
var inst_25566 = cljs.core._EQ_.call(null,inst_25564__$1,change);
var inst_25567 = ((inst_25565) || (inst_25566));
var state_25604__$1 = (function (){var statearr_25626 = state_25604;
(statearr_25626[(10)] = inst_25564__$1);

(statearr_25626[(14)] = inst_25563__$1);

return statearr_25626;
})();
if(cljs.core.truth_(inst_25567)){
var statearr_25627_25681 = state_25604__$1;
(statearr_25627_25681[(1)] = (23));

} else {
var statearr_25628_25682 = state_25604__$1;
(statearr_25628_25682[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (36))){
var inst_25554 = (state_25604[(12)]);
var inst_25531 = inst_25554;
var state_25604__$1 = (function (){var statearr_25629 = state_25604;
(statearr_25629[(7)] = inst_25531);

return statearr_25629;
})();
var statearr_25630_25683 = state_25604__$1;
(statearr_25630_25683[(2)] = null);

(statearr_25630_25683[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (29))){
var inst_25578 = (state_25604[(11)]);
var state_25604__$1 = state_25604;
var statearr_25631_25684 = state_25604__$1;
(statearr_25631_25684[(2)] = inst_25578);

(statearr_25631_25684[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (6))){
var state_25604__$1 = state_25604;
var statearr_25632_25685 = state_25604__$1;
(statearr_25632_25685[(2)] = false);

(statearr_25632_25685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (28))){
var inst_25574 = (state_25604[(2)]);
var inst_25575 = calc_state.call(null);
var inst_25531 = inst_25575;
var state_25604__$1 = (function (){var statearr_25633 = state_25604;
(statearr_25633[(7)] = inst_25531);

(statearr_25633[(15)] = inst_25574);

return statearr_25633;
})();
var statearr_25634_25686 = state_25604__$1;
(statearr_25634_25686[(2)] = null);

(statearr_25634_25686[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (25))){
var inst_25600 = (state_25604[(2)]);
var state_25604__$1 = state_25604;
var statearr_25635_25687 = state_25604__$1;
(statearr_25635_25687[(2)] = inst_25600);

(statearr_25635_25687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (34))){
var inst_25598 = (state_25604[(2)]);
var state_25604__$1 = state_25604;
var statearr_25636_25688 = state_25604__$1;
(statearr_25636_25688[(2)] = inst_25598);

(statearr_25636_25688[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (17))){
var state_25604__$1 = state_25604;
var statearr_25637_25689 = state_25604__$1;
(statearr_25637_25689[(2)] = false);

(statearr_25637_25689[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (3))){
var state_25604__$1 = state_25604;
var statearr_25638_25690 = state_25604__$1;
(statearr_25638_25690[(2)] = false);

(statearr_25638_25690[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (12))){
var inst_25602 = (state_25604[(2)]);
var state_25604__$1 = state_25604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25604__$1,inst_25602);
} else {
if((state_val_25605 === (2))){
var inst_25506 = (state_25604[(8)]);
var inst_25511 = inst_25506.cljs$lang$protocol_mask$partition0$;
var inst_25512 = (inst_25511 & (64));
var inst_25513 = inst_25506.cljs$core$ISeq$;
var inst_25514 = (cljs.core.PROTOCOL_SENTINEL === inst_25513);
var inst_25515 = ((inst_25512) || (inst_25514));
var state_25604__$1 = state_25604;
if(cljs.core.truth_(inst_25515)){
var statearr_25639_25691 = state_25604__$1;
(statearr_25639_25691[(1)] = (5));

} else {
var statearr_25640_25692 = state_25604__$1;
(statearr_25640_25692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (23))){
var inst_25563 = (state_25604[(14)]);
var inst_25569 = (inst_25563 == null);
var state_25604__$1 = state_25604;
if(cljs.core.truth_(inst_25569)){
var statearr_25641_25693 = state_25604__$1;
(statearr_25641_25693[(1)] = (26));

} else {
var statearr_25642_25694 = state_25604__$1;
(statearr_25642_25694[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (35))){
var inst_25589 = (state_25604[(2)]);
var state_25604__$1 = state_25604;
if(cljs.core.truth_(inst_25589)){
var statearr_25643_25695 = state_25604__$1;
(statearr_25643_25695[(1)] = (36));

} else {
var statearr_25644_25696 = state_25604__$1;
(statearr_25644_25696[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (19))){
var inst_25531 = (state_25604[(7)]);
var inst_25551 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25531);
var state_25604__$1 = state_25604;
var statearr_25645_25697 = state_25604__$1;
(statearr_25645_25697[(2)] = inst_25551);

(statearr_25645_25697[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (11))){
var inst_25531 = (state_25604[(7)]);
var inst_25535 = (inst_25531 == null);
var inst_25536 = cljs.core.not.call(null,inst_25535);
var state_25604__$1 = state_25604;
if(inst_25536){
var statearr_25646_25698 = state_25604__$1;
(statearr_25646_25698[(1)] = (13));

} else {
var statearr_25647_25699 = state_25604__$1;
(statearr_25647_25699[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (9))){
var inst_25506 = (state_25604[(8)]);
var state_25604__$1 = state_25604;
var statearr_25648_25700 = state_25604__$1;
(statearr_25648_25700[(2)] = inst_25506);

(statearr_25648_25700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (5))){
var state_25604__$1 = state_25604;
var statearr_25649_25701 = state_25604__$1;
(statearr_25649_25701[(2)] = true);

(statearr_25649_25701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (14))){
var state_25604__$1 = state_25604;
var statearr_25650_25702 = state_25604__$1;
(statearr_25650_25702[(2)] = false);

(statearr_25650_25702[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (26))){
var inst_25564 = (state_25604[(10)]);
var inst_25571 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25564);
var state_25604__$1 = state_25604;
var statearr_25651_25703 = state_25604__$1;
(statearr_25651_25703[(2)] = inst_25571);

(statearr_25651_25703[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (16))){
var state_25604__$1 = state_25604;
var statearr_25652_25704 = state_25604__$1;
(statearr_25652_25704[(2)] = true);

(statearr_25652_25704[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (38))){
var inst_25594 = (state_25604[(2)]);
var state_25604__$1 = state_25604;
var statearr_25653_25705 = state_25604__$1;
(statearr_25653_25705[(2)] = inst_25594);

(statearr_25653_25705[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (30))){
var inst_25555 = (state_25604[(9)]);
var inst_25564 = (state_25604[(10)]);
var inst_25556 = (state_25604[(13)]);
var inst_25581 = cljs.core.empty_QMARK_.call(null,inst_25555);
var inst_25582 = inst_25556.call(null,inst_25564);
var inst_25583 = cljs.core.not.call(null,inst_25582);
var inst_25584 = ((inst_25581) && (inst_25583));
var state_25604__$1 = state_25604;
var statearr_25654_25706 = state_25604__$1;
(statearr_25654_25706[(2)] = inst_25584);

(statearr_25654_25706[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (10))){
var inst_25506 = (state_25604[(8)]);
var inst_25527 = (state_25604[(2)]);
var inst_25528 = cljs.core.get.call(null,inst_25527,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25529 = cljs.core.get.call(null,inst_25527,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25530 = cljs.core.get.call(null,inst_25527,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25531 = inst_25506;
var state_25604__$1 = (function (){var statearr_25655 = state_25604;
(statearr_25655[(16)] = inst_25530);

(statearr_25655[(7)] = inst_25531);

(statearr_25655[(17)] = inst_25528);

(statearr_25655[(18)] = inst_25529);

return statearr_25655;
})();
var statearr_25656_25707 = state_25604__$1;
(statearr_25656_25707[(2)] = null);

(statearr_25656_25707[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (18))){
var inst_25546 = (state_25604[(2)]);
var state_25604__$1 = state_25604;
var statearr_25657_25708 = state_25604__$1;
(statearr_25657_25708[(2)] = inst_25546);

(statearr_25657_25708[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (37))){
var state_25604__$1 = state_25604;
var statearr_25658_25709 = state_25604__$1;
(statearr_25658_25709[(2)] = null);

(statearr_25658_25709[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (8))){
var inst_25506 = (state_25604[(8)]);
var inst_25524 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25506);
var state_25604__$1 = state_25604;
var statearr_25659_25710 = state_25604__$1;
(statearr_25659_25710[(2)] = inst_25524);

(statearr_25659_25710[(1)] = (10));


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
});})(c__24605__auto___25664,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24514__auto__,c__24605__auto___25664,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24515__auto__ = null;
var cljs$core$async$mix_$_state_machine__24515__auto____0 = (function (){
var statearr_25660 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25660[(0)] = cljs$core$async$mix_$_state_machine__24515__auto__);

(statearr_25660[(1)] = (1));

return statearr_25660;
});
var cljs$core$async$mix_$_state_machine__24515__auto____1 = (function (state_25604){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_25604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e25661){if((e25661 instanceof Object)){
var ex__24518__auto__ = e25661;
var statearr_25662_25711 = state_25604;
(statearr_25662_25711[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25712 = state_25604;
state_25604 = G__25712;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24515__auto__ = function(state_25604){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24515__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24515__auto____1.call(this,state_25604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24515__auto____0;
cljs$core$async$mix_$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24515__auto____1;
return cljs$core$async$mix_$_state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto___25664,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24607__auto__ = (function (){var statearr_25663 = f__24606__auto__.call(null);
(statearr_25663[(6)] = c__24605__auto___25664);

return statearr_25663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto___25664,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25714 = arguments.length;
switch (G__25714) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__25718 = arguments.length;
switch (G__25718) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__25716_SHARP_){
if(cljs.core.truth_(p1__25716_SHARP_.call(null,topic))){
return p1__25716_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25716_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25719 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25719 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25720){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25720 = meta25720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25721,meta25720__$1){
var self__ = this;
var _25721__$1 = this;
return (new cljs.core.async.t_cljs$core$async25719(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25720__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25719.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25721){
var self__ = this;
var _25721__$1 = this;
return self__.meta25720;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25719.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25719.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25719.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25719.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25719.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25719.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25719.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25719.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25720","meta25720",542182169,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25719.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25719";

cljs.core.async.t_cljs$core$async25719.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async25719");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25719.
 */
cljs.core.async.__GT_t_cljs$core$async25719 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25719(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25720){
return (new cljs.core.async.t_cljs$core$async25719(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25720));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25719(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24605__auto___25839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto___25839,mults,ensure_mult,p){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto___25839,mults,ensure_mult,p){
return (function (state_25793){
var state_val_25794 = (state_25793[(1)]);
if((state_val_25794 === (7))){
var inst_25789 = (state_25793[(2)]);
var state_25793__$1 = state_25793;
var statearr_25795_25840 = state_25793__$1;
(statearr_25795_25840[(2)] = inst_25789);

(statearr_25795_25840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (20))){
var state_25793__$1 = state_25793;
var statearr_25796_25841 = state_25793__$1;
(statearr_25796_25841[(2)] = null);

(statearr_25796_25841[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (1))){
var state_25793__$1 = state_25793;
var statearr_25797_25842 = state_25793__$1;
(statearr_25797_25842[(2)] = null);

(statearr_25797_25842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (24))){
var inst_25772 = (state_25793[(7)]);
var inst_25781 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25772);
var state_25793__$1 = state_25793;
var statearr_25798_25843 = state_25793__$1;
(statearr_25798_25843[(2)] = inst_25781);

(statearr_25798_25843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (4))){
var inst_25724 = (state_25793[(8)]);
var inst_25724__$1 = (state_25793[(2)]);
var inst_25725 = (inst_25724__$1 == null);
var state_25793__$1 = (function (){var statearr_25799 = state_25793;
(statearr_25799[(8)] = inst_25724__$1);

return statearr_25799;
})();
if(cljs.core.truth_(inst_25725)){
var statearr_25800_25844 = state_25793__$1;
(statearr_25800_25844[(1)] = (5));

} else {
var statearr_25801_25845 = state_25793__$1;
(statearr_25801_25845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (15))){
var inst_25766 = (state_25793[(2)]);
var state_25793__$1 = state_25793;
var statearr_25802_25846 = state_25793__$1;
(statearr_25802_25846[(2)] = inst_25766);

(statearr_25802_25846[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (21))){
var inst_25786 = (state_25793[(2)]);
var state_25793__$1 = (function (){var statearr_25803 = state_25793;
(statearr_25803[(9)] = inst_25786);

return statearr_25803;
})();
var statearr_25804_25847 = state_25793__$1;
(statearr_25804_25847[(2)] = null);

(statearr_25804_25847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (13))){
var inst_25748 = (state_25793[(10)]);
var inst_25750 = cljs.core.chunked_seq_QMARK_.call(null,inst_25748);
var state_25793__$1 = state_25793;
if(inst_25750){
var statearr_25805_25848 = state_25793__$1;
(statearr_25805_25848[(1)] = (16));

} else {
var statearr_25806_25849 = state_25793__$1;
(statearr_25806_25849[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (22))){
var inst_25778 = (state_25793[(2)]);
var state_25793__$1 = state_25793;
if(cljs.core.truth_(inst_25778)){
var statearr_25807_25850 = state_25793__$1;
(statearr_25807_25850[(1)] = (23));

} else {
var statearr_25808_25851 = state_25793__$1;
(statearr_25808_25851[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (6))){
var inst_25772 = (state_25793[(7)]);
var inst_25724 = (state_25793[(8)]);
var inst_25774 = (state_25793[(11)]);
var inst_25772__$1 = topic_fn.call(null,inst_25724);
var inst_25773 = cljs.core.deref.call(null,mults);
var inst_25774__$1 = cljs.core.get.call(null,inst_25773,inst_25772__$1);
var state_25793__$1 = (function (){var statearr_25809 = state_25793;
(statearr_25809[(7)] = inst_25772__$1);

(statearr_25809[(11)] = inst_25774__$1);

return statearr_25809;
})();
if(cljs.core.truth_(inst_25774__$1)){
var statearr_25810_25852 = state_25793__$1;
(statearr_25810_25852[(1)] = (19));

} else {
var statearr_25811_25853 = state_25793__$1;
(statearr_25811_25853[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (25))){
var inst_25783 = (state_25793[(2)]);
var state_25793__$1 = state_25793;
var statearr_25812_25854 = state_25793__$1;
(statearr_25812_25854[(2)] = inst_25783);

(statearr_25812_25854[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (17))){
var inst_25748 = (state_25793[(10)]);
var inst_25757 = cljs.core.first.call(null,inst_25748);
var inst_25758 = cljs.core.async.muxch_STAR_.call(null,inst_25757);
var inst_25759 = cljs.core.async.close_BANG_.call(null,inst_25758);
var inst_25760 = cljs.core.next.call(null,inst_25748);
var inst_25734 = inst_25760;
var inst_25735 = null;
var inst_25736 = (0);
var inst_25737 = (0);
var state_25793__$1 = (function (){var statearr_25813 = state_25793;
(statearr_25813[(12)] = inst_25736);

(statearr_25813[(13)] = inst_25735);

(statearr_25813[(14)] = inst_25734);

(statearr_25813[(15)] = inst_25737);

(statearr_25813[(16)] = inst_25759);

return statearr_25813;
})();
var statearr_25814_25855 = state_25793__$1;
(statearr_25814_25855[(2)] = null);

(statearr_25814_25855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (3))){
var inst_25791 = (state_25793[(2)]);
var state_25793__$1 = state_25793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25793__$1,inst_25791);
} else {
if((state_val_25794 === (12))){
var inst_25768 = (state_25793[(2)]);
var state_25793__$1 = state_25793;
var statearr_25815_25856 = state_25793__$1;
(statearr_25815_25856[(2)] = inst_25768);

(statearr_25815_25856[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (2))){
var state_25793__$1 = state_25793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25793__$1,(4),ch);
} else {
if((state_val_25794 === (23))){
var state_25793__$1 = state_25793;
var statearr_25816_25857 = state_25793__$1;
(statearr_25816_25857[(2)] = null);

(statearr_25816_25857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (19))){
var inst_25724 = (state_25793[(8)]);
var inst_25774 = (state_25793[(11)]);
var inst_25776 = cljs.core.async.muxch_STAR_.call(null,inst_25774);
var state_25793__$1 = state_25793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25793__$1,(22),inst_25776,inst_25724);
} else {
if((state_val_25794 === (11))){
var inst_25748 = (state_25793[(10)]);
var inst_25734 = (state_25793[(14)]);
var inst_25748__$1 = cljs.core.seq.call(null,inst_25734);
var state_25793__$1 = (function (){var statearr_25817 = state_25793;
(statearr_25817[(10)] = inst_25748__$1);

return statearr_25817;
})();
if(inst_25748__$1){
var statearr_25818_25858 = state_25793__$1;
(statearr_25818_25858[(1)] = (13));

} else {
var statearr_25819_25859 = state_25793__$1;
(statearr_25819_25859[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (9))){
var inst_25770 = (state_25793[(2)]);
var state_25793__$1 = state_25793;
var statearr_25820_25860 = state_25793__$1;
(statearr_25820_25860[(2)] = inst_25770);

(statearr_25820_25860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (5))){
var inst_25731 = cljs.core.deref.call(null,mults);
var inst_25732 = cljs.core.vals.call(null,inst_25731);
var inst_25733 = cljs.core.seq.call(null,inst_25732);
var inst_25734 = inst_25733;
var inst_25735 = null;
var inst_25736 = (0);
var inst_25737 = (0);
var state_25793__$1 = (function (){var statearr_25821 = state_25793;
(statearr_25821[(12)] = inst_25736);

(statearr_25821[(13)] = inst_25735);

(statearr_25821[(14)] = inst_25734);

(statearr_25821[(15)] = inst_25737);

return statearr_25821;
})();
var statearr_25822_25861 = state_25793__$1;
(statearr_25822_25861[(2)] = null);

(statearr_25822_25861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (14))){
var state_25793__$1 = state_25793;
var statearr_25826_25862 = state_25793__$1;
(statearr_25826_25862[(2)] = null);

(statearr_25826_25862[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (16))){
var inst_25748 = (state_25793[(10)]);
var inst_25752 = cljs.core.chunk_first.call(null,inst_25748);
var inst_25753 = cljs.core.chunk_rest.call(null,inst_25748);
var inst_25754 = cljs.core.count.call(null,inst_25752);
var inst_25734 = inst_25753;
var inst_25735 = inst_25752;
var inst_25736 = inst_25754;
var inst_25737 = (0);
var state_25793__$1 = (function (){var statearr_25827 = state_25793;
(statearr_25827[(12)] = inst_25736);

(statearr_25827[(13)] = inst_25735);

(statearr_25827[(14)] = inst_25734);

(statearr_25827[(15)] = inst_25737);

return statearr_25827;
})();
var statearr_25828_25863 = state_25793__$1;
(statearr_25828_25863[(2)] = null);

(statearr_25828_25863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (10))){
var inst_25736 = (state_25793[(12)]);
var inst_25735 = (state_25793[(13)]);
var inst_25734 = (state_25793[(14)]);
var inst_25737 = (state_25793[(15)]);
var inst_25742 = cljs.core._nth.call(null,inst_25735,inst_25737);
var inst_25743 = cljs.core.async.muxch_STAR_.call(null,inst_25742);
var inst_25744 = cljs.core.async.close_BANG_.call(null,inst_25743);
var inst_25745 = (inst_25737 + (1));
var tmp25823 = inst_25736;
var tmp25824 = inst_25735;
var tmp25825 = inst_25734;
var inst_25734__$1 = tmp25825;
var inst_25735__$1 = tmp25824;
var inst_25736__$1 = tmp25823;
var inst_25737__$1 = inst_25745;
var state_25793__$1 = (function (){var statearr_25829 = state_25793;
(statearr_25829[(12)] = inst_25736__$1);

(statearr_25829[(17)] = inst_25744);

(statearr_25829[(13)] = inst_25735__$1);

(statearr_25829[(14)] = inst_25734__$1);

(statearr_25829[(15)] = inst_25737__$1);

return statearr_25829;
})();
var statearr_25830_25864 = state_25793__$1;
(statearr_25830_25864[(2)] = null);

(statearr_25830_25864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (18))){
var inst_25763 = (state_25793[(2)]);
var state_25793__$1 = state_25793;
var statearr_25831_25865 = state_25793__$1;
(statearr_25831_25865[(2)] = inst_25763);

(statearr_25831_25865[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (8))){
var inst_25736 = (state_25793[(12)]);
var inst_25737 = (state_25793[(15)]);
var inst_25739 = (inst_25737 < inst_25736);
var inst_25740 = inst_25739;
var state_25793__$1 = state_25793;
if(cljs.core.truth_(inst_25740)){
var statearr_25832_25866 = state_25793__$1;
(statearr_25832_25866[(1)] = (10));

} else {
var statearr_25833_25867 = state_25793__$1;
(statearr_25833_25867[(1)] = (11));

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
});})(c__24605__auto___25839,mults,ensure_mult,p))
;
return ((function (switch__24514__auto__,c__24605__auto___25839,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24515__auto__ = null;
var cljs$core$async$state_machine__24515__auto____0 = (function (){
var statearr_25834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25834[(0)] = cljs$core$async$state_machine__24515__auto__);

(statearr_25834[(1)] = (1));

return statearr_25834;
});
var cljs$core$async$state_machine__24515__auto____1 = (function (state_25793){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_25793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e25835){if((e25835 instanceof Object)){
var ex__24518__auto__ = e25835;
var statearr_25836_25868 = state_25793;
(statearr_25836_25868[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25869 = state_25793;
state_25793 = G__25869;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
cljs$core$async$state_machine__24515__auto__ = function(state_25793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24515__auto____1.call(this,state_25793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24515__auto____0;
cljs$core$async$state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24515__auto____1;
return cljs$core$async$state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto___25839,mults,ensure_mult,p))
})();
var state__24607__auto__ = (function (){var statearr_25837 = f__24606__auto__.call(null);
(statearr_25837[(6)] = c__24605__auto___25839);

return statearr_25837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto___25839,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25871 = arguments.length;
switch (G__25871) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25874 = arguments.length;
switch (G__25874) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__25877 = arguments.length;
switch (G__25877) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24605__auto___25944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto___25944,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto___25944,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25916){
var state_val_25917 = (state_25916[(1)]);
if((state_val_25917 === (7))){
var state_25916__$1 = state_25916;
var statearr_25918_25945 = state_25916__$1;
(statearr_25918_25945[(2)] = null);

(statearr_25918_25945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (1))){
var state_25916__$1 = state_25916;
var statearr_25919_25946 = state_25916__$1;
(statearr_25919_25946[(2)] = null);

(statearr_25919_25946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (4))){
var inst_25880 = (state_25916[(7)]);
var inst_25882 = (inst_25880 < cnt);
var state_25916__$1 = state_25916;
if(cljs.core.truth_(inst_25882)){
var statearr_25920_25947 = state_25916__$1;
(statearr_25920_25947[(1)] = (6));

} else {
var statearr_25921_25948 = state_25916__$1;
(statearr_25921_25948[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (15))){
var inst_25912 = (state_25916[(2)]);
var state_25916__$1 = state_25916;
var statearr_25922_25949 = state_25916__$1;
(statearr_25922_25949[(2)] = inst_25912);

(statearr_25922_25949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (13))){
var inst_25905 = cljs.core.async.close_BANG_.call(null,out);
var state_25916__$1 = state_25916;
var statearr_25923_25950 = state_25916__$1;
(statearr_25923_25950[(2)] = inst_25905);

(statearr_25923_25950[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (6))){
var state_25916__$1 = state_25916;
var statearr_25924_25951 = state_25916__$1;
(statearr_25924_25951[(2)] = null);

(statearr_25924_25951[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (3))){
var inst_25914 = (state_25916[(2)]);
var state_25916__$1 = state_25916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25916__$1,inst_25914);
} else {
if((state_val_25917 === (12))){
var inst_25902 = (state_25916[(8)]);
var inst_25902__$1 = (state_25916[(2)]);
var inst_25903 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25902__$1);
var state_25916__$1 = (function (){var statearr_25925 = state_25916;
(statearr_25925[(8)] = inst_25902__$1);

return statearr_25925;
})();
if(cljs.core.truth_(inst_25903)){
var statearr_25926_25952 = state_25916__$1;
(statearr_25926_25952[(1)] = (13));

} else {
var statearr_25927_25953 = state_25916__$1;
(statearr_25927_25953[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (2))){
var inst_25879 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25880 = (0);
var state_25916__$1 = (function (){var statearr_25928 = state_25916;
(statearr_25928[(7)] = inst_25880);

(statearr_25928[(9)] = inst_25879);

return statearr_25928;
})();
var statearr_25929_25954 = state_25916__$1;
(statearr_25929_25954[(2)] = null);

(statearr_25929_25954[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (11))){
var inst_25880 = (state_25916[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25916,(10),Object,null,(9));
var inst_25889 = chs__$1.call(null,inst_25880);
var inst_25890 = done.call(null,inst_25880);
var inst_25891 = cljs.core.async.take_BANG_.call(null,inst_25889,inst_25890);
var state_25916__$1 = state_25916;
var statearr_25930_25955 = state_25916__$1;
(statearr_25930_25955[(2)] = inst_25891);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25916__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (9))){
var inst_25880 = (state_25916[(7)]);
var inst_25893 = (state_25916[(2)]);
var inst_25894 = (inst_25880 + (1));
var inst_25880__$1 = inst_25894;
var state_25916__$1 = (function (){var statearr_25931 = state_25916;
(statearr_25931[(7)] = inst_25880__$1);

(statearr_25931[(10)] = inst_25893);

return statearr_25931;
})();
var statearr_25932_25956 = state_25916__$1;
(statearr_25932_25956[(2)] = null);

(statearr_25932_25956[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (5))){
var inst_25900 = (state_25916[(2)]);
var state_25916__$1 = (function (){var statearr_25933 = state_25916;
(statearr_25933[(11)] = inst_25900);

return statearr_25933;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25916__$1,(12),dchan);
} else {
if((state_val_25917 === (14))){
var inst_25902 = (state_25916[(8)]);
var inst_25907 = cljs.core.apply.call(null,f,inst_25902);
var state_25916__$1 = state_25916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25916__$1,(16),out,inst_25907);
} else {
if((state_val_25917 === (16))){
var inst_25909 = (state_25916[(2)]);
var state_25916__$1 = (function (){var statearr_25934 = state_25916;
(statearr_25934[(12)] = inst_25909);

return statearr_25934;
})();
var statearr_25935_25957 = state_25916__$1;
(statearr_25935_25957[(2)] = null);

(statearr_25935_25957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (10))){
var inst_25884 = (state_25916[(2)]);
var inst_25885 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25916__$1 = (function (){var statearr_25936 = state_25916;
(statearr_25936[(13)] = inst_25884);

return statearr_25936;
})();
var statearr_25937_25958 = state_25916__$1;
(statearr_25937_25958[(2)] = inst_25885);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25916__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (8))){
var inst_25898 = (state_25916[(2)]);
var state_25916__$1 = state_25916;
var statearr_25938_25959 = state_25916__$1;
(statearr_25938_25959[(2)] = inst_25898);

(statearr_25938_25959[(1)] = (5));


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
});})(c__24605__auto___25944,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24514__auto__,c__24605__auto___25944,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24515__auto__ = null;
var cljs$core$async$state_machine__24515__auto____0 = (function (){
var statearr_25939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25939[(0)] = cljs$core$async$state_machine__24515__auto__);

(statearr_25939[(1)] = (1));

return statearr_25939;
});
var cljs$core$async$state_machine__24515__auto____1 = (function (state_25916){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_25916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e25940){if((e25940 instanceof Object)){
var ex__24518__auto__ = e25940;
var statearr_25941_25960 = state_25916;
(statearr_25941_25960[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25961 = state_25916;
state_25916 = G__25961;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
cljs$core$async$state_machine__24515__auto__ = function(state_25916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24515__auto____1.call(this,state_25916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24515__auto____0;
cljs$core$async$state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24515__auto____1;
return cljs$core$async$state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto___25944,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24607__auto__ = (function (){var statearr_25942 = f__24606__auto__.call(null);
(statearr_25942[(6)] = c__24605__auto___25944);

return statearr_25942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto___25944,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25964 = arguments.length;
switch (G__25964) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24605__auto___26018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto___26018,out){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto___26018,out){
return (function (state_25996){
var state_val_25997 = (state_25996[(1)]);
if((state_val_25997 === (7))){
var inst_25976 = (state_25996[(7)]);
var inst_25975 = (state_25996[(8)]);
var inst_25975__$1 = (state_25996[(2)]);
var inst_25976__$1 = cljs.core.nth.call(null,inst_25975__$1,(0),null);
var inst_25977 = cljs.core.nth.call(null,inst_25975__$1,(1),null);
var inst_25978 = (inst_25976__$1 == null);
var state_25996__$1 = (function (){var statearr_25998 = state_25996;
(statearr_25998[(7)] = inst_25976__$1);

(statearr_25998[(9)] = inst_25977);

(statearr_25998[(8)] = inst_25975__$1);

return statearr_25998;
})();
if(cljs.core.truth_(inst_25978)){
var statearr_25999_26019 = state_25996__$1;
(statearr_25999_26019[(1)] = (8));

} else {
var statearr_26000_26020 = state_25996__$1;
(statearr_26000_26020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (1))){
var inst_25965 = cljs.core.vec.call(null,chs);
var inst_25966 = inst_25965;
var state_25996__$1 = (function (){var statearr_26001 = state_25996;
(statearr_26001[(10)] = inst_25966);

return statearr_26001;
})();
var statearr_26002_26021 = state_25996__$1;
(statearr_26002_26021[(2)] = null);

(statearr_26002_26021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (4))){
var inst_25966 = (state_25996[(10)]);
var state_25996__$1 = state_25996;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25996__$1,(7),inst_25966);
} else {
if((state_val_25997 === (6))){
var inst_25992 = (state_25996[(2)]);
var state_25996__$1 = state_25996;
var statearr_26003_26022 = state_25996__$1;
(statearr_26003_26022[(2)] = inst_25992);

(statearr_26003_26022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (3))){
var inst_25994 = (state_25996[(2)]);
var state_25996__$1 = state_25996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25996__$1,inst_25994);
} else {
if((state_val_25997 === (2))){
var inst_25966 = (state_25996[(10)]);
var inst_25968 = cljs.core.count.call(null,inst_25966);
var inst_25969 = (inst_25968 > (0));
var state_25996__$1 = state_25996;
if(cljs.core.truth_(inst_25969)){
var statearr_26005_26023 = state_25996__$1;
(statearr_26005_26023[(1)] = (4));

} else {
var statearr_26006_26024 = state_25996__$1;
(statearr_26006_26024[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (11))){
var inst_25966 = (state_25996[(10)]);
var inst_25985 = (state_25996[(2)]);
var tmp26004 = inst_25966;
var inst_25966__$1 = tmp26004;
var state_25996__$1 = (function (){var statearr_26007 = state_25996;
(statearr_26007[(10)] = inst_25966__$1);

(statearr_26007[(11)] = inst_25985);

return statearr_26007;
})();
var statearr_26008_26025 = state_25996__$1;
(statearr_26008_26025[(2)] = null);

(statearr_26008_26025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (9))){
var inst_25976 = (state_25996[(7)]);
var state_25996__$1 = state_25996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25996__$1,(11),out,inst_25976);
} else {
if((state_val_25997 === (5))){
var inst_25990 = cljs.core.async.close_BANG_.call(null,out);
var state_25996__$1 = state_25996;
var statearr_26009_26026 = state_25996__$1;
(statearr_26009_26026[(2)] = inst_25990);

(statearr_26009_26026[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (10))){
var inst_25988 = (state_25996[(2)]);
var state_25996__$1 = state_25996;
var statearr_26010_26027 = state_25996__$1;
(statearr_26010_26027[(2)] = inst_25988);

(statearr_26010_26027[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (8))){
var inst_25976 = (state_25996[(7)]);
var inst_25966 = (state_25996[(10)]);
var inst_25977 = (state_25996[(9)]);
var inst_25975 = (state_25996[(8)]);
var inst_25980 = (function (){var cs = inst_25966;
var vec__25971 = inst_25975;
var v = inst_25976;
var c = inst_25977;
return ((function (cs,vec__25971,v,c,inst_25976,inst_25966,inst_25977,inst_25975,state_val_25997,c__24605__auto___26018,out){
return (function (p1__25962_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25962_SHARP_);
});
;})(cs,vec__25971,v,c,inst_25976,inst_25966,inst_25977,inst_25975,state_val_25997,c__24605__auto___26018,out))
})();
var inst_25981 = cljs.core.filterv.call(null,inst_25980,inst_25966);
var inst_25966__$1 = inst_25981;
var state_25996__$1 = (function (){var statearr_26011 = state_25996;
(statearr_26011[(10)] = inst_25966__$1);

return statearr_26011;
})();
var statearr_26012_26028 = state_25996__$1;
(statearr_26012_26028[(2)] = null);

(statearr_26012_26028[(1)] = (2));


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
});})(c__24605__auto___26018,out))
;
return ((function (switch__24514__auto__,c__24605__auto___26018,out){
return (function() {
var cljs$core$async$state_machine__24515__auto__ = null;
var cljs$core$async$state_machine__24515__auto____0 = (function (){
var statearr_26013 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26013[(0)] = cljs$core$async$state_machine__24515__auto__);

(statearr_26013[(1)] = (1));

return statearr_26013;
});
var cljs$core$async$state_machine__24515__auto____1 = (function (state_25996){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_25996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e26014){if((e26014 instanceof Object)){
var ex__24518__auto__ = e26014;
var statearr_26015_26029 = state_25996;
(statearr_26015_26029[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26030 = state_25996;
state_25996 = G__26030;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
cljs$core$async$state_machine__24515__auto__ = function(state_25996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24515__auto____1.call(this,state_25996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24515__auto____0;
cljs$core$async$state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24515__auto____1;
return cljs$core$async$state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto___26018,out))
})();
var state__24607__auto__ = (function (){var statearr_26016 = f__24606__auto__.call(null);
(statearr_26016[(6)] = c__24605__auto___26018);

return statearr_26016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto___26018,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__26032 = arguments.length;
switch (G__26032) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24605__auto___26077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto___26077,out){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto___26077,out){
return (function (state_26056){
var state_val_26057 = (state_26056[(1)]);
if((state_val_26057 === (7))){
var inst_26038 = (state_26056[(7)]);
var inst_26038__$1 = (state_26056[(2)]);
var inst_26039 = (inst_26038__$1 == null);
var inst_26040 = cljs.core.not.call(null,inst_26039);
var state_26056__$1 = (function (){var statearr_26058 = state_26056;
(statearr_26058[(7)] = inst_26038__$1);

return statearr_26058;
})();
if(inst_26040){
var statearr_26059_26078 = state_26056__$1;
(statearr_26059_26078[(1)] = (8));

} else {
var statearr_26060_26079 = state_26056__$1;
(statearr_26060_26079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26057 === (1))){
var inst_26033 = (0);
var state_26056__$1 = (function (){var statearr_26061 = state_26056;
(statearr_26061[(8)] = inst_26033);

return statearr_26061;
})();
var statearr_26062_26080 = state_26056__$1;
(statearr_26062_26080[(2)] = null);

(statearr_26062_26080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26057 === (4))){
var state_26056__$1 = state_26056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26056__$1,(7),ch);
} else {
if((state_val_26057 === (6))){
var inst_26051 = (state_26056[(2)]);
var state_26056__$1 = state_26056;
var statearr_26063_26081 = state_26056__$1;
(statearr_26063_26081[(2)] = inst_26051);

(statearr_26063_26081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26057 === (3))){
var inst_26053 = (state_26056[(2)]);
var inst_26054 = cljs.core.async.close_BANG_.call(null,out);
var state_26056__$1 = (function (){var statearr_26064 = state_26056;
(statearr_26064[(9)] = inst_26053);

return statearr_26064;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26056__$1,inst_26054);
} else {
if((state_val_26057 === (2))){
var inst_26033 = (state_26056[(8)]);
var inst_26035 = (inst_26033 < n);
var state_26056__$1 = state_26056;
if(cljs.core.truth_(inst_26035)){
var statearr_26065_26082 = state_26056__$1;
(statearr_26065_26082[(1)] = (4));

} else {
var statearr_26066_26083 = state_26056__$1;
(statearr_26066_26083[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26057 === (11))){
var inst_26033 = (state_26056[(8)]);
var inst_26043 = (state_26056[(2)]);
var inst_26044 = (inst_26033 + (1));
var inst_26033__$1 = inst_26044;
var state_26056__$1 = (function (){var statearr_26067 = state_26056;
(statearr_26067[(10)] = inst_26043);

(statearr_26067[(8)] = inst_26033__$1);

return statearr_26067;
})();
var statearr_26068_26084 = state_26056__$1;
(statearr_26068_26084[(2)] = null);

(statearr_26068_26084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26057 === (9))){
var state_26056__$1 = state_26056;
var statearr_26069_26085 = state_26056__$1;
(statearr_26069_26085[(2)] = null);

(statearr_26069_26085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26057 === (5))){
var state_26056__$1 = state_26056;
var statearr_26070_26086 = state_26056__$1;
(statearr_26070_26086[(2)] = null);

(statearr_26070_26086[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26057 === (10))){
var inst_26048 = (state_26056[(2)]);
var state_26056__$1 = state_26056;
var statearr_26071_26087 = state_26056__$1;
(statearr_26071_26087[(2)] = inst_26048);

(statearr_26071_26087[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26057 === (8))){
var inst_26038 = (state_26056[(7)]);
var state_26056__$1 = state_26056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26056__$1,(11),out,inst_26038);
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
});})(c__24605__auto___26077,out))
;
return ((function (switch__24514__auto__,c__24605__auto___26077,out){
return (function() {
var cljs$core$async$state_machine__24515__auto__ = null;
var cljs$core$async$state_machine__24515__auto____0 = (function (){
var statearr_26072 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26072[(0)] = cljs$core$async$state_machine__24515__auto__);

(statearr_26072[(1)] = (1));

return statearr_26072;
});
var cljs$core$async$state_machine__24515__auto____1 = (function (state_26056){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_26056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e26073){if((e26073 instanceof Object)){
var ex__24518__auto__ = e26073;
var statearr_26074_26088 = state_26056;
(statearr_26074_26088[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26089 = state_26056;
state_26056 = G__26089;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
cljs$core$async$state_machine__24515__auto__ = function(state_26056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24515__auto____1.call(this,state_26056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24515__auto____0;
cljs$core$async$state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24515__auto____1;
return cljs$core$async$state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto___26077,out))
})();
var state__24607__auto__ = (function (){var statearr_26075 = f__24606__auto__.call(null);
(statearr_26075[(6)] = c__24605__auto___26077);

return statearr_26075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto___26077,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26091 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26091 = (function (f,ch,meta26092){
this.f = f;
this.ch = ch;
this.meta26092 = meta26092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26093,meta26092__$1){
var self__ = this;
var _26093__$1 = this;
return (new cljs.core.async.t_cljs$core$async26091(self__.f,self__.ch,meta26092__$1));
});

cljs.core.async.t_cljs$core$async26091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26093){
var self__ = this;
var _26093__$1 = this;
return self__.meta26092;
});

cljs.core.async.t_cljs$core$async26091.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26091.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26091.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26091.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26091.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26094 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26094 = (function (f,ch,meta26092,_,fn1,meta26095){
this.f = f;
this.ch = ch;
this.meta26092 = meta26092;
this._ = _;
this.fn1 = fn1;
this.meta26095 = meta26095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26096,meta26095__$1){
var self__ = this;
var _26096__$1 = this;
return (new cljs.core.async.t_cljs$core$async26094(self__.f,self__.ch,self__.meta26092,self__._,self__.fn1,meta26095__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26094.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26096){
var self__ = this;
var _26096__$1 = this;
return self__.meta26095;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26094.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26094.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26094.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26094.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26090_SHARP_){
return f1.call(null,(((p1__26090_SHARP_ == null))?null:self__.f.call(null,p1__26090_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26094.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26092","meta26092",-541859574,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26091","cljs.core.async/t_cljs$core$async26091",1680280135,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26095","meta26095",-1940787615,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26094.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26094.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26094";

cljs.core.async.t_cljs$core$async26094.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async26094");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26094.
 */
cljs.core.async.__GT_t_cljs$core$async26094 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26094(f__$1,ch__$1,meta26092__$1,___$2,fn1__$1,meta26095){
return (new cljs.core.async.t_cljs$core$async26094(f__$1,ch__$1,meta26092__$1,___$2,fn1__$1,meta26095));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26094(self__.f,self__.ch,self__.meta26092,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26091.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26091.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26091.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26092","meta26092",-541859574,null)], null);
});

cljs.core.async.t_cljs$core$async26091.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26091.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26091";

cljs.core.async.t_cljs$core$async26091.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async26091");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26091.
 */
cljs.core.async.__GT_t_cljs$core$async26091 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26091(f__$1,ch__$1,meta26092){
return (new cljs.core.async.t_cljs$core$async26091(f__$1,ch__$1,meta26092));
});

}

return (new cljs.core.async.t_cljs$core$async26091(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26097 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26097 = (function (f,ch,meta26098){
this.f = f;
this.ch = ch;
this.meta26098 = meta26098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26099,meta26098__$1){
var self__ = this;
var _26099__$1 = this;
return (new cljs.core.async.t_cljs$core$async26097(self__.f,self__.ch,meta26098__$1));
});

cljs.core.async.t_cljs$core$async26097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26099){
var self__ = this;
var _26099__$1 = this;
return self__.meta26098;
});

cljs.core.async.t_cljs$core$async26097.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26097.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26097.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26097.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26097.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26097.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26097.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26098","meta26098",1541203661,null)], null);
});

cljs.core.async.t_cljs$core$async26097.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26097";

cljs.core.async.t_cljs$core$async26097.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async26097");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26097.
 */
cljs.core.async.__GT_t_cljs$core$async26097 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26097(f__$1,ch__$1,meta26098){
return (new cljs.core.async.t_cljs$core$async26097(f__$1,ch__$1,meta26098));
});

}

return (new cljs.core.async.t_cljs$core$async26097(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26100 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26100 = (function (p,ch,meta26101){
this.p = p;
this.ch = ch;
this.meta26101 = meta26101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26102,meta26101__$1){
var self__ = this;
var _26102__$1 = this;
return (new cljs.core.async.t_cljs$core$async26100(self__.p,self__.ch,meta26101__$1));
});

cljs.core.async.t_cljs$core$async26100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26102){
var self__ = this;
var _26102__$1 = this;
return self__.meta26101;
});

cljs.core.async.t_cljs$core$async26100.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26100.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26100.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26100.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26100.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26100.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26100.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26100.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26101","meta26101",647331714,null)], null);
});

cljs.core.async.t_cljs$core$async26100.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26100";

cljs.core.async.t_cljs$core$async26100.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async26100");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26100.
 */
cljs.core.async.__GT_t_cljs$core$async26100 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26100(p__$1,ch__$1,meta26101){
return (new cljs.core.async.t_cljs$core$async26100(p__$1,ch__$1,meta26101));
});

}

return (new cljs.core.async.t_cljs$core$async26100(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__26104 = arguments.length;
switch (G__26104) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24605__auto___26144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto___26144,out){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto___26144,out){
return (function (state_26125){
var state_val_26126 = (state_26125[(1)]);
if((state_val_26126 === (7))){
var inst_26121 = (state_26125[(2)]);
var state_26125__$1 = state_26125;
var statearr_26127_26145 = state_26125__$1;
(statearr_26127_26145[(2)] = inst_26121);

(statearr_26127_26145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26126 === (1))){
var state_26125__$1 = state_26125;
var statearr_26128_26146 = state_26125__$1;
(statearr_26128_26146[(2)] = null);

(statearr_26128_26146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26126 === (4))){
var inst_26107 = (state_26125[(7)]);
var inst_26107__$1 = (state_26125[(2)]);
var inst_26108 = (inst_26107__$1 == null);
var state_26125__$1 = (function (){var statearr_26129 = state_26125;
(statearr_26129[(7)] = inst_26107__$1);

return statearr_26129;
})();
if(cljs.core.truth_(inst_26108)){
var statearr_26130_26147 = state_26125__$1;
(statearr_26130_26147[(1)] = (5));

} else {
var statearr_26131_26148 = state_26125__$1;
(statearr_26131_26148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26126 === (6))){
var inst_26107 = (state_26125[(7)]);
var inst_26112 = p.call(null,inst_26107);
var state_26125__$1 = state_26125;
if(cljs.core.truth_(inst_26112)){
var statearr_26132_26149 = state_26125__$1;
(statearr_26132_26149[(1)] = (8));

} else {
var statearr_26133_26150 = state_26125__$1;
(statearr_26133_26150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26126 === (3))){
var inst_26123 = (state_26125[(2)]);
var state_26125__$1 = state_26125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26125__$1,inst_26123);
} else {
if((state_val_26126 === (2))){
var state_26125__$1 = state_26125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26125__$1,(4),ch);
} else {
if((state_val_26126 === (11))){
var inst_26115 = (state_26125[(2)]);
var state_26125__$1 = state_26125;
var statearr_26134_26151 = state_26125__$1;
(statearr_26134_26151[(2)] = inst_26115);

(statearr_26134_26151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26126 === (9))){
var state_26125__$1 = state_26125;
var statearr_26135_26152 = state_26125__$1;
(statearr_26135_26152[(2)] = null);

(statearr_26135_26152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26126 === (5))){
var inst_26110 = cljs.core.async.close_BANG_.call(null,out);
var state_26125__$1 = state_26125;
var statearr_26136_26153 = state_26125__$1;
(statearr_26136_26153[(2)] = inst_26110);

(statearr_26136_26153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26126 === (10))){
var inst_26118 = (state_26125[(2)]);
var state_26125__$1 = (function (){var statearr_26137 = state_26125;
(statearr_26137[(8)] = inst_26118);

return statearr_26137;
})();
var statearr_26138_26154 = state_26125__$1;
(statearr_26138_26154[(2)] = null);

(statearr_26138_26154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26126 === (8))){
var inst_26107 = (state_26125[(7)]);
var state_26125__$1 = state_26125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26125__$1,(11),out,inst_26107);
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
});})(c__24605__auto___26144,out))
;
return ((function (switch__24514__auto__,c__24605__auto___26144,out){
return (function() {
var cljs$core$async$state_machine__24515__auto__ = null;
var cljs$core$async$state_machine__24515__auto____0 = (function (){
var statearr_26139 = [null,null,null,null,null,null,null,null,null];
(statearr_26139[(0)] = cljs$core$async$state_machine__24515__auto__);

(statearr_26139[(1)] = (1));

return statearr_26139;
});
var cljs$core$async$state_machine__24515__auto____1 = (function (state_26125){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_26125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e26140){if((e26140 instanceof Object)){
var ex__24518__auto__ = e26140;
var statearr_26141_26155 = state_26125;
(statearr_26141_26155[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26156 = state_26125;
state_26125 = G__26156;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
cljs$core$async$state_machine__24515__auto__ = function(state_26125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24515__auto____1.call(this,state_26125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24515__auto____0;
cljs$core$async$state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24515__auto____1;
return cljs$core$async$state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto___26144,out))
})();
var state__24607__auto__ = (function (){var statearr_26142 = f__24606__auto__.call(null);
(statearr_26142[(6)] = c__24605__auto___26144);

return statearr_26142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto___26144,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26158 = arguments.length;
switch (G__26158) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24605__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto__){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto__){
return (function (state_26221){
var state_val_26222 = (state_26221[(1)]);
if((state_val_26222 === (7))){
var inst_26217 = (state_26221[(2)]);
var state_26221__$1 = state_26221;
var statearr_26223_26261 = state_26221__$1;
(statearr_26223_26261[(2)] = inst_26217);

(statearr_26223_26261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26222 === (20))){
var inst_26187 = (state_26221[(7)]);
var inst_26198 = (state_26221[(2)]);
var inst_26199 = cljs.core.next.call(null,inst_26187);
var inst_26173 = inst_26199;
var inst_26174 = null;
var inst_26175 = (0);
var inst_26176 = (0);
var state_26221__$1 = (function (){var statearr_26224 = state_26221;
(statearr_26224[(8)] = inst_26198);

(statearr_26224[(9)] = inst_26174);

(statearr_26224[(10)] = inst_26173);

(statearr_26224[(11)] = inst_26176);

(statearr_26224[(12)] = inst_26175);

return statearr_26224;
})();
var statearr_26225_26262 = state_26221__$1;
(statearr_26225_26262[(2)] = null);

(statearr_26225_26262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26222 === (1))){
var state_26221__$1 = state_26221;
var statearr_26226_26263 = state_26221__$1;
(statearr_26226_26263[(2)] = null);

(statearr_26226_26263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26222 === (4))){
var inst_26162 = (state_26221[(13)]);
var inst_26162__$1 = (state_26221[(2)]);
var inst_26163 = (inst_26162__$1 == null);
var state_26221__$1 = (function (){var statearr_26227 = state_26221;
(statearr_26227[(13)] = inst_26162__$1);

return statearr_26227;
})();
if(cljs.core.truth_(inst_26163)){
var statearr_26228_26264 = state_26221__$1;
(statearr_26228_26264[(1)] = (5));

} else {
var statearr_26229_26265 = state_26221__$1;
(statearr_26229_26265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26222 === (15))){
var state_26221__$1 = state_26221;
var statearr_26233_26266 = state_26221__$1;
(statearr_26233_26266[(2)] = null);

(statearr_26233_26266[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26222 === (21))){
var state_26221__$1 = state_26221;
var statearr_26234_26267 = state_26221__$1;
(statearr_26234_26267[(2)] = null);

(statearr_26234_26267[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26222 === (13))){
var inst_26174 = (state_26221[(9)]);
var inst_26173 = (state_26221[(10)]);
var inst_26176 = (state_26221[(11)]);
var inst_26175 = (state_26221[(12)]);
var inst_26183 = (state_26221[(2)]);
var inst_26184 = (inst_26176 + (1));
var tmp26230 = inst_26174;
var tmp26231 = inst_26173;
var tmp26232 = inst_26175;
var inst_26173__$1 = tmp26231;
var inst_26174__$1 = tmp26230;
var inst_26175__$1 = tmp26232;
var inst_26176__$1 = inst_26184;
var state_26221__$1 = (function (){var statearr_26235 = state_26221;
(statearr_26235[(14)] = inst_26183);

(statearr_26235[(9)] = inst_26174__$1);

(statearr_26235[(10)] = inst_26173__$1);

(statearr_26235[(11)] = inst_26176__$1);

(statearr_26235[(12)] = inst_26175__$1);

return statearr_26235;
})();
var statearr_26236_26268 = state_26221__$1;
(statearr_26236_26268[(2)] = null);

(statearr_26236_26268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26222 === (22))){
var state_26221__$1 = state_26221;
var statearr_26237_26269 = state_26221__$1;
(statearr_26237_26269[(2)] = null);

(statearr_26237_26269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26222 === (6))){
var inst_26162 = (state_26221[(13)]);
var inst_26171 = f.call(null,inst_26162);
var inst_26172 = cljs.core.seq.call(null,inst_26171);
var inst_26173 = inst_26172;
var inst_26174 = null;
var inst_26175 = (0);
var inst_26176 = (0);
var state_26221__$1 = (function (){var statearr_26238 = state_26221;
(statearr_26238[(9)] = inst_26174);

(statearr_26238[(10)] = inst_26173);

(statearr_26238[(11)] = inst_26176);

(statearr_26238[(12)] = inst_26175);

return statearr_26238;
})();
var statearr_26239_26270 = state_26221__$1;
(statearr_26239_26270[(2)] = null);

(statearr_26239_26270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26222 === (17))){
var inst_26187 = (state_26221[(7)]);
var inst_26191 = cljs.core.chunk_first.call(null,inst_26187);
var inst_26192 = cljs.core.chunk_rest.call(null,inst_26187);
var inst_26193 = cljs.core.count.call(null,inst_26191);
var inst_26173 = inst_26192;
var inst_26174 = inst_26191;
var inst_26175 = inst_26193;
var inst_26176 = (0);
var state_26221__$1 = (function (){var statearr_26240 = state_26221;
(statearr_26240[(9)] = inst_26174);

(statearr_26240[(10)] = inst_26173);

(statearr_26240[(11)] = inst_26176);

(statearr_26240[(12)] = inst_26175);

return statearr_26240;
})();
var statearr_26241_26271 = state_26221__$1;
(statearr_26241_26271[(2)] = null);

(statearr_26241_26271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26222 === (3))){
var inst_26219 = (state_26221[(2)]);
var state_26221__$1 = state_26221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26221__$1,inst_26219);
} else {
if((state_val_26222 === (12))){
var inst_26207 = (state_26221[(2)]);
var state_26221__$1 = state_26221;
var statearr_26242_26272 = state_26221__$1;
(statearr_26242_26272[(2)] = inst_26207);

(statearr_26242_26272[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26222 === (2))){
var state_26221__$1 = state_26221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26221__$1,(4),in$);
} else {
if((state_val_26222 === (23))){
var inst_26215 = (state_26221[(2)]);
var state_26221__$1 = state_26221;
var statearr_26243_26273 = state_26221__$1;
(statearr_26243_26273[(2)] = inst_26215);

(statearr_26243_26273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26222 === (19))){
var inst_26202 = (state_26221[(2)]);
var state_26221__$1 = state_26221;
var statearr_26244_26274 = state_26221__$1;
(statearr_26244_26274[(2)] = inst_26202);

(statearr_26244_26274[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26222 === (11))){
var inst_26187 = (state_26221[(7)]);
var inst_26173 = (state_26221[(10)]);
var inst_26187__$1 = cljs.core.seq.call(null,inst_26173);
var state_26221__$1 = (function (){var statearr_26245 = state_26221;
(statearr_26245[(7)] = inst_26187__$1);

return statearr_26245;
})();
if(inst_26187__$1){
var statearr_26246_26275 = state_26221__$1;
(statearr_26246_26275[(1)] = (14));

} else {
var statearr_26247_26276 = state_26221__$1;
(statearr_26247_26276[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26222 === (9))){
var inst_26209 = (state_26221[(2)]);
var inst_26210 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26221__$1 = (function (){var statearr_26248 = state_26221;
(statearr_26248[(15)] = inst_26209);

return statearr_26248;
})();
if(cljs.core.truth_(inst_26210)){
var statearr_26249_26277 = state_26221__$1;
(statearr_26249_26277[(1)] = (21));

} else {
var statearr_26250_26278 = state_26221__$1;
(statearr_26250_26278[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26222 === (5))){
var inst_26165 = cljs.core.async.close_BANG_.call(null,out);
var state_26221__$1 = state_26221;
var statearr_26251_26279 = state_26221__$1;
(statearr_26251_26279[(2)] = inst_26165);

(statearr_26251_26279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26222 === (14))){
var inst_26187 = (state_26221[(7)]);
var inst_26189 = cljs.core.chunked_seq_QMARK_.call(null,inst_26187);
var state_26221__$1 = state_26221;
if(inst_26189){
var statearr_26252_26280 = state_26221__$1;
(statearr_26252_26280[(1)] = (17));

} else {
var statearr_26253_26281 = state_26221__$1;
(statearr_26253_26281[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26222 === (16))){
var inst_26205 = (state_26221[(2)]);
var state_26221__$1 = state_26221;
var statearr_26254_26282 = state_26221__$1;
(statearr_26254_26282[(2)] = inst_26205);

(statearr_26254_26282[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26222 === (10))){
var inst_26174 = (state_26221[(9)]);
var inst_26176 = (state_26221[(11)]);
var inst_26181 = cljs.core._nth.call(null,inst_26174,inst_26176);
var state_26221__$1 = state_26221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26221__$1,(13),out,inst_26181);
} else {
if((state_val_26222 === (18))){
var inst_26187 = (state_26221[(7)]);
var inst_26196 = cljs.core.first.call(null,inst_26187);
var state_26221__$1 = state_26221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26221__$1,(20),out,inst_26196);
} else {
if((state_val_26222 === (8))){
var inst_26176 = (state_26221[(11)]);
var inst_26175 = (state_26221[(12)]);
var inst_26178 = (inst_26176 < inst_26175);
var inst_26179 = inst_26178;
var state_26221__$1 = state_26221;
if(cljs.core.truth_(inst_26179)){
var statearr_26255_26283 = state_26221__$1;
(statearr_26255_26283[(1)] = (10));

} else {
var statearr_26256_26284 = state_26221__$1;
(statearr_26256_26284[(1)] = (11));

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
});})(c__24605__auto__))
;
return ((function (switch__24514__auto__,c__24605__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24515__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24515__auto____0 = (function (){
var statearr_26257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26257[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24515__auto__);

(statearr_26257[(1)] = (1));

return statearr_26257;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24515__auto____1 = (function (state_26221){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_26221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e26258){if((e26258 instanceof Object)){
var ex__24518__auto__ = e26258;
var statearr_26259_26285 = state_26221;
(statearr_26259_26285[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26286 = state_26221;
state_26221 = G__26286;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24515__auto__ = function(state_26221){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24515__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24515__auto____1.call(this,state_26221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24515__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24515__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto__))
})();
var state__24607__auto__ = (function (){var statearr_26260 = f__24606__auto__.call(null);
(statearr_26260[(6)] = c__24605__auto__);

return statearr_26260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto__))
);

return c__24605__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26288 = arguments.length;
switch (G__26288) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__26291 = arguments.length;
switch (G__26291) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__26294 = arguments.length;
switch (G__26294) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24605__auto___26341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto___26341,out){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto___26341,out){
return (function (state_26318){
var state_val_26319 = (state_26318[(1)]);
if((state_val_26319 === (7))){
var inst_26313 = (state_26318[(2)]);
var state_26318__$1 = state_26318;
var statearr_26320_26342 = state_26318__$1;
(statearr_26320_26342[(2)] = inst_26313);

(statearr_26320_26342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (1))){
var inst_26295 = null;
var state_26318__$1 = (function (){var statearr_26321 = state_26318;
(statearr_26321[(7)] = inst_26295);

return statearr_26321;
})();
var statearr_26322_26343 = state_26318__$1;
(statearr_26322_26343[(2)] = null);

(statearr_26322_26343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (4))){
var inst_26298 = (state_26318[(8)]);
var inst_26298__$1 = (state_26318[(2)]);
var inst_26299 = (inst_26298__$1 == null);
var inst_26300 = cljs.core.not.call(null,inst_26299);
var state_26318__$1 = (function (){var statearr_26323 = state_26318;
(statearr_26323[(8)] = inst_26298__$1);

return statearr_26323;
})();
if(inst_26300){
var statearr_26324_26344 = state_26318__$1;
(statearr_26324_26344[(1)] = (5));

} else {
var statearr_26325_26345 = state_26318__$1;
(statearr_26325_26345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (6))){
var state_26318__$1 = state_26318;
var statearr_26326_26346 = state_26318__$1;
(statearr_26326_26346[(2)] = null);

(statearr_26326_26346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (3))){
var inst_26315 = (state_26318[(2)]);
var inst_26316 = cljs.core.async.close_BANG_.call(null,out);
var state_26318__$1 = (function (){var statearr_26327 = state_26318;
(statearr_26327[(9)] = inst_26315);

return statearr_26327;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26318__$1,inst_26316);
} else {
if((state_val_26319 === (2))){
var state_26318__$1 = state_26318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26318__$1,(4),ch);
} else {
if((state_val_26319 === (11))){
var inst_26298 = (state_26318[(8)]);
var inst_26307 = (state_26318[(2)]);
var inst_26295 = inst_26298;
var state_26318__$1 = (function (){var statearr_26328 = state_26318;
(statearr_26328[(10)] = inst_26307);

(statearr_26328[(7)] = inst_26295);

return statearr_26328;
})();
var statearr_26329_26347 = state_26318__$1;
(statearr_26329_26347[(2)] = null);

(statearr_26329_26347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (9))){
var inst_26298 = (state_26318[(8)]);
var state_26318__$1 = state_26318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26318__$1,(11),out,inst_26298);
} else {
if((state_val_26319 === (5))){
var inst_26298 = (state_26318[(8)]);
var inst_26295 = (state_26318[(7)]);
var inst_26302 = cljs.core._EQ_.call(null,inst_26298,inst_26295);
var state_26318__$1 = state_26318;
if(inst_26302){
var statearr_26331_26348 = state_26318__$1;
(statearr_26331_26348[(1)] = (8));

} else {
var statearr_26332_26349 = state_26318__$1;
(statearr_26332_26349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (10))){
var inst_26310 = (state_26318[(2)]);
var state_26318__$1 = state_26318;
var statearr_26333_26350 = state_26318__$1;
(statearr_26333_26350[(2)] = inst_26310);

(statearr_26333_26350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26319 === (8))){
var inst_26295 = (state_26318[(7)]);
var tmp26330 = inst_26295;
var inst_26295__$1 = tmp26330;
var state_26318__$1 = (function (){var statearr_26334 = state_26318;
(statearr_26334[(7)] = inst_26295__$1);

return statearr_26334;
})();
var statearr_26335_26351 = state_26318__$1;
(statearr_26335_26351[(2)] = null);

(statearr_26335_26351[(1)] = (2));


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
});})(c__24605__auto___26341,out))
;
return ((function (switch__24514__auto__,c__24605__auto___26341,out){
return (function() {
var cljs$core$async$state_machine__24515__auto__ = null;
var cljs$core$async$state_machine__24515__auto____0 = (function (){
var statearr_26336 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26336[(0)] = cljs$core$async$state_machine__24515__auto__);

(statearr_26336[(1)] = (1));

return statearr_26336;
});
var cljs$core$async$state_machine__24515__auto____1 = (function (state_26318){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_26318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e26337){if((e26337 instanceof Object)){
var ex__24518__auto__ = e26337;
var statearr_26338_26352 = state_26318;
(statearr_26338_26352[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26353 = state_26318;
state_26318 = G__26353;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
cljs$core$async$state_machine__24515__auto__ = function(state_26318){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24515__auto____1.call(this,state_26318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24515__auto____0;
cljs$core$async$state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24515__auto____1;
return cljs$core$async$state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto___26341,out))
})();
var state__24607__auto__ = (function (){var statearr_26339 = f__24606__auto__.call(null);
(statearr_26339[(6)] = c__24605__auto___26341);

return statearr_26339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto___26341,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26355 = arguments.length;
switch (G__26355) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24605__auto___26421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto___26421,out){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto___26421,out){
return (function (state_26393){
var state_val_26394 = (state_26393[(1)]);
if((state_val_26394 === (7))){
var inst_26389 = (state_26393[(2)]);
var state_26393__$1 = state_26393;
var statearr_26395_26422 = state_26393__$1;
(statearr_26395_26422[(2)] = inst_26389);

(statearr_26395_26422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26394 === (1))){
var inst_26356 = (new Array(n));
var inst_26357 = inst_26356;
var inst_26358 = (0);
var state_26393__$1 = (function (){var statearr_26396 = state_26393;
(statearr_26396[(7)] = inst_26358);

(statearr_26396[(8)] = inst_26357);

return statearr_26396;
})();
var statearr_26397_26423 = state_26393__$1;
(statearr_26397_26423[(2)] = null);

(statearr_26397_26423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26394 === (4))){
var inst_26361 = (state_26393[(9)]);
var inst_26361__$1 = (state_26393[(2)]);
var inst_26362 = (inst_26361__$1 == null);
var inst_26363 = cljs.core.not.call(null,inst_26362);
var state_26393__$1 = (function (){var statearr_26398 = state_26393;
(statearr_26398[(9)] = inst_26361__$1);

return statearr_26398;
})();
if(inst_26363){
var statearr_26399_26424 = state_26393__$1;
(statearr_26399_26424[(1)] = (5));

} else {
var statearr_26400_26425 = state_26393__$1;
(statearr_26400_26425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26394 === (15))){
var inst_26383 = (state_26393[(2)]);
var state_26393__$1 = state_26393;
var statearr_26401_26426 = state_26393__$1;
(statearr_26401_26426[(2)] = inst_26383);

(statearr_26401_26426[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26394 === (13))){
var state_26393__$1 = state_26393;
var statearr_26402_26427 = state_26393__$1;
(statearr_26402_26427[(2)] = null);

(statearr_26402_26427[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26394 === (6))){
var inst_26358 = (state_26393[(7)]);
var inst_26379 = (inst_26358 > (0));
var state_26393__$1 = state_26393;
if(cljs.core.truth_(inst_26379)){
var statearr_26403_26428 = state_26393__$1;
(statearr_26403_26428[(1)] = (12));

} else {
var statearr_26404_26429 = state_26393__$1;
(statearr_26404_26429[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26394 === (3))){
var inst_26391 = (state_26393[(2)]);
var state_26393__$1 = state_26393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26393__$1,inst_26391);
} else {
if((state_val_26394 === (12))){
var inst_26357 = (state_26393[(8)]);
var inst_26381 = cljs.core.vec.call(null,inst_26357);
var state_26393__$1 = state_26393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26393__$1,(15),out,inst_26381);
} else {
if((state_val_26394 === (2))){
var state_26393__$1 = state_26393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26393__$1,(4),ch);
} else {
if((state_val_26394 === (11))){
var inst_26373 = (state_26393[(2)]);
var inst_26374 = (new Array(n));
var inst_26357 = inst_26374;
var inst_26358 = (0);
var state_26393__$1 = (function (){var statearr_26405 = state_26393;
(statearr_26405[(7)] = inst_26358);

(statearr_26405[(8)] = inst_26357);

(statearr_26405[(10)] = inst_26373);

return statearr_26405;
})();
var statearr_26406_26430 = state_26393__$1;
(statearr_26406_26430[(2)] = null);

(statearr_26406_26430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26394 === (9))){
var inst_26357 = (state_26393[(8)]);
var inst_26371 = cljs.core.vec.call(null,inst_26357);
var state_26393__$1 = state_26393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26393__$1,(11),out,inst_26371);
} else {
if((state_val_26394 === (5))){
var inst_26358 = (state_26393[(7)]);
var inst_26366 = (state_26393[(11)]);
var inst_26357 = (state_26393[(8)]);
var inst_26361 = (state_26393[(9)]);
var inst_26365 = (inst_26357[inst_26358] = inst_26361);
var inst_26366__$1 = (inst_26358 + (1));
var inst_26367 = (inst_26366__$1 < n);
var state_26393__$1 = (function (){var statearr_26407 = state_26393;
(statearr_26407[(11)] = inst_26366__$1);

(statearr_26407[(12)] = inst_26365);

return statearr_26407;
})();
if(cljs.core.truth_(inst_26367)){
var statearr_26408_26431 = state_26393__$1;
(statearr_26408_26431[(1)] = (8));

} else {
var statearr_26409_26432 = state_26393__$1;
(statearr_26409_26432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26394 === (14))){
var inst_26386 = (state_26393[(2)]);
var inst_26387 = cljs.core.async.close_BANG_.call(null,out);
var state_26393__$1 = (function (){var statearr_26411 = state_26393;
(statearr_26411[(13)] = inst_26386);

return statearr_26411;
})();
var statearr_26412_26433 = state_26393__$1;
(statearr_26412_26433[(2)] = inst_26387);

(statearr_26412_26433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26394 === (10))){
var inst_26377 = (state_26393[(2)]);
var state_26393__$1 = state_26393;
var statearr_26413_26434 = state_26393__$1;
(statearr_26413_26434[(2)] = inst_26377);

(statearr_26413_26434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26394 === (8))){
var inst_26366 = (state_26393[(11)]);
var inst_26357 = (state_26393[(8)]);
var tmp26410 = inst_26357;
var inst_26357__$1 = tmp26410;
var inst_26358 = inst_26366;
var state_26393__$1 = (function (){var statearr_26414 = state_26393;
(statearr_26414[(7)] = inst_26358);

(statearr_26414[(8)] = inst_26357__$1);

return statearr_26414;
})();
var statearr_26415_26435 = state_26393__$1;
(statearr_26415_26435[(2)] = null);

(statearr_26415_26435[(1)] = (2));


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
});})(c__24605__auto___26421,out))
;
return ((function (switch__24514__auto__,c__24605__auto___26421,out){
return (function() {
var cljs$core$async$state_machine__24515__auto__ = null;
var cljs$core$async$state_machine__24515__auto____0 = (function (){
var statearr_26416 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26416[(0)] = cljs$core$async$state_machine__24515__auto__);

(statearr_26416[(1)] = (1));

return statearr_26416;
});
var cljs$core$async$state_machine__24515__auto____1 = (function (state_26393){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_26393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e26417){if((e26417 instanceof Object)){
var ex__24518__auto__ = e26417;
var statearr_26418_26436 = state_26393;
(statearr_26418_26436[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26437 = state_26393;
state_26393 = G__26437;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
cljs$core$async$state_machine__24515__auto__ = function(state_26393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24515__auto____1.call(this,state_26393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24515__auto____0;
cljs$core$async$state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24515__auto____1;
return cljs$core$async$state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto___26421,out))
})();
var state__24607__auto__ = (function (){var statearr_26419 = f__24606__auto__.call(null);
(statearr_26419[(6)] = c__24605__auto___26421);

return statearr_26419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto___26421,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26439 = arguments.length;
switch (G__26439) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24605__auto___26509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24605__auto___26509,out){
return (function (){
var f__24606__auto__ = (function (){var switch__24514__auto__ = ((function (c__24605__auto___26509,out){
return (function (state_26481){
var state_val_26482 = (state_26481[(1)]);
if((state_val_26482 === (7))){
var inst_26477 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
var statearr_26483_26510 = state_26481__$1;
(statearr_26483_26510[(2)] = inst_26477);

(statearr_26483_26510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (1))){
var inst_26440 = [];
var inst_26441 = inst_26440;
var inst_26442 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26481__$1 = (function (){var statearr_26484 = state_26481;
(statearr_26484[(7)] = inst_26441);

(statearr_26484[(8)] = inst_26442);

return statearr_26484;
})();
var statearr_26485_26511 = state_26481__$1;
(statearr_26485_26511[(2)] = null);

(statearr_26485_26511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (4))){
var inst_26445 = (state_26481[(9)]);
var inst_26445__$1 = (state_26481[(2)]);
var inst_26446 = (inst_26445__$1 == null);
var inst_26447 = cljs.core.not.call(null,inst_26446);
var state_26481__$1 = (function (){var statearr_26486 = state_26481;
(statearr_26486[(9)] = inst_26445__$1);

return statearr_26486;
})();
if(inst_26447){
var statearr_26487_26512 = state_26481__$1;
(statearr_26487_26512[(1)] = (5));

} else {
var statearr_26488_26513 = state_26481__$1;
(statearr_26488_26513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (15))){
var inst_26471 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
var statearr_26489_26514 = state_26481__$1;
(statearr_26489_26514[(2)] = inst_26471);

(statearr_26489_26514[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (13))){
var state_26481__$1 = state_26481;
var statearr_26490_26515 = state_26481__$1;
(statearr_26490_26515[(2)] = null);

(statearr_26490_26515[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (6))){
var inst_26441 = (state_26481[(7)]);
var inst_26466 = inst_26441.length;
var inst_26467 = (inst_26466 > (0));
var state_26481__$1 = state_26481;
if(cljs.core.truth_(inst_26467)){
var statearr_26491_26516 = state_26481__$1;
(statearr_26491_26516[(1)] = (12));

} else {
var statearr_26492_26517 = state_26481__$1;
(statearr_26492_26517[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (3))){
var inst_26479 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26481__$1,inst_26479);
} else {
if((state_val_26482 === (12))){
var inst_26441 = (state_26481[(7)]);
var inst_26469 = cljs.core.vec.call(null,inst_26441);
var state_26481__$1 = state_26481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26481__$1,(15),out,inst_26469);
} else {
if((state_val_26482 === (2))){
var state_26481__$1 = state_26481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26481__$1,(4),ch);
} else {
if((state_val_26482 === (11))){
var inst_26445 = (state_26481[(9)]);
var inst_26449 = (state_26481[(10)]);
var inst_26459 = (state_26481[(2)]);
var inst_26460 = [];
var inst_26461 = inst_26460.push(inst_26445);
var inst_26441 = inst_26460;
var inst_26442 = inst_26449;
var state_26481__$1 = (function (){var statearr_26493 = state_26481;
(statearr_26493[(7)] = inst_26441);

(statearr_26493[(8)] = inst_26442);

(statearr_26493[(11)] = inst_26461);

(statearr_26493[(12)] = inst_26459);

return statearr_26493;
})();
var statearr_26494_26518 = state_26481__$1;
(statearr_26494_26518[(2)] = null);

(statearr_26494_26518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (9))){
var inst_26441 = (state_26481[(7)]);
var inst_26457 = cljs.core.vec.call(null,inst_26441);
var state_26481__$1 = state_26481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26481__$1,(11),out,inst_26457);
} else {
if((state_val_26482 === (5))){
var inst_26445 = (state_26481[(9)]);
var inst_26442 = (state_26481[(8)]);
var inst_26449 = (state_26481[(10)]);
var inst_26449__$1 = f.call(null,inst_26445);
var inst_26450 = cljs.core._EQ_.call(null,inst_26449__$1,inst_26442);
var inst_26451 = cljs.core.keyword_identical_QMARK_.call(null,inst_26442,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26452 = ((inst_26450) || (inst_26451));
var state_26481__$1 = (function (){var statearr_26495 = state_26481;
(statearr_26495[(10)] = inst_26449__$1);

return statearr_26495;
})();
if(cljs.core.truth_(inst_26452)){
var statearr_26496_26519 = state_26481__$1;
(statearr_26496_26519[(1)] = (8));

} else {
var statearr_26497_26520 = state_26481__$1;
(statearr_26497_26520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (14))){
var inst_26474 = (state_26481[(2)]);
var inst_26475 = cljs.core.async.close_BANG_.call(null,out);
var state_26481__$1 = (function (){var statearr_26499 = state_26481;
(statearr_26499[(13)] = inst_26474);

return statearr_26499;
})();
var statearr_26500_26521 = state_26481__$1;
(statearr_26500_26521[(2)] = inst_26475);

(statearr_26500_26521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (10))){
var inst_26464 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
var statearr_26501_26522 = state_26481__$1;
(statearr_26501_26522[(2)] = inst_26464);

(statearr_26501_26522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (8))){
var inst_26441 = (state_26481[(7)]);
var inst_26445 = (state_26481[(9)]);
var inst_26449 = (state_26481[(10)]);
var inst_26454 = inst_26441.push(inst_26445);
var tmp26498 = inst_26441;
var inst_26441__$1 = tmp26498;
var inst_26442 = inst_26449;
var state_26481__$1 = (function (){var statearr_26502 = state_26481;
(statearr_26502[(7)] = inst_26441__$1);

(statearr_26502[(14)] = inst_26454);

(statearr_26502[(8)] = inst_26442);

return statearr_26502;
})();
var statearr_26503_26523 = state_26481__$1;
(statearr_26503_26523[(2)] = null);

(statearr_26503_26523[(1)] = (2));


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
});})(c__24605__auto___26509,out))
;
return ((function (switch__24514__auto__,c__24605__auto___26509,out){
return (function() {
var cljs$core$async$state_machine__24515__auto__ = null;
var cljs$core$async$state_machine__24515__auto____0 = (function (){
var statearr_26504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26504[(0)] = cljs$core$async$state_machine__24515__auto__);

(statearr_26504[(1)] = (1));

return statearr_26504;
});
var cljs$core$async$state_machine__24515__auto____1 = (function (state_26481){
while(true){
var ret_value__24516__auto__ = (function (){try{while(true){
var result__24517__auto__ = switch__24514__auto__.call(null,state_26481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24517__auto__;
}
break;
}
}catch (e26505){if((e26505 instanceof Object)){
var ex__24518__auto__ = e26505;
var statearr_26506_26524 = state_26481;
(statearr_26506_26524[(5)] = ex__24518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26525 = state_26481;
state_26481 = G__26525;
continue;
} else {
return ret_value__24516__auto__;
}
break;
}
});
cljs$core$async$state_machine__24515__auto__ = function(state_26481){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24515__auto____1.call(this,state_26481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24515__auto____0;
cljs$core$async$state_machine__24515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24515__auto____1;
return cljs$core$async$state_machine__24515__auto__;
})()
;})(switch__24514__auto__,c__24605__auto___26509,out))
})();
var state__24607__auto__ = (function (){var statearr_26507 = f__24606__auto__.call(null);
(statearr_26507[(6)] = c__24605__auto___26509);

return statearr_26507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24607__auto__);
});})(c__24605__auto___26509,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1538771239511
