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
exports.getUsers = exports.updateUser = exports.removeUser = exports.addUser = void 0;
var addUser = function (users, newUser) {
    return __spreadArray(__spreadArray([], users, true), [newUser], false);
};
exports.addUser = addUser;
var removeUser = function (users, userId) {
    return users.filter(function (user) { return user.id !== userId; });
};
exports.removeUser = removeUser;
var updateUser = function (users, updatedUser) {
    return users.map(function (user) {
        return user.id === updatedUser.id ? updatedUser : user;
    });
};
exports.updateUser = updateUser;
var getUsers = function (users) {
    return users;
};
exports.getUsers = getUsers;
