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
    .menu a {
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    .menu .router-link-exact-active {
        color: red;
    }
</style>
