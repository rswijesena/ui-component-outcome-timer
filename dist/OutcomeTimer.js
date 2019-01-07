!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}(n(1))},function(t,e,n){"use strict";function o(){var t=[];for(var e in manywho.OutcomeTimers){var n=manywho.OutcomeTimers[e];n&&t.push(r(n))}Promise.all(t)}function r(t){return t.startCounting(),!0}var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0}),manywho.OutcomeTimers={},manywho.CustomComponentOrchestrator?manywho.CustomComponentOrchestrator.doneSendHandlers.push(o):manywho.settings.initialize({},{invoke:{done:o}});var s=n(2);n(3);var u=function(t){function e(e){var n=t.call(this,e)||this;n.componentId="",n.flowKey="",n.attributes=new Map,n.timerId=-1,n.timerCounter=0,n.componentId=e.id,n.flowKey=e.flowKey;var o=manywho.model.getComponent(n.componentId,n.flowKey);if(o.attributes)for(var r in o.attributes)n.attributes.set(r,o.attributes[r]);return o.objectData&&o.objectData[0]&&manywho.state.setComponent(n.componentId,{objectData:[o.objectData[0]]},n.flowKey,!0),n}return i(e,t),e.prototype.getAttribute=function(t,e){return this.attributes.has(t)?this.attributes.get(t):e},e.prototype.componentDidMount=function(){manywho.OutcomeTimers[this.componentId]=this,this.startCounting()},e.prototype.componentWillUnmount=function(){clearInterval(this.timerId),this.timerId=-1},e.prototype.startCounting=function(){this.timerCounter=0,this.timerId=window.setInterval(this.timerHandler.bind(this),1e3)},e.prototype.timerHandler=function(){if(manywho.state.getComponent(this.componentId,this.flowKey).loading)this.timerCounter=0,this.forceUpdate();else if(this.timerCounter<parseInt(this.getAttribute("refreshIntervalSeconds",10)))this.timerCounter++,this.forceUpdate();else{this.timerCounter=0,this.timerId>=-1&&(clearInterval(this.timerId),this.timerId=-1);var t=this.getAttribute("refreshOutcomeId","");if(t&&t.length>0&&"null"!=t.toLowerCase()){var e=manywho.model.getOutcome(t,this.flowKey);return!e||manywho.component.onOutcome(e,null,this.flowKey)}}},e.prototype.render=function(){var t=parseInt(this.getAttribute("refreshIntervalSeconds",10))-this.timerCounter;return s.createElement("div",null,"Triggering outcome in ",t," seconds")},e}(s.Component);manywho.component.register("OutcomeTimer",u),e.default=u},function(t,e){t.exports=React},function(t,e){}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vT3V0Y29tZVRpbWVyLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhM2VjZDhkNmFmYjE2OGFhNDFlMyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9PdXRjb21lVGltZXIudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiXSwibmFtZXMiOlsibW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImluc3RhbGxlZE1vZHVsZXMiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJnZXQiLCJuIiwiX19lc01vZHVsZSIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsInZhbHVlIiwiZG9uZUhhbmRsZXIiLCJwcm9taXNlcyIsImtleSIsIm1hbnl3aG8iLCJPdXRjb21lVGltZXJzIiwidGltZXIiLCJwdXNoIiwidHJpZ2dlclRpbWVyIiwiUHJvbWlzZSIsImFsbCIsInN0YXJ0Q291bnRpbmciLCJfX2V4dGVuZHMiLCJ0aGlzIiwiZXh0ZW5kU3RhdGljcyIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiQXJyYXkiLCJiIiwiX18iLCJjb25zdHJ1Y3RvciIsImNyZWF0ZSIsIkN1c3RvbUNvbXBvbmVudE9yY2hlc3RyYXRvciIsImRvbmVTZW5kSGFuZGxlcnMiLCJzZXR0aW5ncyIsImluaXRpYWxpemUiLCJpbnZva2UiLCJkb25lIiwiUmVhY3QiLCJPdXRjb21lVGltZXIiLCJfc3VwZXIiLCJwcm9wcyIsIl90aGlzIiwiY29tcG9uZW50SWQiLCJmbG93S2V5IiwiYXR0cmlidXRlcyIsIk1hcCIsInRpbWVySWQiLCJ0aW1lckNvdW50ZXIiLCJpZCIsImZsb3dNb2RlbCIsIm1vZGVsIiwiZ2V0Q29tcG9uZW50Iiwic2V0Iiwib2JqZWN0RGF0YSIsInN0YXRlIiwic2V0Q29tcG9uZW50IiwiZ2V0QXR0cmlidXRlIiwiYXR0cmlidXRlTmFtZSIsImRlZmF1bHRWYWx1ZSIsImhhcyIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjbGVhckludGVydmFsIiwid2luZG93Iiwic2V0SW50ZXJ2YWwiLCJ0aW1lckhhbmRsZXIiLCJiaW5kIiwibG9hZGluZyIsImZvcmNlVXBkYXRlIiwicGFyc2VJbnQiLCJvdXRjb21lVG9UcmlnZ2VyIiwibGVuZ3RoIiwidG9Mb3dlckNhc2UiLCJvdXRjb21lIiwiZ2V0T3V0Y29tZSIsImNvbXBvbmVudCIsIm9uT3V0Y29tZSIsInJlbmRlciIsInJlbWFpbmluZyIsImNyZWF0ZUVsZW1lbnQiLCJDb21wb25lbnQiLCJyZWdpc3RlciIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiJDQUFTLFNBQVVBLEdDSW5CLFFBQUFDLEdBQUFDLEdBR0EsR0FBQUMsRUFBQUQsR0FDQSxNQUFBQyxHQUFBRCxHQUFBRSxPQUdBLElBQUFDLEdBQUFGLEVBQUFELElBQ0FJLEVBQUFKLEVBQ0FLLEdBQUEsRUFDQUgsV0FVQSxPQU5BSixHQUFBRSxHQUFBTSxLQUFBSCxFQUFBRCxRQUFBQyxJQUFBRCxRQUFBSCxHQUdBSSxFQUFBRSxHQUFBLEVBR0FGLEVBQUFELFFBdkJBLEdBQUFELEtBNEJBRixHQUFBUSxFQUFBVCxFQUdBQyxFQUFBUyxFQUFBUCxFQUdBRixFQUFBVSxFQUFBLFNBQUFQLEVBQUFRLEVBQUFDLEdBQ0FaLEVBQUFhLEVBQUFWLEVBQUFRLElBQ0FHLE9BQUFDLGVBQUFaLEVBQUFRLEdBQ0FLLGNBQUEsRUFDQUMsWUFBQSxFQUNBQyxJQUFBTixLQU1BWixFQUFBbUIsRUFBQSxTQUFBZixHQUNBLEdBQUFRLEdBQUFSLEtBQUFnQixXQUNBLFdBQTJCLE1BQUFoQixHQUFBLFNBQzNC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OU54QkMsRUFBQUQsUUFBQW9ELE9Kb09NLFNBQVVuRCxFQUFRRCIsImZpbGUiOiJPdXRjb21lVGltZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbl9fZXhwb3J0KF9fd2VicGFja19yZXF1aXJlX18oMSkpO1xyXG5cblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbm1hbnl3aG8uT3V0Y29tZVRpbWVycyA9IHt9O1xyXG4vLyB0aGlzIGF0dGFjaGVzIHRoZSBBamF4IGhhbmRsZXJzIHRvIHRoZSBtYW55d2hvLkN1c3RvbUNvbXBvbmVudE9yY2hlc3RyYXRvciBvciBcclxuLy8gaW5pdGlhbGl6ZSBmdW5jdGlvbiBpZiBtYW55d2hvLkN1c3RvbUNvbXBvbmVudE9yY2hlc3RyYXRvciBpc250IGRlZmluZWQuICBcclxuaWYgKG1hbnl3aG8uQ3VzdG9tQ29tcG9uZW50T3JjaGVzdHJhdG9yKSB7XHJcbiAgICBtYW55d2hvLkN1c3RvbUNvbXBvbmVudE9yY2hlc3RyYXRvci5kb25lU2VuZEhhbmRsZXJzLnB1c2goZG9uZUhhbmRsZXIpO1xyXG59XHJcbmVsc2Uge1xyXG4gICAgbWFueXdoby5zZXR0aW5ncy5pbml0aWFsaXplKHt9LCB7XHJcbiAgICAgICAgaW52b2tlOiB7XHJcbiAgICAgICAgICAgIGRvbmU6IGRvbmVIYW5kbGVyXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZG9uZUhhbmRsZXIoKSB7XHJcbiAgICAvL3ByZXNlcnZlIHRoaXMgc28gdGhlIHByb21pc2UgaGFuZGxlciBjYW4gZ2V0IGl0XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB2YXIgcHJvbWlzZXMgPSBbXTtcclxuICAgIC8vbG9vcCBvdmVyIHRoZSBhcnJheSBjYWxsaW5ndXBkYXRlIG9uIGVhY2hcclxuICAgIGZvciAodmFyIGtleSBpbiBtYW55d2hvLk91dGNvbWVUaW1lcnMpIHtcclxuICAgICAgICB2YXIgdGltZXIgPSBtYW55d2hvLk91dGNvbWVUaW1lcnNba2V5XTtcclxuICAgICAgICBpZiAodGltZXIpIHtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0cmlnZ2VyVGltZXIodGltZXIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbn1cclxuZnVuY3Rpb24gdHJpZ2dlclRpbWVyKHRpbWVyKSB7XHJcbiAgICAvL3RoZXJlIHNob3VsZCBiZSBhbiBhdHRyaWJ1dGUgdG8gZGljdGF0ZSBpZiB0aGUgY29tcG9uZW50IGhhZCBhIG1vZGVsXHJcbiAgICB0aW1lci5zdGFydENvdW50aW5nKCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG52YXIgUmVhY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xyXG5fX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xyXG52YXIgT3V0Y29tZVRpbWVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKE91dGNvbWVUaW1lciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIE91dGNvbWVUaW1lcihwcm9wcykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmNvbXBvbmVudElkID0gXCJcIjtcclxuICAgICAgICBfdGhpcy5mbG93S2V5ID0gXCJcIjtcclxuICAgICAgICBfdGhpcy5hdHRyaWJ1dGVzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIC8vaG9sZGVyIGZvciBkYXRhcmVmcmVzaCB0aW1lclxyXG4gICAgICAgIF90aGlzLnRpbWVySWQgPSAtMTtcclxuICAgICAgICBfdGhpcy50aW1lckNvdW50ZXIgPSAwO1xyXG4gICAgICAgIF90aGlzLmNvbXBvbmVudElkID0gcHJvcHMuaWQ7XHJcbiAgICAgICAgX3RoaXMuZmxvd0tleSA9IHByb3BzLmZsb3dLZXk7XHJcbiAgICAgICAgLy9wdXNoIGF0dHJpYnV0ZXMgaW50byBrZXllZCBtYXAgXHJcbiAgICAgICAgdmFyIGZsb3dNb2RlbCA9IG1hbnl3aG8ubW9kZWwuZ2V0Q29tcG9uZW50KF90aGlzLmNvbXBvbmVudElkLCBfdGhpcy5mbG93S2V5KTtcclxuICAgICAgICBpZiAoZmxvd01vZGVsLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGZsb3dNb2RlbC5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5hdHRyaWJ1dGVzLnNldChrZXksIGZsb3dNb2RlbC5hdHRyaWJ1dGVzW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmbG93TW9kZWwub2JqZWN0RGF0YSAmJiBmbG93TW9kZWwub2JqZWN0RGF0YVswXSkge1xyXG4gICAgICAgICAgICBtYW55d2hvLnN0YXRlLnNldENvbXBvbmVudChfdGhpcy5jb21wb25lbnRJZCwgeyBvYmplY3REYXRhOiBbZmxvd01vZGVsLm9iamVjdERhdGFbMF1dIH0sIF90aGlzLmZsb3dLZXksIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPdXRjb21lVGltZXIucHJvdG90eXBlLmdldEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChhdHRyaWJ1dGVOYW1lLCBkZWZhdWx0VmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGVzLmhhcyhhdHRyaWJ1dGVOYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLmdldChhdHRyaWJ1dGVOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE91dGNvbWVUaW1lci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbWFueXdoby5PdXRjb21lVGltZXJzW3RoaXMuY29tcG9uZW50SWRdID0gdGhpcztcclxuICAgICAgICB0aGlzLnN0YXJ0Q291bnRpbmcoKTtcclxuICAgIH07XHJcbiAgICBPdXRjb21lVGltZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIHVzZSB0aW1lcklkIGZyb20gdGhlIHN0YXRlIHRvIGNsZWFyIHRoZSBpbnRlcnZhbHNcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XHJcbiAgICAgICAgdGhpcy50aW1lcklkID0gLTE7XHJcbiAgICB9O1xyXG4gICAgT3V0Y29tZVRpbWVyLnByb3RvdHlwZS5zdGFydENvdW50aW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudGltZXJDb3VudGVyID0gMDtcclxuICAgICAgICB0aGlzLnRpbWVySWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwodGhpcy50aW1lckhhbmRsZXIuYmluZCh0aGlzKSwgMTAwMCk7XHJcbiAgICB9O1xyXG4gICAgT3V0Y29tZVRpbWVyLnByb3RvdHlwZS50aW1lckhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGZsb3dTdGF0ZSA9IG1hbnl3aG8uc3RhdGUuZ2V0Q29tcG9uZW50KHRoaXMuY29tcG9uZW50SWQsIHRoaXMuZmxvd0tleSk7XHJcbiAgICAgICAgaWYgKGZsb3dTdGF0ZS5sb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXJDb3VudGVyID0gMDtcclxuICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXJDb3VudGVyIDwgcGFyc2VJbnQodGhpcy5nZXRBdHRyaWJ1dGUoXCJyZWZyZXNoSW50ZXJ2YWxTZWNvbmRzXCIsIDEwKSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZXJDb3VudGVyKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL3Jlc2V0IHRoZSBjb3VudGVyXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyQ291bnRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICAvL3N3aXRjaCBvZmYgdGhlIHRpbWVyXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aW1lcklkID49IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZXJJZCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG91dGNvbWVUb1RyaWdnZXIgPSB0aGlzLmdldEF0dHJpYnV0ZShcInJlZnJlc2hPdXRjb21lSWRcIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAob3V0Y29tZVRvVHJpZ2dlciAmJiBvdXRjb21lVG9UcmlnZ2VyLmxlbmd0aCA+IDAgJiYgb3V0Y29tZVRvVHJpZ2dlci50b0xvd2VyQ2FzZSgpICE9IFwibnVsbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG91dGNvbWUgPSBtYW55d2hvLm1vZGVsLmdldE91dGNvbWUob3V0Y29tZVRvVHJpZ2dlciwgdGhpcy5mbG93S2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAvL2RpZCB3ZSBnZXQgYW4gb3V0Y29tZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvdXRjb21lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdHJpZ2dlciB0aGUgb3V0Y29tZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFueXdoby5jb21wb25lbnQub25PdXRjb21lKG91dGNvbWUsIG51bGwsIHRoaXMuZmxvd0tleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgT3V0Y29tZVRpbWVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJlbWFpbmluZyA9IHBhcnNlSW50KHRoaXMuZ2V0QXR0cmlidXRlKFwicmVmcmVzaEludGVydmFsU2Vjb25kc1wiLCAxMCkpIC0gdGhpcy50aW1lckNvdW50ZXI7XHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcclxuICAgICAgICAgICAgXCJUcmlnZ2VyaW5nIG91dGNvbWUgaW4gXCIsXHJcbiAgICAgICAgICAgIHJlbWFpbmluZyxcclxuICAgICAgICAgICAgXCIgc2Vjb25kc1wiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gT3V0Y29tZVRpbWVyO1xyXG59KFJlYWN0LkNvbXBvbmVudCkpO1xyXG5tYW55d2hvLmNvbXBvbmVudC5yZWdpc3RlcignT3V0Y29tZVRpbWVyJywgT3V0Y29tZVRpbWVyKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gT3V0Y29tZVRpbWVyO1xyXG5cblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIE91dGNvbWVUaW1lci5qcyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGEzZWNkOGQ2YWZiMTY4YWE0MWUzIiwiZXhwb3J0ICogZnJvbSAnLi9PdXRjb21lVGltZXInO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LnRzeCIsIlxyXG5kZWNsYXJlIHZhciBtYW55d2hvOiBhbnk7XHJcblxyXG5tYW55d2hvLk91dGNvbWVUaW1lcnMgPSB7fTtcclxuLy8gdGhpcyBhdHRhY2hlcyB0aGUgQWpheCBoYW5kbGVycyB0byB0aGUgbWFueXdoby5DdXN0b21Db21wb25lbnRPcmNoZXN0cmF0b3Igb3IgXHJcbi8vIGluaXRpYWxpemUgZnVuY3Rpb24gaWYgbWFueXdoby5DdXN0b21Db21wb25lbnRPcmNoZXN0cmF0b3IgaXNudCBkZWZpbmVkLiAgXHJcbmlmKG1hbnl3aG8uQ3VzdG9tQ29tcG9uZW50T3JjaGVzdHJhdG9yKVxyXG57XHJcbiAgICBtYW55d2hvLkN1c3RvbUNvbXBvbmVudE9yY2hlc3RyYXRvci5kb25lU2VuZEhhbmRsZXJzLnB1c2goZG9uZUhhbmRsZXIpO1xyXG59XHJcbmVsc2Vcclxue1xyXG4gICAgbWFueXdoby5zZXR0aW5ncy5pbml0aWFsaXplKFxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW52b2tlOiBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIGRvbmU6IGRvbmVIYW5kbGVyICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZG9uZUhhbmRsZXIoKVxyXG57XHJcbiAgICAvL3ByZXNlcnZlIHRoaXMgc28gdGhlIHByb21pc2UgaGFuZGxlciBjYW4gZ2V0IGl0XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdmFyIHByb21pc2VzID0gW107XHJcbiAgICAvL2xvb3Agb3ZlciB0aGUgYXJyYXkgY2FsbGluZ3VwZGF0ZSBvbiBlYWNoXHJcbiAgICBmb3IodmFyIGtleSBpbiBtYW55d2hvLk91dGNvbWVUaW1lcnMpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHRpbWVyIDogT3V0Y29tZVRpbWVyID0gbWFueXdoby5PdXRjb21lVGltZXJzW2tleV07XHJcblxyXG4gICAgICAgIGlmKHRpbWVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0cmlnZ2VyVGltZXIodGltZXIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0cmlnZ2VyVGltZXIodGltZXIgOiBPdXRjb21lVGltZXIpXHJcbntcclxuICAgIFxyXG4gICAgLy90aGVyZSBzaG91bGQgYmUgYW4gYXR0cmlidXRlIHRvIGRpY3RhdGUgaWYgdGhlIGNvbXBvbmVudCBoYWQgYSBtb2RlbFxyXG4gICAgdGltZXIuc3RhcnRDb3VudGluZygpO1xyXG4gICAgcmV0dXJuIHRydWU7IFxyXG59XHJcblxyXG5cclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuL091dGNvbWVUaW1lci5jc3MnO1xyXG5cclxuY2xhc3MgT3V0Y29tZVRpbWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiBcclxue1xyXG4gICBcclxuICAgIGNvbXBvbmVudElkOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgZmxvd0tleTogc3RyaW5nID1cIlwiOyAgXHJcbiAgICBhdHRyaWJ1dGVzID0gbmV3IE1hcDxzdHJpbmcsYW55PigpO1xyXG5cclxuICAgIC8vaG9sZGVyIGZvciBkYXRhcmVmcmVzaCB0aW1lclxyXG4gICAgdGltZXJJZCA9IC0xO1xyXG4gICAgdGltZXJDb3VudGVyID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyA6IGFueSlcclxuXHR7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50SWQgPSBwcm9wcy5pZDtcclxuICAgICAgICB0aGlzLmZsb3dLZXkgPSBwcm9wcy5mbG93S2V5O1xyXG5cclxuICAgICAgICAvL3B1c2ggYXR0cmlidXRlcyBpbnRvIGtleWVkIG1hcCBcclxuXHRcdHZhciBmbG93TW9kZWwgPSBtYW55d2hvLm1vZGVsLmdldENvbXBvbmVudCh0aGlzLmNvbXBvbmVudElkLCAgIHRoaXMuZmxvd0tleSk7XHJcblx0XHRpZihmbG93TW9kZWwuYXR0cmlidXRlcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKHZhciBrZXkgaW4gZmxvd01vZGVsLmF0dHJpYnV0ZXMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmF0dHJpYnV0ZXMuc2V0KGtleSAsZmxvd01vZGVsLmF0dHJpYnV0ZXNba2V5XSk7XHJcblx0XHRcdH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGZsb3dNb2RlbC5vYmplY3REYXRhICYmIGZsb3dNb2RlbC5vYmplY3REYXRhWzBdKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFueXdoby5zdGF0ZS5zZXRDb21wb25lbnQodGhpcy5jb21wb25lbnRJZCwge29iamVjdERhdGE6IFtmbG93TW9kZWwub2JqZWN0RGF0YVswXV19LCB0aGlzLmZsb3dLZXksIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSA6IHN0cmluZywgZGVmYXVsdFZhbHVlIDogYW55KVxyXG5cdHtcclxuXHRcdGlmKHRoaXMuYXR0cmlidXRlcy5oYXMoYXR0cmlidXRlTmFtZSkpXHJcblx0XHR7XHJcblx0XHRcdHJldHVybiB0aGlzLmF0dHJpYnV0ZXMuZ2V0KGF0dHJpYnV0ZU5hbWUpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIFxyXG4gICAgeyAgIFxyXG4gICAgICAgIG1hbnl3aG8uT3V0Y29tZVRpbWVyc1t0aGlzLmNvbXBvbmVudElkXSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zdGFydENvdW50aW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHVzZSB0aW1lcklkIGZyb20gdGhlIHN0YXRlIHRvIGNsZWFyIHRoZSBpbnRlcnZhbHNcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XHJcbiAgICAgICAgdGhpcy50aW1lcklkID0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRDb3VudGluZygpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50aW1lckNvdW50ZXIgPSAwO1xyXG4gICAgICAgIHRoaXMudGltZXJJZCA9IHdpbmRvdy5zZXRJbnRlcnZhbCh0aGlzLnRpbWVySGFuZGxlci5iaW5kKHRoaXMpLCAxMDAwKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdGltZXJIYW5kbGVyKClcclxuICAgIHtcclxuICAgICAgICBjb25zdCBmbG93U3RhdGUgPSBtYW55d2hvLnN0YXRlLmdldENvbXBvbmVudCh0aGlzLmNvbXBvbmVudElkLCB0aGlzLmZsb3dLZXkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGZsb3dTdGF0ZS5sb2FkaW5nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lckNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGltZXJDb3VudGVyIDwgcGFyc2VJbnQodGhpcy5nZXRBdHRyaWJ1dGUoXCJyZWZyZXNoSW50ZXJ2YWxTZWNvbmRzXCIsIDEwICkpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyQ291bnRlcisrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy9yZXNldCB0aGUgY291bnRlclxyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lckNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vc3dpdGNoIG9mZiB0aGUgdGltZXJcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMudGltZXJJZCA+PSAtMSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lcklkID0gLTE7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgb3V0Y29tZVRvVHJpZ2dlciA9IHRoaXMuZ2V0QXR0cmlidXRlKFwicmVmcmVzaE91dGNvbWVJZFwiLCBcIlwiKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKG91dGNvbWVUb1RyaWdnZXIgJiYgb3V0Y29tZVRvVHJpZ2dlci5sZW5ndGggPiAwICYmIG91dGNvbWVUb1RyaWdnZXIudG9Mb3dlckNhc2UoKSAhPSBcIm51bGxcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3V0Y29tZSA9IG1hbnl3aG8ubW9kZWwuZ2V0T3V0Y29tZShvdXRjb21lVG9UcmlnZ2VyLCB0aGlzLmZsb3dLZXkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvL2RpZCB3ZSBnZXQgYW4gb3V0Y29tZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKG91dGNvbWUpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RyaWdnZXIgdGhlIG91dGNvbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hbnl3aG8uY29tcG9uZW50Lm9uT3V0Y29tZShvdXRjb21lLCBudWxsICwgdGhpcy5mbG93S2V5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAgXHJcbiAgICBcclxuICAgIHJlbmRlcigpIFxyXG4gICAge1xyXG4gICAgICAgIHZhciByZW1haW5pbmcgPSBwYXJzZUludCh0aGlzLmdldEF0dHJpYnV0ZShcInJlZnJlc2hJbnRlcnZhbFNlY29uZHNcIiwgMTAgKSkgLSB0aGlzLnRpbWVyQ291bnRlclxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiA8ZGl2PlRyaWdnZXJpbmcgb3V0Y29tZSBpbiB7cmVtYWluaW5nfSBzZWNvbmRzPC9kaXY+ICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbm1hbnl3aG8uY29tcG9uZW50LnJlZ2lzdGVyKCdPdXRjb21lVGltZXInLCBPdXRjb21lVGltZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3V0Y29tZVRpbWVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvT3V0Y29tZVRpbWVyLnRzeCIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=