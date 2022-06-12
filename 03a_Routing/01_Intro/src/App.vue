<template>
  <!--
    Basic router navigation
    Update navigation by adding two router links for Home and About
   -->
  <div id="app">
    <div id="logo"><img class="logo" alt="BZZ logo" src="./assets/logo.png"></div>
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/message">Message</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
/* Import all components */
export default {
  components: {
  }
}
</script>

<style lang="scss">
//Import of global-style
@import 'styles/global';
</style>
