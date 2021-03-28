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
          >Wszystkie zadania: {{ allTasks.length || 0 }}
        </span>
        <span class="badge badge-success p-2"
          >Zakończone: {{ completedTasks.length ||0 }}</span
        >
        <span class="badge badge-warning p-2">
          W trakcie: {{ pendingTasks.length || 0 }}</span
        >
      </div>
    </b-card>
    <div class="mt-3">
      <Input />
      <ul class="todo-list">
        <SingleTask v-bind="task" v-for="task in allTasks" :key="task.id"/>
      </ul>
    </div>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import Input from "../components/Input";
import SingleTask from '../components/SingleTask';

export default {
  name: "TodosList",
  components: {
    Input,
    SingleTask
  },
  data: function () {
    return {
      title: "TODO-LIST",
    };
  },
  methods: {
  },
  computed: {
    ...mapGetters(["getCompletedTasks", "getPendingTasks"]),
    isEmpty() {
      return this.$store.state.tasks.length === 0;
    },
    allTasks() {
      let allTasks = this.$store.state.tasks;
      console.log("all tasks: ", allTasks)
      return this.$store.state.tasks;
    },
    completedTasks() {
      return this.getCompletedTasks;
    },
    pendingTasks() {
      return this.getPendingTasks;
    }
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