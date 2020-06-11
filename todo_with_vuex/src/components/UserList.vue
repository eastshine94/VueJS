<template>
    <div>
        <h1>User List</h1>
        <div v-for= "user in users" :key="user.id">
                {{user.name}}    
        </div> 
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator';

@Component
export default class UserList extends Vue {
    users = this.$store.state.users;
    
    created() {
        this.getUsers();
    }
    getUsers() {
        this.$store.dispatch("getUsers");
    }
    
}
</script>