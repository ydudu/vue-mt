import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {
            path: '/page1',
            name: 'page1',
            component: () =>import ('@/views/page1.vue')
        },
        {
            path: '/page2',
            name: 'page2',
            component: () =>import('@/views/page2.vue')
        }
    ]
})
export default router
