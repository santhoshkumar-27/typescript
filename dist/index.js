"use strict";
// const hello = "world";
var object1 = {
    name12: 'sandy',
    age: 22,
    getObjectName: function () {
        return "this object " + this.name12;
    }
};
var object2 = {
    name12: 'sandy',
    getObjectName: function () {
        return "this object " + this.name12;
    }
};
console.log(object1.name12);
console.log(object2.getObjectName());
var usObject = {
    name: "My name",
    userid: 23
};
console.log(usObject.name);
var ar1 = ['Dragon', 'eliminate'];
console.log(ar1);
