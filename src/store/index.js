import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    tasks: [
      { "id": "bb635416-e38f-4d84-bace-4445bb22780f", "title": "Odebrac paczke", "description": null, "completed": false, "createdDate": "Lut 12", "priority": "Mało" },
      { "id": "1e42616f-c0a7-4c22-ba75-f3bfae07d34c", "title": "Zrobic zakupy", "description": "Spozywcze", "completed": false, "createdDate": "Mar 23", "priority": "Bardzo" }
    ],
  },

  mutations: {
    CREATE_NEW_TASK(state, payload) {
      state.tasks.push(payload)
    },
    DELETE_TASK(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id);
    },
    SET_AS_COMPLETED(state, id) {
      const task = state.tasks.find(task => task.id === id);
      task.completed = !task.completed;
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
    }, id) {
      commit("DELETE_TASK", id)
    },
    setAsCompleted({
      commit
    }, id) {
      commit("SET_AS_COMPLETED", id)
    },
  },

  getters: {
    getCompletedTasks: state => state.tasks.filter((task) => task.completed),
    getPendingTasks: state => state.tasks.filter((task) => !task.completed)
  }
})
