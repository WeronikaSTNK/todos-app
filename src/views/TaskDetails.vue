<template>
  <b-container class="container bg-light card mt-5 p-4">
    <a
      href="/"
      class="go-back-btn">
      <b-icon
        icon="arrow-left"
        class="mr-2" />Wróć do listy zadań
    </a>
    <b-form
      @submit="saveTask"
      @reset="deleteTask">
      <div class="d-flex justify-content-end">
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
          id="datepicker-placeholder"
          v-model="task.deadline" 
          placeholder="Wybierz ostateczny termin wykonania"
          locale="pl"
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
      <div class="row d-flex justify-content-center mt-5">
        <b-button
          type="submit"
          pill
          variant="info">
          Zapisz zadanie
        </b-button>
      </div>
    </b-form>
    <div
      class="d-flex 
      justify-content-center 
      align-items-center
      flex-column 
      align-content-center 
      mt-5
      mb-5">
      <h5> Komentarze</h5>
      <b-input
        id="comment"
        v-model="newComment"
        autocomplete="off"
        placeholder="Pamiętaj o..."
        class="w-50"
        @keydown.enter="addComment()" />
      <b-card
        id="comments-group"
        label-for="comments"
        class="mt-5 w-50">
        <div
          v-for="comment in getComments"
          :key="comment.id"
          class="single-comment">
          <p>Dodano: {{ comment.date }}</p>
          <p class="pb-2">
            {{ comment.text }}
          </p>
        </div>
      </b-card>
    </div>
  </b-container>
</template>

<script>
import { v1 } from "uuid";
import moment from "moment";
import { mapGetters } from "vuex";

moment.locale('pl')

export default {
  data() {
    return {
      task: this.getTask(),
      priorities: this.$store.state.priorities,
      newComment: null,
      modalShow: false
    };
  },

  computed: {
    ...mapGetters(["getCommentsByTaskId"]),
    getComments() {
      return this.getCommentsByTaskId(this.task.id);
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
    
      const comment = {
        id: v1(),
        taskId: this.task.id,
        date: moment().format("LLL"),
        text: this.newComment
      }

      this.$store.dispatch("addComment", comment)
      this.newComment = ""
    }
  },
};
</script>
<style lang="scss">
label {
font-size: 0.9em;
}
.single-comment :first-child {
  font-size: 0.8em;
  opacity: 0.8
}
.go-back-btn{
text-decoration: none;
color: inherit;
padding: 5px;
color: #0d8ca0;
font-weight: bold;
}
</style>