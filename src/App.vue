<template>
  <div id="app">
    <b-navbar type="dark" variant="info">
      <b-navbar-brand href="/">Todo's</b-navbar-brand>
      <div class="navbar p-1 w-100 d-flex justify-content-center">
      <router-link to="/" class="m-2">Moje zadania</router-link> |
      <router-link to="/about" class="m-2">O mnie</router-link>
      </div>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style lang="scss">

.router-links, .router-links-active {
  text-decoration: none;
  color: white;
  &:hover{
    color: white;
    text-decoration: none;
  }
}

.navbar{
  color: white;
}
</style>