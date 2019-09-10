import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 1,
        menuTree: []
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
        },
        getMenuTree(state) {
            axios.get('http://172.20.10.10:8081/data.json')
            .then(res => {
                if (res.status === 200) {
                    state.menuTree = res.data.list
                }
            })
            console.log(state.menuTree)
        }
    },
    actions: {
        addOne(context) {
            context.commit('add')
        },
        subOne(context, n) {
            context.commit('subtract', n)
        },
        getMenuTree(context){
            context.commit('getMenuTree')
        }
    }
})
export default store
