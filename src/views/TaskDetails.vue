<template>
  <b-container class="container bg-light card mt-5 pt-3">
    <b-form
      @submit="saveTask"
      @reset="deleteTask">
      <b-form-group
        id="title-group"
        label="Tytuł:"
        label-for="title">
        <b-form-input
          id="title"
          v-model="task.title"
          type="text"
          placeholder="Zrobić kawę"
          required />
      </b-form-group>

      <b-form-group
        id="description-group"
        label="Opis:"
        label-for="description">
        <b-form-input
          id="description"
          v-model="task.description"
          type="text"
          placeholder="Należy jak najszybciej przygotować kawę." />
      </b-form-group>

      <b-form-group
        id="deadline-group"
        label="Termin wykonania:"
        label-for="deadline">
        <b-form-datepicker
          id="deadline"
          v-model="task.deadline"
          class="mb-2" />
      </b-form-group>

      <b-form-group
        id="completed-group"
        label="Zakończ zadanie:"
        class="d-flex"
        label-for="completed">
        <b-form-checkbox
          id="completed"
          v-model="task.completed"
          class="ml-3" />
      </b-form-group>

      <b-form-group
        id="priority-group"
        label="Priorytet:"
        label-for="priority">
        <b-form-select
          id="priority"
          v-model="task.priority"
          :options="priorities"
          required />
      </b-form-group>

      <div class="row d-flex justify-content-between ml-3 mr-3 mt-5">
        <b-button
          type="submit"
          pill
          variant="primary"
          class="">
          Zapisz zadanie
        </b-button>
        <b-button
          type="reset"
          pill
          variant="danger"
          class="mr-2 ml-2">
          <b-icon
            v-b-tooltip.hover
            title="Usuń zadanie"
            icon="trash"
            size="lg" />
        </b-button>
      </div>
    </b-form>

    <b-form-group
      id="comments-group"
      label="Komentarze:"
      label-for="comments">
      <div
        v-for="comment in getComments"
        :key="comment.id">
        <p>{{ comment.date }}</p>
        <p>{{ comment.text }}</p>
      </div>
      <b-form-input
        id="comment"
        v-model="newComment"
        @keydown.enter="addComment()" />
    </b-form-group>
  </b-container>
</template>

<script>
import { v1 } from "uuid";
import moment from "moment";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      task: this.getTask(),
      priorities: this.$store.state.priorities,
      newComment: null
    };
  },

  computed: {
    ...mapGetters(["getCommentsByTaskId"]),
    getComments() {
      return this.getCommentsByTaskId(this.$route.params.id);
    },
  },

  methods: {
    getTask() {
      if (this.isNewTask()) {
        return {
          id: v1(),
          title: null,
          description: null,
          deadline: null,
          completed: false,
          priority: "Normal",
        };
      } else {
        return this.$store.getters.getTaskById(this.$route.params.id);
      }
    },

    saveTask(event) {
      console.log('save task')
      event.preventDefault();
      if (this.isNewTask()) {
        this.$store.dispatch("createNewTask", this.task);
        this.$router.push("/");
      } else {
        this.$store.dispatch("updateTask", this.task);
        this.$router.push("/");
      }
    },

    deleteTask(event) {
      event.preventDefault();
      this.$store.dispatch("deleteTask", this.task.id);
      this.$router.push("/");
    },

    isNewTask() {
      return this.$route.params.id === undefined;
    },

    addComment() {
      if (!this.newComment || !this.newComment.length || this.newComment.length < 1) {
        return
      }

      console.log("add coment")
      const comment = {
        id: v1(),
        taskId: this.task.id,
        date: moment().format("MMM D"),
        text: this.newComment
      }

      this.$store.dispatch("addComment", comment)
    }
  },
};
</script>
<style lang="scss">
label {
font-size: 0.9em;
}
</style>