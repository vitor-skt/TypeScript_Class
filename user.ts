// accountInfo
// charInfo
// playerInfo

type AccountInfo = {
    id: number;
    name: string;
    email?: string;
}
//email?: string; = email: string | undefined; (email is now a option)
// const account: AccountInfo ={
//     id: 123,
//     name: "Vitor",
// }

const account: AccountInfo = {
    id: 123,
    name: "Vitor",
    email: "vitor@gmail.com"
}

type CharInfo = {
    nickname: string;
    level: number;
}

const char: CharInfo = {
    nickname: "skt-vitor",
    level: 100
};

// Intersection (and)
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
    id: 123,
    name: "vitor",
    nickname: "skt-vitor",
    level: 100
}