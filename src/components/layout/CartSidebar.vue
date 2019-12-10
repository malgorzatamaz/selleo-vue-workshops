<template>
  <div class="col-md-4 order-md-2 mb-4">
    <h4 class="d-flex justify-content-between align-items-center mb-3">
      <span class="text-muted">Koszyk</span>
    </h4>

    <p class="alert alert-info" v-if="!cartProducts.length">
      Brak produktów w twoim koszyku. Idź i dodaj coś!
    </p>

    <ul class="list-group mb-3" v-else>
      <li
        class="list-group-item d-flex justify-content-between lh-condensed"
        v-for="product in cartProducts"
        :key="`cartProduct_${product.id}`"
      >
        {{ product.quantity }}x {{ product.name }} <br />
        {{ product.price | currency }}
      </li>
      <li class="list-group-item d-flex justify-content-between">
        Kwota: {{ cartTotalPrice | currency }}
      </li>
    </ul>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('cart')

export default {
  name: 'CartSidebar',
  computed: {
    ...mapGetters(['cartProducts', 'cartTotalPrice'])
  }
}
</script>
