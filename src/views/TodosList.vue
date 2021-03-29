<template>
  <b-container class="bg-light shadow shadow-lg--hover card mt-5 h-auto">
    <div
      v-if="isEmpty"
      class="row bg-light pt-1 rounded-0 d-flex d-flex flex-column align-content-center align-items-center">
      <span class="badge badge-secondary p-2 mt-5 mb-3">Twoja lista zadań jest pusta</span>
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
        <span class="badge badge-info p-2">Wszystkie zadania: {{ allTasks.length || 0 }}</span>
        <span class="badge badge-primary p-2">W trakcie: {{ pendingTasks.length || 0 }}</span>
        <span class="badge badge-success p-2">Zakończone: {{ completedTasks.length || 0 }}</span>
      </div>
      <router-link to="/task/">
        <b-button
          variant="outline-info"
          aria-hidden="true">
          Dodaj nowe zadanie
        </b-button>
      </router-link>
    </div>
    <div class="pt-3 pb-4">
      <SingleTask
        v-for="task in allTasks"
        :key="task.id"
        v-bind="task"
        class="flex-9-cols " />
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
    text-decoration: line-through

  }
  .badge {
    color:white;
    text-transform: uppercase;
    font-weight: 500;
  width:auto
  }
}@mixin flex-grid-items($cols) {
  display: flex;
  flex-wrap: wrap;

  > * {
    $item-width: 100% / $cols;
    width: $item-width;
    box-sizing: border-box;
  }
}

@mixin flex-grid-items($cols) {
  display: flex;
  flex-wrap: wrap;

  > * {
    $item-width: 100% / $cols;
    width: $item-width;
    box-sizing: border-box;
  }
}
.flex-9-cols {
  @include flex-grid-items(1)
}


</style>