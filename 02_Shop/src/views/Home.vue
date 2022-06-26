<template>
  <div>
    <h2>Willkommen</h2>
<a href="https://www.instagram.com/sonyalpha/" target="_blank" style="text-decoration: none"  >Instagram</a>
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
        'Schaue bei unserem Instagram Account vorbei und erfahre mehr!',
      ]
    }
  }
}
</script>
