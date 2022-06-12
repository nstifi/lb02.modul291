<template>
  <div>
    <h1>HOME</h1>
    <p v-for="(m, i) in messages" :key="i">
      {{ m }}
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messages: [
        'Hello, this is the Home-Page',
        'Welcome to the site!'
      ]
    }
  }
}
</script>
