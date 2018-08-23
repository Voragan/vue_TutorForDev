<template>
    <div class="box">
        <div class="section">
            <p class="title">Search Pages</p>

            <input @keyup="searchCustomer" type="text" class="input" v-model="searchBy">

            <table class="table is-bordered">
                <tr>
                    <td>No.</td>
                    <td>EmpID</td>
                    <td>Name</td>
                    <td>Surname</td>
                    <td>Age</td>
                    <td>Company</td>
                    <td>Email</td>
                    <td>ContactDate</td>
                    <td>Img</td>
                </tr>
                <tr v-for="(c,index) in customers" :key="index">
                    <td>{{index+1}}</td>
                    <td>
                        <router-link :to="`/customer/${c.id}`">{{c.id}}</router-link>
                    </td>
                    <td>{{c.firstName}}</td>
                    <td>{{c.lastName}}</td>
                    <td>{{c.age}}</td>
                    <td>{{c.company}}</td>
                    <td>{{c.email}}</td>
                    <td>{{c.contactDate}}</td>
                    <td>
                        <figure class="image is-32x32">
                            <img :src="bindImage(c.gender)">
                        </figure>
                    </td>
                </tr>
            </table>

        </div>
    </div>
</template>

<script>

import { get } from 'axios'

import { debounce } from 'lodash'
import male from '../male.png'
import female from '../female.png'


export default {
    data() {
        return {
            searchBy: '',
            customers: []
        }
    },
    methods: {
        async searchCustomer() {
            const { data: customer } = await get(`http://localhost:3000/customers?q=${this.searchBy}`)
            this.customers = customer
        },
        bindImage(gender) {
            return gender == "M" ? male : female;
        }
    },
    created() {
        this.searchCustomer = debounce(this.searchCustomer, 600)
    }
}
</script>
