<template>
    <div>
        <h1>{{title}}</h1>
        <p>{{name}}</p>
        <button @click="updatedName">change Name</button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Name extends Vue {
    @Prop({ type: String, required: true }) private title!: string;

    name = '홍길동';
    updatedName () {
      this.name = '홍길동 updated'
    }
}

</script>

<style>

</style>
