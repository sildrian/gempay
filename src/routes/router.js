
import { createRouter, createWebHistory }  from 'vue-router';
import NotFound from '@/pages/errors/404.vue'

const routes = [
    // {
    //     path:'/',
    //     redirect: { name: 'dashboard' }
    // },
    // {
    //     path: '/',
    //     name: 'dashboard',
    //     component: Dashboard,
        // children: [{
        //     path: '/dashboard/movies',
        //     name: 'dashboard.movies',
        //     // component: page('dashboard/MovieView.vue'),
        //     component: './components/dashboard/MovieView.vue',
        // }],
    // },
    { 
        path: '/:pathMatch(.*)*', 
        name : "notfound",
        component: NotFound,
    }
];

const router = createRouter({
    // history: createWebHistory(baseUrl),
    history: createWebHistory(),
    // mode: 'history',
    routes,
});

// router.beforeEach((to, from, next) => {
//     // Not logged into a guarded route?
//     if ( to.meta.requiresAuth && !store.getters.userid ) next({ name: 'login' })
  
//     // Carry On...
//     else next()
// })

export default router;