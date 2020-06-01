<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-collapse id="nav-collapse" is-nav>
      <router-link class="text-white mx-3" to="/">Home</router-link>
      <router-link class="text-white ml-3" to="/products">Produtos</router-link>
      <b-navbar-nav class="ml-auto">
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <router-link class="text-white mr-2 ml-5 h2" to="/cart"><b-icon-cart3></b-icon-cart3>{{ItemsCartQtde}}</router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'ItemsCartQtde'
    ])
  }
}
</script>

<style>

</style>
