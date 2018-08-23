<template>
  <div>
    <section class="section">
      <div class="container">
          <input type="number" v-model="amount">
          <p>{{ amountIncludeVat }}</p> 

          <p v-if="active">สวัสดีมนุษย์! เงื่อนไข v-if true false</p>

          <p v-if="counter<10">Counter less than 10</p> 
          <p else>Counter greater then 10</p>

          <p>{{displayText()}}</p>


          <input type="text" v-model="name">
          <input type="checkbox" v-model="single">

          <br>
          <input type="radio" name="gender" v-model="gender" value="M" >Male
          <input type="radio" name="gender" v-model="gender" value="F" >FeMale

          <br>
          <select v-model="income">
            <option value="0">--กรุณาเลือก--</option>
            <option value="1">10,000</option>
            <option value="2">20,000</option>
            <option value="3">30,000</option>
            <option value="4">40,000</option>
            <option value="5">50,000</option>
          </select>

          </br>
          <br>
          <p :key="n" v-for="n in numbers">{{n}}</p>

          <br>
          <p :key="index" v-for="(n,index) in numbers">{{n}}</p>

          </br>
          <button @click="hello(20)" class="button">Hello</button>
      </div>
    </section>
  </div>
</template>

<script>
import 'bulma/css/bulma.min.css'
export default {
  data(){
    return {
      amount : 100,
      name : 'Voragan',
      surname : 'Deemark',
      active : true,
      counter : 12,
      single : true,
      gender : 'M',
      income : 0,
      numbers : [10,20,30,40,50]
    }
  },
  methods :{
    hello(number){
      console.log("hello",number)
    },
    world(){
      console.log("world")
    },
    displayText(){
      switch(this.counter){
        case this.counter<10:
        return 'Counter less than 10'
        break;
        default : return 'Counter greater then 10'
        break;
      }
    }
  },
  computed : {
    amountIncludeVat(){
      return this.amount * 0.07;
    },
    fullName(){
      return `${this.name} ${ this.surname}`
    }
  }
}
</script>



