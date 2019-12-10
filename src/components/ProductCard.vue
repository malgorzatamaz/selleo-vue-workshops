<template>
  <div class="card mb-4">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Produkt</h5>
      <p class="card-text">Opis</p>
      <hr />
      <div class="mt-1 row">
        <div class="col-6">Cena 1000zl</div>
        <div class="col-6">
          <span class="small text-muted">
            Produkt niedostępny
          </span>

          <button class="btn btn-primary btn-sm" role="button">
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard'
}
</script>
