// Type Alias

// definition
type GameT = {
    title: string;
};

type DLCT = {
    extra: string
};

// intersection

type GameCollectionT = Game & DLCT;

// implements 

class CreateGameT implements GameCollection { }

// function declaration 

type getSimilarsT = (title: string) => void;