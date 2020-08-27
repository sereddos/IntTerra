<template>
  <div class="operations">
    <!-- переисполуемый компонент для отрисовки заголовка страницы -->
    <page-title title="Операции на поле 112"></page-title>
    <!-- переисполуемый компонент для отрисовки таблиц -->
    <Table :operations="operationsSorting">
      <template slot="bar">
        <!-- переисполуемый компонент для отрисовки фильтров таблицы -->
        <table-filter :filterData="filterData" @click="sortOperations"></table-filter>

        <!-- переисполуемый компонент для отрисовки кнопок -->
        <v-button modifier="add">
          <!-- слоты для отрисовки иконок в кнопках -->
          <template slot="icons">
            <!-- переисполуемый компонент для отрисовки иконки крестик -->
            <icon-plus></icon-plus>
          </template>
          Добавить операцию
        </v-button>
      </template>
    </Table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Table from '@/shared/components/table/Table.vue'
import OperationType from '@/assets/locales/OperationType-ru-RU.json'
import Assessment from '@/assets/locales/Assessment-ru-RU.json'
import Plant from '@/assets/locales/Plant-ru-RU.json'
const moment = require('moment')

export default {
  name: 'OperationsTable',
  data: () => ({
    // данные для кнопок фильтрации таблицы
    filterData: {
      scheduled: 'Запланированные операции',
      made: 'Выполненные операции'
    },
    // основной массив данных, он заполняется данными из стора, стор из модели берет данные
    operations: [],
    // массив уже отсортированныех данных - его отправляем в таблицу для отрисовки
    operationsSorting: [],
    // массив для хранения строк перевода Оперций
    operationsType: [],
    // массив для хранения строк перевода Оценки
    assessmentType: [],
    // массив для хранения строк перевода Культур
    plantType: [],
    // дефолтное значение фильтра - Выполненные
    sortedDada: 'made',
    // получаем текущую дату в нужном формате - для фильтрации по дате
    today: moment(new Date()).format('YYYY-MM-DD')
  }),
  components: {
    Table
  },
  computed: mapGetters(['allOperations']),
  methods: {
    parserTranslate (translateData) {
      return Object.keys(translateData).map((key) => [key, translateData[key]])
    },
    getOperationType () {
      const operations = this.parserTranslate(OperationType)
      this.operationsType = operations
    },
    getAssessmentType () {
      const assessment = this.parserTranslate(Assessment)
      this.assessmentType = assessment
    },
    getPlantType () {
      const plant = this.parserTranslate(Plant)
      this.plantType = plant
    },
    getDate (date) {
      const newDate = new Date(date.year, date.month - 1, date.day)
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return newDate.toLocaleDateString('ru-RU', options).replace(/\.|(\sг.$)/g, '').toUpperCase()
    },
    getSortData (date) {
      return moment(date).format('YYYY-MM-DD')
    },
    sortLowest (field) {
      return (a, b) => a[field] > b[field] ? 1 : -1
    },
    sortHighest (field) {
      return (a, b) => a[field] < b[field] ? 1 : -1
    },
    sortOperations (type) {
      // сортировка данных по дате
      const operations = this.operations.filter((operation) => {
        const dateForSort = moment(operation.dateForSort).format('YYYY-MM-DD')
        return type === 'made' ? moment(dateForSort).isBefore(this.today) : moment(dateForSort).isAfter(this.today)
      })
      // записываем отсортированные данные в operationsSorting для передачи в таблицу
      this.operationsSorting = operations
    }
  },
  async mounted () {
    // получаем переводы строк для Операций
    this.getOperationType()

    // получаем переводы строк для Оценки
    this.getAssessmentType()

    // получаем переводы строк для Культур
    this.getPlantType()

    // берем данные из стора
    await this.$store.dispatch('fetchOperationsHistory')
    const operationsHistory = this.allOperations

    // пересобираем массив данных в нужном нам формате с доп полями
    this.operations = operationsHistory.map(operation => {
      return {
        ...operation,
        // меняем дату
        date: this.getDate(operation.date),

        // получаем дату в нужном формате для будущей сортировки
        dateForSort: this.getSortData(operation.date),

        // проверяем наличие комментов
        comment: operation.comment !== null ? operation.comment : '',

        // получаем поле Культура в нужном формате и делаем проверку на наличие Культуры
        plant: operation.plant !== null ? this.plantType[operation.plant][1] : '',

        // получаем поле Операция
        type: this.operationsType[operation.type][1],

        // добавляем class для иконок Культуры
        plantIcon: operation.plant !== null ? this.plantType[operation.plant][0].toLowerCase() : '',

        // добавляем class для иконок Качества
        assessmentClass: operation.assessment !== null ? this.assessmentType[operation.assessment][0].toLowerCase() : '',

        // получаем поле Качество
        assessment: operation.assessment !== null ? this.assessmentType[operation.assessment][1] : 'Нет оценки'
      }
    })

    // устанавливаем сортировку данныx в таблице по дефолту
    this.sortOperations(this.sortedDada)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.operations {
  padding: 23px 30px 0;
}

</style>
