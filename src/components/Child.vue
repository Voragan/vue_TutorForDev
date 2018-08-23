<template>
    <div class="box">
        <h3 class="title">Child</h3>
        <p>{{username}}</p>
        <!-- <grandchild :username="username" /> -->
        <grandchild :username="username" @logout="logout" />
    </div>
</template>

<script>
import GrandChild from '../components/GrandChild.vue'

export default {
    props: ['username'],
    components: {
        grandchild: GrandChild
    }
    , methods: {
        logout() {
            this.$emit('logout')
        }
    }
}
</script> 