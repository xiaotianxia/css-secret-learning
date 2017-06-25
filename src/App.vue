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

<style>
    .main {
        margin-left: 210px;
    }
    pre {
        margin: 0;
        margin-left: 10px;
        margin-bottom: 10px;
        padding: 10px;
        font-family: courier new;
        color: #222;
        background-color: #f1f1f1;
        border: 1px solid #c3c3c3;
        white-space: pre-wrap;
        font-size: 12px;
    }
    pre span {
        color: red;
    }
</style>
