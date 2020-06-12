<template>
    <div>
        <p>Completed Todo : {{ numberOfCompletedTodo}}</p>
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
interface TodoDto {
    id: number;
    text: string;
    checked: boolean;
}
@Component
export default class CompletedTodo extends Vue {
    get numberOfCompletedTodo() {
        return this.$store.getters['todo/numberOfCompletedTodo'];
    }
}
</script>