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
        <span class="badge badge-success p-2">Zakończone: </span>
        <span class="badge badge-warning p-2"> W trakcie: </span>
      </div>
    </b-card>
    <div class="mt-3">
      <Input />
      <ul class="todo-list">
        <li
          v-for="(task, key) in allTasks"
          :key="key"
          class="d-flex p-1 flex-row align-items-center justify-content-between todo-item m-2"
        >
          <span class="todo-item__title">{{ task.title }} </span>
          <span class="todo-item__date">{{ task.createdDate }} </span>
          <span class="todo-item__priority">{{ task.priority }} pilne</span>
          <div class="todo-item__buttons-actions d-flex align-items-center">
            <b-button
              class="mr-5"
              size="sm"
              variant="success"
              ><b-icon icon="check-square"></b-icon
            ></b-button>
            <b-button class="ml-2 mr-2" size="sm"> Edytuj</b-button>
            <b-button
              variant="danger"
              class="ml-2 mr-2"
              size="sm"
              @click.stop="removeTask(key)"
            >
              Usuń
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
  data: function() {
    return {
      title: "TODO-LIST",
      completedTasks: 0,
    };
  },
  methods: {
    ...mapActions(["deleteTask", "setAsCompleted"]),
    // completeTask(key) {
    //   this.setAsCompleted(key)
    // },
    removeTask(key) {
      this.deleteTask(key);
      // this.updateTasks()
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
    margin: 2rem auto;
    padding: 1rem 2rem 3rem;
    overflow: visible;
  }
  .todo-list li.todo-item:hover {
    background-color: #e0e0e0;
    cursor: pointer;
  }
  .todo-item {
  }
}
</style>