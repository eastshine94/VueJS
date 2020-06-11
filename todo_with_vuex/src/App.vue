<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>  
    <AddTodo/>
    <hr/>
    <TodoList/>
   
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
  

}
</script>
