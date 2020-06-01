<template>
  <div>
    <b-card
      overlay
      img-src="https://img.freepik.com/fotos-gratis/conceito-textured-pintado-colorido-concreto-do-papel-de-parede-da-parede_53876-31799.jpg?size=626&ext=jpg"
      img-alt="Card Image"
      text-variant="white"
      title="Observações:"
    >
      <div class="text-center mt-5">
      <b-card-text>
        O sistema possui um usuário padrão.
      </b-card-text>
      <b-card-text>
        Todos os produtos já vem cadastrados do banco de dados.
      </b-card-text>
      <b-card-text>
        Está sendo carregada uma imagem padrao para representar os produtos.
      </b-card-text>
      <b-card-text>
        Ao clicar em produto, será exibida a lista com os produtos disponíveis, ao clicar em cima de algum ele será adicionado ao carrinho.
      </b-card-text>
      <b-card-text>
       Clicando no carrinho, você pode escolher a quantidade do produto e finalizar a venda. Que será salva no banco de dados.
      </b-card-text>
      </div>
    </b-card>
</div>

</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
img{
  margin: 0px;
  height: 30rem;
}
</style>
