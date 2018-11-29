<template>
  <div id="app">
    <v-toolbar class="toolbar" :clipped-left="$vuetify.breakpoint.lgAndUp" color="primary" dark app fixed>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </v-toolbar>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import App from './app-class';
  export default App;
</script>

<style lang="scss">
  #app {
    color: #56b983;
  }
</style>
