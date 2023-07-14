import { createStore } from "vuex";
import axiosClient from "../axios";
import * as mutations from './mutations'
import * as actions from './actions'
const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem('TOKEN'),
        }
    },
    getters: {},
    modules:{},
    actions,
    mutations
});

export default store;