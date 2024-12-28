<template>
    <div>
        <div class="brand">
            <h1>Not Decided</h1>
        </div>

        <div class="search-bar">
            <i></i>
            <input type="search" name="search-bar" id="search-bar">
        </div>

        <nav class="links">
            <ul>
                <li title="Inicio">
                    <i class="bi bi-house"></i>
                    <router-link to="/">Home</router-link>
                </li>
                <li  title="Timeline">
                    <i class="bi bi-signpost-split"></i>
                    <router-link to="/timeline">Timeline</router-link>
                </li>
                <li title="Create"> 
                    <i class="bi bi-person"></i>
                    <router-link to="/create">Create</router-link>
                </li>
                <li title="Profile">
                    <i class="bi bi-person"></i>
                    <router-link to="/profile">Profile</router-link>
                </li>
                <li title="Log In">
                    <i class="bi bi-box-arrow-in-right"></i>
                    <router-link to="/login">Log In</router-link>
                </li>
                <li title="Log Out">
                    <i class="bi bi-box-arrow-in-left"></i>
                    <router-link to="/logout">Log Out</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>


<style scoped>
    
</style>