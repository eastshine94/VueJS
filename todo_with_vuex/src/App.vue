<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo/>
    <AddTodo/>
    <hr/>
    <TodoList/>
    <UserList/>
  </div>
</template>

<script lang="ts">
import { Component,Vue } from 'vue-property-decorator';
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";
import UserList from '@/components/UserList.vue';
import CompletedTodo from '@/components/CompletedTodo.vue';
interface TodoDto {
  id: number;
  text: string;
  checked: boolean;
}

@Component({
  components:{
    TodoList,
    AddTodo,
    UserList,
    CompletedTodo
  }
})
export default class App extends Vue{
  

}
</script>
