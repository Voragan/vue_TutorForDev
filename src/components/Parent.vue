<template>
    <div class="box">
        <h3 class="title">Parent</h3>
        <p>{{username}}</p>
        <!-- <child :username="username" /> -->
        <child :username="username" @logout="logout" />
    </div>
</template>

<script>
import Child from '../components/Child.vue'

export default {
    props: ['username'],
    components: {
        child: Child
    }, methods: {
        logout() {
            this.$emit('logout')
        }
    }
}
</script> 