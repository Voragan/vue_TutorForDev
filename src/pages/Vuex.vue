<template>
    <div class="box">
        <div class="section">
            <p class="title">Vuex Pages</p>

            <button @click="getCustomers()" class="button">Get Customers</button>

            <p>{{customerName}}</p>

            <div class="columns">
                <div class="column">
                    <customer-table :customers="femaleCustomers" />

                </div>
                <div class="column">
                    <customer-table :customers="maleCustomers" />

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import male from '../male.png'
import female from '../female.png'
import Comtable from '../components/com-Table'


export default {
    components: {
        "customer-table": Comtable
    },
    computed: {
        ...mapState(['customers']),
        ...mapGetters(['femaleCustomers', 'maleCustomers', 'customerName'])
    },
    methods: {
        ...mapActions(['getCustomers']),
        bindImage(gender) {
            return gender == "M" ? male : female;
        }
    }
}
</script>
