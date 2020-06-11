import Vue from 'vue';
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            {id:1 ,text: 'buy a car', checked: false},
            {id:2 ,text: 'play game', checked: false}
        ],
        users: []
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
        ADD_TODO(state, value) {
            state.todos.push({
                id: state.todos.length+1,
                text:value,
                checked: false,
            });
        },
        TOGGLE_TODO(state,{id, checked}) {
            const index = state.todos.findIndex(todo => todo.id === id);
            state.todos[index].checked = checked;
        },
        DELETE_TODO(state, todoId){
            const index = state.todos.findIndex(todo => todo.id === todoId);
            state.todos.splice(index, 1);
        }
    },
    //비동기 작업을 하고 state의 값을 변경할 떄 사용
    actions: {
        async getUsers({commit}) {
            const data = await axios.get("https://jsonplaceholder.typicode.com/users");

            await commit("SET_USERS", data.data);
        },

        addTodo({commit}, value) {
            /* 비동기 작업 ex)서버에서 데이터 받고 작업한다. */
            setTimeout(()=> {
                commit('ADD_TODO', value);
            },500); 
        },
        toggleTodo({commit},payload){
            setTimeout(()=> {
                commit('TOGGLE_TODO', payload);
            },500); 
        },
        deleteTodo({commit}, todoId){
            setTimeout(()=> {
                commit('DELETE_TODO', todoId);
            },500); 
        }
    },
    getters: {

    },
});