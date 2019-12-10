<template>
  <main id="app" role="main">
    <PageHeader />

    <div class="content-wrapper">
      <div class="container">
        <router-view />
      </div>
    </div>

    <PageFooter />
  </main>
</template>

<script>
import PageHeader from './components/layout/Header'
import PageFooter from './components/layout/Footer'

export default {
  components: { PageFooter, PageHeader }
}
</script>

<style lang="scss">
[role='main'] {
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-wrapper {
  flex-grow: 1;
  flex-shrink: 1;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
}
</style>
