"use strict";
var doSomething = function () {
    console.log('doSomeThing');
    // return 1; this function doesn't return by default 
};
var doSometing = function () {
    // console.log('doSomeThing')
    // return 1; this function doesn't return by default 
    throw 'never';
};
doSomething();
var nameid = "naeid";
console.log(nameid.foo());
var nfanme = 23;
var nfanme2 = 23;
var s1 = nfanme;
// let s2: string = nfanme2;
console.log(nfanme.foo());
// console.log(nfanme2.foo()) because its unknown function
var pageNumber = "2";
var unitPageNumber = pageNumber;
var nae = "1";
var pageNumbertwo = nae;
