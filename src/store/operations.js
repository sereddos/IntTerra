import FieldService from '@/assets/FieldService.js'

export default {
  actions: {
    async fetchOperationsHistory (ctx, commit) {
      const fieldService = new FieldService() || {}
      const operations = await fieldService.getOperations()
      ctx.commit('updateOperations', Object.keys(operations).map(key => ({ ...operations[key] })))
    }
  },
  mutations: {
    updateOperations (state, operations) {
      state.operations = operations
    }
  },
  state: {
    operations: []
  },
  getters: {
    allOperations (state) {
      return state.operations
    }
  }
}
