<template>
  <b-input-group-prepend>
    <b-form-input
      autocomplete="off"
      type="text"
      placeholder="Dodaj nowe zadanie"
      v-on:keydown.enter="addNewTask($event)"
      v-model="newTaskText"
    ></b-form-input>
    <b-button variant="outline-info" class="ml-3" @click="addNewTask($event)">
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
    addNewTask() {
      //  e.preventDefault();
      let task = {
        id: v1(),
        title: this.newTaskText,
        description: null,
        completed: false,
        createdDate: moment().format("MMM D"),
        priority: null,
      };
      this.createNewTask(task);
      this.newTaskText = "";
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