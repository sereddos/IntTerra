import Vue from 'vue'
// В этом файле глобально подключаем все компоненты, которые удобно использовать по всему проекту

import IconAssessment from '@/shared/components/icons/icon-assessment.vue'
import IconCropWheat from '@/shared/components/icons/icon-crop-wheat.vue'
import IconCrop from '@/shared/components/icons/icon-crop.vue'
import IconSorting from '@/shared/components/icons/icon-sorting.vue'
import IconPlus from '@/shared/components/icons/icon-plus.vue'
import Button from '@/shared/components/buttons/button.vue'
import TableFilter from '@/shared/components/table/table-filter.vue'
import PageTitle from '@/shared/components/page-title.vue'

Vue.component('icon-assessment', IconAssessment)
Vue.component('icon-crop-wheat', IconCropWheat)
Vue.component('icon-crop', IconCrop)
Vue.component('icon-sorting', IconSorting)
Vue.component('icon-plus', IconPlus)
Vue.component('v-button', Button)
Vue.component('table-filter', TableFilter)
Vue.component('page-title', PageTitle)

export default {}
