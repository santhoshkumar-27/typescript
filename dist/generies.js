"use strict";
// const array_a =  append<string>("list", ["set", "dict"]) //This is Append in Ramda return is new array is different type
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
// const searchword = "arr";
// const _hasSearchedArray = any<string>((el:string)=> el.contains(searchword), [
//     'food',
//     'array',
//     'actual'])
var addId = function (obj) {
    var id = Math.random().toString(36);
    return __assign(__assign({}, obj), { id: id });
};
var happy = {
    name: 'sandy',
    age: 22,
    data: {
        meta: "foo"
    },
    dub: "values"
};
var happy2 = {
    name: 'sandy2',
    age: 23,
    data: 'foo',
    dub: 22
};
var result = addId(happy);
console.log(result);
