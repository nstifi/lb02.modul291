<template>
  <div>
    <MyComponent />
  </div>
</template>

<script>
/* Import all components */
import Demos from './components/VueDirectives'

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
