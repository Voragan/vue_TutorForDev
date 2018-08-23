<template>
  <div class="box">
        <div class="section">
            <h3 class="title">Form Page</h3>
            <p>Scope Style from Vue.js</p>
            <div class="field">
                <label>Name</label>
                <div class="control">
                        <input type="text" :class="cssClass('name')" v-model="customer.name" name="name" v-validate="'required|min:5'">
                        <p class="help is-danger">{{errors.first('name')}}</p>
                </div>    


                <div class="control">
                        <label>Surname</label>
                        <input type="text" :class="cssClass('surname')" v-model="customer.surname" name="surname" v-validate="'required|min:10'">
                        <p class="help is-danger">{{errors.first('surname')}}</p>
                 </div>      
            </div>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            customer : {
            }
        }
    },
    methods : {
        cssClass(field){
            return this.errors.has(field) ? "input is-danger" : "input"
        }
    }
}
</script>

<style scoped>
</style>
