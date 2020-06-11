<template>
    <div>
        <h1>{{title}}</h1>
        <p>Header</p>
        <slot name="header" :person="person"></slot>
        <p>Body</p>
        <slot name="body"></slot>
        <p>Footer</p>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Name extends Vue {
    @Prop({ type: String, required: true }) private title!: string;
    person = '홍길동'
}

</script>

<style>

</style>
