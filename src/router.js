import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'
import {createRouter,createWebHistory} from 'vue-router'

const routes =[
    {
        name:'HomePage',
        component:HomePage,
        path:'/',

    },
    {
        name: 'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name: 'SignIn',
        component:SignIn,
        path:'/sign-in'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;



