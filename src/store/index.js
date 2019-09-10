import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 1,
    },
    getters: {
        getCount: (state) => {
            return state.count + 1
        }
    },
    mutations: {
        add(state)  {
            state.count = state.count + 1;
        },
        subtract(state, n)  {
            state.count = state.count - n;
        }
    },
    actions: {
        addOne(context) {
            context.commit('add')
        },
        subOne(context, n) {
            context.commit('subtract', n)
        }
    }
})
export default store
