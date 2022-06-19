<template>
  <div id="app">
    <p id="title"><b>FOOD DELIVERY</b></br>leicht gemacht</p>
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/menu">Menu</router-link> |
      <router-link to="/order">Order</router-link> |
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
