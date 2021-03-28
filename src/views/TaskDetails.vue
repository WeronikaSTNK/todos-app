<template>
  <b-container class="container bg-light card mt-5 pt-3">
      <b-form @submit="saveTask" @reset="deleteTask">
        <b-form-group
          id="title-group"
          label="Tytuł:"
          label-for="title"
        >
          <b-form-input
            id="title"
            v-model="task.title"
            type="text"
            placeholder="Zrobić kawę"
            required
          />
        </b-form-group>

        <b-form-group
          id="description-group"
          label="Opis:"
          label-for="description"
        >
          <b-form-input
            id="description"
            v-model="task.description"
            type="text"
            placeholder="Należy jak najszybciej przygotować kawę."
          />
        </b-form-group>

        <b-form-group
          id="deadline-group"
          label="Termin wykonania:"
          label-for="deadline"
        >
          <b-form-datepicker id="deadline" v-model="task.deadline" class="mb-2"/>
        </b-form-group>

        <b-form-group
          id="completed-group"
          label="Ukończone:"
          label-for="completed"
        >
          <b-form-checkbox
            id="completed"
            v-model="task.completed"
          />
        </b-form-group>

        <b-form-group
          id="priority-group"
          label="Priorytet:"
          label-for="priority"
        >
          <b-form-select
            id="priority"
            v-model="task.priority"
            :options="priorities"
            required
          />
        </b-form-group>

        <b-button type="submit" pill variant="primary" class="mr-2 ml-2">Zapisz zadanie</b-button>
        <b-button type="reset" pill variant="danger" class="mr-2 ml-2">Usuń zadanie</b-button>
      </b-form>
  </b-container>
</template>

<script>
import { v1 } from "uuid";

    export default {
        data() {
            return {
                task: this.getTask(),
                priorities: this.$store.state.priorities
            }
        },
        methods: {
            getTask(){
                if(this.isNewTask()){
                    return {
                        id: v1(),
                        title: null,
                        description: null,
                        deadline: null,
                        state: null,
                        priority: "Normal"
                    }
                }
                else{
                    return this.$store.getters.getTaskById(this.$route.params.id)
                }
            },
            saveTask(event){
                event.preventDefault();
                if(this.isNewTask()){
                    this.$store.dispatch('createNewTask', this.task)
                    this.$router.push('/')
                }
                else{
                    this.$store.dispatch('updateTask', this.task)
                    this.$router.push('/')
                }
            },
            deleteTask(event){
                event.preventDefault()
                this.$store.dispatch('deleteTask', this.task.id)
                this.$router.push('/')
            },
            isNewTask(){
                return this.$route.params.id===undefined;
            }
        }
    }
</script>