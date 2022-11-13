
const x = 4

let promise = new Promise((resolve, reject) => {
    if (x % 2 == 0) resolve("resolved it");
    else reject("rejected");
})




promise.then((x = 8) => {
    resolve(x % 2 === 0)
}).catch(() => {
    console.log("rej")
})

console.log(promise)