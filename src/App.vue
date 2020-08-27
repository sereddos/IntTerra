<template>
  <div id="app">
    <div class="nav"></div>
    <router-view/>
  </div>
</template>

<script>
require('@/shared/components.js')
</script>

<style lang="scss">
html, body {
  height: 100%;
}

body {
  background-color: #F9F9F9;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  height: 100%;
}

.nav {
  height: 80px;
  background-color: #091C28;
}
</style>
