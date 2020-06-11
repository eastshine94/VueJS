
<template>
    <div class ="mb-2 d-flex">
        
        <input type="checkbox" :checked="todo.checked" @change="toggleCheckbox"/>
        <span 
            class="ml-3 flex-grow-1"
            :class="todo.checked? 'text-muted':''"
            :style="todo.checked? 'text-decoration:line-through':''"
        >{{todo.text}}</span>
        <button class="btn btn-danger btn-sm" @click="clickDelete">Delete</button>
    </div>
</template>
<script lang="ts">
    interface TodoDto {
        id: number;
        text: string;
        checked: boolean;
    }
    import { Component, Vue, Prop } from 'vue-property-decorator';
    @Component
    export default class Todo extends Vue {
        @Prop({type: Object, required:true}) private todo!: TodoDto;
        toggleCheckbox(e: Event){
            const element: HTMLInputElement = e.target as HTMLInputElement;
            const value: boolean = element.checked;
            this.$store.commit('TOGGLE_TODO', {
                id: this.todo.id,
                checked: value 
            });
        }
        clickDelete(){
            this.$store.commit('DELETE_TODO', {
                id: this.todo.id,
            });
        }
    }
</script>

<style>
 span {
     line-height: 12px;
 }
</style>