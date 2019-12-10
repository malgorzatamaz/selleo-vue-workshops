<template>
  <div class="col-md-4 order-md-2 mb-4">
    <h4 class="d-flex justify-content-between align-items-center mb-3">
      <span class="text-muted">Koszyk</span>
    </h4>

    <p class="alert alert-info" v-show="!products.length">
      Brak produktów w twoim koszyku. Idź i dodaj coś!
    </p>

    <ul class="list-group mb-3">
      <li class="list-group-item d-flex justify-content-between lh-condensed" />
      <li class="list-group-item d-flex justify-content-between" />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CartSidebar',
  computed: {}
}
</script>
