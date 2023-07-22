import { createStore } from "vuex";
import createMultiTabState from 'vuex-multi-tab-state';
import * as mutations from './mutations'
import * as actions from './actions'
const store = createStore({
    state: {
        loading:false,
        user: {
            data: {},
            token: sessionStorage.getItem('TOKEN'),
            step_verify:'stage',
            verified:false
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