<template>
    <div class="search-bar">
        <i class="bi bi-search"></i>
        <input type="search" name="search-bar" id="search-bar" placeholder="Search...">
    </div>
</template>


<style scoped>
    .search-bar{
        position: relative;
        width: 30%;
    }

    .search-bar > i{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 10px;
    }

    .search-bar > input{
        background-color: #444;
        padding: 15px;
        font-size: 18px;
        color: rgb(205, 205, 205);
        border-radius: 5px;
        outline: none;
        border: none;
        width: 100%;
        padding-left: 40px;
    }

    @media screen and (max-width: 1000px) {
        .search-bar{
            width: 45%;
        }

    }
</style>