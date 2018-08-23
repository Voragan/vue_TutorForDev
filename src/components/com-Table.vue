<template>
    <div>
        <table class="table is-bordered">
            <tr>
                <td>No.</td>
                <td>EmpID</td>
                <td>Name</td>
                <td>Surname</td>
                <td>Age</td>
                <td>IMG</td>
            </tr>
            <tr v-for="(c,index) in customers" :key="index">
                <td>{{index+1}}</td>
                <td>
                    <router-link :to="`/customer/${c.id}`">{{c.id}}</router-link>
                </td>
                <td>{{c.firstName}}</td>
                <td>{{c.lastName}}</td>
                <td>{{c.age}}</td>
                <td>
                    <figure class="image is-32x32">
                        <img :src="bindImage(c.gender)">
                    </figure>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import male from '../male.png'
import female from '../female.png'

export default {
    props: ['customers'],
    methods: {
        bindImage(gender) {
            return gender == "M" ? male : female;
        }
    }
}
</script>
