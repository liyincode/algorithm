// 函数式编程
let arr = [0, 1, 2, 3, 4, 5]

// 纯的
arr.slice(0, 3) // => [0, 1, 2]
// 纯的
arr.slice(0, 3) // => [0, 1, 2]

// 不纯
arr.splice(0, 3) // => [0, 1, 2]
arr.splice(0, 3) // => [3, 4, 5]

// 函数柯里化
const add = function(x) {
    return function(y) {
        return x + y
    }
}
const increment = add(1)
const addTen = add(10)
increment(1) // => 2
addTen(1) // => 11

// 函数组合
const compose = function(...args){
    return function (x) {
        return args.reduceRight((previousValue, currentValue) => currentValue(previousValue), x)
    }
}
const toUpperCase = x => x.toUpperCase()
const exclaim = x => `${x}!`

const shout = compose(exclaim, toUpperCase)
console.log(shout('aaaaa'))
