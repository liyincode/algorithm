// 返回函数的返回值类型
type MyReturnType<T extends (...args: any) => any> =
    T extends (...args: any) => infer R
        ? R
        : any;



const fn = (v: boolean) => {
    if (v) {
        return 1;
    } else {
        return 2;
    }
}

type a = MyReturnType<typeof fn>

/*
1. 类型编程类似于正常的 js 函数编程
    泛型 T 相当于函数中的参数
    extends 相当于判断这个参数符合哪种类型
    = 等号右边相当于函数 return 的结果
2.T extends (...args: any) => infer R 意思是 T 是一个返回了 R 的函数吗？
3. infer R 相当于 ts 去推断了 R 的类型
 */

// 返回函数参数类型
type MyParameters<T extends (...args: any) => any> =
    T extends (...args: infer R) => any
        ? R
        : any
function foo(a: number, b: string): void{}
type b = MyParameters<typeof foo>

// 返回函数参数中第一个参数的类型
type MyFirstArgument<T extends (...args: any) => any> =
    T extends (firstArg: infer P, ...args: any) => any
        ? P
        : any
function greet(name: string, age: number): void{}
type c = MyFirstArgument<typeof greet>

// 提取 Promise 的包装类型
type MyPromiseType<T> = T extends Promise<infer R> ? R : never
const promise = Promise.resolve(30)
type promise = MyPromiseType<typeof promise>

// 判断类型是否为函数类型
type MyFunctionType<T extends (...args: any) => any> =
    T extends (...args: any) => any
        ? T
        : never
const fnn = (x: string) => x.length
const notFn = 42;
type fnn = MyFunctionType<typeof fnn>
type notFn = MyFunctionType<typeof notFn>

// 当不是函数式，返回默认类型
type MyReturnTypeWithDefault<T, D> =
    T extends (...args: any) => infer R
        ? R
        : D
function calculate() {return 100}
const notFunction = "hello"

type cal = MyReturnTypeWithDefault<typeof calculate, string>
type notFunction = MyReturnTypeWithDefault<typeof notFunction, string>
