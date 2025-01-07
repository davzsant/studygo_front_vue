import { createRouter,createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Profile from "@/views/Profile.vue";
import Timeline from "@/views/Timeline.vue";
import Create from "@/views/Create.vue";
import Post from "@/views/Post.vue";
import Login from '@/views/Login.vue'

import checkAuth from "./auth";
import Logout from "@/views/Logout.vue";

const routes = [
    {path: '/', component: Home, name: 'Home'},
    {path: '/login', component: Login, name: 'Login'},
    {path: '/logout', component: Logout, name: 'Logout'},
    {path: '/profile', component: Profile, name: 'Profile',meta: {requiresAuth: true}},
    {path: '/timeline', component: Timeline, name: 'Timeline'},
    {path: '/post/:id',component: Post,name: 'Post',meta: {requiresAuth: true}},
    {path: '/create', component: Create, name: 'Create',meta: {requiresAuth: true}},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(checkAuth)


export default router