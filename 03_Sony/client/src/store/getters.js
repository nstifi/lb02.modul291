import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    vorname: "Max",
    nachname: "Mustermann",
    standort: "Sony HQ",
    oeffnungszeiten: "09:00 Uhr - 17:00 Uhr",
    telefonnummer: "+4177 470 09 89"
  },
  getters: {
    kontaktperson(state) {
      return `${state.vorname} ${state.nachname}`;
    },
    kontaktpersonmail(state) {
      return `${state.vorname}.${state.nachname}@sonyhelpcenter.com`.toLowerCase();

    },
    telefonnummer(state) {
      return `${state.telefonnummer}`;
    },
    standord(state) {
      return `${state.standort}`;
    },
    oeffnungszeiten(state) {
      return `${state.oeffnungszeiten}`;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
