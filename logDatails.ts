// Union and Aliases

type Uid = number | string;

function logDetails(uid: Uid, item: string) {
    console.log(`A product with ${uid} has title as ${item}.`);
}

function logInfo(uid: Uid, user: string) {
    console.log(`An user with ${uid} has a name as ${user}.`);
}


logDetails(123, "shoes");
logDetails("123", "shoes");

logInfo("123", "Vitor");
logInfo(123, "Vitor");