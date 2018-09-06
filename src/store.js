import Vue from 'vue'
import Vuex from 'vuex'
import { get } from 'axios'


Vue.use(Vuex)

// // const foo = { foo: 'Foo' }
// // const bar = { ...foo, bar: 'Bar' }
// // console.log(bar)

export default new Vuex.Store({
    state: {
        usernameVuex: 'admin',
        amount: 100,
        customers: []
    },
    mutations: {
        mutateCustomers(state, value) {
            state.customers = value
        }
    },
    actions: {
        async getCustomers(context) {
            try {
                const { data: customer } = await get(`http://localhost:3000/customers`)
                context.commit('mutateCustomers', customer)

            } catch (e) {

            }
        }
    },
    getters: {
        femaleCustomers(state) {
            return state.customers.filter(c => {
                return c.gender == 'F'
            })
        },
        maleCustomers(state) {
            return state.customers.filter(c => {
                return c.gender == 'M'
            })
        },
        customerName(state) {
            return state.customers.map(c => {
                return c.firstName + ' ' + c.lastName
            });
        }
    }
})