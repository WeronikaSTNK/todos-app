<template>
  <div
    class="d-flex p-1 flex-row align-items-center justify-content-between m-2"
  >
  <router-link :to="'/task/'+ id"
    v-b-tooltip.hover
    title="Przejdź do szczegółów" 
    style="text-decoration: none; color: inherit;"
    class="d-flex justify-content-between w-100 todo-item"
  >
    <span class="todo-title">{{ title }} </span>
    <span class="todo-date">{{ deadline }} </span>
    <span> {{getPriorityText()}} </span>
  </router-link>
    <div class="todo-buttons-actions d-flex align-items-center ml-3">
      <b-button
        v-b-tooltip.hover
        title="Zakończ zadanie"
        class="mr-5"
        size="sm"
        :variant="completed ? 'success' : 'secondary'"
        @click="changeCompletionStatus()"
        ><b-icon :icon="completed ? 'check-square' : 'square'"></b-icon
      ></b-button>
      <b-button
        v-b-tooltip.hover
        title="Usuń zadanie"
        variant="danger"
        class="ml-2 mr-2"
        size="sm"
        @click="removeTask()"
      >
        <b-icon icon="trash"></b-icon>
      </b-button>
    </div>
  </div>
</template>

<script>

export default {
  name: "SingleTask",
  props: {
    id: String,
    title: String,
    completed: Boolean,
    deadline: String,
    priority: String
  },
  data() {
    return {
        priorities: this.$store.state.priorities
    }
  },
  methods: {
    changeCompletionStatus() {
      this.$store.dispatch('changeCompletionStatus', this.id)
    },
    removeTask() {
      this.$store.dispatch('deleteTask', this.id)
    },
    getPriorityText(){
      return this.priorities.find(priority => priority.value === this.priority).text
    }
  },
};
</script>

<style>
.todo-item {
color: rgb(44, 44, 44);
text-decoration: none;
font-size: 146x
}
.todo-item:hover{
text-decoration: none;
background-color: #e0e0e0;
cursor: pointer;
}
</style>