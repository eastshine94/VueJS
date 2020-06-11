<template>
      <input type="text" class="w-100 p-2" placeholder="Type todo" @keyup.enter="addTodo"/>
</template>

<script lang="ts">
export default {
    methods:{
        addTodo(e: Event): void {
            const element: HTMLInputElement = e.target as HTMLInputElement
            const value: string = element.value;
            element.value= "";
            this.$emit('add-todo', value);
            
        }
    }    
}
</script>
