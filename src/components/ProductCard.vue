<template>
  <div class="card mb-4">
    <img :src="productImage" class="card-img-top" :alt="product.name" />
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">{{ product.description }}</p>
      <hr />
      <div class="mt-1 row">
        <div class="col-6">Cena {{ product.price | currency }}</div>
        <div class="col-6">
          <span class="small text-muted" v-if="!product.inventory">
            Produkt niedostępny
          </span>
          <button
            class="btn btn-primary btn-sm"
            v-else
            role="button"
            @click="addProductToCart(product)"
          >
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('cart')

export default {
  name: 'ProductCard',
  computed: {
    productImage() {
      return this.product.thumb || '/img/no-photo.jpg'
    }
  },
  methods: { ...mapActions(['addProductToCart']) },
  props: {
    product: {
      type: Object
    }
  }
}
</script>
