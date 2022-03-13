// accountInfo
//charInfo

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

