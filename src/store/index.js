import Vue from 'vue'
import Vuex from 'vuex'
import ProductService from '@/services/ProductService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: {},
    productsFiltered: {},
    cart: [],
    total: 0
  },
  mutations: {
    ADD_PRODUCT_TO_CART (state, product) {
      product.total_price = product.price
      state.cart.push(product)
    },
    SET_PRODUCTS (state, products) {
      state.products = products
      state.productsFiltered = products
    },
    CALC_TOTAL_PRODUCT_PRICE (state, payload) {
      state.cart.find(product => product.id === payload.product)
        .total_price = payload.quantity * state.cart.find(product => product.id === payload.product)
          .price
    },
    CALC_TOTAL_TO_PAY (state) {
      var total = 0
      state.cart.forEach(element => {
        total = element.total_price + total
      })
      state.total = total.toFixed(2)
    },
    RELOAD_DATA (state) {
      state.products = {}
      state.cart = []
      state.total = 0
    },
    FILTER_PRODUCTS (state, productsearch) {
      if (!productsearch.length) {
        state.productsFiltered = state.products
      } else {
        state.productsFiltered = state.products.filter(products => products.name.toLowerCase().includes(productsearch))
      }
    },
    REMOVE_ITEM_FROM_CART (state, product) {
      state.cart = state.cart.filter(item => item.id !== product)
    }
  },
  actions: {
    insertProductOnCart ({ commit }, product) {
      commit('ADD_PRODUCT_TO_CART', product)
    },
    fetchProducts ({ commit }) {
      return ProductService
        .getProducts()
        .then(response => {
          commit('SET_PRODUCTS', response.data)
        })
        .catch(error => {
          console.log(error.message)
        })
    },
    CalcTotalPrice ({ commit }, payload) {
      commit('CALC_TOTAL_PRODUCT_PRICE', payload)
      commit('CALC_TOTAL_TO_PAY')
    },
    CalcTotalToPay ({ commit }) {
      commit('CALC_TOTAL_TO_PAY')
    },
    createOrder ({ state, commit }) {
      const order = {
        user_id: 1, // usuario padrao por o sistema nao possuir login
        total: state.total
      }
      ProductService.postOrder(order).then(res => {
        state.cart.forEach(element => {
          const cartItem = {
            product_id: element.id,
            order_id: res.data
          }
          ProductService.postOrders_Products(cartItem).then(res => {
            console.log('sucesso')
          })
            .catch(error => {
              console.log('falha')
              console.log(error)
            })
        })
        commit('RELOAD_DATA')
      }).catch(error => {
        console.log('falha')
        console.log(error)
      })
    },
    FilterProduct ({ commit }, productsearch) {
      commit('FILTER_PRODUCTS', productsearch)
    },
    DeleteItemFromCart ({ commit }, product) {
      commit('REMOVE_ITEM_FROM_CART', product)
      commit('CALC_TOTAL_TO_PAY')
    }
  },
  getters: {
    ItemsCartQtde: (state) => {
      return state.cart.length
    }
  },
  modules: {
  }
})
