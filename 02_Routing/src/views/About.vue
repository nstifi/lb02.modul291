<template>
  <div class="about">
    <h1>ABOUT US</h1>
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
        'We decided to open an online meal delivery service.',
        'We have it all! From the best appetizers to the most incredible desserts.'
      ]
    }
  }
}
</script>
