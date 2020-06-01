<template>
<div>
  <b-container class="bv-example-row mb-5">
    <h3 class="mt-5 mb-3">Carrinho</h3>
    <CartItems v-for="product in cart" :key="product.id" :product="product" />
    <div v-if="pedidorealizado" class="alert alert-success mt-4" role="alert">
      Pedido realizado com sucesso!
    </div>
    <b-row class="mb-5 pb-5">
    </b-row>
  </b-container>
  <div class="p-3 bg-info text-white fixed-bottom d-flex flex-row-reverse bd-highlight">
    <b-button pill variant="success" @click="FinalizarPedido">Finalizar venda</b-button>
    <h3 class="mr-3"> Total a pagar: <strong>R$ {{total}}</strong></h3>
  </div>

</div>
</template>

<script>
import CartItems from '@/components/CartItems.vue'
import { mapState } from 'vuex'
export default {
  components: {
    CartItems
  },
  data () {
    return {
      precoproduto: 10.00,
      totalproduto: this.precoproduto,
      quantidade: 1,
      pedidorealizado: false
    }
  },
  methods: {
    FinalizarPedido () {
      this.pedidorealizado = true
      this.$store.dispatch('createOrder')
    }
  },
  computed: {
    ...mapState([
      'cart',
      'total'
    ])
  },
  mounted () {
    this.$store.dispatch('CalcTotalToPay')
  }
}
</script>

<style>
.border{
    border: 1px solid black;
  }
</style>
