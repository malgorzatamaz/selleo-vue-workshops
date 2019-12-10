const state = {
  items: []
}

// getters
const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(
        (product) => product.id === id
      )

      return {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity
      }
    })
  },
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

// actions
const actions = {
  addProductToCart({ state, commit }, product) {
    if (product.inventory > 0) {
      const cartItem = state.items.find((item) => item.id === product.id)

      if (!cartItem) {
        commit('pushProductToCart', {
          id: product.id,
          name: product.name,
          xyz: 123
        })
      } else {
        commit('incrementItemQuantity', cartItem)
      }

      commit(
        'products/decrementProductInventory',
        { id: product.id },
        { root: true }
      )
    }
  },

  removeProduct({ state, commit }, product) {
    const cartItem = state.items.find((item) => item.id === product.id)

    if (cartItem) {
      commit('removeProductFromCart', { id: product.id })
      commit('products/resetProductInventory', { id: product.id })
    }
  }
}

// mutations
const mutations = {
  pushProductToCart(state, { id, name }) {
    // --- ✂ ------------------------
    console.log(id, name)
    // ------------------------------
    state.items.push({
      id,
      name,
      quantity: 1
    })
  },

  removeProductFromCart(state, { id }) {
    state.items = state.items.filter((item) => item.id === id)
  },

  incrementItemQuantity(state, { id }) {
    const cartItem = state.items.find((item) => item.id === id)
    cartItem.quantity++
  },

  setCartItems(state, { items }) {
    state.items = items
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
