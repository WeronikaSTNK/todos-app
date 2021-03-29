<template>
  <b-container class="container bg-light card mt-5">
    <div
      v-if="isEmpty"
      class="row bg-light pt-1 rounded-0 d-flex d-flex flex-column align-content-center align-items-center">
      <span class="badge badge-secondary p-2 mb-3">Twoja lista zadań jest pusta</span>
      <router-link to="/task/">
        <b-button
          variant="outline-info"
          aria-hidden="true">
          Dodaj nowe zadanie
        </b-button>
      </router-link>
    </div>
    <div
      v-else
      class="row bg-light d-flex flex-column align-items-center pt-4 pb-4">
      <div class="d-flex justify-content-around w-50 mb-4 mt-3">
        <span class="badge badge-info p-2 mr-2">Wszystkie zadania: {{ allTasks.length || 0 }}</span>
        <span class="badge badge-primary p-2 mr-2">W trakcie: {{ pendingTasks.length || 0 }}</span>
        <span class="badge badge-success p-2">Zakończone: {{ completedTasks.length || 0 }}</span>
      </div>
      <router-link to="/task/">
        <b-button
          variant="outline-danger"
          class="ml-3"
          aria-hidden="true">
          Dodaj nowe zadanie
        </b-button>
      </router-link>
    </div>
    <div class="mt-3">
      <SingleTask
        v-for="task in allTasks"
        :key="task.id"
        v-bind="task" />
    </div>
  </b-container>
</template>ś

<script>
import { mapGetters } from "vuex";
import SingleTask from "../components/SingleTask";

export default {
  name: "TodosList",
  components: {
    SingleTask,
  },
  data: function () {
    return {
      title: "TODO-LIST",
    };
  },
  computed: {
    ...mapGetters(["getCompletedTasks", "getPendingTasks"]),
    isEmpty() {
      return this.$store.state.tasks.length === 0;
    },
    allTasks() {
      return this.$store.state.tasks;
    },
    completedTasks() {
      return this.getCompletedTasks;
    },
    pendingTasks() {
      return this.getPendingTasks;
    },
  },
};
</script>
<style lang="scss">
.container {
  height: auto;
  width: auto;
  ul {
    list-style: none;
  }
  .todo-list .done {
    opacity: 0.5;
  }
  .badge {
    color:white;
    text-transform: uppercase;
    font-weight: 500;
  width:auto
  }
}
</style>