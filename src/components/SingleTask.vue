<template>
  <div class="row align-items-center d-flex">
    <h3 class="col">{{ task.title }}</h3>
    <p>{{ task.description }}</p>
    <button>Usuń</button>
    <button>Edytuj</button>
  </div>
</template>

<script>
export default {
  name: "SingleTask",
  props: {},
  computed: {
    task() {
      return this.$store.state.tasks;
    },
  },
};
</script>

<style>
</style>