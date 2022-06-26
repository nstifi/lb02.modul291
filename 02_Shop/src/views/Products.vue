<template>
  <div>
    <h2>Unsere Kamerabodys</h2>
    <div class="container">
      <div class="col">
        <h3>Suche nach unseren Kameras</h3>
        <input
            type="text"
            placeholder="Kamera eingeben"
            v-model="input3"
        />
        <ul>
          <li v-for="(item, i) in watcherFilterList" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // Data
      classList: [
        'Sony a7 II', 'Sony a7s II', 'Sony a7r II', 'Sony a7 III', 'Sony a7s III', 'Sony a7r III',
        'Sony a7 IV', 'Sony a7r IV', 'Sony a1', 'Sony FX3', 'Sony a7c', 'Sony a9 II', 'Sony a6600'
      ],
      // Watcher
      input3: '',
      watcherFilterList: []
    }
  },
  //Vue Hook
  created() {
    this.searchMethod()
  },
  watch: {
    input3: {
      handler() {
        this.watcherFilterList =
            this.classList
                .filter(item => item.toLowerCase().includes(this.input3.toLowerCase()))
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.col {
  margin-bottom: 2rem;
  width: 50%;
  height: 100%;
}
input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;
}
</style>
