type Todo = {
    title: string;
    description: string;
    completed: boolean;
}

const todo: Readonly<Todo> = {
    title: "Assistir Homem Aranha de novo",
    description: "Memorizar os detalhes",
    completed: false,
};

console.log(todo);

// todo.completed = true;


function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate }
}

const todo2: Todo = updateTodo(todo, { completed: true });

console.log(todo2);

// Pick 

type TodoPreview = Pick<Todo, "title" | "completed">

const todo3: TodoPreview = {
    title: "Zerar Ghost of Tsushima",
    completed: false
}

// Omit 

type TodoPreview2 = Omit<Todo, "description">

const todo4: TodoPreview = {
    title: "Zerar Ghost of Tsushima",
    completed: false
}
