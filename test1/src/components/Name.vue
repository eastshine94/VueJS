<template>
    <div>
        <p>{{name}}</p>
        <button @click="updatedName">change Name</button>
    </div>
</template>

<script>
export default {
    data() {
       return {
            name: '홍길동'
        }
    },
    methods: {
        updatedName() {
            this.name = "홍길동 updated";
        }
    },    
}
</script>

<style>

</style>