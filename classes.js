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
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
    logCharDetails() {
        console.log(`The player ${this.name} has the char ${this.nickname} at level ${this.level}`);
    }
}
const vitor = new UserAccount("Vitor Oliveira", 21);
console.log(vitor);
console.log(vitor.age);
vitor.logDatails();
const vitor2 = new CharAccount("Vitor Santana", 21, "skt-vitor2", 95);
console.log(vitor2);
vitor2.logDatails();
vitor2.logCharDetails();
