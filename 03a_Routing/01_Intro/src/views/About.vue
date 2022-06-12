<template>
  <div class="about">
    <h1>ABOUT {{$route.params.user}}</h1>
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
        'Hello, we are students at BZZ',
        'We are currently in the third year of our apprenticeship'
      ]
    }
  }
}
</script>
