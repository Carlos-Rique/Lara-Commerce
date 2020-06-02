<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-collapse id="nav-collapse" is-nav>
      <router-link class="text-white mx-3" to="/">Home</router-link>
      <router-link class="text-white ml-3" to="/products">Produtos</router-link>
      <b-nav-form class="ml-auto">
          <b-form-input size="sm" class="mr-sm-2" v-model="productsearch" @keyup="FilterProduct" placeholder="Busque um produto"></b-form-input>
          <b-icon-search class="text-white h2"></b-icon-search>
      </b-nav-form>
      <b-navbar-nav class="ml-auto">
        <router-link class="text-white mr-2 ml-5 h2" to="/cart"><b-icon-cart3></b-icon-cart3>{{ItemsCartQtde}}</router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      productsearch: ''
    }
  },
  computed: {
    ...mapGetters([
      'ItemsCartQtde'
    ])
  },
  methods: {
    FilterProduct () {
      this.$store.dispatch('FilterProduct', this.productsearch)
    }
  }
}
</script>

<style>

</style>
