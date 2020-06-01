import axios from 'axios'
// import NProgress from 'nprogress'

const apiClient = axios.create({
  baseURL: 'http://lara-commerce.test',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getProducts () {
    return apiClient.get('/products')
  },
  getProduct (id) {
    return apiClient.get('/products/' + id)
  },
  postOrder (order) {
    return apiClient.post('/orders/store', order)
  },
  postOrders_Products (cartItem) {
    return apiClient.post('/orders_products/store', cartItem)
  }
}
