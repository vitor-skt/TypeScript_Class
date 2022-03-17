"use strict";
//@Component
//@Selector
//@useState("bla")
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Factory
function logger1(prefix) {
    return (target) => {
        console.log(`${prefix} - ${target}`);
    };
}
let Foo = class Foo {
};
Foo = __decorate([
    logger1("awesome")
], Foo);
//Class decorator
//Property decorator
//Method decorator
//Parameter decorator
//Acessor decorator
