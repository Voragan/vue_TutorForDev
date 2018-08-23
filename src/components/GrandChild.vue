<template>
    <div class="box">
        <h3 class="title">Grand Child</h3>
        <p>{{username}}</p>
        <p class="control">
            <button @click="logout" class="button is-danger">Logout</button>
        </p>
        <p>Vuex Username : {{ usernameVuex }}</p>
        <p>Vuex Amount : {{ amount }}</p>
        <p>Us Vuex Amount : {{ usAmount }}</p>

        <p class="control">
            <!-- <button @click="$store.commit('mutateAmount',10)" class="button">Reset Amount</button> -->
            <button @click="mutateAmount(100)" class="button">Reset Amount</button>
        </p>

        <pre>{{customers}}</pre>
        <button @click="getCustomers()" class="button">Get Customers</button>
        <!-- <button @click="$store.dispatch('getCustomers')" class="button">Get Customers</button> -->

    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

const mapStateA = { amount() { } }
const computed = { ...mapStateA, xxx() { } }
console.log(computed)

export default {
    props: ['username'],
    methods: {
        logout() {
            this.$emit('logout')
        },
        ...mapMutations(['mutateAmount']),
        ...mapActions(['getCustomers'])
    },
    computed: {
        // ...mapState(['amount', 'usernameVuex']),
        ...mapState(['amount', 'usernameVuex', 'customers']),
        ...mapGetters(['usAmount']),
        xxx() { }
    }

    // computed: {
    //     vuexUsername() {
    //         return this.$store.state.username
    //     },
    //     vuexAmount() {
    //         return this.$store.getters.usAmount
    //     }
    // }


}
</script> 