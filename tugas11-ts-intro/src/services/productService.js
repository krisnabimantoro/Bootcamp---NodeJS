"use strict";
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
exports.getProducts = exports.updateProduct = exports.removeProduct = exports.addProduct = void 0;
var addProduct = function (products, newProduct) {
    return __spreadArray(__spreadArray([], products, true), [newProduct], false);
};
exports.addProduct = addProduct;
var removeProduct = function (products, productId) {
    return products.filter(function (product) { return product.id !== productId; });
};
exports.removeProduct = removeProduct;
var updateProduct = function (products, updatedProduct) {
    return products.map(function (product) {
        return product.id === updatedProduct.id ? updatedProduct : product;
    });
};
exports.updateProduct = updateProduct;
var getProducts = function (products) {
    return products;
};
exports.getProducts = getProducts;
