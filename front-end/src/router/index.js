import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/index.js';

const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../pages/404.vue')
    }
    ,
    {
        path: '/',
        redirect: '/dashboard',
        component: () => import('../components/DefaultLayout.vue'),
        meta: { middleware: 'auth' },
        children: [
            { path: '/dashboard', name: 'Dashboard', component: () => import('../pages/Dashboard.vue') },
            { path: '/notes', name: 'Notes', component: () => import('../pages/Notes.vue') },
            { path: '/notes/create', name: 'CreateNote', component: () => import('../pages/CreateNote.vue') },
            { path: '/tasks', name: 'Tasks', component: () => import('../pages/Tasks.vue') },
            { path: '/team', name: 'Team', component: () => import('../pages/Team.vue') },
            { path: '/setting', name: 'Setting', component: () => import('../pages/Setting.vue') },

        ]

    }
    ,
    {
        path: '/auth',
        redirect: '/login',
        name: 'Auth',
        component: () => import('../components/AuthLayout.vue'),
        meta: { middleware: 'guest' },
        children: [
            {
                path: '/login',
                name: 'Login',
                component: () => import('../pages/Login.vue')
            },
            {
                path: '/verify-code',
                name: 'Verify',
                component: () => import('../pages/VerifyCode.vue')
            }
        ]
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    
    if (to.meta.middleware === 'guest') {    
        if (to.name === 'Verify') {
            if (store.state.user.step_verify === 'sending') {
                next()

            } else {                
                next({ name: 'Login' })
            }
        } else if (store.state.user.verified && store.state.user.token) {
            next({ name: 'Dashboard' })
        }
        else {
            next()
        }

    } else {
        
        if (store.state.user.verified && store.state.user.token) {
            next()
        } else {
            next({name:'Login'})
        }
    }

})

export default router;