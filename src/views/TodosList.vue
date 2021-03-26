<template>
<b-container class="container bg-light card mt-5">
    <b-card v-if="isEmpty" class="row bg-light pt-1 rounded-0">
      <div class="row d-flex justify-content-around">
            <span class="badge badge-secondary p-2 mb-3">Twoja lista zadań jest pusta</span>
        </div>
  </b-card>
  <b-card v-else class="row bg-light rounded-0">
    <!-- TODO: add counting--> 
      <div class="row d-flex justify-content-around">
            <span class="badge badge-info p-2 ">Wszystkie zadania: </span>
            <span class="badge badge-success p-2 ">Zakończone: </span>
            <span class="badge badge-warning p-2 "> W trakcie: </span>
        </div>
  </b-card>
  <div class="mt-3">
   <Input />
   <!-- <List /> -->
</div>
  <!-- <Tasks v-if="!isEmpty" />     -->
</b-container>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Input from '../components/Input'
export default {
  name: '',
  components: {
    Input
  },
computed: {
    ...mapGetters({
        'tasks': 'getTasks',
      }),
    isEmpty() {
        return this.tasks.length === 0;
      },
  },
  }
</script>
<style lang="scss">
.container{
  height: 80vh;
  width: auto;
}
</style>