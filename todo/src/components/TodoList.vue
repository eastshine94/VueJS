
<template>
    <div>
        <Todo 
            v-for="todo in todos"  
            :key="todo.id"
            :todo="todo"
            @toggle-checkbox="toggleCheckbox"
            @click-delete="clickDelete"
        />
    </div>
  
</template>

<script lang="ts">
import Todo from '@/components/Todo.vue';
import { Vue, Component, Prop } from 'vue-property-decorator';

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
    @Prop({type: Array, required: true}) private todos!: Array<TodoDto>;

    toggleCheckbox(value: TodoDto){
        this.$emit('toggle-checkbox', value);
    }
    clickDelete(todoId: number){
        this.$emit('click-delete',todoId);
    }
}
</script>

<style>

</style>  