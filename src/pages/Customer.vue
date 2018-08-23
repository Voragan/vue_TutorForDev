<template>
  <div>
      <div class="box">
         <section class="section">
             <h1>Customer Page</h1>
             <button @click="getCustomers()" class="button is-success">GET</button>
            
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
                     <td><router-link :to="`/customer/${c.id}`">{{c.id}}</router-link></td>
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
        </section>

        <!-- <div v-for="(c,index) in customers" :key="index">
            <p>{{`${c.firstName} ${c.lastName}`}}</p>
             <figure class="image is-64x64">
                 <img :src="bindImage(c.gender)">
             </figure>
        </div>  -->

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
            customers : []
        }
    },
    methods : {
    //   getCustomers(){
    //      axios.get('http://localhost:3000/customers')
    //      .then(res=>{
    //         this.customers = res.data
    //      })
    //      .catch(err=>{
    //          console.log(err.message)
    //      })
    //   },
      async getCustomers(){
          try{
            const res = await axios.get('http://localhost:3000/customers')
            this.customers = res.data
          } catch(err){
            console.log(err.message)
          }
      },
      bindImage(gender){
          return gender == "M" ? male : female;
      }
  }
}
</script>

