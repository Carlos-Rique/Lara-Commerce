<template>
          <b-col cols="3">
            <div class="card my-2" @click="addToCart(product)">
            <img src="https://autolojapneus.ciaimg.com.br/Assets/Produtos/SuperZoom/OVATIONVI-388.jpg?v=bedd0f82-1" class="card-img-top" alt="...">
            <div class="card-body p-0">
              <h5 class="card-title mt-1 mb-1 ml-3">{{product.name}}</h5>
              <p class="card-text mb-1 ml-3"><small class="text-muted">Cod: {{product.id}}</small></p>
              <div class="card-footer mt-1 d-flex justify-content-between">
              <small class="text-muted">Preço: R$ {{product.price.toFixed(2)}}  </small> <b-icon-cart-plus></b-icon-cart-plus>
              </div>
            </div>
            </div>
          </b-col>
</template>

<script>
export default {
  props: {
    product: Object
  },
  data () {
    return {
      isHovered: false
    }
  },
  methods: {
    addToCart (product) {
      this.$store.dispatch('insertProductOnCart', product)
    }
  }
}
</script>

<style scoped>
img{
  height: 11rem;
}
.card:hover {
  cursor: pointer;
  background-color: aqua;
}
</style>
