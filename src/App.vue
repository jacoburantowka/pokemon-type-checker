<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import TypesTableView from "./views/TypesTableView.vue";
</script>

<template>
  <div class="main-container">
    <header>
      <div class="wrapper">
        <HelloWorld msg="Pokemon Type Checker" />

        <nav class="flex flex-col lg:items-start">
          <RouterLink to="/poke">Search for Pokemon</RouterLink>
          <RouterLink to="/type">Search for Type</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
  <TypesTableView class="hidden xl:block" />
  <footer class="mt-8 px-8 text-center">
    Written in <a href="https://vuejs.org/" class="text-green-500">Vue3</a>.
    Styling done using
    <a href="https://tailwindcss.com/" class="text-sky-500">TailwindCSS</a>. Big
    thanks to the
    <a href="https://pokeapi.co/" class="text-orange-500">PokeAPI</a> team and
    contributors.
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

@media (min-width: 1024px) {
  .main-container {
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}
</style>
