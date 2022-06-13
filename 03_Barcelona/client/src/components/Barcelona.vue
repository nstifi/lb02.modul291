<template>
  <div id="app">
    <b-container fluid>
      <b-jumbotron>
        <template #header>Spenden Anfrage</template>
        <template #lead>
          FC BARCELONA
        </template>
        <hr class="my-4">
        <p>Kontaktdaten:</p>
        <p>
          Präsident: {{ $store.getters.president }}<br/>
          Verein: {{ $store.getters.club }}<br/>
          Betrag: {{ $store.getters.amount }}
        </p>
          <b-button variant="primary" id="tooltip1" v-b-tooltip.hover>
            Telefon
          </b-button>&nbsp;&nbsp;
          <b-tooltip target="tooltip1" triggers="hover">
            {{ $store.getters.president }} anrufen!
          </b-tooltip>
        <b-button variant="success" id="tooltip2" v-b-tooltip.hover>Email</b-button>&nbsp;&nbsp;
        <b-tooltip target="tooltip2" triggers="hover">
          An {{ $store.getters.presidentEmail }} schreiben?
        </b-tooltip>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
