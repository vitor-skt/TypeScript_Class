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