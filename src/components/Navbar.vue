<template>
  <div class="box">
    <div class="section">
      <nav class="navbar">
        <div class="navbar-menu">
          <router-link class="navbar-item" to="/about">About</router-link>
          <router-link class="navbar-item" to="/product">Product</router-link>
          <router-link class="navbar-item" to="/form">Form</router-link>
          <router-link class="navbar-item" to="/customer">Customer</router-link>
          <router-link class="navbar-item" to="/pagination">Pagination</router-link>
          <router-link class="navbar-item" to="/search">Search</router-link>
          <router-link class="navbar-item" to="/column">Column</router-link>
          <router-link class="navbar-item" to="/nested">Nested</router-link>
          <router-link class="navbar-item" to="/vuex">Vuex</router-link>
          <router-link v-for="(p,index) in productIds" :key="index" class="navbar-item" :to="getnerate(p)">Product {{p}}</router-link>
          <!-- <router-link :to="`/product/${p}`">Product {{p}}</router-link> -->
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productIds: [1, 2, 3]
    }
  }, methods: {
    getnerate(n) {
      return `/product/${n}`
    }
  }
}
</script>


