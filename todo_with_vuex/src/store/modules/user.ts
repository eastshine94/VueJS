import axios from 'axios';
import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators';

@Module({namespaced:true})
export default class User extends VuexModule{
    users= [];
    
    @Mutation
    SET_USERS(users: any) {
        this.users = users;
    }
    
    @Action
    getUsers() {
        console.log("getUsers");
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
            this.context.commit("SET_USERS",res.data);
        });
    }
}