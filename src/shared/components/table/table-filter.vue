<template>
  <div class="table-filter">
    <div v-for="(value, name) in filterData" :key="name"
          :class="{ active: name === activeItem}"
          class="table-filter_item">
      <div @click="click(name)" class="table-filter_item-text">
          {{ value }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TableFilter',
  props: {
    filterData: {
      required: true,
      type: Object
    },
    disabled: {
      type: Boolean,
      default: false
    },
    modifier: {
      type: String,
      default: null
    }
  },
  data: () => {
    return {
      activeItem: 'made'
    }
  },
  methods: {
    click (name) {
      this.activeItem = name
      this.$emit('click', name)
    }
  }
}
</script>

<style lang="scss">
.table-filter {
  display: flex;
  height: 40px;
  align-items: center;
}

.table-filter_item {
  font-family: Helvetica;
  font-size: 11px;
  color: #333333;
  letter-spacing: -0.52px;
  margin-right: 20px;
  text-transform: uppercase;
  cursor: pointer;

  &.active {
    color: #3399FF;
    cursor: default;
  }
}
</style>
