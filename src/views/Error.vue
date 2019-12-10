<template>
  <div class="text-center">
    <h1>404</h1>
    <p>
      Podana strona nie istnieje.
      <router-link to="/">Wróć do strony głównej</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Error'
}
</script>
