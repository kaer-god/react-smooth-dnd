!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("smooth-dnd"),require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["smooth-dnd","prop-types","react"],t):"object"==typeof exports?exports.ReactSmoothDnD=t(require("smooth-dnd"),require("prop-types"),require("react")):e.ReactSmoothDnD=t(e.SmoothDND,e.PropTypes,e.React)}(window,function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(3),a=c(i),u=c(n(2));function c(e){return e&&e.__esModule?e:{default:e}}var l=n(1).constants.wrapperClass,s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),o(t,[{key:"render",value:function(){var e=this.props.className?this.props.className+" ":"";return a.default.createElement("div",r({},this.props,{className:""+e+l}),this.props.children)}}]),t}();s.propTypes={payload:u.default.object},t.default=s},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(3),i=l(o),a=l(n(2)),u=n(1),c=l(u);l(n(0));function l(e){return e&&e.__esModule?e:{default:e}}c.default.dropHandler=u.dropHandlers.reactDropHandler().handler,c.default.wrapChild=function(e){return e};var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getContainerOptions=n.getContainerOptions.bind(n),n.prevContainer=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){this.prevContainer=this.containerDiv,this.container=(0,c.default)(this.containerDiv,this.getContainerOptions(this.props))}},{key:"componentWillUnmount",value:function(){this.container.dispose(),this.container=null}},{key:"componentDidUpdate",value:function(){this.containerDiv&&this.prevContainer&&this.prevContainer!==this.containerDiv&&(this.container.dispose(),this.container=(0,c.default)(this.containerDiv,this.getContainerOptions(this.props)),this.prevContainer=this.containerDiv)}},{key:"render",value:function(){var e=this;return i.default.createElement("div",{style:this.props.style,ref:function(t){e.containerDiv=t}},this.props.children)}},{key:"getContainerOptions",value:function(e){return Object.assign({},e)}}]),t}();s.propTypes={behaviour:a.default.oneOf(["move","copy","drag-zone"]),groupName:a.default.string,orientation:a.default.oneOf(["horizontal","vertical"]),style:a.default.object,dragHandleSelector:a.default.string,nonDragAreaSelector:a.default.string,dragBeginDelay:a.default.number,animationDuration:a.default.number,autoScrollEnabled:a.default.string,lockAxis:a.default.string,dragClass:a.default.string,dropClass:a.default.string,onDragStart:a.default.func,onDrop:a.default.func,getChildPayload:a.default.func,shouldAnimateDrop:a.default.func,shouldAcceptDrop:a.default.func,onDragEnter:a.default.func,onDragLeave:a.default.func},s.defaultProps={behaviour:"move",orientation:"vertical"},t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Draggable=t.Container=void 0;var r=i(n(4)),o=i(n(0));function i(e){return e&&e.__esModule?e:{default:e}}t.Container=r.default,t.Draggable=o.default}])});