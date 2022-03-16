interface Game {
    title: string;
}

interface DLC {
    extra: string;
}

// intersection / extend 

interface GameCollection extends Game, DLC { }

// implements

class CreateGame implements GameCollection { }

// function declaration

interface getSimilars {
    (title: string): void;
}


// ======== Differences ======== //

interface ID extends number { }

// Não é possivel definir tuplas na interface
interface Tuple {
    0: number;
    1: number;
}
[1, 2, 3, 4, "sass"] as Tuple;

// Pode ter multiplas declarações com o mesmo nome que ele une

interface JQuery {
    a: string;
}

interface JQuery {
    b: string;
}

const $: JQuery = {
    a: "bla",
    b: "foo",
};

// Vantagem: quando tiver criando libs, prefira interfaces, pois são mais extensiveis!

// criado objetos/classes (POO)