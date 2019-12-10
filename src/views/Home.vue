<template>
  <div>
    <ProductListing :products="products" />
  </div>
</template>

<script>
import ProductListing from '../components/ProductListing'
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapGetters } = createNamespacedHelpers('products')

export default {
  components: { ProductListing },
  methods: { ...mapActions(['getProducts']) },
  computed: {
    ...mapGetters(['products'])
  },
  mounted() {
    this.getProducts()
  }
}
</script>
