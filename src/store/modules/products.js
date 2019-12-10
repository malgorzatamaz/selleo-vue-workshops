// initial state
const state = {
  all: []
}

// getters
const getters = {
  products: (state) => state.all
}

// actions
const actions = {
  async getProducts({ commit }) {
    const response = await fetch(
      'http://5deeb5c3b3d17b00146a2d46.mockapi.io/products'
    )

    const products = await response.json()
    const formattedProducts = products.map((product, index) => ({
      ...product,
      inventory: 5,
      id: index + 1,
      thumb: Math.random() > 0.35 ? 'https://picsum.photos/300/200' : null
    }))

    commit('setProducts', formattedProducts)
  }
}

// mutations
const mutations = {
  setProducts(state, products) {
    state.all = products
  },

  decrementProductInventory(state, { id }) {
    const product = state.all.find((product) => product.id === id)
    product.inventory--
  },

  resetProductInventory(state, { id }) {
    const product = state.all.find((product) => product.id === id)
    product.inventory = 10
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
