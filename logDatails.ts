// Type Alias
type Uid = number | string | undefined;

function logDetails(uid: Uid, item: string) {
    console.log(`A product with ${uid} has title as ${item}.`);
}

function logInfo(uid: Uid, user: string) {
    console.log(`An user with ${uid} has a name as ${user}.`);
}
// Union (or)
type Platform = 'Windows' | 'Linux' | 'Mac Os' | 'Ios';

function renderPlatform(platform: Platform) {
    return platform
}

renderPlatform('Ios');

logDetails(123, "shoes");
logDetails("123", "shoes");

logInfo("123", "Vitor");
logInfo(123, "Vitor");