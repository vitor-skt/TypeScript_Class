"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDatails() {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    }
}
const vitor = new UserAccount("Vitor Oliveira", 21);
console.log(vitor);
console.log(vitor.age);
vitor.logDatails();
