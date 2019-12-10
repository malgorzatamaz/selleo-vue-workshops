<template>
  <footer class="page-footer">
    <div class="container">
      <p>&copy; {{ new Date().getFullYear() }} Selleo</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter'
}
</script>

<style scoped>
.page-footer {
  height: 50px;
  line-height: 50px;
  background: #fff;
  color: #666;
  font-size: 14px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
