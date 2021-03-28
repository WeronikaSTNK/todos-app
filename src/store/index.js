import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    tasks: [
      { 
        id: "bb635416-e38f-4d84-bace-4445bb22780f", 
        title: "Odebrac paczke", 
        description: null, 
        deadline: "2021-03-29", 
        completed: true, 
        priority: "Low" 
      },
      { 
        id: "bb635416-e38f-4d84-bace-4445bb22780g", 
        title: "Zrobić zakupy", 
        description: null, 
        deadline: "2021-03-31", 
        completed: false, 
        priority: "High" 
      },
    ],
    priorities: [
      { value: "Lowest", text: "Najnizszy"},
      { value: "Low", text: "Niski"},
      { value: "Normal", text: "Normalny"},
      { value: "High", text: "Wysoki"},
      { value: "Highest", text: "Najwyzszy"}
  ]
  },

  mutations: {
    CREATE_NEW_TASK(state, task) {
      state.tasks.push(task)
    },
    DELETE_TASK(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id);
    },
    CHANGE_COMPLETION_STATUS(state, id) {
      const task = state.tasks.find(task => task.id === id);
      task.completed = !task.completed;
    },
    UPDATE_TASK(state, updatedTask) {
      let task = state.tasks.find(task => task.id === updatedTask.id);
      task = updatedTask;
    },
  },

  actions: {
    createNewTask({
      commit
    }, task) {
      commit("CREATE_NEW_TASK", task)
    },
    deleteTask({
      commit
    }, id) {
      commit("DELETE_TASK", id)
    },
    changeCompletionStatus({
      commit
    }, id) {
      commit("CHANGE_COMPLETION_STATUS", id)
    },
    updateTask({
      commit
    }, task) {
      commit("UPDATE_TASK", task)
    }
  },

  getters: {
    getCompletedTasks: state => state.tasks.filter((task) => task.completed),
    getPendingTasks: state => state.tasks.filter((task) => !task.completed),
    getTaskById: state => id => state.tasks.find(task => task.id === id)
  }
})
