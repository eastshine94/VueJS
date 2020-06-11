<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>  
    <input type="text" class="w-100 p-2" placeholder="Type todo" @keyup.enter="addTodo"/>
    <hr/>
    <Todo 
      v-for="todo in todos"  
      :key="todo.id"
      :todo="todo"
      @toggle-checkbox="toggleCheckbox"
      @click-delete="deleteTodo"
    />
   
  </div>
</template>

<script lang="ts">
import Todo from "@/components/Todo.vue"
import { Component,Vue } from 'vue-property-decorator';

interface TodoDto {
  id: number;
  text: string;
  checked: boolean;
}

@Component({
  components:{
    Todo
  }
})
export default class App extends Vue{
  
  todos: Array<TodoDto>= [
    {id:1 ,text: 'buy a car', checked: false},
    {id:2 ,text: 'play game', checked: false}
  ]
  addTodo(e: Event): void {
    const element: HTMLInputElement = e.target as HTMLInputElement
    const value: string = element.value;
    this.todos.push({
      id: this.todos.length+1,
      text:value,
      checked: false,
    });
    element.value= "";
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
