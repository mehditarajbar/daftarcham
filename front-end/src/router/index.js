import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/index.js';

const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../pages/404.vue')
    },
    {
        path: '/403',
        name: 'Forbiden',
        component: () => import('../pages/403.vue')
    }
    ,
    {
        path: '/',
        redirect: '/dashboard',
        component: () => import('../components/DefaultLayout.vue'),
        meta: { middleware: 'auth' },
        children: [
            { path: '/dashboard', name: 'Dashboard', component: () => import('../pages/Dashboard.vue') },
            { path: '/notes', name: 'Notes', component: () => import('../pages/Note/Notes.vue') },
            { path: '/notes/edit/:id', name: 'NoteUpdate', component: () => import('../pages/Note/NoteUpdate.vue') },
            { path: '/notes/create', name: 'CreateNote', component: () => import('../pages/Note/Create.vue') },
            { path: '/tasks', name: 'Tasks', component: () => import('../pages/Task/Tasks.vue') },
            { path: '/team', name: 'Team', component: () => import('../pages/Team/Team.vue') },
            { path: '/setting', name: 'Setting', component: () => import('../pages/Setting/Setting.vue') },
            { path: '/categories', meta: { requirePolicy: 'category-show', requireRole: 'admin' }, name: 'Categories', component: () => import('../pages/Category/Categories.vue') },
            { path: '/categories/create', meta: { requirePolicy: 'category-create', requireRole: 'admin' }, name: 'CreateCategory', component: () => import('../pages/Category/Create.vue') },
            { path: '/categories/edit/:id', meta: { requirePolicy: 'category-edit', requireRole: 'admin' }, name: 'EditCategory', component: () => import('../pages/Category/Edit.vue') },
            { path: '/roles-permissions', meta: { requirePolicy: 'roles-show', requireRole: 'admin' }, name: 'RolesPermissions', component: () => import('../pages/RolePermission/RolesAndPermissions.vue') },

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
            if (!to.meta.requireRole) {
                next()
            }
            else if (store.state.user.role.toLowerCase() === to.meta.requireRole && store.state.user.permissions.includes(to.meta.requirePolicy)) {
                next()
            } else {
                next({ name: 'Forbiden' })
            }

        } else {
            next({ name: 'Login' })
        }
    }

})

export default router;