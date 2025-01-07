<template>
     <nav class="links" v-bind:class="{ menuNav: isHidden }">
        <button @click="toggleMenu()" class="backMenu"><i class="bi bi-arrow-bar-right"></i></button>
        <ul>
            <li title="Inicio" v-bind:class="{ active: $route.path === '/' }">
                <router-link to="/">
                    <i class="bi bi-house"></i>
                    <p>Home</p>
                </router-link>
            </li>
            <li title="Timeline" v-bind:class="{ active: $route.path === '/timeline' }">
                <router-link to="/timeline">
                    <i class="bi bi-signpost-split"></i>
                    <p>Timeline</p>
                </router-link>
            </li>
            <li  v-if="auth === true" title="Create" v-bind:class="{ active: $route.path === '/create' }">
                <router-link to="/create">
                    <i class="bi bi-plus-lg"></i>
                    <p>Create</p>
                </router-link>
            </li>
            <li v-if="auth === true" title="Profile" v-bind:class="{ active: $route.path === '/profile' }">
                <router-link to="/profile">
                    <i class="bi bi-person"></i>
                    <p>Profile</p>
                </router-link>
            </li>
            <li v-if="auth  == false" title="Log In" v-bind:class="{ active: $route.path === '/login' }">
                <router-link to="/login">
                    <i class="bi bi-box-arrow-in-right"></i>
                    <p>Log In</p>
                </router-link>
            </li>
            <li v-if="auth === true" title="Log Out" v-bind:class="{ active: $route.path === '/logout' }">
                <router-link to="/logout">
                    <i class="bi bi-box-arrow-in-left"></i>
                    <p>Log Out</p>
                </router-link>
            </li>
        </ul>
    </nav>
    <button @click="toggleMenu()" class="menu"><i class="bi bi-list"></i></button>
</template>


<script setup lang="ts">
import { onMounted, onUnmounted, onUpdated, ref } from 'vue';
import log from '@/services/log';

    const isHidden = ref<boolean>(true)
    const auth = ref<boolean>(true)

    onMounted(async ()=>{
        toggleMenu()
        window.addEventListener('resize',showMenu)
        auth.value = await log.verify_auth()
    })

    onUpdated(async ()=>{
        auth.value = await log.verify_auth()
    })
    onUnmounted(()=>{
        window.removeEventListener('resize',showMenu)
    })

    /** Verifica se a largura da tela é maior que 1000(tela grande) e ve se o menu é grande ou pequeno */
    const showMenu = () => {
        if(window.innerWidth > 1000)
        {
            isHidden.value = false
            return
        }
    }

    const toggleMenu = () => {
        isHidden.value = !isHidden.value
    }
</script>


<style scoped>
    .links{
        width: 50%;
        margin-right: 10px;
    }



    .links > ul{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 5px;
    }

    .links > ul > li{
        list-style: none;
        font-size: 30px;
       
    }

    .links > ul > li > a{
        color: white;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-wrap: nowrap;
        padding: 5px;
    }

    .links > ul > li > a > i{
        transition: 0.2s;
    }
    .links > ul > li > a > p{
        opacity: 0;
        position: absolute;
        text-decoration: none;
        transition: 0.2s;
    }

    .links > ul > li:hover > a > i{
        transform: rotate(15deg);
    }

    .links > ul > li:hover > a > p{
        opacity: 1;
    }

    .links > ul > li.active > a,.links > ul > li.active > p{
        color: rgb(194, 184, 0);
    }

    .links > ul > li.active > a > p{
        opacity: 1;
        font-weight: bold;
    }

    .menu{
        display: none;
    }

    .auth-required{
        font-weight: bold;
        font-size: 10px;
        position: absolute;
        top: -15%;
        right: 0%;
    }



    @media screen and (max-width: 1000px) {
        .links{
            z-index: 2;
            position: absolute;
            height: 100vh;
            background-color: #222;
            top: 0;
            right: 0;
            margin: 0;
            width: 35vw;
            transition: right 0.7s ease-in-out;
            
        }

        .links.menuNav{
            right: -100%;
        }

        .links > ul{
            flex-direction: column;
            align-items: flex-start;
        }

        .links > ul > li > a{
            flex-direction: row;
            justify-content: space-between;
            text-decoration: none;
            padding: 3px;
        }

        .links > ul > li > a > p{
            opacity: 1;
            position: relative;
            margin-left: 10px;
            
        }

        .menu{
            display: block;
            background-color: #131313;
            border: none;
            color: white;
            padding: 5px;
            font-size: 50px;
            cursor: pointer;
            transition: 0.4s;
        }

        .menu:hover{
            transform: rotate(5deg);
        }

        .backMenu{
            border: none;
            color: white;
            font-size: 50px;
            background-color: #222;
            width: 100%;
            margin-top: 10px;
            cursor: pointer;
        }
    }
</style>