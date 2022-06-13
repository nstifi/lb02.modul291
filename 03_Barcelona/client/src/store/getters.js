import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    vorname: "Joan",
    nachname: "Laporta",
    verein: "FC Barcelona",
    betrag: "€500 Millionen",
    jahr: "2023"
  },
  getters: {
    president(state) {
      return `${state.vorname} ${state.nachname}`;
    },
    presidentEmail(state) {
      return `${state.vorname}.${state.nachname}@barcelona.com`.toLowerCase();
    },
    club(state) {
      return `${state.verein} für ${state.betrag} bis ${state.jahr}`;
    },
    amount(state) {
      return `${state.betrag} in ${state.jahr}`;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
