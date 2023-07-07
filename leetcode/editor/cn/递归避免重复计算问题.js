
let mem = [];

let f = n => {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (mem[n]) return mem[n];
    mem[n] = f(n - 1) + f(n - 2);
    return mem[n];
}

let f1 = n => {
    if (n === 1) return 1;
    if (n === 2) return 2;
    return f1(n - 1) + f1(n - 2);
}

const startTime = Date.now();
console.log('startTime: ', startTime);
result = f(0);
const endTime = Date.now();
console.log('endTime: ', endTime);

console.log(endTime - startTime);
console.log(result);



