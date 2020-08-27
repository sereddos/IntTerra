<template>
  <div class="operations-wrap">
    <OperationsTable/>
  </div>
</template>

<script>
// @ is an alias to /src
import OperationsTable from '@/pages/OperationsTable.vue'

export default {
  name: 'Operations',
  components: {
    OperationsTable
  }
}
</script>

<style lang="scss">
.operations-wrap {
  text-align: left;
  background-color: #ffffff;
  width: 870px;
  height: 100%;
  margin: 0 auto;
  box-shadow: 0 0 20px 0 rgba(0,0,0,0.20);
}
</style>
