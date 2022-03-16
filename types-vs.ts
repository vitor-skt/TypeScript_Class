// Type Alias

// definition
type GameT = {
    title: string;
};

type DLCT = {
    extra: string
};

// intersection

type GameCollectionT = GameT & DLCT & { content: boolean };

// implements 


class CreateGameT implements GameCollectionT { }

// function declaration 

type getSimilarsT = (title: string) => void;

// ======== Differences ======== //

// Permite declarar tipos primitivos

type IDT = string | number;

// Pode declarar tuplas normalmente

type TupleT = [number, number];

[1, 2] as TupleT;

// Apenas uma declaração por escopo

type JQueryT = { a: string };
// type JQueryT = {b: string}; //errado

// Mais recomendado: na maioria das vezes (só caso tenha necessidade use interface)

// React - Props

// Consistência! (depende do que o projeto já esteja usando)