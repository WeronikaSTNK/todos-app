<template>
  <div id="app">
    <b-navbar type="dark" variant="info">
      <b-navbar-brand href="/">Todo's</b-navbar-brand>
      <div class="navbar p-1 w-100 d-flex justify-content-center">
      <router-link to="/" class="m-2">Lista zadań</router-link> |
      <router-link to="/about" class="m-2">O mnie</router-link>
      </div>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a{
  text-decoration: none;
  color: white
}
.navbar{
  color: white;
}
</style>