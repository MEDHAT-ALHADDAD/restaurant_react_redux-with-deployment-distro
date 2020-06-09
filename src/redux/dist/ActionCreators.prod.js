"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.addPromos=exports.promosFailed=exports.promosLoading=exports.fetchPromos=exports.addComments=exports.commentsFailed=exports.fetchComments=exports.addDishes=exports.dishesFailed=exports.dishesLoading=exports.fetchDishes=exports.postComment=exports.addComment=void 0;var ActionTypes=_interopRequireWildcard(require("./ActionTypes")),_baseUrl=require("../shared/baseUrl");function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _getRequireWildcardCache=function(){return e},e}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;if(null===e||"object"!==_typeof(e)&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var s=o?Object.getOwnPropertyDescriptor(e,n):null;s&&(s.get||s.set)?Object.defineProperty(r,n,s):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}var addComment=function(e){return{type:ActionTypes.ADD_COMMENT,payload:e}};exports.addComment=addComment;var postComment=function(r,o,n,s){return function(t){var e={dishId:r,rating:o,author:n,comment:s};return e.date=(new Date).toISOString(),fetch(_baseUrl.baseUrl+"comments",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(e){return t(addComment(e))}).catch(function(e){console.log("post comments",e.message),alert("Your comment could not be posted\n Error: "+e.message)})}};exports.postComment=postComment;var fetchDishes=function(){return function(t){return t(dishesLoading(!0)),fetch(_baseUrl.baseUrl+"dishes").then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(e){return t(addDishes(e))}).catch(function(e){return t(dishesFailed(e.message))})}};exports.fetchDishes=fetchDishes;var dishesLoading=function(){return{type:ActionTypes.DISHES_LOADING}};exports.dishesLoading=dishesLoading;var dishesFailed=function(e){return{type:ActionTypes.DISHES_FAILED,payload:e}};exports.dishesFailed=dishesFailed;var addDishes=function(e){return{type:ActionTypes.ADD_DISHES,payload:e}};exports.addDishes=addDishes;var fetchComments=function(){return function(t){return fetch(_baseUrl.baseUrl+"comments").then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(e){return t(addComments(e))}).catch(function(e){return t(commentsFailed(e.message))})}};exports.fetchComments=fetchComments;var commentsFailed=function(e){return{type:ActionTypes.COMMENTS_FAILED,payload:e}};exports.commentsFailed=commentsFailed;var addComments=function(e){return{type:ActionTypes.ADD_COMMENTS,payload:e}};exports.addComments=addComments;var fetchPromos=function(){return function(t){return t(promosLoading(!0)),fetch(_baseUrl.baseUrl+"promotions").then(function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(e){return t(addPromos(e))}).catch(function(e){return t(promosFailed(e.message))})}};exports.fetchPromos=fetchPromos;var promosLoading=function(){return{type:ActionTypes.PROMOS_LOADING}};exports.promosLoading=promosLoading;var promosFailed=function(e){return{type:ActionTypes.PROMOS_FAILED,payload:e}};exports.promosFailed=promosFailed;var addPromos=function(e){return{type:ActionTypes.ADD_PROMOS,payload:e}};exports.addPromos=addPromos;