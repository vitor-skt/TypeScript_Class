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
// function logger1(prefix: string) {
//     return (target: any) => {
//         console.log(`${prefix} - ${target}`);
//     };
// }
// @logger1("awesome")
// class Foo { }
// //Class decorator
// function setAPIVersion(apiVersion: string) {
//     return (constructor: any) => {
//         return class extends constructor {
//             version = apiVersion;
//         }
//     }
// }
// //decorator - anotar a versão da API
// @setAPIVersion("2.0.0")
// class API { }
// console.log(new API());
//Property decorator
function minLength(length) {
    return (target, key) => {
        let val = target[key];
        const getter = () => val;
        const setter = (value) => {
            if (value.length < length) {
                console.log(`erro ${key} deve conter mais que ${length} letras.`);
            }
            else {
                val = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}
class Movie {
    constructor(t) {
        this.title = t;
    }
}
__decorate([
    minLength(5)
], Movie.prototype, "title", void 0);
const movie = new Movie("Interstellar");
console.log(movie);
console.log(movie.title);
//Method decorator
//Parameter decorator
//Acessor decorator
