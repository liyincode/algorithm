/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00006-hard-simple-vue/README.md
 */

type DataFunction <D> = () => D;

type ComputedFunction<D, C> = {
    [K in keyof C]: (this: D & C) => C[K]
}

type MethodsObject<D, C, M> = {
    [K in keyof M]: (this: D & C & M) => any
}

type SimpleVue<D, C, M> ={
    data: DataFunction<D>;
    computed: ComputedFunction<D, C>
    methods: MethodsObject<D, C, M>
}

declare function SimpleVue<
    D extends Record<string, any>,
    C extends Record<string, any>,
    M extends Record<string, Function>
>(options: SimpleVue<D, C, M>)

const instance = SimpleVue({
    data() {
        return {
            firstname: '',
            lastname: ''
        }
    },
    computed: {
        fullname() {
            return this.firstname + this.lastname
        }
    },
    methods: {
        hi() {
            console.log(this.fullname)
        }
     }
})
