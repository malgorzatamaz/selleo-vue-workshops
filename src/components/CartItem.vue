<template>
  <div class="cart-item">
    <div class="row">
      <div class="col-md-2">
        {{ item.thumb }}
      </div>

      <div class="col-md-7">
        <p class="h3">
          {{ item.name }}
        </p>
      </div>

      <div class="col-md-3 d-flex flex-column align-items-end">
        <p>{{ item.price | currency }}</p>
        <button
          type="button"
          class="btn btn-danger btn-sm"
          @click="removeProduct(item)"
        >
          &times; Usuń produkt
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: mapActions('cart', ['removeProduct'])
}
</script>

<style>
.cart-item {
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
