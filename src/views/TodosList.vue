<template>
  <b-container class="container bg-light card mt-5">
    <b-card v-if="isEmpty" class="row bg-light pt-1 rounded-0">
      <div class="row d-flex justify-content-around">
        <span class="badge badge-secondary p-2 mb-3"
          >Twoja lista zadań jest pusta</span
        >
      </div>
    </b-card>
    <b-card v-else class="row bg-light rounded-0">
      <div class="row d-flex justify-content-around">
        <span class="badge badge-info p-2"
          >Wszystkie zadania: {{ getTasks.length || 0 }}
        </span>
        <span class="badge badge-success p-2"
          >Zakończone: {{ completedTasks.length }}</span
        >
        <span class="badge badge-warning p-2">
          W trakcie: {{ incompletedTasks.length }}</span
        >
      </div>
    </b-card>
    <div class="mt-3">
      <Input />
      <ul class="todo-list">
        <li
          v-for="(task, key) in allTasks"
          :key="key"
          class="d-flex p-1 flex-row align-items-center justify-content-between todo-item m-2"
          :class="task.completed ? 'done' : 'undone'"
        >
          <span class="todo-title">{{ task.title }} </span>
          <span class="todo-date">{{ task.createdDate }} </span>
          <div class="todo-buttons-actions d-flex align-items-center">
            <b-button
            v-b-tooltip.hover title="Zakończ zadanie"
              class="mr-5"
              size="sm"
              variant="success"
              @click.stop="completeTask(key)"
              ><b-icon icon="check-square"></b-icon
            ></b-button>
            <b-button class="ml-2 mr-2" size="sm"> Edytuj</b-button>
            <b-button
              v-b-tooltip.hover title="Usuń zadanie"
              variant="danger"
              class="ml-2 mr-2"
              size="sm"
              @click.stop="removeTask(key)"
            >
              <b-icon icon="trash"></b-icon>
            </b-button>
          </div>
        </li>
      </ul>
    </div>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Input from "../components/Input";

export default {
  name: "TodosList",
  components: {
    Input,
  },
  data: function () {
    return {
      title: "TODO-LIST",
      completedTasks: 0,
      incompletedTasks: 0,
    };
  },
  methods: {
    ...mapActions(["deleteTask", "setAsCompleted"]),
    completeTask(key) {
      this.setAsCompleted(key);
      this.updateTask();
    },
    removeTask(key) {
      this.deleteTask(key);
      this.updateTask();
    },
    updateTask() {
      this.completedTasks = this.getTasks.filter((task) => task.completed);
      this.incompletedTasks = this.getTasks.filter((task) => !task.completed);
    },
  },
  computed: {
    ...mapGetters(["getTasks"]),
    isEmpty() {
      return this.getTasks.length === 0;
    },
    allTasks() {
      return this.$store.state.tasks;
    },
  },
};
</script>
<style lang="scss">
.container {
  height: 80vh;
  width: auto;
  ul {
    list-style: none;
  }
  .todo-list {
    padding: 1rem 0 3rem;
    overflow: visible;
  }
  .todo-list li.todo-item:hover {
    background-color: #e0e0e0;
    cursor: pointer;
  }
  .todo-list .done {
    opacity: 0.5;
  }
}
</style>