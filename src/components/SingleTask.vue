<template>
  <div
    class="d-flex p-2 flex-row align-items-center justify-content-between m-2 todo-wrapper"
    :class="completed ? 'done' : 'undone'">
    <b-icon
      v-b-tooltip="'Zakończ zadanie!'"
      :variant="completed ? 'success' : 'secondary'"
      :icon="completed ? 'check-square' : 'square'"
      @click="changeCompletionStatus()" />
    <router-link
      :to="'/task/' + id"
      style="text-decoration: none"
      class="d-flex justify-content-between w-100 todo-item pr-2 pl-3">
      <span
        v-b-tooltip.hover
        class="todo-title"
        title="Przejdź do szczegółów">{{ title }}
      </span>
      <span class="todo-deadline">{{ deadline }} </span>
      <span class="todo-piority"> {{ getPriorityText() }} priorytet </span>
      <b-badge
        variant="primary"
        class="comments-badge">
        <span> {{ getCommentsNumber || 0 }}</span>
        <b-icon
          font-scale="1.5"
          icon="chat-text"
          class="ml-5" />
      </b-badge>
    </router-link>
    <div class="todo-buttons-actions d-flex align-items-center ml-3">
      <b-icon
        v-b-tooltip="'Usuń zadanie!'"
        font-scale="1.5"
        icon="trash"
        class="ml-5"
        @click="removeTask()" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SingleTask",
  props: {
    id: String,
    title: String,
    completed: Boolean,
    deadline: String,
    priority: String,
  },
  data() {
    return {
      priorities: this.$store.state.priorities,
    };
  },
  computed: {
    ...mapGetters(["getCommentsByTaskId"]),
    getCommentsNumber() {
      return this.getCommentsByTaskId(this.id).length;
    }
  },
  methods: {
    changeCompletionStatus() {
      this.$store.dispatch("changeCompletionStatus", this.id);
    },
    removeTask() {
      this.$store.dispatch("deleteTask", this.id);
    },
    getPriorityText() {
      return this.priorities.find(
        (priority) => priority.value === this.priority
      ).text;
    },
  },
};
</script>

<style lang="scss">
.todo-item {
  color: #4d4d4d;
  text-decoration: none;
  font-size: 1em;
  flex: 1 30%;
  & .todo-piority {
    font-size: 1em;
    display: flex;
    align-items: center;
  }
  & .todo-deadline {
    font-size: 1em;
    display: flex;
    align-items: left;
  }
}
.todo-wrapper:hover {
  text-decoration: none;
  background-color: #e0e0e0;
  cursor: pointer;
  color: #4d4d4d;
}
.done {
  opacity: 0.7;
}
// .comments-badge {
//   border-radius: 50%;
//   padding: 5px
// }
</style>