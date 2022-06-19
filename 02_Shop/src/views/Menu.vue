<template>
  <div>
    <h1>Unsere Spezialitäten</h1>
    <div class="container">
      <div class="col">
        <h3>Hier Essen eingeben</h3>
        <input
            type="text"
            placeholder="Search with watcher"
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
        'Ceasar Salad', 'Green Salad', 'Mixed Salad', 'Tomato Salad',
        'Risotto Mare e Monti', 'Risotto Frutti di Mare',
        'Pizza Margherita', 'Pizza Prosciutto', 'Pizza Salame', 'Pizza Calzone',
        'Desert: Tiramisù', 'Desert: Glacé', 'Desert: Hot Brownie'
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
