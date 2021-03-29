<template>
  <div id="app">
    <b-navbar
      type="dark">
      <b-navbar-brand
        href="/"
        class="ml-5 mt-3">
        Todo's List
      </b-navbar-brand>
      <div class="navbar p-1 w-100 d-flex justify-content-center" />
    </b-navbar>
    <router-view />
  </div>
</template>

<style lang="scss">
.navbar {
  color: white;
}
</style>