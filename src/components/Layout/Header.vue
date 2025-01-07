<script setup>
    import Brand from './Header/Brand.vue';
    import SearchBar from './Header/SearchBar.vue';
    import Links from './Header/Links.vue';
</script>

<template>
    <header>
        <Brand/>
        <SearchBar/>
        <Links/>
    </header>
</template>


<style scoped>
    header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 20px;
        align-items: center;
        width: calc(100vw - 40px);
        height: 10vh;
        box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.051);
        background-color: #151515;
    }

    @media screen and (max-width: 1000px) {

        .search-bar{
            width: 45%;
        }

        .links{
            display: none;
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
    }

</style>