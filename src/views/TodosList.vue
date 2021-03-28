<template>
  <b-container class="container bg-light card mt-5">
    <b-card
      v-if="isEmpty"
      class="row bg-light pt-1 rounded-0"
    >
      <div class="row d-flex justify-content-around">
        <span
          class="badge badge-secondary p-2 mb-3"
        >Twoja lista zadań jest pusta</span>
      </div>
    </b-card>
    <b-card
      v-else
      class="row bg-light rounded-0"
    >
      <div class="row d-flex justify-content-around">
        <span
          class="badge badge-info p-2"
        >Wszystkie zadania: {{ allTasks.length || 0 }}
        </span>
        <span
          class="badge badge-success p-2"
        >Zakończone: {{ completedTasks.length ||0 }}</span>
        <span class="badge badge-warning p-2">
          W trakcie: {{ pendingTasks.length || 0 }}</span>
        <router-link to="/task/">
          <b-button
            variant="outline-info"
            class="ml-3"
            aria-hidden="true"
          >
            Dodaj nowe zadanie
          </b-button>
        </router-link>
      </div>
    </b-card>
    <div class="mt-3">
      <SingleTask v-bind="task" v-for="task in allTasks" :key="task.id" />
    </div>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import SingleTask from '../components/SingleTask';

export default {
  name: "TodosList",
  components: {
    SingleTask
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
    }
  }
};
</script>
<style lang="scss">
.container {
  height: 80vh;
  width: auto;
  ul {
    list-style: none;
  }

  .todo-list .done {
    opacity: 0.5;
  }
}
</style>