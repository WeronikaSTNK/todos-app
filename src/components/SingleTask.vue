<template>
  <li
    class="d-flex p-1 flex-row align-items-center justify-content-between todo-item m-2"
    :class="completed ? 'done' : 'undone'"
  >
    <span class="todo-title">{{ title }} </span>
    <span class="todo-date">{{ createdDate }} </span>
    <div class="todo-buttons-actions d-flex align-items-center">
      <b-button
        v-b-tooltip.hover
        title="Zakończ zadanie"
        class="mr-5"
        size="sm"
        variant="success"
        @click.stop="completeTask(id)"
        ><b-icon icon="check-square"></b-icon
      ></b-button>
      <b-button class="ml-2 mr-2" size="sm"> Edytuj</b-button>
      <b-button
        v-b-tooltip.hover
        title="Usuń zadanie"
        variant="danger"
        class="ml-2 mr-2"
        size="sm"
        @click.stop="removeTask(id)"
      >
        <b-icon icon="trash"></b-icon>
      </b-button>
    </div>
  </li>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SingleTask",
  props: {
    id: String,
    title: String,
    createdDate: String,
    completed: Boolean
  },
  methods: {
    ...mapActions(["deleteTask", "setAsCompleted"]),
    completeTask(id) {
      this.setAsCompleted(id);
    },
    removeTask(id) {
      this.deleteTask(id);
    }
  },
};
</script>

<style>
</style>