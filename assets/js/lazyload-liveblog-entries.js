(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
!function(e){LiveblogLazyloader=function(){var t=this;return t.$el=e("#liveblog-entries"),t.options={},t.entries=[],t.init=function(e){t.options=e,setTimeout(t.loadMore)},t.loadMore=function(){e.get(t.ajaxRequestUrl(),{},function(e){t.entries=e.entries.reverse(),t.renderEntriesPage()})},t.renderEntriesPage=function(){var i=t.entries.slice(0,t.postsPerPage);t.entries=t.entries.slice(t.postsPerPage),e.each(i,function(i,n){var o=e(n.html).appendTo(t.$el),r=o.data("timestamp");r<t.options.earliest_timestamp&&(t.options.earliest_timestamp=r-1)}),t.entries.length&&setTimeout(t.renderEntriesPage)},t.ajaxRequestUrl=function(){return[t.options.permalink,t.options.liveblog_endpoint,"/","0","/",t.options.earliest_timestamp-1,"/"].join("")},"undefined"!=typeof liveblogInit&&t.init(liveblogInit),t}}(jQuery);


},{}]},{},[1]);
