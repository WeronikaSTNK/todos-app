<template>
  <div id="app">
    <b-navbar type="dark" variant="info">
      <b-navbar-brand href="/">Todo's</b-navbar-brand>
      <div class="navbar p-1 w-100 d-flex justify-content-center">
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