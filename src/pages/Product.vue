<template>
    <div class="box">
        <div class="section">
            <h3 class="title">Product Page</h3>
            <p class="control">
                <button @click="getProducts" class="buton">Get Products</button>
            </p>


            <input v-model="product.product_name_en" type="text" class="input" name="product_name_en" placeholder="produceName">
            <input v-model="product.unit_en" type="text" class="input" name="unit_en" placeholder="unit_en">
            <p class="control">
                <button @click="postProducts" class="button">Save</button>
            </p>


            <hr/>
            <input type="text" class="input" v-model="user.username" placeholder="username">
            <input type="text" class="input" v-model="user.password" placeholder="password">
            <p class="control">
                <button @click="postLogin" class="button">Save</button>
                <p>{{token}}</p>
            </p>

            <hr/>


            <pre>
                <table class="table is-bordered">
                  <tr>
                      <td>No.</td>
                      <td>ID</td>
                      <td>product_name_en</td>
                      <td>product_name_th</td>
                      <td>unit_en</td>
                      <td>unit_th</td>
                      <td>price</td>
                      <td>ลบ</td>
                  </tr>
                 <tr v-for="(c,index) in products" :key="index">
                     <td>{{index+1}}</td>
                     <td><router-link :to="`/customer/${c.id}`">{{c.id}}</router-link></td>
                     <td>{{c.product_name_en}}</td>
                     <td>{{c.product_name_th}}</td>
                     <td>{{c.unit_en}}</td>
                     <td>{{c.unit_th}}</td>
                     <td>{{c.price}}</td>
                     <td><a @click="deleteProducts(c.id)">{{c.id}}</a></td>
                 </tr>
             </table> 
            </pre>
        </div>
    </div>
</template>

<script>
    //import axios from 'axios'
    import axios from '../axios.js'

    export default {
        mounted() {
            const token = localStorage.getItem('token')
            if (token) {
                this.token = token
                console.log(this.token)
            }
        },
        data() {
            return {
                products: [],
                product: {},
                token: '',
                user: {}
            }
        },
        methods: {
            async getProducts() {
                const { data } = await axios.get('http://localhost:3000/api/v1/products?price=300')
                this.products = data
            },
            async postProducts() {
                try {
                    const { data } = await axios.post(
                        "http://localhost:3000/api/v1/products",
                        this.product
                    )
                } catch (error) { }
            },
            async deleteProducts(id) {
                const { data } = await axios.delete(
                    `http://localhost:3000/api/v1/products/${id}`)
                this.getProducts()

            },
            async postLogin() {
                const { data } = await axios.post(`http://localhost:3000/api/v1/users/login`, this.user)
                this.token = data.token
                localStorage.setItem("token", data.token)
            }
        }
    }

</script>