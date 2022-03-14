"use strict";
//boolean (true / false)
let isOpen;
isOpen = true;
// string ('text', "text", `text`)
let message;
message = `text ${isOpen}`;
//number (int , float, hex, binary)
let total;
total = 0xff0;
// array (type[])
let items;
items = [1, 2, 3];
let items2;
items2 = ['text', 'text', 'text'];
//or 
let values;
values = [1, 2, 3];
//tuple 
let title;
title = [1, 'text', true];
// enum
var colors;
(function (colors) {
    colors["white"] = "#fff";
    colors["black"] = "#000";
})(colors || (colors = {}));
// any (anything) not recomended!
let thing;
thing = true;
thing = "text";
thing = [1];
// void (function without return)
function logger() {
    console.log('text');
}
// null / undefined
let variable; //don't do it!
//never
function error() {
    throw new Error("error");
}
// object
let cart;
cart = {
    key: 'text'
};
//Type inference
let message2 = "message defined";
message2 = "new string";
window.addEventListener("click", (e) => {
    console.log(e.target);
});
