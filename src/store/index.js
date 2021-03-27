import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      { "id": 1, "title": "Odebrac paczke", "description": null, "completed": false, "createdDate": "Lut 12", "priority": "Mało" },
      { "id": 2, "title": "Zrobic zakupy", "description": "Spozywcze", "completed": false, "createdDate": "Mar 23", "priority": "Bardzo" }
    ],
  },

  mutations: {
    CREATE_NEW_TASK(state, payload) {
      state.tasks.push(payload)
    },
    DELETE_TASK(state, key) {
      state.tasks.splice(key, 1)
    },
    SET_AS_COMPLETED(state, key) {
      state.tasks[key].completed ? state.tasks[key].completed = false : state.tasks[key].completed = true
    console.log(state)
    }
  },
  actions: {
    createNewTask({
      commit
    }, payload) {
      commit("CREATE_NEW_TASK", payload)
    },
    deleteTask({
      commit
    }, payload) {
      commit("DELETE_TASK", payload)
    },
    setAsCompleted({
      commit
    }, payload) {
      commit("SET_AS_COMPLETED", payload)
    },
  },
  getters: {
    getTasks: state => state.tasks
  },
  modules: {
  }
})
