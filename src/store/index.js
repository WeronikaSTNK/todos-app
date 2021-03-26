import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //mock
    tasks: [
      {"id": 1, "title": "Zrobic zadanie", "description": null, "completed": false, "createdDate": "12 lutego 2020", "priority": "Pilne"},
      {"id":2, "title": "Zrobic zakupy", "description": "Spozywcze",  "completed": false, "createdDate": "12 lutego 2020", "Priority": "Mało pilne"}
    ],
  },
  
  mutations: {
        CREATE_NEW_TASK(state, payload) {
          state.tasks.unshift(payload)
        }
      },
      actions: {
        async createNewTask({
          commit
        }, payload) {
          commit("CREATE_NEW_TASK", payload)
        },
      },
      getters: {
        getTasks: state => state.tasks
  },
  modules: {
  }
})
