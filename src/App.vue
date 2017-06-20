<template>
  <div id="app">
      <my-menu></my-menu>
      <div class="main">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
import myMenu from '@/components/Menu';

export default {
    name: 'app',

    components: {
        myMenu
    }
}
</script>

<style scoped>
    .main {
        margin-left: 210px;
    }
</style>
