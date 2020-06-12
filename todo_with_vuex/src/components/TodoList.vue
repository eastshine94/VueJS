
<template>
    <div>
        <Todo 
            v-for="todo in todos"  
            :key="todo.id"
            :todo="todo"
        />
    </div>
  
</template>

<script lang="ts">
import Todo from '@/components/Todo.vue';
import { Vue, Component } from 'vue-property-decorator';

interface TodoDto {
  id: number;
  text: string;
  checked: boolean;
}

@Component({
    components: {
        Todo
    }
})
export default class TodoList extends Vue {
    todos = this.$store.state.todo.todos;
}
</script>

<style>

</style>  