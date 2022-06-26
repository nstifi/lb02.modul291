<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/order">Order</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <br />
    <br />
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
