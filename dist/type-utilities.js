"use strict";
const todo = {
    title: "Assistir Homem Aranha de novo",
    description: "Memorizar os detalhes",
    completed: false,
};
console.log(todo);
// todo.completed = true;
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo2 = updateTodo(todo, { completed: true });
console.log(todo2);
