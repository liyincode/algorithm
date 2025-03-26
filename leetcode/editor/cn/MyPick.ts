type MyPick<T, K extends keyof T> = {
    [P in keyof T as P extends K ? P : never]: T[P]
}

interface Todo {
    title: string
    description: string
    completed: boolean

}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Cleanroom',
    completed: false,
}
