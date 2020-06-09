"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reducer = exports.initalState = void 0;
var initalState = {
  dishes: DISHES,
  comments: COMMENTS,
  promotions: PROMOTIONS,
  leaders: LEADERS
};
exports.initalState = initalState;

var Reducer = function Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initalState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return state;
};

exports.Reducer = Reducer;