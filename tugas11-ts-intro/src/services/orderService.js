"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = exports.updateOrderStatus = exports.cancelOrder = exports.placeOrder = void 0;
var placeOrder = function (orders, newOrder) {
    return __spreadArray(__spreadArray([], orders, true), [newOrder], false);
};
exports.placeOrder = placeOrder;
var cancelOrder = function (orders, orderId) {
    return orders.filter(function (order) { return order.id !== orderId; });
};
exports.cancelOrder = cancelOrder;
var updateOrderStatus = function (orders, orderId, status) {
    return orders.map(function (order) {
        return order.id === orderId ? __assign(__assign({}, order), { status: status }) : order;
    });
};
exports.updateOrderStatus = updateOrderStatus;
var getOrders = function (orders) {
    return orders;
};
exports.getOrders = getOrders;
