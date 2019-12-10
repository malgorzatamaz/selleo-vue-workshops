<template>
  <div class="row">
    <CartSidebar />

    <div class="col-md-8 order-md-1">
      <div class="alert alert-info" v-if="!products || !products.length">
        Brak produktów :(
      </div>

      <div class="row" v-else>
        <div
          class="col-md-6"
          v-for="product in products"
          :key="`product_${product.id}`"
        >
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartSidebar from './layout/CartSidebar'
import ProductCard from './ProductCard'

export default {
  name: 'ProductListing',
  components: { ProductCard, CartSidebar },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>
