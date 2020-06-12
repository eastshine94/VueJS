<template>
      <input type="text" class="w-100 p-2" placeholder="Type todo" @keyup.enter="addTodo"/>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class AddTodo extends Vue {
    
    addTodo(e: Event): void {
        const element: HTMLInputElement = e.target as HTMLInputElement
        const value: string = element.value;
        element.value= "";
        
        //mutation
        //this.$store.commit('ADD_TODO',value);
        
        //action
        this.$store.dispatch('todo/addTodo', value);
    }
        
}
</script>
