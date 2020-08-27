<template>
  <div class="table-wrap">
    <div ref="slotBar" class="table-bar">
      <slot name="bar"></slot>
    </div>
    <div class="table">
      <div class="table_header">
        <div @click="sorting('data')"
            :class="{active: sortKey == 'data'}"
            class="table_header-cell column-date">
            Дата
            <icon-sorting :class="{reverse: reverse && sortKey == 'data'}"></icon-sorting>
        </div>
        <div @click="sorting('type')"
            :class="{active: sortKey == 'type'}"
            class="table_header-cell column-type">
            Операция
            <icon-sorting :class="{reverse: reverse && sortKey == 'type'}"></icon-sorting>
        </div>
        <div class="table_header-cell column-plant">
            Культура
        </div>
        <div @click="sorting('assessment')"
            :class="{active: sortKey == 'assessment'}"
            class="table_header-cell column-assessment">
            Качество
            <icon-sorting :class="{reverse: reverse && sortKey == 'assessment'}"></icon-sorting>
        </div>
      </div>
      <div class="table_body">
        <div v-for="operation of operations" :key="operation.id" class="table_body-row">
          <div class="table_body-cell cell-date column-date">
            {{ operation.date }}
          </div>
          <div class="table_body-cell column-type">
            {{ operation.type }}
          </div>
          <div class="table_body-cell cell-plant column-plant">
            <span class="cell-plant_plant-icons">
              <icon-crop-wheat v-if="operation.plantIcon == 'winterwheat'"></icon-crop-wheat>
              <icon-crop v-if="operation.plantIcon == 'wheat'"></icon-crop>
            </span>
            {{ operation.plant }}
          </div>
          <div class="table_body-cell cell-assessment">
            <icon-assessment :class="operation.assessmentClass"></icon-assessment>
            {{ operation.assessment }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Table',
  props: {
    operations: {
      required: true,
      type: Array
    }
  },
  data: () => {
    return {
      sortKey: 'data',
      reverse: false
    }
  },
  methods: {
    sortLowest (field) {
      return (a, b) => a[field] > b[field] ? 1 : -1
    },
    sortHighest (field) {
      return (a, b) => a[field] < b[field] ? 1 : -1
    },
    sorting (field) {
      const sortType = !this.reverse ? this.sortLowest(field) : this.sortHighest(field)
      this.operations.sort(sortType)

      this.sortKey = field
      this.reverse = !this.reverse
    }
  }
}
</script>

<style lang="scss">

.table-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 11px;

  .button_add {
    margin-top: -8px;
  }
}

.table {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.table_header {
  display: flex;
  width: 100%;
  background-color: #EDEEEE;
  align-items: center;
  justify-content: space-around;
}

.table_header-cell {
  flex-grow: 1;
  text-align: left;
  flex-basis: 100%;
  height: 28px;
  padding: 12px 0 0 9px;
  user-select: none;

  font-family: LucidaGrande;
  font-size: 11px;
  color: #333333;
  letter-spacing: -0.52px;
}

.table_body {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.table_body-row {
  display: flex;
  width: 100%;
  border-bottom: 1px solid #EDEEEE;
  align-items: flex-start;
  justify-content: space-around;
}

.table_body-cell {
  flex-grow: 1;
  text-align: left;
  flex-basis: 100%;
  padding: 16px 0 0 9px;
  height: 34px;
  display: flex;

  font-family: Helvetica;
  font-size: 13px;
  color: #333333;
  letter-spacing: -0.47px;
  line-height: 13px;
}

.column-date {
  max-width: 72px;
}

.column-type {
  min-width: 372px;
}

.column-plant {
  min-width: 190px;
}

.cell-assessment,
.cell-plant {
  font-size: 11px;
  letter-spacing: -0.34px;
}

.cell-date {
  opacity: 0.8;
  font-size: 11px;
  letter-spacing: -0.4px;
}

.cell-plant_plant-icons {
  display: inline-block;
  position: relative;
  top: -4px;
  margin-right: 9px;
  width: 30px;
}
</style>
