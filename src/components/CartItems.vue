<template>
<div class="text-center">
  <b-row>
    <b-col cols="1">Codigo</b-col>
    <b-col cols="3">Produto</b-col>
    <b-col cols="2">Quantidade</b-col>
    <b-col cols="3">Preço unitário</b-col>
    <b-col cols="3">Total Líquido</b-col>
  </b-row>
  <b-row>
    <b-col cols="1">{{product.id}}</b-col>
    <b-col cols="3">{{product.name}}</b-col>
    <b-col cols="2">
      <div class="border h4 pt-1 px-1 d-flex justify-content-between">
        <b-icon-dash @click="RemoverQtdeProduto(product.id)"></b-icon-dash>
        <h5>{{product_unit}}</h5>
        <b-icon-plus @click="AdicionarQtdeProduto(product.id)"></b-icon-plus>
      </div>
    </b-col >
    <b-col cols="3">R$ {{product.price.toFixed(2)}}</b-col>
    <b-col cols="3"><strong>R$ {{product.total_price.toFixed(2)}}</strong></b-col>
  </b-row>
  <hr/>
</div>
</template>

<script>
export default {
  props: {
    product: Object
  },
  data () {
    return {
      product_unit: 1
    }
  },
  methods: {
    AdicionarQtdeProduto (product) {
      this.product_unit++
      var quantity = this.product_unit
      this.$store.dispatch('CalcTotalPrice', { product, quantity })
    },
    RemoverQtdeProduto (product) {
      if (this.product_unit > 1) {
        this.product_unit--
        var quantity = this.product_unit
        this.$store.dispatch('CalcTotalPrice', { product, quantity })
      }
    }
  }
}
</script>

<style>

</style>
