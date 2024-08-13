<template>
  <div class="app-container">
    <header>
      <AppHeader />
    </header>

    <main>
      <router-view></router-view>
    </main>
      
    <footer >
      <AppFooter />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: 20px;
}

footer {
  background-color: #f1f1f1;
  padding: 20px;
  text-align: center;
}
</style>
