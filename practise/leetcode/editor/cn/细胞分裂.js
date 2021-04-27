let mem = [];

let f = n => {
    console.log(n);
    if (n === 0) return 1;
    if (n === 1) return 2;
    if (n === 2) return 4
    if (n === 3) return 8;
    if (mem[n]) return mem;

    mem[n] = 2*f(n - 1) - f(n - 4);
    console.log(n,mem[n], mem);
    return mem[n];
}

console.log(f(10));