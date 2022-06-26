<template>
  <div>
    <h1 v-if="false" v-text="text">Loading...</h1>
    <h2 v-else-if="false" v-html="html" />
    <a
      v-else
      :href="link.url"
      :target="link.target"
      :tabindex="link.tabindex"
      v-text="link.title"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // v-text
      text: 'LB02 Modul 291',
      // v-html
      html: 'LB02 Modul 291',
      // v-bind
      link: {
        url: 'https://www.migros-engagement.ch',
        target: '_blank',
        tabindex: '0',
        title: 'Das Engagement der Migros',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
h2 {
  margin: 40px 0 0;
  font-weight: normal;
  color: white;
}

a {
  display: block;
  margin-top: 40px;
  color: white;
}
</style>
