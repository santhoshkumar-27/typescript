"use strict";
// const $variable = document.querySelector('.foo') as HTMLInputElement;
var $variable = document.querySelector('.foo');
// console.log('variable', $variable.value);
$variable.addEventListener('click', function (event) {
    var target = event.target;
    console.log('event', target.value);
});
