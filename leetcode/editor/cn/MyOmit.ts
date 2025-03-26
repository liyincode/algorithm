interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>


// 从类型T中取出所有属性，然后移除K指定的那些属性，得到一个新的类型
type MyOmit<T, K extends keyof T> = {
    // 遍历类型 T 的所有属性名，对于每个属性名 P，如果它存在于类型 K 中就排除，否则保留这个属性，并且让它
    // 和原始类型 T 中的类型相同
    [P in keyof T as P extends K ? never : P]: T[P]
}
