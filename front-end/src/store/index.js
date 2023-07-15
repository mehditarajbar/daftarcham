import { createStore } from "vuex";
import createMultiTabState from 'vuex-multi-tab-state';
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
    mutations, 
    plugins: [
        createMultiTabState([
            'user'
        ]),
    ],
});

export default store;