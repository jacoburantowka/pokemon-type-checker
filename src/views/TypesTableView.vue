<template>
  <table>
    <thead>
      <tr>
        <th>Types</th>
        <th v-for="(type, idx) in types" :key="type" class="w-16">{{ idx }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(type, idx) in types" :key="type">
        <th class="w-16">{{ idx }}</th>
        <td v-for="dmg in type" :key="dmg" class="text-center">{{ dmg }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { types } from "../assets/pokeTypes";
</script>

<style scoped>
table {
  overflow: hidden;
}

tr:hover {
  background-color: #69fd88;
}

td,
th {
  position: relative;
}
td:hover::after,
th:hover::after {
  content: "";
  position: absolute;
  background-color: #69fd88;
  left: 0;
  top: -5000px;
  height: 10000px;
  width: 100%;
  z-index: -1;
}

td:hover {
  background-color: #46a458;
}
</style>
