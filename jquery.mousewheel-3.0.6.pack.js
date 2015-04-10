
<!-- saved from url=(0083)https://jquerymousewheel306pack2.googlecode.com/svn/jquery.mousewheel-3.0.6.pack.js -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(d){function e(a){var b=a||window.event,c=[].slice.call(arguments,1),f=0,e=0,g=0,a=d.event.fix(b);a.type="mousewheel";b.wheelDelta&amp;&amp;(f=b.wheelDelta/120);b.detail&amp;&amp;(f=-b.detail/3);g=f;b.axis!==void 0&amp;&amp;b.axis===b.HORIZONTAL_AXIS&amp;&amp;(g=0,e=-1*f);b.wheelDeltaY!==void 0&amp;&amp;(g=b.wheelDeltaY/120);b.wheelDeltaX!==void 0&amp;&amp;(e=-1*b.wheelDeltaX/120);c.unshift(a,f,e,g);return(d.event.dispatch||d.event.handle).apply(this,c)}var c=["DOMMouseScroll","mousewheel"];if(d.event.fixHooks)for(var h=c.length;h;)d.event.fixHooks[c[--h]]=
d.event.mouseHooks;d.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=c.length;a;)this.addEventListener(c[--a],e,false);else this.onmousewheel=e},teardown:function(){if(this.removeEventListener)for(var a=c.length;a;)this.removeEventListener(c[--a],e,false);else this.onmousewheel=null}};d.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);</pre></body></html>