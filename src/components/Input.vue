<template>
  <b-input-group-prepend>
    <b-form-input
      autocomplete="off"
      type="text"
      placeholder="Dodaj nowe zadanie"
      v-on:keydown.enter="addNewTask($event)"
      v-model.trim="newTaskText"
    ></b-form-input>
    <b-button
      variant="outline-info"
      class="ml-3"
      @click="addNewTask($event)"
      aria-hidden="true"
    >
      Dodaj
    </b-button>
  </b-input-group-prepend>
</template>
<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";
import moment from "moment";
export default {
  methods: {
    ...mapActions(["createNewTask"]),
    addNewTask(e) {
      if (this.newTaskText.length > 0) {
        e.preventDefault();
        let task = {
          id: v1(),
          title: this.newTaskText,
          description: null,
          completed: false,
          createdDate: moment().format("MMM D"),
        };
        this.createNewTask(task);
        this.newTaskText = ""
      }
    },
  },
  name: "Input",
  data() {
    return {
      newTaskText: "",
    };
  },
};
</script>