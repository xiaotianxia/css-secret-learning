<template>
    <div class="menu">
        <ul>
            <li>
                <router-link to="/">1</router-link>
            </li>
            <li>
                <router-link to="/">2</router-link>
            </li>
            <li>
                <router-link to="/">3</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

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
</style>
