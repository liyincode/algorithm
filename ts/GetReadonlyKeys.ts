/*
关键就是：将直接对比类型换成对比函数类型，这里对比的是函数返回值类型

{title: string} extends {readonly title: string } 是否成立
通过类型函数来判断

1. 使用映射类型遍历
2. 构造函数类型，然后返回值通过去除或不去除 readonly 作为判断
3. 两个函数类型 extends，如果去除了的 extends readonly 就保留，如果 extends 就删除
 */

type GetReadonlyKeys<T> = {
    // 遍历
    [K in keyof T]-?:
    (<U>() => U extends { -readonly [P in K]: T[K] } ? 1 : 2) extends
        (<U>() => U extends { [P in K]: T[K] } ? 1 : 2)
        ? never
        : K
}[keyof T]

interface Todo {
    readonly title: string;
    readonly description: string;
    completed: boolean;
}

type Keys = GetReadonlyKeys<Todo>; // Keys 的类型为 "title" | "description"

const readonlyKeys: Keys = 'description'

/*
1. 属性 "title"（只读）
当映射类型处理 K = "title" 时：
第一个函数类型:
typescriptCopy<U>() => U extends { -readonly title: string } ? 1 : 2
这检查 U 是否可以赋值给有非只读 title 属性的类型。
第二个函数类型:
typescriptCopy<U>() => U extends { readonly title: string } ? 1 : 2
这检查 U 是否可以赋值给有只读 title 属性的类型。
比较结果:
这两个函数类型是不同的，因为：

对于类型 { title: "hello" }，它可以赋值给第一个条件但不能赋值给第二个条件
导致两个函数对某些输入可能返回不同结果
所以 第一个函数类型 extends 第二个函数类型 为 false
结果为 "title"

2. 属性 "description"（只读）
分析过程与 "title" 类似，结果也是 "description"。
3. 属性 "completed"（非只读）
当映射类型处理 K = "completed" 时：
第一个函数类型:
typescriptCopy<U>() => U extends { -readonly completed: boolean } ? 1 : 2
第二个函数类型:
typescriptCopy<U>() => U extends { completed: boolean } ? 1 : 2
比较结果:
这两个函数类型是相同的，因为 completed 本身就不是只读的，所以移除 readonly 和不移除没有区别。因此：

两个函数类型对所有可能的 U 都会返回相同结果
第一个函数类型 extends 第二个函数类型 为 true
结果为 never

4. 最终结果
经过映射后的中间结果类型：
typescriptCopy{
  title: "title";
  description: "description";
  completed: never;
}
最后通过 [keyof T] 索引访问，提取所有非 never 值，得到：
typescriptCopy"title" | "description"
具体函数类型比较示例
为了更直观地理解，来看看为什么两个函数类型在只读属性上会不同：
假设有一个类型 U = { title: string }：

对于第一个函数：U extends { -readonly title: string } 成立，返回 1
对于第二个函数：U extends { readonly title: string } 不成立，返回 2

这说明两个函数类型对相同输入返回了不同结果，因此它们不是同一个类型。
而对于 completed 这样的非只读属性，无论输入什么 U，两个函数类型都会返回相同的结果，因此它们被视为相同的类型。
 */
