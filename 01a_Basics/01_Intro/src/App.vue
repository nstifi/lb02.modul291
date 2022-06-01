<template>
  <!--
  Important: add always a HTML-root element (i.e. div)
  if you are using more than one component
  -->
  <div>
    <MyComponent />
  </div>
</template>

<script>
/* Import all components */
import Demos from './components/04_CSS-Modules'

export default {
  components: {
    MyComponent: Demos
  },
}
</script>

<style lang="scss">
//demo-03
//Import of global-style
@import 'styles/global';
</style>
