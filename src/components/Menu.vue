<template>
    <div class="menu">
        <ul>
            <li v-for="item in menuConfig">
                <router-link :to="item.path">{{item.text}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import menuConfig from '@/router/config';

export default {
    data () {
        return {
            menuConfig: menuConfig
        }
    }
}
</script>

<style scoped>
    .menu {
        position: fixed;
        top: 0;
        left: 0;
        width: 200px;
        height: 100%;
        border-right: 1px solid #ccc;
    }
    .menu ul {
        margin: 0;
        padding: 0;
    }
    .menu ul li {
        height: 30px;
        line-height: 30px;
        margin: 0;
        list-style: none;
        text-align: center;
        background-color: #DCDCDC;
    }
    .menu ul li:hover {
        background-color: #778899;
    }
    .menu a {
        display: inline-block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #000;
    }
    .menu .router-link-exact-active {
        background-color: #778899;
        color: #fff
    }
</style>
