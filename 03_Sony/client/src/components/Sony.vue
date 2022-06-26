<template>
  <div id="app">
    <b-container fluid>
      <b-jumbotron>
        <template #header>Etwas passt nicht? Kontaktieren sie uns!</template>
        <template #lead>
          SONY Helpcenter
        </template>
        <hr class="my-4">
        <p>Infos für die Kontaktaufnahme:</p>
        <p>
          Kontaktperson: {{ $store.getters.kontaktperson }}<br/>
          Standord: {{ $store.getters.standord }}<br/>
          Öffnungszeiten: {{ $store.getters.oeffnungszeiten }}
        </p>
          <b-button variant="primary" id="tooltip1" v-b-tooltip.hover>
            Telefon
          </b-button>&nbsp;&nbsp;
          <b-tooltip target="tooltip1" triggers="hover">
            Rufen Sie {{ $store.getters.kontaktperson }} unter {{ $store.getters.telefonnummer }} an.
          </b-tooltip>
        <b-button variant="success" id="tooltip2" v-b-tooltip.hover>Email</b-button>&nbsp;&nbsp;
        <b-tooltip target="tooltip2" triggers="hover">
          An {{ $store.getters.kontaktpersonmail }} schreiben?
        </b-tooltip>
        <h2 style="margin-top: 20px" > Wir freuen uns auf Ihre Kontaktaufnahme! </h2>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
