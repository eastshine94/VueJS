<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>  
    <AddTodo @add-todo = "addTodo"/>
    <hr/>
    <TodoList 
      @toggle-checkbox="toggleCheckbox"
      @click-delete="deleteTodo"
    />
   
  </div>
</template>

<script lang="ts">
import { Component,Vue } from 'vue-property-decorator';
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";
interface TodoDto {
  id: number;
  text: string;
  checked: boolean;
}

@Component({
  components:{
    TodoList,
    AddTodo
  }
})
export default class App extends Vue{
  
  
  addTodo(value: string): void {
    this.todos.push({
      id: this.todos.length+1,
      text:value,
      checked: false,
    });

  }
  toggleCheckbox({id, checked}: TodoDto): void {
      const index = this.todos.findIndex(todo => todo.id === id);
      this.todos[index].checked = checked;
  }
  deleteTodo({id}: TodoDto): void {
    const index = this.todos.findIndex(todo => todo.id === id);
    this.todos.splice(index, 1);
  }
}
</script>
