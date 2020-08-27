<template>
  <h1>{{title}}</h1>
</template>

<script>

export default {
  name: 'PageTitle',
  props: {
    title: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
h1 {
  font-family: LucidaGrande;
  font-size: 25px;
  color: #333333;
  letter-spacing: -0.8px;
  line-height: 31px;
  margin: 0 0 11px;
}
</style>
