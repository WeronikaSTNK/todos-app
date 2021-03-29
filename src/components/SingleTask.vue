<template>
  <b-container>
    <div
      class="todo-wrapper m-2 row"
      :class="completed ? 'done' : 'undone'">
      <b-icon
        v-b-tooltip="'Zakończ zadanie!'"
        :variant="completed ? 'success' : 'secondary'"
        :icon="completed ? 'check-square' : 'square'"
        @click="changeCompletionStatus()" />
      <router-link
        :to="'/task/' + id"
        style="text-decoration: none; color:inherit"
        class="todo-item d-flex justify-content-between align-items-center col-sm">
        <span
          v-b-tooltip.hover
          class="col-5"
          title="Przejdź do szczegółów">{{ title }}
        </span>
        <span class="col">{{ deadline }} </span>
        <span class="col"> {{ getPriorityText() }} priorytet </span>
        <div class="comments col col-lg-2 ">
          <b-icon
            font-scale="1.5"
            icon="chat-text"
            class="comments__icon " />
          <b-badge
            variant="warning"
            class="comments__badge">
            <span class="dot"> {{ getCommentsNumber || 0 }}</span>
          </b-badge>
        </div>
      </router-link>
      <div class="todo-buttons-actions d-flex align-items-center ml-3 ">
        <b-icon
          v-b-tooltip="'Usuń zadanie!'"
          font-scale="1.5"
          icon="trash"
          style="color:red"
          @click="removeTask()" />
      </div>
    </div>
  </b-container>
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
.todo-wrapper {
    padding: .5rem 1rem;
    align-items: center;
    text-align: left;
    &:hover {
      background-color: #e7e7e7;
      cursor: pointer;
}}

.todo-item {
  color: #4d4d4d;
  text-decoration: none;
}
  .done {
  opacity: 0.7;
  text-decoration: line-through;
}
.comments {
  &__icon {
    position: absolute
  }
  &__badge {
    position: relative;
    left: 15px;
    top: -15px;
    border-radius: 50%; }
}

</style>