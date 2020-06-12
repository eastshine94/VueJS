import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators';

interface TodoDto {
    id: number;
    text: string;
    checked: boolean;
}

@Module({namespaced:true})
export default class Todo extends VuexModule {
    
    todos=  [
        { id: 1, text: 'buy a car', checked: false },
        { id: 2, text: 'play game', checked: false }
    ]
    @Mutation
    ADD_TODO(value:string) {
        this.todos.push({
            id: this.todos.length + 1,
            text: value,
            checked: false,
        });
    }
    @Mutation
    TOGGLE_TODO({ id, checked }:TodoDto) {
        const index = this.todos.findIndex(todo => todo.id === id);
        this.todos[index].checked = checked;
    }

    @Mutation
    DELETE_TODO(todoId:number) {
        const index = this.todos.findIndex(todo => todo.id === todoId);
        this.todos.splice(index, 1);
    }
    
    //비동기 작업을 하고 state의 값을 변경할 떄 사용
    @Action   
    addTodo(value:TodoDto) {
        /* 비동기 작업 ex)서버에서 데이터 받고 작업한다. */
        setTimeout(() => {
            this.context.commit('ADD_TODO', value);
        }, 500);
    }
    @Action
    toggleTodo(payload: TodoDto) {
        setTimeout(() => {
            this.context.commit('TOGGLE_TODO', payload);
        }, 500);
    }
    @Action
    deleteTodo(todoId:number) {
        setTimeout(() => {
            this.context.commit('DELETE_TODO', todoId);
        }, 500);
    }
    

    //store에서 계산된 미리 계산된 결과를 다른 컴포넌트에서 가져다 쓸 때 사용
    
    get numberOfCompletedTodo() {
        return this.todos.filter(todo => todo.checked).length;
    }
}
    
    