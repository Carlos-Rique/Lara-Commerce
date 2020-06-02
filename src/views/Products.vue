<template>
  <div class="mt-5">
    <b-container class="bv-example-row">
      <b-row>
        <ProductCard v-for="product in productsFiltered" :key="product.id" :product="product" />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import { mapState } from 'vuex'
export default {
  components: {
    ProductCard
  },
  computed:
    mapState([
      'productsFiltered'
    ])
}
</script>

<style>

</style>
