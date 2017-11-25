import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/profile',
            name: 'ProfileHome',
            component: ProfileHome
        },
        {
            path: 'profile/subjects',
            name: 'ProfileSubject',
            component: ProfileSubject
        },
        {
            path: 'profile/hobbies',
            name: 'ProfileHobbies',
            component: ProfileHobbies
        }
    ]
}) 