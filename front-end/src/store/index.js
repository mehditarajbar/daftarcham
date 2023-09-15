import { createStore } from "vuex";
import createMultiTabState from 'vuex-multi-tab-state';
import * as mutations from './mutations'
import * as actions from './actions'

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem('TOKEN'),
            step_verify: 'stage',
            verified: false,
            role: null,
            permissions: []
        },
        categories: {
            loading: false,
            links: [],
            data: []
        },
        category: {
            loading: false,
            data: []
        }

    },
    getters: {},
    modules: {},
    actions,
    mutations,
    plugins: [
        createMultiTabState([
            'user', 'categories'
        ]),
    ],
});


export default store;