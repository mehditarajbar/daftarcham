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
        meta: { requiresAuth: true },
        children: [
            { path: '/dashboard', name: 'Dashboard', component: () => import('../pages/Dashboard.vue') },
            { path: '/notes', name: 'Notes', component: () => import('../pages/Notes.vue') },
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
        meta: { isGuest: true },
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
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: 'Login' });

    } else if (to.name === 'Verify') {
        if (store.state.user.data.verify === 'sending') {
            next()

        } else {

            next({ name: 'Login' })
        }
    } else if (store.state.user.token && (to.meta.isGuest)) {
        next({ name: 'Dashboard' });
    } else {
        next();
    }
})

export default router;