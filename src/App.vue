<template>
  <div id="app">
    <nav-bar :carrinho_qtde="3"/>

    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>
