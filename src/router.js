import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            icon: 'home',
            component: Home
        },
        {
            path: '/',
            name: 'Ground',
            component: () => import('./views/ground/CKEditor5'),
            children: [
                {
                    path: '/ckeditor5vue',
                    name: 'CKEditor5 for Vue',
                    icon: 'edit',
                    component: () => import('./views/ground/CKEditor5')
                },
            ]
        },

        {
            path: '/about',
            name: 'about',
            icon: 'info-circle',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },

    ]
})
