(this.webpackJsonpdeal=this.webpackJsonpdeal||[]).push([[4],{161:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}r.d(e,"a",(function(){return n}))},164:function(t,e,r){"use strict";var n=r(0),o=r.n(n),i=r(1),a=r.n(i),c=r(17),u=r.n(c),p=r(22),s=r.n(p),f=r(39),h=r(52),l=r.n(h),y={},b=0,m=function(t){var e=t,r=y[e]||(y[e]={});if(r[t])return r[t];var n=l.a.compile(t);return b<1e4&&(r[t]=n,b++),n},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("/"===t)return t;var r=m(t);return r(e,{pretty:!0})},O=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function j(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}var g=function(t){function e(){return v(this,e),j(this,t.apply(this,arguments))}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},e.prototype.componentWillMount=function(){s()(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},e.prototype.componentDidMount=function(){this.isStatic()||this.perform()},e.prototype.componentDidUpdate=function(t){var e=Object(f.b)(t.to),r=Object(f.b)(this.props.to);Object(f.c)(e,r)?u()(!1,"You tried to redirect to the same route you're currently on: \""+r.pathname+r.search+'"'):this.perform()},e.prototype.computeTo=function(t){var e=t.computedMatch,r=t.to;return e?"string"===typeof r?d(r,e.params):O({},r,{pathname:d(r.pathname,e.params)}):r},e.prototype.perform=function(){var t=this.context.router.history,e=this.props.push,r=this.computeTo(this.props);e?t.push(r):t.replace(r)},e.prototype.render=function(){return null},e}(o.a.Component);g.propTypes={computedMatch:a.a.object,push:a.a.bool,from:a.a.string,to:a.a.oneOfType([a.a.string,a.a.object]).isRequired},g.defaultProps={push:!1},g.contextTypes={router:a.a.shape({history:a.a.shape({push:a.a.func.isRequired,replace:a.a.func.isRequired}).isRequired,staticContext:a.a.object}).isRequired};var w=g;e.a=w},165:function(t,e,r){"use strict";r.r(e);var n=r(161),o=r(0),i=r.n(o),a=r(23),c=r(164),u=r(158),p=["isAuthenticated","component"];e.default=Object(a.b)((function(t){return{isAuthenticated:!!t.auth.isAuthenticated}}))((function(t){var e=t.isAuthenticated,r=t.component,o=Object(n.a)(t,p);return e?i.a.createElement(c.a,{to:"/home",replace:!0}):i.a.createElement(u.a,Object.assign({},o,{component:function(t){return i.a.createElement(r,t)}}))}))}}]);
//# sourceMappingURL=4.f8b2957e.chunk.js.map