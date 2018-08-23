<template>
    <div>
        <div class="box">
            <section class="section">
                <h1>Column Page</h1>
                <button @click="getCustomers()" class="button is-success">GET</button>
                <input type="radio" name="gender" v-model="gender" value="M"> Male
                <input type="radio" name="gender" v-model="gender" value="F"> Female

                <pre :key="index" v-for="(row,index) in columnCustomers" class="columns">
                                                        <div :key="c.id" v-for="(c,id) in row" class="column box">{{c.firstName}} {{c.lastName}}</div>
                                                        <div class="is-clearfix"></div>
                                                    </pre>

            </section>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import { chunk } from 'lodash'

export default {
    data() {
        return {
            customers: [],
            gender: ''
        }
    },
    methods: {
        async getCustomers() {
            try {
                const res = await axios.get('http://localhost:3000/customers')
                this.customers = res.data
            } catch (err) {
                console.log(err.message)
            }
        }
    },
    computed: {
        columnCustomers() {
            /*return chunk(this.customers, 3)*/
            return chunk(this.genderCustomers, 3)
        },
        genderCustomers() {
            return this.customers.filter((c) => {
                return c.gender == this.gender
            })
        }
    }
}
</script>

