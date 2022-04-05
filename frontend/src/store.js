import { createStore } from 'vuex'

export default createStore({
    state: ()=>({
        hello: "hello",
    }),
    mutations: {
        setData: (state, data) => {
            state.hello = data
        }
    },

    actions: {

    },
    getters: {
        getHello: (state)=> state.hello,
        getHello2: (state)=> state.hello + "2"
    },
    modules: {

    }
})