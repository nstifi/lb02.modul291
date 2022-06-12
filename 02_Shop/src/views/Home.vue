<template>
  <div>
    <h1>HELLO!</h1>
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
        'Welcome to my site!',
        'This will be my last IT-Project'
      ]
    }
  }
}
</script>
