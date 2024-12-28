import { createRouter,createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Profile from "@/views/Profile.vue";
import Timeline from "@/views/Timeline.vue";
import Create from "@/views/Create.vue";

const routes = [
    {path: '/', component: Home, name: 'Home'},
    {path: '/profile', component: Profile, name: 'Profile'},
    {path: '/timeline', component: Timeline, name: 'Timeline'},
    {path: '/create', component: Create, name: 'Create'},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router