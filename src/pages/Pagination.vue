<template>
    <div class="box">
        <div class="section">
            <p class="title">Pagination</p>
            <p>CountTotalRow : {{totalcustomer}}</p>
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

            <nav class="pagination">
                <ul class="pagination-list">
                    <li v-for="p in totalPage" :key="p">
                        <router-link :class="IscurrentPage(p)" :to="`/pagination?limit=${limit}&page=${p}`">{{p}}</router-link>
                    </li>
                </ul>
            </nav>

            <!-- <a :key="p" v-for="p in totalPage" href="#">{{p}}</a> -->

        </div>
    </div>
</template>

<script>
import axios from 'axios'
import male from '../male.png'
import female from '../female.png'

export default {
    data() {
        return {
            customers: [],
            totalcustomer: 0,
            totalPage: 0,
            page: 1,
            limit: 5
        }
    },
    mounted() {
        const { limit = 5, page = 2 } = this.$route.query
        this.getCustomers(limit, page)
    },
    methods: {
        async getCustomers(limit, page) {
            try {
                /*const res = await axios.get(`http://localhost:3000/customers?_limit=${limit}&_page=${page}`)*/
                /*this.customers = res.data*/
                this.page = page
                this.limit = limit

                const { data: customer, headers } = await axios.get(`http://localhost:3000/customers?_limit=${limit}&_page=${page}`)
                this.customers = customer
                this.totalcustomer = headers['x-total-count']
                this.totalPage = Math.ceil(this.totalcustomer / limit)


            } catch (err) {
                console.log(err.message)
            }
        },
        bindImage(gender) {
            return gender == "M" ? male : female;
        },
        IscurrentPage(i) {
            if (this.page == i) {
                return 'pagination-link is-current'
            } else {
                return 'pagination-link'
            }
        }
    },
    watch: {
        '$route.query'() {
            const { limit = 5, page = 2 } = this.$route.query
            this.getCustomers(limit, page)
        }
    }
}
</script>
