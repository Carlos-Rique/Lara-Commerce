<template>
<div>
  <b-container>
    <h3 class="mt-5 mb-2">Carrinho</h3>
    <b-table hover :items="items" class="text-center">
      <template v-slot:cell(Adicionar)="data">
        <div v-html="data.value">
        </div>
      </template>
    </b-table>
  </b-container>
  <div class="h2 mb-0">
    <b-icon icon="arrow-up"></b-icon>
    <b-icon icon="exclamation-triangle"></b-icon>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          cod: 40, Produtos: 'Dickerson', Quantidade: '4', Adicionar: '<svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-arrow-up b-icon bi"><g><path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"></path><path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8 3.707 5.354 6.354a.5.5 0 1 1-.708-.708l3-3z"></path></g></svg>', ValorUnitario: 'R$ 45,00', Total: 'R$ 45,99'
        },
        { cod: 21, Produtos: 'Larsen', last_name: 'Shaw' },
        { cod: 89, Produtos: 'Geneva', last_name: 'Wilson' },
        { cod: 38, Produtos: 'Jami', last_name: 'Carney' }
      ]
    }
  }
}
</script>

<style>

</style>
