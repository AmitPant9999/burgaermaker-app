webpackJsonp([2],{142:function(e,r,n){"use strict";function t(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function o(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?e:r}function i(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var a=n(0),s=n.n(a),c=n(154),p=n(4),u=n(9),d=n(46),l=function(){function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}(),f=function(e){function r(){return t(this,r),o(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return i(r,e),l(r,[{key:"componentDidMount",value:function(){this.props.fetchOrder(this.props.token,this.props.userid)}},{key:"render",value:function(){var e=s.a.createElement(d.a,null);return!1===this.props.loading&&(e=this.props.orders.map(function(e,r){return s.a.createElement(c.a,{key:e.id,ind:e.indegridents,price:e.totalPrice})})),this.props.err&&(e=s.a.createElement("h1",null,"Failed To Fetch Your Orders.Make Sure You are Sign In.")),s.a.createElement("div",{style:{padding:"50px 0 0 0"}},e)}}]),r}(a.Component),b=function(e){return{orders:e.fetchOrder.orders,loading:e.fetchOrder.loading,err:e.fetchOrder.err,token:e.auth.token,userid:e.auth.userID}},A=function(e){return{fetchOrder:function(r,n){e(u.b(r,n))}}};r.default=Object(p.b)(b,A)(f)},154:function(e,r,n){"use strict";var t=n(0),o=n.n(t),i=n(155),a=n.n(i),s=function(e){var r=[];for(var n in e.ind)r.push({name:n,number:e.ind[n]});var t=r.map(function(e,r){return o.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid grey",padding:"5px"},key:e.name},e.name,": (",e.number,")")});return o.a.createElement("div",{className:a.a.Order},o.a.createElement("p",null,"Indegridents: ",t),o.a.createElement("p",null,"Price: ",o.a.createElement("strong",null,"USD ",e.price)))};r.a=s},155:function(e,r,n){var t=n(156);"string"===typeof t&&(t=[[e.i,t,""]]);var o={hmr:!1};o.transform=void 0;n(139)(t,o);t.locals&&(e.exports=t.locals)},156:function(e,r,n){r=e.exports=n(138)(!0),r.push([e.i,".Order__Order__1OV5e{width:100%;border:1px solid #eee;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;padding:10px;margin:10px auto;-webkit-box-sizing:border-box;box-sizing:border-box}","",{version:3,sources:["C:/Users/santosh/Desktop/WebDevelopment/Advance REACT/burger-builder-app/src/Components/Checkout Components/Order/Order.css"],names:[],mappings:"AAAA,qBACI,WAAY,AACZ,sBAAuB,AACvB,kCAAqC,AAC7B,0BAA6B,AACrC,aAAc,AACd,iBAAkB,AAClB,8BAA+B,AACvB,qBAAuB,CAClC",file:"Order.css",sourcesContent:[".Order{\r\n    width: 100%;\r\n    border: 1px solid #eee;\r\n    -webkit-box-shadow: 0px 2px 3px #ccc;\r\n            box-shadow: 0px 2px 3px #ccc;\r\n    padding: 10px;\r\n    margin: 10px auto;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n"],sourceRoot:""}]),r.locals={Order:"Order__Order__1OV5e"}}});
//# sourceMappingURL=2.9b829196.chunk.js.map