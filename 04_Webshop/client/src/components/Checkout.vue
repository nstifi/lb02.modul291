<template>
  <div>
    <h2>Checkout</h2>
    Dein Warenkorb beträgt CHF {{ cartTotal.toFixed(2) }}.
    <b-button variant="primary" v-show="cartTotal > 0" @click="checkout">Checkout</b-button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'Cart',
  computed: mapGetters(['cartTotal']),
  methods: {
    checkout() {
      alert('Einkauf erfolgreich, deine Ware wird innerhalb von 5 Werktagen bei dir ankommen.');
    }
  }
}
</script>

