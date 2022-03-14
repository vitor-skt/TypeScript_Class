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
    get getLevel() {
        console.log("-------GET--------");
        return this.level;
    }
    set setLevel(level) {
        this.level = level;
    }
    logCharDetails() {
        console.log(`The player ${this.name} is ${this.age} years old and has the char ${this.nickname} at level ${this.level}`);
    }
}
const vitor = new UserAccount("Vitor Oliveira", 21);
console.log(vitor);
vitor.logDatails();
const vitor2 = new CharAccount("Vitor Santana", 21, "skt-vitor2", 95);
console.log(vitor2);
console.log(vitor2.level);
vitor2.logDatails();
vitor2.logCharDetails();
vitor2.setLevel = 499;
console.log(vitor2.getLevel);
