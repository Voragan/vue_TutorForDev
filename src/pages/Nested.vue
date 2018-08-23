<template>
    <div>
        <h3 class="title">Nested Pages</h3>
        <input type="text" class="input" v-model="username">
        <p>{{username}}</p>
        <parent :username="username" @logout="logout" />
    </div>
</template>

<script>
import Parent from '../components/Parent.vue'

export default {
    data() {
        return {
            username: ''
        }
    },
    components: {
        parent: Parent
    }
    , methods: {
        logout() {
            console.log('')
            this.username = ''
            this.$emit('logout')
        }
    }
}
</script>
