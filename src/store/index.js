import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    tasks: [
      { 
        id: "bb635416-e38f-4d84-bace-4445bb22780f", 
        title: "Odebrać paczke z paczkomatu", 
        description: null, 
        deadline: "2021-03-29", 
        completed: false, 
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
      { 
        id: "8105ec9e-498f-4c1b-b233-fcaa6bbe4357", 
        title: "Dostać pracę", 
        description: null, 
        deadline: "2021-03-30", 
        completed: true, 
        priority: "High"
      },
    ],
    priorities: [
      { value: "Low", text: "Niski", color:""},
      { value: "Normal", text: "Normalny"},
      { value: "High", text: "Wysoki"},
    ],
    comments: [
      {
        id:"0884e4cc-5a53-4397-bc3c-a92838e518a0",
        taskId: "bb635416-e38f-4d84-bace-4445bb22780f",
        date: "2021-03-28",
        text: "Przykładowy komentarz 1"
      },
      { 
        id: "090b7526-5047-4dd3-aab6-31bd8fc0009a",
        taskId: "8105ec9e-498f-4c1b-b233-fcaa6bbe4357",
        date: "2021-03-28",
        text: "Przykładowy komentarz 2"
      },
      { 
        id: "6963cdb9-2f61-4e11-8c6c-71d2d914641e",
        taskId: "8105ec9e-498f-4c1b-b233-fcaa6bbe4357",
        date: "2021-03-28",
        text: "Przykładowy komentarz 3"
      }
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
    ADD_COMMENT(state, comment) {
      state.comments.push(comment)
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
    },
    addComment({
      commit
    }, comment) {
      commit("ADD_COMMENT", comment)
    }
  },

  getters: {
    // tasks
    getCompletedTasks: state => state.tasks.filter((task) => task.completed),
    getPendingTasks: state => state.tasks.filter((task) => !task.completed),
    getTaskById: state => id => state.tasks.find(task => task.id === id),

    // comments
    getCommentsByTaskId: state => taskId => state.comments.filter(comment => comment.taskId === taskId)
  }
})
