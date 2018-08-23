<template>
  <div>
    <section class="section">
      <div class="container">
        <navbar></navbar>
        <router-view />
      </div>
    </section>
  </div>
</template>

<script>
import 'bulma/css/bulma.min.css'
import Navbar from './components/Navbar.vue'

export default {
  components:{
    'navbar' : Navbar
  }
}
</script>



