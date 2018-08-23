<template>
  <div class="box">
        <div class="section">
            <h3 class="title">CustomerProfile</h3>
            <table class="table is-bordered">
                  <tr>
                      <td>EmpID</td>
                      <td>Name</td>
                      <td>Surname</td>
                      <td>Age</td>
                      <td>Company</td>
                      <td>Email</td>
                      <td>ContactDate</td>
                      <td>Img</td>
                  </tr>
                 <tr >
                     <td>{{objcustomers.id}}</td>
                     <td>{{objcustomers.firstName}}</td>
                     <td>{{objcustomers.lastName}}</td>
                     <td>{{objcustomers.age}}</td>
                     <td>{{objcustomers.company}}</td>
                     <td>{{objcustomers.email}}</td>
                     <td>{{objcustomers.contactDate}}</td>
                     <td>
                         <figure class="image is-32x32">
                            <img :src="bindImage(objcustomers.gender)">
                        </figure>
                    </td>
                 </tr>
             </table> 


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
            objcustomers : {}
        }
    },
  mounted(){
      this.getCustomerDetail(this.$route.params.id)
  },
  methods : {
      async getCustomerDetail(id){
        try{
            const res = await axios.get(`http://localhost:3000/customers/${id}`)
            this.objcustomers = res.data
            console.log(res.data)
        }catch{
            console.log(err.message)
        }
      },
      bindImage(gender){
          return gender == "M" ? male : female;
      }
  }
}
</script>